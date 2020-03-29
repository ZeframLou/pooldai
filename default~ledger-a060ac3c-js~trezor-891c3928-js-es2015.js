(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ledger-a060ac3c-js~trezor-891c3928-js"],{

/***/ "./node_modules/bnc-onboard/dist/esm/hd-wallet-51f07955.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/hd-wallet-51f07955.js ***!
  \*****************************************************************/
/*! exports provided: c, g, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return generateAddresses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isValidPath; });
/* harmony import */ var web3_provider_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3-provider-engine */ "./node_modules/web3-provider-engine/index.js");
/* harmony import */ var web3_provider_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3-provider-engine/subproviders/rpc */ "./node_modules/web3-provider-engine/subproviders/rpc.js");
/* harmony import */ var web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3-provider-engine/subproviders/hooked-wallet */ "./node_modules/web3-provider-engine/subproviders/hooked-wallet.js");
/* harmony import */ var web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3-provider-engine/subproviders/subscriptions */ "./node_modules/web3-provider-engine/subproviders/subscriptions.js");
/* harmony import */ var web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3-provider-engine/subproviders/filters */ "./node_modules/web3-provider-engine/subproviders/filters.js");
/* harmony import */ var web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hdkey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hdkey */ "./node_modules/hdkey/lib/hdkey.js");
/* harmony import */ var hdkey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hdkey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_7__);









function createProvider(config) {
  var getAccounts = config.getAccounts,
      signTransaction = config.signTransaction,
      rpcUrl = config.rpcUrl;
  var idMgmt = new web3_provider_engine_subproviders_hooked_wallet__WEBPACK_IMPORTED_MODULE_2___default.a({
    getAccounts: getAccounts,
    signTransaction: signTransaction
  });
  var rpcSubProvider = new web3_provider_engine_subproviders_rpc__WEBPACK_IMPORTED_MODULE_1___default.a({
    rpcUrl: rpcUrl.includes('http') ? rpcUrl : "https://".concat(rpcUrl)
  });
  var provider = new web3_provider_engine__WEBPACK_IMPORTED_MODULE_0___default.a();
  provider.addProvider(new web3_provider_engine_subproviders_subscriptions__WEBPACK_IMPORTED_MODULE_3___default.a());
  provider.addProvider(new web3_provider_engine_subproviders_filters__WEBPACK_IMPORTED_MODULE_4___default.a());
  provider.addProvider(idMgmt);
  provider.addProvider(rpcSubProvider);
  provider.start();
  return provider;
}

var numberToGet = 5;

function generateAddresses(account, offset) {
  var publicKey = account.publicKey,
      chainCode = account.chainCode,
      path = account.path;
  var hdk = new hdkey__WEBPACK_IMPORTED_MODULE_5___default.a();
  hdk.publicKey = new buffer__WEBPACK_IMPORTED_MODULE_7___default.a.Buffer(publicKey, 'hex');
  hdk.chainCode = new buffer__WEBPACK_IMPORTED_MODULE_7___default.a.Buffer(chainCode, 'hex');
  var addresses = [];

  for (var i = offset; i < numberToGet + offset; i++) {
    var dkey = hdk.deriveChild(i);
    var address = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["publicToAddress"])(dkey.publicKey, true).toString('hex');
    addresses.push({
      dPath: "".concat(path, "/").concat(i),
      address: Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_6__["toChecksumAddress"])(address)
    });
  }

  return addresses;
}

function isValidPath(path) {
  var parts = path.split('/');

  if (parts[0] !== 'm') {
    return false;
  }

  if (parts[1] !== "44'") {
    return false;
  }

  if (parts[2] !== "60'" && parts[2] !== "1'") {
    return false;
  }

  if (parts[3] === undefined) {
    return true;
  }

  var accountFieldDigit = Number(parts[3][0]);

  if (isNaN(accountFieldDigit) || accountFieldDigit < 0 || parts[3][1] !== "'") {
    return false;
  }

  if (parts[4] === undefined) {
    return true;
  }

  var changeFieldDigit = Number(parts[4][0]);

  if (isNaN(changeFieldDigit) || changeFieldDigit < 0) {
    return false;
  }

  if (parts[5] === undefined) {
    return true;
  }

  var addressFieldDigit = Number(parts[5][0]);

  if (isNaN(addressFieldDigit) || addressFieldDigit < 0) {
    return false;
  }

  return true;
}



/***/ }),

/***/ "./node_modules/coinstring/lib/coinstring.js":
/*!***************************************************!*\
  !*** ./node_modules/coinstring/lib/coinstring.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var base58 = __webpack_require__(/*! bs58 */ "./node_modules/coinstring/node_modules/bs58/lib/bs58.js")
var createHash = __webpack_require__(/*! create-hash */ "./node_modules/create-hash/browser.js")

function encode (payload, version) {
  if (Array.isArray(payload) || payload instanceof Uint8Array) {
    payload = new Buffer(payload)
  }

  var buf
  if (version != null) {
    if (typeof version === 'number') {
      version = new Buffer([version])
    }
    buf = Buffer.concat([version, payload])
  } else {
    buf = payload
  }

  var checksum = sha256x2(buf).slice(0, 4)
  var result = Buffer.concat([buf, checksum])
  return base58.encode(result)
}

function decode (base58str, version) {
  var arr = base58.decode(base58str)
  var buf = new Buffer(arr)
  var versionLength

  if (version == null) {
    versionLength = 0
  } else {
    if (typeof version === 'number') version = new Buffer([version])

    versionLength = version.length
    var versionCompare = buf.slice(0, versionLength)
    if (versionCompare.toString('hex') !== version.toString('hex')) {
      throw new Error('Invalid version')
    }
  }

  var checksum = buf.slice(-4)
  var endPos = buf.length - 4
  var bytes = buf.slice(0, endPos)

  var newChecksum = sha256x2(bytes).slice(0, 4)
  if (checksum.toString('hex') !== newChecksum.toString('hex')) {
    throw new Error('Invalid checksum')
  }

  return bytes.slice(versionLength)
}

function isValid (base58str, version) {
  try {
    decode(base58str, version)
  } catch (e) {
    return false
  }

  return true
}

function createEncoder (version) {
  return function (payload) {
    return encode(payload, version)
  }
}

function createDecoder (version) {
  return function (base58str) {
    return decode(base58str, version)
  }
}

function createValidator (version) {
  return function (base58str) {
    return isValid(base58str, version)
  }
}

function sha256x2 (buffer) {
  var sha = createHash('sha256').update(buffer).digest()
  return createHash('sha256').update(sha).digest()
}

