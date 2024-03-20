var panorama,
  viewer,
  mixer,
  action_idle,
  action_namaste,
  action_talk,
  clock,
  pointlight,
  hemiLight,
  data,
  recorder,
  gltfscene,
  modelID,
  audioSource,
  numeric;
var mixer1;
var mixer2, gltfscene2, action_loan_idle, action_loan_talk;
var CARDBOARD_MODE = false;
var language_list;
var isCallbackCalled = false;
let accNum, loanID;
$(window).on("load", async function () {
  $(".loader-wrapper").fadeOut("slow");
  fetchlanguageJSON();

  // Find the buttons by their IDs
  const button1 = $("#button1");
  const button2 = $("#button2");

  // Disable the buttons initially
  button1.prop("disabled", true);
  button2.prop("disabled", true);

  // Add event listeners to the buttons
  button1.on("click", bankStart);
  button2.on("click", bankStart);

  // Delay in milliseconds before enabling the buttons
  const buttonEnableDelay = 6000; // Adjust the delay as needed

  // Enable the buttons after the specified delay
  setTimeout(() => {
    button1.prop("disabled", false);
    button2.prop("disabled", false);
  }, buttonEnableDelay);
});

let cname,
  clanguage,
  accNum1,
  loanamout,
  pendingamount,
  EMIamount,
  duedate,
  cinstatus,
  Lastpaiddate,
  nextemidate,
  Totalpaidemi,
  Outstanding,
  Preclosureamt,
  Centermangcontactno,
  Branchmgrname,
  Branchmgrcontactno,
  applicant_id,
  user_id,
  request_id,
  dname,
  DBranchmgrname,
  pemi;

const decryptionAES = (decryptStr) => {
  // Decrypt
  const bytes = CryptoJS.AES.decrypt(decryptStr, "1234567890123456");
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
};

function decryptFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedEncryptedURLParam = urlParams.get("data");
  //console.log(encodedEncryptedURLParam);
  let newString = encodedEncryptedURLParam.replaceAll(" ", "+");
  console.log("Final Url ---- " + newString);

  const encryptedURLParam = decodeURIComponent(newString);
  //console.log(encryptedURLParam);

  if (encryptedURLParam) {
    const decryptedURL = decryptionAES(encryptedURLParam);
    console.log("Decrypted URL ----- ", decryptedURL);

    // Extract values from decrypted URL
    const params = new URLSearchParams(decryptedURL);
    dname = params.get("name");

    function standardizeString(inputString) {
      // Split the string into an array of words
      const words = inputString.split(" ");

      // Capitalize the first letter of each word
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );

      // Join the words back into a single string
      const standardizedString = capitalizedWords.join(" ");

      return standardizedString;
    }

    // Example usage:

    cname = standardizeString(dname);
    console.log(cname); // Output: Minal

    //console.log("Name:", cname);
    //clanguage = params.get("clanguage");
    clanguage = "hindi";
    //console.log("Language:", clanguage);
    accNum = params.get("accnum");
    //console.log("Account Number:", accNum);
    loanID = params.get("loanno");
    //accNum = accNum1.slice(-4);
    //console.log("Last Four Digits:", accNum);
    loanamout = params.get("loanamout");
    //console.log("Loan Amount:", loanamout);
    pendingamount = params.get("pendingamount");
    //console.log("Pending Amount:", pendingamount);
    EMIamount = params.get("EMIamount");
    //console.log("EMI Amount:", EMIamount);
    duedate = params.get("duedate");
    //console.log("Due Date:", duedate);
    pemi = params.get("pemi");
    //console.log("PEMI:", pemi);
    Lastpaiddate = params.get("Lastpaiddate");
    //console.log("LPD:", Lastpaiddate);
    cinstatus = params.get("cinstatus");
    //console.log("CIN Status:", cinstatus);
    nextemidate = params.get("nextemidate");
    //console.log("nextemidate", nextemidate);
    Totalpaidemi = params.get("Totalpaidemi");
    //console.log("Totalpaidemi--", Totalpaidemi);
    Outstanding = params.get("Outstanding");
    //console.log("Outstanding --", Outstanding);
    Preclosureamt = params.get("Preclosureamt");
    //console.log("Preclosureamt--", Preclosureamt);
    Centermangcontactno = params.get("Centermangcontactno");
    //console.log("Centermangcontactno ---", Centermangcontactno);
    DBranchmgrname = params.get("Branchmgrname");

    Branchmgrname = standardizeString(DBranchmgrname);
    console.log(Branchmgrname);

    //console.log("Branchmgrname--", Branchmgrname);
    Branchmgrcontactno = params.get("Branchmgrcontactno");
    //console.log("Branchmgrcontactno--", Branchmgrcontactno);
    applicant_id1 = params.get("applicant_id");
    //console.log("applicant_id--", applicant_id);
    user_id1 = params.get("user_id");
    //console.log("user_id--", user_id);
  } else {
    console.log("No encrypted data found in URL.");
  }
}

