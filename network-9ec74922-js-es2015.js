(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-9ec74922-js"],{

/***/ "./node_modules/bnc-onboard/dist/esm/network-9ec74922.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/network-9ec74922.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onboard_37b13640_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-37b13640.js */ "./node_modules/bnc-onboard/dist/esm/onboard-37b13640.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ "./node_modules/bnc-sdk/dist/bnc-sdk.esm.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);






function network() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon;
  return function (stateAndHelpers) {
    var network = stateAndHelpers.network,
        appNetworkId = stateAndHelpers.appNetworkId,
        walletSelect = stateAndHelpers.walletSelect,
        exit = stateAndHelpers.exit;

    if (network != appNetworkId) {
      return {
        heading: heading || 'You Must Change Networks',
        description: description || "We've detected that you need to switch your wallet's network from <b>".concat(Object(_onboard_37b13640_js__WEBPACK_IMPORTED_MODULE_1__["n"])(network), "</b> to <b>").concat(Object(_onboard_37b13640_js__WEBPACK_IMPORTED_MODULE_1__["n"])(appNetworkId), " network</b> for this Dapp. <br><br> <i style=\"font-size: inherit; font-family: inherit;\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),
        eventCode: 'networkFail',
        button: {
          onclick: function onclick() {
            exit();
            walletSelect();
          },
          text: 'Switch Wallet'
        },
        icon: icon || _onboard_37b13640_js__WEBPACK_IMPORTED_MODULE_1__["b"]
      };
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (network);

/***/ })

}]);
//# sourceMappingURL=network-9ec74922-js-es2015.js.map