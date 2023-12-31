(function(window){

	// Defaults
	var SERVER = "wss://revapi.reverieinc.com/stream";
	// Send blocks 4 x per second as recommended in the server doc.
	var INTERVAL = 250;
	var RECORDER_WORKER_PATH = 'recorderWorker.js';

	// Error codes (mostly following Android error names and codes)
	var ERR_NETWORK = 2;
	var ERR_AUDIO = 3;
	var ERR_SERVER = 4;
	var ERR_CLIENT = 5;

	// Event codes
	var MSG_WAITING_MICROPHONE = 1;
	var MSG_MEDIA_STREAM_CREATED = 2;
	var MSG_INIT_RECORDER = 3;
	var MSG_RECORDING = 4;
	var MSG_SEND = 5;
	var MSG_SEND_EMPTY = 6;
	var MSG_SEND_EOS = 7;
	var MSG_WEB_SOCKET = 8;
	var MSG_WEB_SOCKET_OPEN = 9;
	var MSG_WEB_SOCKET_CLOSE = 10;
	var MSG_STOP = 11;
	var MSG_SERVER_CHANGED = 12;

	var Dictate = function(cfg) {
		var config = cfg || {};
		config.server = config.server || SERVER;
		config.audioSourceId = config.audioSourceId;
		config.interval = config.interval || INTERVAL;
		config.recorderWorkerPath = config.recorderWorkerPath || RECORDER_WORKER_PATH;
		config.onReadyForSpeech = config.onReadyForSpeech || function() {};
		config.onEndOfSpeech = config.onEndOfSpeech || function() {};
		config.onResults = config.onResults || function(data) {};
		config.onPartialResults = config.onPartialResults || function(data) {};
		config.onEndOfSession = config.onEndOfSession || function() {};
		config.onEvent = config.onEvent || function(e, data) {};
		config.onError = config.onError || function(e, data) {};
		config.rafCallback = config.rafCallback || function(time) {};

		// Initialized by init()
		var audioContext;
		var recorder;
		// Initialized by startListening()
		var ws;
		var intervalKey;
		var paused = false;

		// Returns the configuration
		this.getConfig = function() {
			return config;
		}

		// Set up the recorder (incl. asking permission)
		// Initializes audioContext
		// Can be called multiple times.
		// TODO: call something on success (MSG_INIT_RECORDER is currently called)
		this.init = function() {
			var audioSourceConstraints = {};
			config.onEvent(MSG_WAITING_MICROPHONE, "Waiting for approval to access your microphone ...");
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
				window.URL = window.URL || window.webkitURL;
				audioContext = new AudioContext();
			} catch (e) {
				// Firefox 24: TypeError: AudioContext is not a constructor
				// Set media.webaudio.enabled = true (in about:config) to fix this.
				config.onError(ERR_CLIENT, "Error initializing Web Audio browser: " + e);
			}

			if (navigator.getUserMedia) {
				if(config.audioSourceId) {
					audioSourceConstraints.audio = {
						optional: [{ sourceId: config.audioSourceId }]
					};
				} else {
					audioSourceConstraints.audio = true;
				}
				navigator.getUserMedia(audioSourceConstraints, startUserMedia, function(e) {
					config.onError(ERR_CLIENT, "No live audio input in this browser: " + e);
				});
			} else {
				config.onError(ERR_CLIENT, "No user media support");
			}
		}

		// Start recording and transcribing
		this.startListening = function() {
			if (! recorder) {
				config.onError(ERR_AUDIO, "Recorder undefined");
				return;
			}

			if (ws) {
				cancel();
			}

			try {
				ws = createWebSocket();
			} catch (e) {
				config.onError(ERR_CLIENT, "No web socket support in this browser!");
			}
		}

		// Stop listening, i.e. recording and sending of new input.
		this.stopListening = function() {
			// Stop the regular sending of audio
			clearInterval(intervalKey);
			// Stop recording
			if (recorder) {
				recorder.stop();
				config.onEvent(MSG_STOP, 'Stopped recording');
				// Push the remaining audio to the server
				recorder.export16kMono(function(blob) {
					socketSend(blob);
					recorder.clear();
				}, 'audio/x-raw');
				config.onEndOfSpeech();
			} else {
				config.onError(ERR_AUDIO, "Recorder undefined");
			}
		}

		this.pause = function() {
			paused = true;
		}

		this.resume = function() {
			paused = false;
		}

		this.isRunning = function () {
			return ws != null;
		}

		// Cancel everything without waiting on the server
		this.cancel = function() {
			// Stop the regular sending of audio (if present)
			clearInterval(intervalKey);
			if (recorder) {
				recorder.stop();
				recorder.clear();
				config.onEvent(MSG_STOP, 'Stopped recording');
			}
			if (ws) {
				ws.close();
				ws = null;
			}
		}

		// Sets the URL of the speech server
		this.setServer = function(server) {
			config.server = server;
			config.onEvent(MSG_SERVER_CHANGED, 'Server changed: ' + server);
		}

		// Private methods
		function startUserMedia(stream) {
			var input = audioContext.createMediaStreamSource(stream);
			config.onEvent(MSG_MEDIA_STREAM_CREATED, 'Media stream created');
                        //Firefox loses the audio input stream every five seconds
                        // To fix added the input to window.source
                        window.source = input;
                        
			// make the analyser available in window context
			window.userSpeechAnalyser = audioContext.createAnalyser();
			input.connect(window.userSpeechAnalyser);

			config.rafCallback();

			recorder = new Recorder(input, { workerPath : config.recorderWorkerPath });
			config.onEvent(MSG_INIT_RECORDER, 'Recorder initialized');
		}

		function socketSend(item) {
			if (paused)
			    return;
			if (ws) {
				var state = ws.readyState;
				if (state == 1) {
					// If item is an audio blob
					if (item instanceof Blob) {
						if (item.size > 0) {
							ws.send(item);
							config.onEvent(MSG_SEND, 'Send: blob: ' + item.type + ', ' + item.size);
						} else {
							config.onEvent(MSG_SEND_EMPTY, 'Send: blob: ' + item.type + ', EMPTY');
						}
					// Otherwise it's the EOS tag (string)
					} else {
						ws.send(item);
						config.onEvent(MSG_SEND_EOS, 'Send tag: ' + item);
					}
				} else {
					config.onError(ERR_NETWORK, 'WebSocket: readyState!=1: ' + state + ": failed to send: " + item);
				}
			} else {
				config.onError(ERR_CLIENT, 'No web socket connection: failed to send: ' + item);
			}
		}


		function createWebSocket() {
			// TODO: do we need to use a protocol?
			//var ws = new WebSocket("ws://127.0.0.1:8081", "echo-protocol");
			var url = config.server
			var ws = new WebSocket(url);

			ws.onmessage = function(e) {
				var data = e.data;
				config.onEvent(MSG_WEB_SOCKET, data);
				if (data instanceof Object && ! (data instanceof Blob)) {
					config.onError(ERR_SERVER, 'WebSocket: onEvent: got Object that is not a Blob');
				} else if (data instanceof Blob) {
					config.onError(ERR_SERVER, 'WebSocket: got Blob');
				} else {
					var res = JSON.parse(data);
					if(res.final){
						config.onResults(res.display_text);
					}
					else{
						config.onPartialResults(res.display_text);
					}
				}
			}

			// Start recording only if the socket becomes open
			ws.onopen = function(e) {
				intervalKey = setInterval(function() {
					recorder.exportMono(function(blob) {
						socketSend(blob);
						recorder.clear();
					}, 'audio/x-raw');
				}, config.interval);
				// Start recording
				recorder.record();
				config.onReadyForSpeech();
				config.onEvent(MSG_WEB_SOCKET_OPEN, e);
			};

			// This can happen if the blob was too big
			// E.g. "Frame size of 65580 bytes exceeds maximum accepted frame size"
			// Status codes
			// http://tools.ietf.org/html/rfc6455#section-7.4.1
			// 1005:
			// 1006:
			ws.onclose = function(e) {
				var code = e.code;
				var reason = e.reason;
				var wasClean = e.wasClean;
				// The server closes the connection (only?)
				// when its endpointer triggers.
				config.onEndOfSession();
				config.onEvent(MSG_WEB_SOCKET_CLOSE, e.code + "/" + e.reason + "/" + e.wasClean);
			};

			ws.onerror = function(e) {
				var data = e.data;
				config.onError(ERR_NETWORK, data);
			}

			return ws;
		}

	};

	window.Dictate = Dictate;

})(window);