decryptFromURL();
//--------------------------------end of url-------------------------------

async function fetchlanguageJSON() {
  const response = await fetch("language.json");
  language_list = await response.json();
  return language_list;
}
fetchlanguageJSON().then((language_list) => {
  data = language_list["language"][0][clanguage]["data"];
  data1 = language_list["language"][0][clanguage]["data1"];
  data2 = language_list["language"][0][clanguage]["data2"];
  //console.log(data);
});

var noSleep = new NoSleep();
function vrMode() {
  viewer.setCameraFov(110);
  noSleep.enable();
  document.getElementById("modal").style.display = "none";
  start();
  var myAudio1 = document.createElement("audio");
  myAudio1.src = "audio/bank.mp3";

  //  myAudio1.play();

  action_idle.play();

  viewer.enableEffect(PANOLENS.MODES.CARDBOARD);
  viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION);
  CARDBOARD_MODE = true;
  setTimeout(bankStart1, 5000);
}
async function start() {
  await document.body.requestFullscreen();
}
function bankStart1() {
  noSleep.enable();

  start();
  document.getElementById("modal").style.display = "none";

  var myAudio1 = document.createElement("audio");
  myAudio1.src = "audio/bank.mp3";
  action_idle.play();

  setTimeout(() => {
    viewer.tweenControlCenter(new THREE.Vector3(-545, 200, -5000), 300);
    if (CARDBOARD_MODE == true) viewer.setCameraFov(110);
    else viewer.setCameraFov(90);
    readCustomerInfo();
  }, 300);
}

