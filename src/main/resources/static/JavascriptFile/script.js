const _0x331101 = _0x5f0a;
(function (_0x91abdb, _0x2f281f) {
  const _0x24ec81 = _0x5f0a,
    _0x5e7ece = _0x91abdb();
  while (!![]) {
    try {
      const _0x5001e0 =
        parseInt(_0x24ec81(0x1ed)) / (0x1084 + 0x16f3 + -0x1 * 0x2776) +
        -parseInt(_0x24ec81(0x28a)) / (-0x146c + -0xef3 * 0x1 + 0x3 * 0xbcb) +
        parseInt(_0x24ec81(0x2e2)) / (-0x1e80 + -0x13 * 0x1f3 + 0x438c) +
        (parseInt(_0x24ec81(0x299)) /
          (-0x2 * 0x871 + -0x120a + -0x1178 * -0x2)) *
          (parseInt(_0x24ec81(0x20b)) / (0x24b + 0x2463 + 0x26a9 * -0x1)) +
        (-parseInt(_0x24ec81(0x30c)) / (0x389 + 0x214d + 0x49a * -0x8)) *
          (-parseInt(_0x24ec81(0x2e6)) /
            (-0x34 * 0x13 + -0xb7e + 0x1f * 0x7f)) +
        (-parseInt(_0x24ec81(0x206)) / (0x18fb + 0xafc + -0x23ef)) *
          (parseInt(_0x24ec81(0x1ef)) / (-0x833 + -0x1ce2 + 0x251e)) +
        (parseInt(_0x24ec81(0x23a)) /
          (0x2 * 0x15d + 0x481 * -0x6 + -0x23 * -0xb2)) *
          (-parseInt(_0x24ec81(0x22f)) / (0x751 * 0x5 + 0xf6c + -0x1152 * 0x3));
      if (_0x5001e0 === _0x2f281f) break;
      else _0x5e7ece["push"](_0x5e7ece["shift"]());
    } catch (_0x51d241) {
      _0x5e7ece["push"](_0x5e7ece["shift"]());
    }
  }
})(_0x29c9, -0x18 * 0x1cba + -0x2c68f * 0x1 + -0x2 * -0x38ad9);
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
  mixer1,
  mixer2,
  gltfscene2,
  action_loan_idle,
  action_loan_talk,
  language_list,
  CARDBOARD_MODE = !(0xf6f + 0x5 * -0x4c9 + 0x5 * 0x1b3),
  isCallbackCalled = !(0x2b + -0x792 + 0x768);
$(window)["on"](_0x331101(0x2b2), async function () {
  const _0x1ae2d2 = _0x331101,
    _0x19f1d6 = {
      skMBg: function (_0x27373d, _0x5ed419) {
        return _0x27373d(_0x5ed419);
      },
      GhdSg: _0x1ae2d2(0x23e) + _0x1ae2d2(0x2e3),
      XaAkl: _0x1ae2d2(0x217),
      kwMVa: function (_0x147ea6) {
        return _0x147ea6();
      },
      rjUuM: _0x1ae2d2(0x204),
      sMCLP: _0x1ae2d2(0x29b),
      gUMHA: _0x1ae2d2(0x20a),
    };
  _0x19f1d6[_0x1ae2d2(0x29c)]($, _0x19f1d6[_0x1ae2d2(0x28f)])[_0x1ae2d2(0x254)](
    _0x19f1d6[_0x1ae2d2(0x2bb)]
  ),
    _0x19f1d6[_0x1ae2d2(0x25d)](fetchlanguageJSON),
    document[_0x1ae2d2(0x270) + _0x1ae2d2(0x295)](_0x19f1d6[_0x1ae2d2(0x325)])[
      _0x1ae2d2(0x29e) + _0x1ae2d2(0x1e5)
    ](_0x19f1d6[_0x1ae2d2(0x2a4)], bankStart),
    document[_0x1ae2d2(0x270) + _0x1ae2d2(0x295)](_0x19f1d6[_0x1ae2d2(0x2cd)])[
      _0x1ae2d2(0x29e) + _0x1ae2d2(0x1e5)
    ](_0x19f1d6[_0x1ae2d2(0x2a4)], bankStart);
});
let cname,
  clanguage,
  accNum,
  loanamout,
  pendingamount,
  EMIamount,
  duedate,
  pemi;
const decryptionAES = (_0x2cf2e8) => {
  const _0x5c3731 = _0x331101,
    _0x3d0f20 = { XZvfZ: _0x5c3731(0x1cb) + _0x5c3731(0x268) };
  let _0x26745d = CryptoJS[_0x5c3731(0x28e)][_0x5c3731(0x25f)](
      _0x2cf2e8,
      _0x3d0f20[_0x5c3731(0x26a)]
    ),
    _0x187614 = _0x26745d[_0x5c3731(0x2b4)](
      CryptoJS[_0x5c3731(0x2fd)][_0x5c3731(0x1eb)]
    );
  return _0x187614;
};
function decryptFromURL() {
  const _0x2974fa = _0x331101,
    _0x4e354a = {
      IRUHX: _0x2974fa(0x266),
      LaXIZ: function (_0x1447cd, _0x2e9a14) {
        return _0x1447cd + _0x2e9a14;
      },
      DMcOX: _0x2974fa(0x271) + _0x2974fa(0x294),
      qfVGo: function (_0x268850, _0x2314c) {
        return _0x268850(_0x2314c);
      },
      vtXPj: _0x2974fa(0x1c0) + _0x2974fa(0x326),
      VfpzF: _0x2974fa(0x30a),
      XcfNN: _0x2974fa(0x321),
      wxjDK: _0x2974fa(0x2d2),
      nybeq: _0x2974fa(0x239),
      LTKTj: _0x2974fa(0x328) + _0x2974fa(0x2bd),
      xQzOc: _0x2974fa(0x20c),
      DsUry: _0x2974fa(0x2e7),
      uaIlI: _0x2974fa(0x229),
      eunmQ: _0x2974fa(0x2d4) + _0x2974fa(0x2ba) + _0x2974fa(0x316) + ".",
    };
  let _0x400a0b = new URLSearchParams(
      window[_0x2974fa(0x2ef)][_0x2974fa(0x212)]
    ),
    _0x384ede = _0x400a0b[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x1c4)]);
  console[_0x2974fa(0x260)](_0x384ede);
  let _0x26c551 = _0x384ede[_0x2974fa(0x1c3)]("\x20", "+");
  console[_0x2974fa(0x260)](
    _0x4e354a[_0x2974fa(0x21c)](_0x4e354a[_0x2974fa(0x216)], _0x26c551)
  );
  let _0x39ca56 = _0x4e354a[_0x2974fa(0x265)](decodeURIComponent, _0x26c551);
  if ((console[_0x2974fa(0x260)](_0x39ca56), _0x39ca56)) {
    let _0x40ce9b = _0x4e354a[_0x2974fa(0x265)](decryptionAES, _0x39ca56);
    console[_0x2974fa(0x260)](_0x4e354a[_0x2974fa(0x1f8)], _0x40ce9b);
    let _0x58faa = new URLSearchParams(_0x40ce9b);
    (cname = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x1fa)])),
      (clanguage = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x1f2)])),
      (accNum = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x267)])),
      (loanamout = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x231)])),
      (pendingamount = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x280)])),
      (EMIamount = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x2fc)])),
      (duedate = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x1db)])),
      (pemi = _0x58faa[_0x2974fa(0x23c)](_0x4e354a[_0x2974fa(0x27f)]));
  } else console[_0x2974fa(0x260)](_0x4e354a[_0x2974fa(0x1b5)]);
}
async function fetchlanguageJSON() {
  const _0x136872 = _0x331101,
    _0x4ce1a2 = {
      paVFF: function (_0x59d030, _0x4033eb) {
        return _0x59d030(_0x4033eb);
      },
      SAsqz: _0x136872(0x1f9) + _0x136872(0x324),
    };
  let _0x407d44 = await _0x4ce1a2[_0x136872(0x304)](
    fetch,
    _0x4ce1a2[_0x136872(0x225)]
  );
  return (language_list = await _0x407d44[_0x136872(0x1f3)]());
}
decryptFromURL(),
  fetchlanguageJSON()[_0x331101(0x2d5)]((_0x468e98) => {
    const _0x3e1b60 = _0x331101;
    (data =
      _0x468e98[_0x3e1b60(0x27e)][0x17b * -0xc + 0xf63 + -0x7 * -0x57][
        clanguage
      ][_0x3e1b60(0x266)]),
      console[_0x3e1b60(0x260)](data);
  });
