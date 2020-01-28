module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    const style = {
      position: "relative",
      minHeight: "100vh"
    };
    return __jsx("div", {
      style: style,
      className: "jsx-1372277327",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1372277327",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "DMK Portal"), __jsx("link", {
      href: "/images/icon.png",
      rel: "icon",
      className: "jsx-1372277327",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx(ContentContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "1372277327",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}.bg-color{background-color:#F7F7FB;}.nav-container{width:100%;background-color:#AB1B23;height:58px;}.nav-img{width:50px;margin-left:20px;margin-top:6px;}.content-container{width:100%;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:700px;max-width:1200px;margin-bottom:50px;}.column{width:100%;}.content-box{background-color:white;width:90%;box-shadow:0 4px 4px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);display:block;margin:0px auto;margin-top:20px;overflow:scroll;}.box-title{text-align:center;padding-top:10px;margin:0px;font-weight:400;font-size:20px;}.box-content{padding-top:10px;width:95%;display:block;margin:0px auto;position:relative;}p{text-align:center;color:grey;font-weight:300;margin-top:3px;margin-bottom:3px;}.attendance-graph{padding-top:0px;margin:0px auto;display:block;width:40%;max-width:200px;margin-bottom:10px;}.spotlight-img:hover{box-shadow:4px 4px 4px 0 rgba(0,0,0,0.2),-10px 6px 20px 0 rgba(0,0,0,0.19);cursor:pointer;}.spotlight-img{width:43%;margin:0px auto;display:block;margin-bottom:25px;margin-top:20px;border-radius:50%;-webkit-transition-duration:0.2s;transition-duration:0.2s;min-width:120px;}.brother-description{-webkit-transition-duration:0.2s;transition-duration:0.2s;}.brother-description:hover{cursor:pointer;color:rgb(50,50,50);}.events-container{margin-top:40px;}.event-wrapper{min-height:70px;position:relative;}.event-item{margin-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer;border-radius:10px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px;width:calc(100% - 20px);}.event-item:hover{background-color:rgb(235,235,235);}.news-item-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;padding-top:7px;padding-bottom:7px;padding-right:2px;border-radius:10px;cursor:pointer;min-height:50px;}.news-item-container:hover{background-color:rgb(235,235,235);}.item-img-wrapper{width:30%;position:relative;}.item-img{position:relative;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.item-text-wrapper{width:70%;position:relative;}.item-content{position:relative;top:50%;-webkit-transform:translateY(-70%);-ms-transform:translateY(-70%);transform:translateY(-70%);}.hr{border:0.6px solid rgb(215,215,215);margin:3px auto;}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content{background-color:#fefefe;margin:auto;border:1px solid white;width:80%;max-width:500px;position:relative;padding-bottom:40px;padding-top:3%;}.modal-img{width:40%;display:block;margin:0px auto;min-width:150px;max-width:80%;}.modal-text-wrapper{width:77%;padding-left:10%;padding-right:10%;margin:0px auto;display:block;}.modal-title{text-align:center;}.modal-text{text-align:left;}.close{color:#aaaaaa;float:right;font-size:35px;font-weight:bold;position:absolute;right:10px;top:0px;}.close:hover,.close:focus{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-btn{text-align:center;display:block;margin:0px auto;margin-top:30px;height:30px;font-size:16px;}.date-container{width:50px;height:50px;background-color:#AB1B23;border-radius:10px;}.event-name{margin-top:5px;margin-left:10px;font-weight:300;margin-bottom:0px;}.event-time{text-align:left;margin-left:10px;}.month{margin-top:3px;margin-bottom:0px;color:white;font-size:12px;}.day{color:white;margin-top:0px;font-size:25px;}.input-wrapper{width:90%;display:block;margin:0px auto;position:relative;}.slack-input{background-color:rgb(242,242,242);resize:none;font-size:17px;width:92%;height:70px;border:none;border-radius:4px;margin-bottom:30px;padding:10px;}button{font-size:17px;border:none;background-color:rgb(191,49,56);color:white;width:80px;height:25px;cursor:pointer;outline:none;border-radius:4px;}.slack-send{position:absolute;bottom:0;right:3px;}button:hover{background-color:#AB1B23;}*{margin:0;padding:0;}.rate{margin-top:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;height:46px;padding:0 10px;}.rate:not(:checked)>input{position:absolute;top:-9999px;}.rate:not(:checked)>label{float:right;width:1em;overflow:hidden;white-space:nowrap;cursor:pointer;font-size:30px;color:#ccc;}.rate:not(:checked)>label:before{content:'\u2605 ';}.rate>input:checked~label{color:#ffc700;}.rate:not(:checked)>label:hover,.rate:not(:checked)>label:hover~label{color:#deb217;}.rate>input:checked+label:hover,.rate>input:checked+label:hover~label,.rate>input:checked~label:hover,.rate>input:checked~label:hover~label,.rate>label:hover~input:checked~label{color:#c59b08;}@media only screen and (max-width:790px){.content-container{display:block;max-width:500px;height:auto;}.content-box{max-height:400px;}.slack-input{margin-bottom:50px;}.slack-send{bottom:20px;right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CVyxBQUcwQixBQVFjLEFBSWQsQUFNQSxBQU1BLEFBVUEsQUFJWSxBQVVMLEFBUUQsQUFRQyxBQVFGLEFBU2tFLEFBS3hFLEFBV2UsQUFJVixBQUtDLEFBSUEsQUFLRCxBQWNxQixBQUl2QixBQVl1QixBQUkxQixBQUtRLEFBUVIsQUFLUSxBQU1vQixBQU12QixBQXVCVSxBQVdmLEFBUUEsQUFRUSxBQUlGLEFBTUYsQUFVSCxBQU1PLEFBU1AsQUFPSSxBQU9DLEFBS0QsQUFPSCxBQU1GLEFBTzBCLEFBWXJCLEFBWUcsQUFNTyxBQUloQixBQUlPLEFBUUQsQUFJTixBQVNFLEFBR0MsQUFJQSxBQU9BLEFBTUksQUFLRyxBQUdFLEFBR1AsU0F2REosQ0EzUE0sQUErREUsQUFhQSxBQW1ESixBQVFHLEFBMkVILENBeFNXLEFBWUEsQUFNUixBQU1ELEFBVWxCLEFBdU51QixBQWVULENBMEJHLEFBK0RWLEFBd0NRLENBL0JyQixDQTNIb0IsQUE4SHBCLEFBSUEsQUFPQSxBQU0wQixDQXpSSSxBQWNULEFBaUVILEFBMkZPLEFBWUMsQUFnQ04sQ0FuUEksQUFrQ2xCLEFBSW9CLEFBMkhwQixBQTZDbUIsQUErREosQ0E3UkgsQUEyVVYsQ0FuVmlCLEFBZ0JOLEFBMEZELEFBYUYsQUE4RFYsQUEwQmdCLEFBd0VMLEFBc0JGLENBWFQsQUFvREUsR0FwQ1csQ0E1VEQsQUFtT2UsQUFpSXpCLENBcExnQixBQW1GQSxDQWpTbEIsQUE4S29CLEFBb0JOLEFBbUlkLENBdFBnQixBQWlGYSxBQXdFWixDQXZORixBQWdDQyxBQXFLSSxBQXFFSCxBQXlCbUIsQUFZeEIsQ0FyVEssQUFtSWpCLEFBS1csQUFRWCxDQWxHa0IsQ0E2UnhCLEFBaUNzQixFQXRUQSxBQXVMRSxBQWdCQSxDQXpPNEQsQUFnUDlFLEFBS2MsQ0E3S2QsQUFrQkEsQUFnQkEsQUE4SmMsQ0E5UEQsQUFxRGIsQ0FyR3NJLEFBWXhILEFBZ0tJLENBakJSLEFBK0NlLEFBOEh6QixDQTBCZ0IsRUEzUUssQUErSEgsQUFtRkUsQ0FoUEYsQUF1TEMsQ0FtRG5CLEFBNEZFLENBNVdGLEFBb0tTLEVBdEhRLEFBMkZpQixBQWtFaEIsQUE4REQsQ0EzT0MsQUF3Qk4sQUFzT0ssRUFsU2pCLEFBbVBrQixBQVNHLEFBT0QsRUF4RlosRUFYUixJQW5Ha0IsQUErR0wsQUE4QkcsQ0E3SkksQUF5U1IsQ0FuUVosQUFpSm9CLEFBeURwQixDQWxOa0IsQUFvT0osQ0ExUE0sQUF5SVIsQUFrRlosQ0E5RGdCLEFBMEJDLEFBdURMLENBOVBLLEVBK01ILEVBZ0JkLENBdEZjLEFBK0VkLEdBOURrQixBQVlsQixDQXlGYyxBQVlELENBbFBRLEFBeVJULEVBaE9pQixDQXpFN0IsQUFxQmlCLEFBU0csQUF1SXBCLENBa0JhLEFBUWIsQUFRaUIsQ0EvTWpCLENBZ0JBLENBMEhnQixHQWlJRixDQVpBLEdBckdNLENBc0NWLEFBa0hGLEVBbFBxQixDQWxDN0IsQUFvUXlCLENBelF6QixBQXVMQSxFQXpLMkIsQUFxR0ssQ0FnSWYsQ0EzRWpCLEFBK0RvQixHQW1EMUIsR0E3VXNDLENBY2hCLEVBdUtNLEtBa0hQLElBWk0sR0E1UUgsR0FnSWxCLEVBeUJzQyxDQWdJbEIsRUFsSEgsUUF0S0MsQUE0UUgsT0FyR2YsQ0FrSEEsS0FaQSxHQTVRa0IsRUFtSGxCLENBbEVrQixHQXdHbEIsVUF4SkEsR0FpREEsQ0ExRnFDLFdBbUlWLFVBaU5FLEtBbE9GLFNBakgzQixhQXVCZSxhQUNJLFFBMkdELFNBMUdHLE1BeUZKLENBa0JJLFlBMUdyQixFQXlGcUIsS0FrQkQsVUErTU4sSUFoT00sSUFrQkMsSUErTUosVUFoT1AsS0FrQk8sQUErTWpCLEdBaE82QixZQWtCWCxnQkFDbEIsaUVBbEJlLGFBQ1csd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5ETUsgUG9ydGFsPC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPENvbnRlbnRDb250YWluZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmctY29sb3Ige1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIxQjIzO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250ZW50LWJveCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJveC10aXRsZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3gtY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hdHRlbmRhbmNlLWdyYXBoIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcG90bGlnaHQtaW1nOmhvdmVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIC0xMHB4IDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BvdGxpZ2h0LWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MyU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5icm90aGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJyb3RoZXItZGVzY3JpcHRpb246aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC1pdGVtIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3cy1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXdzLWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS1pbWctd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW1nIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0tdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaHIge1xuICAgICAgICAgICAgICBib3JkZXI6IDAuNnB4IHNvbGlkIHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgIC8qIFNpdCBvbiB0b3AgKi9cbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggKi9cbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAvKiBGdWxsIGhlaWdodCAqL1xuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogTW9kYWwgQ29udGVudCAqL1xuXG4gICAgICAgICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3NyU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC10ZXh0IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuXG4gICAgICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgICBjb2xvcjogI2FhYWFhYTtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1idG4ge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRhdGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FCMUIyMztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50LW5hbWUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC10aW1lIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRheSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsYWNrLWlucHV0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDQ5LCA1Nik7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGFjay1zZW5kIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQjFCMjM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZTpub3QoOmNoZWNrZWQpID4gaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgdG9wOi05OTk5cHg7XG4gICAgICB9XG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgd2lkdGg6MWVtO1xuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgY29sb3I6I2NjYztcbiAgICAgIH1cbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ+KYhSAnO1xuICAgICAgfVxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICNmZmM3MDA7XG4gICAgICB9XG4gICAgICAucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogI2RlYjIxNztcbiAgICAgIH1cbiAgICAgIC5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxuICAgICAgLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcbiAgICAgIC5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxuICAgICAgLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcbi5yYXRlID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICNjNTliMDg7XG4gICAgICB9XG4gICAgICBcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xuICAgICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb250ZW50LWJveCB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNsYWNrLWlucHV0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zbGFjay1zZW5kIHtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGxvZ291dCgpIHtcbiAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xvZ2luXCJcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgbG9nb3V0U3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgcmlnaHQ6IFwiMjBweFwiLFxuICAgICAgICB3aWR0aDogXCIyNXB4XCIsXG4gICAgICAgIHRvcDogXCIxNXB4XCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBjbGFzc05hbWU9XCJuYXYtaW1nXCIgLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ291dC5wbmdcIiBzdHlsZT17c3R5bGVzLmxvZ291dFN0eWxlfSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMubG9nb3V0KCkgfX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZXZlbnRzRGF0YTogW10sIG5ld3NEYXRhOiBbXSwgdXBjb21pbmdEYXRhOiBbXSwgc3BvdGxpZ2h0RGF0YToge30sIGJyb3RoZXJEYXRhOiB7fSwgcGFnZVNldHRpbmdzOiB7fSwgbG9hZGVkUGFnZTogZmFsc2UgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKENvb2tpZXMuZ2V0KFwidG9rZW5cIikgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b2tlbjogQ29va2llcy5nZXQoXCJ0b2tlblwiKSB9KTtcbiAgICB9XG4gICAgdGhpcy5mZXRjaFBhZ2VEYXRhKCk7XG4gIH1cblxuICBmZXRjaFBhZ2VEYXRhKCkge1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BhZ2VEYXRhP3Rva2VuPVwiICsgQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzcG90bGlnaHREYXRhOiBkYXRhLmJvZHkuYnJvdGhlclNwb3RsaWdodCxcbiAgICAgICAgICB1cGNvbWluZ0RhdGE6IGRhdGEuYm9keS51cGNvbWluZ0RhdGEsXG4gICAgICAgICAgbmV3c0RhdGE6IGRhdGEuYm9keS5uZXdzRGF0YSxcbiAgICAgICAgICBldmVudHNEYXRhOiBkYXRhLmJvZHkuZXZlbnRzRGF0YSxcbiAgICAgICAgICBicm90aGVyRGF0YTogZGF0YS5ib2R5LmJyb3RoZXJEYXRhLFxuICAgICAgICAgIHBhZ2VTZXR0aW5nczogZGF0YS5ib2R5LnBhZ2VTZXR0aW5ncyxcbiAgICAgICAgICBsb2FkZWRQYWdlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhZ2VTZXR0aW5ncylcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkZWRQYWdlKSB7XG4gICAgICBjb25zdCBsb2FkaW5nU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIyMCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgd2lkdGg6IFwiMzBweFwiXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIiBzdHlsZT17bG9hZGluZ1N0eWxlfSAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIldlbGNvbWUsIFwiICsgdGhpcy5zdGF0ZS5icm90aGVyRGF0YS5maXJzdE5hbWUgKyBcIiDwn5GLXCJ9IGhlaWdodD1cIjclXCIgLz5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkNoYXB0ZXIgQXR0ZW5kYW5jZSDwn5mMXCIgaGVpZ2h0PVwiNDUlXCI+XG4gICAgICAgICAgICA8QXR0ZW5kYW5jZSBhdHRlbmRlZENoYXB0ZXJzPXt0aGlzLnN0YXRlLmJyb3RoZXJEYXRhLmF0dGVuZGFuY2V9IHRvdGFsQ2hhcHRlcnM9e3RoaXMuc3RhdGUucGFnZVNldHRpbmdzLnRvdGFsQ2hhcHRlcnN9IGNoZWNrSW5BY3RpdmU9e3RoaXMuc3RhdGUucGFnZVNldHRpbmdzLmRpc3BsYXlDaGVja0lufSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkJyb3RoZXIgU3BvdGxpZ2h0IPCfpKBcIiBoZWlnaHQ9XCI0MCVcIj5cbiAgICAgICAgICAgIDxTcG90bGlnaHQgZGF0YT17dGhpcy5zdGF0ZS5zcG90bGlnaHREYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJDb21pbmcgVXAg4pqh77iPXCIgaGVpZ2h0PVwiNDQuNyVcIj5cbiAgICAgICAgICAgIDxOZXdzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLnVwY29taW5nRGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJOZXdzIFBhbmVsIPCfk7BcIiBoZWlnaHQ9XCI1MCVcIj5cbiAgICAgICAgICAgIDxOZXdzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLm5ld3NEYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJVcGNvbWluZyBFdmVudHMg8J+To1wiIGhlaWdodD1cIjY3LjclXCI+XG4gICAgICAgICAgICA8RXZlbnRzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmV2ZW50c0RhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiRHJvcCB1cyBhIExpbmUg8J+kllwiIGhlaWdodD1cIjI3JVwiPlxuICAgICAgICAgICAgPFNsYWNrIC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCIgc3R5bGU9e3sgXCJoZWlnaHRcIjogdGhpcy5wcm9wcy5oZWlnaHQgfX0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJib3gtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEF0dGVuZGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5TW9kYWw6IGZhbHNlIH1cbiAgfVxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheU1vZGFsOiAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwgfSk7XG4gIH1cbiAgcmVuZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uU3R5bGUgPSB7XG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIjMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIixcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgZm9udFNpemU6IFwiMThweFwiXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmNoZWNrSW5BY3RpdmUgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTW9kYWwoKX0gc3R5bGU9e2J1dHRvblN0eWxlfT5jaGVjayBpbjwvYnV0dG9uPlxuICAgICAgICAgIDxNb2RhbCBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbH0gY2xvc2VNb2RhbD17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8Q2hlY2tJbkZvcm0gLz5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwIHN0eWxlPXtkZXNjcmlwdGlvblN0eWxlfT5XZSd2ZSBzZWVuIHlvdSBhdCB7dGhpcy5wcm9wcy5hdHRlbmRlZENoYXB0ZXJzfSBvdXQgb2Yge3RoaXMucHJvcHMudG90YWxDaGFwdGVyc30gY2hhcHRlcnMgdGhpcyBzZW1lc3Rlci48L3A+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmFwaCBhdHRlbmRlZD17dGhpcy5wcm9wcy5hdHRlbmRlZENoYXB0ZXJzfSB0b3RhbENoYXB0ZXJzPXt0aGlzLnByb3BzLnRvdGFsQ2hhcHRlcnN9IC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDaGVja0luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGNvZGVWYWx1ZTogXCJcIiwgY2hhcHRlclJhdGluZzogMCB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFJhdGluZyA9IHRoaXMuc2V0UmF0aW5nLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NoZWNrSW4/dG9rZW49XCIgKyBDb29raWVzLmdldChcInRva2VuXCIpICsgXCImY29kZT1cIiArIHRoaXMuc3RhdGUuY29kZVZhbHVlICsgXCImdXNlcm5hbWU9XCIgKyB0aGlzLnByb3BzLnVzZXJuYW1lO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXlTdGF0ZTogZGF0YS52YWxpZENvZGUgPyBcInJhdGVDaGFwdGVyXCIgOiBcImludmFsaWRcIlxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9mZWVkYmFjaz90b2tlbj1cIiArIENvb2tpZXMuZ2V0KFwidG9rZW5cIikgKyBcIiZyYXRpbmc9XCIgKyB0aGlzLnN0YXRlLmNoYXB0ZXJSYXRpbmcgKyBcIiZ1c2VybmFtZT1cIiArIHRoaXMucHJvcHMudXNlcm5hbWU7XG4gICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnZhbGlkQ29kZSA/IFwicmF0ZUNoYXB0ZXJcIiA6IFwiaW52YWxpZFwiXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuICBzZXRSYXRpbmcocmF0aW5nKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXB0ZXJSYXRpbmc6IHJhdGluZyB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNoYXB0ZXJSYXRpbmcpXG4gIH1cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvZGVWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG4gIHJlbmRlclN0YXRlKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIG1vZGFsU3VidGl0bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICB9LFxuICAgICAgaW5wdXRTdHlsZToge1xuICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcbiAgICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoXG4gICAgICB9LFxuICAgICAgc3VibWl0QnV0dG9uU3R5bGU6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI3MHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIzMHB4XCIsXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICAgIH0sXG4gICAgICB0ZXh0SW5wdXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDIsIDI0MiwgMjQyKVwiLFxuICAgICAgICByZXNpemU6IFwibm9uZVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICAgIHdpZHRoOiBcIjkyJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiNzBweFwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIixcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCJcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwiZGVmYXVsdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMHB4XCIgfX0gY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5DaGVjayBJbjwvaDI+XG4gICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5tb2RhbFN1YnRpdGxlfSBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+UGxlYXNlIGVudGVyIHRoZSBjb2RlIHByb3ZpZGVkIGluIGNoYXB0ZXIuPC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNvZGVWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuc3VibWl0QnV0dG9uU3R5bGV9PuKGkjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiB9fSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk5vdCBxdWl0ZSDwn5iVPC9oMj5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLm1vZGFsU3VidGl0bGV9IGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj5EaWQgeW91IHNwZWxsIGl0IHJpZ2h0PzwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXRTdHlsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnN1Ym1pdEJ1dHRvblN0eWxlfT7ihpI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwicmF0ZUNoYXB0ZXJcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBweFwiIH19IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+VGhhbmtzIGZvciBjb21pbmcgdG9kYXkg4pyoPC9oMj5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLm1vZGFsU3VidGl0bGV9IGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj5Ib3cgd291bGQgeW91IHJhdGUgY2hhcHRlciB0b2RheT88L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZEZlZWRiYWNrfT5cbiAgICAgICAgICAgIDxSYXRpbmdTeXN0ZW0gc2V0UmF0aW5nPXt0aGlzLnNldFJhdGluZ30vPlxuICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXtzdHlsZXMudGV4dElucHV0fSBwbGFjZWhvbGRlcj1cIkZlZWRiYWNrLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5zdWJtaXRCdXR0b25TdHlsZX0+4oaSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyU3RhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBSYXRpbmdTeXN0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0ZVwiPlxuICAgICAgICA8aW5wdXQgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRSYXRpbmcoNSl9IHR5cGU9XCJyYWRpb1wiIGlkPVwic3RhcjVcIiBuYW1lPVwicmF0ZVwiIHZhbHVlPVwiNVwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcjVcIiB0aXRsZT1cInRleHRcIj41IHN0YXJzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0UmF0aW5nKDQpfSB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXI0XCIgbmFtZT1cInJhdGVcIiB2YWx1ZT1cIjRcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXI0XCIgdGl0bGU9XCJ0ZXh0XCI+NCBzdGFyczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldFJhdGluZygzKX0gdHlwZT1cInJhZGlvXCIgaWQ9XCJzdGFyM1wiIG5hbWU9XCJyYXRlXCIgdmFsdWU9XCIzXCIgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFyM1wiIHRpdGxlPVwidGV4dFwiPjMgc3RhcnM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRSYXRpbmcoMil9IHR5cGU9XCJyYWRpb1wiIGlkPVwic3RhcjJcIiBuYW1lPVwicmF0ZVwiIHZhbHVlPVwiMlwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcjJcIiB0aXRsZT1cInRleHRcIj4yIHN0YXJzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0UmF0aW5nKDEpfSB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXIxXCIgbmFtZT1cInJhdGVcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXIxXCIgdGl0bGU9XCJ0ZXh0XCI+MSBzdGFyPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzcGxpdENvbG9ycygpIHtcbiAgICByZXR1cm4gW3BhcnNlSW50KHRoaXMucHJvcHMuYXR0ZW5kZWQpLCBwYXJzZUludCh0aGlzLnByb3BzLnRvdGFsQ2hhcHRlcnMpIC0gcGFyc2VJbnQodGhpcy5wcm9wcy5hdHRlbmRlZCldO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXG4gICAgICAgICdBdHRlbmRlZCcsXG4gICAgICAgICdNaXNzZWQnXG4gICAgICBdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IHRoaXMuc3BsaXRDb2xvcnMoKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgJyNBRjFFMkInLFxuICAgICAgICAgICcjZDZkNmQ2JyxcbiAgICAgICAgXSxcbiAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAnIzk5MEExQicsXG4gICAgICAgICAgJyNiNWI1YjUnLFxuICAgICAgICBdXG4gICAgICB9XVxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDUwXG4gICAgfVxuICAgIGNvbnN0IGdyYXBoQ29udGFpbmVyU3R5bGUgPSB7XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxEb3VnaG51dCBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNwb3RsaWdodCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcldoZW5SZWFkeSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmltZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcG90bGlnaHQtaW1nXCIgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1nWzBdLnVybH0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJicm90aGVyLWRlc2NyaXB0aW9uXCI+e3RoaXMucHJvcHMuZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVyV2hlblJlYWR5KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5ld3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zLnB1c2goPE5ld3NJdGVtIGtleT17aX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhW2ldfSBpbWc9e3RoaXMucHJvcHMuZGF0YVtpXS5pbWdbMF0udXJsfSAvPik7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVySXRlbXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmV3c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheU1vZGFsOiAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxpbmsgIT0gXCIjXCIpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZGF0YS5saW5rLCBcIl9ibGFua1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW1nICE9IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmltZyAhPSBcIlwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1pdGVtLWNvbnRhaW5lclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpdGVtLWltZ1wiIHNyYz17dGhpcy5wcm9wcy5pbWd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1jb250ZW50XCI+e3RoaXMucHJvcHMuZGF0YS5oZWFkbGluZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TW9kYWwgZGlzcGxheT17dGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWx9IGNsb3NlTW9kYWw9e3RoaXMudG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1nfSBjbGFzc05hbWU9XCJtb2RhbC1pbWdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMuZGF0YS5oZWFkbGluZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtYnRuXCIgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIHdpZHRoPVwiNzAlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRhdGEuY29udGVudH08L3A+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgd2lkdGg9XCI3MCVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckltYWdlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VNb2RhbH0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEV2ZW50c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtcy5wdXNoKDxFdmVudEl0ZW0ga2V5PXtpfSBkYXRhPXtkYXRhW2ldfSAvPik7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtY29udGFpbmVyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5TW9kYWw6ICF0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pdGVtXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVNb2RhbCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9udGhcIj57dGhpcy5wcm9wcy5kYXRhLm1vbnRofTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF5XCI+e3RoaXMucHJvcHMuZGF0YS5kYXl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZXZlbnQtbmFtZVwiPnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RoaXMucHJvcHMuZGF0YS50aW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheU1vZGFsfSBjbG9zZU1vZGFsPXt0aGlzLnRvZ2dsZU1vZGFsfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PmNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgU2xhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwic2xhY2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIkknbSBodW5ncnkuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNsYWNrLXNlbmRcIiBvbkNsaWNrPXsoKSA9PiBhbGVydChcIlRoaXMgZG9lc24ndCBkbyBhbnl0aGluZyB5ZXQgOihcIil9PnNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"));
  }

}

class NavBar extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("token");
    window.location = "/login";
  }

  render() {
    const styles = {
      logoutStyle: {
        position: "absolute",
        right: "20px",
        width: "25px",
        top: "15px",
        cursor: "pointer"
      }
    };
    return __jsx("div", {
      className: "nav-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      className: "nav-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }), __jsx("img", {
      src: "/images/logout.png",
      style: styles.logoutStyle,
      onClick: () => {
        this.logout();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }));
  }

}