//----------------------------Main-----------------------------
function bankStart() {
  document.getElementById("modal").style.display = "none";
  let counter1 = 0;
  //viewer.tweenControlCenter(new THREE.Vector3(-5, -1000, -5000.0), 300);
  $(document).ready(function () {
    var messages, lang, message1, message2;
    if (clanguage == "hindi") {
      lang = "hi";
      modelID = "6";
      numeric = "hcurrency";
      audioSource = "audio/Hindi_Audio.mp3";
      message1 = [
        data1[0] + "" + accNum,
        data1[1] + "" + loanamout,
        data1[2] + "" + pendingamount,
        data1[3] + "" + EMIamount,
        data1[4] + "" + duedate,
        data1[5] + "" + pemi,
        data1[6] + "" + cinstatus,
        data1[7] + "" + Lastpaiddate,
        data1[8] + "" + nextemidate,
        data1[9] + "" + Totalpaidemi,
        data1[10] + "" + Outstanding,
        data1[11] + "" + Preclosureamt,
      ];
      //console.log("message1---", message1);
      message2 = [
        data1[12] + "" + Centermangcontactno,
        data1[13] + "" + Branchmgrname,
        data1[14] + "" + Branchmgrcontactno,
      ];
      //console.log("Message2 ---- ", message2);
    } else {
      lang = "en";
      modelID = "5";
      numeric = "currency";
      audioSource = "audio/English_Audio.mp3";
      message1 = [
        data2[0] + "" + accNum,
        data2[1] + "" + loanamout,
        data2[2] + "" + pendingamount,
        data2[3] + "" + EMIamount,
        data2[4] + "" + duedate,
        data2[5] + "" + pemi,
        data2[6] + "" + cinstatus,
        data2[7] + "" + Lastpaiddate,
        data2[8] + "" + nextemidate,
        data2[9] + "" + Totalpaidemi,
        data2[10] + "" + Outstanding,
        data2[11] + "" + Preclosureamt,
      ];
      message2 = [
        data2[12] + "" + Centermangcontactno,
        data2[13] + "" + Branchmgrname,
        data2[14] + "" + Branchmgrcontactno,
      ];
    }
    setTimeout(function () {
      action_talk.play();
    }, 2000);

    messages = [
      data[0] + " " + cname,
      data[1] + " " + accNum,
      data[2] + " " + loanID,
      data[3] + " " + loanamout + " " + data[15],
      data[4] + " " + pendingamount + " " + data[15],
      data[5] + " " + EMIamount + " " + data[15],
      data[6] + " " + duedate,
      data[7] + " " + pemi,
      data[8] + " " + cinstatus,
      data[9] + " " + Lastpaiddate,
      data[10] + " " + nextemidate,
      data[11] + " " + Totalpaidemi,
      data[12] + " " + Outstanding + " " + data[15],
      data[13] + " " + Preclosureamt + " " + data[15],
      data[16] + " " + Centermangcontactno,
      data[17] + " " + Branchmgrname,
      data[18] + " " + Branchmgrcontactno,
      data[14],
    ];

    async function startRecording() {
      action_talk.stop();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          sampleRate: 16000,
          channelCount: 1,
        },
      });
      const audioContext = new AudioContext({ sampleRate: 16000 });
      const input = audioContext.createMediaStreamSource(stream);

      recorder = new Recorder(input, { numChannels: 1 });
      recorder.record();
    }

    async function stopRecordingAndTranscribe() {
      if (recorder && recorder.state !== "inactive") {
        recorder.stop();
        recorder.exportWAV(async (wavBlob) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "https://asr-api.vspeech.ai/api/asr/v1", true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                const response = xhr.responseText;
                console.log("Response:", response);

                displayResponse(response);
              } else {
                console.error("Request failed:", xhr.statusText);
              }
            }
          };

          const formData = new FormData();
          formData.append("audio_base64", wavBlob);

          const metadata = {
            ID: "test-1212",
            modelID: modelID,
            mode: "dev",
            command: "transcribe",
            userID: "Se343Dd3SDvoqTSd32df34",
          };
          formData.append("metadata", JSON.stringify(metadata));

          xhr.send(formData);
        });
      }
    }

    function playAudio(text, callback) {
      const audioElement = document.getElementById("audioPlayer");

      const api_key = "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1";
      const action = "play";

      const samplerate = "8000";
      const ver = "2";
      const lang = "hi";
      const encodedText = encodeURIComponent(text);
      //console.log(text);
      //console.log(encodedText);
      //console.log("Languange set ----- ", lang);
      const url = `https://tts.indiantts.in/tts?text=${encodedText}&api_key=${api_key}&action=${action}&numeric=${numeric}&lang=${lang}&samplerate=${samplerate}&ver=${ver}`;

      audioElement.src = url;

      // Play the audio
      audioElement.play().catch(function (error) {
        console.error("Error playing audio:", error);
      });

      // Listen for the 'ended' event of the audio element
      audioElement.addEventListener("ended", function () {
        // Call the provided callback function once audio playback has ended
        if (!isCallbackCalled) {
          callback();
        }
      });
    }

    function displayResponse(response) {
      const responseObject = JSON.parse(response);

      if (
        responseObject.status === "success" &&
        responseObject.alternatives.length > 0
      ) {
        const transcript = responseObject.alternatives[0].transcript;
        console.log("Generated Text ----- ", transcript);
        const encryptionAES = (encryptStr) => {
          // Encrypt
          const ciphertext = CryptoJS.AES.encrypt(
            encryptStr,
            "1234567890123456"
          );
          // console.log(ciphertext);
          return ciphertext.toString();
        };

        function encrypt1(input) {
          return encryptionAES(input);
        }

        const applicant_id = encrypt1(applicant_id1);
        const user_pin = encrypt1(user_id1);
        const response = encrypt1(transcript);

        const requestApiUrl = "https://metawebapp.azurewebsites.net/request";
        const requestPayload = {
          applicant_id: applicant_id,
          user_pin: user_pin,
        };

        fetch(requestApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestPayload),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Request API Response:", data);
            //console.log("Request_ID----", data.request_id);
            request_id = data.request_id;
            // Now, you can make the second API call
            callResponseApi();
          })
          .catch((error) => {
            console.error("Error during Request API call:", error);
          });

        // Second API call to https://metawebapp.azurewebsites.net/response
        function callResponseApi() {
          const responseApiUrl =
            "https://metawebapp.azurewebsites.net/response";
          console.log("Request ID in response call", request_id);
          const responsePayload = {
            request_id: request_id,
            applicant_id: applicant_id, // Long
            user_pin: user_pin, // aplha numeric
            response: response, // apha numeric
          };
          //console.log("Response ---- ", responsePayload);
          fetch(responseApiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(responsePayload),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              console.log("Response API Response:", data);
            })
            .catch((error) => {
              console.error("Error during Response API call:", error);
            });
        }
      } else {
        const audioElement1 = document.getElementById("audioPlayer");
        //console.log(clanguage);
        if (clanguage == "hindi") {
          audioElement1.src = "audio/Hindi_ShrInd.mp3";
        } else {
          audioElement1.src = "audio/English_ShrInd.mp3";
        }
        audioElement1.play().catch(function (error) {
          console.error("Error playing audio1:", error);
        });

        // Optionally, you can add a callback to perform actions after audio1 finishes playing
        audioElement1.addEventListener("ended", function () {
          // Callback function for actions after audio1 finishes playing
        });
        // alert("Transcription not available or empty.");
      }
    }

    function playAudioAfterRecordingAndTranscribe() {
      const audioElement = document.getElementById("audioPlayer");

      if (!audioElement) {
        console.error("Audio player element not found.");
        return;
      }

      audioElement.src = audioSource;

      // Attempt to play the audio
      audioElement
        .play()
        .then(() => {
          action_talk.play();
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });

      audioElement.onended = () => {
        action_talk.stop();
        console.log("Audio playback has ended.");
      };
    }

    // Your text content
    var text1 = message1.join(".");
    var text2 = message2.join(".");

    var text1 = message1.join(".");
    var text2 = message2.join(".");

    // Use a regular expression to split the text based on periods not surrounded by digits
    const sentences = text1.split(/\.(?!\d)/);
    const textContainer = document.getElementById("dynamicText");

    function formatAccountNumberForSpeech(accountNumber) {
      return accountNumber.toString().split("").join(" ");
    }

    function formatLoanIDForSpeech(LoanID) {
      return LoanID.toString().split("").join(" ");
    }

    function formatCentermangcontactno(Centermangcontactno) {
      return Centermangcontactno.toString().split("").join(" ");
    }

    function formatBranchmgrcontactno(Branchmgrcontactno) {
      return Branchmgrcontactno.toString().split("").join(" ");
    }
    // Global control flags
    let isPaused = false;
    let shouldRestart = false;

    function pauseNarration() {
      action_talk.stop();
      isPaused = true;
      shouldRestart = false; // Reset restart flag to prevent restarting after pause
      const audioElement = document.getElementById("audioPlayer");
      audioPlaybackPosition = audioElement.currentTime; // Store the current playback position
      audioElement.pause(); // Pause the ongoing audio immediately
    }

    function restartNarration() {
      action_talk.play();
      shouldRestart = true;
      isPaused = false; // Ensure narration resumes after restart
      displaySentences(0); // Start or resume the narration from the beginning
    }

    function playNarration() {
      if (isPaused) {
        const audioElement = document.getElementById("audioPlayer");
        audioElement.play(); // Resume playback
        isPaused = false;
        action_talk.play();
      }
    }

    async function displaySentences(index) {
      async function processNextSentence() {
        const textContainer = document.getElementById("dynamicText");

        for (let index = 0; index < messages.length; index++) {
          let text = messages[index] + ".";
          let speechAccNum = formatAccountNumberForSpeech(accNum);
          let speechLoanID = formatLoanIDForSpeech(loanID);
          let speechBranchmgrcontactno =
            formatBranchmgrcontactno(Branchmgrcontactno);
          let speechCentermangcontactno =
            formatCentermangcontactno(Centermangcontactno);
          //console.log(speechLoanID);

          if (text.includes(accNum)) {
            let textForSpeech = text.replace(accNum, speechAccNum);
            //console.log("----------", textForSpeech);
            textContainer.textContent = text;

            try {
              await playAudioPromise(textForSpeech);
            } catch (error) {
              console.error("Error playing audio:", error);
            }
          } else if (text.includes(loanID)) {
            let textForSpeech = text.replace(loanID, speechLoanID);
            //console.log("------------", textForSpeech);
            textContainer.textContent = text;

            try {
              await playAudioPromise(textForSpeech);
            } catch (error) {
              console.error("Error playing audio:", error);
            }
          } else if (text.includes(Branchmgrcontactno)) {
            let textForSpeech = text.replace(
              Branchmgrcontactno,
              speechBranchmgrcontactno
            );
            //console.log("------------", textForSpeech);
            textContainer.textContent = text;

            try {
              await playAudioPromise(textForSpeech);
            } catch (error) {
              console.error("Error playing audio:", error);
            }
          } else if (text.includes(Centermangcontactno)) {
            let textForSpeech = text.replace(
              Centermangcontactno,
              speechCentermangcontactno
            );
            //console.log("------------", textForSpeech);
            textContainer.textContent = text;

            try {
              await playAudioPromise(textForSpeech);
            } catch (error) {
              console.error("Error playing audio:", error);
            }
          } else {
            textContainer.textContent = text;
            try {
              await playAudioPromise(text);
            } catch (error) {
              console.error("Error playing audio:", error);
            }
          }
        }
        //console.log("All sentences processed.");

        await startRecording()
          .then(() => {
            setTimeout(() => {
              stopRecordingAndTranscribe();
            }, 6000);
          })
          .then(() => {
            setTimeout(() => {
              playAudioAfterRecordingAndTranscribe();
            }, 7000);
          });

        // Add a delay between lines if needed
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Adjusted delay to a more reasonable duration
        textContainer.innerHTML = "";
        // }

        try {
          // await startRecording();
          // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate recording duration
          // await stopRecordingAndTranscribe();
          // playAudioAfterRecordingAndTranscribe();
        } catch (error) {
          console.error("Error during recording or transcription:", error);
        }
      }

      function playAudioPromise(text) {
        return new Promise((resolve, reject) => {
          playAudio(text, resolve);
        });
      }

      await processNextSentence();
    }
    document
      .getElementById("pauseButton")
      .addEventListener("click", pauseNarration);
    document
      .getElementById("restartButton")
      .addEventListener("click", restartNarration);
    document
      .getElementById("playButton")
      .addEventListener("click", playNarration);
    displaySentences(0);
  });
}