module.exports = {
  encode: encode,
  decode: decode,
  isValid: isValid,
  createEncoder: createEncoder,
  createDecoder: createDecoder,
  createValidator: createValidator
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/coinstring/node_modules/bs58/lib/bs58.js":
/*!***************************************************************!*\
  !*** ./node_modules/coinstring/node_modules/bs58/lib/bs58.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Base58 encoding/decoding
// Originally written by Mike Hearn for BitcoinJ
// Copyright (c) 2011 Google Inc
// Ported to JavaScript by Stefan Thomas
// Merged Buffer refactorings from base58-native by Stephen Pair
// Copyright (c) 2013 BitPay Inc

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
var ALPHABET_MAP = {}
for(var i = 0; i < ALPHABET.length; i++) {
  ALPHABET_MAP[ALPHABET.charAt(i)] = i
}
var BASE = 58

function encode(buffer) {
  if (buffer.length === 0) return ''

  var i, j, digits = [0]
  for (i = 0; i < buffer.length; i++) {
    for (j = 0; j < digits.length; j++) digits[j] <<= 8

    digits[0] += buffer[i]

    var carry = 0
    for (j = 0; j < digits.length; ++j) {
      digits[j] += carry

      carry = (digits[j] / BASE) | 0
      digits[j] %= BASE
    }

    while (carry) {
      digits.push(carry % BASE)

      carry = (carry / BASE) | 0
    }
  }

  // deal with leading zeros
  for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) digits.push(0)

  // convert digits to a string
  var stringOutput = ""
  for (var i = digits.length - 1; i >= 0; i--) {
    stringOutput = stringOutput + ALPHABET[digits[i]]
  }
  return stringOutput
}

function decode(string) {
  if (string.length === 0) return []

  var i, j, bytes = [0]
  for (i = 0; i < string.length; i++) {
    var c = string[i]
    if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character')

    for (j = 0; j < bytes.length; j++) bytes[j] *= BASE
    bytes[0] += ALPHABET_MAP[c]

    var carry = 0
    for (j = 0; j < bytes.length; ++j) {
      bytes[j] += carry

      carry = bytes[j] >> 8
      bytes[j] &= 0xff
    }

    while (carry) {
      bytes.push(carry & 0xff)

      carry >>= 8
    }
  }

  // deal with leading zeros
  for (i = 0; string[i] === '1' && i < string.length - 1; i++) bytes.push(0)

  return bytes.reverse()
}

module.exports = {
  encode: encode,
  decode: decode
}


/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/goerli.json":
/*!****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/goerli.json ***!
  \****************************************************************/
/*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"goerli\",\"chainId\":5,\"networkId\":5,\"comment\":\"Cross-client PoA test network\",\"url\":\"https://github.com/goerli/testnet\",\"genesis\":{\"hash\":\"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a\",\"timestamp\":\"0x5c51a607\",\"gasLimit\":10485760,\"difficulty\":1,\"nonce\":\"0x0000000000000000\",\"extraData\":\"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"stateRoot\":\"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"homestead\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"dao\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"byzantium\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"constantinople\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"petersburg\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"istanbul\",\"block\":1561651,\"consensus\":\"poa\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"51.141.78.53\",\"port\":30303,\"id\":\"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"13.93.54.137\",\"port\":30303,\"id\":\"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"94.237.54.114\",\"port\":30313,\"id\":\"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"52.64.155.147\",\"port\":30303,\"id\":\"c1f8b7c2ac4453271fa07d8e9ecf9a2e8285aa0bd0c07df0131f47153306b0736fd3db8924e7a9bf0bed6b1d8d4f87362a71b033dc7c64547728d953e43e59b2\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"213.186.16.82\",\"port\":30303,\"id\":\"f4a9c6ee28586009fb5a96c8af13a58ed6d8315a9eee4772212c1d4d9cebe5a8b8a78ea4434f318726317d04a3f531a1ef0420cf9752605a562cfe858c46e263\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"}]}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chains = {
    names: {
        '1': 'mainnet',
        '3': 'ropsten',
        '4': 'rinkeby',
        '42': 'kovan',
        '6284': 'goerli',
    },
    mainnet: __webpack_require__(/*! ./mainnet.json */ "./node_modules/ethereumjs-common/dist/chains/mainnet.json"),
    ropsten: __webpack_require__(/*! ./ropsten.json */ "./node_modules/ethereumjs-common/dist/chains/ropsten.json"),
    rinkeby: __webpack_require__(/*! ./rinkeby.json */ "./node_modules/ethereumjs-common/dist/chains/rinkeby.json"),
    kovan: __webpack_require__(/*! ./kovan.json */ "./node_modules/ethereumjs-common/dist/chains/kovan.json"),
    goerli: __webpack_require__(/*! ./goerli.json */ "./node_modules/ethereumjs-common/dist/chains/goerli.json"),
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/kovan.json":
/*!***************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/kovan.json ***!
  \***************************************************************/
/*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"kovan\",\"chainId\":42,\"networkId\":42,\"comment\":\"Parity PoA test network\",\"url\":\"https://kovan-testnet.github.io/website/\",\"genesis\":{\"hash\":\"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9\",\"timestamp\":null,\"gasLimit\":6000000,\"difficulty\":131072,\"nonce\":\"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"extraData\":\"0x\",\"stateRoot\":\"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"homestead\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"dao\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"byzantium\",\"block\":5067000,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"constantinople\",\"block\":9200000,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"petersburg\",\"block\":10255201,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"istanbul\",\"block\":14111141,\"consensus\":\"poa\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"40.71.221.215\",\"port\":30303,\"id\":\"56abaf065581a5985b8c5f4f88bd202526482761ba10be9bfdcd14846dd01f652ec33fde0f8c0fd1db19b59a4c04465681fcef50e11380ca88d25996191c52de\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.166.117.77\",\"port\":30303,\"id\":\"d07827483dc47b368eaf88454fb04b41b7452cf454e194e2bd4c14f98a3278fed5d819dbecd0d010407fc7688d941ee1e58d4f9c6354d3da3be92f55c17d7ce3\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.165.239.18\",\"port\":30303,\"id\":\"8fa162563a8e5a05eef3e1cd5abc5828c71344f7277bb788a395cce4a0e30baf2b34b92fe0b2dbbba2313ee40236bae2aab3c9811941b9f5a7e8e90aaa27ecba\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.243.47.56\",\"port\":30303,\"id\":\"7e2e7f00784f516939f94e22bdc6cf96153603ca2b5df1c7cc0f90a38e7a2f218ffb1c05b156835e8b49086d11fdd1b3e2965be16baa55204167aa9bf536a4d9\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"40.68.248.100\",\"port\":30303,\"id\":\"0518a3d35d4a7b3e8c433e7ffd2355d84a1304ceb5ef349787b556197f0c87fad09daed760635b97d52179d645d3e6d16a37d2cc0a9945c2ddf585684beb39ac\",\"location\":\"\",\"comment\":\"Parity Bootnode\"}]}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/mainnet.json":
/*!*****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/mainnet.json ***!
  \*****************************************************************/
/*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"mainnet\",\"chainId\":1,\"networkId\":1,\"comment\":\"The Ethereum main chain\",\"url\":\"https://ethstats.net/\",\"genesis\":{\"hash\":\"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3\",\"timestamp\":null,\"gasLimit\":5000,\"difficulty\":17179869184,\"nonce\":\"0x0000000000000042\",\"extraData\":\"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa\",\"stateRoot\":\"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"homestead\",\"block\":1150000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"dao\",\"block\":1920000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":2463000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":2675000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"byzantium\",\"block\":4370000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"constantinople\",\"block\":7280000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"petersburg\",\"block\":7280000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"istanbul\",\"block\":9069000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"muirGlacier\",\"block\":9200000,\"consensus\":\"pow\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"13.93.211.84\",\"port\":30303,\"id\":\"3f1d12044546b76342d59d4a05532c14b85aa669704bfe1f864fe079415aa2c02d743e03218e57a33fb94523adb54032871a6c51b2cc5514cb7c7e35b3ed0a99\",\"location\":\"US-WEST\",\"comment\":\"Go Bootnode\"},{\"ip\":\"191.235.84.50\",\"port\":30303,\"id\":\"78de8a0916848093c73790ead81d1928bec737d565119932b98c6b100d944b7a95e94f847f689fc723399d2e31129d182f7ef3863f2b4c820abbf3ab2722344d\",\"location\":\"BR\",\"comment\":\"Go Bootnode\"},{\"ip\":\"13.75.154.138\",\"port\":30303,\"id\":\"158f8aab45f6d19c6cbf4a089c2670541a8da11978a2f90dbf6a502a4a3bab80d288afdbeb7ec0ef6d92de563767f3b1ea9e8e334ca711e9f8e2df5a0385e8e6\",\"location\":\"AU\",\"comment\":\"Go Bootnode\"},{\"ip\":\"52.74.57.123\",\"port\":30303,\"id\":\"1118980bf48b0a3640bdba04e0fe78b1add18e1cd99bf22d53daac1fd9972ad650df52176e7c7d89d1114cfef2bc23a2959aa54998a46afcf7d91809f0855082\",\"location\":\"SG\",\"comment\":\"Go Bootnode\"}]}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/rinkeby.json":
/*!*****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/rinkeby.json ***!
  \*****************************************************************/