class ContentContainer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      newsData: [],
      upcomingData: [],
      spotlightData: {},
      brotherData: {},
      pageSettings: {},
      loadedPage: false
    };
  }

  componentDidMount() {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") == undefined) {
      window.location = "/login";
    } else {
      this.setState({
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token")
      });
    }

    this.fetchPageData();
  }

  fetchPageData() {
    const url = "http://localhost:8080/pageData?token=" + js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token");
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        spotlightData: data.body.brotherSpotlight,
        upcomingData: data.body.upcomingData,
        newsData: data.body.newsData,
        eventsData: data.body.eventsData,
        brotherData: data.body.brotherData,
        pageSettings: data.body.pageSettings,
        loadedPage: true
      });
      console.log(this.state.pageSettings);
    });
  }

  render() {
    if (!this.state.loadedPage) {
      const loadingStyle = {
        display: "block",
        margin: "0px auto",
        marginTop: "20%",
        transform: "translateY(-50%)",
        width: "30px"
      };
      return __jsx("img", {
        src: "/images/loading.gif",
        style: loadingStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      });
    }

    return __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Welcome, " + this.state.brotherData.firstName + " 👋",
      height: "7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }), __jsx(ContentBox, {
      title: "Chapter Attendance \uD83D\uDE4C",
      height: "45%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    }, __jsx(Attendance, {
      attendedChapters: this.state.brotherData.attendance,
      totalChapters: this.state.pageSettings.totalChapters,
      checkInActive: this.state.pageSettings.displayCheckIn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Brother Spotlight \uD83E\uDD20",
      height: "40%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, __jsx(Spotlight, {
      data: this.state.spotlightData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Coming Up \u26A1\uFE0F",
      height: "44.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.upcomingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "News Panel \uD83D\uDCF0",
      height: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.newsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Upcoming Events \uD83D\uDCE3",
      height: "67.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, __jsx(EventsList, {
      data: this.state.eventsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Drop us a Line \uD83E\uDD16",
      height: "27%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }, __jsx(Slack, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }))));
  }

}

