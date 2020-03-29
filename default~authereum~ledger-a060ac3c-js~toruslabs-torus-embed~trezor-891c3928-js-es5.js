function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class)};return _wrapNativeSuper(Class)}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor;if(Class)_setPrototypeOf(instance,Class.prototype);return instance}}return _construct.apply(null,arguments)}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default~authereum~ledger-a060ac3c-js~toruslabs-torus-embed~trezor-891c3928-js"],{/***/"./node_modules/eth-json-rpc-errors/index.js":/*!***************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/index.js ***!
  \***************************************************/ /*! no static exports found */ /***/function node_modulesEthJsonRpcErrorsIndexJs(module,exports,__webpack_require__){var _webpack_require__=__webpack_require__(/*! ./src/classes */"./node_modules/eth-json-rpc-errors/src/classes.js"),EthereumRpcError=_webpack_require__.EthereumRpcError,EthereumProviderError=_webpack_require__.EthereumProviderError;var _webpack_require__2=__webpack_require__(/*! ./src/utils */"./node_modules/eth-json-rpc-errors/src/utils.js"),serializeError=_webpack_require__2.serializeError,getMessageFromCode=_webpack_require__2.getMessageFromCode;var ethErrors=__webpack_require__(/*! ./src/errors */"./node_modules/eth-json-rpc-errors/src/errors.js");var ERROR_CODES=__webpack_require__(/*! ./src/errorCodes.json */"./node_modules/eth-json-rpc-errors/src/errorCodes.json");module.exports={ethErrors:ethErrors,EthereumRpcError:EthereumRpcError,EthereumProviderError:EthereumProviderError,serializeError:serializeError,getMessageFromCode:getMessageFromCode,/** @type ErrorCodes */ERROR_CODES:ERROR_CODES// Types
/**
 * @typedef {Object} EthereumProviderErrorCodes
 * @property {number} userRejectedRequest
 * @property {number} unauthorized
 * @property {number} unsupportedMethod
 */ /**
 * @typedef {Object} EthereumRpcErrorCodes
 * @property {number} parse
 * @property {number} invalidRequest
 * @property {number} invalidParams
 * @property {number} methodNotFound
 * @property {number} internal
 * @property {number} invalidInput
 * @property {number} resourceNotFound
 * @property {number} resourceUnavailable
 * @property {number} transactionRejected
 * @property {number} methodNotSupported
 */ /**
 * @typedef ErrorCodes
 * @property {EthereumRpcErrorCodes} rpc
 * @property {EthereumProviderErrorCodes} provider
 */ /***/}},/***/"./node_modules/eth-json-rpc-errors/src/classes.js":/*!*********************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/classes.js ***!
  \*********************************************************/ /*! no static exports found */ /***/function node_modulesEthJsonRpcErrorsSrcClassesJs(module,exports,__webpack_require__){var safeStringify=__webpack_require__(/*! fast-safe-stringify */"./node_modules/fast-safe-stringify/index.js");/**
 * @class JsonRpcError
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP 1474.
 * Permits any integer error code.
 */var EthereumRpcError=/*#__PURE__*/function(_Error){_inheritsLoose(EthereumRpcError,_Error);/**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */function EthereumRpcError(code,message,data){var _this;if(!Number.isInteger(code))throw new Error("\"code\" must be an integer.");if(!message||typeof message!=="string")throw new Error("\"message\" must be a nonempty string.");_this=_Error.call(this,message)||this;_this.code=code;if(data!==undefined)_this.data=data;return _this}/**
   * Returns a plain object with all public class properties.
   * 
   * @returns {object} The serialized error. 
   */var _proto=EthereumRpcError.prototype;_proto.serialize=function serialize(){var serialized={code:this.code,message:this.message};if(this.data!==undefined)serialized.data=this.data;if(this.stack)serialized.stack=this.stack;return serialized}/**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   * 
   * @returns {string} The serialized error as a string.
   */;_proto.toString=function toString(){return safeStringify(this.serialize(),stringifyReplacer,2)};return EthereumRpcError}(_wrapNativeSuper(Error));/**
 * @class EthereumRpcError
 * Error subclass implementing Ethereum Provider errors per EIP 1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */var EthereumProviderError=/*#__PURE__*/function(_EthereumRpcError){_inheritsLoose(EthereumProviderError,_EthereumRpcError);/**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */function EthereumProviderError(code,message,data){if(!isValidEthProviderCode(code)){throw new Error("\"code\" must be an integer such that: 1000 <= code <= 4999")}return _EthereumRpcError.call(this,code,message,data)||this}return EthereumProviderError}(EthereumRpcError);// Internal
function isValidEthProviderCode(code){return Number.isInteger(code)&&code>=1000&&code<=4999}function stringifyReplacer(_,value){if(value==="[Circular]"){return}return value}// Exports
module.exports={EthereumRpcError:EthereumRpcError,EthereumProviderError:EthereumProviderError/***/}},/***/"./node_modules/eth-json-rpc-errors/src/errorCodes.json":/*!**************************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errorCodes.json ***!
  \**************************************************************/ /*! exports provided: rpc, provider, default */ /***/function node_modulesEthJsonRpcErrorsSrcErrorCodesJson(module){module.exports=JSON.parse("{\"rpc\":{\"invalidInput\":-32000,\"resourceNotFound\":-32001,\"resourceUnavailable\":-32002,\"transactionRejected\":-32003,\"methodNotSupported\":-32004,\"parse\":-32700,\"invalidRequest\":-32600,\"methodNotFound\":-32601,\"invalidParams\":-32602,\"internal\":-32603},\"provider\":{\"userRejectedRequest\":4001,\"unauthorized\":4100,\"unsupportedMethod\":4200}}");/***/},/***/"./node_modules/eth-json-rpc-errors/src/errorValues.json":/*!***************************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errorValues.json ***!
  \***************************************************************/ /*! exports provided: 4001, 4100, 4200, -32700, -32600, -32601, -32602, -32603, -32000, -32001, -32002, -32003, -32004, default */ /***/function node_modulesEthJsonRpcErrorsSrcErrorValuesJson(module){module.exports=JSON.parse("{\"4001\":{\"standard\":\"EIP 1193\",\"message\":\"User rejected the request.\"},\"4100\":{\"standard\":\"EIP 1193\",\"message\":\"The requested account and/or method has not been authorized by the user.\"},\"4200\":{\"standard\":\"EIP 1193\",\"message\":\"The requested method is not supported by this Ethereum provider.\"},\"-32700\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.\"},\"-32600\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The JSON sent is not a valid Request object.\"},\"-32601\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"The method does not exist / is not available.\"},\"-32602\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Invalid method parameter(s).\"},\"-32603\":{\"standard\":\"JSON RPC 2.0\",\"message\":\"Internal JSON-RPC error.\"},\"-32000\":{\"standard\":\"EIP 1474\",\"message\":\"Invalid input.\"},\"-32001\":{\"standard\":\"EIP 1474\",\"message\":\"Resource not found.\"},\"-32002\":{\"standard\":\"EIP 1474\",\"message\":\"Resource unavailable.\"},\"-32003\":{\"standard\":\"EIP 1474\",\"message\":\"Transaction rejected.\"},\"-32004\":{\"standard\":\"EIP 1474\",\"message\":\"Method not supported.\"}}");/***/},/***/"./node_modules/eth-json-rpc-errors/src/errors.js":/*!********************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/errors.js ***!
  \********************************************************/ /*! no static exports found */ /***/function node_modulesEthJsonRpcErrorsSrcErrorsJs(module,exports,__webpack_require__){var _webpack_require__3=__webpack_require__(/*! ./classes */"./node_modules/eth-json-rpc-errors/src/classes.js"),EthereumRpcError=_webpack_require__3.EthereumRpcError,EthereumProviderError=_webpack_require__3.EthereumProviderError;var _webpack_require__4=__webpack_require__(/*! ./utils */"./node_modules/eth-json-rpc-errors/src/utils.js"),getMessageFromCode=_webpack_require__4.getMessageFromCode;var ERROR_CODES=__webpack_require__(/*! ./errorCodes.json */"./node_modules/eth-json-rpc-errors/src/errorCodes.json");module.exports={rpc:{/**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */parse:function parse(opts){return getEthJsonRpcError(ERROR_CODES.rpc.parse,opts)},/**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */invalidRequest:function invalidRequest(opts){return getEthJsonRpcError(ERROR_CODES.rpc.invalidRequest,opts)},/**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */invalidParams:function invalidParams(opts){return getEthJsonRpcError(ERROR_CODES.rpc.invalidParams,opts)},/**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */methodNotFound:function methodNotFound(opts){return getEthJsonRpcError(ERROR_CODES.rpc.methodNotFound,opts)},/**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */internal:function internal(opts){return getEthJsonRpcError(ERROR_CODES.rpc.internal,opts)},/**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP 1474.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */server:function server(opts){if(!opts||typeof opts!=="object"||Array.isArray(opts)){throw new Error("Ethereum RPC Server errors must provide single object argument.")}var code=opts.code;if(!Number.isInteger(code)||code>-32005||code<-32099){throw new Error("\"code\" must be an integer such that: -32099 <= code <= -32005")}return getEthJsonRpcError(code,opts)},/**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */invalidInput:function invalidInput(opts){return getEthJsonRpcError(ERROR_CODES.rpc.invalidInput,opts)},/**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */resourceNotFound:function resourceNotFound(opts){return getEthJsonRpcError(ERROR_CODES.rpc.resourceNotFound,opts)},/**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */resourceUnavailable:function resourceUnavailable(opts){return getEthJsonRpcError(ERROR_CODES.rpc.resourceUnavailable,opts)},/**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */transactionRejected:function transactionRejected(opts){return getEthJsonRpcError(ERROR_CODES.rpc.transactionRejected,opts)},/**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */methodNotSupported:function methodNotSupported(opts){return getEthJsonRpcError(ERROR_CODES.rpc.methodNotSupported,opts)}},provider:{/**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */userRejectedRequest:function userRejectedRequest(opts){return getEthProviderError(ERROR_CODES.provider.userRejectedRequest,opts)},/**
     * Get an Ethereum Provider Unauthorized (4100) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */unauthorized:function unauthorized(opts){return getEthProviderError(ERROR_CODES.provider.unauthorized,opts)},/**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */unsupportedMethod:function unsupportedMethod(opts){return getEthProviderError(ERROR_CODES.provider.unsupportedMethod,opts)},/**
     * Get a custom Ethereum Provider error.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} opts.message - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */custom:function custom(opts){if(!opts||typeof opts!=="object"||Array.isArray(opts)){throw new Error("Ethereum Provider custom errors must provide single object argument.")}var code=opts.code,message=opts.message,data=opts.data;if(!message||typeof message!=="string")throw new Error("\"message\" must be a nonempty string");return new EthereumProviderError(code,message,data)}}// Internal
};function getEthJsonRpcError(code,opts){var _validateOpts=validateOpts(opts),message=_validateOpts[0],data=_validateOpts[1];return new EthereumRpcError(code,message||getMessageFromCode(code),data)}function getEthProviderError(code,opts){var _validateOpts2=validateOpts(opts),message=_validateOpts2[0],data=_validateOpts2[1];return new EthereumProviderError(code,message||getMessageFromCode(code),data)}function validateOpts(opts){var message,data;if(opts){if(typeof opts==="string"){message=opts}else if(typeof opts==="object"&&!Array.isArray(opts)){message=opts.message;data=opts.data}}return[message,data]}/***/},/***/"./node_modules/eth-json-rpc-errors/src/utils.js":/*!*******************************************************!*\
  !*** ./node_modules/eth-json-rpc-errors/src/utils.js ***!
  \*******************************************************/ /*! no static exports found */ /***/function node_modulesEthJsonRpcErrorsSrcUtilsJs(module,exports,__webpack_require__){var errorValues=__webpack_require__(/*! ./errorValues.json */"./node_modules/eth-json-rpc-errors/src/errorValues.json");var FALLBACK_ERROR_CODE=__webpack_require__(/*! ./errorCodes.json */"./node_modules/eth-json-rpc-errors/src/errorCodes.json").rpc.internal;var _webpack_require__5=__webpack_require__(/*! ./classes */"./node_modules/eth-json-rpc-errors/src/classes.js"),EthereumRpcError=_webpack_require__5.EthereumRpcError;var JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.";var FALLBACK_MESSAGE="Unspecified error message. This is a bug, please report it.";var FALLBACK_ERROR={code:FALLBACK_ERROR_CODE,message:getMessageFromCode(FALLBACK_ERROR_CODE)/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 * 
 * @param {number} code - The integer error code
 * @param {string} fallbackMessage - The fallback message
 * @return {string} The corresponding message or the fallback message
 */};function getMessageFromCode(code,fallbackMessage){if(fallbackMessage===void 0){fallbackMessage=FALLBACK_MESSAGE}if(Number.isInteger(code)){var codeString=code.toString();if(errorValues[codeString])return errorValues[codeString].message;if(isJsonRpcServerError(code))return JSON_RPC_SERVER_ERROR_MESSAGE;// TODO: allow valid codes and messages to be extended
// // EIP 1193 Status Codes
// if (code >= 4000 && code <= 4999) return Something?
}return fallbackMessage}/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 * 
 * @param {number} code - The code to check
 * @return {boolean} true if the code is valid, false otherwise.
 */function isValidCode(code){if(!Number.isInteger(code))return false;var codeString=code.toString();if(errorValues[codeString])return true;if(isJsonRpcServerError(code))return true;// TODO: allow valid codes and messages to be extended
// // EIP 1193 Status Codes
// if (code >= 4000 && code <= 4999) return true
return false}/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 * Adds a 'stack' property if it exists on the given error.
 *
 * @param {any} error - The error to serialize.
 * @param {object} fallbackError - The custom fallback error values if the
 * given error is invalid.
 * @return {object} A standardized error object.
 */function serializeError(error,fallbackError){if(fallbackError===void 0){fallbackError=FALLBACK_ERROR}if(!fallbackError||!Number.isInteger(fallbackError.code)||typeof fallbackError.message!=="string"){throw new Error("fallbackError must contain integer number code and string message.")}if(error instanceof EthereumRpcError){return error.serialize()}var serialized={};if(error&&isValidCode(error.code)){serialized.code=error.code;if(error.message&&typeof error.message==="string"){serialized.message=error.message;if(error.hasOwnProperty("data"))serialized.data=error.data}else{serialized.message=getMessageFromCode(serialized.code);serialized.data={originalError:assignOriginalError(error)}}}else{serialized.code=fallbackError.code;serialized.message=error&&error.message?error.message:fallbackError.message;serialized.data={originalError:assignOriginalError(error)}}if(error&&error.stack)serialized.stack=error.stack;return serialized}// Internal
