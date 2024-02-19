const _0x489a65 = _0x12ff;
(function (_0x1c7ade, _0x24d08c) {
  const _0x1671db = _0x12ff,
    _0x375888 = _0x1c7ade();
  while (!![]) {
    try {
      const _0x1a61ae =
        -parseInt(_0x1671db(0x19b)) / 0x1 +
        parseInt(_0x1671db(0x1e6)) / 0x2 +
        (parseInt(_0x1671db(0x182)) / 0x3) *
          (-parseInt(_0x1671db(0x1a1)) / 0x4) +
        parseInt(_0x1671db(0x1e4)) / 0x5 +
        parseInt(_0x1671db(0x207)) / 0x6 +
        (parseInt(_0x1671db(0x1d0)) / 0x7) *
          (-parseInt(_0x1671db(0x1af)) / 0x8) +
        (parseInt(_0x1671db(0x1c1)) / 0x9) * (parseInt(_0x1671db(0x19a)) / 0xa);
      if (_0x1a61ae === _0x24d08c) break;
      else _0x375888["push"](_0x375888["shift"]());
    } catch (_0x3f4d57) {
      _0x375888["push"](_0x375888["shift"]());
    }
  }
})(_0x5aa4, 0x7741d);
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
let accNum, loanID;
$(window)["on"](_0x489a65(0x1e8), async function () {
  const _0x31442a = _0x489a65;
  $(_0x31442a(0x18b))[_0x31442a(0x162)](_0x31442a(0x1bc)), fetchlanguageJSON();
  const _0x24b283 = $(_0x31442a(0x1e9)),
    _0x44f322 = $(_0x31442a(0x1c2));
  _0x24b283[_0x31442a(0x1ea)](_0x31442a(0x1c9), !![]),
    _0x44f322[_0x31442a(0x1ea)](_0x31442a(0x1c9), !![]),
    _0x24b283["on"](_0x31442a(0x177), bankStart),
    _0x44f322["on"](_0x31442a(0x177), bankStart);
  const _0x4be86f = 0x1770;
  setTimeout(() => {
    const _0x1bed0c = _0x31442a;
    _0x24b283[_0x1bed0c(0x1ea)](_0x1bed0c(0x1c9), ![]),
      _0x44f322["prop"]("disabled", ![]);
  }, _0x4be86f);
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
const decryptionAES = (_0x25160b) => {
  const _0x4ac05 = _0x489a65,
    _0x2718f6 = CryptoJS[_0x4ac05(0x172)][_0x4ac05(0x200)](
      _0x25160b,
      _0x4ac05(0x1ac)
    ),
    _0x3d565c = _0x2718f6["toString"](
      CryptoJS[_0x4ac05(0x1b7)][_0x4ac05(0x1d4)]
    );
  return _0x3d565c;
};
function decryptFromURL() {
  const _0x714850 = _0x489a65,
    _0x233f4e = new URLSearchParams(window[_0x714850(0x16d)][_0x714850(0x1dd)]),
    _0x351a04 = _0x233f4e[_0x714850(0x1ed)](_0x714850(0x1d8));
  let _0x2ff509 = _0x351a04[_0x714850(0x1c0)]("\x20", "+");
  console["log"](_0x714850(0x17e) + _0x2ff509);
  const _0x15d975 = decodeURIComponent(_0x2ff509);
  if (_0x15d975) {
    const _0x47d81c = decryptionAES(_0x15d975);
    console[_0x714850(0x1cb)](_0x714850(0x17d), _0x47d81c);
    const _0x2c8905 = new URLSearchParams(_0x47d81c);
    (cname = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x190))),
      (clanguage = _0x714850(0x20a)),
      (accNum = _0x2c8905["get"](_0x714850(0x1ae))),
      (loanID = _0x2c8905[_0x714850(0x1ed)]("loanno")),
      (loanamout = _0x2c8905[_0x714850(0x1ed)]("loanamout")),
      (pendingamount = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x20f))),
      (EMIamount = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x1a6))),
      (duedate = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x1f2))),
      (pemi = _0x2c8905["get"]("pemi")),
      (Lastpaiddate = _0x2c8905["get"](_0x714850(0x1fa))),
      (cinstatus = _0x2c8905["get"](_0x714850(0x1b9))),
      (nextemidate = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x194))),
      (Totalpaidemi = _0x2c8905["get"]("Totalpaidemi")),
      (Outstanding = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x16c))),
      (Preclosureamt = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x18d))),
      (Centermangcontactno = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x168))),
      (Branchmgrname = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x1a2))),
      (Branchmgrcontactno = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x1d7))),
      (applicant_id1 = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x196))),
      (user_id1 = _0x2c8905[_0x714850(0x1ed)](_0x714850(0x1be)));
  } else console[_0x714850(0x1cb)](_0x714850(0x179));
}
function _0x12ff(_0x2cde1e, _0xece656) {
  const _0x5aa46b = _0x5aa4();
  return (
    (_0x12ff = function (_0x12ff5c, _0x2e26f8) {
      _0x12ff5c = _0x12ff5c - 0x162;
      let _0x23cda9 = _0x5aa46b[_0x12ff5c];
      return _0x23cda9;
    }),
    _0x12ff(_0x2cde1e, _0xece656)
  );
}
decryptFromURL();
async function fetchlanguageJSON() {
  const _0x398f1d = await fetch("language.json");
  return (language_list = await _0x398f1d["json"]()), language_list;
}
fetchlanguageJSON()[_0x489a65(0x1f8)]((_0x22455b) => {
  const _0x8f3dc9 = _0x489a65;
  (data = _0x22455b[_0x8f3dc9(0x1a9)][0x0][clanguage][_0x8f3dc9(0x1d8)]),
    (data1 = _0x22455b[_0x8f3dc9(0x1a9)][0x0][clanguage][_0x8f3dc9(0x1e1)]),
    (data2 = _0x22455b["language"][0x0][clanguage][_0x8f3dc9(0x20d)]);
});
var noSleep = new NoSleep();
function vrMode() {
  const _0xbc6740 = _0x489a65;
  viewer[_0xbc6740(0x1de)](0x6e),
    noSleep[_0xbc6740(0x178)](),
    (document[_0xbc6740(0x1b8)]("modal")[_0xbc6740(0x1e2)][_0xbc6740(0x176)] =
      _0xbc6740(0x173)),
    start();
  var _0x5b53cd = document["createElement"](_0xbc6740(0x185));
  (_0x5b53cd[_0xbc6740(0x186)] = _0xbc6740(0x181)),
    action_idle[_0xbc6740(0x20b)](),
    viewer[_0xbc6740(0x187)](PANOLENS[_0xbc6740(0x193)][_0xbc6740(0x17a)]),
    viewer["enableControl"](PANOLENS[_0xbc6740(0x16b)][_0xbc6740(0x1a4)]),
    (CARDBOARD_MODE = !![]),
    setTimeout(bankStart1, 0x1388);
}
async function start() {
  const _0x183bca = _0x489a65;
  await document[_0x183bca(0x188)][_0x183bca(0x213)]();
}
function bankStart1() {
  const _0x3e739d = _0x489a65;
  noSleep[_0x3e739d(0x178)](),
    start(),
    (document[_0x3e739d(0x1b8)](_0x3e739d(0x1cf))[_0x3e739d(0x1e2)]["display"] =
      _0x3e739d(0x173));
  var _0x227b96 = document[_0x3e739d(0x1df)]("audio");
  (_0x227b96["src"] = "audio/bank.mp3"),
    action_idle["play"](),
    setTimeout(() => {
      const _0x141bef = _0x3e739d;
      viewer["tweenControlCenter"](
        new THREE[_0x141bef(0x197)](-0x221, 0xc8, -0x1388),
        0x12c
      );
      if (CARDBOARD_MODE == !![]) viewer["setCameraFov"](0x6e);
      else viewer["setCameraFov"](0x5a);
      readCustomerInfo();
    }, 0x12c);
}
function bankStart() {
  const _0x472eeb = _0x489a65;
  document["getElementById"](_0x472eeb(0x1cf))[_0x472eeb(0x1e2)][
    _0x472eeb(0x176)
  ] = _0x472eeb(0x173);
  let _0x314923 = 0x0;
  viewer[_0x472eeb(0x18f)](
    new THREE[_0x472eeb(0x197)](-0x5, -0x3e8, -0x1388),
    0x12c
  ),
    $(document)["ready"](function () {
      const _0x3fa588 = _0x472eeb;
      var _0x44cfa6, _0x3ff2a0, _0x34df15, _0x3ad85e;
      clanguage == _0x3fa588(0x20a)
        ? ((_0x3ff2a0 = "hi"),
          (modelID = "6"),
          (numeric = "hcurrency"),
          (audioSource = "audio/Hindi_Audio.mp3"),
          (_0x34df15 = [
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
          (_0x3ad85e = [
            data1[0xc] + "" + Centermangcontactno,
            data1[0xd] + "" + Branchmgrname,
            data1[0xe] + "" + Branchmgrcontactno,
          ]))
        : ((_0x3ff2a0 = "en"),
          (modelID = "5"),
          (numeric = _0x3fa588(0x180)),
          (audioSource = _0x3fa588(0x212)),
          (_0x34df15 = [
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
          (_0x3ad85e = [
            data2[0xc] + "" + Centermangcontactno,
            data2[0xd] + "" + Branchmgrname,
            data2[0xe] + "" + Branchmgrcontactno,
          ]));
      setTimeout(function () {
        const _0x381465 = _0x3fa588;
        action_talk[_0x381465(0x20b)]();
      }, 0x7d0),
        (_0x44cfa6 = [
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
          data[0xe],
        ]);
      async function _0x5dc731() {
        const _0x239a66 = _0x3fa588;
        action_talk[_0x239a66(0x1ef)]();
        const _0x4d2763 = await navigator[_0x239a66(0x19f)][_0x239a66(0x1d5)]({
            audio: { sampleRate: 0x3e80, channelCount: 0x1 },
          }),
          _0x1c817d = new AudioContext({ sampleRate: 0x3e80 }),
          _0x58b063 = _0x1c817d[_0x239a66(0x18e)](_0x4d2763);
        (recorder = new Recorder(_0x58b063, { numChannels: 0x1 })),
          recorder[_0x239a66(0x1d1)]();
      }
      async function _0x1dc85f() {
        const _0x1ab942 = _0x3fa588;
        recorder &&
          recorder[_0x1ab942(0x167)] !== _0x1ab942(0x164) &&
          (recorder[_0x1ab942(0x1ef)](),
          recorder[_0x1ab942(0x1c6)](async (_0x3f74c8) => {
            const _0x48ba6e = _0x1ab942,
              _0x45e8d0 = new XMLHttpRequest();
            _0x45e8d0[_0x48ba6e(0x16a)](
              _0x48ba6e(0x1d2),
              _0x48ba6e(0x1eb),
              !![]
            ),
              (_0x45e8d0["onreadystatechange"] = function () {
                const _0x32dc41 = _0x48ba6e;
                if (_0x45e8d0["readyState"] === XMLHttpRequest["DONE"]) {
                  if (_0x45e8d0[_0x32dc41(0x1f5)] === 0xc8) {
                    const _0x561525 = _0x45e8d0[_0x32dc41(0x1b4)];
                    console["log"](_0x32dc41(0x1c7), _0x561525),
                      _0x5ad8bb(_0x561525);
                  } else
                    console["error"](
                      "Request\x20failed:",
                      _0x45e8d0[_0x32dc41(0x1f7)]
                    );
                }
              });
            const _0x17b1d3 = new FormData();
            _0x17b1d3["append"](_0x48ba6e(0x1ad), _0x3f74c8);
            const _0x473fda = {
              ID: _0x48ba6e(0x1f9),
              modelID: modelID,
              mode: "dev",
              command: _0x48ba6e(0x1ba),
              userID: "Se343Dd3SDvoqTSd32df34",
            };
            _0x17b1d3[_0x48ba6e(0x16e)](
              "metadata",
              JSON[_0x48ba6e(0x19e)](_0x473fda)
            ),
              _0x45e8d0[_0x48ba6e(0x169)](_0x17b1d3);
          }));
      }
      function _0x149cc4(_0x58f1d3, _0x91f905) {
        const _0x1e4080 = _0x3fa588,
          _0x20e875 = document[_0x1e4080(0x1b8)](_0x1e4080(0x1f6)),
          _0x2e8d97 = "Grt45rtsd45T332sSw23derAsw2f5sd34i8hsders1",
          _0x54474b = _0x1e4080(0x20b),
          _0x472198 = _0x1e4080(0x204),
          _0x464015 = "2",
          _0xfb309f = "hi",
          _0x14a83a = encodeURIComponent(_0x58f1d3),
          _0x565969 =
            _0x1e4080(0x201) +
            _0x14a83a +
            _0x1e4080(0x1f3) +
            _0x2e8d97 +
            _0x1e4080(0x1b1) +
            _0x54474b +
            "&numeric=" +
            numeric +
            _0x1e4080(0x1a0) +
            _0xfb309f +
            _0x1e4080(0x183) +
            _0x472198 +
            _0x1e4080(0x16f) +
            _0x464015;
        (_0x20e875[_0x1e4080(0x186)] = _0x565969),
          _0x20e875[_0x1e4080(0x20b)]()[_0x1e4080(0x1d9)](function (_0x234877) {
            const _0x5a307c = _0x1e4080;
            console[_0x5a307c(0x1f1)]("Error\x20playing\x20audio:", _0x234877);
          }),
          _0x20e875[_0x1e4080(0x170)](_0x1e4080(0x17c), function () {
            !isCallbackCalled && _0x91f905();
          });
      }
      function _0x5ad8bb(_0x2e37fb) {
        const _0x1ae829 = _0x3fa588,
          _0x33c989 = JSON[_0x1ae829(0x210)](_0x2e37fb);
        if (
          _0x33c989["status"] === "success" &&
          _0x33c989["alternatives"]["length"] > 0x0
        ) {
          const _0xf94ba0 = _0x33c989[_0x1ae829(0x1fb)][0x0]["transcript"];
          console[_0x1ae829(0x1cb)](_0x1ae829(0x1f0), _0xf94ba0);
          const _0x2ed5c4 = (_0x26c47d) => {
            const _0x58d423 = _0x1ae829,
              _0x2df72f = CryptoJS[_0x58d423(0x172)][_0x58d423(0x166)](
                _0x26c47d,
                _0x58d423(0x1ac)
              );
            return _0x2df72f[_0x58d423(0x206)]();
          };
          function _0x232130(_0x4130af) {
            return _0x2ed5c4(_0x4130af);
          }
          const _0x4eb12e = _0x232130(applicant_id1),
            _0x2afbb2 = _0x232130(user_id1),
            _0x12c336 = _0x232130(_0xf94ba0),
            _0x1aec34 = _0x1ae829(0x1b3),
            _0x29ff0b = { applicant_id: _0x4eb12e, user_pin: _0x2afbb2 };
          fetch(_0x1aec34, {
            method: _0x1ae829(0x1d2),
            headers: { "Content-Type": _0x1ae829(0x208) },
            body: JSON[_0x1ae829(0x19e)](_0x29ff0b),
          })
            [_0x1ae829(0x1f8)]((_0x8405ac) => {
              const _0x3dfe47 = _0x1ae829;
              if (!_0x8405ac["ok"])
                throw new Error(_0x3dfe47(0x18a) + _0x8405ac["status"]);
              return _0x8405ac[_0x3dfe47(0x1e3)]();
            })
            ["then"]((_0x110027) => {
              const _0x367965 = _0x1ae829;
              console[_0x367965(0x1cb)](_0x367965(0x1c5), _0x110027),
                console[_0x367965(0x1cb)](
                  _0x367965(0x1c4),
                  _0x110027["request_id"]
                ),
                (request_id = _0x110027["request_id"]),
                _0x3dcb43();
            })
            [_0x1ae829(0x1d9)]((_0x1ddc16) => {
              const _0x514fe9 = _0x1ae829;
              console["error"](_0x514fe9(0x1c3), _0x1ddc16);
            });
          function _0x3dcb43() {
            const _0x34e7f2 = _0x1ae829,
              _0x43a67f = "https://metawebapp.azurewebsites.net/response";
            console["log"](_0x34e7f2(0x174), request_id);
            const _0x34b99c = {
              request_id: request_id,
              applicant_id: _0x4eb12e,
              user_pin: _0x2afbb2,
              response: _0x12c336,
            };
            fetch(_0x43a67f, {
              method: _0x34e7f2(0x1d2),
              headers: { "Content-Type": _0x34e7f2(0x208) },
              body: JSON[_0x34e7f2(0x19e)](_0x34b99c),
            })
              ["then"]((_0x59128a) => {
                const _0x58cd73 = _0x34e7f2;
                if (!_0x59128a["ok"])
                  throw new Error(
                    "HTTP\x20error!\x20Status:\x20" + _0x59128a["status"]
                  );
                return _0x59128a[_0x58cd73(0x1e3)]();
              })
              [_0x34e7f2(0x1f8)]((_0x3ca379) => {
                const _0x1246fd = _0x34e7f2;
                console[_0x1246fd(0x1cb)](_0x1246fd(0x1b2), _0x3ca379);
              })
              [_0x34e7f2(0x1d9)]((_0x5b0f9e) => {
                const _0x304b13 = _0x34e7f2;
                console[_0x304b13(0x1f1)](_0x304b13(0x1ec), _0x5b0f9e);
              });
          }
        } else {
          const _0x1913a0 = document[_0x1ae829(0x1b8)](_0x1ae829(0x1f6));
          clanguage == "hindi"
            ? (_0x1913a0["src"] = _0x1ae829(0x1ff))
            : (_0x1913a0[_0x1ae829(0x186)] = "audio/English_ShrInd.mp3"),
            _0x1913a0[_0x1ae829(0x20b)]()[_0x1ae829(0x1d9)](function (
              _0x1a7354
            ) {
              const _0x3d1c15 = _0x1ae829;
              console[_0x3d1c15(0x1f1)](_0x3d1c15(0x1dc), _0x1a7354);
            }),
            _0x1913a0["addEventListener"](_0x1ae829(0x17c), function () {});
        }
      }
      function _0x2952dc() {
        const _0x434f04 = _0x3fa588,
          _0x1f10d8 = document[_0x434f04(0x1b8)]("audioPlayer");
        if (!_0x1f10d8) {
          console[_0x434f04(0x1f1)](_0x434f04(0x17b));
          return;
        }
        (_0x1f10d8[_0x434f04(0x186)] = audioSource),
          _0x1f10d8[_0x434f04(0x20b)]()
            [_0x434f04(0x1f8)](() => {
              const _0x175bb3 = _0x434f04;
              action_talk[_0x175bb3(0x20b)]();
            })
            [_0x434f04(0x1d9)]((_0x23c544) => {
              const _0x5f339d = _0x434f04;
              console[_0x5f339d(0x1f1)](_0x5f339d(0x1a5), _0x23c544);
            }),
          (_0x1f10d8[_0x434f04(0x1d3)] = () => {
            const _0x598a5c = _0x434f04;
            action_talk["stop"](), console[_0x598a5c(0x1cb)](_0x598a5c(0x203));
          });
      }
      var _0x390d8d = _0x34df15[_0x3fa588(0x191)]("."),
        _0x2a79c3 = _0x3ad85e["join"]("."),
        _0x390d8d = _0x34df15[_0x3fa588(0x191)]("."),
        _0x2a79c3 = _0x3ad85e[_0x3fa588(0x191)](".");
      const _0x35d804 = _0x390d8d[_0x3fa588(0x19c)](/\.(?!\d)/),
        _0x34743c = document[_0x3fa588(0x1b8)](_0x3fa588(0x1bf));
      function _0x2d8e9f(_0x135540) {
        const _0x29bb4a = _0x3fa588;
        return _0x135540[_0x29bb4a(0x206)]()
          [_0x29bb4a(0x19c)]("")
          [_0x29bb4a(0x191)]("\x20");
      }
      function _0x587478(_0x550d9c) {
        const _0x59f73c = _0x3fa588;
        return _0x550d9c[_0x59f73c(0x206)]()
          ["split"]("")
          [_0x59f73c(0x191)]("\x20");
      }
      async function _0x3f7e23(_0x177331) {
        async function _0x5aed86() {
          const _0x17d95d = _0x12ff,
            _0x3bcf7b = document[_0x17d95d(0x1b8)](_0x17d95d(0x1bf));
          for (
            let _0x2b37bb = 0x0;
            _0x2b37bb < _0x44cfa6[_0x17d95d(0x1a7)];
            _0x2b37bb++
          ) {
            let _0x1f0eb7 = _0x44cfa6[_0x2b37bb] + ".",
              _0x40cca4 = _0x2d8e9f(accNum),
              _0x3c016a = _0x587478(loanID);
            if (_0x1f0eb7[_0x17d95d(0x195)](accNum)) {
              let _0x74e2f6 = _0x1f0eb7["replace"](accNum, _0x40cca4);
              _0x3bcf7b[_0x17d95d(0x1bb)] = _0x1f0eb7;
              try {
                await _0x2a4be3(_0x74e2f6);
              } catch (_0x50b927) {
                console[_0x17d95d(0x1f1)](_0x17d95d(0x1a5), _0x50b927);
              }
            } else {
              if (_0x1f0eb7[_0x17d95d(0x195)](loanID)) {
                let _0x5547ed = _0x1f0eb7["replace"](loanID, _0x3c016a);
                _0x3bcf7b[_0x17d95d(0x1bb)] = _0x1f0eb7;
                try {
                  await _0x2a4be3(_0x5547ed);
                } catch (_0x9be9a3) {
                  console[_0x17d95d(0x1f1)](_0x17d95d(0x1a5), _0x9be9a3);
                }
              } else {
                _0x3bcf7b[_0x17d95d(0x1bb)] = _0x1f0eb7;
                try {
                  await _0x2a4be3(_0x1f0eb7);
                } catch (_0x2200a7) {
                  console[_0x17d95d(0x1f1)](_0x17d95d(0x1a5), _0x2200a7);
                }
              }
            }
          }
          await _0x5dc731()
            [_0x17d95d(0x1f8)](() => {
              setTimeout(() => {
                _0x1dc85f();
              }, 0x1770);
            })
            [_0x17d95d(0x1f8)](() => {
              setTimeout(() => {
                _0x2952dc();
              }, 0x1b58);
            });
          const _0x3af3e7 = _0x2a79c3[_0x17d95d(0x19c)](".");
          for (
            let _0x17fade = 0x0;
            _0x17fade < _0x3af3e7["length"];
            _0x17fade++
          ) {
            const _0x1d729d = _0x3af3e7[_0x17fade][_0x17d95d(0x209)]();
            if (!_0x1d729d) continue;
            const _0x129c6a = document["createElement"]("p");
            (_0x129c6a[_0x17d95d(0x1bb)] = _0x1d729d),
              _0x3bcf7b[_0x17d95d(0x202)](_0x129c6a),
              await new Promise((_0x18905e) => setTimeout(_0x18905e, 0xbb8)),
              (_0x3bcf7b["innerHTML"] = "");
          }
          try {
          } catch (_0x95c196) {
            console[_0x17d95d(0x1f1)](
              "Error\x20during\x20recording\x20or\x20transcription:",
              _0x95c196
            );
          }
        }
        function _0x2a4be3(_0x12ec82) {
          return new Promise((_0x4acc5a, _0x308773) => {
            _0x149cc4(_0x12ec82, _0x4acc5a);
          });
        }
        await _0x5aed86();
      }
      _0x3f7e23(0x0);
    });
}
(panorama = new PANOLENS[_0x489a65(0x1fc)]([
  _0x489a65(0x1ca),
  "images/reception/nx.jpg",
  _0x489a65(0x1cc),
  _0x489a65(0x1da),
  _0x489a65(0x1fe),
  "images/reception/nz.jpg",
])),
  (clock = new THREE[_0x489a65(0x1a8)]());
var container = document[_0x489a65(0x205)](_0x489a65(0x1c8));
(viewer = new PANOLENS["Viewer"]({
  output: _0x489a65(0x189),
  container: container,
})),
  viewer[_0x489a65(0x1de)](0x46),
  viewer[_0x489a65(0x175)](panorama),
  viewer[_0x489a65(0x1ab)](panorama),
  (hemiLight = new THREE[_0x489a65(0x1e0)](0xb1e1ff, 0xb97a20));
function _0x5aa4() {
  const _0x3574e8 = [
    "prop",
    "https://asr-api.vspeech.ai/api/asr/v1",
    "Error\x20during\x20Response\x20API\x20call:",
    "get",
    "castShadow",
    "stop",
    "Generated\x20Text\x20-----\x20",
    "error",
    "duedate",
    "&api_key=",
    "traverse",
    "status",
    "audioPlayer",
    "statusText",
    "then",
    "test-1212",
    "Lastpaiddate",
    "alternatives",
    "CubePanorama",
    "receiveShadow",
    "images/reception/pz.jpg",
    "audio/Hindi_ShrInd.mp3",
    "decrypt",
    "https://tts.indiantts.in/tts?text=",
    "appendChild",
    "Audio\x20playback\x20has\x20ended.",
    "8000",
    "querySelector",
    "toString",
    "5353932jdHsQT",
    "application/json",
    "trim",
    "hindi",
    "play",
    "talk",
    "data2",
    "rotation",
    "pendingamount",
    "parse",
    "children",
    "audio/English_Audio.mp3",
    "requestFullscreen",
    "fadeOut",
    "models/bluedress.glb",
    "inactive",
    "visible",
    "encrypt",
    "state",
    "Centermangcontactno",
    "send",
    "open",
    "CONTROLS",
    "Outstanding",
    "location",
    "append",
    "&ver=",
    "addEventListener",
    "getDelta",
    "AES",
    "none",
    "Request\x20ID\x20in\x20response\x20call",
    "add",
    "display",
    "click",
    "enable",
    "No\x20encrypted\x20data\x20found\x20in\x20URL.",
    "CARDBOARD",
    "Audio\x20player\x20element\x20not\x20found.",
    "ended",
    "Decrypted\x20URL\x20-----\x20",
    "Final\x20Url\x20----\x20",
    "set",
    "currency",
    "audio/bank.mp3",
    "2001543jbLQtM",
    "&samplerate=",
    "idle",
    "audio",
    "src",
    "enableEffect",
    "body",
    "console",
    "HTTP\x20error!\x20Status:\x20",
    ".loader-wrapper",
    "localStream",
    "Preclosureamt",
    "createMediaStreamSource",
    "tweenControlCenter",
    "name",
    "join",
    "AnimationClip",
    "MODES",
    "nextemidate",
    "includes",
    "applicant_id",
    "Vector3",
    "scale",
    "isMesh",
    "230RkAiJT",
    "530302INVhDx",
    "split",
    "localAudio",
    "stringify",
    "mediaDevices",
    "&lang=",
    "4EPWkXZ",
    "Branchmgrname",
    "findByName",
    "DEVICEORIENTATION",
    "Error\x20playing\x20audio:",
    "EMIamount",
    "length",
    "Clock",
    "language",
    "AmbientLight",
    "setPanorama",
    "1234567890123456",
    "audio_base64",
    "accnum",
    "64gpatAX",
    "u\x20got\x20an\x20error:",
    "&action=",
    "Response\x20API\x20Response:",
    "https://metawebapp.azurewebsites.net/request",
    "responseText",
    "clipAction",
    "update",
    "enc",
    "getElementById",
    "cinstatus",
    "transcribe",
    "textContent",
    "slow",
    "srcObject",
    "user_id",
    "dynamicText",
    "replaceAll",
    "182196EtAyjD",
    "#button2",
    "Error\x20during\x20Request\x20API\x20call:",
    "Request_ID----",
    "Request\x20API\x20Response:",
    "exportWAV",
    "Response:",
    "#container",
    "disabled",
    "images/reception/px.jpg",
    "log",
    "images/reception/py.jpg",
    "scene",
    "PointLight",
    "modal",
    "547757liPAJs",
    "record",
    "POST",
    "onended",
    "Utf8",
    "getUserMedia",
    "GLTFLoader",
    "Branchmgrcontactno",
    "data",
    "catch",
    "images/reception/ny.jpg",
    "AnimationMixer",
    "Error\x20playing\x20audio1:",
    "search",
    "setCameraFov",
    "createElement",
    "HemisphereLight",
    "data1",
    "style",
    "json",
    "739100oFgwaf",
    "position",
    "1612428XFsMiH",
    "DirectionalLight",
    "load",
    "#button1",
  ];
  _0x5aa4 = function () {
    return _0x3574e8;
  };
  return _0x5aa4();
}
var directionallight = new THREE[_0x489a65(0x1e7)](0xffffff, 0.5),
  ambientlight = new THREE[_0x489a65(0x1aa)](0x404040, 0.56);
panorama[_0x489a65(0x175)](ambientlight),
  panorama[_0x489a65(0x175)](directionallight),
  directionallight[_0x489a65(0x1e5)][_0x489a65(0x17f)](0x5, 0xa, 7.5),
  (pointlight = new THREE[_0x489a65(0x1ce)](0xffd6aa, 0.8)),
  pointlight[_0x489a65(0x1e5)][_0x489a65(0x17f)](0x0, 0xa, 0x0),
  (pointlight[_0x489a65(0x1ee)] = !![]),
  panorama[_0x489a65(0x175)](pointlight),
  (pointlight = pointlight["clone"]()),
  pointlight[_0x489a65(0x1e5)][_0x489a65(0x17f)](0x41, 0x0, -0x2d),
  (pointlight[_0x489a65(0x1ee)] = !![]),
  panorama[_0x489a65(0x175)](pointlight),
  hemiLight[_0x489a65(0x1e5)]["set"](0x7, 0xa, -0x7),
  panorama[_0x489a65(0x175)](hemiLight);
var loader = new THREE[_0x489a65(0x1d6)]();
loader["load"](_0x489a65(0x163), function (_0x4c131a) {
  const _0x52a3cd = _0x489a65;
  (gltfscene = _0x4c131a[_0x52a3cd(0x1cd)]),
    (gltfglobal = _0x4c131a),
    (car = _0x4c131a["scene"][_0x52a3cd(0x211)][0x0]),
    gltfscene[_0x52a3cd(0x1e5)]["set"](-0x5, -0xa, -0xa),
    (gltfscene[_0x52a3cd(0x20e)]["y"] = 0.2),
    gltfscene[_0x52a3cd(0x198)][_0x52a3cd(0x17f)](0x8, 0x8, 0x8),
    car[_0x52a3cd(0x1f4)]((_0x3cac92) => {
      const _0x33584c = _0x52a3cd;
      _0x3cac92[_0x33584c(0x199)] &&
        ((_0x3cac92[_0x33584c(0x1ee)] = !![]),
        (_0x3cac92[_0x33584c(0x1fd)] = !![]));
    });
  const _0x5aafc4 = _0x4c131a["animations"];
  mixer = new THREE[_0x52a3cd(0x1db)](_0x4c131a[_0x52a3cd(0x1cd)]);
  const _0x26abce = THREE[_0x52a3cd(0x192)][_0x52a3cd(0x1a3)](
      _0x5aafc4,
      _0x52a3cd(0x184)
    ),
    _0x2668c3 = THREE[_0x52a3cd(0x192)][_0x52a3cd(0x1a3)](
      _0x5aafc4,
      _0x52a3cd(0x20c)
    );
  (action_idle = mixer[_0x52a3cd(0x1b5)](_0x26abce)),
    (action_talk = mixer[_0x52a3cd(0x1b5)](_0x2668c3)),
    panorama["add"](gltfscene),
    (gltfscene[_0x52a3cd(0x165)] = !![]),
    action_idle[_0x52a3cd(0x20b)](),
    animate();
});
function animate() {
  const _0x156417 = _0x489a65;
  var _0x4d96a5 = clock[_0x156417(0x171)]();
  if (mixer) mixer[_0x156417(0x1b6)](_0x4d96a5);
  if (mixer1) mixer1[_0x156417(0x1b6)](_0x4d96a5);
  if (mixer2) mixer2[_0x156417(0x1b6)](_0x4d96a5);
  requestAnimationFrame(animate);
}
function getLocalStream() {
  const _0x53e421 = _0x489a65;
  navigator[_0x53e421(0x19f)]
    ["getUserMedia"]({ video: ![], audio: !![] })
    ["then"]((_0x2ed124) => {
      const _0x3708f9 = _0x53e421;
      (window[_0x3708f9(0x18c)] = _0x2ed124),
        (window[_0x3708f9(0x19d)][_0x3708f9(0x1bd)] = _0x2ed124),
        (window["localAudio"]["autoplay"] = !![]);
    })
    [_0x53e421(0x1d9)]((_0x499505) => {
      const _0x47633b = _0x53e421;
      console[_0x47633b(0x1cb)](_0x47633b(0x1b0) + _0x499505);
    });
}