class ContentBox extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content-box",
      style: {
        "height": this.props.height
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    }, __jsx("h3", {
      className: "box-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "box-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, this.props.children));
  }

}

class Attendance extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleModal", () => {
      this.setState({
        displayModal: !this.state.displayModal
      });
    });

    this.state = {
      displayModal: false
    };
  }

  renderButton() {
    const descriptionStyle = {
      marginTop: "30px",
      marginBottom: "30px"
    };
    const buttonStyle = {
      display: "block",
      margin: "0px auto",
      marginTop: "30px",
      height: "30px",
      width: "100px",
      fontSize: "18px"
    };

    if (this.props.checkInActive === 'true') {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, __jsx("button", {
        onClick: () => this.toggleModal(),
        style: buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "check in"), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566
        },
        __self: this
      }, __jsx(CheckInForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      })));
    } else {
      return __jsx("p", {
        style: descriptionStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        },
        __self: this
      }, "We've seen you at ", this.props.attendedChapters, " out of ", this.props.totalChapters, " chapters this semester.");
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, __jsx(Graph, {
      attended: this.props.attendedChapters,
      totalChapters: this.props.totalChapters,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580
      },
      __self: this
    }), this.renderButton());
  }

}

class CheckInForm extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "default",
      codeValue: "",
      chapterRating: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/checkIn?token=" + js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") + "&code=" + this.state.codeValue + "&username=" + this.props.username;
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        displayState: data.validCode ? "rateChapter" : "invalid"
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/feedback?token=" + js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") + "&rating=" + this.state.chapterRating + "&username=" + this.props.username;
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        displayState: data.validCode ? "rateChapter" : "invalid"
      });
    });
  }

  setRating(rating) {
    this.setState({
      chapterRating: rating
    });
    console.log(this.state.chapterRating);
  }

  handleChange(event) {
    this.setState({
      codeValue: event.target.value
    });
  }

  renderState() {
    const styles = {
      modalSubtitle: {
        textAlign: "center"
      },
      inputStyle: {
        border: "1px solid grey",
        padding: "6px",
        borderRadius: "4px",
        fontSize: "14px",
        display: "block",
        margin: "20px auto",
        textAlign: "center",
        width: this.props.width
      },
      submitButtonStyle: {
        fontSize: "20px",
        border: "none",
        backgroundColor: "rgb(191, 49, 56)",
        color: "white",
        width: "70px",
        height: "30px",
        cursor: "pointer",
        outline: "none",
        borderRadius: "4px",
        display: "block",
        margin: "0px auto",
        marginTop: "30px"
      },
      textInput: {
        backgroundColor: "rgb(242, 242, 242)",
        resize: "none",
        fontSize: "17px",
        width: "92%",
        height: "70px",
        border: "none",
        borderRadius: "4px",
        marginBottom: "0px",
        padding: "10px"
      }
    };

    if (this.state.displayState == "default") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, "Check In"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, "Please enter the code provided in chapter."), __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, __jsx("input", {
        style: styles.inputStyle,
        onChange: this.handleChange,
        value: this.state.codeValue,
        onChange: this.handleChange,
        placeholder: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, "\u2192")));
    } else if (this.state.displayState == "invalid") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }, "Not quite \uD83D\uDE15"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, "Did you spell it right?"), __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        },
        __self: this
      }, __jsx("input", {
        style: styles.inputStyle,
        onChange: this.handleChange,
        value: this.state.codeValue,
        onChange: this.handleChange,
        placeholder: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        __self: this
      }, "\u2192")));
    } else if (this.state.displayState == "rateChapter") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690
        },
        __self: this
      }, "Thanks for coming today \u2728"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }, "How would you rate chapter today?"), __jsx("form", {
        onSubmit: this.sendFeedback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        __self: this
      }, __jsx(RatingSystem, {
        setRating: this.setRating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }), __jsx("textarea", {
        style: styles.textInput,
        placeholder: "Feedback...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 695
        },
        __self: this
      }, "\u2192")));
    }
  }

  render() {
    return __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703
      },
      __self: this
    }, this.renderState());
  }

}