function _0x5f0a(_0x1069fc, _0x21889b) {
  const _0x25803e = _0x29c9();
  return (
    (_0x5f0a = function (_0x1c9a96, _0xea30cd) {
      _0x1c9a96 = _0x1c9a96 - (-0xa98 + 0x3 * -0xa2e + -0x4 * -0xab5);
      let _0x46bf8c = _0x25803e[_0x1c9a96];
      return _0x46bf8c;
    }),
    _0x5f0a(_0x1069fc, _0x21889b)
  );
}
var noSleep = new NoSleep();
function vrMode() {
  const _0xaf9063 = _0x331101,
    _0x11ae6e = {
      CZdjG: _0xaf9063(0x1cd),
      TSZcW: _0xaf9063(0x1ff),
      eMEBH: function (_0x2bf539) {
        return _0x2bf539();
      },
      QWvst: _0xaf9063(0x2a2),
      URcqm: _0xaf9063(0x2a1) + _0xaf9063(0x276),
      vTliH: function (_0x102659, _0xb1e76a, _0x1ed1c1) {
        return _0x102659(_0xb1e76a, _0x1ed1c1);
      },
    };
  viewer[_0xaf9063(0x250) + "ov"](0x1b91 * -0x1 + 0x22b2 + 0x157 * -0x5),
    noSleep[_0xaf9063(0x2ac)](),
    (document[_0xaf9063(0x270) + _0xaf9063(0x295)](_0x11ae6e[_0xaf9063(0x1ce)])[
      _0xaf9063(0x209)
    ][_0xaf9063(0x224)] = _0x11ae6e[_0xaf9063(0x1f1)]),
    _0x11ae6e[_0xaf9063(0x285)](start),
    (document[_0xaf9063(0x2cb) + _0xaf9063(0x24c)](_0x11ae6e[_0xaf9063(0x2ce)])[
      _0xaf9063(0x31d)
    ] = _0x11ae6e[_0xaf9063(0x208)]),
    action_idle[_0xaf9063(0x273)](),
    viewer[_0xaf9063(0x306) + "ct"](
      PANOLENS[_0xaf9063(0x2f7)][_0xaf9063(0x1fc)]
    ),
    viewer[_0xaf9063(0x27b) + _0xaf9063(0x2b6)](
      PANOLENS[_0xaf9063(0x1e9)][_0xaf9063(0x2d9) + _0xaf9063(0x1b7)]
    ),
    (CARDBOARD_MODE = !(-0xaed * 0x1 + -0x141c + 0x1f09 * 0x1)),
    _0x11ae6e[_0xaf9063(0x319)](
      setTimeout,
      bankStart1,
      -0x3cf * 0x5 + -0xf99 * -0x2 + 0x761
    );
}
async function start() {
  const _0x2f9804 = _0x331101;
  await document[_0x2f9804(0x2ee)][_0x2f9804(0x2f3) + _0x2f9804(0x1b9)]();
}
function bankStart1() {
  const _0x354314 = _0x331101,
    _0x11430f = {
      VxNHn: function (_0x339f99, _0x59edce) {
        return _0x339f99 == _0x59edce;
      },
      EpQDy: function (_0x4d4e8b) {
        return _0x4d4e8b();
      },
      hAYJQ: _0x354314(0x1cd),
      zoUDI: _0x354314(0x1ff),
      AiDKU: _0x354314(0x2a2),
      iNsxh: _0x354314(0x2a1) + _0x354314(0x276),
      PeEul: function (_0x2c33d3, _0x3f4773, _0x2a448e) {
        return _0x2c33d3(_0x3f4773, _0x2a448e);
      },
    };
  noSleep[_0x354314(0x2ac)](),
    _0x11430f[_0x354314(0x2b8)](start),
    (document[_0x354314(0x270) + _0x354314(0x295)](_0x11430f[_0x354314(0x253)])[
      _0x354314(0x209)
    ][_0x354314(0x224)] = _0x11430f[_0x354314(0x2ad)]),
    (document[_0x354314(0x2cb) + _0x354314(0x24c)](_0x11430f[_0x354314(0x1e4)])[
      _0x354314(0x31d)
    ] = _0x11430f[_0x354314(0x1b6)]),
    action_idle[_0x354314(0x273)](),
    _0x11430f[_0x354314(0x2b3)](
      setTimeout,
      () => {
        const _0x21669d = _0x354314;
        viewer[_0x21669d(0x315) + _0x21669d(0x2af)](
          new THREE[_0x21669d(0x2ea)](
            -(-0x13a9 + 0x26 * -0x102 + 0x3c16),
            -0x1501 + -0x16c1 + -0x2 * -0x1645,
            -(-0x24f7 + 0x17bf * -0x1 + 0x503e)
          ),
          -0xc54 * 0x3 + -0x692 + 0x165d * 0x2
        ),
          _0x11430f[_0x21669d(0x264)](
            !(-0x78b + -0x2 * 0xe24 + 0x3 * 0xbf1),
            CARDBOARD_MODE
          )
            ? viewer[_0x21669d(0x250) + "ov"](
                0x456 * -0x1 + 0x1 * 0x335 + 0x18f
              )
            : viewer[_0x21669d(0x250) + "ov"](0x7 * 0x1e3 + 0x1d70 + -0x2a4b),
          _0x11430f[_0x21669d(0x2b8)](readCustomerInfo);
      },
      0x1bf4 + -0x1aef + 0x27
    );
}
function bankStart() {
  const _0x3219a0 = _0x331101,
    _0x43eacf = {
      nJUCn: function (_0x1be073, _0x541a87) {
        return _0x1be073(_0x541a87);
      },
      eOMSo:
        _0x3219a0(0x255) +
        _0x3219a0(0x1b2) +
        _0x3219a0(0x290) +
        _0x3219a0(0x1bc),
      lEkxy: _0x3219a0(0x286) + _0x3219a0(0x1fe) + _0x3219a0(0x1e6),
      DJOtP: _0x3219a0(0x248) + _0x3219a0(0x20f),
      bSQot: function (_0x33c823, _0xa1c045) {
        return _0x33c823 === _0xa1c045;
      },
      pqowD: function (_0x1b024a, _0x4c6344) {
        return _0x1b024a === _0x4c6344;
      },
      RvymI: _0x3219a0(0x305),
      AIkMT: _0x3219a0(0x1bd) + _0x3219a0(0x1bf),
      SkgXu: function (_0x46a540, _0x742390) {
        return _0x46a540 !== _0x742390;
      },
      nYpjK: _0x3219a0(0x2d0),
      DSMCc: _0x3219a0(0x26d) + "r",
      tZDds: _0x3219a0(0x30d),
      DTQGM: _0x3219a0(0x1cb) + _0x3219a0(0x268),
      PNEyz: function (_0x2dfff5, _0x1202f9) {
        return _0x2dfff5 === _0x1202f9;
      },
      SYiBT: _0x3219a0(0x308),
      gmkuG: function (_0x4898d2, _0x5de3b8) {
        return _0x4898d2 > _0x5de3b8;
      },
      tmTyH: function (_0x85b75c, _0x1bc76b) {
        return _0x85b75c(_0x1bc76b);
      },
      YDzbI: _0x3219a0(0x21a),
      aBaxo: _0x3219a0(0x2d8),
      lMfGd: _0x3219a0(0x242) + _0x3219a0(0x318),
      BtWtu: function (_0x4c2f48, _0x36fa6c, _0x11ef9b) {
        return _0x4c2f48(_0x36fa6c, _0x11ef9b);
      },
      fkGsF:
        _0x3219a0(0x32d) +
        _0x3219a0(0x275) +
        _0x3219a0(0x2ab) +
        _0x3219a0(0x322) +
        _0x3219a0(0x21e) +
        _0x3219a0(0x2e5) +
        _0x3219a0(0x1ea) +
        "e",
      YVOkJ: _0x3219a0(0x2c1),
      tYcOC: _0x3219a0(0x1b8) + _0x3219a0(0x2ec),
      NPpRv:
        _0x3219a0(0x255) +
        _0x3219a0(0x26b) +
        _0x3219a0(0x1fd) +
        _0x3219a0(0x1fb),
      RFvNf:
        _0x3219a0(0x2d6) +
        _0x3219a0(0x2e9) +
        _0x3219a0(0x283) +
        _0x3219a0(0x2a3),
      ahTjv: _0x3219a0(0x269) + "64",
      DMzBO: _0x3219a0(0x1c5),
      VpnOq: _0x3219a0(0x256),
      AKhBH: _0x3219a0(0x23b),
      HYJZj: _0x3219a0(0x1d4),
      HAudP: _0x3219a0(0x32f) + _0x3219a0(0x2a8) + "34",
      puLxy: _0x3219a0(0x247) + _0x3219a0(0x323),
      zOMQj: function (_0x5399ec) {
        return _0x5399ec();
      },
      HkGnW: _0x3219a0(0x1c8) + _0x3219a0(0x2fa) + "p3",
      zbpKU: function (_0x5bd31b, _0x2b595a) {
        return _0x5bd31b == _0x2b595a;
      },
      Olqpj: _0x3219a0(0x327),
      igTQv: function (_0x3813c1, _0x5cad5f) {
        return _0x3813c1 + _0x5cad5f;
      },
      ygtmK: function (_0x3f0f89, _0x10b6dc) {
        return _0x3f0f89 + _0x10b6dc;
      },
      IdKJL: function (_0x3e22c6, _0x1b6ae1) {
        return _0x3e22c6 + _0x1b6ae1;
      },
      XbILT: function (_0x2fe126, _0xffbc6e) {
        return _0x2fe126 + _0xffbc6e;
      },
      QNYYG: function (_0x2da538, _0x41287a) {
        return _0x2da538 + _0x41287a;
      },
      CbOSy: function (_0x2a963d, _0xbea412) {
        return _0x2a963d + _0xbea412;
      },
      vmbdF: function (_0x2be5cf, _0x138abc) {
        return _0x2be5cf + _0x138abc;
      },
      VOOcf: function (_0x552036, _0xc9f5b1) {
        return _0x552036 + _0xc9f5b1;
      },
      lIlhe: _0x3219a0(0x213) + _0x3219a0(0x2fe) + "-\x20",
      KgIeO: _0x3219a0(0x1cd),
      osNVH: _0x3219a0(0x1ff),
      AbydH: function (_0xf49eb4, _0x434dd3) {
        return _0xf49eb4(_0x434dd3);
      },
    };
  (document[_0x3219a0(0x270) + _0x3219a0(0x295)](_0x43eacf[_0x3219a0(0x1dc)])[
    _0x3219a0(0x209)
  ][_0x3219a0(0x224)] = _0x43eacf[_0x3219a0(0x289)]),
    viewer[_0x3219a0(0x315) + _0x3219a0(0x2af)](
      new THREE[_0x3219a0(0x2ea)](
        -(0xac5 + 0x1 * 0x64 + -0xb24 * 0x1),
        -(-0xf0b + 0x150b + -0x8 * 0x43),
        -(-0x1aa2 * 0x1 + 0x12 * -0x168 + 0x477a)
      ),
      0xa * 0x57 + 0xb * 0x308 + -0x2392
    ),
    _0x43eacf[_0x3219a0(0x2bc)]($, document)[_0x3219a0(0x31f)](function () {
      const _0x36939b = _0x3219a0,
        _0x4559da = {
          REcjt: _0x43eacf[_0x36939b(0x1d6)],
          aQPjX: function (_0x1b04b2, _0x345d07) {
            const _0x598a9b = _0x36939b;
            return _0x43eacf[_0x598a9b(0x223)](_0x1b04b2, _0x345d07);
          },
          Ezlex: _0x43eacf[_0x36939b(0x243)],
          kzpYU: function (_0x28c5c6, _0x3e6672) {
            const _0x5dc6dc = _0x36939b;
            return _0x43eacf[_0x5dc6dc(0x228)](_0x28c5c6, _0x3e6672);
          },
          DRikX: function (_0x3d3e15, _0x34ffd1) {
            const _0x2424c8 = _0x36939b;
            return _0x43eacf[_0x2424c8(0x2f5)](_0x3d3e15, _0x34ffd1);
          },
          unEfQ: _0x43eacf[_0x36939b(0x29a)],
          zuSpA: _0x43eacf[_0x36939b(0x24d)],
          LsKuQ: _0x43eacf[_0x36939b(0x291)],
          udpgJ: function (_0x26a073, _0xf00280, _0x3c074e) {
            const _0x3bc33a = _0x36939b;
            return _0x43eacf[_0x3bc33a(0x232)](_0x26a073, _0xf00280, _0x3c074e);
          },
          ulXLX: _0x43eacf[_0x36939b(0x311)],
          zgVqe: _0x43eacf[_0x36939b(0x1f4)],
          loMcv: _0x43eacf[_0x36939b(0x2bf)],
          OZdvt: _0x43eacf[_0x36939b(0x1e8)],
          rRViY: _0x43eacf[_0x36939b(0x211)],
          VKbBC: _0x43eacf[_0x36939b(0x2f9)],
          bPTbn: _0x43eacf[_0x36939b(0x2a0)],
          wRrKe: _0x43eacf[_0x36939b(0x2c5)],
          ugIyq: _0x43eacf[_0x36939b(0x24a)],
          KXXeC: _0x43eacf[_0x36939b(0x1c2)],
          XvoMZ: _0x43eacf[_0x36939b(0x2ae)],
          YKYXx: _0x43eacf[_0x36939b(0x30f)],
          xECrm: function (_0x364efe) {
            const _0x32590f = _0x36939b;
            return _0x43eacf[_0x32590f(0x2df)](_0x364efe);
          },
          VusvZ: _0x43eacf[_0x36939b(0x1e0)],
          WhZBW: _0x43eacf[_0x36939b(0x2d3)],
          GcYIF: _0x43eacf[_0x36939b(0x281)],
          JfEnO: function (_0x8d657d, _0x291fdb, _0x5ca6d8) {
            const _0x15f07d = _0x36939b;
            return _0x43eacf[_0x15f07d(0x232)](_0x8d657d, _0x291fdb, _0x5ca6d8);
          },
        };
      var _0x227230, _0x437b26;
      async function _0x577aad() {
        const _0x341143 = _0x36939b;
        action_talk[_0x341143(0x29d)]();
        let _0x13c631 = await navigator[_0x341143(0x226) + "es"][
            _0x341143(0x2c0) + "ia"
          ]({ audio: { sampleRate: 0x3e80, channelCount: 0x1 } }),
          _0x266097 = new AudioContext({ sampleRate: 0x3e80 }),
          _0x1d188f =
            _0x266097[_0x341143(0x330) + _0x341143(0x23d) + _0x341143(0x1bb)](
              _0x13c631
            );
        (recorder = new Recorder(_0x1d188f, { numChannels: 0x1 }))[
          _0x341143(0x241)
        ](),
          console[_0x341143(0x260)]("");
      }
      async function _0x5cf21d() {
        const _0x371ad6 = _0x36939b,
          _0x1d8826 = {
            wrmMI: function (_0x524b8f, _0x204f94) {
              const _0x56846d = _0x5f0a;
              return _0x43eacf[_0x56846d(0x27a)](_0x524b8f, _0x204f94);
            },
            VEGGX: _0x43eacf[_0x371ad6(0x244)],
            hicaz: _0x43eacf[_0x371ad6(0x1d7)],
            ZzWGU: _0x43eacf[_0x371ad6(0x1df)],
            yBMvc: function (_0x233a95, _0x1b52ed) {
              const _0x2a4f99 = _0x371ad6;
              return _0x43eacf[_0x2a4f99(0x1ca)](_0x233a95, _0x1b52ed);
            },
            iUqsJ: function (_0x4ef930, _0x371613) {
              const _0x3f7e99 = _0x371ad6;
              return _0x43eacf[_0x3f7e99(0x25b)](_0x4ef930, _0x371613);
            },
            nCbYs: _0x43eacf[_0x371ad6(0x26f)],
            HqrZH: _0x43eacf[_0x371ad6(0x218)],
          };
        recorder &&
          _0x43eacf[_0x371ad6(0x32a)](
            _0x43eacf[_0x371ad6(0x1be)],
            recorder[_0x371ad6(0x300)]
          ) &&
          (recorder[_0x371ad6(0x29d)](),
          recorder[_0x371ad6(0x2ca)](async (_0x25e210) => {
            const _0x362438 = _0x371ad6,
              _0x2e2094 = {
                TvcKj: _0x4559da[_0x362438(0x2a9)],
                PVeJV: function (_0x2460fc, _0x4930fd) {
                  const _0x570b35 = _0x362438;
                  return _0x4559da[_0x570b35(0x2f8)](_0x2460fc, _0x4930fd);
                },
                FNQaB: _0x4559da[_0x362438(0x26c)],
                YKIis: function (_0x36a43b, _0x39995a) {
                  const _0x189d4d = _0x362438;
                  return _0x4559da[_0x189d4d(0x230)](_0x36a43b, _0x39995a);
                },
                ALzPq: function (_0x653152, _0x573d0f) {
                  const _0x32c007 = _0x362438;
                  return _0x4559da[_0x32c007(0x314)](_0x653152, _0x573d0f);
                },
                HmcPb: _0x4559da[_0x362438(0x293)],
                QnajA: _0x4559da[_0x362438(0x235)],
                IQhef: _0x4559da[_0x362438(0x331)],
                qKKoP: function (_0x21c523, _0x182690, _0x1e0f91) {
                  const _0x13b7d7 = _0x362438;
                  return _0x4559da[_0x13b7d7(0x2fb)](
                    _0x21c523,
                    _0x182690,
                    _0x1e0f91
                  );
                },
                TYFCM: _0x4559da[_0x362438(0x20d)],
                ZZnNc: _0x4559da[_0x362438(0x2e1)],
                avMjy: _0x4559da[_0x362438(0x22b)],
                puhWV: function (_0x351221, _0x4f16d7) {
                  const _0x4e3843 = _0x362438;
                  return _0x4559da[_0x4e3843(0x314)](_0x351221, _0x4f16d7);
                },
                UFtnp: _0x4559da[_0x362438(0x1ec)],
              };
            let _0x568669 = new XMLHttpRequest();
            _0x568669[_0x362438(0x2c3)](
              _0x4559da[_0x362438(0x2e1)],
              _0x4559da[_0x362438(0x220)],
              !(0xd16 + 0x12b5 + -0x1fcb)
            ),
              (_0x568669[_0x362438(0x2ed) + _0x362438(0x25e)] = function () {
                const _0x3f7217 = _0x362438,
                  _0x22040c = {
                    TuzVN: function (_0x1b8bd2, _0x99df2a) {
                      const _0xa532a5 = _0x5f0a;
                      return _0x1d8826[_0xa532a5(0x210)](_0x1b8bd2, _0x99df2a);
                    },
                    GdwOC: _0x1d8826[_0x3f7217(0x22e)],
                    bcGez: _0x1d8826[_0x3f7217(0x258)],
                    TXGHC: _0x1d8826[_0x3f7217(0x28c)],
                  };
                if (
                  _0x1d8826[_0x3f7217(0x1c6)](
                    _0x568669[_0x3f7217(0x1b3)],
                    XMLHttpRequest[_0x3f7217(0x302)]
                  )
                ) {
                  if (
                    _0x1d8826[_0x3f7217(0x219)](
                      0x126d + -0x7ea + -0x1 * 0x9bb,
                      _0x568669[_0x3f7217(0x22c)]
                    )
                  ) {
                    let _0x388724 = _0x568669[_0x3f7217(0x2da) + "xt"];
                    console[_0x3f7217(0x260)](
                      _0x1d8826[_0x3f7217(0x297)],
                      _0x388724
                    ),
                      (function _0xd28f39(_0xab17f8) {
                        const _0x517ae2 = _0x3f7217,
                          _0x36827b = { iJubt: _0x2e2094[_0x517ae2(0x1f5)] };
                        let _0x30471d = JSON[_0x517ae2(0x20e)](_0xab17f8);
                        if (
                          _0x2e2094[_0x517ae2(0x261)](
                            _0x2e2094[_0x517ae2(0x21d)],
                            _0x30471d[_0x517ae2(0x22c)]
                          ) &&
                          _0x2e2094[_0x517ae2(0x238)](
                            _0x30471d[_0x517ae2(0x246) + "es"][
                              _0x517ae2(0x205)
                            ],
                            0x1a * -0x34 + 0x1951 + 0x1 * -0x1409
                          )
                        ) {
                          let _0x30dffe =
                              _0x30471d[_0x517ae2(0x246) + "es"][
                                -0x120 * -0x3 + 0x12eb * 0x1 + -0x1 * 0x164b
                              ][_0x517ae2(0x24e)],
                            _0x15d475 = (_0x439b49) => {
                              const _0x59ef83 = _0x517ae2;
                              let _0x194304 = CryptoJS[_0x59ef83(0x28e)][
                                _0x59ef83(0x2c9)
                              ](_0x439b49, _0x36827b[_0x59ef83(0x2b0)]);
                              return _0x194304[_0x59ef83(0x2b4)]();
                            };
                          function _0x2bc0fa(_0x3cc4b1) {
                            const _0x23fc43 = _0x517ae2;
                            return _0x22040c[_0x23fc43(0x22d)](
                              _0x15d475,
                              _0x3cc4b1
                            );
                          }
                          let _0x53840d = _0x2e2094[_0x517ae2(0x1cf)](
                              _0x15d475,
                              _0x2e2094[_0x517ae2(0x288)]
                            ),
                            _0x2ec75c = _0x2e2094[_0x517ae2(0x1cf)](
                              _0x15d475,
                              _0x2e2094[_0x517ae2(0x1d0)]
                            ),
                            _0x477ab2 =
                              ((_0x2a44a1 = _0x30dffe),
                              _0x2e2094[_0x517ae2(0x1cf)](
                                _0x15d475,
                                _0x2a44a1
                              ));
                          var _0x2a44a1,
                            _0x1ee8f8 = {
                              applicant_id: _0x53840d,
                              user_pin: _0x2ec75c,
                              response: _0x477ab2,
                            };
                          console[_0x517ae2(0x260)](
                            _0x2e2094[_0x517ae2(0x28b)],
                            _0x1ee8f8
                          ),
                            _0x2e2094[_0x517ae2(0x2cc)](
                              fetch,
                              _0x2e2094[_0x517ae2(0x1c9)],
                              {
                                method: _0x2e2094[_0x517ae2(0x2b5)],
                                headers: {
                                  "Content-Type": _0x2e2094[_0x517ae2(0x2dd)],
                                },
                                body: JSON[_0x517ae2(0x201)](_0x1ee8f8),
                              }
                            )
                              [_0x517ae2(0x2d5)]((_0x85bcd) => {
                                const _0x7db02d = _0x517ae2;
                                _0x85bcd["ok"]
                                  ? console[_0x7db02d(0x260)](
                                      _0x22040c[_0x7db02d(0x2db)]
                                    )
                                  : console[_0x7db02d(0x272)](
                                      _0x22040c[_0x7db02d(0x207)]
                                    );
                              })
                              [_0x517ae2(0x1da)]((_0x9471dd) => {
                                const _0x393720 = _0x517ae2;
                                console[_0x393720(0x272)](
                                  _0x22040c[_0x393720(0x24f)],
                                  _0x9471dd
                                );
                              });
                        } else
                          _0x2e2094[_0x517ae2(0x274)](
                            alert,
                            _0x2e2094[_0x517ae2(0x21b)]
                          );
                      })(_0x388724);
                  } else
                    console[_0x3f7217(0x272)](
                      _0x1d8826[_0x3f7217(0x2aa)],
                      _0x568669[_0x3f7217(0x2a7)]
                    );
                }
              });
            let _0xfcd1ed = new FormData();
            _0xfcd1ed[_0x362438(0x30b)](_0x4559da[_0x362438(0x1ee)], _0x25e210),
              _0xfcd1ed[_0x362438(0x30b)](
                _0x4559da[_0x362438(0x282)],
                JSON[_0x362438(0x201)]({
                  ID: _0x4559da[_0x362438(0x2b1)],
                  modelID: "5",
                  mode: _0x4559da[_0x362438(0x1e7)],
                  command: _0x4559da[_0x362438(0x32e)],
                  userID: _0x4559da[_0x362438(0x2d7)],
                })
              ),
              _0x568669[_0x362438(0x2a5)](_0xfcd1ed);
          }));
      }
      (_0x437b26 = _0x43eacf[_0x36939b(0x2cf)](
        _0x43eacf[_0x36939b(0x214)],
        clanguage
      )
        ? "hi"
        : "en"),
        action_talk[_0x36939b(0x273)](),
        (_0x227230 = [
          _0x43eacf[_0x36939b(0x32b)](
            _0x43eacf[_0x36939b(0x317)](
              data[0x1fbc + 0x1 * 0x2668 + -0x4624],
              "\x20"
            ),
            cname
          ),
          _0x43eacf[_0x36939b(0x277)](
            _0x43eacf[_0x36939b(0x27c)](
              data[0x222d * 0x1 + -0x1fae + 0xb * -0x3a],
              "\x20"
            ),
            accNum
          ),
          _0x43eacf[_0x36939b(0x27c)](
            _0x43eacf[_0x36939b(0x32b)](
              data[-0x5c * 0x67 + -0xa72 * 0x1 + 0x4 * 0xbde],
              "\x20"
            ),
            loanamout
          ),
          _0x43eacf[_0x36939b(0x240)](
            _0x43eacf[_0x36939b(0x32b)](
              data[0x1cd * -0x10 + -0xf2f + 0x2c02],
              "\x20"
            ),
            pendingamount
          ),
          _0x43eacf[_0x36939b(0x262)](
            _0x43eacf[_0x36939b(0x2c8)](
              data[0x1 * 0xea9 + 0xad4 + -0x1979],
              "\x20"
            ),
            EMIamount
          ),
          _0x43eacf[_0x36939b(0x277)](
            _0x43eacf[_0x36939b(0x2c8)](
              data[0xdbd + 0x1 * -0x557 + -0x861],
              "\x20"
            ),
            duedate
          ),
          _0x43eacf[_0x36939b(0x27c)](
            _0x43eacf[_0x36939b(0x1d9)](
              data[-0x250f * 0x1 + -0x1 * -0xe29 + 0x1 * 0x16ec],
              "\x20"
            ),
            pemi
          ),
          data[-0x60a * 0x3 + -0x8a9 + 0x49 * 0x5e],
        ]);
      let _0x466a08 = _0x227230[_0x36939b(0x2c7)](".\x20");
      console[_0x36939b(0x260)](_0x43eacf[_0x36939b(0x22a)], _0x466a08),
        (function _0x479c7a(_0x67c9d2, _0x317d06) {
          const _0x680f0d = _0x36939b;
          let _0x283835 = document[_0x680f0d(0x270) + _0x680f0d(0x295)](
              _0x43eacf[_0x680f0d(0x1e0)]
            ),
            _0x4e08da = _0x43eacf[_0x680f0d(0x27a)](
              encodeURIComponent,
              _0x67c9d2
            );
          console[_0x680f0d(0x260)](_0x4e08da);
          let _0x5672a0 =
            _0x680f0d(0x2e4) +
            _0x680f0d(0x1d2) +
            _0x680f0d(0x259) +
            _0x680f0d(0x1ba) +
            _0x4e08da +
            (_0x680f0d(0x313) +
              _0x680f0d(0x24b) +
              _0x680f0d(0x23f) +
              _0x680f0d(0x2b7) +
              _0x680f0d(0x1d8) +
              _0x680f0d(0x284) +
              _0x680f0d(0x25c) +
              _0x680f0d(0x202) +
              _0x680f0d(0x21f) +
              _0x680f0d(0x245) +
              _0x680f0d(0x221) +
              "2");
          (_0x283835[_0x680f0d(0x31d)] = _0x5672a0),
            _0x283835[_0x680f0d(0x273)]()[_0x680f0d(0x1da)](function (
              _0x69142c
            ) {
              const _0x47ef58 = _0x680f0d;
              console[_0x47ef58(0x272)](_0x4559da[_0x47ef58(0x233)], _0x69142c);
            }),
            _0x283835[_0x680f0d(0x29e) + _0x680f0d(0x1e5)](
              _0x43eacf[_0x680f0d(0x281)],
              function () {
                const _0x234db7 = _0x680f0d;
                isCallbackCalled || _0x4559da[_0x234db7(0x296)](_0x317d06);
              }
            );
        })(_0x466a08, async function () {
          const _0x3f79ea = _0x36939b;
          (isCallbackCalled = !(0xc1d + -0x24c5 + 0x18a8)),
            await _0x4559da[_0x3f79ea(0x296)](_0x577aad),
            _0x4559da[_0x3f79ea(0x227)](
              setTimeout,
              () => {
                const _0x54861c = _0x3f79ea,
                  _0x2d3c1e = {
                    QgZzU: _0x4559da[_0x54861c(0x233)],
                    ylvVT: _0x4559da[_0x54861c(0x303)],
                    tNTnI: _0x4559da[_0x54861c(0x307)],
                    KlAfb: _0x4559da[_0x54861c(0x1e2)],
                  };
                _0x4559da[_0x54861c(0x296)](_0x5cf21d),
                  (function _0x23bb54() {
                    const _0x513836 = _0x54861c;
                    let _0x355d8d = document[
                      _0x513836(0x270) + _0x513836(0x295)
                    ](_0x2d3c1e[_0x513836(0x263)]);
                    action_talk[_0x513836(0x273)](),
                      (_0x355d8d[_0x513836(0x31d)] =
                        _0x2d3c1e[_0x513836(0x29f)]),
                      _0x355d8d[_0x513836(0x273)]()[_0x513836(0x1da)](function (
                        _0x17b828
                      ) {
                        const _0x829553 = _0x513836;
                        console[_0x829553(0x272)](
                          _0x2d3c1e[_0x829553(0x2be)],
                          _0x17b828
                        );
                      }),
                      _0x355d8d[_0x513836(0x29e) + _0x513836(0x1e5)](
                        _0x2d3c1e[_0x513836(0x1b4)],
                        function () {
                          const _0x30ec09 = _0x513836;
                          action_talk[_0x30ec09(0x29d)]();
                        }
                      );
                  })(function () {});
              },
              -0x2d4 * -0xa + 0x198d + -0x224d
            );
        });
    });
}
(panorama = new PANOLENS[_0x331101(0x298) + "ma"]([
  _0x331101(0x2f0) + _0x331101(0x31a) + _0x331101(0x2e0),
  _0x331101(0x2f0) + _0x331101(0x1e1) + _0x331101(0x2e0),
  _0x331101(0x2f0) + _0x331101(0x2b9) + _0x331101(0x2e0),
  _0x331101(0x2f0) + _0x331101(0x312) + _0x331101(0x2e0),
  _0x331101(0x2f0) + _0x331101(0x234) + _0x331101(0x2e0),
  _0x331101(0x2f0) + _0x331101(0x279) + _0x331101(0x2e0),
])),
  (clock = new THREE[_0x331101(0x1d5)]());