/*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"rinkeby\",\"chainId\":4,\"networkId\":4,\"comment\":\"PoA test network\",\"url\":\"https://www.rinkeby.io\",\"genesis\":{\"hash\":\"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177\",\"timestamp\":\"0x58ee40ba\",\"gasLimit\":4700000,\"difficulty\":1,\"nonce\":\"0x0000000000000000\",\"extraData\":\"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"stateRoot\":\"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"homestead\",\"block\":1,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"dao\",\"block\":null,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":2,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":3,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"byzantium\",\"block\":1035301,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"constantinople\",\"block\":3660663,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"petersburg\",\"block\":4321234,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"istanbul\",\"block\":5435345,\"consensus\":\"poa\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"52.169.42.101\",\"port\":30303,\"id\":\"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf\",\"location\":\"IE\",\"comment\":\"\"},{\"ip\":\"52.3.158.184\",\"port\":30303,\"id\":\"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8\",\"location\":\"\",\"comment\":\"INFURA\"}]}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/chains/ropsten.json":
/*!*****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/chains/ropsten.json ***!
  \*****************************************************************/
/*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ropsten\",\"chainId\":3,\"networkId\":3,\"comment\":\"PoW test network\",\"url\":\"https://github.com/ethereum/ropsten\",\"genesis\":{\"hash\":\"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d\",\"timestamp\":null,\"gasLimit\":16777216,\"difficulty\":1048576,\"nonce\":\"0x0000000000000042\",\"extraData\":\"0x3535353535353535353535353535353535353535353535353535353535353535\",\"stateRoot\":\"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"homestead\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"dao\",\"block\":null,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":10,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"byzantium\",\"block\":1700000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"constantinople\",\"block\":4230000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"petersburg\",\"block\":4939394,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"istanbul\",\"block\":6485846,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"muirGlacier\",\"block\":7117117,\"consensus\":\"pow\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"52.176.7.10\",\"port\":\"30303\",\"id\":\"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"US-Azure geth\"},{\"ip\":\"52.176.100.77\",\"port\":\"30303\",\"id\":\"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"US-Azure parity\"},{\"ip\":\"52.232.243.152\",\"port\":\"30303\",\"id\":\"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"Parity\"},{\"ip\":\"192.81.208.223\",\"port\":\"30303\",\"id\":\"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"@gpip\"}]}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/byzantium.json":
/*!**********************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/byzantium.json ***!
  \**********************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"byzantium\",\"comment\":\"Hardfork with new precompiles, instructions and other protocol changes\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-609\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"modexpGquaddivisor\":{\"v\":20,\"d\":\"Gquaddivisor from modexp precompile for gas calculation\"},\"ecAdd\":{\"v\":500,\"d\":\"Gas costs for curve addition precompile\"},\"ecMul\":{\"v\":40000,\"d\":\"Gas costs for curve multiplication precompile\"},\"ecPairing\":{\"v\":100000,\"d\":\"Base gas costs for curve pairing precompile\"},\"ecPairingWord\":{\"v\":80000,\"d\":\"Gas costs regarding curve pairing precompile input length\"}},\"vm\":{},\"pow\":{\"minerReward\":{\"v\":\"3000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/chainstart.json":
/*!***********************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/chainstart.json ***!
  \***********************************************************************/
/*! exports provided: name, comment, eip, status, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"chainstart\",\"comment\":\"Start of the Ethereum main chain\",\"eip\":{\"url\":\"\",\"status\":\"\"},\"status\":\"\",\"gasConfig\":{\"minGasLimit\":{\"v\":5000,\"d\":\"Minimum the gas limit may ever be\"},\"gasLimitBoundDivisor\":{\"v\":1024,\"d\":\"The bound divisor of the gas limit, used in update calculations\"}},\"gasPrices\":{\"base\":{\"v\":2,\"d\":\"Gas base cost, used e.g. for ChainID opcode (Istanbul)\"},\"tierStep\":{\"v\":[0,2,3,5,8,10,20],\"d\":\"Once per operation, for a selection of them\"},\"exp\":{\"v\":10,\"d\":\"Once per EXP instuction\"},\"expByte\":{\"v\":10,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction\"},\"sha3\":{\"v\":30,\"d\":\"Once per SHA3 operation\"},\"sha3Word\":{\"v\":6,\"d\":\"Once per word of the SHA3 operation's data\"},\"sload\":{\"v\":50,\"d\":\"Once per SLOAD operation\"},\"sstoreSet\":{\"v\":20000,\"d\":\"Once per SSTORE operation if the zeroness changes from zero\"},\"sstoreReset\":{\"v\":5000,\"d\":\"Once per SSTORE operation if the zeroness does not change from zero\"},\"sstoreRefund\":{\"v\":15000,\"d\":\"Once per SSTORE operation if the zeroness changes to zero\"},\"jumpdest\":{\"v\":1,\"d\":\"Refunded gas, once per SSTORE operation if the zeroness changes to zero\"},\"log\":{\"v\":375,\"d\":\"Per LOG* operation\"},\"logData\":{\"v\":8,\"d\":\"Per byte in a LOG* operation's data\"},\"logTopic\":{\"v\":375,\"d\":\"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas\"},\"create\":{\"v\":32000,\"d\":\"Once per CREATE operation & contract-creation transaction\"},\"call\":{\"v\":40,\"d\":\"Once per CALL operation & message call transaction\"},\"callStipend\":{\"v\":2300,\"d\":\"Free gas given at beginning of call\"},\"callValueTransfer\":{\"v\":9000,\"d\":\"Paid for CALL when the value transfor is non-zero\"},\"callNewAccount\":{\"v\":25000,\"d\":\"Paid for CALL when the destination address didn't exist prior\"},\"selfdestructRefund\":{\"v\":24000,\"d\":\"Refunded following a selfdestruct operation\"},\"memory\":{\"v\":3,\"d\":\"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL\"},\"quadCoeffDiv\":{\"v\":512,\"d\":\"Divisor for the quadratic particle of the memory cost equation\"},\"createData\":{\"v\":200,\"d\":\"\"},\"tx\":{\"v\":21000,\"d\":\"Per transaction. NOTE: Not payable on data of calls between transactions\"},\"txCreation\":{\"v\":32000,\"d\":\"The cost of creating a contract via tx\"},\"txDataZero\":{\"v\":4,\"d\":\"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions\"},\"txDataNonZero\":{\"v\":68,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions\"},\"copy\":{\"v\":3,\"d\":\"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added\"},\"ecRecover\":{\"v\":3000,\"d\":\"\"},\"sha256\":{\"v\":60,\"d\":\"\"},\"sha256Word\":{\"v\":12,\"d\":\"\"},\"ripemd160\":{\"v\":600,\"d\":\"\"},\"ripemd160Word\":{\"v\":120,\"d\":\"\"},\"identity\":{\"v\":15,\"d\":\"\"},\"identityWord\":{\"v\":3,\"d\":\"\"}},\"vm\":{\"stackLimit\":{\"v\":1024,\"d\":\"Maximum size of VM stack allowed\"},\"callCreateDepth\":{\"v\":1024,\"d\":\"Maximum depth of call/create stack\"},\"maxExtraDataSize\":{\"v\":32,\"d\":\"Maximum size extra data may be after Genesis\"}},\"pow\":{\"minimumDifficulty\":{\"v\":131072,\"d\":\"The minimum that the difficulty may ever be\"},\"difficultyBoundDivisor\":{\"v\":2048,\"d\":\"The bound divisor of the difficulty, used in the update calculations\"},\"durationLimit\":{\"v\":13,\"d\":\"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not\"},\"epochDuration\":{\"v\":30000,\"d\":\"Duration between proof-of-work epochs\"},\"timebombPeriod\":{\"v\":100000,\"d\":\"Exponential difficulty timebomb period\"},\"minerReward\":{\"v\":\"5000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/constantinople.json":
/*!***************************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/constantinople.json ***!
  \***************************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"constantinople\",\"comment\":\"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-1013\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"netSstoreNoopGas\":{\"v\":200,\"d\":\"Once per SSTORE operation if the value doesn't change\"},\"netSstoreInitGas\":{\"v\":20000,\"d\":\"Once per SSTORE operation from clean zero\"},\"netSstoreCleanGas\":{\"v\":5000,\"d\":\"Once per SSTORE operation from clean non-zero\"},\"netSstoreDirtyGas\":{\"v\":200,\"d\":\"Once per SSTORE operation from dirty\"},\"netSstoreClearRefund\":{\"v\":15000,\"d\":\"Once per SSTORE operation for clearing an originally existing storage slot\"},\"netSstoreResetRefund\":{\"v\":4800,\"d\":\"Once per SSTORE operation for resetting to the original non-zero value\"},\"netSstoreResetClearRefund\":{\"v\":19800,\"d\":\"Once per SSTORE operation for resetting to the original zero value\"}},\"vm\":{},\"pow\":{\"minerReward\":{\"v\":\"2000000000000000000\",\"d\":\"The amount a miner gets rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/dao.json":
/*!****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/dao.json ***!
  \****************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"dao\",\"comment\":\"DAO rescue hardfork\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-779\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/homestead.json":
/*!**********************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/homestead.json ***!
  \**********************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"homestead\",\"comment\":\"Homestead hardfork with protocol and network changes\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-606\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hardforks = [
    ['chainstart', __webpack_require__(/*! ./chainstart.json */ "./node_modules/ethereumjs-common/dist/hardforks/chainstart.json")],
    ['homestead', __webpack_require__(/*! ./homestead.json */ "./node_modules/ethereumjs-common/dist/hardforks/homestead.json")],
    ['dao', __webpack_require__(/*! ./dao.json */ "./node_modules/ethereumjs-common/dist/hardforks/dao.json")],
    ['tangerineWhistle', __webpack_require__(/*! ./tangerineWhistle.json */ "./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json")],
    ['spuriousDragon', __webpack_require__(/*! ./spuriousDragon.json */ "./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json")],
    ['byzantium', __webpack_require__(/*! ./byzantium.json */ "./node_modules/ethereumjs-common/dist/hardforks/byzantium.json")],
    ['constantinople', __webpack_require__(/*! ./constantinople.json */ "./node_modules/ethereumjs-common/dist/hardforks/constantinople.json")],
    ['petersburg', __webpack_require__(/*! ./petersburg.json */ "./node_modules/ethereumjs-common/dist/hardforks/petersburg.json")],
    ['istanbul', __webpack_require__(/*! ./istanbul.json */ "./node_modules/ethereumjs-common/dist/hardforks/istanbul.json")],
    ['muirGlacier', __webpack_require__(/*! ./muirGlacier.json */ "./node_modules/ethereumjs-common/dist/hardforks/muirGlacier.json")],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/istanbul.json":