class RatingSystem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return __jsx("div", {
      className: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, __jsx("input", {
      onClick: () => this.props.setRating(5),
      type: "radio",
      id: "star5",
      name: "rate",
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "star5",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715
      },
      __self: this
    }, "5 stars"), __jsx("input", {
      onClick: () => this.props.setRating(4),
      type: "radio",
      id: "star4",
      name: "rate",
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "star4",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717
      },
      __self: this
    }, "4 stars"), __jsx("input", {
      onClick: () => this.props.setRating(3),
      type: "radio",
      id: "star3",
      name: "rate",
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "star3",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719
      },
      __self: this
    }, "3 stars"), __jsx("input", {
      onClick: () => this.props.setRating(2),
      type: "radio",
      id: "star2",
      name: "rate",
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "star2",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721
      },
      __self: this
    }, "2 stars"), __jsx("input", {
      onClick: () => this.props.setRating(1),
      type: "radio",
      id: "star1",
      name: "rate",
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "star1",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723
      },
      __self: this
    }, "1 star"));
  }

}

class Graph extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  splitColors() {
    return [_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.attended), _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.totalChapters) - _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.props.attended)];
  }

  render() {
    const data = {
      labels: ['Attended', 'Missed'],
      datasets: [{
        data: this.splitColors(),
        backgroundColor: ['#AF1E2B', '#d6d6d6'],
        hoverBackgroundColor: ['#990A1B', '#b5b5b5']
      }]
    };
    const options = {
      legend: {
        display: false
      },
      cutoutPercentage: 50
    };
    const graphContainerStyle = {};
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Doughnut"], {
      data: data,
      options: options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762
      },
      __self: this
    }));
  }

}

