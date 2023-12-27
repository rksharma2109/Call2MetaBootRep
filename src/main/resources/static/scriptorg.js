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

$(window).on("load", async function () {
  $(".loader-wrapper").fadeOut("slow");
  fetchlanguageJSON();
  document.getElementById("button1").addEventListener("click", bankStart);
  document.getElementById("button2").addEventListener("click", bankStart);
});

let cname,
  clanguage,
  accNum,
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
    cname = params.get("name");
    //console.log("Name:", cname);
    clanguage = params.get("clanguage");
    //console.log("Language:", clanguage);
    accNum = params.get("accnum");
    //console.log("Account Number:", accNum);
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
    Branchmgrname = params.get("Branchmgrname");
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
  viewer.tweenControlCenter(new THREE.Vector3(-5, -1000, -5000.0), 300);
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
    action_talk.play();

    messages = [
      data[0] + " " + cname,
      data[1] + " " + accNum,
      data[2] + " " + loanamout,
      data[3] + " " + pendingamount,
      data[4] + " " + EMIamount,
      data[5] + " " + duedate,
      data[6] + " " + pemi,
      data[7] + "" + cinstatus,
      data[8] + "" + Lastpaiddate,
      data[9] + "" + nextemidate,
      data[10] + "" + Totalpaidemi,
      data[11] + "" + Outstanding,
      data[12] + "" + Preclosureamt,
      // data[13] + "" + Centermangcontactno,
      // data[14] + "" + Branchmgrname,
      // data[15] + "" + Branchmgrcontactno,
      data[13],
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
          const responsePayload = {
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
      action_talk.play();

      audioElement.src = audioSource;

      // Play the audio
      audioElement.play().catch(function (error) {
        console.error("Error playing audio:", error);
      });
      audioElement.addEventListener("ended", function () {
        // Call the provided callback function once audio playback has ended
        action_talk.stop();
      });
    }

    // Your text content
    var text1 = message1.join(".");
    var text2 = message2.join(".");

    //console.log("Text 1 ------- ", text1);
    //console.log("Text 2------- ", text2);

    const sentences = text1.split(".");
    const textContainer = document.getElementById("dynamicText");

    function displaySentences(index) {
      if (index < sentences.length) {
        const sentenceElement = document.createElement("p");
        let currentSentence = sentences[index].trim();

        if (index >= sentences.length - 1) {
          for (let i = index + 1; i < sentences.length; i++) {
            currentSentence += " " + sentences[i].trim();
          }
        }

        sentenceElement.textContent = currentSentence;
        textContainer.appendChild(sentenceElement);

        let delay;
        switch (index) {
          case 0:
            delay = 10000;
            break;
          case 1:
            delay = 2500;
            break;
          case 4:
            delay = 5000;
            break;
          case 6:
          case 8:
            delay = 5000;
            break;
          default:
            delay = 2500;
        }

        setTimeout(() => {
          textContainer.innerHTML = "";
          displaySentences(index + 1);
        }, delay);
      } else {
        // After displaying text1, display text2 with line breaks
        const text2Lines = text2.split(".");
        text2Lines.forEach((line, index) => {
          const text2Element = document.createElement("p");
          text2Element.textContent = line.trim();
          textContainer.appendChild(text2Element);

          // Add a delay between lines if needed
          setTimeout(() => {
            textContainer.innerHTML = "";
            if (index === text2Lines.length - 1) {
              // After displaying all lines, continue with other content or actions
              // You can modify this part as needed
            }
          }, 50000); // Adjust the delay between lines as needed
        });
      }
    }

    // Start displaying sentences, beginning with index 0
    displaySentences(0);

    const text = messages.join(". "); // Concatenate messages with a period and space
    //console.log("Text generated ------ ", text);
    playAudio(text, async function () {
      // Start recording after a pause of 5 seconds
      isCallbackCalled = true;
      await startRecording();

      // Stop recording after 5 seconds and transcribe
      setTimeout(() => {
        stopRecordingAndTranscribe();

        // Play audio after stopRecordingAndTranscribe ends
        playAudioAfterRecordingAndTranscribe(function () {
          // Page reload after playAudioAfterRecordingAndTranscribe ends
        });
      }, 5000);
    });
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
