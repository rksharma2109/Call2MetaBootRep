const _0x2b882a = _0x38ed;
(function (_0xe1ff1f, _0xf812db) {
  const _0x354c8b = _0x38ed,
    _0x2c5e80 = _0xe1ff1f();
  while (!![]) {
    try {
      const _0x7b34e9 =
        (parseInt(_0x354c8b(0xa0)) / 0x1) * (parseInt(_0x354c8b(0x102)) / 0x2) +
        (-parseInt(_0x354c8b(0xcd)) / 0x3) * (parseInt(_0x354c8b(0xab)) / 0x4) +
        (-parseInt(_0x354c8b(0xe6)) / 0x5) * (parseInt(_0x354c8b(0xa9)) / 0x6) +
        (parseInt(_0x354c8b(0x105)) / 0x7) *
          (-parseInt(_0x354c8b(0xfc)) / 0x8) +
        parseInt(_0x354c8b(0xb6)) / 0x9 +
        (parseInt(_0x354c8b(0x78)) / 0xa) * (-parseInt(_0x354c8b(0xc6)) / 0xb) +
        (-parseInt(_0x354c8b(0x115)) / 0xc) *
          (-parseInt(_0x354c8b(0xee)) / 0xd);
      if (_0x7b34e9 === _0xf812db) break;
      else _0x2c5e80["push"](_0x2c5e80["shift"]());
    } catch (_0x18cdde) {
      _0x2c5e80["push"](_0x2c5e80["shift"]());
    }
  }
})(_0x1b8a, 0x6add5);
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
function _0x38ed(_0x24e697, _0x51c803) {
  const _0x1b8a60 = _0x1b8a();
  return (
    (_0x38ed = function (_0x38ed67, _0x1e85da) {
      _0x38ed67 = _0x38ed67 - 0x78;
      let _0xaf751a = _0x1b8a60[_0x38ed67];
      return _0xaf751a;
    }),
    _0x38ed(_0x24e697, _0x51c803)
  );
}
let accNum, loanID;
$(window)["on"](_0x2b882a(0x11d), async function () {
  const _0x3e2378 = _0x2b882a;
  $(".loader-wrapper")["fadeOut"](_0x3e2378(0xe0)), fetchlanguageJSON();
  const _0x4f1c1d = $(_0x3e2378(0xf9)),
    _0x1bebb5 = $(_0x3e2378(0xbd));
  _0x4f1c1d[_0x3e2378(0xc4)]("disabled", !![]),
    _0x1bebb5[_0x3e2378(0xc4)](_0x3e2378(0xe5), !![]),
    _0x4f1c1d["on"](_0x3e2378(0xdc), bankStart),
    _0x1bebb5["on"](_0x3e2378(0xdc), bankStart);
  const _0x19a6ef = 0x1770;
  setTimeout(() => {
    const _0x2e23c7 = _0x3e2378;
    _0x4f1c1d["prop"]("disabled", ![]),
      _0x1bebb5[_0x2e23c7(0xc4)](_0x2e23c7(0xe5), ![]);
  }, _0x19a6ef);
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
const decryptionAES = (_0x35562d) => {
  const _0x366e44 = _0x2b882a,
    _0x574a14 = CryptoJS[_0x366e44(0x126)][_0x366e44(0x7c)](
      _0x35562d,
      "1234567890123456"
    ),
    _0x1f0f6e = _0x574a14[_0x366e44(0xd6)](
      CryptoJS[_0x366e44(0xd5)][_0x366e44(0x123)]
    );
  return _0x1f0f6e;
};
function decryptFromURL() {
  const _0x51df02 = _0x2b882a,
    _0x29fc45 = new URLSearchParams(window[_0x51df02(0x127)][_0x51df02(0xba)]),
    _0x5817f4 = _0x29fc45[_0x51df02(0xff)]("data");
  let _0x585ad2 = _0x5817f4["replaceAll"]("\x20", "+");
  console[_0x51df02(0x108)]("Final\x20Url\x20----\x20" + _0x585ad2);
  const _0x85241c = decodeURIComponent(_0x585ad2);
  if (_0x85241c) {
    const _0x689a1a = decryptionAES(_0x85241c);
    console[_0x51df02(0x108)](_0x51df02(0xf1), _0x689a1a);
    const _0x1f4579 = new URLSearchParams(_0x689a1a);
    dname = _0x1f4579[_0x51df02(0xff)](_0x51df02(0xa6));
    function _0x11eb37(_0x5aad8e) {
      const _0x56fdc5 = _0x51df02,
        _0x4c3fc3 = _0x5aad8e[_0x56fdc5(0xac)]("\x20"),
        _0x2b4f21 = _0x4c3fc3["map"](
          (_0x568dc3) =>
            _0x568dc3[_0x56fdc5(0xe7)](0x0)[_0x56fdc5(0x80)]() +
            _0x568dc3["slice"](0x1)[_0x56fdc5(0x10c)]()
        ),
        _0x274473 = _0x2b4f21[_0x56fdc5(0x9e)]("\x20");
      return _0x274473;
    }
    (cname = _0x11eb37(dname)),
      console["log"](cname),
      (clanguage = _0x51df02(0xb4)),
      (accNum = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x99))),
      (loanID = _0x1f4579["get"]("loanno")),
      (loanamout = _0x1f4579["get"](_0x51df02(0xc8))),
      (pendingamount = _0x1f4579[_0x51df02(0xff)]("pendingamount")),
      (EMIamount = _0x1f4579[_0x51df02(0xff)](_0x51df02(0xd0))),
      (duedate = _0x1f4579[_0x51df02(0xff)](_0x51df02(0xb3))),
      (pemi = _0x1f4579["get"]("pemi")),
      (Lastpaiddate = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x11c))),
      (cinstatus = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x124))),
      (nextemidate = _0x1f4579[_0x51df02(0xff)]("nextemidate")),
      (Totalpaidemi = _0x1f4579[_0x51df02(0xff)](_0x51df02(0xd3))),
      (Outstanding = _0x1f4579["get"](_0x51df02(0x82))),
      (Preclosureamt = _0x1f4579["get"](_0x51df02(0x89))),
      (Centermangcontactno = _0x1f4579[_0x51df02(0xff)](_0x51df02(0xaa))),
      (DBranchmgrname = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x118))),
      (Branchmgrname = _0x11eb37(DBranchmgrname)),
      console[_0x51df02(0x108)](Branchmgrname),
      (Branchmgrcontactno = _0x1f4579["get"](_0x51df02(0xb9))),
      (applicant_id1 = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x111))),
      (user_id1 = _0x1f4579[_0x51df02(0xff)](_0x51df02(0x112)));
  } else console["log"](_0x51df02(0xb1));
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0xa691a = _0x2b882a,
    _0x46f86e = await fetch("language.json");
  return (language_list = await _0x46f86e[_0xa691a(0xde)]()), language_list;
}
fetchlanguageJSON()[_0x2b882a(0xad)]((_0x58ff7e) => {
  const _0x546b65 = _0x2b882a;
  (data = _0x58ff7e[_0x546b65(0x7f)][0x0][clanguage][_0x546b65(0xa1)]),
    (data1 = _0x58ff7e[_0x546b65(0x7f)][0x0][clanguage][_0x546b65(0x8e)]),
    (data2 = _0x58ff7e[_0x546b65(0x7f)][0x0][clanguage][_0x546b65(0xb0)]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x4026b7 = _0x2b882a;
  viewer[_0x4026b7(0xed)](0x6e),
    noSleep[_0x4026b7(0xfe)](),
    (document[_0x4026b7(0x11e)](_0x4026b7(0x92))[_0x4026b7(0x97)]["display"] =
      _0x4026b7(0x9b)),
    start();
  var _0x198592 = document[_0x4026b7(0x114)]("audio");
  (_0x198592[_0x4026b7(0xf4)] = _0x4026b7(0xe4)),
    action_idle[_0x4026b7(0x98)](),
    viewer["enableEffect"](PANOLENS[_0x4026b7(0xbc)][_0x4026b7(0xdb)]),
    viewer[_0x4026b7(0xe9)](PANOLENS[_0x4026b7(0xce)][_0x4026b7(0xa3)]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x48e24c = _0x2b882a;
  await document[_0x48e24c(0x87)][_0x48e24c(0x8b)]();
}
function bankStart1() {
  const _0x598d79 = _0x2b882a;
  noSleep[_0x598d79(0xfe)](),
    start(),
    (document[_0x598d79(0x11e)](_0x598d79(0x92))[_0x598d79(0x97)]["display"] =
      "none");
  var _0x3a374f = document[_0x598d79(0x114)](_0x598d79(0xc5));
  (_0x3a374f[_0x598d79(0xf4)] = _0x598d79(0xe4)),
    action_idle[_0x598d79(0x98)](),
    setTimeout(() => {
      const _0x502a7e = _0x598d79;
      viewer[_0x502a7e(0xda)](
        new THREE[_0x502a7e(0x106)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer["setCameraFov"](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x1b4346 = _0x2b882a;
  document[_0x1b4346(0x11e)]("modal")[_0x1b4346(0x97)]["display"] = "none";
  let _0x278fb7 = 0x0;
  $(document)[_0x1b4346(0x90)](function () {
    const _0x37861b = _0x1b4346;
    var _0x547051, _0x31e148, _0x7ce6f, _0x358339;
    clanguage == _0x37861b(0xb4)
      ? ((_0x31e148 = "hi"),
        (modelID = "6"),
        (numeric = "hcurrency"),
        (audioSource = _0x37861b(0xf8)),
        (_0x7ce6f = [
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
        (_0x358339 = [
          data1[0xc] + "" + Centermangcontactno,
          data1[0xd] + "" + Branchmgrname,
          data1[0xe] + "" + Branchmgrcontactno,
        ]))
      : ((_0x31e148 = "en"),
        (modelID = "5"),
        (numeric = "currency"),
        (audioSource = "audio/English_Audio.mp3"),
        (_0x7ce6f = [
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
        (_0x358339 = [
          data2[0xc] + "" + Centermangcontactno,
          data2[0xd] + "" + Branchmgrname,
          data2[0xe] + "" + Branchmgrcontactno,
        ]));
    setTimeout(function () {
      const _0x582f9d = _0x37861b;
      action_talk[_0x582f9d(0x98)]();
    }, 0x7d0),
      (_0x547051 = [
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
    async function _0x5cfe87() {
      const _0x2ff6cd = _0x37861b;
      action_talk["stop"]();
      const _0x34231c = await navigator[_0x2ff6cd(0x7a)]["getUserMedia"]({
          audio: { sampleRate: 0x3e80, channelCount: 0x1 },
        }),
        _0x38fbba = new AudioContext({ sampleRate: 0x3e80 }),
        _0x54bd38 = _0x38fbba[_0x2ff6cd(0x7d)](_0x34231c);
      (recorder = new Recorder(_0x54bd38, { numChannels: 0x1 })),
        recorder[_0x2ff6cd(0xc0)]();
    }
    async function _0x44a078() {
      const _0x32ca0b = _0x37861b;
      recorder &&
        recorder["state"] !== _0x32ca0b(0xfb) &&
        (recorder[_0x32ca0b(0x84)](),
        recorder["exportWAV"](async (_0x35fc87) => {
          const _0x1b60b0 = _0x32ca0b,
            _0x54004b = new XMLHttpRequest();
          _0x54004b["open"](_0x1b60b0(0xca), _0x1b60b0(0x95), !![]),
            (_0x54004b[_0x1b60b0(0xeb)] = function () {
              const _0x318064 = _0x1b60b0;
              if (_0x54004b["readyState"] === XMLHttpRequest[_0x318064(0xfd)]) {
                if (_0x54004b[_0x318064(0x109)] === 0xc8) {
                  const _0x231d18 = _0x54004b[_0x318064(0xf2)];
                  console[_0x318064(0x108)](_0x318064(0xa2), _0x231d18),
                    _0x36882f(_0x231d18);
                } else
                  console[_0x318064(0x85)](
                    _0x318064(0x120),
                    _0x54004b["statusText"]
                  );
              }
            });
          const _0xf30be2 = new FormData();
          _0xf30be2[_0x1b60b0(0xc3)]("audio_base64", _0x35fc87);
          const _0x2c02b0 = {
            ID: _0x1b60b0(0x9a),
            modelID: modelID,
            mode: _0x1b60b0(0x7e),
            command: _0x1b60b0(0xbb),
            userID: _0x1b60b0(0x93),
          };
          _0xf30be2[_0x1b60b0(0xc3)](
            "metadata",
            JSON[_0x1b60b0(0x91)](_0x2c02b0)
          ),
            _0x54004b[_0x1b60b0(0xd1)](_0xf30be2);
        }));
    }
    function _0x341cb3(_0x4f89cf, _0x5f1d94) {
      const _0x29c256 = _0x37861b,
        _0x384130 = document["getElementById"](_0x29c256(0x9c)),
        _0x387a46 = _0x29c256(0xe2),
        _0x52ba13 = _0x29c256(0x98),
        _0x12b2d8 = _0x29c256(0x10d),
        _0x2b8354 = "2",
        _0x2c609d = "hi",
        _0x17097a = encodeURIComponent(_0x4f89cf),
        _0x4546d1 =
          "https://tts.indiantts.in/tts?text=" +
          _0x17097a +
          _0x29c256(0xb5) +
          _0x387a46 +
          "&action=" +
          _0x52ba13 +
          _0x29c256(0xd7) +
          numeric +
          _0x29c256(0xc9) +
          _0x2c609d +
          _0x29c256(0x9f) +
          _0x12b2d8 +
          _0x29c256(0xbf) +
          _0x2b8354;
      (_0x384130[_0x29c256(0xf4)] = _0x4546d1),
        _0x384130[_0x29c256(0x98)]()["catch"](function (_0x580725) {
          const _0x3e2882 = _0x29c256;
          console[_0x3e2882(0x85)](_0x3e2882(0xd4), _0x580725);
        }),
        _0x384130[_0x29c256(0xd8)](_0x29c256(0xa7), function () {
          !isCallbackCalled && _0x5f1d94();
        });
    }
    function _0x36882f(_0x1c010a) {
      const _0x5695da = _0x37861b,
        _0x70a049 = JSON[_0x5695da(0xfa)](_0x1c010a);
      if (
        _0x70a049[_0x5695da(0x109)] === _0x5695da(0x81) &&
        _0x70a049["alternatives"][_0x5695da(0x110)] > 0x0
      ) {
        const _0x2fab0e = _0x70a049["alternatives"][0x0][_0x5695da(0xb7)];
        console[_0x5695da(0x108)]("Generated\x20Text\x20-----\x20", _0x2fab0e);
        const _0x2805e2 = (_0x3b467e) => {
          const _0x3a6e4f = _0x5695da,
            _0x2dc570 = CryptoJS[_0x3a6e4f(0x126)][_0x3a6e4f(0xe3)](
              _0x3b467e,
              _0x3a6e4f(0x116)
            );
          return _0x2dc570["toString"]();
        };
        function _0x196079(_0x4fd798) {
          return _0x2805e2(_0x4fd798);
        }
        const _0x509143 = _0x196079(applicant_id1),
          _0x1beeaa = _0x196079(user_id1),
          _0xa2a8c1 = _0x196079(_0x2fab0e),
          _0x4f1efb = _0x5695da(0xcc),
          _0x35eb8f = { applicant_id: _0x509143, user_pin: _0x1beeaa };
        fetch(_0x4f1efb, {
          method: _0x5695da(0xca),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x5695da(0x91)](_0x35eb8f),
        })
          [_0x5695da(0xad)]((_0x47d244) => {
            const _0x2ac73e = _0x5695da;
            if (!_0x47d244["ok"])
              throw new Error(_0x2ac73e(0xc7) + _0x47d244[_0x2ac73e(0x109)]);
            return _0x47d244[_0x2ac73e(0xde)]();
          })
          [_0x5695da(0xad)]((_0x3083ca) => {
            const _0x3fc324 = _0x5695da;
            console[_0x3fc324(0x108)](_0x3fc324(0x10f), _0x3083ca),
              (request_id = _0x3083ca["request_id"]),
              _0x281060();
          })
          [_0x5695da(0x107)]((_0xc172ce) => {
            const _0x586fd7 = _0x5695da;
            console["error"](_0x586fd7(0x8c), _0xc172ce);
          });
        function _0x281060() {
          const _0x5811ea = _0x5695da,
            _0x9c91ec = _0x5811ea(0x88);
          console[_0x5811ea(0x108)](_0x5811ea(0x8f), request_id);
          const _0x4ef5ab = {
            request_id: request_id,
            applicant_id: _0x509143,
            user_pin: _0x1beeaa,
            response: _0xa2a8c1,
          };
          fetch(_0x9c91ec, {
            method: _0x5811ea(0xca),
            headers: { "Content-Type": _0x5811ea(0xf3) },
            body: JSON[_0x5811ea(0x91)](_0x4ef5ab),
          })
            [_0x5811ea(0xad)]((_0x171ee9) => {
              const _0x37b88f = _0x5811ea;
              if (!_0x171ee9["ok"])
                throw new Error(_0x37b88f(0xc7) + _0x171ee9[_0x37b88f(0x109)]);
              return _0x171ee9[_0x37b88f(0xde)]();
            })
            [_0x5811ea(0xad)]((_0x54f1d7) => {
              const _0x5a61b0 = _0x5811ea;
              console[_0x5a61b0(0x108)](_0x5a61b0(0x8a), _0x54f1d7);
            })
            [_0x5811ea(0x107)]((_0x36fd8f) => {
              const _0x1067d1 = _0x5811ea;
              console[_0x1067d1(0x85)](_0x1067d1(0x103), _0x36fd8f);
            });
        }
      } else {
        const _0x52cae9 = document[_0x5695da(0x11e)]("audioPlayer");
        clanguage == _0x5695da(0xb4)
          ? (_0x52cae9[_0x5695da(0xf4)] = _0x5695da(0xe1))
          : (_0x52cae9[_0x5695da(0xf4)] = _0x5695da(0x96)),
          _0x52cae9[_0x5695da(0x98)]()[_0x5695da(0x107)](function (_0x2ca27a) {
            const _0x4edf81 = _0x5695da;
            console[_0x4edf81(0x85)]("Error\x20playing\x20audio1:", _0x2ca27a);
          }),
          _0x52cae9[_0x5695da(0xd8)](_0x5695da(0xa7), function () {});
      }
    }
    function _0x39cf95() {
      const _0x47d549 = _0x37861b,
        _0xd15213 = document["getElementById"](_0x47d549(0x9c));
      if (!_0xd15213) {
        console["error"](_0x47d549(0xf6));
        return;
      }
      (_0xd15213[_0x47d549(0xf4)] = audioSource),
        _0xd15213[_0x47d549(0x98)]()
          [_0x47d549(0xad)](() => {
            const _0x4fdcfa = _0x47d549;
            action_talk[_0x4fdcfa(0x98)]();
          })
          [_0x47d549(0x107)]((_0x35c5f7) => {
            const _0x495e69 = _0x47d549;
            console[_0x495e69(0x85)](_0x495e69(0xd4), _0x35c5f7);
          }),
        (_0xd15213[_0x47d549(0xb2)] = () => {
          const _0x480acb = _0x47d549;
          action_talk[_0x480acb(0x84)](),
            console[_0x480acb(0x108)]("Audio\x20playback\x20has\x20ended.");
        });
    }
    var _0x1bfcf1 = _0x7ce6f["join"]("."),
      _0x2178fa = _0x358339["join"]("."),
      _0x1bfcf1 = _0x7ce6f["join"]("."),
      _0x2178fa = _0x358339["join"](".");
    const _0x369eab = _0x1bfcf1["split"](/\.(?!\d)/),
      _0x209a6e = document[_0x37861b(0x11e)](_0x37861b(0x79));
    function _0x4a5af5(_0x437fe3) {
      const _0x1de2d8 = _0x37861b;
      return _0x437fe3[_0x1de2d8(0xd6)]()
        [_0x1de2d8(0xac)]("")
        [_0x1de2d8(0x9e)]("\x20");
    }
    function _0x2db861(_0x58fe0b) {
      const _0x4b36ea = _0x37861b;
      return _0x58fe0b[_0x4b36ea(0xd6)]()[_0x4b36ea(0xac)]("")["join"]("\x20");
    }
    function _0x357378(_0x285bb2) {
      const _0x434d56 = _0x37861b;
      return _0x285bb2[_0x434d56(0xd6)]()
        [_0x434d56(0xac)]("")
        [_0x434d56(0x9e)]("\x20");
    }
    function _0x3a9740(_0x2e5f63) {
      const _0x49c310 = _0x37861b;
      return _0x2e5f63[_0x49c310(0xd6)]()[_0x49c310(0xac)]("")["join"]("\x20");
    }
    let _0x5f7d71 = ![],
      _0x58e04b = ![];
    function _0x1a19fd() {
      const _0x37fcf6 = _0x37861b;
      action_talk[_0x37fcf6(0x84)](), (_0x5f7d71 = !![]), (_0x58e04b = ![]);
      const _0x5e5a66 = document[_0x37fcf6(0x11e)](_0x37fcf6(0x9c));
      (audioPlaybackPosition = _0x5e5a66[_0x37fcf6(0xf7)]),
        _0x5e5a66[_0x37fcf6(0xa4)]();
    }
    function _0x41a409() {
      const _0x39ca1d = _0x37861b;
      action_talk[_0x39ca1d(0x98)](),
        (_0x58e04b = !![]),
        (_0x5f7d71 = ![]),
        _0xa1967d(0x0);
    }
    function _0x4d63e6() {
      const _0x58d019 = _0x37861b;
      if (_0x5f7d71) {
        const _0x221afb = document[_0x58d019(0x11e)](_0x58d019(0x9c));
        _0x221afb["play"](), (_0x5f7d71 = ![]), action_talk[_0x58d019(0x98)]();
      }
    }
    async function _0xa1967d(_0x165794) {
      async function _0x3b4377() {
        const _0x3f8048 = _0x38ed,
          _0x2b770d = document["getElementById"](_0x3f8048(0x79));
        for (
          let _0x12b68f = 0x0;
          _0x12b68f < _0x547051["length"];
          _0x12b68f++
        ) {
          let _0x25a54b = _0x547051[_0x12b68f] + ".",
            _0x2ab6d2 = _0x4a5af5(accNum),
            _0x5dec64 = _0x2db861(loanID),
            _0x2aee73 = _0x3a9740(Branchmgrcontactno),
            _0x30398a = _0x357378(Centermangcontactno);
          if (_0x25a54b["includes"](accNum)) {
            let _0x545450 = _0x25a54b[_0x3f8048(0xbe)](accNum, _0x2ab6d2);
            _0x2b770d[_0x3f8048(0x9d)] = _0x25a54b;
            try {
              await _0x4f8d22(_0x545450);
            } catch (_0x31519a) {
              console[_0x3f8048(0x85)]("Error\x20playing\x20audio:", _0x31519a);
            }
          } else {
            if (_0x25a54b[_0x3f8048(0xb8)](loanID)) {
              let _0x46b08a = _0x25a54b[_0x3f8048(0xbe)](loanID, _0x5dec64);
              _0x2b770d[_0x3f8048(0x9d)] = _0x25a54b;
              try {
                await _0x4f8d22(_0x46b08a);
              } catch (_0x5b82f5) {
                console[_0x3f8048(0x85)](
                  "Error\x20playing\x20audio:",
                  _0x5b82f5
                );
              }
            } else {
              if (_0x25a54b["includes"](Branchmgrcontactno)) {
                let _0x2c4dd6 = _0x25a54b["replace"](
                  Branchmgrcontactno,
                  _0x2aee73
                );
                _0x2b770d["textContent"] = _0x25a54b;
                try {
                  await _0x4f8d22(_0x2c4dd6);
                } catch (_0x500535) {
                  console["error"](_0x3f8048(0xd4), _0x500535);
                }
              } else {
                if (_0x25a54b[_0x3f8048(0xb8)](Centermangcontactno)) {
                  let _0x236e0b = _0x25a54b["replace"](
                    Centermangcontactno,
                    _0x30398a
                  );
                  _0x2b770d["textContent"] = _0x25a54b;
                  try {
                    await _0x4f8d22(_0x236e0b);
                  } catch (_0xf33d1c) {
                    console[_0x3f8048(0x85)](
                      "Error\x20playing\x20audio:",
                      _0xf33d1c
                    );
                  }
                } else {
                  _0x2b770d["textContent"] = _0x25a54b;
                  try {
                    await _0x4f8d22(_0x25a54b);
                  } catch (_0x3fd492) {
                    console[_0x3f8048(0x85)](_0x3f8048(0xd4), _0x3fd492);
                  }
                }
              }
            }
          }
        }
        await _0x5cfe87()
          [_0x3f8048(0xad)](() => {
            setTimeout(() => {
              _0x44a078();
            }, 0x1770);
          })
          [_0x3f8048(0xad)](() => {
            setTimeout(() => {
              _0x39cf95();
            }, 0x1b58);
          }),
          await new Promise((_0x5ea696) => setTimeout(_0x5ea696, 0xbb8)),
          (_0x2b770d[_0x3f8048(0xd9)] = "");
        try {
        } catch (_0x13d6c1) {
          console[_0x3f8048(0x85)](
            "Error\x20during\x20recording\x20or\x20transcription:",
            _0x13d6c1
          );
        }
      }
      function _0x4f8d22(_0x4334aa) {
        return new Promise((_0x50fca6, _0x5f4a5d) => {
          _0x341cb3(_0x4334aa, _0x50fca6);
        });
      }
      await _0x3b4377();
    }
    document[_0x37861b(0x11e)]("pauseButton")["addEventListener"](
      _0x37861b(0xdc),
      _0x1a19fd
    ),
      document[_0x37861b(0x11e)](_0x37861b(0xcf))[_0x37861b(0xd8)](
        _0x37861b(0xdc),
        _0x41a409
      ),
      document[_0x37861b(0x11e)](_0x37861b(0xd2))[_0x37861b(0xd8)](
        _0x37861b(0xdc),
        _0x4d63e6
      ),
      _0xa1967d(0x0);
  });
}
(panorama = new PANOLENS["CubePanorama"]([
  _0x2b882a(0x10a),
  _0x2b882a(0xc2),
  _0x2b882a(0x8d),
  "images/reception/ny.jpg",
  _0x2b882a(0xec),
  _0x2b882a(0x83),
])),
  (clock = new THREE["Clock"]());
var container = document["querySelector"](_0x2b882a(0xe8));
(viewer = new PANOLENS[_0x2b882a(0x104)]({
  output: "console",
  container: container,
})),
  viewer[_0x2b882a(0xed)](0x46),
  viewer[_0x2b882a(0x100)](panorama),
  viewer[_0x2b882a(0xa8)](panorama),
  (hemiLight = new THREE[_0x2b882a(0xf0)](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x2b882a(0x10b)](0xffffff, 0.5),
  ambientlight = new THREE[_0x2b882a(0xdf)](0x404040, 0.56);
panorama[_0x2b882a(0x100)](ambientlight),
  panorama[_0x2b882a(0x100)](directionallight),
  directionallight[_0x2b882a(0xdd)][_0x2b882a(0x7b)](0x5, 0xa, 7.5),
  (pointlight = new THREE[_0x2b882a(0xea)](0xffd6aa, 0.8)),
  pointlight["position"][_0x2b882a(0x7b)](0x0, 0xa, 0x0),
  (pointlight["castShadow"] = !![]),
  panorama[_0x2b882a(0x100)](pointlight),
  (pointlight = pointlight[_0x2b882a(0xa5)]()),
  pointlight[_0x2b882a(0xdd)][_0x2b882a(0x7b)](0x41, 0x0, -0x2d),
  (pointlight["castShadow"] = !![]),
  panorama[_0x2b882a(0x100)](pointlight),
  hemiLight["position"][_0x2b882a(0x7b)](0x7, 0xa, -0x7),
  panorama[_0x2b882a(0x100)](hemiLight);
var loader = new THREE[_0x2b882a(0xf5)]();
function _0x1b8a() {
  const _0x451f5f = [
    "duedate",
    "hindi",
    "&api_key=",
    "348921XlzVPZ",
    "transcript",
    "includes",
    "Branchmgrcontactno",
    "search",
    "transcribe",
    "MODES",
    "#button2",
    "replace",
    "&ver=",
    "record",
    "update",
    "images/reception/nx.jpg",
    "append",
    "prop",
    "audio",
    "1166iGDHFv",
    "HTTP\x20error!\x20Status:\x20",
    "loanamout",
    "&lang=",
    "POST",
    "localStream",
    "https://metawebapp.azurewebsites.net/request",
    "12slYcdF",
    "CONTROLS",
    "restartButton",
    "EMIamount",
    "send",
    "playButton",
    "Totalpaidemi",
    "Error\x20playing\x20audio:",
    "enc",
    "toString",
    "&numeric=",
    "addEventListener",
    "innerHTML",
    "tweenControlCenter",
    "CARDBOARD",
    "click",
    "position",
    "json",
    "AmbientLight",
    "slow",
    "audio/Hindi_ShrInd.mp3",
    "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
    "encrypt",
    "audio/bank.mp3",
    "disabled",
    "5mvsjXo",
    "charAt",
    "#container",
    "enableControl",
    "PointLight",
    "onreadystatechange",
    "images/reception/pz.jpg",
    "setCameraFov",
    "65qovesp",
    "models/bluedress.glb",
    "HemisphereLight",
    "Decrypted\x20URL\x20-----\x20",
    "responseText",
    "application/json",
    "src",
    "GLTFLoader",
    "Audio\x20player\x20element\x20not\x20found.",
    "currentTime",
    "audio/Hindi_Audio.mp3",
    "#button1",
    "parse",
    "inactive",
    "1048umNgAg",
    "DONE",
    "enable",
    "get",
    "add",
    "talk",
    "113110sNZuNw",
    "Error\x20during\x20Response\x20API\x20call:",
    "Viewer",
    "22421vHPlrr",
    "Vector3",
    "catch",
    "log",
    "status",
    "images/reception/px.jpg",
    "DirectionalLight",
    "toLowerCase",
    "8000",
    "getDelta",
    "Request\x20API\x20Response:",
    "length",
    "applicant_id",
    "user_id",
    "rotation",
    "createElement",
    "5766492gTHPHA",
    "1234567890123456",
    "children",
    "Branchmgrname",
    "scene",
    "visible",
    "AnimationClip",
    "Lastpaiddate",
    "load",
    "getElementById",
    "receiveShadow",
    "Request\x20failed:",
    "scale",
    "getUserMedia",
    "Utf8",
    "cinstatus",
    "autoplay",
    "AES",
    "location",
    "76910eGgfvD",
    "dynamicText",
    "mediaDevices",
    "set",
    "decrypt",
    "createMediaStreamSource",
    "dev",
    "language",
    "toUpperCase",
    "success",
    "Outstanding",
    "images/reception/nz.jpg",
    "stop",
    "error",
    "u\x20got\x20an\x20error:",
    "body",
    "https://metawebapp.azurewebsites.net/response",
    "Preclosureamt",
    "Response\x20API\x20Response:",
    "requestFullscreen",
    "Error\x20during\x20Request\x20API\x20call:",
    "images/reception/py.jpg",
    "data1",
    "Request\x20ID\x20in\x20response\x20call",
    "ready",
    "stringify",
    "modal",
    "Se343Dd3SDvoqTSd32df34",
    "traverse",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "audio/English_ShrInd.mp3",
    "style",
    "play",
    "accnum",
    "test-1212",
    "none",
    "audioPlayer",
    "textContent",
    "join",
    "&samplerate=",
    "1TrAbLL",
    "data",
    "Response:",
    "DEVICEORIENTATION",
    "pause",
    "clone",
    "name",
    "ended",
    "setPanorama",
    "3768054AVgBTq",
    "Centermangcontactno",
    "197464MzonNq",
    "split",
    "then",
    "clipAction",
    "findByName",
    "data2",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "onended",
  ];
  _0x1b8a = function () {
    return _0x451f5f;
  };
  return _0x1b8a();
}
loader[_0x2b882a(0x11d)](_0x2b882a(0xef), function (_0x27914d) {
  const _0x59b8b5 = _0x2b882a;
  (gltfscene = _0x27914d[_0x59b8b5(0x119)]),
    (gltfglobal = _0x27914d),
    (car = _0x27914d[_0x59b8b5(0x119)][_0x59b8b5(0x117)][0x0]),
    gltfscene[_0x59b8b5(0xdd)][_0x59b8b5(0x7b)](-0x5, -0xa, -0xa),
    (gltfscene[_0x59b8b5(0x113)]["y"] = 0.2),
    gltfscene[_0x59b8b5(0x121)][_0x59b8b5(0x7b)](0x8, 0x8, 0x8),
    car[_0x59b8b5(0x94)]((_0x310576) => {
      const _0x4d8c7b = _0x59b8b5;
      _0x310576["isMesh"] &&
        ((_0x310576["castShadow"] = !![]),
        (_0x310576[_0x4d8c7b(0x11f)] = !![]));
    });
  const _0x30f8f3 = _0x27914d["animations"];
  mixer = new THREE["AnimationMixer"](_0x27914d["scene"]);
  const _0x2e3b70 = THREE[_0x59b8b5(0x11b)]["findByName"](_0x30f8f3, "idle"),
    _0x4869d5 = THREE["AnimationClip"][_0x59b8b5(0xaf)](
      _0x30f8f3,
      _0x59b8b5(0x101)
    );
  (action_idle = mixer[_0x59b8b5(0xae)](_0x2e3b70)),
    (action_talk = mixer["clipAction"](_0x4869d5)),
    panorama[_0x59b8b5(0x100)](gltfscene),
    (gltfscene[_0x59b8b5(0x11a)] = !![]),
    action_idle[_0x59b8b5(0x98)](),
    animate();
});
function animate() {
  const _0x32a3ba = _0x2b882a;
  var _0x2b0f4f = clock[_0x32a3ba(0x10e)]();
  if (mixer) mixer[_0x32a3ba(0xc1)](_0x2b0f4f);
  if (mixer1) mixer1[_0x32a3ba(0xc1)](_0x2b0f4f);
  if (mixer2) mixer2["update"](_0x2b0f4f);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x10ea61 = _0x2b882a;
  navigator[_0x10ea61(0x7a)]
    [_0x10ea61(0x122)]({ video: ![], audio: !![] })
    [_0x10ea61(0xad)]((_0x155dfb) => {
      const _0xf159d = _0x10ea61;
      (window[_0xf159d(0xcb)] = _0x155dfb),
        (window["localAudio"]["srcObject"] = _0x155dfb),
        (window["localAudio"][_0xf159d(0x125)] = !![]);
    })
    [_0x10ea61(0x107)]((_0x3ce2e0) => {
      const _0x45889e = _0x10ea61;
      console["log"](_0x45889e(0x86) + _0x3ce2e0);
    });
}
