const _0x3d9ece = _0x4b41;
(function (_0x53dd49, _0xac1718) {
  const _0x3ba9b0 = _0x4b41,
    _0x1a4e9b = _0x53dd49();
  while (!![]) {
    try {
      const _0x25abeb =
        (-parseInt(_0x3ba9b0(0x1e2)) / 0x1) *
          (-parseInt(_0x3ba9b0(0x235)) / 0x2) +
        (parseInt(_0x3ba9b0(0x1e8)) / 0x3) *
          (-parseInt(_0x3ba9b0(0x237)) / 0x4) +
        -parseInt(_0x3ba9b0(0x217)) / 0x5 +
        (parseInt(_0x3ba9b0(0x229)) / 0x6) *
          (-parseInt(_0x3ba9b0(0x245)) / 0x7) +
        -parseInt(_0x3ba9b0(0x278)) / 0x8 +
        parseInt(_0x3ba9b0(0x1ed)) / 0x9 +
        (-parseInt(_0x3ba9b0(0x1ff)) / 0xa) *
          (-parseInt(_0x3ba9b0(0x240)) / 0xb);
      if (_0x25abeb === _0xac1718) break;
      else _0x1a4e9b["push"](_0x1a4e9b["shift"]());
    } catch (_0xe886) {
      _0x1a4e9b["push"](_0x1a4e9b["shift"]());
    }
  }
})(_0x4023, 0x77e5a);
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
  language_list,
  CARDBOARD_MODE = !0x1,
  isCallbackCalled = !0x1;
let accNum;
$(window)["on"]("load", async function () {
  const _0x2eaacc = _0x4b41;
  $(".loader-wrapper")[_0x2eaacc(0x1f1)](_0x2eaacc(0x205)), fetchlanguageJSON();
  let _0x4044c1 = $(_0x2eaacc(0x1ef)),
    _0x10db6f = $(_0x2eaacc(0x20d));
  _0x4044c1["prop"](_0x2eaacc(0x1ee), !0x0),
    _0x10db6f[_0x2eaacc(0x23f)](_0x2eaacc(0x1ee), !0x0),
    _0x4044c1["on"](_0x2eaacc(0x260), bankStart),
    _0x10db6f["on"](_0x2eaacc(0x260), bankStart),
    setTimeout(() => {
      const _0x27641f = _0x2eaacc;
      _0x4044c1[_0x27641f(0x23f)]("disabled", !0x1),
        _0x10db6f[_0x27641f(0x23f)](_0x27641f(0x1ee), !0x1);
    }, 0x1770);
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
const decryptionAES = (_0x21c7bd) => {
  const _0x2e5ff8 = _0x4b41;
  let _0x540417 = CryptoJS[_0x2e5ff8(0x1de)][_0x2e5ff8(0x1fc)](
      _0x21c7bd,
      _0x2e5ff8(0x20c)
    ),
    _0x22d529 = _0x540417["toString"](
      CryptoJS[_0x2e5ff8(0x22a)][_0x2e5ff8(0x23e)]
    );
  return _0x22d529;
};
function decryptFromURL() {
  const _0x168ce4 = _0x4b41;
  let _0x29b78f = new URLSearchParams(window["location"][_0x168ce4(0x228)]),
    _0x3584d4 = _0x29b78f["get"](_0x168ce4(0x279)),
    _0x541958 = _0x3584d4[_0x168ce4(0x20b)]("\x20", "+");
  console[_0x168ce4(0x1e6)]("Final\x20Url\x20----\x20" + _0x541958);
  let _0x245ef9 = decodeURIComponent(_0x541958);
  if (_0x245ef9) {
    let _0x807b60 = decryptionAES(_0x245ef9);
    console["log"](_0x168ce4(0x272), _0x807b60);
    let _0x1acee7 = new URLSearchParams(_0x807b60);
    (cname = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x25c))),
      (clanguage = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x259))),
      (accNum = (accNum1 = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x20a)))[
        _0x168ce4(0x227)
      ](-0x4)),
      (loanamout = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x1f3))),
      (pendingamount = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x1d5))),
      (EMIamount = _0x1acee7["get"](_0x168ce4(0x1fe))),
      (duedate = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x1f0))),
      (pemi = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x21a))),
      (Lastpaiddate = _0x1acee7[_0x168ce4(0x252)]("Lastpaiddate")),
      (cinstatus = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x1f2))),
      (nextemidate = _0x1acee7[_0x168ce4(0x252)]("nextemidate")),
      (Totalpaidemi = _0x1acee7["get"](_0x168ce4(0x250))),
      (Outstanding = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x21e))),
      (Preclosureamt = _0x1acee7["get"](_0x168ce4(0x24b))),
      (Centermangcontactno = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x244))),
      (Branchmgrname = _0x1acee7[_0x168ce4(0x252)]("Branchmgrname")),
      (Branchmgrcontactno = _0x1acee7["get"](_0x168ce4(0x26b))),
      (applicant_id1 = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x27a))),
      (user_id1 = _0x1acee7[_0x168ce4(0x252)](_0x168ce4(0x1e4)));
  } else console[_0x168ce4(0x1e6)](_0x168ce4(0x270));
}
async function fetchlanguageJSON() {
  const _0x460f0d = _0x4b41;
  let _0x25a1ee = await fetch(_0x460f0d(0x25a));
  return (language_list = await _0x25a1ee[_0x460f0d(0x24a)]());
}
decryptFromURL(),
  fetchlanguageJSON()[_0x3d9ece(0x202)]((_0xee0842) => {
    const _0x33abe3 = _0x3d9ece;
    (data = _0xee0842[_0x33abe3(0x211)][0x0][clanguage][_0x33abe3(0x279)]),
      (data1 = _0xee0842["language"][0x0][clanguage][_0x33abe3(0x212)]),
      (data2 = _0xee0842[_0x33abe3(0x211)][0x0][clanguage][_0x33abe3(0x215)]);
  });
