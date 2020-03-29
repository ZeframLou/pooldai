(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-connect-1e5c4aeb-js"],{

/***/ "./node_modules/bnc-onboard/dist/esm/wallet-connect-1e5c4aeb.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/wallet-connect-1e5c4aeb.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var walletConnectIcon = "\n  <svg \n    height=\"25\" \n    viewBox=\"0 0 40 25\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n  <path d=\"m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z\" \n        fill=\"#3b99fc\"/>\n  </svg>\n";

function walletConnect(options) {
  var infuraKey = options.infuraKey,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'WalletConnect',
    svg: svg || walletConnectIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var resetWalletState, _yield$import, WalletConnectProvider, provider;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                resetWalletState = helpers.resetWalletState;
                _context.next = 3;
                return __webpack_require__.e(/*! import() | walletconnect-web3-provider */ "walletconnect-web3-provider").then(__webpack_require__.t.bind(null, /*! @walletconnect/web3-provider */ "./node_modules/@walletconnect/web3-provider/lib/index.js", 7));

              case 3:
                _yield$import = _context.sent;
                WalletConnectProvider = _yield$import["default"];
                provider = new WalletConnectProvider({
                  infuraId: infuraKey
                });
                provider.autoRefreshOnNetworkChange = false;
                provider.wc.on('disconnect', function () {
                  resetWalletState({
                    disconnected: true,
                    walletName: 'WalletConnect'
                  });
                });
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'WalletConnect',
                    connect: function connect() {
                      return new Promise(function (resolve, reject) {
                        provider.enable().then(resolve)["catch"](function () {
                          return reject({
                            message: 'This dapp needs access to your account information.'
                          });
                        });
                      });
                    },
                    address: {
                      onChange: function onChange(func) {
                        provider.send('eth_accounts').then(function (accounts) {
                          return accounts[0] && func(accounts[0]);
                        });
                        provider.on('accountsChanged', function (accounts) {
                          return func(accounts[0]);
                        });
                      }
                    },
                    network: {
                      onChange: function onChange(func) {
                        provider.send('eth_chainId').then(func);
                        provider.on('chainChanged', func);
                      }
                    },
                    balance: {
                      get: function get() {
                        return new Promise(function (resolve) {
                          if (!provider.wc._accounts[0]) {
                            resolve(null);
                            return;
                          }

                          provider.send('eth_getBalance', [provider.wc._accounts[0], 'latest']);
                        });
                      }
                    },
                    disconnect: function disconnect() {
                      provider.wc.killSession();
                      provider.stop();
                    }
                  }
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (walletConnect);

/***/ })

}]);
//# sourceMappingURL=wallet-connect-1e5c4aeb-js-es2015.js.map