/*!*********************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/istanbul.json ***!
  \*********************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"istanbul\",\"comment\":\"HF targeted for December 2019 following the Constantinople/Petersburg HF\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-1679\",\"status\":\"Draft\"},\"gasConfig\":{},\"gasPrices\":{\"blake2Round\":{\"v\":1,\"d\":\"Gas cost per round for the Blake2 F precompile\"},\"ecAdd\":{\"v\":150,\"d\":\"Gas costs for curve addition precompile\"},\"ecMul\":{\"v\":6000,\"d\":\"Gas costs for curve multiplication precompile\"},\"ecPairing\":{\"v\":45000,\"d\":\"Base gas costs for curve pairing precompile\"},\"ecPairingWord\":{\"v\":34000,\"d\":\"Gas costs regarding curve pairing precompile input length\"},\"txDataNonZero\":{\"v\":16,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions\"},\"sstoreSentryGasEIP2200\":{\"v\":2300,\"d\":\"Minimum gas required to be present for an SSTORE call, not consumed\"},\"sstoreNoopGasEIP2200\":{\"v\":800,\"d\":\"Once per SSTORE operation if the value doesn't change\"},\"sstoreDirtyGasEIP2200\":{\"v\":800,\"d\":\"Once per SSTORE operation if a dirty value is changed\"},\"sstoreInitGasEIP2200\":{\"v\":20000,\"d\":\"Once per SSTORE operation from clean zero to non-zero\"},\"sstoreInitRefundEIP2200\":{\"v\":19200,\"d\":\"Once per SSTORE operation for resetting to the original zero value\"},\"sstoreCleanGasEIP2200\":{\"v\":5000,\"d\":\"Once per SSTORE operation from clean non-zero to something else\"},\"sstoreCleanRefundEIP2200\":{\"v\":4200,\"d\":\"Once per SSTORE operation for resetting to the original non-zero value\"},\"sstoreClearRefundEIP2200\":{\"v\":15000,\"d\":\"Once per SSTORE operation for clearing an originally existing storage slot\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/muirGlacier.json":
/*!************************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/muirGlacier.json ***!
  \************************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"muirGlacier\",\"comment\":\"HF to delay the difficulty bomb\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-2384\",\"status\":\"Last Call\"},\"gasConfig\":{},\"gasPrices\":{},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/petersburg.json":
/*!***********************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/petersburg.json ***!
  \***********************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"petersburg\",\"comment\":\"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople\",\"eip\":{\"url\":\"https://github.com/ethereum/EIPs/pull/1716\",\"status\":\"Draft\"},\"gasConfig\":{},\"gasPrices\":{\"netSstoreNoopGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreInitGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreCleanGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreDirtyGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreClearRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreResetRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreResetClearRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json":
/*!***************************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json ***!
  \***************************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"spuriousDragon\",\"comment\":\"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-607\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"expByte\":{\"v\":50,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction\"}},\"vm\":{\"maxCodeSize\":{\"v\":24576,\"d\":\"Maximum length of contract code\"}},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json":
/*!*****************************************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json ***!
  \*****************************************************************************/
/*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tangerineWhistle\",\"comment\":\"Hardfork with gas cost changes for IO-heavy operations\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-608\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"sload\":{\"v\":200,\"d\":\"Once per SLOAD operation\"},\"call\":{\"v\":700,\"d\":\"Once per CALL operation & message call transaction\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");

/***/ }),

/***/ "./node_modules/ethereumjs-common/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ethereumjs-common/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chains_1 = __webpack_require__(/*! ./chains */ "./node_modules/ethereumjs-common/dist/chains/index.js");
var hardforks_1 = __webpack_require__(/*! ./hardforks */ "./node_modules/ethereumjs-common/dist/hardforks/index.js");
/**
 * Common class to access chain and hardfork parameters
 */
