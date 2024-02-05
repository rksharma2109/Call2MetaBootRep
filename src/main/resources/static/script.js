const _0x134c74 = _0xac59;
(function (_0x28aa22, _0x313240) {
  const _0xd1f9e9 = _0xac59,
    _0xe90c74 = _0x28aa22();
  while (!![]) {
    try {
      const _0xf39b2c =
        (-parseInt(_0xd1f9e9(0x158)) / 0x1) *
          (parseInt(_0xd1f9e9(0x10b)) / 0x2) +
        parseInt(_0xd1f9e9(0x123)) / 0x3 +
        (-parseInt(_0xd1f9e9(0x1a7)) / 0x4) *
          (-parseInt(_0xd1f9e9(0x129)) / 0x5) +
        (parseInt(_0xd1f9e9(0x139)) / 0x6) *
          (-parseInt(_0xd1f9e9(0x132)) / 0x7) +
        -parseInt(_0xd1f9e9(0x192)) / 0x8 +
        (parseInt(_0xd1f9e9(0x115)) / 0x9) *
          (parseInt(_0xd1f9e9(0x16b)) / 0xa) +
        (parseInt(_0xd1f9e9(0x149)) / 0xb) * (parseInt(_0xd1f9e9(0x178)) / 0xc);
      if (_0xf39b2c === _0x313240) break;
      else _0xe90c74["push"](_0xe90c74["shift"]());
    } catch (_0x1be874) {
      _0xe90c74["push"](_0xe90c74["shift"]());
    }
  }
})(_0xe611, 0x41d14);
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
function _0xac59(_0xf9555e, _0x2fa22e) {
  const _0xe61174 = _0xe611();
  return (
    (_0xac59 = function (_0xac5919, _0x576e57) {
      _0xac5919 = _0xac5919 - 0x109;
      let _0x20dfd0 = _0xe61174[_0xac5919];
      return _0x20dfd0;
    }),
    _0xac59(_0xf9555e, _0x2fa22e)
  );
}
let accNum;
$(window)["on"](_0x134c74(0x127), async function () {
  const _0x59c6ba = _0x134c74;
  $(_0x59c6ba(0x154))["fadeOut"]("slow"), fetchlanguageJSON();
  const _0x89cea2 = $(_0x59c6ba(0x183)),
    _0x388e5c = $(_0x59c6ba(0x171));
  _0x89cea2[_0x59c6ba(0x198)](_0x59c6ba(0x134), !![]),
    _0x388e5c[_0x59c6ba(0x198)](_0x59c6ba(0x134), !![]),
    _0x89cea2["on"](_0x59c6ba(0x133), bankStart),
    _0x388e5c["on"](_0x59c6ba(0x133), bankStart);
  const _0x19fe8f = 0x1770;
  setTimeout(() => {
    const _0x2f844a = _0x59c6ba;
    _0x89cea2[_0x2f844a(0x198)](_0x2f844a(0x134), ![]),
      _0x388e5c["prop"](_0x2f844a(0x134), ![]);
  }, _0x19fe8f);
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
const decryptionAES = (_0x562517) => {
  const _0x17e2d1 = _0x134c74,
    _0x542c1e = CryptoJS["AES"][_0x17e2d1(0x18f)](
      _0x562517,
      "1234567890123456"
    ),
    _0x2054a1 = _0x542c1e[_0x17e2d1(0x197)](
      CryptoJS[_0x17e2d1(0x118)][_0x17e2d1(0x15b)]
    );
  return _0x2054a1;
};
function decryptFromURL() {
  const _0x322962 = _0x134c74,
    _0x3abf33 = new URLSearchParams(window["location"]["search"]),
    _0x488703 = _0x3abf33[_0x322962(0x124)](_0x322962(0x18e));
  let _0x383fd2 = _0x488703["replaceAll"]("\x20", "+");
  console[_0x322962(0x11d)](_0x322962(0x18d) + _0x383fd2);
  const _0x522143 = decodeURIComponent(_0x383fd2);
  if (_0x522143) {
    const _0xce1ff0 = decryptionAES(_0x522143);
    console[_0x322962(0x11d)](_0x322962(0x1a6), _0xce1ff0);
    const _0x28635a = new URLSearchParams(_0xce1ff0);
    (cname = _0x28635a[_0x322962(0x124)](_0x322962(0x1a3))),
      (clanguage = _0x322962(0x17e)),
      (accNum1 = _0x28635a["get"]("accnum")),
      (accNum = accNum1["slice"](-0x4)),
      (loanamout = _0x28635a["get"](_0x322962(0x153))),
      (pendingamount = _0x28635a[_0x322962(0x124)](_0x322962(0x109))),
      (EMIamount = _0x28635a[_0x322962(0x124)]("EMIamount")),
      (duedate = _0x28635a[_0x322962(0x124)](_0x322962(0x156))),
      (pemi = _0x28635a["get"](_0x322962(0x16e))),
      (Lastpaiddate = _0x28635a[_0x322962(0x124)](_0x322962(0x1a1))),
      (cinstatus = _0x28635a[_0x322962(0x124)](_0x322962(0x12a))),
      (nextemidate = _0x28635a[_0x322962(0x124)](_0x322962(0x13f))),
      (Totalpaidemi = _0x28635a["get"](_0x322962(0x1b3))),
      (Outstanding = _0x28635a["get"](_0x322962(0x143))),
      (Preclosureamt = _0x28635a[_0x322962(0x124)](_0x322962(0x17c))),
      (Centermangcontactno = _0x28635a[_0x322962(0x124)](_0x322962(0x1a9))),
      (Branchmgrname = _0x28635a[_0x322962(0x124)](_0x322962(0x17b))),
      (Branchmgrcontactno = _0x28635a[_0x322962(0x124)](_0x322962(0x121))),
      (applicant_id1 = _0x28635a["get"](_0x322962(0x199))),
      (user_id1 = _0x28635a[_0x322962(0x124)]("user_id"));
  } else console[_0x322962(0x11d)](_0x322962(0x10d));
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0x22ce94 = _0x134c74,
    _0x4353ac = await fetch(_0x22ce94(0x1a4));
  return (language_list = await _0x4353ac[_0x22ce94(0x14b)]()), language_list;
}
function _0xe611() {
  const _0x4f2f5d = [
    "disabled",
    "display",
    "isMesh",
    "animations",
    "findByName",
    "551028VyfuDa",
    "innerHTML",
    "https://tts.indiantts.in/tts?text=",
    "set",
    "addEventListener",
    "textContent",
    "nextemidate",
    "Text\x201\x20-------\x20",
    "traverse",
    "state",
    "Outstanding",
    "CONTROLS",
    "currency",
    "querySelector",
    "dev",
    "POST",
    "11rTOcKn",
    "hcurrency",
    "json",
    "clone",
    "error",
    "tweenControlCenter",
    "images/reception/nz.jpg",
    "rotation",
    "style",
    "#container",
    "loanamout",
    ".loader-wrapper",
    "Response:",
    "duedate",
    "Error\x20during\x20Request\x20API\x20call:",
    "527624SrtVWs",
    "GLTFLoader",
    "receiveShadow",
    "Utf8",
    "&api_key=",
    "AnimationMixer",
    "enable",
    "stop",
    "scale",
    "getElementById",
    "&ver=",
    "src",
    "localAudio",
    "images/reception/py.jpg",
    "split",
    "HTTP\x20error!\x20Status:\x20",
    "ready",
    "enableControl",
    "dynamicText",
    "12230osbDwc",
    "status",
    "audio/Hindi_ShrInd.mp3",
    "pemi",
    "catch",
    "audio_base64",
    "#button2",
    "createElement",
    "srcObject",
    "images/reception/px.jpg",
    "AmbientLight",
    "CubePanorama",
    "onreadystatechange",
    "1013988uNJLjT",
    "body",
    "parse",
    "Branchmgrname",
    "Preclosureamt",
    "getUserMedia",
    "hindi",
    "data1",
    "responseText",
    "images/reception/ny.jpg",
    "createMediaStreamSource",
    "#button1",
    "then",
    "castShadow",
    "&lang=",
    "transcript",
    "record",
    "talk",
    "encrypt",
    "getDelta",
    "language",
    "Final\x20Url\x20----\x20",
    "data",
    "decrypt",
    "localStream",
    "console",
    "2386280gVNmHo",
    "length",
    "position",
    "inactive",
    "DirectionalLight",
    "toString",
    "prop",
    "applicant_id",
    "add",
    "join",
    "play",
    "AES",
    "appendChild",
    "Error\x20playing\x20audio:",
    "stringify",
    "Lastpaiddate",
    "open",
    "name",
    "language.json",
    "AnimationClip",
    "Decrypted\x20URL\x20-----\x20",
    "931796TaupGc",
    "append",
    "Centermangcontactno",
    "&numeric=",
    "readyState",
    "mediaDevices",
    "Vector3",
    "visible",
    "trim",
    "clipAction",
    "transcribe",
    "Response\x20API\x20Response:",
    "Totalpaidemi",
    "Se343Dd3SDvoqTSd32df34",
    "Clock",
    "pendingamount",
    "Viewer",
    "2kGgudd",
    "application/json",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "audio/bank.mp3",
    "enableEffect",
    "https://metawebapp.azurewebsites.net/response",
    "success",
    "setPanorama",
    "PointLight",
    "scene",
    "3123fBPkGV",
    "test-1212",
    "ended",
    "enc",
    "alternatives",
    "&action=",
    "models/bluedress.glb",
    "update",
    "log",
    "audioPlayer",
    "Request\x20failed:",
    "Text\x202-------\x20",
    "Branchmgrcontactno",
    "Error\x20playing\x20audio1:",
    "1336518daNIAO",
    "get",
    "requestFullscreen",
    "modal",
    "load",
    "none",
    "5enctyy",
    "cinstatus",
    "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
    "setCameraFov",
    "&samplerate=",
    "u\x20got\x20an\x20error:",
    "audio/English_ShrInd.mp3",
    "images/reception/nx.jpg",
    "images/reception/pz.jpg",
    "7GeIHSY",
    "click",
  ];
  _0xe611 = function () {
    return _0x4f2f5d;
  };
  return _0xe611();
}
fetchlanguageJSON()[_0x134c74(0x184)]((_0x9a0c8a) => {
  const _0x4730f5 = _0x134c74;
  (data = _0x9a0c8a["language"][0x0][clanguage][_0x4730f5(0x18e)]),
    (data1 = _0x9a0c8a[_0x4730f5(0x18c)][0x0][clanguage][_0x4730f5(0x17f)]),
    (data2 = _0x9a0c8a["language"][0x0][clanguage]["data2"]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x4e84f9 = _0x134c74;
  viewer[_0x4e84f9(0x12c)](0x6e),
    noSleep[_0x4e84f9(0x15e)](),
    (document[_0x4e84f9(0x161)](_0x4e84f9(0x126))[_0x4e84f9(0x151)]["display"] =
      _0x4e84f9(0x128)),
    start();
  var _0x572b29 = document[_0x4e84f9(0x172)]("audio");
  (_0x572b29[_0x4e84f9(0x163)] = "audio/bank.mp3"),
    action_idle["play"](),
    viewer[_0x4e84f9(0x10f)](PANOLENS["MODES"]["CARDBOARD"]),
    viewer[_0x4e84f9(0x169)](PANOLENS[_0x4e84f9(0x144)]["DEVICEORIENTATION"]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x1b8d42 = _0x134c74;
  await document[_0x1b8d42(0x179)][_0x1b8d42(0x125)]();
}
function bankStart1() {
  const _0x4d3dea = _0x134c74;
  noSleep["enable"](),
    start(),
    (document[_0x4d3dea(0x161)](_0x4d3dea(0x126))[_0x4d3dea(0x151)][
      _0x4d3dea(0x135)
    ] = "none");
  var _0x49033f = document["createElement"]("audio");
  (_0x49033f[_0x4d3dea(0x163)] = _0x4d3dea(0x10e)),
    action_idle[_0x4d3dea(0x19c)](),
    setTimeout(() => {
      const _0x459c35 = _0x4d3dea;
      viewer[_0x459c35(0x14e)](
        new THREE[_0x459c35(0x1ad)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer[_0x459c35(0x12c)](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x397f54 = _0x134c74;
  document["getElementById"](_0x397f54(0x126))[_0x397f54(0x151)][
    _0x397f54(0x135)
  ] = _0x397f54(0x128);
  let _0xbef6c3 = 0x0;
  viewer[_0x397f54(0x14e)](
    new THREE[_0x397f54(0x1ad)](-0x5, -0x3e8, -0x1388),
    0x12c
  ),
    $(document)[_0x397f54(0x168)](function () {
      const _0x212aa3 = _0x397f54;
      var _0x1e8e21, _0x583f68, _0x19d2ce, _0x303ee0;
      clanguage == _0x212aa3(0x17e)
        ? ((_0x583f68 = "hi"),
          (modelID = "6"),
          (numeric = _0x212aa3(0x14a)),
          (_0x19d2ce = [
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
          (_0x303ee0 = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x583f68 = "en"),
          (modelID = "5"),
          (numeric = _0x212aa3(0x145)),
          (audioSource = "audio/English_Audio.mp3"),
          (_0x19d2ce = [
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
          (_0x303ee0 = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      setTimeout(function () {
        const _0x4653a9 = _0x212aa3;
        action_talk[_0x4653a9(0x19c)]();
      }, 0x7d0),
        (_0x1e8e21 = [
          data[0x0] + "\x20" + cname,
          data[0x1] + "\x20" + accNum,
          data[0x2] + "\x20" + loanamout,
          data[0x3] + "\x20" + pendingamount,
          data[0x4] + "\x20" + EMIamount,
          data[0x5] + "\x20" + duedate,
          data[0x6] + "\x20" + pemi,
          data[0x7] + "" + cinstatus,
          data[0x8] + "" + Lastpaiddate,
          data[0x9] + "" + nextemidate,
          data[0xa] + "" + Totalpaidemi,
          data[0xb] + "" + Outstanding,
          data[0xc] + "" + Preclosureamt,
          data[0xd],
        ]);
      async function _0x1bd1b4() {
        const _0x551599 = _0x212aa3;
        action_talk["stop"]();
        const _0x977166 = await navigator["mediaDevices"][_0x551599(0x17d)]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0xae304e = new AudioContext({ sampleRate: 0x3e80 }),
          _0x223994 = _0xae304e[_0x551599(0x182)](_0x977166);
        (recorder = new Recorder(_0x223994, { numChannels: 0x1 })),
          recorder[_0x551599(0x188)]();
      }
      async function _0x470e85() {
        const _0x48e41b = _0x212aa3;
        recorder &&
          recorder[_0x48e41b(0x142)] !== _0x48e41b(0x195) &&
          (recorder["stop"](),
          recorder["exportWAV"](async (_0x50ac7f) => {
            const _0xe26698 = _0x48e41b,
              _0x219723 = new XMLHttpRequest();
            _0x219723[_0xe26698(0x1a2)](
              _0xe26698(0x148),
              "https://asr-api.vspeech.ai/api/asr/v1",
              !![]
            ),
              (_0x219723[_0xe26698(0x177)] = function () {
                const _0x3111e5 = _0xe26698;
                if (_0x219723[_0x3111e5(0x1ab)] === XMLHttpRequest["DONE"]) {
                  if (_0x219723[_0x3111e5(0x16c)] === 0xc8) {
                    const _0x9b79a6 = _0x219723[_0x3111e5(0x180)];
                    console[_0x3111e5(0x11d)](_0x3111e5(0x155), _0x9b79a6),
                      _0x1a0299(_0x9b79a6);
                  } else
                    console["error"](_0x3111e5(0x11f), _0x219723["statusText"]);
                }
              });
            const _0x15c2dd = new FormData();
            _0x15c2dd[_0xe26698(0x1a8)](_0xe26698(0x170), _0x50ac7f);
            const _0x9329f7 = {
              ID: _0xe26698(0x116),
              modelID: modelID,
              mode: _0xe26698(0x147),
              command: _0xe26698(0x1b1),
              userID: _0xe26698(0x1b4),
            };
            _0x15c2dd[_0xe26698(0x1a8)](
              "metadata",
              JSON[_0xe26698(0x1a0)](_0x9329f7)
            ),
              _0x219723["send"](_0x15c2dd);
          }));
      }
      function _0x4c03cd(_0x2ffecb, _0x5e3d00) {
        const _0x54cbb0 = _0x212aa3,
          _0x303c76 = document["getElementById"](_0x54cbb0(0x11e)),
          _0x34de91 = _0x54cbb0(0x12b),
          _0x3cd6b9 = _0x54cbb0(0x19c),
          _0x87d267 = "8000",
          _0x1aa443 = "2",
          _0x337d31 = "hi",
          _0x571455 = encodeURIComponent(_0x2ffecb),
          _0x39149a =
            _0x54cbb0(0x13b) +
            _0x571455 +
            _0x54cbb0(0x15c) +
            _0x34de91 +
            _0x54cbb0(0x11a) +
            _0x3cd6b9 +
            _0x54cbb0(0x1aa) +
            numeric +
            _0x54cbb0(0x186) +
            _0x337d31 +
            _0x54cbb0(0x12d) +
            _0x87d267 +
            _0x54cbb0(0x162) +
            _0x1aa443;
        (_0x303c76["src"] = _0x39149a),
          _0x303c76[_0x54cbb0(0x19c)]()[_0x54cbb0(0x16f)](function (_0x208d62) {
            const _0x4e5613 = _0x54cbb0;
            console[_0x4e5613(0x14d)](_0x4e5613(0x19f), _0x208d62);
          }),
          _0x303c76[_0x54cbb0(0x13d)](_0x54cbb0(0x117), function () {
            !isCallbackCalled && _0x5e3d00();
          });
      }
      function _0x1a0299(_0x1909d0) {
        const _0x370fb6 = _0x212aa3,
          _0x5d0021 = JSON[_0x370fb6(0x17a)](_0x1909d0);
        if (
          _0x5d0021[_0x370fb6(0x16c)] === _0x370fb6(0x111) &&
          _0x5d0021[_0x370fb6(0x119)][_0x370fb6(0x193)] > 0x0
        ) {
          const _0x3a762e = _0x5d0021[_0x370fb6(0x119)][0x0][_0x370fb6(0x187)];
          console[_0x370fb6(0x11d)](
            "Generated\x20Text\x20-----\x20",
            _0x3a762e
          );
          const _0x21aefe = (_0x4b5e3a) => {
            const _0x138711 = _0x370fb6,
              _0x3409dd = CryptoJS[_0x138711(0x19d)][_0x138711(0x18a)](
                _0x4b5e3a,
                "1234567890123456"
              );
            return _0x3409dd[_0x138711(0x197)]();
          };
          function _0xa15e65(_0x1b4601) {
            return _0x21aefe(_0x1b4601);
          }
          const _0x566d90 = _0xa15e65(applicant_id1),
            _0x36fadb = _0xa15e65(user_id1),
            _0x401c0f = _0xa15e65(_0x3a762e),
            _0x5ab734 = "https://metawebapp.azurewebsites.net/request",
            _0x1cd822 = { applicant_id: _0x566d90 };
          fetch(_0x5ab734, {
            method: _0x370fb6(0x148),
            headers: { "Content-Type": _0x370fb6(0x10c) },
            body: JSON[_0x370fb6(0x1a0)](_0x1cd822),
          })
            [_0x370fb6(0x184)]((_0x37e611) => {
              const _0x1b19e4 = _0x370fb6;
              if (!_0x37e611["ok"])
                throw new Error(
                  "HTTP\x20error!\x20Status:\x20" + _0x37e611[_0x1b19e4(0x16c)]
                );
              return _0x37e611["json"]();
            })
            [_0x370fb6(0x184)]((_0x1f266e) => {
              const _0x3ac674 = _0x370fb6;
              console[_0x3ac674(0x11d)](
                "Request\x20API\x20Response:",
                _0x1f266e
              ),
                _0x38deed();
            })
            [_0x370fb6(0x16f)]((_0x1f8990) => {
              const _0x14a86e = _0x370fb6;
              console[_0x14a86e(0x14d)](_0x14a86e(0x157), _0x1f8990);
            });
          function _0x38deed() {
            const _0x185bd9 = _0x370fb6,
              _0x80325b = _0x185bd9(0x110),
              _0x144ce6 = {
                applicant_id: _0x566d90,
                user_pin: _0x36fadb,
                response: _0x401c0f,
              };
            fetch(_0x80325b, {
              method: "POST",
              headers: { "Content-Type": _0x185bd9(0x10c) },
              body: JSON[_0x185bd9(0x1a0)](_0x144ce6),
            })
              [_0x185bd9(0x184)]((_0x39fb07) => {
                const _0x15253a = _0x185bd9;
                if (!_0x39fb07["ok"])
                  throw new Error(
                    _0x15253a(0x167) + _0x39fb07[_0x15253a(0x16c)]
                  );
                return _0x39fb07["json"]();
              })
              [_0x185bd9(0x184)]((_0x14fa90) => {
                const _0x19d06f = _0x185bd9;
                console[_0x19d06f(0x11d)](_0x19d06f(0x1b2), _0x14fa90);
              })
              [_0x185bd9(0x16f)]((_0xfa4671) => {
                console["error"](
                  "Error\x20during\x20Response\x20API\x20call:",
                  _0xfa4671
                );
              });
          }
        } else {
          const _0x37ad76 = document[_0x370fb6(0x161)](_0x370fb6(0x11e));
          clanguage == _0x370fb6(0x17e)
            ? (_0x37ad76[_0x370fb6(0x163)] = _0x370fb6(0x16d))
            : (_0x37ad76[_0x370fb6(0x163)] = _0x370fb6(0x12f)),
            _0x37ad76["play"]()[_0x370fb6(0x16f)](function (_0x4192c4) {
              const _0x276ce5 = _0x370fb6;
              console[_0x276ce5(0x14d)](_0x276ce5(0x122), _0x4192c4);
            }),
            _0x37ad76[_0x370fb6(0x13d)](_0x370fb6(0x117), function () {});
        }
      }
      function _0x44d311() {
        const _0x34e125 = _0x212aa3,
          _0x259b7d = document[_0x34e125(0x161)](_0x34e125(0x11e));
        action_talk["play"](),
          (_0x259b7d[_0x34e125(0x163)] = audioSource),
          _0x259b7d[_0x34e125(0x19c)]()[_0x34e125(0x16f)](function (_0x273e2c) {
            const _0x1720ca = _0x34e125;
            console[_0x1720ca(0x14d)]("Error\x20playing\x20audio:", _0x273e2c);
          }),
          _0x259b7d["addEventListener"](_0x34e125(0x117), function () {
            const _0x1eca9c = _0x34e125;
            action_talk[_0x1eca9c(0x15f)]();
          });
      }
      var _0x10c764 = _0x19d2ce[_0x212aa3(0x19b)]("."),
        _0x4db4c3 = _0x303ee0[_0x212aa3(0x19b)](".");
      console[_0x212aa3(0x11d)](_0x212aa3(0x140), _0x10c764),
        console["log"](_0x212aa3(0x120), _0x4db4c3);
      var _0x10c764 = _0x19d2ce[_0x212aa3(0x19b)]("."),
        _0x4db4c3 = _0x303ee0[_0x212aa3(0x19b)](".");
      const _0x32a430 = _0x10c764[_0x212aa3(0x166)](/\.(?!\d)/),
        _0x1115b9 = document[_0x212aa3(0x161)](_0x212aa3(0x16a));
      function _0x338be9(_0x11aa85) {
        const _0x44c122 = _0x212aa3;
        if (_0x11aa85 < _0x32a430[_0x44c122(0x193)]) {
          const _0x2bb3c2 = document[_0x44c122(0x172)]("p");
          let _0x2559de = _0x32a430[_0x11aa85][_0x44c122(0x1af)]();
          if (_0x11aa85 >= _0x32a430[_0x44c122(0x193)] - 0x1)
            for (
              let _0x1bad64 = _0x11aa85 + 0x1;
              _0x1bad64 < _0x32a430["length"];
              _0x1bad64++
            ) {
              _0x2559de += "\x20" + _0x32a430[_0x1bad64]["trim"]();
            }
          (_0x2bb3c2["textContent"] = _0x2559de),
            _0x1115b9[_0x44c122(0x19e)](_0x2bb3c2);
          let _0xf87882;
          switch (_0x11aa85) {
            case 0x0:
              _0xf87882 = 0x2710;
              break;
            case 0x1:
              _0xf87882 = 0xdac;
              break;
            case 0x4:
              _0xf87882 = 0x1388;
              break;
            case 0x6:
              _0xf87882 = 0x7d0;
              break;
            case 0x8:
              _0xf87882 = 0x1388;
              break;
            default:
              _0xf87882 = 0xbb8;
          }
          setTimeout(() => {
            (_0x1115b9["innerHTML"] = ""), _0x338be9(_0x11aa85 + 0x1);
          }, _0xf87882);
        } else {
          const _0x33322d = _0x4db4c3[_0x44c122(0x166)](".");
          _0x33322d["forEach"]((_0x2488f7, _0x166889) => {
            const _0x21ed65 = _0x44c122,
              _0x46fa2b = document[_0x21ed65(0x172)]("p");
            (_0x46fa2b[_0x21ed65(0x13e)] = _0x2488f7[_0x21ed65(0x1af)]()),
              _0x1115b9[_0x21ed65(0x19e)](_0x46fa2b),
              setTimeout(() => {
                const _0x771aa1 = _0x21ed65;
                _0x1115b9[_0x771aa1(0x13a)] = "";
                if (_0x166889 === _0x33322d[_0x771aa1(0x193)] - 0x1) {
                }
              }, 0xc350);
          });
        }
      }
      _0x338be9(0x0);
      const _0x1096bf = _0x1e8e21[_0x212aa3(0x19b)](".\x20");
      _0x4c03cd(_0x1096bf, async function () {
        (isCallbackCalled = !![]),
          await _0x1bd1b4(),
          setTimeout(() => {
            _0x470e85(), _0x44d311(function () {});
          }, 0x1388);
      });
    });
}
(panorama = new PANOLENS[_0x134c74(0x176)]([
  _0x134c74(0x174),
  _0x134c74(0x130),
  _0x134c74(0x165),
  _0x134c74(0x181),
  _0x134c74(0x131),
  _0x134c74(0x14f),
])),
  (clock = new THREE[_0x134c74(0x1b5)]());
var container = document[_0x134c74(0x146)](_0x134c74(0x152));
(viewer = new PANOLENS[_0x134c74(0x10a)]({
  output: _0x134c74(0x191),
  container: container,
})),
  viewer[_0x134c74(0x12c)](0x46),
  viewer["add"](panorama),
  viewer[_0x134c74(0x112)](panorama),
  (hemiLight = new THREE["HemisphereLight"](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x134c74(0x196)](0xffffff, 0.5),
  ambientlight = new THREE[_0x134c74(0x175)](0x404040, 0.56);
panorama[_0x134c74(0x19a)](ambientlight),
  panorama[_0x134c74(0x19a)](directionallight),
  directionallight[_0x134c74(0x194)]["set"](0x5, 0xa, 7.5),
  (pointlight = new THREE[_0x134c74(0x113)](0xffd6aa, 0.8)),
  pointlight[_0x134c74(0x194)][_0x134c74(0x13c)](0x0, 0xa, 0x0),
  (pointlight["castShadow"] = !![]),
  panorama["add"](pointlight),
  (pointlight = pointlight[_0x134c74(0x14c)]()),
  pointlight[_0x134c74(0x194)][_0x134c74(0x13c)](0x41, 0x0, -0x2d),
  (pointlight[_0x134c74(0x185)] = !![]),
  panorama["add"](pointlight),
  hemiLight[_0x134c74(0x194)]["set"](0x7, 0xa, -0x7),
  panorama[_0x134c74(0x19a)](hemiLight);
var loader = new THREE[_0x134c74(0x159)]();
loader["load"](_0x134c74(0x11b), function (_0x36f022) {
  const _0xa0a500 = _0x134c74;
  (gltfscene = _0x36f022[_0xa0a500(0x114)]),
    (gltfglobal = _0x36f022),
    (car = _0x36f022["scene"]["children"][0x0]),
    gltfscene[_0xa0a500(0x194)]["set"](-0x5, -0xa, -0xa),
    (gltfscene[_0xa0a500(0x150)]["y"] = 0.2),
    gltfscene[_0xa0a500(0x160)][_0xa0a500(0x13c)](0x8, 0x8, 0x8),
    car[_0xa0a500(0x141)]((_0x412edb) => {
      const _0x19a5c4 = _0xa0a500;
      _0x412edb[_0x19a5c4(0x136)] &&
        ((_0x412edb["castShadow"] = !![]),
        (_0x412edb[_0x19a5c4(0x15a)] = !![]));
    });
  const _0x498901 = _0x36f022[_0xa0a500(0x137)];
  mixer = new THREE[_0xa0a500(0x15d)](_0x36f022["scene"]);
  const _0x3d331d = THREE[_0xa0a500(0x1a5)][_0xa0a500(0x138)](
      _0x498901,
      "idle"
    ),
    _0x638fb2 = THREE[_0xa0a500(0x1a5)][_0xa0a500(0x138)](
      _0x498901,
      _0xa0a500(0x189)
    );
  (action_idle = mixer[_0xa0a500(0x1b0)](_0x3d331d)),
    (action_talk = mixer[_0xa0a500(0x1b0)](_0x638fb2)),
    panorama[_0xa0a500(0x19a)](gltfscene),
    (gltfscene[_0xa0a500(0x1ae)] = !![]),
    action_idle[_0xa0a500(0x19c)](),
    animate();
});
function animate() {
  const _0x5e3e68 = _0x134c74;
  var _0x3c0574 = clock[_0x5e3e68(0x18b)]();
  if (mixer) mixer[_0x5e3e68(0x11c)](_0x3c0574);
  if (mixer1) mixer1[_0x5e3e68(0x11c)](_0x3c0574);
  if (mixer2) mixer2["update"](_0x3c0574);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x4e7f8e = _0x134c74;
  navigator[_0x4e7f8e(0x1ac)]
    [_0x4e7f8e(0x17d)]({ video: ![], audio: !![] })
    [_0x4e7f8e(0x184)]((_0x17ab69) => {
      const _0x1c1542 = _0x4e7f8e;
      (window[_0x1c1542(0x190)] = _0x17ab69),
        (window[_0x1c1542(0x164)][_0x1c1542(0x173)] = _0x17ab69),
        (window[_0x1c1542(0x164)]["autoplay"] = !![]);
    })
    [_0x4e7f8e(0x16f)]((_0xee3ade) => {
      const _0x2a30a2 = _0x4e7f8e;
      console[_0x2a30a2(0x11d)](_0x2a30a2(0x12e) + _0xee3ade);
    });
}
