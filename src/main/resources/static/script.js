function _0x1f3e(_0x1b03b1, _0x42041c) {
  const _0x3693e0 = _0x3693();
  return (
    (_0x1f3e = function (_0x1f3e6e, _0x2f4460) {
      _0x1f3e6e = _0x1f3e6e - 0x156;
      let _0x153cc1 = _0x3693e0[_0x1f3e6e];
      return _0x153cc1;
    }),
    _0x1f3e(_0x1b03b1, _0x42041c)
  );
}
const _0x256c14 = _0x1f3e;
(function (_0x40df48, _0x2474e5) {
  const _0x1fb281 = _0x1f3e,
    _0x37d252 = _0x40df48();
  while (!![]) {
    try {
      const _0x22de03 =
        parseInt(_0x1fb281(0x1e4)) / 0x1 +
        -parseInt(_0x1fb281(0x1e6)) / 0x2 +
        parseInt(_0x1fb281(0x1a7)) / 0x3 +
        -parseInt(_0x1fb281(0x179)) / 0x4 +
        (parseInt(_0x1fb281(0x1d6)) / 0x5) *
          (-parseInt(_0x1fb281(0x15e)) / 0x6) +
        -parseInt(_0x1fb281(0x1f9)) / 0x7 +
        (parseInt(_0x1fb281(0x156)) / 0x8) * (parseInt(_0x1fb281(0x162)) / 0x9);
      if (_0x22de03 === _0x2474e5) break;
      else _0x37d252["push"](_0x37d252["shift"]());
    } catch (_0x2e05f5) {
      _0x37d252["push"](_0x37d252["shift"]());
    }
  }
})(_0x3693, 0xf1ed5);
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
  numeric,
  mixer1,
  mixer2,
  gltfscene2,
  action_loan_idle,
  action_loan_talk,
  CARDBOARD_MODE = ![],
  language_list,
  isCallbackCalled = ![];