var noSleep = new NoSleep();
function vrMode() {
  const _0x1b3718 = _0x3d9ece;
  viewer[_0x1b3718(0x225)](0x6e),
    noSleep[_0x1b3718(0x269)](),
    (document[_0x1b3718(0x261)](_0x1b3718(0x1df))[_0x1b3718(0x274)][
      _0x1b3718(0x200)
    ] = _0x1b3718(0x1d7)),
    start(),
    (document[_0x1b3718(0x20f)](_0x1b3718(0x26f))[_0x1b3718(0x1fb)] =
      _0x1b3718(0x210)),
    action_idle["play"](),
    viewer[_0x1b3718(0x1db)](PANOLENS[_0x1b3718(0x214)]["CARDBOARD"]),
    viewer["enableControl"](PANOLENS[_0x1b3718(0x1f9)][_0x1b3718(0x255)]),
    (CARDBOARD_MODE = !0x0),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x2a4bbc = _0x3d9ece;
  await document[_0x2a4bbc(0x248)]["requestFullscreen"]();
}
function bankStart1() {
  const _0x250234 = _0x3d9ece;
  noSleep[_0x250234(0x269)](),
    start(),
    (document[_0x250234(0x261)](_0x250234(0x1df))[_0x250234(0x274)][
      _0x250234(0x200)
    ] = _0x250234(0x1d7)),
    (document[_0x250234(0x20f)]("audio")[_0x250234(0x1fb)] = _0x250234(0x210)),
    action_idle[_0x250234(0x238)](),
    setTimeout(() => {
      const _0xdbb43d = _0x250234;
      viewer[_0xdbb43d(0x207)](
        new THREE[_0xdbb43d(0x25f)](-0x221, 0xc8, -0x1388),
        0x12c
      ),
        !0x0 == CARDBOARD_MODE
          ? viewer[_0xdbb43d(0x225)](0x6e)
          : viewer[_0xdbb43d(0x225)](0x5a),
        readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x24f19e = _0x3d9ece;
  (document[_0x24f19e(0x261)]("modal")["style"][_0x24f19e(0x200)] =
    _0x24f19e(0x1d7)),
    viewer[_0x24f19e(0x207)](
      new THREE[_0x24f19e(0x25f)](-0x5, -0x3e8, -0x1388),
      0x12c
    ),
    $(document)["ready"](function () {
      const _0x354cf7 = _0x24f19e;
      async function _0x41734f() {
        const _0x46c900 = _0x4b41;
        action_talk[_0x46c900(0x253)]();
        let _0x55ed40 = await navigator[_0x46c900(0x25d)][_0x46c900(0x231)]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x36ebae = new AudioContext({ sampleRate: 0x3e80 }),
          _0x428973 = _0x36ebae[_0x46c900(0x24d)](_0x55ed40);
        (recorder = new Recorder(_0x428973, { numChannels: 0x1 }))[
          _0x46c900(0x1da)
        ]();
      }
      async function _0x1a88df() {
        const _0x3ba841 = _0x4b41;
        recorder &&
          "inactive" !== recorder[_0x3ba841(0x1dd)] &&
          (recorder["stop"](),
          recorder[_0x3ba841(0x1fd)](async (_0x553a6f) => {
            const _0x56a10f = _0x3ba841;
            let _0x338057 = new XMLHttpRequest();
            _0x338057[_0x56a10f(0x1d8)](
              _0x56a10f(0x276),
              "https://asr-api.vspeech.ai/api/asr/v1",
              !0x0
            ),
              (_0x338057[_0x56a10f(0x243)] = function () {
                const _0x48e9d1 = _0x56a10f;
                if (
                  _0x338057["readyState"] === XMLHttpRequest[_0x48e9d1(0x232)]
                ) {
                  if (0xc8 === _0x338057[_0x48e9d1(0x1f8)]) {
                    let _0xa01c78 = _0x338057["responseText"];
                    console["log"](_0x48e9d1(0x22b), _0xa01c78),
                      (function _0x4bbcd4(_0x1fad55) {
                        const _0x28b8c3 = _0x48e9d1;
                        let _0x19e208 = JSON[_0x28b8c3(0x1e9)](_0x1fad55);
                        if (
                          _0x28b8c3(0x20e) === _0x19e208[_0x28b8c3(0x1f8)] &&
                          _0x19e208[_0x28b8c3(0x201)][_0x28b8c3(0x251)] > 0x0
                        ) {
                          var _0x165e11, _0x39fe0c, _0x49d236;
                          let _0x1adc10 =
                            _0x19e208[_0x28b8c3(0x201)][0x0][_0x28b8c3(0x21d)];
                          console[_0x28b8c3(0x1e6)](
                            _0x28b8c3(0x24e),
                            _0x1adc10
                          );
                          let _0x3147ef = (_0x3d0bb8) => {
                            const _0x50bb1b = _0x28b8c3;
                            let _0x34c9a7 = CryptoJS[_0x50bb1b(0x1de)][
                              _0x50bb1b(0x216)
                            ](_0x3d0bb8, _0x50bb1b(0x20c));
                            return _0x34c9a7[_0x50bb1b(0x26c)]();
                          };
                          function _0x21f2af(_0x40db18) {
                            return _0x3147ef(_0x40db18);
                          }
                          let _0xd58c43 =
                              ((_0x165e11 = applicant_id1),
                              _0x3147ef(_0x165e11)),
                            _0xdd70a7 =
                              ((_0x39fe0c = user_id1), _0x3147ef(_0x39fe0c)),
                            _0x14b297 =
                              ((_0x49d236 = _0x1adc10), _0x3147ef(_0x49d236));
                          fetch(
                            "https://metawebapp.azurewebsites.net/request",
                            {
                              method: _0x28b8c3(0x276),
                              headers: { "Content-Type": "application/json" },
                              body: JSON["stringify"]({
                                applicant_id: _0xd58c43,
                              }),
                            }
                          )
                            [_0x28b8c3(0x202)]((_0x345345) => {
                              const _0x3ce42 = _0x28b8c3;
                              if (!_0x345345["ok"])
                                throw Error(
                                  _0x3ce42(0x22f) + _0x345345[_0x3ce42(0x1f8)]
                                );
                              return _0x345345[_0x3ce42(0x24a)]();
                            })
                            [_0x28b8c3(0x202)]((_0x281572) => {
                              const _0x321aa0 = _0x28b8c3;
                              console[_0x321aa0(0x1e6)](
                                _0x321aa0(0x1e1),
                                _0x281572
                              ),
                                fetch(_0x321aa0(0x24c), {
                                  method: _0x321aa0(0x276),
                                  headers: { "Content-Type": _0x321aa0(0x220) },
                                  body: JSON[_0x321aa0(0x267)]({
                                    applicant_id: _0xd58c43,
                                    user_pin: _0xdd70a7,
                                    response: _0x14b297,
                                  }),
                                })
                                  [_0x321aa0(0x202)]((_0x39d2b9) => {
                                    const _0x19fb96 = _0x321aa0;
                                    if (!_0x39d2b9["ok"])
                                      throw Error(
                                        _0x19fb96(0x22f) +
                                          _0x39d2b9[_0x19fb96(0x1f8)]
                                      );
                                    return _0x39d2b9[_0x19fb96(0x24a)]();
                                  })
                                  [_0x321aa0(0x202)]((_0x45029d) => {
                                    const _0x510f53 = _0x321aa0;
                                    console[_0x510f53(0x1e6)](
                                      _0x510f53(0x1ea),
                                      _0x45029d
                                    );
                                  })
                                  [_0x321aa0(0x1d9)]((_0x1eb536) => {
                                    const _0x9b4c23 = _0x321aa0;
                                    console[_0x9b4c23(0x234)](
                                      _0x9b4c23(0x218),
                                      _0x1eb536
                                    );
                                  });
                            })
                            [_0x28b8c3(0x1d9)]((_0x5f005c) => {
                              console["error"](
                                "Error\x20during\x20Request\x20API\x20call:",
                                _0x5f005c
                              );
                            });
                        } else {
                          let _0x29c2be = document[_0x28b8c3(0x261)](
                            _0x28b8c3(0x254)
                          );
                          _0x28b8c3(0x24f) == clanguage
                            ? (_0x29c2be[_0x28b8c3(0x1fb)] = _0x28b8c3(0x226))
                            : (_0x29c2be[_0x28b8c3(0x1fb)] =
                                "audio/English_ShrInd.mp3"),
                            _0x29c2be["play"]()["catch"](function (_0x8163b0) {
                              const _0x4c8433 = _0x28b8c3;
                              console[_0x4c8433(0x234)](
                                _0x4c8433(0x233),
                                _0x8163b0
                              );
                            }),
                            _0x29c2be[_0x28b8c3(0x23d)](
                              _0x28b8c3(0x1eb),
                              function () {}
                            );
                        }
                      })(_0xa01c78);
                  } else
                    console[_0x48e9d1(0x234)](
                      _0x48e9d1(0x22e),
                      _0x338057[_0x48e9d1(0x264)]
                    );
                }
              });
            let _0x41ca28 = new FormData();
            _0x41ca28["append"](_0x56a10f(0x23a), _0x553a6f);
            let _0x3a787f = {
              ID: _0x56a10f(0x1e7),
              modelID: modelID,
              mode: "dev",
              command: "transcribe",
              userID: _0x56a10f(0x1e0),
            };
            _0x41ca28["append"](_0x56a10f(0x25b), JSON["stringify"](_0x3a787f)),
              _0x338057["send"](_0x41ca28);
          }));
      }
      _0x354cf7(0x24f) == clanguage
        ? ((_0x494567 = "hi"),
          (modelID = "6"),
          (numeric = _0x354cf7(0x247)),
          (audioSource = _0x354cf7(0x21b)),
          (_0x95b55 = [
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
          (_0x20673f = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x494567 = "en"),
          (modelID = "5"),
          (numeric = _0x354cf7(0x256)),
          (audioSource = "audio/English_Audio.mp3"),
          (_0x95b55 = [
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
          (_0x20673f = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ])),
        action_talk["play"](),
        (_0x3eade9 = [
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
      var _0x3eade9,
        _0x494567,
        _0x95b55,
        _0x20673f,
        _0x5669b2 = _0x95b55["join"]("."),
        _0x43c0f4 = _0x20673f[_0x354cf7(0x21f)](".");
      console["log"](_0x354cf7(0x203), _0x5669b2),
        console[_0x354cf7(0x1e6)](_0x354cf7(0x26a), _0x43c0f4);
      var _0x5669b2 = _0x95b55[_0x354cf7(0x21f)]("."),
        _0x43c0f4 = _0x20673f["join"](".");
      let _0x177977 = _0x5669b2["split"](/\.(?!\d)/),
        _0x24858c = document[_0x354cf7(0x261)]("dynamicText");
      !(function _0x235f90(_0x1c1b96) {
        const _0x321351 = _0x354cf7;
        if (_0x1c1b96 < _0x177977[_0x321351(0x251)]) {
          let _0x12cc24 = document[_0x321351(0x20f)]("p"),
            _0x8360c3 = _0x177977[_0x1c1b96]["trim"]();
          if (_0x1c1b96 >= _0x177977[_0x321351(0x251)] - 0x1) {
            for (
              let _0x268617 = _0x1c1b96 + 0x1;
              _0x268617 < _0x177977[_0x321351(0x251)];
              _0x268617++
            )
              _0x8360c3 += "\x20" + _0x177977[_0x268617][_0x321351(0x1ec)]();
          }
          (_0x12cc24[_0x321351(0x266)] = _0x8360c3),
            _0x24858c[_0x321351(0x262)](_0x12cc24);
          let _0x1f7aeb;
          switch (_0x1c1b96) {
            case 0x0:
              _0x1f7aeb = 0x2710;
              break;
            case 0x1:
              _0x1f7aeb = 0xdac;
              break;
            case 0x4:
            case 0x8:
              _0x1f7aeb = 0x1388;
              break;
            case 0x6:
              _0x1f7aeb = 0x7d0;
              break;
            default:
              _0x1f7aeb = 0xbb8;
          }
          setTimeout(() => {
            const _0x4efeb0 = _0x321351;
            (_0x24858c[_0x4efeb0(0x275)] = ""), _0x235f90(_0x1c1b96 + 0x1);
          }, _0x1f7aeb);
        } else {
          let _0x5e577b = _0x43c0f4["split"](".");
          _0x5e577b[_0x321351(0x241)]((_0x4f4399, _0x48c139) => {
            const _0x24864b = _0x321351;
            let _0xcf1d33 = document[_0x24864b(0x20f)]("p");
            (_0xcf1d33[_0x24864b(0x266)] = _0x4f4399[_0x24864b(0x1ec)]()),
              _0x24858c[_0x24864b(0x262)](_0xcf1d33),
              setTimeout(() => {
                const _0x1c616a = _0x24864b;
                (_0x24858c["innerHTML"] = ""), _0x5e577b[_0x1c616a(0x251)];
              }, 0xc350);
          });
        }
      })(0x0);
      let _0x1905d5 = _0x3eade9[_0x354cf7(0x21f)](".\x20");
      !(function _0x59ef6b(_0x145262, _0x33c396) {
        const _0x335a23 = _0x354cf7;
        let _0x2249ab = document["getElementById"](_0x335a23(0x254)),
          _0x442ac9 = encodeURIComponent(_0x145262),
          _0x43352f =
            "https://tts.indiantts.in/tts?text=" +
            _0x442ac9 +
            _0x335a23(0x23b) +
            numeric +
            _0x335a23(0x25e);
        (_0x2249ab[_0x335a23(0x1fb)] = _0x43352f),
          _0x2249ab[_0x335a23(0x238)]()["catch"](function (_0x48cdf2) {
            const _0x580209 = _0x335a23;
            console["error"](_0x580209(0x222), _0x48cdf2);
          }),
          _0x2249ab[_0x335a23(0x23d)](_0x335a23(0x1eb), function () {
            isCallbackCalled || _0x33c396();
          });
      })(_0x1905d5, async function () {
        (isCallbackCalled = !0x0),
          await _0x41734f(),
          setTimeout(() => {
            _0x1a88df(),
              (function _0x5d31ec() {
                const _0x158555 = _0x4b41;
                let _0x5ab5d2 = document[_0x158555(0x261)](_0x158555(0x254));
                action_talk[_0x158555(0x238)](),
                  (_0x5ab5d2["src"] = audioSource),
                  _0x5ab5d2[_0x158555(0x238)]()[_0x158555(0x1d9)](function (
                    _0x55b835
                  ) {
                    const _0x1421d4 = _0x158555;
                    console[_0x1421d4(0x234)](
                      "Error\x20playing\x20audio:",
                      _0x55b835
                    );
                  }),
                  _0x5ab5d2[_0x158555(0x23d)](_0x158555(0x1eb), function () {
                    const _0x585918 = _0x158555;
                    action_talk[_0x585918(0x253)]();
                  });
              })(function () {});
          }, 0x1388);
      });
    });
}
(panorama = new PANOLENS[_0x3d9ece(0x1dc)]([
  _0x3d9ece(0x21c),
  _0x3d9ece(0x23c),
  _0x3d9ece(0x1e3),
  _0x3d9ece(0x236),
  _0x3d9ece(0x246),
  "images/reception/nz.jpg",
])),
  (clock = new THREE[_0x3d9ece(0x26d)]());
function _0x4023() {
  const _0x737615 = [
    "error",
    "80tdikzV",
    "images/reception/ny.jpg",
    "260EKZpxJ",
    "play",
    "set",
    "audio_base64",
    "&api_key=Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1&action=play&numeric=",
    "images/reception/nx.jpg",
    "addEventListener",
    "Utf8",
    "prop",
    "27522xodzZA",
    "forEach",
    "models/bluedress.glb",
    "onreadystatechange",
    "Centermangcontactno",
    "1099567TWdiDC",
    "images/reception/pz.jpg",
    "hcurrency",
    "body",
    "GLTFLoader",
    "json",
    "Preclosureamt",
    "https://metawebapp.azurewebsites.net/response",
    "createMediaStreamSource",
    "Generated\x20Text\x20-----\x20",
    "hindi",
    "Totalpaidemi",
    "length",
    "get",
    "stop",
    "audioPlayer",
    "DEVICEORIENTATION",
    "currency",
    "HemisphereLight",
    "traverse",
    "clanguage",
    "language.json",
    "metadata",
    "name",
    "mediaDevices",
    "&lang=hi&samplerate=8000&ver=2",
    "Vector3",
    "click",
    "getElementById",
    "appendChild",
    "scene",
    "statusText",
    "console",
    "textContent",
    "stringify",
    "castShadow",
    "enable",
    "Text\x202-------\x20",
    "Branchmgrcontactno",
    "toString",
    "Clock",
    "update",
    "audio",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "receiveShadow",
    "Decrypted\x20URL\x20-----\x20",
    "clipAction",
    "style",
    "innerHTML",
    "POST",
    "getDelta",
    "7100896bBWVWf",
    "data",
    "applicant_id",
    "pendingamount",
    "load",
    "none",
    "open",
    "catch",
    "record",
    "enableEffect",
    "CubePanorama",
    "state",
    "AES",
    "modal",
    "Se343Dd3SDvoqTSd32df34",
    "Request\x20API\x20Response:",
    "20008AmpRQU",
    "images/reception/py.jpg",
    "user_id",
    "DirectionalLight",
    "log",
    "test-1212",
    "24306nMIItR",
    "parse",
    "Response\x20API\x20Response:",
    "ended",
    "trim",
    "6486696maBIDF",
    "disabled",
    "#button1",
    "duedate",
    "fadeOut",
    "cinstatus",
    "loanamout",
    "findByName",
    "scale",
    "AnimationMixer",
    "AnimationClip",
    "status",
    "CONTROLS",
    "add",
    "src",
    "decrypt",
    "exportWAV",
    "EMIamount",
    "3860IcYMFV",
    "display",
    "alternatives",
    "then",
    "Text\x201\x20-------\x20",
    "position",
    "slow",
    "animations",
    "tweenControlCenter",
    "visible",
    "children",
    "accnum",
    "replaceAll",
    "1234567890123456",
    "#button2",
    "success",
    "createElement",
    "audio/bank.mp3",
    "language",
    "data1",
    "#container",
    "MODES",
    "data2",
    "encrypt",
    "2122075TcTaqN",
    "Error\x20during\x20Response\x20API\x20call:",
    "setPanorama",
    "pemi",
    "audio/Hindi_Audio.mp3",
    "images/reception/px.jpg",
    "transcript",
    "Outstanding",
    "join",
    "application/json",
    "srcObject",
    "Error\x20playing\x20audio:",
    "rotation",
    "PointLight",
    "setCameraFov",
    "audio/Hindi_ShrInd.mp3",
    "slice",
    "search",
    "6DfKSEq",
    "enc",
    "Response:",
    "u\x20got\x20an\x20error:",
    "querySelector",
    "Request\x20failed:",
    "HTTP\x20error!\x20Status:\x20",
    "localAudio",
    "getUserMedia",
    "DONE",
    "Error\x20playing\x20audio1:",
  ];
  _0x4023 = function () {
    return _0x737615;
  };
  return _0x4023();
}
var container = document[_0x3d9ece(0x22d)](_0x3d9ece(0x213));
(viewer = new PANOLENS["Viewer"]({
  output: _0x3d9ece(0x265),
  container: container,
}))[_0x3d9ece(0x225)](0x46),
  viewer[_0x3d9ece(0x1fa)](panorama),
  viewer[_0x3d9ece(0x219)](panorama),
  (hemiLight = new THREE[_0x3d9ece(0x257)](0xb1e1ff, 0xb97a20));
var directionallight = new THREE[_0x3d9ece(0x1e5)](0xffffff, 0.5),
  ambientlight = new THREE["AmbientLight"](0x404040, 0.56);
panorama["add"](ambientlight),
  panorama["add"](directionallight),
  directionallight["position"][_0x3d9ece(0x239)](0x5, 0xa, 7.5),
  (pointlight = new THREE[_0x3d9ece(0x224)](0xffd6aa, 0.8))["position"][
    _0x3d9ece(0x239)
  ](0x0, 0xa, 0x0),
  (pointlight[_0x3d9ece(0x268)] = !0x0),
  panorama[_0x3d9ece(0x1fa)](pointlight),
  (pointlight = pointlight["clone"]())[_0x3d9ece(0x204)][_0x3d9ece(0x239)](
    0x41,
    0x0,
    -0x2d
  ),
  (pointlight[_0x3d9ece(0x268)] = !0x0),
  panorama["add"](pointlight),
  hemiLight[_0x3d9ece(0x204)]["set"](0x7, 0xa, -0x7),
  panorama["add"](hemiLight);
var loader = new THREE[_0x3d9ece(0x249)]();
function animate() {
  const _0x1ef3c3 = _0x3d9ece;
  var _0x5cc6c7 = clock[_0x1ef3c3(0x277)]();
  mixer && mixer["update"](_0x5cc6c7),
    mixer1 && mixer1[_0x1ef3c3(0x26e)](_0x5cc6c7),
    mixer2 && mixer2[_0x1ef3c3(0x26e)](_0x5cc6c7),
    requestAnimationFrame(animate);
}
function _0x4b41(_0x411707, _0x354fbb) {
  const _0x40232f = _0x4023();
  return (
    (_0x4b41 = function (_0x4b41fa, _0x4143ab) {
      _0x4b41fa = _0x4b41fa - 0x1d5;
      let _0x314121 = _0x40232f[_0x4b41fa];
      return _0x314121;
    }),
    _0x4b41(_0x411707, _0x354fbb)
  );
}
function getLocalStream() {
  const _0xfaf887 = _0x3d9ece;
  navigator["mediaDevices"]
    [_0xfaf887(0x231)]({ video: !0x1, audio: !0x0 })
    [_0xfaf887(0x202)]((_0x411e18) => {
      const _0x371726 = _0xfaf887;
      (window["localStream"] = _0x411e18),
        (window[_0x371726(0x230)][_0x371726(0x221)] = _0x411e18),
        (window[_0x371726(0x230)]["autoplay"] = !0x0);
    })
    [_0xfaf887(0x1d9)]((_0x27bf24) => {
      const _0x2ecc12 = _0xfaf887;
      console[_0x2ecc12(0x1e6)](_0x2ecc12(0x22c) + _0x27bf24);
    });
}
loader[_0x3d9ece(0x1d6)](_0x3d9ece(0x242), function (_0x5c5090) {
  const _0x43c27c = _0x3d9ece;
  (gltfscene = _0x5c5090["scene"]),
    (gltfglobal = _0x5c5090),
    (car = _0x5c5090[_0x43c27c(0x263)][_0x43c27c(0x209)][0x0]),
    gltfscene[_0x43c27c(0x204)][_0x43c27c(0x239)](-0x5, -0xa, -0xa),
    (gltfscene[_0x43c27c(0x223)]["y"] = 0.2),
    gltfscene[_0x43c27c(0x1f5)]["set"](0x8, 0x8, 0x8),
    car[_0x43c27c(0x258)]((_0x31e1ff) => {
      const _0x5ea97c = _0x43c27c;
      _0x31e1ff["isMesh"] &&
        ((_0x31e1ff[_0x5ea97c(0x268)] = !0x0),
        (_0x31e1ff[_0x5ea97c(0x271)] = !0x0));
    });
  let _0x1984e2 = _0x5c5090[_0x43c27c(0x206)];
  mixer = new THREE[_0x43c27c(0x1f6)](_0x5c5090["scene"]);
  let _0x1ee95b = THREE["AnimationClip"][_0x43c27c(0x1f4)](_0x1984e2, "idle"),
    _0x2ac7b5 = THREE[_0x43c27c(0x1f7)]["findByName"](_0x1984e2, "talk");
  (action_idle = mixer[_0x43c27c(0x273)](_0x1ee95b)),
    (action_talk = mixer[_0x43c27c(0x273)](_0x2ac7b5)),
    panorama[_0x43c27c(0x1fa)](gltfscene),
    (gltfscene[_0x43c27c(0x208)] = !0x0),
    action_idle["play"](),
    animate();
});