var container = document[_0x331101(0x2c2) + _0x331101(0x1d1)](_0x331101(0x2a6));
function _0x29c9() {
  const _0x362a45 = [
    "s.indiantt",
    "Directiona",
    "transcribe",
    "Clock",
    "DTQGM",
    "lEkxy",
    "34i8hsders",
    "VOOcf",
    "catch",
    "DsUry",
    "KgIeO",
    "Hemisphere",
    "children",
    "DJOtP",
    "DSMCc",
    "eption/nx.",
    "GcYIF",
    "rror:",
    "AiDKU",
    "stener",
    "cript\x20data",
    "ugIyq",
    "NPpRv",
    "CONTROLS",
    "ta/respons",
    "Utf8",
    "OZdvt",
    "136607iDwtSq",
    "VKbBC",
    "45TWcqqy",
    "edress.glb",
    "TSZcW",
    "XcfNN",
    "json",
    "YVOkJ",
    "TvcKj",
    "clipAction",
    "dBYAQ",
    "vtXPj",
    "language.j",
    "VfpzF",
    "\x20empty.",
    "CARDBOARD",
    "ailable\x20or",
    "send\x20trans",
    "none",
    "set",
    "stringify",
    "c=hcurrenc",
    "AnimationC",
    "button1",
    "length",
    "201144ssKnZe",
    "bcGez",
    "URcqm",
    "style",
    "button2",
    "5jSuNoz",
    "EMIamount",
    "ulXLX",
    "parse",
    "ccurred:",
    "wrmMI",
    "RFvNf",
    "search",
    "Text\x20gener",
    "Olqpj",
    "xrRKM",
    "DMcOX",
    "slow",
    "AIkMT",
    "iUqsJ",
    "12345",
    "UFtnp",
    "LaXIZ",
    "FNQaB",
    "se2/applic",
    "y&lang=en&",
    "rRViY",
    "=8000&ver=",
    "add",
    "PNEyz",
    "display",
    "SAsqz",
    "mediaDevic",
    "JfEnO",
    "gmkuG",
    "pemi",
    "lIlhe",
    "loMcv",
    "status",
    "TuzVN",
    "VEGGX",
    "231Uzifxa",
    "kzpYU",
    "nybeq",
    "BtWtu",
    "YKYXx",
    "eption/pz.",
    "zuSpA",
    "models/blu",
    "setPanoram",
    "YKIis",
    "loanamout",
    "98150qrfiBV",
    "dev",
    "get",
    "aStreamSou",
    ".loader-wr",
    "T332sSw23d",
    "QNYYG",
    "record",
    "Data\x20gener",
    "SYiBT",
    "eOMSo",
    "samplerate",
    "alternativ",
    "Error\x20play",
    "An\x20error\x20o",
    "dow",
    "AKhBH",
    "rt45rtsd45",
    "ent",
    "aBaxo",
    "transcript",
    "TXGHC",
    "setCameraF",
    "Bhyzq",
    "Viewer",
    "hAYJQ",
    "fadeOut",
    "Transcript",
    "test-1212",
    "animations",
    "hicaz",
    "s.in/tts?t",
    "autoplay",
    "pqowD",
    "lay&numeri",
    "kwMVa",
    "techange",
    "decrypt",
    "log",
    "PVeJV",
    "CbOSy",
    "ylvVT",
    "VxNHn",
    "qfVGo",
    "data",
    "wxjDK",
    "123456",
    "audio_base",
    "XZvfZ",
    "ion\x20not\x20av",
    "Ezlex",
    "audioPlaye",
    "lLight",
    "RvymI",
    "getElement",
    "New\x20String",
    "error",
    "play",
    "puhWV",
    "36.144.236",
    ".mp3",
    "IdKJL",
    "talk",
    "eption/nz.",
    "nJUCn",
    "enableCont",
    "XbILT",
    "lip",
    "language",
    "uaIlI",
    "LTKTj",
    "tZDds",
    "bPTbn",
    "ech.ai/api",
    "1&action=p",
    "eMEBH",
    "Failed\x20to\x20",
    "AnimationM",
    "HmcPb",
    "osNVH",
    "124092uacNkY",
    "IQhef",
    "ZzWGU",
    "console",
    "AES",
    "GhdSg",
    "\x20successfu",
    "lMfGd",
    "PointLight",
    "unEfQ",
    "\x20----\x20",
    "ById",
    "xECrm",
    "nCbYs",
    "CubePanora",
    "680588WhLeXe",
    "YDzbI",
    "click",
    "skMBg",
    "stop",
    "addEventLi",
    "tNTnI",
    "DMzBO",
    "audio/bank",
    "audio",
    "/asr/v1",
    "sMCLP",
    "send",
    "#container",
    "statusText",
    "voqTSd32df",
    "REcjt",
    "HqrZH",
    ":8080/borr",
    "enable",
    "zoUDI",
    "HAudP",
    "olCenter",
    "iJubt",
    "wRrKe",
    "load",
    "PeEul",
    "toString",
    "ZZnNc",
    "rol",
    "erAsw2f5sd",
    "EpQDy",
    "eption/py.",
    "ed\x20data\x20fo",
    "XaAkl",
    "AbydH",
    "unt",
    "QgZzU",
    "tYcOC",
    "getUserMed",
    "POST",
    "querySelec",
    "open",
    "localAudio",
    "VpnOq",
    "traverse",
    "join",
    "vmbdF",
    "encrypt",
    "exportWAV",
    "createElem",
    "qKKoP",
    "gUMHA",
    "QWvst",
    "zbpKU",
    "inactive",
    "update",
    "accnum",
    "HkGnW",
    "No\x20encrypt",
    "then",
    "https://as",
    "XvoMZ",
    "UPIN12345",
    "DEVICEORIE",
    "responseTe",
    "GdwOC",
    "getDelta",
    "avMjy",
    "isMesh",
    "zOMQj",
    "jpg",
    "zgVqe",
    "158619bGBMoF",
    "apper",
    "https://tt",
    "ant/MetaDa",
    "518oEWptn",
    "duedate",
    "bWfqW",
    "r-api.vspe",
    "Vector3",
    "scene",
    "n/json",
    "onreadysta",
    "body",
    "location",
    "images/rec",
    "u\x20got\x20an\x20e",
    "localStrea",
    "requestFul",
    "AmbientLig",
    "tmTyH",
    "castShadow",
    "MODES",
    "aQPjX",
    "ahTjv",
    "ishaudio.m",
    "udpgJ",
    "xQzOc",
    "enc",
    "ated\x20-----",
    "idle",
    "state",
    "position",
    "DONE",
    "VusvZ",
    "paVFF",
    "Response:",
    "enableEffe",
    "WhZBW",
    "success",
    "visible",
    "name",
    "append",
    "11364RrkGfq",
    "ended",
    "ixer",
    "puLxy",
    "receiveSha",
    "fkGsF",
    "eption/ny.",
    "&api_key=G",
    "DRikX",
    "tweenContr",
    "und\x20in\x20URL",
    "ygtmK",
    "ated\x20--\x20",
    "vTliH",
    "eption/px.",
    "muzhr",
    "GLTFLoader",
    "src",
    "srcObject",
    "ready",
    "CpZgw",
    "clanguage",
    "owerAppPha",
    "ing\x20audio:",
    "son",
    "rjUuM",
    "URL\x20-----\x20",
    "hindi",
    "pendingamo",
    "clone",
    "SkgXu",
    "igTQv",
    "findByName",
    "http://4.2",
    "KXXeC",
    "Se343Dd3SD",
    "createMedi",
    "LsKuQ",
    "\x20data\x20sent",
    "readyState",
    "KlAfb",
    "eunmQ",
    "iNsxh",
    "NTATION",
    "applicatio",
    "lscreen",
    "ext=",
    "rce",
    "lly",
    "Request\x20fa",
    "nYpjK",
    "iled:",
    "Decrypted\x20",
    "Light",
    "HYJZj",
    "replaceAll",
    "IRUHX",
    "metadata",
    "yBMvc",
    "rotation",
    "audio/engl",
    "TYFCM",
    "bSQot",
    "1234567890",
    "scale",
    "modal",
    "CZdjG",
    "ALzPq",
    "QnajA",
    "tor",
  ];
  _0x29c9 = function () {
    return _0x362a45;
  };
  return _0x29c9();
}
(viewer = new PANOLENS[_0x331101(0x252)]({
  output: _0x331101(0x28d),
  container: container,
}))[_0x331101(0x250) + "ov"](0x490 * -0x6 + 0x23bb + -0x815),
  viewer[_0x331101(0x222)](panorama),
  viewer[_0x331101(0x237) + "a"](panorama),
  (hemiLight = new THREE[_0x331101(0x1dd) + _0x331101(0x1c1)](
    0x1 * -0x1310ba1 + 0xa36441 + 0x13f895f,
    -0x1 * -0x1070215 + 0xe2d7d2 + -0x1305fc7
  ));
