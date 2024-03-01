const _0xca8be8 = _0x4a4d;
(function (_0x1640d8, _0x42cdfc) {
  const _0x4ac913 = _0x4a4d,
    _0x56cfe4 = _0x1640d8();
  while (!![]) {
    try {
      const _0x371ab0 =
        -parseInt(_0x4ac913(0xac)) / 0x1 +
        (parseInt(_0x4ac913(0x111)) / 0x2) *
          (-parseInt(_0x4ac913(0x122)) / 0x3) +
        parseInt(_0x4ac913(0xa0)) / 0x4 +
        -parseInt(_0x4ac913(0xaf)) / 0x5 +
        -parseInt(_0x4ac913(0x11a)) / 0x6 +
        (-parseInt(_0x4ac913(0x133)) / 0x7) *
          (-parseInt(_0x4ac913(0xdf)) / 0x8) +
        (-parseInt(_0x4ac913(0x114)) / 0x9) *
          (-parseInt(_0x4ac913(0xe1)) / 0xa);
      if (_0x371ab0 === _0x42cdfc) break;
      else _0x56cfe4["push"](_0x56cfe4["shift"]());
    } catch (_0x5a8f4a) {
      _0x56cfe4["push"](_0x56cfe4["shift"]());
    }
  }
})(_0x49f8, 0xbb982);
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
function _0x49f8() {
  const _0x58bd34 = [
    "POST",
    "507169rXuJec",
    "images/reception/nx.jpg",
    "setCameraFov",
    "5277865wDyvfU",
    "prop",
    "data",
    "GLTFLoader",
    "Vector3",
    "children",
    "createMediaStreamSource",
    "Branchmgrcontactno",
    "enable",
    "&action=",
    "Response\x20API\x20Response:",
    "Clock",
    "getDelta",
    "audio_base64",
    "Outstanding",
    ".loader-wrapper",
    "onended",
    "https://metawebapp.azurewebsites.net/response",
    "Se343Dd3SDvoqTSd32df34",
    "&api_key=",
    "EMIamount",
    "Request\x20API\x20Response:",
    "audio/Hindi_ShrInd.mp3",
    "dynamicText",
    "hindi",
    "Generated\x20Text\x20-----\x20",
    "CONTROLS",
    "&ver=",
    "addEventListener",
    "ended",
    "applicant_id",
    "audio/Hindi_Audio.mp3",
    "u\x20got\x20an\x20error:",
    "none",
    "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
    "alternatives",
    "display",
    "getUserMedia",
    "audio/bank.mp3",
    "AnimationClip",
    "images/reception/nz.jpg",
    "position",
    "play",
    "state",
    "src",
    "parse",
    "AnimationMixer",
    "https://tts.indiantts.in/tts?text=",
    "1623704OMTPYj",
    "images/reception/pz.jpg",
    "460fgSLtb",
    "AES",
    "tweenControlCenter",
    "Error\x20playing\x20audio:",
    "mediaDevices",
    "Preclosureamt",
    "send",
    "PointLight",
    "textContent",
    "name",
    "status",
    "clipAction",
    "application/json",
    "nextemidate",
    "style",
    "HemisphereLight",
    "castShadow",
    "rotation",
    "get",
    "innerHTML",
    "enableEffect",
    "isMesh",
    "getElementById",
    "json",
    "createElement",
    "request_id",
    "audio",
    "#button1",
    "replaceAll",
    "split",
    "Error\x20during\x20recording\x20or\x20transcription:",
    "responseText",
    "set",
    "8000",
    "autoplay",
    "AmbientLight",
    "modal",
    "open",
    "join",
    "currency",
    "user_id",
    "cinstatus",
    "then",
    "replace",
    "&numeric=",
    "&lang=",
    "catch",
    "slow",
    "28kfwCaL",
    "receiveShadow",
    "data1",
    "360666IIWeWS",
    "HTTP\x20error!\x20Status:\x20",
    "console",
    "images/reception/ny.jpg",
    "enc",
    "statusText",
    "707520mFZkAd",
    "metadata",
    "Final\x20Url\x20----\x20",
    "append",
    "error",
    "clone",
    "inactive",
    "talk",
    "22083wQpfPf",
    "Request\x20ID\x20in\x20response\x20call",
    "exportWAV",
    "images/reception/py.jpg",
    "update",
    "requestFullscreen",
    "findByName",
    "MODES",
    "DirectionalLight",
    "scene",
    "language",
    "disabled",
    "enableControl",
    "load",
    "CARDBOARD",
    "includes",
    "Viewer",
    "14qvIzfp",
    "length",
    "audio/English_ShrInd.mp3",
    "scale",
    "&samplerate=",
    "stringify",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "add",
    "record",
    "stop",
    "fadeOut",
    "test-1212",
    "audioPlayer",
    "toString",
    "decrypt",
    "Lastpaiddate",
    "localAudio",
    "Centermangcontactno",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "dev",
    "log",
    "duedate",
    "audio/English_Audio.mp3",
    "#button2",
    "loanamout",
    "Decrypted\x20URL\x20-----\x20",
    "1211088qqiqWP",
    "transcript",
    "search",
    "#container",
    "accnum",
    "success",
    "click",
    "readyState",
    "Totalpaidemi",
    "hcurrency",
    "onreadystatechange",
  ];
  _0x49f8 = function () {
    return _0x58bd34;
  };
  return _0x49f8();
}
let accNum, loanID;
$(window)["on"](_0xca8be8(0x12f), async function () {
  const _0x35b20b = _0xca8be8;
  $(_0x35b20b(0xbe))[_0x35b20b(0x13d)](_0x35b20b(0x110)), fetchlanguageJSON();
  const _0x53b406 = $(_0x35b20b(0xfc)),
    _0xc438a0 = $(_0x35b20b(0x9d));
  _0x53b406["prop"](_0x35b20b(0x12d), !![]),
    _0xc438a0[_0x35b20b(0xb0)](_0x35b20b(0x12d), !![]),
    _0x53b406["on"](_0x35b20b(0xa6), bankStart),
    _0xc438a0["on"](_0x35b20b(0xa6), bankStart);
  const _0x186a6f = 0x1770;
  setTimeout(() => {
    const _0x46c2b0 = _0x35b20b;
    _0x53b406[_0x46c2b0(0xb0)]("disabled", ![]),
      _0xc438a0[_0x46c2b0(0xb0)](_0x46c2b0(0x12d), ![]);
  }, _0x186a6f);
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
  pemi;
const decryptionAES = (_0x48a680) => {
  const _0x43678f = _0xca8be8,
    _0x212845 = CryptoJS[_0x43678f(0xe2)][_0x43678f(0x141)](
      _0x48a680,
      "1234567890123456"
    ),
    _0x497620 = _0x212845[_0x43678f(0x140)](CryptoJS[_0x43678f(0x118)]["Utf8"]);
  return _0x497620;
};
function decryptFromURL() {
  const _0x11decc = _0xca8be8,
    _0x27209e = new URLSearchParams(window["location"][_0x11decc(0xa2)]),
    _0x16dbdf = _0x27209e[_0x11decc(0xf3)](_0x11decc(0xb1));
  let _0x4df741 = _0x16dbdf[_0x11decc(0xfd)]("\x20", "+");
  console[_0x11decc(0x9a)](_0x11decc(0x11c) + _0x4df741);
  const _0x42096f = decodeURIComponent(_0x4df741);
  if (_0x42096f) {
    const _0x176a41 = decryptionAES(_0x42096f);
    console["log"](_0x11decc(0x9f), _0x176a41);
    const _0x3225a6 = new URLSearchParams(_0x176a41);
    (cname = _0x3225a6["get"](_0x11decc(0xea))),
      (clanguage = "hindi"),
      (accNum = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xa4))),
      (loanID = _0x3225a6[_0x11decc(0xf3)]("loanno")),
      (loanamout = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0x9e))),
      (pendingamount = _0x3225a6[_0x11decc(0xf3)]("pendingamount")),
      (EMIamount = _0x3225a6["get"](_0x11decc(0xc3))),
      (duedate = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0x9b))),
      (pemi = _0x3225a6[_0x11decc(0xf3)]("pemi")),
      (Lastpaiddate = _0x3225a6["get"](_0x11decc(0x142))),
      (cinstatus = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0x10a))),
      (nextemidate = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xee))),
      (Totalpaidemi = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xa8))),
      (Outstanding = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xbd))),
      (Preclosureamt = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xe6))),
      (Centermangcontactno = _0x3225a6["get"](_0x11decc(0x97))),
      (Branchmgrname = _0x3225a6[_0x11decc(0xf3)]("Branchmgrname")),
      (Branchmgrcontactno = _0x3225a6["get"](_0x11decc(0xb6))),
      (applicant_id1 = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0xcd))),
      (user_id1 = _0x3225a6[_0x11decc(0xf3)](_0x11decc(0x109)));
  } else console["log"](_0x11decc(0x98));
}
decryptFromURL();
function _0x4a4d(_0x235ae0, _0x5ad48c) {
  const _0x49f896 = _0x49f8();
  return (
    (_0x4a4d = function (_0x4a4d69, _0x385cd0) {
      _0x4a4d69 = _0x4a4d69 - 0x96;
      let _0x266f29 = _0x49f896[_0x4a4d69];
      return _0x266f29;
    }),
    _0x4a4d(_0x235ae0, _0x5ad48c)
  );
}
async function fetchlanguageJSON() {
  const _0x5d655f = _0xca8be8,
    _0x31704c = await fetch("language.json");
  return (language_list = await _0x31704c[_0x5d655f(0xf8)]()), language_list;
}
fetchlanguageJSON()["then"]((_0x294556) => {
  const _0x4937de = _0xca8be8;
  (data = _0x294556["language"][0x0][clanguage][_0x4937de(0xb1)]),
    (data1 = _0x294556[_0x4937de(0x12c)][0x0][clanguage][_0x4937de(0x113)]),
    (data2 = _0x294556[_0x4937de(0x12c)][0x0][clanguage]["data2"]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x575f5d = _0xca8be8;
  viewer["setCameraFov"](0x6e),
    noSleep[_0x575f5d(0xb7)](),
    (document[_0x575f5d(0xf7)]("modal")["style"]["display"] = _0x575f5d(0xd0)),
    start();
  var _0x2ee32e = document[_0x575f5d(0xf9)](_0x575f5d(0xfb));
  (_0x2ee32e[_0x575f5d(0xdb)] = _0x575f5d(0xd5)),
    action_idle[_0x575f5d(0xd9)](),
    viewer[_0x575f5d(0xf5)](PANOLENS[_0x575f5d(0x129)][_0x575f5d(0x130)]),
    viewer[_0x575f5d(0x12e)](PANOLENS[_0x575f5d(0xc9)]["DEVICEORIENTATION"]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x547eb6 = _0xca8be8;
  await document["body"][_0x547eb6(0x127)]();
}
function bankStart1() {
  const _0x230aa8 = _0xca8be8;
  noSleep[_0x230aa8(0xb7)](),
    start(),
    (document["getElementById"](_0x230aa8(0x105))[_0x230aa8(0xef)][
      _0x230aa8(0xd3)
    ] = _0x230aa8(0xd0));
  var _0x2325b5 = document[_0x230aa8(0xf9)](_0x230aa8(0xfb));
  (_0x2325b5[_0x230aa8(0xdb)] = _0x230aa8(0xd5)),
    action_idle[_0x230aa8(0xd9)](),
    setTimeout(() => {
      const _0x4db354 = _0x230aa8;
      viewer["tweenControlCenter"](
        new THREE[_0x4db354(0xb3)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer[_0x4db354(0xae)](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x1bed2b = _0xca8be8;
  document[_0x1bed2b(0xf7)](_0x1bed2b(0x105))["style"]["display"] = "none";
  let _0x526ac2 = 0x0;
  viewer[_0x1bed2b(0xe3)](
    new THREE[_0x1bed2b(0xb3)](-0x5, -0x3e8, -0x1388),
    0x12c
  ),
    $(document)["ready"](function () {
      const _0xce3a48 = _0x1bed2b;
      var _0x5bd365, _0x326d7c, _0x956935, _0x251d95;
      clanguage == _0xce3a48(0xc7)
        ? ((_0x326d7c = "hi"),
          (modelID = "6"),
          (numeric = _0xce3a48(0xa9)),
          (audioSource = _0xce3a48(0xce)),
          (_0x956935 = [
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
          (_0x251d95 = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x326d7c = "en"),
          (modelID = "5"),
          (numeric = _0xce3a48(0x108)),
          (audioSource = _0xce3a48(0x9c)),
          (_0x956935 = [
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
          (_0x251d95 = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      setTimeout(function () {
        const _0x836fac = _0xce3a48;
        action_talk[_0x836fac(0xd9)]();
      }, 0x7d0),
        (_0x5bd365 = [
          data[0x0] + "\x20" + cname,
          data[0x1] + "\x20" + accNum,
          data[0x2] + "\x20" + loanID,
          data[0x3] + "\x20" + loanamout + "\x20" + data[0xf],
          data[0x4] + "\x20" + pendingamount + "\x20" + data[0xf],
          data[0x5] + "\x20" + EMIamount + "\x20" + data[0xf],
          data[0x6] + "\x20" + duedate,
          data[0x7] + "\x20" + pemi,
          data[0x8] + "\x20" + cinstatus,
          data[0x9] + "\x20" + Lastpaiddate,
          data[0xa] + "\x20" + nextemidate,
          data[0xb] + "\x20" + Totalpaidemi,
          data[0xc] + "\x20" + Outstanding + "\x20" + data[0xf],
          data[0xd] + "\x20" + Preclosureamt + "\x20" + data[0xf],
          data[0x10] + "\x20" + Centermangcontactno,
          data[0x11] + "\x20" + Branchmgrname,
          data[0x12] + "\x20" + Branchmgrcontactno,
          data[0xe],
        ]);
      async function _0xd33c91() {
        const _0x49cb3c = _0xce3a48;
        action_talk[_0x49cb3c(0x13c)]();
        const _0x141e7a = await navigator[_0x49cb3c(0xe5)][_0x49cb3c(0xd4)]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x1f85d7 = new AudioContext({ sampleRate: 0x3e80 }),
          _0x1eaabe = _0x1f85d7[_0x49cb3c(0xb5)](_0x141e7a);
        (recorder = new Recorder(_0x1eaabe, { numChannels: 0x1 })),
          recorder[_0x49cb3c(0x13b)]();
      }
      async function _0x4bafb9() {
        const _0x48d6f7 = _0xce3a48;
        recorder &&
          recorder[_0x48d6f7(0xda)] !== _0x48d6f7(0x120) &&
          (recorder[_0x48d6f7(0x13c)](),
          recorder[_0x48d6f7(0x124)](async (_0x120b1d) => {
            const _0x2cf0a9 = _0x48d6f7,
              _0x3f700c = new XMLHttpRequest();
            _0x3f700c[_0x2cf0a9(0x106)]("POST", _0x2cf0a9(0x139), !![]),
              (_0x3f700c[_0x2cf0a9(0xaa)] = function () {
                const _0x17cfc1 = _0x2cf0a9;
                if (_0x3f700c[_0x17cfc1(0xa7)] === XMLHttpRequest["DONE"]) {
                  if (_0x3f700c[_0x17cfc1(0xeb)] === 0xc8) {
                    const _0x26065d = _0x3f700c[_0x17cfc1(0x100)];
                    console["log"]("Response:", _0x26065d),
                      _0x4066a8(_0x26065d);
                  } else
                    console[_0x17cfc1(0x11e)](
                      "Request\x20failed:",
                      _0x3f700c[_0x17cfc1(0x119)]
                    );
                }
              });
            const _0x56babc = new FormData();
            _0x56babc[_0x2cf0a9(0x11d)](_0x2cf0a9(0xbc), _0x120b1d);
            const _0x530cfd = {
              ID: _0x2cf0a9(0x13e),
              modelID: modelID,
              mode: _0x2cf0a9(0x99),
              command: "transcribe",
              userID: _0x2cf0a9(0xc1),
            };
            _0x56babc["append"](
              _0x2cf0a9(0x11b),
              JSON[_0x2cf0a9(0x138)](_0x530cfd)
            ),
              _0x3f700c[_0x2cf0a9(0xe7)](_0x56babc);
          }));
      }
      function _0x2897aa(_0x1ac59f, _0x2c5d2b) {
        const _0x434c86 = _0xce3a48,
          _0x374bc8 = document[_0x434c86(0xf7)](_0x434c86(0x13f)),
          _0xa69daf = _0x434c86(0xd1),
          _0x261761 = _0x434c86(0xd9),
          _0x253397 = _0x434c86(0x102),
          _0x1948f6 = "2",
          _0x57d76a = "hi",
          _0x200ce6 = encodeURIComponent(_0x1ac59f),
          _0x4b760f =
            _0x434c86(0xde) +
            _0x200ce6 +
            _0x434c86(0xc2) +
            _0xa69daf +
            _0x434c86(0xb8) +
            _0x261761 +
            _0x434c86(0x10d) +
            numeric +
            _0x434c86(0x10e) +
            _0x57d76a +
            _0x434c86(0x137) +
            _0x253397 +
            _0x434c86(0xca) +
            _0x1948f6;
        (_0x374bc8[_0x434c86(0xdb)] = _0x4b760f),
          _0x374bc8["play"]()[_0x434c86(0x10f)](function (_0x2b1a32) {
            console["error"]("Error\x20playing\x20audio:", _0x2b1a32);
          }),
          _0x374bc8["addEventListener"]("ended", function () {
            !isCallbackCalled && _0x2c5d2b();
          });
      }
      function _0x4066a8(_0x554ba3) {
        const _0x1c3581 = _0xce3a48,
          _0x1e7284 = JSON[_0x1c3581(0xdc)](_0x554ba3);
        if (
          _0x1e7284["status"] === _0x1c3581(0xa5) &&
          _0x1e7284[_0x1c3581(0xd2)][_0x1c3581(0x134)] > 0x0
        ) {
          const _0x1f4dc5 = _0x1e7284[_0x1c3581(0xd2)][0x0][_0x1c3581(0xa1)];
          console["log"](_0x1c3581(0xc8), _0x1f4dc5);
          const _0x1b0150 = (_0x40cafd) => {
            const _0x4513c4 = _0x1c3581,
              _0x29123b = CryptoJS[_0x4513c4(0xe2)]["encrypt"](
                _0x40cafd,
                "1234567890123456"
              );
            return _0x29123b[_0x4513c4(0x140)]();
          };
          function _0x58d455(_0x45a0e3) {
            return _0x1b0150(_0x45a0e3);
          }
          const _0x131e26 = _0x58d455(applicant_id1),
            _0x24774e = _0x58d455(user_id1),
            _0x136d88 = _0x58d455(_0x1f4dc5),
            _0x5eca47 = "https://metawebapp.azurewebsites.net/request",
            _0x2437e4 = { applicant_id: _0x131e26, user_pin: _0x24774e };
          fetch(_0x5eca47, {
            method: _0x1c3581(0xab),
            headers: { "Content-Type": "application/json" },
            body: JSON[_0x1c3581(0x138)](_0x2437e4),
          })
            [_0x1c3581(0x10b)]((_0x166a74) => {
              if (!_0x166a74["ok"])
                throw new Error(
                  "HTTP\x20error!\x20Status:\x20" + _0x166a74["status"]
                );
              return _0x166a74["json"]();
            })
            [_0x1c3581(0x10b)]((_0x48a5dd) => {
              const _0x214c29 = _0x1c3581;
              console[_0x214c29(0x9a)](_0x214c29(0xc4), _0x48a5dd),
                (request_id = _0x48a5dd[_0x214c29(0xfa)]),
                _0x450643();
            })
            [_0x1c3581(0x10f)]((_0x416df2) => {
              const _0x45e307 = _0x1c3581;
              console[_0x45e307(0x11e)](
                "Error\x20during\x20Request\x20API\x20call:",
                _0x416df2
              );
            });
          function _0x450643() {
            const _0x521a08 = _0x1c3581,
              _0xc0106d = _0x521a08(0xc0);
            console["log"](_0x521a08(0x123), request_id);
            const _0x44ccf7 = {
              request_id: request_id,
              applicant_id: _0x131e26,
              user_pin: _0x24774e,
              response: _0x136d88,
            };
            fetch(_0xc0106d, {
              method: _0x521a08(0xab),
              headers: { "Content-Type": _0x521a08(0xed) },
              body: JSON[_0x521a08(0x138)](_0x44ccf7),
            })
              [_0x521a08(0x10b)]((_0x89397c) => {
                const _0x5eb8e0 = _0x521a08;
                if (!_0x89397c["ok"])
                  throw new Error(
                    _0x5eb8e0(0x115) + _0x89397c[_0x5eb8e0(0xeb)]
                  );
                return _0x89397c[_0x5eb8e0(0xf8)]();
              })
              [_0x521a08(0x10b)]((_0x1c9531) => {
                const _0x1cab3f = _0x521a08;
                console["log"](_0x1cab3f(0xb9), _0x1c9531);
              })
              [_0x521a08(0x10f)]((_0x29b097) => {
                console["error"](
                  "Error\x20during\x20Response\x20API\x20call:",
                  _0x29b097
                );
              });
          }
        } else {
          const _0x2a8856 = document[_0x1c3581(0xf7)](_0x1c3581(0x13f));
          clanguage == "hindi"
            ? (_0x2a8856[_0x1c3581(0xdb)] = _0x1c3581(0xc5))
            : (_0x2a8856["src"] = _0x1c3581(0x135)),
            _0x2a8856[_0x1c3581(0xd9)]()["catch"](function (_0x2f95de) {
              const _0x426bd6 = _0x1c3581;
              console[_0x426bd6(0x11e)](
                "Error\x20playing\x20audio1:",
                _0x2f95de
              );
            }),
            _0x2a8856[_0x1c3581(0xcb)](_0x1c3581(0xcc), function () {});
        }
      }
      function _0x49254a() {
        const _0x5eed26 = _0xce3a48,
          _0x3765ca = document["getElementById"](_0x5eed26(0x13f));
        if (!_0x3765ca) {
          console[_0x5eed26(0x11e)](
            "Audio\x20player\x20element\x20not\x20found."
          );
          return;
        }
        (_0x3765ca["src"] = audioSource),
          _0x3765ca[_0x5eed26(0xd9)]()
            [_0x5eed26(0x10b)](() => {
              const _0x409df7 = _0x5eed26;
              action_talk[_0x409df7(0xd9)]();
            })
            [_0x5eed26(0x10f)]((_0x55f6f0) => {
              const _0x1b0c9c = _0x5eed26;
              console["error"](_0x1b0c9c(0xe4), _0x55f6f0);
            }),
          (_0x3765ca[_0x5eed26(0xbf)] = () => {
            const _0x360c17 = _0x5eed26;
            action_talk["stop"](),
              console[_0x360c17(0x9a)]("Audio\x20playback\x20has\x20ended.");
          });
      }
      var _0x3b2803 = _0x956935[_0xce3a48(0x107)]("."),
        _0x379b15 = _0x251d95["join"]("."),
        _0x3b2803 = _0x956935["join"]("."),
        _0x379b15 = _0x251d95[_0xce3a48(0x107)](".");
      const _0x2b5b96 = _0x3b2803[_0xce3a48(0xfe)](/\.(?!\d)/),
        _0x3ef62a = document["getElementById"](_0xce3a48(0xc6));
      function _0x20cf93(_0x4f605d) {
        const _0x2ee97c = _0xce3a48;
        return _0x4f605d[_0x2ee97c(0x140)]()
          [_0x2ee97c(0xfe)]("")
          ["join"]("\x20");
      }
      function _0x9ea888(_0x57169a) {
        const _0x190810 = _0xce3a48;
        return _0x57169a[_0x190810(0x140)]()
          [_0x190810(0xfe)]("")
          [_0x190810(0x107)]("\x20");
      }
      function _0x4ce816(_0x7e3d0) {
        const _0x149abb = _0xce3a48;
        return _0x7e3d0["toString"]()
          [_0x149abb(0xfe)]("")
          [_0x149abb(0x107)]("\x20");
      }
      function _0x5b589d(_0x514eae) {
        const _0x400764 = _0xce3a48;
        return _0x514eae[_0x400764(0x140)]()
          [_0x400764(0xfe)]("")
          [_0x400764(0x107)]("\x20");
      }
      async function _0x3c7ff3(_0x421c1a) {
        async function _0x4b74fc() {
          const _0x3c70ef = _0x4a4d,
            _0x2ab65b = document[_0x3c70ef(0xf7)](_0x3c70ef(0xc6));
          for (
            let _0x34177e = 0x0;
            _0x34177e < _0x5bd365[_0x3c70ef(0x134)];
            _0x34177e++
          ) {
            let _0x4e0b3a = _0x5bd365[_0x34177e] + ".",
              _0x3ebe76 = _0x20cf93(accNum),
              _0x1715d6 = _0x9ea888(loanID),
              _0x44b982 = _0x5b589d(Branchmgrcontactno),
              _0x51b95b = _0x5b589d(Centermangcontactno);
            if (_0x4e0b3a[_0x3c70ef(0x131)](accNum)) {
              let _0x36faeb = _0x4e0b3a[_0x3c70ef(0x10c)](accNum, _0x3ebe76);
              _0x2ab65b["textContent"] = _0x4e0b3a;
              try {
                await _0x4dc3be(_0x36faeb);
              } catch (_0x48121c) {
                console[_0x3c70ef(0x11e)](_0x3c70ef(0xe4), _0x48121c);
              }
            } else {
              if (_0x4e0b3a["includes"](loanID)) {
                let _0x14b635 = _0x4e0b3a[_0x3c70ef(0x10c)](loanID, _0x1715d6);
                _0x2ab65b[_0x3c70ef(0xe9)] = _0x4e0b3a;
                try {
                  await _0x4dc3be(_0x14b635);
                } catch (_0x27f90e) {
                  console[_0x3c70ef(0x11e)](
                    "Error\x20playing\x20audio:",
                    _0x27f90e
                  );
                }
              } else {
                if (_0x4e0b3a["includes"](Branchmgrcontactno)) {
                  let _0xe2262e = _0x4e0b3a["replace"](
                    Branchmgrcontactno,
                    _0x44b982
                  );
                  _0x2ab65b[_0x3c70ef(0xe9)] = _0x4e0b3a;
                  try {
                    await _0x4dc3be(_0xe2262e);
                  } catch (_0x3a5ebf) {
                    console[_0x3c70ef(0x11e)](_0x3c70ef(0xe4), _0x3a5ebf);
                  }
                } else {
                  if (_0x4e0b3a["includes"](Centermangcontactno)) {
                    let _0x225fa2 = _0x4e0b3a["replace"](
                      Centermangcontactno,
                      _0x51b95b
                    );
                    _0x2ab65b[_0x3c70ef(0xe9)] = _0x4e0b3a;
                    try {
                      await _0x4dc3be(_0x225fa2);
                    } catch (_0xd6063f) {
                      console[_0x3c70ef(0x11e)](_0x3c70ef(0xe4), _0xd6063f);
                    }
                  } else {
                    _0x2ab65b["textContent"] = _0x4e0b3a;
                    try {
                      await _0x4dc3be(_0x4e0b3a);
                    } catch (_0x156894) {
                      console[_0x3c70ef(0x11e)](
                        "Error\x20playing\x20audio:",
                        _0x156894
                      );
                    }
                  }
                }
              }
            }
          }
          await _0xd33c91()
            [_0x3c70ef(0x10b)](() => {
              setTimeout(() => {
                _0x4bafb9();
              }, 0x1770);
            })
            ["then"](() => {
              setTimeout(() => {
                _0x49254a();
              }, 0x1b58);
            }),
            await new Promise((_0x5cc06d) => setTimeout(_0x5cc06d, 0xbb8)),
            (_0x2ab65b[_0x3c70ef(0xf4)] = "");
          try {
          } catch (_0x4368b4) {
            console[_0x3c70ef(0x11e)](_0x3c70ef(0xff), _0x4368b4);
          }
        }
        function _0x4dc3be(_0x4b6c52) {
          return new Promise((_0x4234bc, _0x310bfc) => {
            _0x2897aa(_0x4b6c52, _0x4234bc);
          });
        }
        await _0x4b74fc();
      }
      _0x3c7ff3(0x0);
    });
}
(panorama = new PANOLENS["CubePanorama"]([
  "images/reception/px.jpg",
  _0xca8be8(0xad),
  _0xca8be8(0x125),
  _0xca8be8(0x117),
  _0xca8be8(0xe0),
  _0xca8be8(0xd7),
])),
  (clock = new THREE[_0xca8be8(0xba)]());
var container = document["querySelector"](_0xca8be8(0xa3));
(viewer = new PANOLENS[_0xca8be8(0x132)]({
  output: _0xca8be8(0x116),
  container: container,
})),
  viewer[_0xca8be8(0xae)](0x46),
  viewer[_0xca8be8(0x13a)](panorama),
  viewer["setPanorama"](panorama),
  (hemiLight = new THREE[_0xca8be8(0xf0)](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0xca8be8(0x12a)](0xffffff, 0.5),
  ambientlight = new THREE[_0xca8be8(0x104)](0x404040, 0.56);
panorama[_0xca8be8(0x13a)](ambientlight),
  panorama[_0xca8be8(0x13a)](directionallight),
  directionallight[_0xca8be8(0xd8)][_0xca8be8(0x101)](0x5, 0xa, 7.5),
  (pointlight = new THREE[_0xca8be8(0xe8)](0xffd6aa, 0.8)),
  pointlight[_0xca8be8(0xd8)][_0xca8be8(0x101)](0x0, 0xa, 0x0),
  (pointlight[_0xca8be8(0xf1)] = !![]),
  panorama[_0xca8be8(0x13a)](pointlight),
  (pointlight = pointlight[_0xca8be8(0x11f)]()),
  pointlight[_0xca8be8(0xd8)][_0xca8be8(0x101)](0x41, 0x0, -0x2d),
  (pointlight[_0xca8be8(0xf1)] = !![]),
  panorama[_0xca8be8(0x13a)](pointlight),
  hemiLight[_0xca8be8(0xd8)][_0xca8be8(0x101)](0x7, 0xa, -0x7),
  panorama[_0xca8be8(0x13a)](hemiLight);
var loader = new THREE[_0xca8be8(0xb2)]();
loader[_0xca8be8(0x12f)]("models/bluedress.glb", function (_0x5b8640) {
  const _0x107a31 = _0xca8be8;
  (gltfscene = _0x5b8640["scene"]),
    (gltfglobal = _0x5b8640),
    (car = _0x5b8640[_0x107a31(0x12b)][_0x107a31(0xb4)][0x0]),
    gltfscene[_0x107a31(0xd8)]["set"](-0x5, -0xa, -0xa),
    (gltfscene[_0x107a31(0xf2)]["y"] = 0.2),
    gltfscene[_0x107a31(0x136)][_0x107a31(0x101)](0x8, 0x8, 0x8),
    car["traverse"]((_0x503d8d) => {
      const _0x1da9d0 = _0x107a31;
      _0x503d8d[_0x1da9d0(0xf6)] &&
        ((_0x503d8d[_0x1da9d0(0xf1)] = !![]),
        (_0x503d8d[_0x1da9d0(0x112)] = !![]));
    });
  const _0x1322ba = _0x5b8640["animations"];
  mixer = new THREE[_0x107a31(0xdd)](_0x5b8640["scene"]);
  const _0x52e210 = THREE[_0x107a31(0xd6)][_0x107a31(0x128)](_0x1322ba, "idle"),
    _0x504ee5 = THREE[_0x107a31(0xd6)][_0x107a31(0x128)](
      _0x1322ba,
      _0x107a31(0x121)
    );
  (action_idle = mixer["clipAction"](_0x52e210)),
    (action_talk = mixer[_0x107a31(0xec)](_0x504ee5)),
    panorama[_0x107a31(0x13a)](gltfscene),
    (gltfscene["visible"] = !![]),
    action_idle[_0x107a31(0xd9)](),
    animate();
});
function animate() {
  const _0x3031cb = _0xca8be8;
  var _0x420dbb = clock[_0x3031cb(0xbb)]();
  if (mixer) mixer[_0x3031cb(0x126)](_0x420dbb);
  if (mixer1) mixer1[_0x3031cb(0x126)](_0x420dbb);
  if (mixer2) mixer2["update"](_0x420dbb);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x3ffb26 = _0xca8be8;
  navigator["mediaDevices"]
    ["getUserMedia"]({ video: ![], audio: !![] })
    [_0x3ffb26(0x10b)]((_0x431fee) => {
      const _0x5c50fa = _0x3ffb26;
      (window["localStream"] = _0x431fee),
        (window[_0x5c50fa(0x96)]["srcObject"] = _0x431fee),
        (window[_0x5c50fa(0x96)][_0x5c50fa(0x103)] = !![]);
    })
    [_0x3ffb26(0x10f)]((_0x586f56) => {
      const _0x39c13c = _0x3ffb26;
      console["log"](_0x39c13c(0xcf) + _0x586f56);
    });
}