var Common = /** @class */ (function () {
    /**
     * @constructor
     * @param chain String ('mainnet') or Number (1) chain
     * @param hardfork String identifier ('byzantium') for hardfork (optional)
     * @param supportedHardforks Limit parameter returns to the given hardforks (optional)
     */
    function Common(chain, hardfork, supportedHardforks) {
        this._chainParams = this.setChain(chain);
        this._hardfork = null;
        this._supportedHardforks = supportedHardforks === undefined ? [] : supportedHardforks;
        if (hardfork) {
            this.setHardfork(hardfork);
        }
    }
    /**
     * Creates a Common object for a custom chain, based on a standard one. It uses all the [[Chain]]
     * params from [[baseChain]] except the ones overridden in [[customChainParams]].
     *
     * @param baseChain The name (`mainnet`) or id (`1`) of a standard chain used to base the custom
     * chain params on.
     * @param customChainParams The custom parameters of the chain.
     * @param hardfork String identifier ('byzantium') for hardfork (optional)
     * @param supportedHardforks Limit parameter returns to the given hardforks (optional)
     */
    Common.forCustomChain = function (baseChain, customChainParams, hardfork, supportedHardforks) {
        var standardChainParams = Common._getChainParams(baseChain);
        return new Common(__assign({}, standardChainParams, customChainParams), hardfork, supportedHardforks);
    };
    Common._getChainParams = function (chain) {
        if (typeof chain === 'number') {
            if (chains_1.chains['names'][chain]) {
                return chains_1.chains[chains_1.chains['names'][chain]];
            }
            throw new Error("Chain with ID " + chain + " not supported");
        }
        if (chains_1.chains[chain]) {
            return chains_1.chains[chain];
        }
        throw new Error("Chain with name " + chain + " not supported");
    };
    /**
     * Sets the chain
     * @param chain String ('mainnet') or Number (1) chain
     *     representation. Or, a Dictionary of chain parameters for a private network.
     * @returns The dictionary with parameters set as chain
     */
    Common.prototype.setChain = function (chain) {
        if (typeof chain === 'number' || typeof chain === 'string') {
            this._chainParams = Common._getChainParams(chain);
        }
        else if (typeof chain === 'object') {
            var required = ['networkId', 'genesis', 'hardforks', 'bootstrapNodes'];
            for (var _i = 0, required_1 = required; _i < required_1.length; _i++) {
                var param = required_1[_i];
                if (chain[param] === undefined) {
                    throw new Error("Missing required chain parameter: " + param);
                }
            }
            this._chainParams = chain;
        }
        else {
            throw new Error('Wrong input format');
        }
        return this._chainParams;
    };
    /**
     * Sets the hardfork to get params for
     * @param hardfork String identifier ('byzantium')
     */
    Common.prototype.setHardfork = function (hardfork) {
        if (!this._isSupportedHardfork(hardfork)) {
            throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }
        var changed = false;
        for (var _i = 0, hardforkChanges_1 = hardforks_1.hardforks; _i < hardforkChanges_1.length; _i++) {
            var hfChanges = hardforkChanges_1[_i];
            if (hfChanges[0] === hardfork) {
                this._hardfork = hardfork;
                changed = true;
            }
        }
        if (!changed) {
            throw new Error("Hardfork with name " + hardfork + " not supported");
        }
    };
    /**
     * Internal helper function to choose between hardfork set and hardfork provided as param
     * @param hardfork Hardfork given to function as a parameter
     * @returns Hardfork chosen to be used
     */
    Common.prototype._chooseHardfork = function (hardfork, onlySupported) {
        onlySupported = onlySupported === undefined ? true : onlySupported;
        if (!hardfork) {
            if (!this._hardfork) {
                throw new Error('Method called with neither a hardfork set nor provided by param');
            }
            else {
                hardfork = this._hardfork;
            }
        }
        else if (onlySupported && !this._isSupportedHardfork(hardfork)) {
            throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }
        return hardfork;
    };
    /**
     * Internal helper function, returns the params for the given hardfork for the chain set
     * @param hardfork Hardfork name
     * @returns Dictionary with hardfork params
     */
    Common.prototype._getHardfork = function (hardfork) {
        var hfs = this.hardforks();
        for (var _i = 0, hfs_1 = hfs; _i < hfs_1.length; _i++) {
            var hf = hfs_1[_i];
            if (hf['name'] === hardfork)
                return hf;
        }
        throw new Error("Hardfork " + hardfork + " not defined for chain " + this.chainName());
    };
    /**
     * Internal helper function to check if a hardfork is set to be supported by the library
     * @param hardfork Hardfork name
     * @returns True if hardfork is supported
     */
    Common.prototype._isSupportedHardfork = function (hardfork) {
        if (this._supportedHardforks.length > 0) {
            for (var _i = 0, _a = this._supportedHardforks; _i < _a.length; _i++) {
                var supportedHf = _a[_i];
                if (hardfork === supportedHf)
                    return true;
            }
        }
        else {
            return true;
        }
        return false;
    };
    /**
     * Returns the parameter corresponding to a hardfork
     * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow', 'casper', 'sharding')
     * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
     * @param hardfork Hardfork name, optional if hardfork set
     */
    Common.prototype.param = function (topic, name, hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        var value;
        for (var _i = 0, hardforkChanges_2 = hardforks_1.hardforks; _i < hardforkChanges_2.length; _i++) {
            var hfChanges = hardforkChanges_2[_i];
            if (!hfChanges[1][topic]) {
                throw new Error("Topic " + topic + " not defined");
            }
            if (hfChanges[1][topic][name] !== undefined) {
                value = hfChanges[1][topic][name].v;
            }
            if (hfChanges[0] === hardfork)
                break;
        }
        if (value === undefined) {
            throw new Error(topic + " value for " + name + " not found");
        }
        return value;
    };
    /**
     * Returns a parameter for the hardfork active on block number
     * @param topic Parameter topic
     * @param name Parameter name
     * @param blockNumber Block number
     */
    Common.prototype.paramByBlock = function (topic, name, blockNumber) {
        var activeHfs = this.activeHardforks(blockNumber);
        var hardfork = activeHfs[activeHfs.length - 1]['name'];
        return this.param(topic, name, hardfork);
    };
    /**
     * Checks if set or provided hardfork is active on block number
     * @param hardfork Hardfork name or null (for HF set)
     * @param blockNumber
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if HF is active on block number
     */
    Common.prototype.hardforkIsActiveOnBlock = function (hardfork, blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var onlySupported = opts.onlySupported === undefined ? false : opts.onlySupported;
        hardfork = this._chooseHardfork(hardfork, onlySupported);
        var hfBlock = this.hardforkBlock(hardfork);
        if (hfBlock !== null && blockNumber >= hfBlock)
            return true;
        return false;
    };
    /**
     * Alias to hardforkIsActiveOnBlock when hardfork is set
     * @param blockNumber
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if HF is active on block number
     */
    Common.prototype.activeOnBlock = function (blockNumber, opts) {
        return this.hardforkIsActiveOnBlock(null, blockNumber, opts);
    };
    /**
     * Sequence based check if given or set HF1 is greater than or equal HF2
     * @param hardfork1 Hardfork name or null (if set)
     * @param hardfork2 Hardfork name
     * @param opts Hardfork options
     * @returns True if HF1 gte HF2
     */
    Common.prototype.hardforkGteHardfork = function (hardfork1, hardfork2, opts) {
        opts = opts !== undefined ? opts : {};
        var onlyActive = opts.onlyActive === undefined ? false : opts.onlyActive;
        hardfork1 = this._chooseHardfork(hardfork1, opts.onlySupported);
        var hardforks;
        if (onlyActive) {
            hardforks = this.activeHardforks(null, opts);
        }
        else {
            hardforks = this.hardforks();
        }
        var posHf1 = -1, posHf2 = -1;
        var index = 0;
        for (var _i = 0, hardforks_2 = hardforks; _i < hardforks_2.length; _i++) {
            var hf = hardforks_2[_i];
            if (hf['name'] === hardfork1)
                posHf1 = index;
            if (hf['name'] === hardfork2)
                posHf2 = index;
            index += 1;
        }
        return posHf1 >= posHf2;
    };
    /**
     * Alias to hardforkGteHardfork when hardfork is set
     * @param hardfork Hardfork name
     * @param opts Hardfork options
     * @returns True if hardfork set is greater than hardfork provided
     */
    Common.prototype.gteHardfork = function (hardfork, opts) {
        return this.hardforkGteHardfork(null, hardfork, opts);
    };
    /**
     * Checks if given or set hardfork is active on the chain
     * @param hardfork Hardfork name, optional if HF set
     * @param opts Hardfork options (onlyActive unused)
     * @returns True if hardfork is active on the chain
     */
    Common.prototype.hardforkIsActiveOnChain = function (hardfork, opts) {
        opts = opts !== undefined ? opts : {};
        var onlySupported = opts.onlySupported === undefined ? false : opts.onlySupported;
        hardfork = this._chooseHardfork(hardfork, onlySupported);
        for (var _i = 0, _a = this.hardforks(); _i < _a.length; _i++) {
            var hf = _a[_i];
            if (hf['name'] === hardfork && hf['block'] !== null)
                return true;
        }
        return false;
    };
    /**
     * Returns the active hardfork switches for the current chain
     * @param blockNumber up to block if provided, otherwise for the whole chain
     * @param opts Hardfork options (onlyActive unused)
     * @return Array with hardfork arrays
     */
    Common.prototype.activeHardforks = function (blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var activeHardforks = [];
        var hfs = this.hardforks();
        for (var _i = 0, hfs_2 = hfs; _i < hfs_2.length; _i++) {
            var hf = hfs_2[_i];
            if (hf['block'] === null)
                continue;
            if (blockNumber !== undefined && blockNumber !== null && blockNumber < hf['block'])
                break;
            if (opts.onlySupported && !this._isSupportedHardfork(hf['name']))
                continue;
            activeHardforks.push(hf);
        }
        return activeHardforks;
    };
    /**
     * Returns the latest active hardfork name for chain or block or throws if unavailable
     * @param blockNumber up to block if provided, otherwise for the whole chain
     * @param opts Hardfork options (onlyActive unused)
     * @return Hardfork name
     */
    Common.prototype.activeHardfork = function (blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var activeHardforks = this.activeHardforks(blockNumber, opts);
        if (activeHardforks.length > 0) {
            return activeHardforks[activeHardforks.length - 1]['name'];
        }
        else {
            throw new Error("No (supported) active hardfork found");
        }
    };
    /**
     * Returns the hardfork change block for hardfork provided or set
     * @param hardfork Hardfork name, optional if HF set
     * @returns Block number
     */
    Common.prototype.hardforkBlock = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        return this._getHardfork(hardfork)['block'];
    };
    /**
     * True if block number provided is the hardfork (given or set) change block of the current chain
     * @param blockNumber Number of the block to check
     * @param hardfork Hardfork name, optional if HF set
     * @returns True if blockNumber is HF block
     */
    Common.prototype.isHardforkBlock = function (blockNumber, hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        if (this.hardforkBlock(hardfork) === blockNumber) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Provide the consensus type for the hardfork set or provided as param
     * @param hardfork Hardfork name, optional if hardfork set
     * @returns Consensus type (e.g. 'pow', 'poa')
     */
    Common.prototype.consensus = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        return this._getHardfork(hardfork)['consensus'];
    };
    /**
     * Provide the finality type for the hardfork set or provided as param
     * @param {String} hardfork Hardfork name, optional if hardfork set
     * @returns {String} Finality type (e.g. 'pos', null of no finality)
     */
    Common.prototype.finality = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        return this._getHardfork(hardfork)['finality'];
    };
    /**
     * Returns the Genesis parameters of current chain
     * @returns Genesis dictionary
     */
    Common.prototype.genesis = function () {
        return this._chainParams['genesis'];
    };
    /**
     * Returns the hardforks for current chain
     * @returns {Array} Array with arrays of hardforks
     */
    Common.prototype.hardforks = function () {
        return this._chainParams['hardforks'];
    };
    /**
     * Returns bootstrap nodes for the current chain
     * @returns {Dictionary} Dict with bootstrap nodes
     */
    Common.prototype.bootstrapNodes = function () {
        return this._chainParams['bootstrapNodes'];
    };
    /**
     * Returns the hardfork set
     * @returns Hardfork name
     */
    Common.prototype.hardfork = function () {
        return this._hardfork;
    };
    /**
     * Returns the Id of current chain
     * @returns chain Id
     */
    Common.prototype.chainId = function () {
        return this._chainParams['chainId'];
    };
    /**
     * Returns the name of current chain
     * @returns chain name (lower case)
     */
    Common.prototype.chainName = function () {
        return chains_1.chains['names'][this.chainId()] || this._chainParams['name'];
    };
    /**
     * Returns the Id of current network
     * @returns network Id
     */
    Common.prototype.networkId = function () {
        return this._chainParams['networkId'];
    };
    return Common;
}());
exports.default = Common;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ethereumjs-tx/dist/fake.js":
/*!*************************************************!*\
  !*** ./node_modules/ethereumjs-tx/dist/fake.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
var buffer_1 = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
var transaction_1 = __webpack_require__(/*! ./transaction */ "./node_modules/ethereumjs-tx/dist/transaction.js");
/**
 * Creates a new transaction object that doesn't need to be signed.
 *
 * @param data - A transaction can be initialized with its rlp representation, an array containing
 * the value of its fields in order, or an object containing them by name.
 *
 * @param opts - The transaction's options, used to indicate the chain and hardfork the
 * transactions belongs to.
 *
 * @see Transaction
 */