function isJsonRpcServerError(code){return code>=-32099&&code<=-32000}function assignOriginalError(error){if(error&&typeof error==="object"&&!Array.isArray(error)){return Object.assign({},error)}return error}// Exports
module.exports={getMessageFromCode:getMessageFromCode,isValidCode:isValidCode,serializeError:serializeError,JSON_RPC_SERVER_ERROR_MESSAGE:JSON_RPC_SERVER_ERROR_MESSAGE/***/}},/***/"./node_modules/fast-safe-stringify/index.js":/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/ /*! no static exports found */ /***/function node_modulesFastSafeStringifyIndexJs(module,exports){module.exports=stringify;stringify.default=stringify;stringify.stable=deterministicStringify;stringify.stableStringify=deterministicStringify;var arr=[];var replacerStack=[];// Regular stringify
function stringify(obj,replacer,spacer){decirc(obj,"",[],undefined);var res;if(replacerStack.length===0){res=JSON.stringify(obj,replacer,spacer)}else{res=JSON.stringify(obj,replaceGetterValues(replacer),spacer)}while(arr.length!==0){var part=arr.pop();if(part.length===4){Object.defineProperty(part[0],part[1],part[3])}else{part[0][part[1]]=part[2]}}return res}function decirc(val,k,stack,parent){var i;if(typeof val==="object"&&val!==null){for(i=0;i<stack.length;i++){if(stack[i]===val){var propertyDescriptor=Object.getOwnPropertyDescriptor(parent,k);if(propertyDescriptor.get!==undefined){if(propertyDescriptor.configurable){Object.defineProperty(parent,k,{value:"[Circular]"});arr.push([parent,k,val,propertyDescriptor])}else{replacerStack.push([val,k])}}else{parent[k]="[Circular]";arr.push([parent,k,val])}return}}stack.push(val);// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(Array.isArray(val)){for(i=0;i<val.length;i++){decirc(val[i],i,stack,val)}}else{var keys=Object.keys(val);for(i=0;i<keys.length;i++){var key=keys[i];decirc(val[key],key,stack,val)}}stack.pop()}}// Stable-stringify
function compareFunction(a,b){if(a<b){return-1}if(a>b){return 1}return 0}function deterministicStringify(obj,replacer,spacer){var tmp=deterministicDecirc(obj,"",[],undefined)||obj;var res;if(replacerStack.length===0){res=JSON.stringify(tmp,replacer,spacer)}else{res=JSON.stringify(tmp,replaceGetterValues(replacer),spacer)}while(arr.length!==0){var part=arr.pop();if(part.length===4){Object.defineProperty(part[0],part[1],part[3])}else{part[0][part[1]]=part[2]}}return res}function deterministicDecirc(val,k,stack,parent){var i;if(typeof val==="object"&&val!==null){for(i=0;i<stack.length;i++){if(stack[i]===val){var propertyDescriptor=Object.getOwnPropertyDescriptor(parent,k);if(propertyDescriptor.get!==undefined){if(propertyDescriptor.configurable){Object.defineProperty(parent,k,{value:"[Circular]"});arr.push([parent,k,val,propertyDescriptor])}else{replacerStack.push([val,k])}}else{parent[k]="[Circular]";arr.push([parent,k,val])}return}}if(typeof val.toJSON==="function"){return}stack.push(val);// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(Array.isArray(val)){for(i=0;i<val.length;i++){deterministicDecirc(val[i],i,stack,val)}}else{// Create a temporary object in the required way
var tmp={};var keys=Object.keys(val).sort(compareFunction);for(i=0;i<keys.length;i++){var key=keys[i];deterministicDecirc(val[key],key,stack,val);tmp[key]=val[key]}if(parent!==undefined){arr.push([parent,k,val]);parent[k]=tmp}else{return tmp}}stack.pop()}}// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues(replacer){replacer=replacer!==undefined?replacer:function(k,v){return v};return function(key,val){if(replacerStack.length>0){for(var i=0;i<replacerStack.length;i++){var part=replacerStack[i];if(part[1]===key&&part[0]===val){val="[Circular]";replacerStack.splice(i,1);break}}}return replacer.call(this,key,val)}}/***/},/***/"./node_modules/json-stable-stringify/index.js":/*!*****************************************************!*\
  !*** ./node_modules/json-stable-stringify/index.js ***!
  \*****************************************************/ /*! no static exports found */ /***/function node_modulesJsonStableStringifyIndexJs(module,exports,__webpack_require__){var json=typeof JSON!=="undefined"?JSON:__webpack_require__(/*! jsonify */"./node_modules/jsonify/index.js");module.exports=function(obj,opts){if(!opts)opts={};if(typeof opts==="function")opts={cmp:opts};var space=opts.space||"";if(typeof space==="number")space=Array(space+1).join(" ");var cycles=typeof opts.cycles==="boolean"?opts.cycles:false;var replacer=opts.replacer||function(key,value){return value};var cmp=opts.cmp&&function(f){return function(node){return function(a,b){var aobj={key:a,value:node[a]};var bobj={key:b,value:node[b]};return f(aobj,bobj)}}}(opts.cmp);var seen=[];return function stringify(parent,key,node,level){var indent=space?"\n"+new Array(level+1).join(space):"";var colonSeparator=space?": ":":";if(node&&node.toJSON&&typeof node.toJSON==="function"){node=node.toJSON()}node=replacer.call(parent,key,node);if(node===undefined){return}if(typeof node!=="object"||node===null){return json.stringify(node)}if(isArray(node)){var out=[];for(var i=0;i<node.length;i++){var item=stringify(node,i,node[i],level+1)||json.stringify(null);out.push(indent+space+item)}return"["+out.join(",")+indent+"]"}else{if(seen.indexOf(node)!==-1){if(cycles)return json.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}else seen.push(node);var keys=objectKeys(node).sort(cmp&&cmp(node));var out=[];for(var i=0;i<keys.length;i++){var key=keys[i];var value=stringify(node,key,node[key],level+1);if(!value)continue;var keyValue=json.stringify(key)+colonSeparator+value;;out.push(indent+space+keyValue)}seen.splice(seen.indexOf(node),1);return"{"+out.join(",")+indent+"}"}}({"":obj},"",obj,0)};var isArray=Array.isArray||function(x){return{}.toString.call(x)==="[object Array]"};var objectKeys=Object.keys||function(obj){var has=Object.prototype.hasOwnProperty||function(){return true};var keys=[];for(var key in obj){if(has.call(obj,key))keys.push(key)}return keys};/***/},/***/"./node_modules/jsonify/index.js":/*!***************************************!*\
  !*** ./node_modules/jsonify/index.js ***!
  \***************************************/ /*! no static exports found */ /***/function node_modulesJsonifyIndexJs(module,exports,__webpack_require__){exports.parse=__webpack_require__(/*! ./lib/parse */"./node_modules/jsonify/lib/parse.js");exports.stringify=__webpack_require__(/*! ./lib/stringify */"./node_modules/jsonify/lib/stringify.js");/***/},/***/"./node_modules/jsonify/lib/parse.js":/*!*******************************************!*\
  !*** ./node_modules/jsonify/lib/parse.js ***!
  \*******************************************/ /*! no static exports found */ /***/function node_modulesJsonifyLibParseJs(module,exports){var at,// The index of the current character
ch,// The current character
escapee={"\"":"\"","\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},text,error=function error(m){// Call error when something is wrong.
throw{name:"SyntaxError",message:m,at:at,text:text}},next=function next(c){// If a c parameter is provided, verify that it matches the current character.
if(c&&c!==ch){error("Expected '"+c+"' instead of '"+ch+"'")}// Get the next character. When there are no more characters,
// return the empty string.
ch=text.charAt(at);at+=1;return ch},number=function number(){// Parse a number value.
var number,string="";if(ch==="-"){string="-";next("-")}while(ch>="0"&&ch<="9"){string+=ch;next()}if(ch==="."){string+=".";while(next()&&ch>="0"&&ch<="9"){string+=ch}}if(ch==="e"||ch==="E"){string+=ch;next();if(ch==="-"||ch==="+"){string+=ch;next()}while(ch>="0"&&ch<="9"){string+=ch;next()}}number=+string;if(!isFinite(number)){error("Bad number")}else{return number}},string=function string(){// Parse a string value.
var hex,i,string="",uffff;// When parsing for string values, we must look for " and \ characters.
if(ch==="\""){while(next()){if(ch==="\""){next();return string}else if(ch==="\\"){next();if(ch==="u"){uffff=0;for(i=0;i<4;i+=1){hex=parseInt(next(),16);if(!isFinite(hex)){break}uffff=uffff*16+hex}string+=String.fromCharCode(uffff)}else if(typeof escapee[ch]==="string"){string+=escapee[ch]}else{break}}else{string+=ch}}}error("Bad string")},white=function white(){// Skip whitespace.
while(ch&&ch<=" "){next()}},word=function word(){// true, false, or null.
switch(ch){case"t":next("t");next("r");next("u");next("e");return true;case"f":next("f");next("a");next("l");next("s");next("e");return false;case"n":next("n");next("u");next("l");next("l");return null;}error("Unexpected '"+ch+"'")},value,// Place holder for the value function.
array=function array(){// Parse an array value.
var array=[];if(ch==="["){next("[");white();if(ch==="]"){next("]");return array;// empty array
}while(ch){array.push(value());white();if(ch==="]"){next("]");return array}next(",");white()}}error("Bad array")},object=function object(){// Parse an object value.
var key,object={};if(ch==="{"){next("{");white();if(ch==="}"){next("}");return object;// empty object
}while(ch){key=string();white();next(":");if(Object.hasOwnProperty.call(object,key)){error("Duplicate key \""+key+"\"")}object[key]=value();white();if(ch==="}"){next("}");return object}next(",");white()}}error("Bad object")};value=function value(){// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.
white();switch(ch){case"{":return object();case"[":return array();case"\"":return string();case"-":return number();default:return ch>="0"&&ch<="9"?number():word();}};// Return the json_parse function. It will have access to all of the above
// functions and variables.
module.exports=function(source,reviver){var result;text=source;at=0;ch=" ";result=value();white();if(ch){error("Syntax error")}// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible
// transformation, starting with a temporary root object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.
return typeof reviver==="function"?function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}({"":result},""):result};/***/},/***/"./node_modules/jsonify/lib/stringify.js":/*!***********************************************!*\
  !*** ./node_modules/jsonify/lib/stringify.js ***!
  \***********************************************/ /*! no static exports found */ /***/function node_modulesJsonifyLibStringifyJs(module,exports){var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={// table of character substitutions
"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},rep;function quote(string){// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
escapable.lastIndex=0;return escapable.test(string)?"\""+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+"\"":"\""+string+"\""}function str(key,holder){// Produce a string from holder[key].
var i,// The loop counter.
k,// The member key.
v,// The member value.
length,mind=gap,partial,value=holder[key];// If the value has a toJSON method, call it to obtain a replacement value.
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.
if(typeof rep==="function"){value=rep.call(holder,key,value)}// What happens next depends on the value's type.
switch(typeof value){case"string":return quote(value);case"number":// JSON numbers must be finite. Encode non-finite numbers as null.
return isFinite(value)?String(value):"null";case"boolean":case"null":// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.
return String(value);case"object":if(!value)return"null";gap+=indent;partial=[];// Array.isArray
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}// Join all of the elements together, separated with commas, and
// wrap them in brackets.
v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}// If the replacer is an array, use it to select the members to be
// stringified.
if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{// Otherwise, iterate through all of the keys in the object.
for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}// Join all of the member texts together, separated with commas,
// and wrap them in braces.
v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}module.exports=function(value,replacer,space){var i;gap="";indent="";// If the space parameter is a number, make an indent string containing that
// many spaces.
if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}// If the space parameter is a string, it will be used as the indent string.
else if(typeof space==="string"){indent=space}// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.
rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.
return str("",{"":value})};/***/},/***/"./node_modules/safe-event-emitter/index.js":/*!**************************************************!*\
  !*** ./node_modules/safe-event-emitter/index.js ***!
  \**************************************************/ /*! no static exports found */ /***/function node_modulesSafeEventEmitterIndexJs(module,exports,__webpack_require__){var util=__webpack_require__(/*! util */"./node_modules/util/util.js");var EventEmitter=__webpack_require__(/*! events/ */"./node_modules/events/events.js");var R=typeof Reflect==="object"?Reflect:null;var ReflectApply=R&&typeof R.apply==="function"?R.apply:function ReflectApply(target,receiver,args){return Function.prototype.apply.call(target,receiver,args)};module.exports=SafeEventEmitter;function SafeEventEmitter(){EventEmitter.call(this)}util.inherits(SafeEventEmitter,EventEmitter);SafeEventEmitter.prototype.emit=function(type){// copied from https://github.com/Gozala/events/blob/master/events.js
// modified lines are commented with "edited:"
var args=[];for(var i=1;i<arguments.length;i++){args.push(arguments[i])}var doError=type==="error";var events=this._events;if(events!==undefined)doError=doError&&events.error===undefined;else if(!doError)return false;// If there is no 'error' event listener then throw.
if(doError){var er;if(args.length>0)er=args[0];if(er instanceof Error){// Note: The comments on the `throw` lines are intentional, they show
// up in Node's output if this results in an unhandled exception.
throw er;// Unhandled 'error' event
}// At least give some kind of context to the user
var err=new Error("Unhandled error."+(er?" ("+er.message+")":""));err.context=er;throw err;// Unhandled 'error' event
}var handler=events[type];if(handler===undefined)return false;if(typeof handler==="function"){// edited: using safeApply
safeApply(handler,this,args)}else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){// edited: using safeApply
safeApply(listeners[i],this,args)}}return true};function safeApply(handler,context,args){try{ReflectApply(handler,context,args)}catch(err){// throw error after timeout so as not to interupt the stack
setTimeout(function(){throw err})}}function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i){copy[i]=arr[i]}return copy}/***/}}]);//# sourceMappingURL=default~authereum~ledger-a060ac3c-js~toruslabs-torus-embed~trezor-891c3928-js-es2015.js.map
//# sourceMappingURL=default~authereum~ledger-a060ac3c-js~toruslabs-torus-embed~trezor-891c3928-js-es5.js.map