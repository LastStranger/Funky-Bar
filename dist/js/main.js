module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"scrollPath":"GuyM-NPg28dasQMUM2Ne2","scrollbar":"_2Qg1ECpxst8WgzuhQVmOdc","animate":"_1dbZ610zXaQgNoF1Xu-fmX"};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/fancyBar.css
var fancyBar = __webpack_require__(1);
var fancyBar_default = /*#__PURE__*/__webpack_require__.n(fancyBar);

// CONCATENATED MODULE: ./src/components/FancyBar.js


var id = null;
var FancyBar = Object(external_react_["memo"])(function () {
  Object(external_react_["useLayoutEffect"])(function () {
    var progress = document.getElementsByClassName(fancyBar_default.a.scrollbar)[0];

    window.onscroll = function () {
      console.log('haha');
      cancelAnimationFrame(id);
      var documentHeight = document.body.scrollHeight - window.innerHeight;
      var progressHeight = window.scrollY / documentHeight * 100;
      id = requestAnimationFrame(function () {
        progress.style.height = progressHeight + '%';
      });
    };

    return function () {
      window.onscroll = null;
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: fancyBar_default.a.scrollbar
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: fancyBar_default.a.scrollPath
  }));
}, function () {
  return true;
});
/* harmony default export */ var components_FancyBar = (FancyBar);
// CONCATENATED MODULE: ./src/index.js
// export {default as FancyBar} from './components/fancyBar.js';
// import "regenerator-runtime/runtime"
// import "core-js";

 //
// const FancyBar = require('./components/FancyBar.js');
// module.exports = {
//     FancyBar
// };
// const Dd = () => <div>haha</div>;

var src_FunkyBar = function FunkyBar() {
  return /*#__PURE__*/external_react_default.a.createElement(components_FancyBar, null);
}; // export default FunkyBar;
// export default Dd;
// export function Dd(){
//     return (
//         <div>hahaha</div>
//     )
// }
//
// function Hello(){
//     return (
//         <div>xxxx哈哈哈呵呵</div>
//     )
// }


/* harmony default export */ var src = __webpack_exports__["default"] = (src_FunkyBar); // export default Hello;

/***/ })
/******/ ]);