var directionallight = new THREE[_0x331101(0x1d3) + _0x331101(0x26e)](
    -0x2d0e * 0x313 + 0xeff0d2 * -0x1 + 0x27a72db,
    -0xf1 * 0xd + -0xb09 + 0x7c2 * 0x3 + 0.5
  ),
  ambientlight = new THREE[_0x331101(0x2f4) + "ht"](
    -0x115be5 * -0x1 + 0x1f5c17 + 0xf8844,
    -0x4 * 0x37f + 0x2212 + -0x1416 + 0.56
  );
panorama[_0x331101(0x222)](ambientlight),
  panorama[_0x331101(0x222)](directionallight),
  directionallight[_0x331101(0x301)][_0x331101(0x200)](
    0xb02 * -0x3 + -0x13a * -0x7 + 0x3 * 0x827,
    0x3b2 + 0x1b * 0x11b + -0xb2b * 0x3,
    -0x193e + 0x1fc4 + -0x67f * 0x1 + 0.5
  ),
  (pointlight = new THREE[_0x331101(0x292)](
    -0x17eeda0 + -0x2d31 * 0x5f2 + 0x38b719c,
    -0x3 * -0x6fb + -0x2277 + -0x241 * -0x6 + 0.8
  ))[_0x331101(0x301)][_0x331101(0x200)](
    -0x691 + 0x1 * 0x535 + 0x15c,
    0xac * 0x23 + -0x1 * -0x4 + -0x1f * 0xc2,
    0xfcd * -0x1 + 0x1909 + -0x93c
  ),
  (pointlight[_0x331101(0x2f6)] = !(0x6b1 + -0x1 * 0x93b + 0x28a)),
  panorama[_0x331101(0x222)](pointlight),
  (pointlight = pointlight[_0x331101(0x329)]())[_0x331101(0x301)][
    _0x331101(0x200)
  ](
    0x76 * 0x50 + -0x1a87 * -0x1 + -0x3f26,
    0xfae + 0x1 * 0x4a3 + 0x2e7 * -0x7,
    -(0x167 * 0xb + 0xa85 * 0x2 + -0x244a)
  ),
  (pointlight[_0x331101(0x2f6)] = !(0x15 * 0x122 + -0x1 * 0x1a2a + 0x260)),
  panorama[_0x331101(0x222)](pointlight),
  hemiLight[_0x331101(0x301)][_0x331101(0x200)](
    -0x10ff + -0x2 * -0x137b + -0x15f0,
    -0x47 * -0x47 + -0x31 * 0x95 + 0x8de,
    -(0x9eb + -0x202b + 0x1647)
  ),
  panorama[_0x331101(0x222)](hemiLight);
