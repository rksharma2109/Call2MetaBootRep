const _0x53be84 = _0x3dcc;
(function (_0x4a0d0d, _0x414874) {
  const _0x211ee1 = _0x3dcc,
    _0x4bc745 = _0x4a0d0d();
  while (!![]) {
    try {
      const _0x203b36 =
        (parseInt(_0x211ee1(0x23e)) / 0x1) *
          (-parseInt(_0x211ee1(0x1eb)) / 0x2) +
        (-parseInt(_0x211ee1(0x21b)) / 0x3) *
          (parseInt(_0x211ee1(0x200)) / 0x4) +
        (parseInt(_0x211ee1(0x1d6)) / 0x5) *
          (parseInt(_0x211ee1(0x1ea)) / 0x6) +
        -parseInt(_0x211ee1(0x1c3)) / 0x7 +
        (-parseInt(_0x211ee1(0x20e)) / 0x8) *
          (parseInt(_0x211ee1(0x1ca)) / 0x9) +
        parseInt(_0x211ee1(0x24a)) / 0xa +
        parseInt(_0x211ee1(0x1cd)) / 0xb;
      if (_0x203b36 === _0x414874) break;
      else _0x4bc745["push"](_0x4bc745["shift"]());
    } catch (_0x5a5fc0) {
      _0x4bc745["push"](_0x4bc745["shift"]());
    }
  }
})(_0x47ad, 0xe36a3);
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
$(window)["on"](_0x53be84(0x1b0), async function () {
  const _0x953308 = _0x53be84;
  $(_0x953308(0x225))[_0x953308(0x1c7)](_0x953308(0x23c)), fetchlanguageJSON();
  const _0xb189aa = $(_0x953308(0x1b8)),
    _0x47a341 = $(_0x953308(0x1cb));
  _0xb189aa["prop"]("disabled", !![]),
    _0x47a341[_0x953308(0x1fc)](_0x953308(0x201), !![]),
    _0xb189aa["on"](_0x953308(0x224), bankStart),
    _0x47a341["on"](_0x953308(0x224), bankStart);
  const _0x1fcfba = 0x1770;
  console[_0x953308(0x1c8)]("Version\x2012.02"),
    setTimeout(() => {
      const _0x3a1ede = _0x953308;
      _0xb189aa[_0x3a1ede(0x1fc)](_0x3a1ede(0x201), ![]),
        _0x47a341["prop"](_0x3a1ede(0x201), ![]);
    }, _0x1fcfba);
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
const decryptionAES = (_0x279a4b) => {
  const _0x1e39af = _0x53be84,
    _0x4f4585 = CryptoJS[_0x1e39af(0x230)][_0x1e39af(0x220)](
      _0x279a4b,
      "1234567890123456"
    ),
    _0x2c6e46 = _0x4f4585[_0x1e39af(0x1b5)](CryptoJS["enc"][_0x1e39af(0x1e4)]);
  return _0x2c6e46;
};
function decryptFromURL() {
  const _0x304848 = _0x53be84,
    _0xf941d8 = new URLSearchParams(window[_0x304848(0x205)][_0x304848(0x1b1)]),
    _0x54eb55 = _0xf941d8[_0x304848(0x1bb)](_0x304848(0x229));
  let _0x4a6daf = _0x54eb55[_0x304848(0x1ac)]("\x20", "+");
  console[_0x304848(0x1c8)](_0x304848(0x1de) + _0x4a6daf);
  const _0x8037bb = decodeURIComponent(_0x4a6daf);
  if (_0x8037bb) {
    const _0x1d97fd = decryptionAES(_0x8037bb);
    console[_0x304848(0x1c8)](_0x304848(0x1c5), _0x1d97fd);
    const _0x5b79fb = new URLSearchParams(_0x1d97fd);
    (cname = _0x5b79fb[_0x304848(0x1bb)]("name")),
      (clanguage = _0x304848(0x22b)),
      (accNum1 = _0x5b79fb[_0x304848(0x1bb)]("accnum")),
      (accNum = accNum1[_0x304848(0x1bf)](-0x4)),
      (loanamout = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x1f6))),
      (pendingamount = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x211))),
      (EMIamount = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x21c))),
      (duedate = _0x5b79fb["get"](_0x304848(0x1d5))),
      (pemi = _0x5b79fb["get"]("pemi")),
      (Lastpaiddate = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x1e2))),
      (cinstatus = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x221))),
      (nextemidate = _0x5b79fb[_0x304848(0x1bb)]("nextemidate")),
      (Totalpaidemi = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x1b6))),
      (Outstanding = _0x5b79fb[_0x304848(0x1bb)]("Outstanding")),
      (Preclosureamt = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x22d))),
      (Centermangcontactno = _0x5b79fb["get"](_0x304848(0x1b3))),
      (Branchmgrname = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x217))),
      (Branchmgrcontactno = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x1db))),
      (applicant_id1 = _0x5b79fb[_0x304848(0x1bb)](_0x304848(0x1cf))),
      (user_id1 = _0x5b79fb["get"]("user_id"));
  } else console[_0x304848(0x1c8)](_0x304848(0x231));
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0x17c2fc = _0x53be84,
    _0x1f1f5e = await fetch(_0x17c2fc(0x234));
  return (language_list = await _0x1f1f5e[_0x17c2fc(0x1be)]()), language_list;
}
fetchlanguageJSON()[_0x53be84(0x20d)]((_0x377482) => {
  const _0x458929 = _0x53be84;
  (data = _0x377482[_0x458929(0x1fd)][0x0][clanguage][_0x458929(0x229)]),
    (data1 = _0x377482[_0x458929(0x1fd)][0x0][clanguage][_0x458929(0x232)]),
    (data2 = _0x377482[_0x458929(0x1fd)][0x0][clanguage]["data2"]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0x227c0c = _0x53be84;
  viewer["setCameraFov"](0x6e),
    noSleep[_0x227c0c(0x1ba)](),
    (document[_0x227c0c(0x214)]("modal")[_0x227c0c(0x1e1)]["display"] = "none"),
    start();
  var _0x424579 = document["createElement"](_0x227c0c(0x237));
  (_0x424579[_0x227c0c(0x204)] = _0x227c0c(0x236)),
    action_idle[_0x227c0c(0x22e)](),
    viewer[_0x227c0c(0x210)](PANOLENS["MODES"][_0x227c0c(0x1dd)]),
    viewer[_0x227c0c(0x1c0)](PANOLENS[_0x227c0c(0x219)][_0x227c0c(0x1ab)]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x5f240f = _0x53be84;
  await document[_0x5f240f(0x226)]["requestFullscreen"]();
}
function bankStart1() {
  const _0x5dcd52 = _0x53be84;
  noSleep[_0x5dcd52(0x1ba)](),
    start(),
    (document[_0x5dcd52(0x214)](_0x5dcd52(0x1c4))["style"][_0x5dcd52(0x244)] =
      _0x5dcd52(0x240));
  var _0x454c09 = document[_0x5dcd52(0x208)](_0x5dcd52(0x237));
  (_0x454c09[_0x5dcd52(0x204)] = _0x5dcd52(0x236)),
    action_idle[_0x5dcd52(0x22e)](),
    setTimeout(() => {
      const _0x1a44bb = _0x5dcd52;
      viewer[_0x1a44bb(0x1f3)](
        new THREE["Vector3"](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer[_0x1a44bb(0x1d2)](0x6e);
      else viewer[_0x1a44bb(0x1d2)](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x4a4187 = _0x53be84;
  document["getElementById"](_0x4a4187(0x1c4))[_0x4a4187(0x1e1)]["display"] =
    _0x4a4187(0x240);
  let _0x39601f = 0x0;
  viewer[_0x4a4187(0x1f3)](
    new THREE[_0x4a4187(0x1b2)](-0x5, -0x3e8, -0x1388),
    0x12c
  ),
    $(document)[_0x4a4187(0x23d)](function () {
      const _0x2d7143 = _0x4a4187;
      var _0x137a99, _0x1acb2e, _0x4e2a67, _0x21c154;
      clanguage == _0x2d7143(0x22b)
        ? ((_0x1acb2e = "hi"),
          (modelID = "6"),
          (numeric = _0x2d7143(0x1ed)),
          (_0x4e2a67 = [
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
          (_0x21c154 = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x1acb2e = "en"),
          (modelID = "5"),
          (numeric = _0x2d7143(0x1dc)),
          (audioSource = _0x2d7143(0x212)),
          (_0x4e2a67 = [
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
          (_0x21c154 = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      setTimeout(function () {
        const _0x4b2066 = _0x2d7143;
        action_talk[_0x4b2066(0x22e)]();
      }, 0x7d0),
        (_0x137a99 = [
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
      async function _0x2e6ca5() {
        const _0x294c41 = _0x2d7143;
        action_talk["stop"]();
        const _0x5576e8 = await navigator[_0x294c41(0x1d9)]["getUserMedia"]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x46af1d = new AudioContext({ sampleRate: 0x3e80 }),
          _0x4114b6 = _0x46af1d[_0x294c41(0x1d7)](_0x5576e8);
        (recorder = new Recorder(_0x4114b6, { numChannels: 0x1 })),
          recorder["record"]();
      }
      async function _0x3feb55() {
        const _0x32c729 = _0x2d7143;
        recorder &&
          recorder[_0x32c729(0x1ae)] !== _0x32c729(0x222) &&
          (recorder[_0x32c729(0x1b4)](),
          recorder[_0x32c729(0x23a)](async (_0x5c6868) => {
            const _0x196ab4 = _0x32c729,
              _0x13867c = new XMLHttpRequest();
            _0x13867c["open"](_0x196ab4(0x21e), _0x196ab4(0x1fa), !![]),
              (_0x13867c[_0x196ab4(0x1af)] = function () {
                const _0x3171da = _0x196ab4;
                if (
                  _0x13867c[_0x3171da(0x1c1)] ===
                  XMLHttpRequest[_0x3171da(0x1e3)]
                ) {
                  if (_0x13867c["status"] === 0xc8) {
                    const _0x3199e4 = _0x13867c[_0x3171da(0x248)];
                    console[_0x3171da(0x1c8)](_0x3171da(0x1ef), _0x3199e4),
                      _0x2bf25a(_0x3199e4);
                  } else
                    console[_0x3171da(0x1e9)](
                      _0x3171da(0x1bc),
                      _0x13867c[_0x3171da(0x1d3)]
                    );
                }
              });
            const _0x4cc314 = new FormData();
            _0x4cc314[_0x196ab4(0x228)](_0x196ab4(0x20c), _0x5c6868);
            const _0x34cd12 = {
              ID: _0x196ab4(0x215),
              modelID: modelID,
              mode: _0x196ab4(0x1e7),
              command: _0x196ab4(0x1d8),
              userID: "Se343Dd3SDvoqTSd32df34",
            };
            _0x4cc314[_0x196ab4(0x228)](
              _0x196ab4(0x21f),
              JSON[_0x196ab4(0x1da)](_0x34cd12)
            ),
              _0x13867c["send"](_0x4cc314);
          }));
      }
      function _0x33d844(_0x20f645, _0x3caf24) {
        const _0x6356a8 = _0x2d7143,
          _0x3fd49c = document[_0x6356a8(0x214)]("audioPlayer"),
          _0x445810 = _0x6356a8(0x1d1),
          _0x2ed836 = _0x6356a8(0x22e),
          _0x25acb2 = "8000",
          _0x2c49ca = "2",
          _0x51444c = "hi",
          _0x2a266c = encodeURIComponent(_0x20f645),
          _0x11c705 =
            _0x6356a8(0x1bd) +
            _0x2a266c +
            _0x6356a8(0x20a) +
            _0x445810 +
            "&action=" +
            _0x2ed836 +
            "&numeric=" +
            numeric +
            _0x6356a8(0x238) +
            _0x51444c +
            "&samplerate=" +
            _0x25acb2 +
            _0x6356a8(0x243) +
            _0x2c49ca;
        (_0x3fd49c[_0x6356a8(0x204)] = _0x11c705),
          _0x3fd49c[_0x6356a8(0x22e)]()[_0x6356a8(0x1ee)](function (_0x35461d) {
            const _0x4bcc23 = _0x6356a8;
            console["error"](_0x4bcc23(0x1f9), _0x35461d);
          }),
          _0x3fd49c[_0x6356a8(0x1f4)](_0x6356a8(0x247), function () {
            !isCallbackCalled && _0x3caf24();
          });
      }
      function _0x2bf25a(_0x22c27c) {
        const _0x30d082 = _0x2d7143,
          _0x5b9732 = JSON["parse"](_0x22c27c);
        if (
          _0x5b9732[_0x30d082(0x1f8)] === "success" &&
          _0x5b9732[_0x30d082(0x242)][_0x30d082(0x207)] > 0x0
        ) {
          const _0x5cc56e = _0x5b9732[_0x30d082(0x242)][0x0][_0x30d082(0x23f)];
          console[_0x30d082(0x1c8)](_0x30d082(0x21d), _0x5cc56e);
          const _0x1f533e = (_0x268a94) => {
            const _0x4a1e42 = _0x30d082,
              _0x5eaeb9 = CryptoJS[_0x4a1e42(0x230)][_0x4a1e42(0x206)](
                _0x268a94,
                "1234567890123456"
              );
            return _0x5eaeb9[_0x4a1e42(0x1b5)]();
          };
          function _0x7c9386(_0xe93681) {
            return _0x1f533e(_0xe93681);
          }
          const _0x650193 = _0x7c9386(applicant_id1),
            _0x24ed05 = _0x7c9386(user_id1),
            _0xc57f66 = _0x7c9386(_0x5cc56e),
            _0x18a9cd = "https://metawebapp.azurewebsites.net/request",
            _0x522d4a = { applicant_id: _0x650193 };
          fetch(_0x18a9cd, {
            method: "POST",
            headers: { "Content-Type": _0x30d082(0x223) },
            body: JSON["stringify"](_0x522d4a),
          })
            [_0x30d082(0x20d)]((_0xb3656b) => {
              const _0x11f8cc = _0x30d082;
              if (!_0xb3656b["ok"])
                throw new Error(_0x11f8cc(0x1c2) + _0xb3656b[_0x11f8cc(0x1f8)]);
              return _0xb3656b[_0x11f8cc(0x1be)]();
            })
            ["then"]((_0xb308ed) => {
              const _0x55f5e6 = _0x30d082;
              console[_0x55f5e6(0x1c8)](_0x55f5e6(0x245), _0xb308ed),
                _0x3665ab();
            })
            [_0x30d082(0x1ee)]((_0x43c9dc) => {
              const _0x440728 = _0x30d082;
              console["error"](_0x440728(0x1ce), _0x43c9dc);
            });
          function _0x3665ab() {
            const _0x36bb7f = _0x30d082,
              _0x3fec15 = "https://metawebapp.azurewebsites.net/response",
              _0xa0e71b = {
                applicant_id: _0x650193,
                user_pin: _0x24ed05,
                response: _0xc57f66,
              };
            fetch(_0x3fec15, {
              method: _0x36bb7f(0x21e),
              headers: { "Content-Type": _0x36bb7f(0x223) },
              body: JSON[_0x36bb7f(0x1da)](_0xa0e71b),
            })
              [_0x36bb7f(0x20d)]((_0x462a19) => {
                const _0x47fa91 = _0x36bb7f;
                if (!_0x462a19["ok"])
                  throw new Error(_0x47fa91(0x1c2) + _0x462a19["status"]);
                return _0x462a19[_0x47fa91(0x1be)]();
              })
              ["then"]((_0x1c6576) => {
                const _0x15a62b = _0x36bb7f;
                console[_0x15a62b(0x1c8)](_0x15a62b(0x1d0), _0x1c6576);
              })
              ["catch"]((_0x31f600) => {
                const _0x4318b4 = _0x36bb7f;
                console[_0x4318b4(0x1e9)](_0x4318b4(0x1e8), _0x31f600);
              });
          }
        } else {
        }
      }
      function _0x4aafa0() {
        const _0x3950d9 = _0x2d7143,
          _0x5f0ebb = document[_0x3950d9(0x214)]("audioPlayer");
        if (!_0x5f0ebb) {
          console["error"](_0x3950d9(0x1fb));
          return;
        }
        (audioSource = _0x3950d9(0x1f0)),
          (_0x5f0ebb["src"] = audioSource),
          _0x5f0ebb[_0x3950d9(0x22e)]()
            [_0x3950d9(0x20d)](() => {
              const _0x355312 = _0x3950d9;
              action_talk[_0x355312(0x22e)]();
            })
            [_0x3950d9(0x1ee)]((_0xf88dcd) => {
              const _0x252541 = _0x3950d9;
              console[_0x252541(0x1e9)](_0x252541(0x1f9), _0xf88dcd);
            }),
          (_0x5f0ebb[_0x3950d9(0x246)] = () => {
            const _0x2331b8 = _0x3950d9;
            action_talk["stop"](),
              console[_0x2331b8(0x1c8)]("Audio\x20playback\x20has\x20ended.");
          });
      }
      var _0x109ac2 = _0x4e2a67["join"]("."),
        _0x163394 = _0x21c154[_0x2d7143(0x1ec)]("."),
        _0x109ac2 = _0x4e2a67[_0x2d7143(0x1ec)]("."),
        _0x163394 = _0x21c154[_0x2d7143(0x1ec)](".");
      const _0x22e0c3 = _0x109ac2["split"](/\.(?!\d)/),
        _0xff3e87 = document[_0x2d7143(0x214)]("dynamicText");
      async function _0x4cb87f(_0x241377) {
        async function _0x4ad302() {
          const _0x3b22a1 = _0x3dcc,
            _0x2709b4 = document[_0x3b22a1(0x214)](_0x3b22a1(0x1df));
          for (
            let _0x395dbf = 0x0;
            _0x395dbf < _0x137a99["length"];
            _0x395dbf++
          ) {
            const _0x4f91de = _0x137a99[_0x395dbf] + ".";
            _0x2709b4[_0x3b22a1(0x233)] = _0x4f91de;
            try {
              await _0x1aef1c(_0x4f91de);
            } catch (_0x277185) {
              console[_0x3b22a1(0x1e9)](_0x3b22a1(0x1f9), _0x277185);
            }
          }
          await _0x2e6ca5()
            [_0x3b22a1(0x20d)](() => {
              setTimeout(() => {
                _0x3feb55();
              }, 0x1770);
            })
            [_0x3b22a1(0x20d)](() => {
              setTimeout(() => {
                _0x4aafa0();
              }, 0x1b58);
            });
          const _0x46315a = _0x163394[_0x3b22a1(0x1fe)](".");
          for (
            let _0x4ac932 = 0x0;
            _0x4ac932 < _0x46315a[_0x3b22a1(0x207)];
            _0x4ac932++
          ) {
            const _0x1833a3 = _0x46315a[_0x4ac932]["trim"]();
            if (!_0x1833a3) continue;
            const _0x2b0c4e = document[_0x3b22a1(0x208)]("p");
            (_0x2b0c4e[_0x3b22a1(0x233)] = _0x1833a3),
              _0x2709b4["appendChild"](_0x2b0c4e),
              await new Promise((_0x1b2a3a) => setTimeout(_0x1b2a3a, 0xbb8)),
              (_0x2709b4[_0x3b22a1(0x1e0)] = "");
          }
          try {
          } catch (_0x3926d8) {
            console[_0x3b22a1(0x1e9)](_0x3b22a1(0x202), _0x3926d8);
          }
        }
        function _0x1aef1c(_0x56dee0) {
          return new Promise((_0x10b31c, _0x4fa7ef) => {
            _0x33d844(_0x56dee0, _0x10b31c);
          });
        }
        await _0x4ad302();
      }
      _0x4cb87f(0x0);
    });
}
(panorama = new PANOLENS[_0x53be84(0x227)]([
  _0x53be84(0x249),
  "images/reception/nx.jpg",
  "images/reception/py.jpg",
  _0x53be84(0x1b9),
  "images/reception/pz.jpg",
  _0x53be84(0x1d4),
])),
  (clock = new THREE[_0x53be84(0x1c9)]());
var container = document["querySelector"]("#container");
(viewer = new PANOLENS[_0x53be84(0x239)]({
  output: "console",
  container: container,
})),
  viewer[_0x53be84(0x1d2)](0x46),
  viewer[_0x53be84(0x20b)](panorama),
  viewer[_0x53be84(0x23b)](panorama),
  (hemiLight = new THREE["HemisphereLight"](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x53be84(0x22f)](0xffffff, 0.5),
  ambientlight = new THREE[_0x53be84(0x203)](0x404040, 0.56);
panorama[_0x53be84(0x20b)](ambientlight),
  panorama[_0x53be84(0x20b)](directionallight),
  directionallight["position"][_0x53be84(0x22c)](0x5, 0xa, 7.5),
  (pointlight = new THREE["PointLight"](0xffd6aa, 0.8)),
  pointlight[_0x53be84(0x218)][_0x53be84(0x22c)](0x0, 0xa, 0x0),
  (pointlight[_0x53be84(0x216)] = !![]),
  panorama[_0x53be84(0x20b)](pointlight),
  (pointlight = pointlight["clone"]()),
  pointlight[_0x53be84(0x218)][_0x53be84(0x22c)](0x41, 0x0, -0x2d),
  (pointlight[_0x53be84(0x216)] = !![]),
  panorama[_0x53be84(0x20b)](pointlight),
  hemiLight[_0x53be84(0x218)][_0x53be84(0x22c)](0x7, 0xa, -0x7),
  panorama[_0x53be84(0x20b)](hemiLight);
var loader = new THREE[_0x53be84(0x21a)]();
loader["load"]("models/bluedress.glb", function (_0x5a612f) {
  const _0x26773f = _0x53be84;
  (gltfscene = _0x5a612f[_0x26773f(0x1c6)]),
    (gltfglobal = _0x5a612f),
    (car = _0x5a612f[_0x26773f(0x1c6)][_0x26773f(0x213)][0x0]),
    gltfscene[_0x26773f(0x218)][_0x26773f(0x22c)](-0x5, -0xa, -0xa),
    (gltfscene[_0x26773f(0x1f7)]["y"] = 0.2),
    gltfscene["scale"][_0x26773f(0x22c)](0x8, 0x8, 0x8),
    car[_0x26773f(0x1e5)]((_0xf2396c) => {
      const _0x27fdc5 = _0x26773f;
      _0xf2396c[_0x27fdc5(0x24b)] &&
        ((_0xf2396c[_0x27fdc5(0x216)] = !![]),
        (_0xf2396c[_0x27fdc5(0x1b7)] = !![]));
    });
  const _0x2d8197 = _0x5a612f[_0x26773f(0x20f)];
  mixer = new THREE["AnimationMixer"](_0x5a612f[_0x26773f(0x1c6)]);
  const _0x8a3d1a = THREE["AnimationClip"]["findByName"](
      _0x2d8197,
      _0x26773f(0x22a)
    ),
    _0x125603 = THREE[_0x26773f(0x1f2)]["findByName"](
      _0x2d8197,
      _0x26773f(0x1ad)
    );
  (action_idle = mixer[_0x26773f(0x1f1)](_0x8a3d1a)),
    (action_talk = mixer["clipAction"](_0x125603)),
    panorama[_0x26773f(0x20b)](gltfscene),
    (gltfscene[_0x26773f(0x1cc)] = !![]),
    action_idle[_0x26773f(0x22e)](),
    animate();
});
function _0x47ad() {
  const _0x235260 = [
    "join",
    "hcurrency",
    "catch",
    "Response:",
    "audio/Hindi_Audio.mp3",
    "clipAction",
    "AnimationClip",
    "tweenControlCenter",
    "addEventListener",
    "getDelta",
    "loanamout",
    "rotation",
    "status",
    "Error\x20playing\x20audio:",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "Audio\x20player\x20element\x20not\x20found.",
    "prop",
    "language",
    "split",
    "u\x20got\x20an\x20error:",
    "22424ntvoEu",
    "disabled",
    "Error\x20during\x20recording\x20or\x20transcription:",
    "AmbientLight",
    "src",
    "location",
    "encrypt",
    "length",
    "createElement",
    "getUserMedia",
    "&api_key=",
    "add",
    "audio_base64",
    "then",
    "4415408LMnGQv",
    "animations",
    "enableEffect",
    "pendingamount",
    "audio/English_Audio.mp3",
    "children",
    "getElementById",
    "test-1212",
    "castShadow",
    "Branchmgrname",
    "position",
    "CONTROLS",
    "GLTFLoader",
    "6XwslGw",
    "EMIamount",
    "Generated\x20Text\x20-----\x20",
    "POST",
    "metadata",
    "decrypt",
    "cinstatus",
    "inactive",
    "application/json",
    "click",
    ".loader-wrapper",
    "body",
    "CubePanorama",
    "append",
    "data",
    "idle",
    "hindi",
    "set",
    "Preclosureamt",
    "play",
    "DirectionalLight",
    "AES",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "data1",
    "textContent",
    "language.json",
    "localAudio",
    "audio/bank.mp3",
    "audio",
    "&lang=",
    "Viewer",
    "exportWAV",
    "setPanorama",
    "slow",
    "ready",
    "2801eXjQPb",
    "transcript",
    "none",
    "update",
    "alternatives",
    "&ver=",
    "display",
    "Request\x20API\x20Response:",
    "onended",
    "ended",
    "responseText",
    "images/reception/px.jpg",
    "3979620WECtVR",
    "isMesh",
    "DEVICEORIENTATION",
    "replaceAll",
    "talk",
    "state",
    "onreadystatechange",
    "load",
    "search",
    "Vector3",
    "Centermangcontactno",
    "stop",
    "toString",
    "Totalpaidemi",
    "receiveShadow",
    "#button1",
    "images/reception/ny.jpg",
    "enable",
    "get",
    "Request\x20failed:",
    "https://tts.indiantts.in/tts?text=",
    "json",
    "slice",
    "enableControl",
    "readyState",
    "HTTP\x20error!\x20Status:\x20",
    "1221591WMOLkc",
    "modal",
    "Decrypted\x20URL\x20-----\x20",
    "scene",
    "fadeOut",
    "log",
    "Clock",
    "9ezbGNX",
    "#button2",
    "visible",
    "10950643iOUzsD",
    "Error\x20during\x20Request\x20API\x20call:",
    "applicant_id",
    "Response\x20API\x20Response:",
    "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
    "setCameraFov",
    "statusText",
    "images/reception/nz.jpg",
    "duedate",
    "5BKuqfD",
    "createMediaStreamSource",
    "transcribe",
    "mediaDevices",
    "stringify",
    "Branchmgrcontactno",
    "currency",
    "CARDBOARD",
    "Final\x20Url\x20----\x20",
    "dynamicText",
    "innerHTML",
    "style",
    "Lastpaiddate",
    "DONE",
    "Utf8",
    "traverse",
    "localStream",
    "dev",
    "Error\x20during\x20Response\x20API\x20call:",
    "error",
    "2393466taLeMt",
    "88vLaAWj",
  ];
  _0x47ad = function () {
    return _0x235260;
  };
  return _0x47ad();
}
function animate() {
  const _0x1c66b7 = _0x53be84;
  var _0x1d66d7 = clock[_0x1c66b7(0x1f5)]();
  if (mixer) mixer[_0x1c66b7(0x241)](_0x1d66d7);
  if (mixer1) mixer1["update"](_0x1d66d7);
  if (mixer2) mixer2[_0x1c66b7(0x241)](_0x1d66d7);
  requestAnimationFrame(animate);
}
function _0x3dcc(_0x4406f1, _0x5b4ab2) {
  const _0x47adb0 = _0x47ad();
  return (
    (_0x3dcc = function (_0x3dcca3, _0x24eb7a) {
      _0x3dcca3 = _0x3dcca3 - 0x1ab;
      let _0x5af8a0 = _0x47adb0[_0x3dcca3];
      return _0x5af8a0;
    }),
    _0x3dcc(_0x4406f1, _0x5b4ab2)
  );
}
function getLocalStream() {
  const _0x5c9d3b = _0x53be84;
  navigator[_0x5c9d3b(0x1d9)]
    [_0x5c9d3b(0x209)]({ video: ![], audio: !![] })
    ["then"]((_0xb5d183) => {
      const _0x1066f9 = _0x5c9d3b;
      (window[_0x1066f9(0x1e6)] = _0xb5d183),
        (window[_0x1066f9(0x235)]["srcObject"] = _0xb5d183),
        (window[_0x1066f9(0x235)]["autoplay"] = !![]);
    })
    [_0x5c9d3b(0x1ee)]((_0x23c959) => {
      const _0xdf3b6c = _0x5c9d3b;
      console["log"](_0xdf3b6c(0x1ff) + _0x23c959);
    });
}