var FakeTransaction = /** @class */ (function (_super) {
    __extends(FakeTransaction, _super);
    function FakeTransaction(data, opts) {
        if (data === void 0) { data = {}; }
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, data, opts) || this;
        Object.defineProperty(_this, 'from', {
            enumerable: true,
            configurable: true,
            get: function () { return _this.getSenderAddress(); },
            set: function (val) {
                if (val) {
                    _this._from = ethereumjs_util_1.toBuffer(val);
                }
            },
        });
        var txData = data;
        if (txData.from) {
            _this.from = ethereumjs_util_1.toBuffer(txData.from);
        }
        return _this;
    }
    /**
     * Computes a sha3-256 hash of the serialized tx, using the sender address to generate a fake
     * signature.
     *
     * @param includeSignature - Whether or not to include the signature
     */
    FakeTransaction.prototype.hash = function (includeSignature) {
        if (includeSignature === void 0) { includeSignature = true; }
        if (includeSignature && this._from && this._from.toString('hex') !== '') {
            // include a fake signature using the from address as a private key
            var fakeKey = buffer_1.Buffer.concat([this._from, this._from.slice(0, 12)]);
            this.sign(fakeKey);
        }
        return _super.prototype.hash.call(this, includeSignature);
    };
    return FakeTransaction;
}(transaction_1.default));
exports.default = FakeTransaction;
//# sourceMappingURL=fake.js.map

/***/ }),

/***/ "./node_modules/ethereumjs-tx/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ethereumjs-tx/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var transaction_1 = __webpack_require__(/*! ./transaction */ "./node_modules/ethereumjs-tx/dist/transaction.js");
exports.Transaction = transaction_1.default;
var fake_1 = __webpack_require__(/*! ./fake */ "./node_modules/ethereumjs-tx/dist/fake.js");
exports.FakeTransaction = fake_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ethereumjs-tx/dist/transaction.js":
/*!********************************************************!*\
  !*** ./node_modules/ethereumjs-tx/dist/transaction.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethereumjs_util_1 = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
var ethereumjs_common_1 = __webpack_require__(/*! ethereumjs-common */ "./node_modules/ethereumjs-common/dist/index.js");
var buffer_1 = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");
// secp256k1n/2
var N_DIV_2 = new ethereumjs_util_1.BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
/**
 * An Ethereum transaction.
 */