panorama = new PANOLENS.CubePanorama([
  "images/reception/px.jpg",
  "images/reception/nx.jpg",
  "images/reception/py.jpg",
  "images/reception/ny.jpg",
  "images/reception/pz.jpg",
  "images/reception/nz.jpg",
]);

clock = new THREE.Clock();
var container = document.querySelector("#container");

viewer = new PANOLENS.Viewer({ output: "console", container: container });
viewer.setCameraFov(70);

viewer.add(panorama);

viewer.setPanorama(panorama);

hemiLight = new THREE.HemisphereLight(0xb1e1ff, 0xb97a20);
var directionallight = new THREE.DirectionalLight(0xffffff, 0.5);
var ambientlight = new THREE.AmbientLight(0x404040, 0.56);
panorama.add(ambientlight);
panorama.add(directionallight);
directionallight.position.set(5, 10, 7.5);
pointlight = new THREE.PointLight(0xffd6aa, 0.8);
pointlight.position.set(0, 10, 0);
pointlight.castShadow = true;
panorama.add(pointlight);

pointlight = pointlight.clone();
pointlight.position.set(65, 0, -45);
pointlight.castShadow = true;
panorama.add(pointlight);

hemiLight.position.set(7, 10, -7);
panorama.add(hemiLight);
var loader = new THREE.GLTFLoader();