class Spotlight extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  renderWhenReady() {
    if (this.props.data.img != undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, __jsx("img", {
        className: "spotlight-img",
        src: this.props.data.img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }), __jsx("p", {
        className: "brother-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        __self: this
      }, this.props.data.content));
    }

    return null;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782
      },
      __self: this
    }, this.renderWhenReady());
  }

}

class NewsList extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  renderItems() {
    var items = [];

    for (var i = 0; i < this.props.data.length; i++) {
      items.push(__jsx(NewsItem, {
        key: i,
        data: this.props.data[i],
        img: this.props.data[i].img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }));
    }

    return items;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 800
      },
      __self: this
    }, this.renderItems());
  }

}

class NewsItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleModal", () => {
      this.setState({
        displayModal: !this.state.displayModal
      });
    });

    this.state = {
      displayModal: false
    };
  }

  handleClick() {
    if (this.props.data.link != "#") {
      window.open(this.props.data.link, "_blank");
    } else {
      this.toggleModal();
      console.log(this.state.displayModal);
    }
  }

  renderImage() {
    if (this.props.img != undefined && this.props.img != "") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        __self: this
      }, __jsx("div", {
        className: "news-item-container",
        onClick: () => this.handleClick(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, __jsx("div", {
        className: "item-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831
        },
        __self: this
      }, __jsx("img", {
        className: "item-img",
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        __self: this
      })), __jsx("div", {
        className: "item-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        __self: this
      }, __jsx("p", {
        className: "item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 835
        },
        __self: this
      }, this.props.data.headline))), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 838
        },
        __self: this
      }, __jsx("img", {
        src: this.props.img,
        className: "modal-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }), __jsx("div", {
        className: "modal-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        __self: this
      }, __jsx("h2", {
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841
        },
        __self: this
      }, this.props.data.headline), __jsx("p", {
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 842
        },
        __self: this
      }, this.props.data.description)), __jsx("button", {
        className: "modal-btn",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        __self: this
      }, "close")), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 846
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 851
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 852
        },
        __self: this
      }, this.props.data.content), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        __self: this
      }));
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861
      },
      __self: this
    }, this.renderImage());
  }

}

