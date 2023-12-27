const _0x4afaa0 = _0x3966;
(function (_0x5f9a1b, _0x2a54c3) {
  const _0x21d6c0 = _0x3966,
    _0xb1e2a5 = _0x5f9a1b();
  while (!![]) {
    try {
      const _0x194d0e =
        -parseInt(_0x21d6c0(0x1fa)) / 0x1 +
        (-parseInt(_0x21d6c0(0x20d)) / 0x2) *
          (parseInt(_0x21d6c0(0x190)) / 0x3) +
        (-parseInt(_0x21d6c0(0x18d)) / 0x4) *
          (parseInt(_0x21d6c0(0x21a)) / 0x5) +
        -parseInt(_0x21d6c0(0x1c3)) / 0x6 +
        (parseInt(_0x21d6c0(0x1b0)) / 0x7) *
          (-parseInt(_0x21d6c0(0x21b)) / 0x8) +
        (-parseInt(_0x21d6c0(0x1e0)) / 0x9) *
          (-parseInt(_0x21d6c0(0x203)) / 0xa) +
        (-parseInt(_0x21d6c0(0x19d)) / 0xb) *
          (-parseInt(_0x21d6c0(0x1c9)) / 0xc);
      if (_0x194d0e === _0x2a54c3) break;
      else _0xb1e2a5["push"](_0xb1e2a5["shift"]());
    } catch (_0x3de7f6) {
      _0xb1e2a5["push"](_0xb1e2a5["shift"]());
    }
  }
})(_0x1269, 0xb7a62);
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
$(window)["on"](_0x4afaa0(0x188), async function () {
  const _0x35af91 = _0x4afaa0;
  $(".loader-wrapper")[_0x35af91(0x1aa)]("slow"),
    fetchlanguageJSON(),
    document[_0x35af91(0x207)](_0x35af91(0x1b6))[_0x35af91(0x219)](
      "click",
      bankStart
    ),
    document[_0x35af91(0x207)](_0x35af91(0x1b5))[_0x35af91(0x219)](
      _0x35af91(0x1c0),
      bankStart
    );
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
const decryptionAES = (_0x161d3a) => {
  const _0x34ae4c = _0x4afaa0,
    _0x3cbb1a = CryptoJS["AES"][_0x34ae4c(0x1d4)](_0x161d3a, _0x34ae4c(0x1d7)),
    _0x30f84c = _0x3cbb1a[_0x34ae4c(0x182)](
      CryptoJS[_0x34ae4c(0x204)][_0x34ae4c(0x18f)]
    );
  return _0x30f84c;
};
function decryptFromURL() {
  const _0xd572f5 = _0x4afaa0,
    _0x3fc373 = new URLSearchParams(window["location"][_0xd572f5(0x1f1)]),
    _0xba0fb8 = _0x3fc373[_0xd572f5(0x1e4)]("data");
  let _0x5420a1 = _0xba0fb8["replaceAll"]("\x20", "+");
  console[_0xd572f5(0x196)](_0xd572f5(0x1b2) + _0x5420a1);
  const _0x225b7e = decodeURIComponent(_0x5420a1);
  if (_0x225b7e) {
    const _0x2a1c78 = decryptionAES(_0x225b7e);
    console["log"](_0xd572f5(0x18b), _0x2a1c78);
    const _0x34011e = new URLSearchParams(_0x2a1c78);
    (cname = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1c2))),
      (clanguage = _0x34011e["get"]("clanguage")),
      (accNum = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x210))),
      (loanamout = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x212))),
      (pendingamount = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1e1))),
      (EMIamount = _0x34011e["get"](_0xd572f5(0x19a))),
      (duedate = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1f8))),
      (pemi = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1d2))),
      (Lastpaiddate = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1bf))),
      (cinstatus = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1fc))),
      (nextemidate = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x185))),
      (Totalpaidemi = _0x34011e["get"]("Totalpaidemi")),
      (Outstanding = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1a2))),
      (Preclosureamt = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1d0))),
      (Centermangcontactno = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x184))),
      (Branchmgrname = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x19e))),
      (Branchmgrcontactno = _0x34011e["get"](_0xd572f5(0x1e9))),
      (applicant_id1 = _0x34011e[_0xd572f5(0x1e4)](_0xd572f5(0x1f4))),
      (user_id1 = _0x34011e[_0xd572f5(0x1e4)]("user_id"));
  } else console["log"](_0xd572f5(0x1e5));
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0x3fe128 = await fetch("language.json");
  return (language_list = await _0x3fe128["json"]()), language_list;
}
fetchlanguageJSON()[_0x4afaa0(0x1dc)]((_0x2681bb) => {
  const _0x66eec8 = _0x4afaa0;
  (data = _0x2681bb[_0x66eec8(0x191)][0x0][clanguage][_0x66eec8(0x1ad)]),
    (data1 = _0x2681bb[_0x66eec8(0x191)][0x0][clanguage][_0x66eec8(0x213)]),
    (data2 = _0x2681bb[_0x66eec8(0x191)][0x0][clanguage]["data2"]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x176650 = _0x4afaa0;
  viewer["setCameraFov"](0x6e),
    noSleep[_0x176650(0x1cd)](),
    (document[_0x176650(0x207)](_0x176650(0x217))["style"]["display"] =
      _0x176650(0x21e)),
    start();
  var _0x267994 = document[_0x176650(0x1a7)]("audio");
  (_0x267994["src"] = _0x176650(0x1ab)),
    action_idle["play"](),
    viewer[_0x176650(0x1ca)](PANOLENS[_0x176650(0x1ef)]["CARDBOARD"]),
    viewer["enableControl"](PANOLENS[_0x176650(0x214)][_0x176650(0x1ba)]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x444258 = _0x4afaa0;
  await document[_0x444258(0x1b1)][_0x444258(0x1eb)]();
}
function _0x1269() {
  const _0x473d69 = [
    "modal",
    "https://metawebapp.azurewebsites.net/request",
    "addEventListener",
    "35930FYsKze",
    "8depwjZ",
    "parse",
    "onreadystatechange",
    "none",
    "state",
    "hindi",
    "status",
    "audio_base64",
    "stringify",
    "join",
    "POST",
    "toString",
    "Error\x20playing\x20audio:",
    "Centermangcontactno",
    "nextemidate",
    "HTTP\x20error!\x20Status:\x20",
    "application/json",
    "load",
    "DONE",
    "https://tts.indiantts.in/tts?text=",
    "Decrypted\x20URL\x20-----\x20",
    "append",
    "328nFOciP",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "Utf8",
    "3CDyLot",
    "language",
    "transcribe",
    "audio",
    "length",
    "GLTFLoader",
    "log",
    "&lang=",
    "HemisphereLight",
    "src",
    "EMIamount",
    "8000",
    "animations",
    "440DyhYaN",
    "Branchmgrname",
    "error",
    "createMediaStreamSource",
    "send",
    "Outstanding",
    "castShadow",
    "receiveShadow",
    "style",
    "scene",
    "createElement",
    "AnimationClip",
    "images/reception/pz.jpg",
    "fadeOut",
    "audio/bank.mp3",
    "&ver=",
    "data",
    "images/reception/nz.jpg",
    "audio/Hindi_ShrInd.mp3",
    "9365923FbKYnr",
    "body",
    "Final\x20Url\x20----\x20",
    "Response:",
    "CubePanorama",
    "button2",
    "button1",
    "currency",
    "AES",
    "setCameraFov",
    "DEVICEORIENTATION",
    "images/reception/nx.jpg",
    "textContent",
    "getDelta",
    "mediaDevices",
    "Lastpaiddate",
    "click",
    "Vector3",
    "name",
    "7716792cRGbGW",
    "success",
    "appendChild",
    "findByName",
    "open",
    "forEach",
    "1304412yOsIIP",
    "enableEffect",
    "Clock",
    "Response\x20API\x20Response:",
    "enable",
    "audio/English_Audio.mp3",
    "dynamicText",
    "Preclosureamt",
    "encrypt",
    "pemi",
    "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
    "decrypt",
    "hcurrency",
    "getUserMedia",
    "1234567890123456",
    "idle",
    "update",
    "dev",
    "position",
    "then",
    "DirectionalLight",
    "models/bluedress.glb",
    "srcObject",
    "246591hhpaul",
    "pendingamount",
    "isMesh",
    "console",
    "get",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "AmbientLight",
    "ended",
    "Request\x20failed:",
    "Branchmgrcontactno",
    "Error\x20playing\x20audio1:",
    "requestFullscreen",
    "test-1212",
    "innerHTML",
    "catch",
    "MODES",
    "inactive",
    "search",
    "split",
    "audio/Hindi_Audio.mp3",
    "applicant_id",
    "traverse",
    "Error\x20during\x20Request\x20API\x20call:",
    "Request\x20API\x20Response:",
    "duedate",
    "autoplay",
    "1242176IRAQEC",
    "audio/English_ShrInd.mp3",
    "cinstatus",
    "children",
    "localAudio",
    "stop",
    "&action=",
    "clone",
    "clipAction",
    "540RXzoNZ",
    "enc",
    "set",
    "trim",
    "getElementById",
    "display",
    "setPanorama",
    "record",
    "play",
    "add",
    "1239622QrCPEB",
    "visible",
    "querySelector",
    "accnum",
    "tweenControlCenter",
    "loanamout",
    "data1",
    "CONTROLS",
    "audioPlayer",
    "Generated\x20Text\x20-----\x20",
  ];
  _0x1269 = function () {
    return _0x473d69;
  };
  return _0x1269();
}
function bankStart1() {
  const _0x5162e3 = _0x4afaa0;
  noSleep[_0x5162e3(0x1cd)](),
    start(),
    (document["getElementById"](_0x5162e3(0x217))[_0x5162e3(0x1a5)][
      _0x5162e3(0x208)
    ] = _0x5162e3(0x21e));
  var _0x485150 = document[_0x5162e3(0x1a7)](_0x5162e3(0x193));
  (_0x485150[_0x5162e3(0x199)] = _0x5162e3(0x1ab)),
    action_idle[_0x5162e3(0x20b)](),
    setTimeout(() => {
      const _0x1cea69 = _0x5162e3;
      viewer[_0x1cea69(0x211)](
        new THREE[_0x1cea69(0x1c1)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer[_0x1cea69(0x1b9)](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x160eb3 = _0x4afaa0;
  document[_0x160eb3(0x207)]("modal")["style"][_0x160eb3(0x208)] =
    _0x160eb3(0x21e);
  let _0x484d32 = 0x0;
  viewer["tweenControlCenter"](
    new THREE["Vector3"](-0x5, -0x3e8, -0x1388),
    0x12c
  ),
    $(document)["ready"](function () {
      const _0x27f63d = _0x160eb3;
      var _0x1f42ee, _0x52fcce, _0xfcbbfb, _0x26b203;
      clanguage == "hindi"
        ? ((_0x52fcce = "hi"),
          (modelID = "6"),
          (numeric = _0x27f63d(0x1d5)),
          (audioSource = _0x27f63d(0x1f3)),
          (_0xfcbbfb = [
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
          (_0x26b203 = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x52fcce = "en"),
          (modelID = "5"),
          (numeric = _0x27f63d(0x1b7)),
          (audioSource = _0x27f63d(0x1ce)),
          (_0xfcbbfb = [
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
          (_0x26b203 = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      action_talk[_0x27f63d(0x20b)](),
        (_0x1f42ee = [
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
      async function _0x17b791() {
        const _0x3d7f72 = _0x27f63d;
        action_talk[_0x3d7f72(0x1ff)]();
        const _0x129969 = await navigator[_0x3d7f72(0x1be)]["getUserMedia"]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x1466b8 = new AudioContext({ sampleRate: 0x3e80 }),
          _0x375e37 = _0x1466b8[_0x3d7f72(0x1a0)](_0x129969);
        (recorder = new Recorder(_0x375e37, { numChannels: 0x1 })),
          recorder[_0x3d7f72(0x20a)]();
      }
      async function _0x143661() {
        const _0x463431 = _0x27f63d;
        recorder &&
          recorder[_0x463431(0x21f)] !== _0x463431(0x1f0) &&
          (recorder[_0x463431(0x1ff)](),
          recorder["exportWAV"](async (_0x31635b) => {
            const _0x34dbae = _0x463431,
              _0x1c2f9f = new XMLHttpRequest();
            _0x1c2f9f[_0x34dbae(0x1c7)](
              _0x34dbae(0x181),
              _0x34dbae(0x18e),
              !![]
            ),
              (_0x1c2f9f[_0x34dbae(0x21d)] = function () {
                const _0x43e273 = _0x34dbae;
                if (
                  _0x1c2f9f["readyState"] === XMLHttpRequest[_0x43e273(0x189)]
                ) {
                  if (_0x1c2f9f["status"] === 0xc8) {
                    const _0x4764eb = _0x1c2f9f["responseText"];
                    console[_0x43e273(0x196)](_0x43e273(0x1b3), _0x4764eb),
                      _0xf0e3e6(_0x4764eb);
                  } else
                    console[_0x43e273(0x19f)](
                      _0x43e273(0x1e8),
                      _0x1c2f9f["statusText"]
                    );
                }
              });
            const _0xe00168 = new FormData();
            _0xe00168["append"](_0x34dbae(0x17e), _0x31635b);
            const _0x118cdd = {
              ID: _0x34dbae(0x1ec),
              modelID: modelID,
              mode: _0x34dbae(0x1da),
              command: _0x34dbae(0x192),
              userID: "Se343Dd3SDvoqTSd32df34",
            };
            _0xe00168[_0x34dbae(0x18c)](
              "metadata",
              JSON[_0x34dbae(0x17f)](_0x118cdd)
            ),
              _0x1c2f9f[_0x34dbae(0x1a1)](_0xe00168);
          }));
      }
      function _0x33b0aa(_0x23fdc5, _0x195f63) {
        const _0x514766 = _0x27f63d,
          _0x424d48 = document[_0x514766(0x207)](_0x514766(0x215)),
          _0x450c45 = _0x514766(0x1d3),
          _0x5d499d = _0x514766(0x20b),
          _0x2fd2eb = _0x514766(0x19b),
          _0x3d1eab = "2",
          _0x54c30f = "hi",
          _0x104b75 = encodeURIComponent(_0x23fdc5),
          _0x44aee7 =
            _0x514766(0x18a) +
            _0x104b75 +
            "&api_key=" +
            _0x450c45 +
            _0x514766(0x200) +
            _0x5d499d +
            "&numeric=" +
            numeric +
            _0x514766(0x197) +
            _0x54c30f +
            "&samplerate=" +
            _0x2fd2eb +
            _0x514766(0x1ac) +
            _0x3d1eab;
        (_0x424d48[_0x514766(0x199)] = _0x44aee7),
          _0x424d48[_0x514766(0x20b)]()["catch"](function (_0x544a83) {
            const _0x5568a8 = _0x514766;
            console[_0x5568a8(0x19f)](_0x5568a8(0x183), _0x544a83);
          }),
          _0x424d48[_0x514766(0x219)]("ended", function () {
            !isCallbackCalled && _0x195f63();
          });
      }
      function _0xf0e3e6(_0x44f043) {
        const _0x2389a5 = _0x27f63d,
          _0x1564d4 = JSON[_0x2389a5(0x21c)](_0x44f043);
        if (
          _0x1564d4[_0x2389a5(0x17d)] === _0x2389a5(0x1c4) &&
          _0x1564d4["alternatives"][_0x2389a5(0x194)] > 0x0
        ) {
          const _0x4854d1 = _0x1564d4["alternatives"][0x0]["transcript"];
          console[_0x2389a5(0x196)](_0x2389a5(0x216), _0x4854d1);
          const _0x24def6 = (_0x28277e) => {
            const _0x568d29 = _0x2389a5,
              _0x5e35d5 = CryptoJS[_0x568d29(0x1b8)][_0x568d29(0x1d1)](
                _0x28277e,
                _0x568d29(0x1d7)
              );
            return _0x5e35d5[_0x568d29(0x182)]();
          };
          function _0x478bff(_0x1eef52) {
            return _0x24def6(_0x1eef52);
          }
          const _0x5d6062 = _0x478bff(applicant_id1),
            _0x472046 = _0x478bff(user_id1),
            _0x9d2ff7 = _0x478bff(_0x4854d1),
            _0x12546c = _0x2389a5(0x218),
            _0x5fecce = { applicant_id: _0x5d6062 };
          fetch(_0x12546c, {
            method: _0x2389a5(0x181),
            headers: { "Content-Type": _0x2389a5(0x187) },
            body: JSON[_0x2389a5(0x17f)](_0x5fecce),
          })
            ["then"]((_0x36fec8) => {
              const _0x39c91c = _0x2389a5;
              if (!_0x36fec8["ok"])
                throw new Error(_0x39c91c(0x186) + _0x36fec8[_0x39c91c(0x17d)]);
              return _0x36fec8["json"]();
            })
            [_0x2389a5(0x1dc)]((_0x3a9abf) => {
              const _0x498c01 = _0x2389a5;
              console[_0x498c01(0x196)](_0x498c01(0x1f7), _0x3a9abf),
                _0x31c9fd();
            })
            ["catch"]((_0x22976d) => {
              const _0x2334b9 = _0x2389a5;
              console[_0x2334b9(0x19f)](_0x2334b9(0x1f6), _0x22976d);
            });
          function _0x31c9fd() {
            const _0x2e01f1 = _0x2389a5,
              _0x31c146 = "https://metawebapp.azurewebsites.net/response",
              _0x15b285 = {
                applicant_id: _0x5d6062,
                user_pin: _0x472046,
                response: _0x9d2ff7,
              };
            fetch(_0x31c146, {
              method: _0x2e01f1(0x181),
              headers: { "Content-Type": _0x2e01f1(0x187) },
              body: JSON[_0x2e01f1(0x17f)](_0x15b285),
            })
              [_0x2e01f1(0x1dc)]((_0x43a293) => {
                if (!_0x43a293["ok"])
                  throw new Error(
                    "HTTP\x20error!\x20Status:\x20" + _0x43a293["status"]
                  );
                return _0x43a293["json"]();
              })
              ["then"]((_0x26e03c) => {
                const _0x14f218 = _0x2e01f1;
                console[_0x14f218(0x196)](_0x14f218(0x1cc), _0x26e03c);
              })
              [_0x2e01f1(0x1ee)]((_0x2dcacd) => {
                const _0xac7c49 = _0x2e01f1;
                console[_0xac7c49(0x19f)](
                  "Error\x20during\x20Response\x20API\x20call:",
                  _0x2dcacd
                );
              });
          }
        } else {
          const _0x504035 = document["getElementById"](_0x2389a5(0x215));
          clanguage == _0x2389a5(0x220)
            ? (_0x504035["src"] = _0x2389a5(0x1af))
            : (_0x504035["src"] = _0x2389a5(0x1fb)),
            _0x504035[_0x2389a5(0x20b)]()[_0x2389a5(0x1ee)](function (
              _0x346346
            ) {
              const _0x89537 = _0x2389a5;
              console[_0x89537(0x19f)](_0x89537(0x1ea), _0x346346);
            }),
            _0x504035[_0x2389a5(0x219)](_0x2389a5(0x1e7), function () {});
        }
      }
      function _0x5316b1() {
        const _0x4deb07 = _0x27f63d,
          _0x5db79e = document[_0x4deb07(0x207)](_0x4deb07(0x215));
        action_talk[_0x4deb07(0x20b)](),
          (_0x5db79e[_0x4deb07(0x199)] = audioSource),
          _0x5db79e[_0x4deb07(0x20b)]()[_0x4deb07(0x1ee)](function (_0x20d5d5) {
            const _0x125471 = _0x4deb07;
            console[_0x125471(0x19f)](_0x125471(0x183), _0x20d5d5);
          }),
          _0x5db79e[_0x4deb07(0x219)](_0x4deb07(0x1e7), function () {
            action_talk["stop"]();
          });
      }
      var _0x167675 = _0xfcbbfb[_0x27f63d(0x180)]("."),
        _0x2e5b84 = _0x26b203[_0x27f63d(0x180)](".");
      const _0x78543e = _0x167675[_0x27f63d(0x1f2)]("."),
        _0x2e8ba8 = document[_0x27f63d(0x207)](_0x27f63d(0x1cf));
      function _0x361dd6(_0x34efae) {
        const _0x42a792 = _0x27f63d;
        if (_0x34efae < _0x78543e[_0x42a792(0x194)]) {
          const _0x24079c = document[_0x42a792(0x1a7)]("p");
          let _0x23ef6d = _0x78543e[_0x34efae][_0x42a792(0x206)]();
          if (_0x34efae >= _0x78543e[_0x42a792(0x194)] - 0x1)
            for (
              let _0x559728 = _0x34efae + 0x1;
              _0x559728 < _0x78543e[_0x42a792(0x194)];
              _0x559728++
            ) {
              _0x23ef6d += "\x20" + _0x78543e[_0x559728]["trim"]();
            }
          (_0x24079c["textContent"] = _0x23ef6d),
            _0x2e8ba8["appendChild"](_0x24079c);
          let _0x11a44a;
          switch (_0x34efae) {
            case 0x0:
              _0x11a44a = 0x2710;
              break;
            case 0x1:
              _0x11a44a = 0x9c4;
              break;
            case 0x4:
              _0x11a44a = 0x1388;
              break;
            case 0x6:
            case 0x8:
              _0x11a44a = 0x1388;
              break;
            default:
              _0x11a44a = 0x9c4;
          }
          setTimeout(() => {
            (_0x2e8ba8["innerHTML"] = ""), _0x361dd6(_0x34efae + 0x1);
          }, _0x11a44a);
        } else {
          const _0x5d7209 = _0x2e5b84[_0x42a792(0x1f2)](".");
          _0x5d7209[_0x42a792(0x1c8)]((_0x460cf8, _0x3b1311) => {
            const _0x556720 = _0x42a792,
              _0x4fad87 = document[_0x556720(0x1a7)]("p");
            (_0x4fad87[_0x556720(0x1bc)] = _0x460cf8[_0x556720(0x206)]()),
              _0x2e8ba8[_0x556720(0x1c5)](_0x4fad87),
              setTimeout(() => {
                const _0x5701fa = _0x556720;
                _0x2e8ba8[_0x5701fa(0x1ed)] = "";
                if (_0x3b1311 === _0x5d7209[_0x5701fa(0x194)] - 0x1) {
                }
              }, 0xc350);
          });
        }
      }
      _0x361dd6(0x0);
      const _0xf2c344 = _0x1f42ee["join"](".\x20");
      _0x33b0aa(_0xf2c344, async function () {
        (isCallbackCalled = !![]),
          await _0x17b791(),
          setTimeout(() => {
            _0x143661(), _0x5316b1(function () {});
          }, 0x1388);
      });
    });
}
(panorama = new PANOLENS[_0x4afaa0(0x1b4)]([
  "images/reception/px.jpg",
  _0x4afaa0(0x1bb),
  "images/reception/py.jpg",
  "images/reception/ny.jpg",
  _0x4afaa0(0x1a9),
  _0x4afaa0(0x1ae),
])),
  (clock = new THREE[_0x4afaa0(0x1cb)]());
var container = document[_0x4afaa0(0x20f)]("#container");
function _0x3966(_0x331e00, _0x1a3231) {
  const _0x126903 = _0x1269();
  return (
    (_0x3966 = function (_0x3966db, _0x422588) {
      _0x3966db = _0x3966db - 0x17d;
      let _0x47d9b5 = _0x126903[_0x3966db];
      return _0x47d9b5;
    }),
    _0x3966(_0x331e00, _0x1a3231)
  );
}
(viewer = new PANOLENS["Viewer"]({
  output: _0x4afaa0(0x1e3),
  container: container,
})),
  viewer[_0x4afaa0(0x1b9)](0x46),
  viewer["add"](panorama),
  viewer[_0x4afaa0(0x209)](panorama),
  (hemiLight = new THREE[_0x4afaa0(0x198)](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x4afaa0(0x1dd)](0xffffff, 0.5),
  ambientlight = new THREE[_0x4afaa0(0x1e6)](0x404040, 0.56);
panorama["add"](ambientlight),
  panorama[_0x4afaa0(0x20c)](directionallight),
  directionallight[_0x4afaa0(0x1db)]["set"](0x5, 0xa, 7.5),
  (pointlight = new THREE["PointLight"](0xffd6aa, 0.8)),
  pointlight["position"]["set"](0x0, 0xa, 0x0),
  (pointlight[_0x4afaa0(0x1a3)] = !![]),
  panorama[_0x4afaa0(0x20c)](pointlight),
  (pointlight = pointlight[_0x4afaa0(0x201)]()),
  pointlight["position"][_0x4afaa0(0x205)](0x41, 0x0, -0x2d),
  (pointlight["castShadow"] = !![]),
  panorama[_0x4afaa0(0x20c)](pointlight),
  hemiLight[_0x4afaa0(0x1db)][_0x4afaa0(0x205)](0x7, 0xa, -0x7),
  panorama[_0x4afaa0(0x20c)](hemiLight);
var loader = new THREE[_0x4afaa0(0x195)]();
loader[_0x4afaa0(0x188)](_0x4afaa0(0x1de), function (_0x2721cb) {
  const _0x565de8 = _0x4afaa0;
  (gltfscene = _0x2721cb["scene"]),
    (gltfglobal = _0x2721cb),
    (car = _0x2721cb[_0x565de8(0x1a6)][_0x565de8(0x1fd)][0x0]),
    gltfscene[_0x565de8(0x1db)][_0x565de8(0x205)](-0x5, -0xa, -0xa),
    (gltfscene["rotation"]["y"] = 0.2),
    gltfscene["scale"][_0x565de8(0x205)](0x8, 0x8, 0x8),
    car[_0x565de8(0x1f5)]((_0x2e2d68) => {
      const _0x4f35d2 = _0x565de8;
      _0x2e2d68[_0x4f35d2(0x1e2)] &&
        ((_0x2e2d68[_0x4f35d2(0x1a3)] = !![]),
        (_0x2e2d68[_0x4f35d2(0x1a4)] = !![]));
    });
  const _0x29257f = _0x2721cb[_0x565de8(0x19c)];
  mixer = new THREE["AnimationMixer"](_0x2721cb[_0x565de8(0x1a6)]);
  const _0x583428 = THREE[_0x565de8(0x1a8)]["findByName"](
      _0x29257f,
      _0x565de8(0x1d8)
    ),
    _0x4d5c2f = THREE[_0x565de8(0x1a8)][_0x565de8(0x1c6)](_0x29257f, "talk");
  (action_idle = mixer["clipAction"](_0x583428)),
    (action_talk = mixer[_0x565de8(0x202)](_0x4d5c2f)),
    panorama[_0x565de8(0x20c)](gltfscene),
    (gltfscene[_0x565de8(0x20e)] = !![]),
    action_idle["play"](),
    animate();
});
function animate() {
  const _0x7a1722 = _0x4afaa0;
  var _0x48c0e5 = clock[_0x7a1722(0x1bd)]();
  if (mixer) mixer[_0x7a1722(0x1d9)](_0x48c0e5);
  if (mixer1) mixer1["update"](_0x48c0e5);
  if (mixer2) mixer2[_0x7a1722(0x1d9)](_0x48c0e5);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x24711f = _0x4afaa0;
  navigator[_0x24711f(0x1be)]
    [_0x24711f(0x1d6)]({ video: ![], audio: !![] })
    [_0x24711f(0x1dc)]((_0x5ab450) => {
      const _0x114152 = _0x24711f;
      (window["localStream"] = _0x5ab450),
        (window[_0x114152(0x1fe)][_0x114152(0x1df)] = _0x5ab450),
        (window[_0x114152(0x1fe)][_0x114152(0x1f9)] = !![]);
    })
    ["catch"]((_0x1a26ef) => {
      const _0x4464be = _0x24711f;
      console[_0x4464be(0x196)]("u\x20got\x20an\x20error:" + _0x1a26ef);
    });
}