let accNum;
$(window)["on"](_0x256c14(0x16b), async function () {
  const _0x358701 = _0x256c14;
  $(_0x358701(0x1de))[_0x358701(0x1a2)](_0x358701(0x163)), fetchlanguageJSON();
  const _0x308e52 = $("#button1"),
    _0x1bed9e = $(_0x358701(0x1f8));
  _0x308e52["prop"](_0x358701(0x1b2), !![]),
    _0x1bed9e["prop"](_0x358701(0x1b2), !![]),
    _0x308e52["on"](_0x358701(0x1ce), bankStart),
    _0x1bed9e["on"](_0x358701(0x1ce), bankStart);
  const _0x126f85 = 0x1770;
  setTimeout(() => {
    const _0xd89ac4 = _0x358701;
    _0x308e52["prop"](_0xd89ac4(0x1b2), ![]),
      _0x1bed9e["prop"](_0xd89ac4(0x1b2), ![]);
  }, _0x126f85);
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
  pemi;
const decryptionAES = (_0x33dce0) => {
  const _0x19d215 = _0x256c14,
    _0x23b601 = CryptoJS["AES"][_0x19d215(0x196)](_0x33dce0, _0x19d215(0x165)),
    _0x5802ac = _0x23b601[_0x19d215(0x192)](
      CryptoJS[_0x19d215(0x1a4)][_0x19d215(0x19e)]
    );
  return _0x5802ac;
};
function decryptFromURL() {
  const _0x4591cb = _0x256c14,
    _0x2fdcce = new URLSearchParams(window[_0x4591cb(0x1d4)][_0x4591cb(0x17c)]),
    _0x18efd7 = _0x2fdcce[_0x4591cb(0x17b)]("data");
  let _0x35b82b = _0x18efd7[_0x4591cb(0x173)]("\x20", "+");
  console["log"](_0x4591cb(0x1d0) + _0x35b82b);
  const _0x154b75 = decodeURIComponent(_0x35b82b);
  if (_0x154b75) {
    const _0x65c08c = decryptionAES(_0x154b75);
    console["log"](_0x4591cb(0x1fa), _0x65c08c);
    const _0x444ddd = new URLSearchParams(_0x65c08c);
    (cname = _0x444ddd[_0x4591cb(0x17b)]("name")),
      (clanguage = _0x4591cb(0x19d)),
      (accNum = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1fc))),
      (loanamout = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1ab))),
      (pendingamount = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x193))),
      (EMIamount = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1af))),
      (duedate = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x174))),
      (pemi = _0x444ddd["get"](_0x4591cb(0x1b7))),
      (Lastpaiddate = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x16c))),
      (cinstatus = _0x444ddd[_0x4591cb(0x17b)]("cinstatus")),
      (nextemidate = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x18d))),
      (Totalpaidemi = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1d2))),
      (Outstanding = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x18e))),
      (Preclosureamt = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1b3))),
      (Centermangcontactno = _0x444ddd[_0x4591cb(0x17b)](
        "Centermangcontactno"
      )),
      (Branchmgrname = _0x444ddd[_0x4591cb(0x17b)]("Branchmgrname")),
      (Branchmgrcontactno = _0x444ddd["get"](_0x4591cb(0x1a3))),
      (applicant_id1 = _0x444ddd[_0x4591cb(0x17b)](_0x4591cb(0x1bc))),
      (user_id1 = _0x444ddd[_0x4591cb(0x17b)]("user_id"));
  } else console[_0x4591cb(0x15b)](_0x4591cb(0x1a1));
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0x10da59 = _0x256c14,
    _0x23f54b = await fetch("language.json");
  return (language_list = await _0x23f54b[_0x10da59(0x16d)]()), language_list;
}
fetchlanguageJSON()["then"]((_0x4594fc) => {
  const _0x32aca4 = _0x256c14;
  (data = _0x4594fc[_0x32aca4(0x1f4)][0x0][clanguage][_0x32aca4(0x19c)]),
    (data1 = _0x4594fc["language"][0x0][clanguage][_0x32aca4(0x1cd)]),
    (data2 = _0x4594fc[_0x32aca4(0x1f4)][0x0][clanguage][_0x32aca4(0x1e2)]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x3f6170 = _0x256c14;
  viewer[_0x3f6170(0x1d8)](0x6e),
    noSleep["enable"](),
    (document[_0x3f6170(0x188)](_0x3f6170(0x1dd))["style"][_0x3f6170(0x1ec)] =
      _0x3f6170(0x1cb)),
    start();
  var _0x3a63f5 = document["createElement"](_0x3f6170(0x1f6));
  (_0x3a63f5["src"] = _0x3f6170(0x15d)),
    action_idle["play"](),
    viewer[_0x3f6170(0x16e)](PANOLENS[_0x3f6170(0x198)][_0x3f6170(0x1df)]),
    viewer["enableControl"](PANOLENS[_0x3f6170(0x1a8)][_0x3f6170(0x185)]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
function _0x3693() {
  const _0x1b7085 = [
    "metadata",
    "1464836WwGFXS",
    "castShadow",
    "ended",
    "Error\x20during\x20Response\x20API\x20call:",
    "stringify",
    "alternatives",
    "display",
    "srcObject",
    "DirectionalLight",
    "Request\x20failed:",
    "update",
    "&lang=",
    "onended",
    "requestFullscreen",
    "language",
    "transcript",
    "audio",
    "Text\x201\x20-------\x20",
    "#button2",
    "11461583nAaBOf",
    "Decrypted\x20URL\x20-----\x20",
    "models/bluedress.glb",
    "accnum",
    "46516528bkuHQx",
    "src",
    "querySelector",
    "receiveShadow",
    "AnimationMixer",
    "log",
    "split",
    "audio/bank.mp3",
    "426eupbKB",
    "audio_base64",
    "autoplay",
    "textContent",
    "9dAMSIt",
    "slow",
    "Se343Dd3SDvoqTSd32df34",
    "1234567890123456",
    "traverse",
    "Generated\x20Text\x20-----\x20",
    "console",
    "state",
    "clone",
    "load",
    "Lastpaiddate",
    "json",
    "enableEffect",
    "localAudio",
    "tweenControlCenter",
    "audio/Hindi_ShrInd.mp3",
    "getUserMedia",
    "replaceAll",
    "duedate",
    "getDelta",
    "isMesh",
    "&api_key=",
    "position",
    "5338660AlJKrk",
    "error",
    "get",
    "search",
    "dynamicText",
    "onreadystatechange",
    "#container",
    "join",
    "Response\x20API\x20Response:",
    "status",
    "visible",
    "audio/English_Audio.mp3",
    "DEVICEORIENTATION",
    "add",
    "AnimationClip",
    "getElementById",
    "catch",
    "https://metawebapp.azurewebsites.net/request",
    "https://metawebapp.azurewebsites.net/response",
    "POST",
    "nextemidate",
    "Outstanding",
    "createElement",
    "style",
    "HTTP\x20error!\x20Status:\x20",
    "toString",
    "pendingamount",
    "createMediaStreamSource",
    "audioPlayer",
    "decrypt",
    "localStream",
    "MODES",
    "readyState",
    "Request\x20API\x20Response:",
    "AmbientLight",
    "data",
    "hindi",
    "Utf8",
    "Clock",
    "open",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "fadeOut",
    "Branchmgrcontactno",
    "enc",
    "test-1212",
    "Error\x20during\x20Request\x20API\x20call:",
    "233991OqNoxA",
    "CONTROLS",
    "play",
    "Viewer",
    "loanamout",
    "Audio\x20playback\x20has\x20ended.",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "HemisphereLight",
    "EMIamount",
    "https://tts.indiantts.in/tts?text=",
    "record",
    "disabled",
    "Preclosureamt",
    "audio/Hindi_Audio.mp3",
    "AES",
    "&ver=",
    "pemi",
    "dev",
    "scene",
    "append",
    "images/reception/px.jpg",
    "applicant_id",
    "&samplerate=",
    "then",
    "children",
    "ready",
    "animations",
    "images/reception/pz.jpg",
    "addEventListener",
    "Error\x20playing\x20audio:",
    "Error\x20playing\x20audio1:",
    "&numeric=",
    "Response:",
    "findByName",
    "rotation",
    "Vector3",
    "none",
    "mediaDevices",
    "data1",
    "click",
    "application/json",
    "Final\x20Url\x20----\x20",
    "images/reception/nz.jpg",
    "Totalpaidemi",
    "success",
    "location",
    "CubePanorama",
    "104620GhmjTU",
    "clipAction",
    "setCameraFov",
    "set",
    "idle",
    "setPanorama",
    "&action=",
    "modal",
    ".loader-wrapper",
    "CARDBOARD",
    "All\x20sentences\x20processed.",
    "stop",
    "data2",
    "Audio\x20player\x20element\x20not\x20found.",
    "288426HsCUqR",
  ];
  _0x3693 = function () {
    return _0x1b7085;
  };
  return _0x3693();
}
async function start() {
  const _0x11c631 = _0x256c14;
  await document["body"][_0x11c631(0x1f3)]();
}
function bankStart1() {
  const _0x30bb48 = _0x256c14;
  noSleep["enable"](),
    start(),
    (document["getElementById"](_0x30bb48(0x1dd))[_0x30bb48(0x190)][
      _0x30bb48(0x1ec)
    ] = "none");
  var _0xe1937d = document[_0x30bb48(0x18f)](_0x30bb48(0x1f6));
  (_0xe1937d["src"] = _0x30bb48(0x15d)),
    action_idle[_0x30bb48(0x1a9)](),
    setTimeout(() => {
      const _0x28f98d = _0x30bb48;
      viewer["tweenControlCenter"](
        new THREE[_0x28f98d(0x1ca)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer[_0x28f98d(0x1d8)](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x1455e7 = _0x256c14;
  document["getElementById"](_0x1455e7(0x1dd))[_0x1455e7(0x190)][
    _0x1455e7(0x1ec)
  ] = "none";
  let _0x362499 = 0x0;
  viewer[_0x1455e7(0x170)](new THREE["Vector3"](-0x5, -0x3e8, -0x1388), 0x12c),
    $(document)[_0x1455e7(0x1c0)](function () {
      const _0xeb9596 = _0x1455e7;
      var _0x10ed3f, _0x920977, _0x45aabe, _0x44b747;
      clanguage == _0xeb9596(0x19d)
        ? ((_0x920977 = "hi"),
          (modelID = "6"),
          (numeric = "hcurrency"),
          (audioSource = _0xeb9596(0x1b4)),
          (_0x45aabe = [
            data1[0x0] + "" + accNum,
            data1[0x1] + "" + loanamout,
            data1[0x2] + "" + pendingamount,
            data1[0x3] + "" + EMIamount,
            data1[0x4] + "" + duedate,
            data1[0x5] + "" + pemi,
            data1[0x6] + "" + cinstatus,
            data1[0x7] + "" + Lastpaiddate,
            data1[0x8] + "" + nextemidate,
            data1[0x9] + "" + Totalpaidemi,
            data1[0xa] + "" + Outstanding,
            data1[0xb] + "" + Preclosureamt,
          ]),
          (_0x44b747 = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x920977 = "en"),
          (modelID = "5"),
          (numeric = "currency"),
          (audioSource = _0xeb9596(0x184)),
          (_0x45aabe = [
            data2[0x0] + "" + accNum,
            data2[0x1] + "" + loanamout,
            data2[0x2] + "" + pendingamount,
            data2[0x3] + "" + EMIamount,
            data2[0x4] + "" + duedate,
            data2[0x5] + "" + pemi,
            data2[0x6] + "" + cinstatus,
            data2[0x7] + "" + Lastpaiddate,
            data2[0x8] + "" + nextemidate,
            data2[0x9] + "" + Totalpaidemi,
            data2[0xa] + "" + Outstanding,
            data2[0xb] + "" + Preclosureamt,
          ]),
          (_0x44b747 = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      setTimeout(function () {
        const _0x5587eb = _0xeb9596;
        action_talk[_0x5587eb(0x1a9)]();
      }, 0x7d0),
        (_0x10ed3f = [
          data[0x0] + "\x20" + cname,
          data[0x1] + "\x20" + accNum,
          data[0x2] + "\x20" + loanamout + "\x20" + data[0xe],
          data[0x3] + "\x20" + pendingamount + "\x20" + data[0xe],
          data[0x4] + "\x20" + EMIamount + "\x20" + data[0xe],
          data[0x5] + "\x20" + duedate,
          data[0x6] + "\x20" + pemi,
          data[0x7] + "\x20" + cinstatus,
          data[0x8] + "\x20" + Lastpaiddate,
          data[0x9] + "\x20" + nextemidate,
          data[0xa] + "\x20" + Totalpaidemi,
          data[0xb] + "\x20" + Outstanding + "\x20" + data[0xe],
          data[0xc] + "\x20" + Preclosureamt + "\x20" + data[0xe],
          data[0xd],
        ]);
      async function _0x1484ab() {
        const _0x4832cf = _0xeb9596;
        action_talk[_0x4832cf(0x1e1)]();
        const _0x41e955 = await navigator[_0x4832cf(0x1cc)][_0x4832cf(0x172)]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x307500 = new AudioContext({ sampleRate: 0x3e80 }),
          _0xff2ac2 = _0x307500[_0x4832cf(0x194)](_0x41e955);
        (recorder = new Recorder(_0xff2ac2, { numChannels: 0x1 })),
          recorder[_0x4832cf(0x1b1)]();
      }
      async function _0x3c81e8() {
        const _0x238948 = _0xeb9596;
        recorder &&
          recorder[_0x238948(0x169)] !== "inactive" &&
          (recorder[_0x238948(0x1e1)](),
          recorder["exportWAV"](async (_0x124db1) => {
            const _0x2ece65 = _0x238948,
              _0x1eb6ff = new XMLHttpRequest();
            _0x1eb6ff[_0x2ece65(0x1a0)]("POST", _0x2ece65(0x1ad), !![]),
              (_0x1eb6ff[_0x2ece65(0x17e)] = function () {
                const _0x38211f = _0x2ece65;
                if (_0x1eb6ff[_0x38211f(0x199)] === XMLHttpRequest["DONE"]) {
                  if (_0x1eb6ff[_0x38211f(0x182)] === 0xc8) {
                    const _0x10b57e = _0x1eb6ff["responseText"];
                    console["log"](_0x38211f(0x1c7), _0x10b57e),
                      _0x306a1a(_0x10b57e);
                  } else
                    console["error"](_0x38211f(0x1ef), _0x1eb6ff["statusText"]);
                }
              });
            const _0x2fd4de = new FormData();
            _0x2fd4de[_0x2ece65(0x1ba)](_0x2ece65(0x15f), _0x124db1);
            const _0x3d2690 = {
              ID: _0x2ece65(0x1a5),
              modelID: modelID,
              mode: _0x2ece65(0x1b8),
              command: "transcribe",
              userID: _0x2ece65(0x164),
            };
            _0x2fd4de["append"](
              _0x2ece65(0x1e5),
              JSON[_0x2ece65(0x1ea)](_0x3d2690)
            ),
              _0x1eb6ff["send"](_0x2fd4de);
          }));
      }
      function _0x526ea9(_0x4940b7, _0x59e779) {
        const _0x2ab740 = _0xeb9596,
          _0x2ab969 = document[_0x2ab740(0x188)](_0x2ab740(0x195)),
          _0x467328 = "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
          _0x4b7ed9 = _0x2ab740(0x1a9),
          _0x20d8dd = "8000",
          _0x463786 = "2",
          _0x57e4f4 = "hi",
          _0x220bc0 = encodeURIComponent(_0x4940b7),
          _0x23da10 =
            _0x2ab740(0x1b0) +
            _0x220bc0 +
            _0x2ab740(0x177) +
            _0x467328 +
            _0x2ab740(0x1dc) +
            _0x4b7ed9 +
            _0x2ab740(0x1c6) +
            numeric +
            _0x2ab740(0x1f1) +
            _0x57e4f4 +
            _0x2ab740(0x1bd) +
            _0x20d8dd +
            _0x2ab740(0x1b6) +
            _0x463786;
        (_0x2ab969[_0x2ab740(0x157)] = _0x23da10),
          _0x2ab969["play"]()[_0x2ab740(0x189)](function (_0x59fd38) {
            const _0x2079de = _0x2ab740;
            console[_0x2079de(0x17a)]("Error\x20playing\x20audio:", _0x59fd38);
          }),
          _0x2ab969[_0x2ab740(0x1c3)](_0x2ab740(0x1e8), function () {
            !isCallbackCalled && _0x59e779();
          });
      }
      function _0x306a1a(_0x17a196) {
        const _0x13ea21 = _0xeb9596,
          _0x30e904 = JSON["parse"](_0x17a196);
        if (
          _0x30e904[_0x13ea21(0x182)] === _0x13ea21(0x1d3) &&
          _0x30e904[_0x13ea21(0x1eb)]["length"] > 0x0
        ) {
          console[_0x13ea21(0x15b)](
            "this\x20is\x20the\x20data\x2012\x20------------"
          );
          const _0x185f24 = _0x30e904["alternatives"][0x0][_0x13ea21(0x1f5)];
          console[_0x13ea21(0x15b)](_0x13ea21(0x167), _0x185f24);
          const _0xa8e855 = (_0x240b44) => {
            const _0x1b5b64 = _0x13ea21,
              _0x581634 = CryptoJS[_0x1b5b64(0x1b5)]["encrypt"](
                _0x240b44,
                _0x1b5b64(0x165)
              );
            return _0x581634[_0x1b5b64(0x192)]();
          };
          function _0x41198f(_0x13ac99) {
            return _0xa8e855(_0x13ac99);
          }
          const _0x2f02e0 = _0x41198f(applicant_id1),
            _0x46e656 = _0x41198f(user_id1),
            _0x5879e1 = _0x41198f(_0x185f24),
            _0x3aae4f = _0x13ea21(0x18a),
            _0x2d6f4c = { applicant_id: _0x2f02e0 };
          fetch(_0x3aae4f, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON[_0x13ea21(0x1ea)](_0x2d6f4c),
          })
            [_0x13ea21(0x1be)]((_0x2de279) => {
              const _0x2efb50 = _0x13ea21;
              if (!_0x2de279["ok"])
                throw new Error(_0x2efb50(0x191) + _0x2de279[_0x2efb50(0x182)]);
              return _0x2de279["json"]();
            })
            ["then"]((_0x3b9d21) => {
              const _0x42529a = _0x13ea21;
              console["log"](_0x42529a(0x19a), _0x3b9d21), _0x2632c6();
            })
            [_0x13ea21(0x189)]((_0x2f6f78) => {
              const _0x463d79 = _0x13ea21;
              console[_0x463d79(0x17a)](_0x463d79(0x1a6), _0x2f6f78);
            });
          function _0x2632c6() {
            const _0x1f5ea2 = _0x13ea21,
              _0x1cc6f2 = _0x1f5ea2(0x18b),
              _0xe171f4 = {
                applicant_id: _0x2f02e0,
                user_pin: _0x46e656,
                response: _0x5879e1,
              };
            fetch(_0x1cc6f2, {
              method: _0x1f5ea2(0x18c),
              headers: { "Content-Type": _0x1f5ea2(0x1cf) },
              body: JSON[_0x1f5ea2(0x1ea)](_0xe171f4),
            })
              [_0x1f5ea2(0x1be)]((_0x5714f8) => {
                const _0x30f37b = _0x1f5ea2;
                if (!_0x5714f8["ok"])
                  throw new Error(
                    _0x30f37b(0x191) + _0x5714f8[_0x30f37b(0x182)]
                  );
                return _0x5714f8[_0x30f37b(0x16d)]();
              })
              [_0x1f5ea2(0x1be)]((_0x2d6fa3) => {
                const _0x4dd54c = _0x1f5ea2;
                console["log"](_0x4dd54c(0x181), _0x2d6fa3);
              })
              [_0x1f5ea2(0x189)]((_0x5588b5) => {
                const _0x573195 = _0x1f5ea2;
                console["error"](_0x573195(0x1e9), _0x5588b5);
              });
          }
        } else {
          const _0x30a044 = document["getElementById"](_0x13ea21(0x195));
          clanguage == _0x13ea21(0x19d)
            ? (_0x30a044[_0x13ea21(0x157)] = _0x13ea21(0x171))
            : (_0x30a044[_0x13ea21(0x157)] = "audio/English_ShrInd.mp3"),
            _0x30a044["play"]()[_0x13ea21(0x189)](function (_0x51baec) {
              const _0x144898 = _0x13ea21;
              console[_0x144898(0x17a)](_0x144898(0x1c5), _0x51baec);
            }),
            _0x30a044[_0x13ea21(0x1c3)](_0x13ea21(0x1e8), function () {});
        }
      }
      function _0x24dcba() {
        const _0x3984cd = _0xeb9596,
          _0x4e51fa = document["getElementById"](_0x3984cd(0x195));
        if (!_0x4e51fa) {
          console[_0x3984cd(0x17a)](_0x3984cd(0x1e3));
          return;
        }
        (_0x4e51fa[_0x3984cd(0x157)] = audioSource),
          _0x4e51fa[_0x3984cd(0x1a9)]()
            [_0x3984cd(0x1be)](() => {
              action_talk["play"]();
            })
            [_0x3984cd(0x189)]((_0x16c777) => {
              const _0x11d271 = _0x3984cd;
              console[_0x11d271(0x17a)](
                "Error\x20playing\x20audio:",
                _0x16c777
              );
            }),
          (_0x4e51fa[_0x3984cd(0x1f2)] = () => {
            const _0x3b6f71 = _0x3984cd;
            action_talk[_0x3b6f71(0x1e1)](),
              console[_0x3b6f71(0x15b)](_0x3b6f71(0x1ac));
          });
      }
      var _0x1690c2 = _0x45aabe[_0xeb9596(0x180)]("."),
        _0x50dd36 = _0x44b747[_0xeb9596(0x180)](".");
      console[_0xeb9596(0x15b)](_0xeb9596(0x1f7), _0x1690c2),
        console[_0xeb9596(0x15b)]("Text\x202-------\x20", _0x50dd36);
      var _0x1690c2 = _0x45aabe["join"]("."),
        _0x50dd36 = _0x44b747["join"](".");
      const _0x19401b = _0x1690c2[_0xeb9596(0x15c)](/\.(?!\d)/),
        _0x4bed45 = document[_0xeb9596(0x188)](_0xeb9596(0x17d));
      function _0x2899ca(_0x2da01d) {
        const _0x5d8854 = _0xeb9596;
        return _0x2da01d[_0x5d8854(0x192)]()
          [_0x5d8854(0x15c)]("")
          [_0x5d8854(0x180)]("\x20");
      }
      async function _0x1a10bf(_0x2568cd) {
        async function _0xdf567b() {
          const _0x2edc77 = _0x1f3e,
            _0x5f422c = document[_0x2edc77(0x188)](_0x2edc77(0x17d));
          for (
            let _0x625e58 = 0x0;
            _0x625e58 < _0x10ed3f["length"];
            _0x625e58++
          ) {
            let _0x391a60 = _0x10ed3f[_0x625e58] + ".",
              _0x122abb = _0x2899ca(accNum);
            if (_0x391a60["includes"](accNum)) {
              let _0x191488 = _0x391a60["replace"](accNum, _0x122abb);
              _0x5f422c[_0x2edc77(0x161)] = _0x391a60;
              try {
                await _0x503710(_0x191488);
              } catch (_0x12f9f5) {
                console[_0x2edc77(0x17a)](_0x2edc77(0x1c4), _0x12f9f5);
              }
            } else {
              _0x5f422c[_0x2edc77(0x161)] = _0x391a60;
              try {
                await _0x503710(_0x391a60);
              } catch (_0x1d3b55) {
                console[_0x2edc77(0x17a)](
                  "Error\x20playing\x20audio:",
                  _0x1d3b55
                );
              }
            }
          }
          console[_0x2edc77(0x15b)](_0x2edc77(0x1e0)),
            await _0x1484ab()
              ["then"](() => {
                setTimeout(() => {
                  _0x3c81e8();
                }, 0x1770);
              })
              [_0x2edc77(0x1be)](() => {
                setTimeout(() => {
                  _0x24dcba();
                }, 0x1b58);
              });
        }
        function _0x503710(_0x198231) {
          return new Promise((_0xa94c11, _0x4ad42a) => {
            _0x526ea9(_0x198231, _0xa94c11);
          });
        }
        await _0xdf567b();
      }
      _0x1a10bf(0x0);
    });
}
(panorama = new PANOLENS[_0x256c14(0x1d5)]([
  _0x256c14(0x1bb),
  "images/reception/nx.jpg",
  "images/reception/py.jpg",
  "images/reception/ny.jpg",
  _0x256c14(0x1c2),
  _0x256c14(0x1d1),
])),
  (clock = new THREE[_0x256c14(0x19f)]());
var container = document[_0x256c14(0x158)](_0x256c14(0x17f));
(viewer = new PANOLENS[_0x256c14(0x1aa)]({
  output: _0x256c14(0x168),
  container: container,
})),
  viewer[_0x256c14(0x1d8)](0x46),
  viewer["add"](panorama),
  viewer[_0x256c14(0x1db)](panorama),
  (hemiLight = new THREE[_0x256c14(0x1ae)](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x256c14(0x1ee)](0xffffff, 0.5),
  ambientlight = new THREE[_0x256c14(0x19b)](0x404040, 0.56);
panorama[_0x256c14(0x186)](ambientlight),
  panorama[_0x256c14(0x186)](directionallight),
  directionallight[_0x256c14(0x178)]["set"](0x5, 0xa, 7.5),
  (pointlight = new THREE["PointLight"](0xffd6aa, 0.8)),
  pointlight[_0x256c14(0x178)][_0x256c14(0x1d9)](0x0, 0xa, 0x0),
  (pointlight[_0x256c14(0x1e7)] = !![]),
  panorama[_0x256c14(0x186)](pointlight),
  (pointlight = pointlight[_0x256c14(0x16a)]()),
  pointlight["position"][_0x256c14(0x1d9)](0x41, 0x0, -0x2d),
  (pointlight["castShadow"] = !![]),
  panorama[_0x256c14(0x186)](pointlight),
  hemiLight[_0x256c14(0x178)][_0x256c14(0x1d9)](0x7, 0xa, -0x7),
  panorama[_0x256c14(0x186)](hemiLight);
var loader = new THREE["GLTFLoader"]();
loader[_0x256c14(0x16b)](_0x256c14(0x1fb), function (_0x4d65f4) {
  const _0x5be51c = _0x256c14;
  (gltfscene = _0x4d65f4["scene"]),
    (gltfglobal = _0x4d65f4),
    (car = _0x4d65f4[_0x5be51c(0x1b9)][_0x5be51c(0x1bf)][0x0]),
    gltfscene[_0x5be51c(0x178)][_0x5be51c(0x1d9)](-0x5, -0xa, -0xa),
    (gltfscene[_0x5be51c(0x1c9)]["y"] = 0.2),
    gltfscene["scale"][_0x5be51c(0x1d9)](0x8, 0x8, 0x8),
    car[_0x5be51c(0x166)]((_0x5553e9) => {
      const _0x4dff97 = _0x5be51c;
      _0x5553e9[_0x4dff97(0x176)] &&
        ((_0x5553e9[_0x4dff97(0x1e7)] = !![]),
        (_0x5553e9[_0x4dff97(0x159)] = !![]));
    });
  const _0x3afba7 = _0x4d65f4[_0x5be51c(0x1c1)];
  mixer = new THREE[_0x5be51c(0x15a)](_0x4d65f4[_0x5be51c(0x1b9)]);
  const _0x51b5c7 = THREE[_0x5be51c(0x187)][_0x5be51c(0x1c8)](
      _0x3afba7,
      _0x5be51c(0x1da)
    ),
    _0x118fd2 = THREE["AnimationClip"][_0x5be51c(0x1c8)](_0x3afba7, "talk");
  (action_idle = mixer[_0x5be51c(0x1d7)](_0x51b5c7)),
    (action_talk = mixer[_0x5be51c(0x1d7)](_0x118fd2)),
    panorama[_0x5be51c(0x186)](gltfscene),
    (gltfscene[_0x5be51c(0x183)] = !![]),
    action_idle["play"](),
    animate();
});
function animate() {
  const _0x1c61e7 = _0x256c14;
  var _0x1ae7f4 = clock[_0x1c61e7(0x175)]();
  if (mixer) mixer[_0x1c61e7(0x1f0)](_0x1ae7f4);
  if (mixer1) mixer1[_0x1c61e7(0x1f0)](_0x1ae7f4);
  if (mixer2) mixer2[_0x1c61e7(0x1f0)](_0x1ae7f4);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x3264f1 = _0x256c14;
  navigator[_0x3264f1(0x1cc)]
    [_0x3264f1(0x172)]({ video: ![], audio: !![] })
    ["then"]((_0xb28840) => {
      const _0xd9d78 = _0x3264f1;
      (window[_0xd9d78(0x197)] = _0xb28840),
        (window[_0xd9d78(0x16f)][_0xd9d78(0x1ed)] = _0xb28840),
        (window[_0xd9d78(0x16f)][_0xd9d78(0x160)] = !![]);
    })
    [_0x3264f1(0x189)]((_0x4fb93d) => {
      console["log"]("u\x20got\x20an\x20error:" + _0x4fb93d);
    });
}