class Modal extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    if (this.props.display) {
      return __jsx("div", {
        id: this.props.id,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 873
        },
        __self: this
      }, __jsx("span", {
        className: "close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 874
        },
        __self: this
      }, "\xD7"), this.props.children));
    } else {
      return null;
    }
  }

}

class EventsList extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    var items = [];
    const data = this.props.data;

    for (var i = 0; i < data.length; i++) {
      items.push(__jsx(EventItem, {
        key: i,
        data: data[i],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        __self: this
      }));
    }

    return items;
  }

  render() {
    return __jsx("div", {
      className: "events-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901
      },
      __self: this
    }, this.renderItems());
  }

}

class EventItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toggleModal", () => {
      this.setState({
        displayModal: !this.state.displayModal
      });
    });

    this.state = {
      displayModal: false
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920
      },
      __self: this
    }, __jsx("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 921
      },
      __self: this
    }, __jsx("div", {
      className: "event-item",
      onClick: () => this.toggleModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922
      },
      __self: this
    }, __jsx("div", {
      className: "date-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923
      },
      __self: this
    }, __jsx("p", {
      className: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924
      },
      __self: this
    }, this.props.data.month), __jsx("p", {
      className: "day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925
      },
      __self: this
    }, this.props.data.day)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 927
      },
      __self: this
    }, __jsx("h5", {
      className: "event-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "event-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
      },
      __self: this
    }, this.props.data.time)))), __jsx(Modal, {
      display: this.state.displayModal,
      closeModal: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933
      },
      __self: this
    }, __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935
      },
      __self: this
    }, __jsx("h2", {
      className: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "modal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 937
      },
      __self: this
    }, this.props.data.description)), __jsx("button", {
      className: "modal-btn",
      onClick: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939
      },
      __self: this
    }, "close")));
  }

}

class Slack extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return __jsx("div", {
      className: "input-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949
      },
      __self: this
    }, __jsx("textarea", {
      className: "slack-input",
      placeholder: "I'm hungry...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950
      },
      __self: this
    }), __jsx("button", {
      className: "slack-send",
      onClick: () => alert("This doesn't do anything yet :("),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 951
      },
      __self: this
    }, "send"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map