var Transaction = /** @class */ (function () {
    /**
     * Creates a new transaction from an object with its fields' values.
     *
     * @param data - A transaction can be initialized with its rlp representation, an array containing
     * the value of its fields in order, or an object containing them by name.
     *
     * @param opts - The transaction's options, used to indicate the chain and hardfork the
     * transactions belongs to.
     *
     * @note Transaction objects implement EIP155 by default. To disable it, use the constructor's
     * second parameter to set a chain and hardfork before EIP155 activation (i.e. before Spurious
     * Dragon.)
     *
     * @example
     * ```js
     * const txData = {
     *   nonce: '0x00',
     *   gasPrice: '0x09184e72a000',
     *   gasLimit: '0x2710',
     *   to: '0x0000000000000000000000000000000000000000',
     *   value: '0x00',
     *   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
     *   v: '0x1c',
     *   r: '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
     *   s: '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
     * };
     * const tx = new Transaction(txData);
     * ```
     */
    function Transaction(data, opts) {
        if (data === void 0) { data = {}; }
        if (opts === void 0) { opts = {}; }
        // instantiate Common class instance based on passed options
        if (opts.common) {
            if (opts.chain || opts.hardfork) {
                throw new Error('Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!');
            }
            this._common = opts.common;
        }
        else {
            var chain = opts.chain ? opts.chain : 'mainnet';
            var hardfork = opts.hardfork ? opts.hardfork : 'petersburg';
            this._common = new ethereumjs_common_1.default(chain, hardfork);
        }
        // Define Properties
        var fields = [
            {
                name: 'nonce',
                length: 32,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'gasPrice',
                length: 32,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'gasLimit',
                alias: 'gas',
                length: 32,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'to',
                allowZero: true,
                length: 20,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'value',
                length: 32,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'data',
                alias: 'input',
                allowZero: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'v',
                allowZero: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 'r',
                length: 32,
                allowZero: true,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
            {
                name: 's',
                length: 32,
                allowZero: true,
                allowLess: true,
                default: new buffer_1.Buffer([]),
            },
        ];
        // attached serialize
        ethereumjs_util_1.defineProperties(this, fields, data);
        /**
         * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
         * @name from
         * @memberof Transaction
         */
        Object.defineProperty(this, 'from', {
            enumerable: true,
            configurable: true,
            get: this.getSenderAddress.bind(this),
        });
        this._validateV(this.v);
        this._overrideVSetterWithValidation();
    }
    /**
     * If the tx's `to` is to the creation address
     */
    Transaction.prototype.toCreationAddress = function () {
        return this.to.toString('hex') === '';
    };
    /**
     * Computes a sha3-256 hash of the serialized tx
     * @param includeSignature - Whether or not to include the signature
     */
    Transaction.prototype.hash = function (includeSignature) {
        if (includeSignature === void 0) { includeSignature = true; }
        var items;
        if (includeSignature) {
            items = this.raw;
        }
        else {
            if (this._implementsEIP155()) {
                items = this.raw.slice(0, 6).concat([
                    ethereumjs_util_1.toBuffer(this.getChainId()),
                    // TODO: stripping zeros should probably be a responsibility of the rlp module
                    ethereumjs_util_1.stripZeros(ethereumjs_util_1.toBuffer(0)),
                    ethereumjs_util_1.stripZeros(ethereumjs_util_1.toBuffer(0)),
                ]);
            }
            else {
                items = this.raw.slice(0, 6);
            }
        }
        // create hash
        return ethereumjs_util_1.rlphash(items);
    };
    /**
     * returns chain ID
     */
    Transaction.prototype.getChainId = function () {
        return this._common.chainId();
    };
    /**
     * returns the sender's address
     */
    Transaction.prototype.getSenderAddress = function () {
        if (this._from) {
            return this._from;
        }
        var pubkey = this.getSenderPublicKey();
        this._from = ethereumjs_util_1.publicToAddress(pubkey);
        return this._from;
    };
    /**
     * returns the public key of the sender
     */
    Transaction.prototype.getSenderPublicKey = function () {
        if (!this.verifySignature()) {
            throw new Error('Invalid Signature');
        }
        // If the signature was verified successfully the _senderPubKey field is defined
        return this._senderPubKey;
    };
    /**
     * Determines if the signature is valid
     */
    Transaction.prototype.verifySignature = function () {
        var msgHash = this.hash(false);
        // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
        if (this._common.gteHardfork('homestead') && new ethereumjs_util_1.BN(this.s).cmp(N_DIV_2) === 1) {
            return false;
        }
        try {
            var v = ethereumjs_util_1.bufferToInt(this.v);
            var useChainIdWhileRecoveringPubKey = v >= this.getChainId() * 2 + 35 && this._common.gteHardfork('spuriousDragon');
            this._senderPubKey = ethereumjs_util_1.ecrecover(msgHash, v, this.r, this.s, useChainIdWhileRecoveringPubKey ? this.getChainId() : undefined);
        }
        catch (e) {
            return false;
        }
        return !!this._senderPubKey;
    };
    /**
     * sign a transaction with a given private key
     * @param privateKey - Must be 32 bytes in length
     */
    Transaction.prototype.sign = function (privateKey) {
        // We clear any previous signature before signing it. Otherwise, _implementsEIP155's can give
        // different results if this tx was already signed.
        this.v = new buffer_1.Buffer([]);
        this.s = new buffer_1.Buffer([]);
        this.r = new buffer_1.Buffer([]);
        var msgHash = this.hash(false);
        var sig = ethereumjs_util_1.ecsign(msgHash, privateKey);
        if (this._implementsEIP155()) {
            sig.v += this.getChainId() * 2 + 8;
        }
        Object.assign(this, sig);
    };
    /**
     * The amount of gas paid for the data in this tx
     */
    Transaction.prototype.getDataFee = function () {
        var data = this.raw[5];
        var cost = new ethereumjs_util_1.BN(0);
        for (var i = 0; i < data.length; i++) {
            data[i] === 0
                ? cost.iaddn(this._common.param('gasPrices', 'txDataZero'))
                : cost.iaddn(this._common.param('gasPrices', 'txDataNonZero'));
        }
        return cost;
    };
    /**
     * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
     */
    Transaction.prototype.getBaseFee = function () {
        var fee = this.getDataFee().iaddn(this._common.param('gasPrices', 'tx'));
        if (this._common.gteHardfork('homestead') && this.toCreationAddress()) {
            fee.iaddn(this._common.param('gasPrices', 'txCreation'));
        }
        return fee;
    };
    /**
     * the up front amount that an account must have for this transaction to be valid
     */
    Transaction.prototype.getUpfrontCost = function () {
        return new ethereumjs_util_1.BN(this.gasLimit).imul(new ethereumjs_util_1.BN(this.gasPrice)).iadd(new ethereumjs_util_1.BN(this.value));
    };
    Transaction.prototype.validate = function (stringError) {
        if (stringError === void 0) { stringError = false; }
        var errors = [];
        if (!this.verifySignature()) {
            errors.push('Invalid Signature');
        }
        if (this.getBaseFee().cmp(new ethereumjs_util_1.BN(this.gasLimit)) > 0) {
            errors.push(["gas limit is too low. Need at least " + this.getBaseFee()]);
        }
        if (stringError === false) {
            return errors.length === 0;
        }
        else {
            return errors.join(' ');
        }
    };
    /**
     * Returns the rlp encoding of the transaction
     */
    Transaction.prototype.serialize = function () {
        // Note: This never gets executed, defineProperties overwrites it.
        return ethereumjs_util_1.rlp.encode(this.raw);
    };
    /**
     * Returns the transaction in JSON format
     * @see {@link https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md#defineproperties|ethereumjs-util}
     */
    Transaction.prototype.toJSON = function (labels) {
        if (labels === void 0) { labels = false; }
        // Note: This never gets executed, defineProperties overwrites it.
        return {};
    };
    Transaction.prototype._validateV = function (v) {
        if (v === undefined || v.length === 0) {
            return;
        }
        if (!this._common.gteHardfork('spuriousDragon')) {
            return;
        }
        var vInt = ethereumjs_util_1.bufferToInt(v);
        if (vInt === 27 || vInt === 28) {
            return;
        }
        var isValidEIP155V = vInt === this.getChainId() * 2 + 35 || vInt === this.getChainId() * 2 + 36;
        if (!isValidEIP155V) {
            throw new Error("Incompatible EIP155-based V " + vInt + " and chain id " + this.getChainId() + ". See the second parameter of the Transaction constructor to set the chain id.");
        }
    };
    Transaction.prototype._isSigned = function () {
        return this.v.length > 0 && this.r.length > 0 && this.s.length > 0;
    };
    Transaction.prototype._overrideVSetterWithValidation = function () {
        var _this = this;
        var vDescriptor = Object.getOwnPropertyDescriptor(this, 'v');
        Object.defineProperty(this, 'v', __assign({}, vDescriptor, { set: function (v) {
                if (v !== undefined) {
                    _this._validateV(ethereumjs_util_1.toBuffer(v));
                }
                vDescriptor.set(v);
            } }));
    };
    Transaction.prototype._implementsEIP155 = function () {
        var onEIP155BlockOrLater = this._common.gteHardfork('spuriousDragon');
        if (!this._isSigned()) {
            // We sign with EIP155 all unsigned transactions after spuriousDragon
            return onEIP155BlockOrLater;
        }
        // EIP155 spec:
        // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36, then when computing
        // the hash of a transaction for purposes of signing or recovering, instead of hashing only the first six
        // elements (i.e. nonce, gasprice, startgas, to, value, data), hash nine elements, with v replaced by
        // CHAIN_ID, r = 0 and s = 0.
        var v = ethereumjs_util_1.bufferToInt(this.v);
        var vAndChainIdMeetEIP155Conditions = v === this.getChainId() * 2 + 35 || v === this.getChainId() * 2 + 36;
        return vAndChainIdMeetEIP155Conditions && onEIP155BlockOrLater;
    };
    return Transaction;
}());
exports.default = Transaction;
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./node_modules/hdkey/lib/hdkey.js":
/*!*****************************************!*\
  !*** ./node_modules/hdkey/lib/hdkey.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer
var crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js")
var cs = __webpack_require__(/*! coinstring */ "./node_modules/coinstring/lib/coinstring.js")
var secp256k1 = __webpack_require__(/*! secp256k1 */ "./node_modules/secp256k1/elliptic.js")

var MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8')
var HARDENED_OFFSET = 0x80000000
var LEN = 78

// Bitcoin hardcoded by default, can use package `coininfo` for others
var BITCOIN_VERSIONS = {private: 0x0488ADE4, public: 0x0488B21E}

function HDKey (versions) {
  this.versions = versions || BITCOIN_VERSIONS
  this.depth = 0
  this.index = 0
  this._privateKey = null
  this._publicKey = null
  this.chainCode = null
  this._fingerprint = 0
  this.parentFingerprint = 0
}

Object.defineProperty(HDKey.prototype, 'fingerprint', { get: function () { return this._fingerprint } })
Object.defineProperty(HDKey.prototype, 'identifier', { get: function () { return this._identifier } })
Object.defineProperty(HDKey.prototype, 'pubKeyHash', { get: function () { return this.identifier } })

Object.defineProperty(HDKey.prototype, 'privateKey', {
  get: function () {
    return this._privateKey
  },
  set: function (value) {
    assert.equal(value.length, 32, 'Private key must be 32 bytes.')
    assert(secp256k1.privateKeyVerify(value) === true, 'Invalid private key')

    this._privateKey = value
    this._publicKey = secp256k1.publicKeyCreate(value, true)
    this._identifier = hash160(this.publicKey)
    this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
  }
})

Object.defineProperty(HDKey.prototype, 'publicKey', {
  get: function () {
    return this._publicKey
  },
  set: function (value) {
    assert(value.length === 33 || value.length === 65, 'Public key must be 33 or 65 bytes.')
    assert(secp256k1.publicKeyVerify(value) === true, 'Invalid public key')

    this._publicKey = secp256k1.publicKeyConvert(value, true) // force compressed point
    this._identifier = hash160(this.publicKey)
    this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
    this._privateKey = null
  }
})

Object.defineProperty(HDKey.prototype, 'privateExtendedKey', {
  get: function () {
    if (this._privateKey) return cs.encode(serialize(this, this.versions.private, Buffer.concat([Buffer.alloc(1, 0), this.privateKey])))
    else return null
  }
})

Object.defineProperty(HDKey.prototype, 'publicExtendedKey', {
  get: function () {
    return cs.encode(serialize(this, this.versions.public, this.publicKey))
  }
})

HDKey.prototype.derive = function (path) {
  if (path === 'm' || path === 'M' || path === "m'" || path === "M'") {
    return this
  }

  var entries = path.split('/')
  var hdkey = this
  entries.forEach(function (c, i) {
    if (i === 0) {
      assert(/^[mM]{1}/.test(c), 'Path must start with "m" or "M"')
      return
    }

    var hardened = (c.length > 1) && (c[c.length - 1] === "'")
    var childIndex = parseInt(c, 10) // & (HARDENED_OFFSET - 1)
    assert(childIndex < HARDENED_OFFSET, 'Invalid index')
    if (hardened) childIndex += HARDENED_OFFSET

    hdkey = hdkey.deriveChild(childIndex)
  })

  return hdkey
}

HDKey.prototype.deriveChild = function (index) {
  var isHardened = index >= HARDENED_OFFSET
  var indexBuffer = Buffer.allocUnsafe(4)
  indexBuffer.writeUInt32BE(index, 0)

  var data

  if (isHardened) { // Hardened child
    assert(this.privateKey, 'Could not derive hardened child key')

    var pk = this.privateKey
    var zb = Buffer.alloc(1, 0)
    pk = Buffer.concat([zb, pk])

    // data = 0x00 || ser256(kpar) || ser32(index)
    data = Buffer.concat([pk, indexBuffer])
  } else { // Normal child
    // data = serP(point(kpar)) || ser32(index)
    //      = serP(Kpar) || ser32(index)
    data = Buffer.concat([this.publicKey, indexBuffer])
  }

  var I = crypto.createHmac('sha512', this.chainCode).update(data).digest()
  var IL = I.slice(0, 32)
  var IR = I.slice(32)

  var hd = new HDKey(this.versions)

  // Private parent key -> private child key
  if (this.privateKey) {
    // ki = parse256(IL) + kpar (mod n)
    try {
      hd.privateKey = secp256k1.privateKeyTweakAdd(this.privateKey, IL)
      // throw if IL >= n || (privateKey + IL) === 0
    } catch (err) {
      // In case parse256(IL) >= n or ki == 0, one should proceed with the next value for i
      return this.derive(index + 1)
    }
  // Public parent key -> public child key
  } else {
    // Ki = point(parse256(IL)) + Kpar
    //    = G*IL + Kpar
    try {
      hd.publicKey = secp256k1.publicKeyTweakAdd(this.publicKey, IL, true)
      // throw if IL >= n || (g**IL + publicKey) is infinity
    } catch (err) {
      // In case parse256(IL) >= n or Ki is the point at infinity, one should proceed with the next value for i
      return this.derive(index + 1, isHardened)
    }
  }

  hd.chainCode = IR
  hd.depth = this.depth + 1
  hd.parentFingerprint = this.fingerprint// .readUInt32BE(0)
  hd.index = index

  return hd
}

HDKey.prototype.sign = function (hash) {
  return secp256k1.sign(hash, this.privateKey).signature
}

HDKey.prototype.verify = function (hash, signature) {
  return secp256k1.verify(hash, signature, this.publicKey)
}

HDKey.prototype.wipePrivateData = function () {
  if (this._privateKey) crypto.randomBytes(this._privateKey.length).copy(this._privateKey)
  this._privateKey = null
  return this
}

HDKey.prototype.toJSON = function () {
  return {
    xpriv: this.privateExtendedKey,
    xpub: this.publicExtendedKey
  }
}

HDKey.fromMasterSeed = function (seedBuffer, versions) {
  var I = crypto.createHmac('sha512', MASTER_SECRET).update(seedBuffer).digest()
  var IL = I.slice(0, 32)
  var IR = I.slice(32)

  var hdkey = new HDKey(versions)
  hdkey.chainCode = IR
  hdkey.privateKey = IL

  return hdkey
}

HDKey.fromExtendedKey = function (base58key, versions) {
  // => version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
  versions = versions || BITCOIN_VERSIONS
  var hdkey = new HDKey(versions)

  var keyBuffer = cs.decode(base58key)

  var version = keyBuffer.readUInt32BE(0)
  assert(version === versions.private || version === versions.public, 'Version mismatch: does not match private or public')

  hdkey.depth = keyBuffer.readUInt8(4)
  hdkey.parentFingerprint = keyBuffer.readUInt32BE(5)
  hdkey.index = keyBuffer.readUInt32BE(9)
  hdkey.chainCode = keyBuffer.slice(13, 45)

  var key = keyBuffer.slice(45)
  if (key.readUInt8(0) === 0) { // private
    assert(version === versions.private, 'Version mismatch: version does not match private')
    hdkey.privateKey = key.slice(1) // cut off first 0x0 byte
  } else {
    assert(version === versions.public, 'Version mismatch: version does not match public')
    hdkey.publicKey = key
  }

  return hdkey
}

HDKey.fromJSON = function (obj) {
  return HDKey.fromExtendedKey(obj.xpriv)
}

function serialize (hdkey, version, key) {
  // => version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
  var buffer = Buffer.allocUnsafe(LEN)

  buffer.writeUInt32BE(version, 0)
  buffer.writeUInt8(hdkey.depth, 4)

  var fingerprint = hdkey.depth ? hdkey.parentFingerprint : 0x00000000
  buffer.writeUInt32BE(fingerprint, 5)
  buffer.writeUInt32BE(hdkey.index, 9)

  hdkey.chainCode.copy(buffer, 13)
  key.copy(buffer, 45)

  return buffer
}

function hash160 (buf) {
  var sha = crypto.createHash('sha256').update(buf).digest()
  return crypto.createHash('ripemd160').update(sha).digest()
}

HDKey.HARDENED_OFFSET = HARDENED_OFFSET
module.exports = HDKey


/***/ })

}]);
//# sourceMappingURL=default~ledger-a060ac3c-js~trezor-891c3928-js-es2015.js.map