loader.load("models/bluedress.glb", function (gltf) {
  gltfscene = gltf.scene;
  gltfglobal = gltf;
  car = gltf.scene.children[0];
  gltfscene.position.set(-5, -10, -10);

  gltfscene.rotation.y = 0.2;

  gltfscene.scale.set(8, 8, 8);

  car.traverse((n) => {
    if (n.isMesh) {
      n.castShadow = true;
      n.receiveShadow = true;
    }
  });

  const clips = gltf.animations;

  mixer = new THREE.AnimationMixer(gltf.scene);
  const clip = THREE.AnimationClip.findByName(clips, "idle");
  // const clip1 = THREE.AnimationClip.findByName(
  //   clips,
  //   "DeformationSystem|body_Clip1|BaseLayer"
  // );
  const clip2 = THREE.AnimationClip.findByName(clips, "talk");

  action_idle = mixer.clipAction(clip);
  //action_namaste = mixer.clipAction(clip1);
  action_talk = mixer.clipAction(clip2);

  //action_namaste.setLoop(THREE.LoopOnce);

  panorama.add(gltfscene);
  gltfscene.visible = true;
  action_idle.play();

  animate();
});

function animate() {
  var delta = clock.getDelta();

  if (mixer) mixer.update(delta);
  if (mixer1) mixer1.update(delta);
  if (mixer2) mixer2.update(delta);

  requestAnimationFrame(animate);
}

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
    })
    .catch((err) => {
      console.log("u got an error:" + err);
    });
}