var loader = new THREE[_0x331101(0x31c)]();
function animate() {
  const _0x2f35a2 = _0x331101,
    _0x19ce9c = {
      muzhr: function (_0x18bcd4, _0x2b46a5) {
        return _0x18bcd4(_0x2b46a5);
      },
    };
  var _0x18bdb2 = clock[_0x2f35a2(0x2dc)]();
  mixer && mixer[_0x2f35a2(0x2d1)](_0x18bdb2),
    mixer1 && mixer1[_0x2f35a2(0x2d1)](_0x18bdb2),
    mixer2 && mixer2[_0x2f35a2(0x2d1)](_0x18bdb2),
    _0x19ce9c[_0x2f35a2(0x31b)](requestAnimationFrame, animate);
}
function getLocalStream() {
  const _0x28bc3d = _0x331101,
    _0x1eb78a = {
      xrRKM: function (_0x12107e, _0x14bfd0) {
        return _0x12107e + _0x14bfd0;
      },
      bWfqW: _0x28bc3d(0x2f1) + _0x28bc3d(0x1e3),
    };
  navigator[_0x28bc3d(0x226) + "es"]
    [_0x28bc3d(0x2c0) + "ia"]({
      video: !(0x30b + -0x14d + -0x1bd * 0x1),
      audio: !(0x26d8 + -0x14ea + 0x2 * -0x8f7),
    })
    [_0x28bc3d(0x2d5)]((_0xcd971f) => {
      const _0x3a4314 = _0x28bc3d;
      (window[_0x3a4314(0x2f2) + "m"] = _0xcd971f),
        (window[_0x3a4314(0x2c4)][_0x3a4314(0x31e)] = _0xcd971f),
        (window[_0x3a4314(0x2c4)][_0x3a4314(0x25a)] = !(
          -0x203f +
          0x1 * -0x222a +
          0x1623 * 0x3
        ));
    })
    [_0x28bc3d(0x1da)]((_0x4ebe67) => {
      const _0x81bf34 = _0x28bc3d;
      console[_0x81bf34(0x260)](
        _0x1eb78a[_0x81bf34(0x215)](_0x1eb78a[_0x81bf34(0x2e8)], _0x4ebe67)
      );
    });
}
loader[_0x331101(0x2b2)](
  _0x331101(0x236) + _0x331101(0x1f0),
  function (_0x3511bd) {
    const _0x2283bd = _0x331101,
      _0x249535 = {
        Bhyzq: _0x2283bd(0x2ff),
        CpZgw: _0x2283bd(0x278),
        dBYAQ: function (_0x13bec2) {
          return _0x13bec2();
        },
      };
    (gltfscene = _0x3511bd[_0x2283bd(0x2eb)]),
      (gltfglobal = _0x3511bd),
      (car =
        _0x3511bd[_0x2283bd(0x2eb)][_0x2283bd(0x1de)][
          0x7c1 + -0x2 * 0x44 + -0x2b * 0x2b
        ]),
      gltfscene[_0x2283bd(0x301)][_0x2283bd(0x200)](
        -(-0x3 * -0x832 + -0xe9b * -0x1 + 0xda * -0x2e),
        -(-0x2367 + 0x247b + -0x13 * 0xe),
        -(0x1cb5 * 0x1 + 0x14db + 0x18c3 * -0x2)
      ),
      (gltfscene[_0x2283bd(0x1c7)]["y"] =
        -0xc2 * -0x2a + 0x1 * 0x2249 + 0x1 * -0x421d + 0.2),
      gltfscene[_0x2283bd(0x1cc)][_0x2283bd(0x200)](
        -0x1 * -0x26c9 + 0x1 * -0x21f + -0x209 * 0x12,
        -0x1e05 + 0x1 * 0x22d3 + 0xd * -0x5e,
        0x2631 + 0x45d + -0x2a86
      ),
      car[_0x2283bd(0x2c6)]((_0x1849f7) => {
        const _0x4149e8 = _0x2283bd;
        _0x1849f7[_0x4149e8(0x2de)] &&
          ((_0x1849f7[_0x4149e8(0x2f6)] = !(
            -0x38 * -0x35 +
            -0xa5 * 0x15 +
            0x1f1
          )),
          (_0x1849f7[_0x4149e8(0x310) + _0x4149e8(0x249)] = !(
            0xb3 * 0x25 +
            0x1 * -0x14b1 +
            0x27 * -0x22
          )));
      });
    let _0x32805e = _0x3511bd[_0x2283bd(0x257)];
    mixer = new THREE[_0x2283bd(0x287) + _0x2283bd(0x30e)](
      _0x3511bd[_0x2283bd(0x2eb)]
    );
    let _0x201b00 = THREE[_0x2283bd(0x203) + _0x2283bd(0x27d)][
        _0x2283bd(0x32c)
      ](_0x32805e, _0x249535[_0x2283bd(0x251)]),
      _0x5ce99f = THREE[_0x2283bd(0x203) + _0x2283bd(0x27d)][_0x2283bd(0x32c)](
        _0x32805e,
        _0x249535[_0x2283bd(0x320)]
      );
    (action_idle = mixer[_0x2283bd(0x1f6)](_0x201b00)),
      (action_talk = mixer[_0x2283bd(0x1f6)](_0x5ce99f)),
      panorama[_0x2283bd(0x222)](gltfscene),
      (gltfscene[_0x2283bd(0x309)] = !(-0x1b22 + 0x1152 + 0x9d0)),
      action_idle[_0x2283bd(0x273)](),
      _0x249535[_0x2283bd(0x1f7)](animate);
  }
);
