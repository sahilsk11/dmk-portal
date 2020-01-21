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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-2002169182",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx(ContentContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2002169182",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}.bg-color{background-color:#F7F7FB;}.nav-container{width:100%;background-color:#AB1B23;height:58px;}.nav-img{width:50px;margin-left:20px;margin-top:6px;}.content-container{width:100%;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:700px;max-width:1200px;margin-bottom:50px;}.column{width:100%;}.content-box{background-color:white;width:90%;box-shadow:0 4px 4px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);display:block;margin:0px auto;margin-top:20px;overflow:scroll;}.box-title{text-align:center;padding-top:10px;margin:0px;font-weight:400;font-size:20px;}.box-content{padding-top:10px;width:95%;display:block;margin:0px auto;position:relative;}p{text-align:center;color:grey;font-weight:300;margin-top:3px;margin-bottom:3px;}.attendance-graph{padding-top:0px;margin:0px auto;display:block;width:40%;max-width:200px;margin-bottom:10px;}.spotlight-img:hover{box-shadow:4px 4px 4px 0 rgba(0,0,0,0.2),-10px 6px 20px 0 rgba(0,0,0,0.19);cursor:pointer;}.spotlight-img{width:43%;margin:0px auto;display:block;margin-bottom:25px;margin-top:20px;border-radius:50%;-webkit-transition-duration:0.2s;transition-duration:0.2s;min-width:120px;}.brother-description{-webkit-transition-duration:0.2s;transition-duration:0.2s;}.brother-description:hover{cursor:pointer;color:rgb(50,50,50);}.events-container{margin-top:40px;}.event-wrapper{min-height:70px;position:relative;}.event-item{margin-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer;border-radius:10px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px;width:calc(100% - 20px);}.event-item:hover{background-color:rgb(235,235,235);}.news-item-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;padding-top:7px;padding-bottom:7px;padding-right:2px;border-radius:10px;cursor:pointer;min-height:50px;}.news-item-container:hover{background-color:rgb(235,235,235);}.item-img-wrapper{width:30%;position:relative;}.item-img{position:relative;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.item-text-wrapper{width:70%;position:relative;}.item-content{position:relative;top:50%;-webkit-transform:translateY(-70%);-ms-transform:translateY(-70%);transform:translateY(-70%);}.hr{border:0.6px solid rgb(215,215,215);margin:3px auto;}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content{background-color:#fefefe;margin:auto;border:1px solid white;width:80%;max-width:500px;position:relative;padding-bottom:40px;padding-top:3%;}.modal-img{width:40%;display:block;margin:0px auto;min-width:150px;max-width:80%;}.modal-text-wrapper{width:77%;padding-left:10%;padding-right:10%;margin:0px auto;display:block;}.modal-title{text-align:center;}.modal-text{text-align:left;}.close{color:#aaaaaa;float:right;font-size:35px;font-weight:bold;position:absolute;right:10px;top:0px;}.close:hover,.close:focus{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-btn{text-align:center;display:block;margin:0px auto;margin-top:30px;height:30px;font-size:16px;}.date-container{width:50px;height:50px;background-color:#AB1B23;border-radius:10px;}.event-name{margin-top:5px;margin-left:10px;font-weight:300;margin-bottom:0px;}.event-time{text-align:left;margin-left:10px;}.month{margin-top:3px;margin-bottom:0px;color:white;font-size:12px;}.day{color:white;margin-top:0px;font-size:25px;}.input-wrapper{width:90%;display:block;margin:0px auto;position:relative;}.slack-input{background-color:rgb(242,242,242);resize:none;font-size:17px;width:92%;height:70px;border:none;border-radius:4px;margin-bottom:30px;padding:10px;}button{font-size:17px;border:none;background-color:rgb(191,49,56);color:white;width:80px;height:25px;cursor:pointer;outline:none;border-radius:4px;}.slack-send{position:absolute;bottom:0;right:3px;}button:hover{background-color:#AB1B23;}.check-in-btn{display:block;margin:0px auto;margin-top:40px;height:40px;width:140px;}@media only screen and (max-width:790px){.content-container{display:block;max-width:500px;height:auto;}.content-box{max-height:400px;}.slack-input{margin-bottom:50px;}.slack-send{bottom:20px;right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNXLEFBRzBCLEFBUWMsQUFJZCxBQU1BLEFBTUEsQUFVQSxBQUlZLEFBVUwsQUFRRCxBQVFDLEFBUUYsQUFTa0UsQUFLeEUsQUFXZSxBQUlWLEFBS0MsQUFJQSxBQUtELEFBY3FCLEFBSXZCLEFBWXVCLEFBSTFCLEFBS1EsQUFRUixBQUtRLEFBTW9CLEFBTXZCLEFBdUJVLEFBV2YsQUFRQSxBQVFRLEFBSUYsQUFNRixBQVVILEFBTU8sQUFTUCxBQU9JLEFBT0MsQUFLRCxBQU9ILEFBTUYsQUFPMEIsQUFZckIsQUFZRyxBQU1PLEFBSVgsQUFTRSxBQUtHLEFBR0UsQUFHUCxVQTlRRSxBQStERSxBQWFBLEFBbURKLEFBUUcsQUEyRUgsQ0F4U1csQUFZQSxBQU1SLEFBTUQsQUFVbEIsQUF1TnVCLEFBZVQsQ0EwQkcsQUFtRUYsRUF0SEQsQUFrR0ksQUFTRSxDQXJQSSxBQWNULEFBaUVILEFBMkZPLEFBWUMsQUFnQ04sQ0FuUEksQUFrQ2xCLEFBSW9CLEFBMkhwQixBQTZDbUIsQ0E5TlAsQUF1U1YsQ0EvU2lCLEFBZ0JOLEFBMEZELEFBYUYsQUE4RFYsQUEwQmdCLEFBd0VMLENBMkJULElBNVRVLEFBbU9lLEFBNkZ6QixDQWhKZ0IsQUFtRkEsQ0FqU2xCLEFBOEtvQixBQW9CTixBQW1JZCxDQXRQZ0IsQUFpRmEsQUF3RVosQ0F2TkYsQUFnQ0MsQUFxS0ksQUFxRUgsQUF5Qm1CLEFBWXhCLENBclRLLEFBbUlqQixBQUtXLEFBUVgsQ0FsR2tCLENBaVJBLEFBU0YsRUFsUkEsQUF1TEUsQUFnQkEsQ0F6TzRELEFBZ1A5RSxBQUtjLENBN0tkLEFBa0JBLEFBZ0JBLEFBOEpjLENBOVBELEFBcURiLENBckdzSSxBQVl4SCxBQWdLSSxDQWpCUixBQStDZSxBQThIekIsR0FqUHFCLEFBK0hILEFBbUZFLENBaFBGLEFBdUxDLENBbURuQixBQXdERSxDQXhVRixBQW9LUyxFQXRIUSxBQTJGaUIsQUFrRWhCLEFBOERELENBM09DLEFBd0JOLEFBc09LLEFBbUNILEVBclVkLEFBbVBrQixBQVNHLEFBT0QsRUF4RlosRUFYUixJQW5Ha0IsQUErR0wsQUE4QkcsQ0E3SkksQ0FzQ3BCLEFBaUpvQixBQXlEcEIsQUF5Q2MsQ0EzUEksQUFvT0osQ0ExUE0sQUF5SVIsQUFrRlosQ0E5RGdCLEFBMEJDLEFBdURMLENBOVBLLEVBK01ILEVBZ0JkLENBdEZjLEFBK0VkLEdBOURrQixBQVlsQixBQTRIQSxDQW5DYyxBQVlELENBbFBRLEVBeURRLENBekU3QixBQXFCaUIsQUFTRyxBQXVJcEIsQ0FrQmEsQUFRYixBQVFpQixDQS9NakIsQ0FnQkEsQ0EwSGdCLEdBaUlGLENBWkEsR0FyR00sQ0FzQ1YsRUFoSW1CLENBbEM3QixDQUxBLEFBdUxBLEVBeksyQixBQXFHSyxDQWdJZixDQTNFakIsQUErRG9CLE1BMVJZLENBY2hCLEVBdUtNLEtBa0hQLElBWk0sR0E1UUgsR0FnSWxCLEVBeUJzQyxDQWdJbEIsRUFsSEgsUUF0S0MsQUE0UUgsT0FyR2YsQ0FrSEEsS0FaQSxHQTVRa0IsRUFtSGxCLENBbEVrQixHQXdHbEIsVUF4SkEsR0FpREEsQ0ExRnFDLFdBbUlWLGVBakJBLFNBakgzQixhQXVCZSxhQUNJLFFBMkdELFNBMUdHLE1BeUZKLENBa0JJLFlBMUdyQixFQXlGcUIsS0FrQkQsY0FqQkEsSUFrQkMsY0FqQlgsS0FrQk8sR0FqQlksWUFrQlgsZ0JBQ2xCLGlFQWxCZSxhQUNXLHdCQUMxQiIsImZpbGUiOiIvVXNlcnMvc2FoaWwvRHJvcGJveC9Qb3J0Zm9saW8vZG1rLXBvcnRhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJnLWNvbG9yIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FCMUIyMztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3gtdGl0bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm94LWNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXR0ZW5kYW5jZS1ncmFwaCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BvdGxpZ2h0LWltZzpob3ZlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAtMTBweCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwb3RsaWdodC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnJvdGhlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5icm90aGVyLWRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5ld3MtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3cy1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3B4IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAvKiBTaXQgb24gdG9wICovXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvKiBGdWxsIHdpZHRoICovXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIE1vZGFsIENvbnRlbnQgKi9cblxuICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNzclO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtdGV4dCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cblxuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtYnRuIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQjFCMjM7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC1uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtdGltZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXkge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGFjay1pbnB1dCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCA0OSwgNTYpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xhY2stc2VuZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIxQjIzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hlY2staW4tYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2xhY2staW5wdXQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNsYWNrLXNlbmQge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGxvZ291dFN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHJpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgICB0b3A6IFwiMTVweFwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCIgY2xhc3NOYW1lPVwibmF2LWltZ1wiIC8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdXQucG5nXCIgc3R5bGU9e3N0eWxlcy5sb2dvdXRTdHlsZX0gb25DbGljaz17KCkgPT4geyB0aGlzLmxvZ291dCgpIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwaUtleTogXCJcIiwgYmFzZVVSTDogXCJodHRwczovL2FwaS5haXJ0YWJsZS5jb20vdjAvYXBwd2FVdjlPWGRKNFVOcHlcIiwgZXZlbnRzRGF0YTogW10sIG5ld3NEYXRhOiBbXSwgdXBjb21pbmdEYXRhOiBbXSwgc3BvdGxpZ2h0RGF0YToge30sIGJyb3RoZXJEYXRhOiB7fSwgYnJvdGhlck5hbWU6IFwiXCIgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJoaVwiKVxuICAgIGlmIChDb29raWVzLmdldChcInRva2VuXCIpID09IHVuZGVmaW5lZCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbG9naW5cIlxuICAgIH1cbiAgICB0aGlzLmZldGNoUGFnZURhdGEoKTtcbiAgICB0aGlzLmdldEV2ZW50RGF0YSgpO1xuICAgIHRoaXMuZ2V0TmV3c0RhdGEoKTtcbiAgICB0aGlzLmdldFVwY29taW5nRGF0YSgpO1xuICAgIHRoaXMuZ2V0U3BvdGxpZ2h0RGF0YSgpO1xuICAgIHRoaXMuZ2V0QnJvdGhlckRhdGEoKTtcblxuICB9XG5cbiAgZmV0Y2hQYWdlRGF0YSgpIHtcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wYWdlRGF0YVwiO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KVxuICB9XG5cbiAgZ2V0QnJvdGhlckRhdGEoKSB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5iYXNlVVJMICsgXCIvYnJvdGhlcl9kYXRhP2FwaV9rZXk9XCIgKyB0aGlzLnN0YXRlLmFwaUtleTtcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoaSA8IGRhdGEucmVjb3Jkcy5sZW5ndGggJiYgIWZvdW5kKSB7XG4gICAgICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidG9rZW5cIikgPT0gZGF0YS5yZWNvcmRzW2ldLmZpZWxkcy51c2VybmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJyb3RoZXJEYXRhOiBkYXRhLnJlY29yZHNbaV0uZmllbGRzLCBicm90aGVyTmFtZTogZGF0YS5yZWNvcmRzW2ldLmZpZWxkc1tcImZpcnN0X25hbWVcIl0gfSk7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgYWxlcnQoXCJIbSwgd2UgY291bGRuJ3QgZmluZCB5b3UgaW4gb3VyIHN5c3RlbS4gUGxlYXNlIGxvZyBpbiBhZ2FpblwiKTtcbiAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJcIik7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbG9naW5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJyb3RoZXJEYXRhKVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRTcG90bGlnaHREYXRhKCkge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuc3RhdGUuYmFzZVVSTCArIFwiL3Nwb3RsaWdodD9hcGlfa2V5PVwiICsgdGhpcy5zdGF0ZS5hcGlLZXk7XG4gICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNwb3RsaWdodERhdGE6IGRhdGEucmVjb3Jkc1swXS5maWVsZHMgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFVwY29taW5nRGF0YSgpIHtcbiAgICBsZXQgdXBjb21pbmdEYXRhID0gW107XG4gICAgLy9yYW5kb20gdmFyaWFibGVzIGF0IHRoZSBlbmQgYXJlIHVzZWQgdG8gc29ydCBldmVudHNcbiAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmJhc2VVUkwgKyBcIi91cGNvbWluZz9hcGlfa2V5PVwiICsgdGhpcy5zdGF0ZS5hcGlLZXkgKyBcIiZzb3J0JTVCMCU1RCU1QmZpZWxkJTVEPWRhdGVfYWRkZWQmc29ydCU1QjAlNUQlNUJkaXJlY3Rpb24lNUQ9ZGVzY1wiO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdXBjb21pbmdEYXRhLnB1c2goZGF0YS5yZWNvcmRzW2ldLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwY29taW5nRGF0YTogdXBjb21pbmdEYXRhIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXROZXdzRGF0YSgpIHtcbiAgICBsZXQgbmV3c0RhdGEgPSBbXTtcbiAgICAvL3JhbmRvbSB2YXJpYWJsZXMgYXQgdGhlIGVuZCBhcmUgdXNlZCB0byBzb3J0IGV2ZW50c1xuICAgIGNvbnN0IHVybCA9IHRoaXMuc3RhdGUuYmFzZVVSTCArIFwiL25ld3M/YXBpX2tleT1cIiArIHRoaXMuc3RhdGUuYXBpS2V5ICsgXCImc29ydCU1QjAlNUQlNUJmaWVsZCU1RD1kYXRlX2FkZGVkJnNvcnQlNUIwJTVEJTVCZGlyZWN0aW9uJTVEPWRlc2NcIjtcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5ld3NEYXRhLnB1c2goZGF0YS5yZWNvcmRzW2ldLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5ld3NEYXRhOiBuZXdzRGF0YSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0RXZlbnREYXRhKCkge1xuICAgIGxldCBldmVudHNEYXRhID0gW107XG4gICAgLy9yYW5kb20gdmFyaWFibGVzIGF0IHRoZSBlbmQgYXJlIHVzZWQgdG8gc29ydCBldmVudHNcbiAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmJhc2VVUkwgKyBcIi9ldmVudHM/YXBpX2tleT1cIiArIHRoaXMuc3RhdGUuYXBpS2V5ICsgXCImc29ydCU1QjAlNUQlNUJmaWVsZCU1RD1kYXRlXCI7XG4gICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBldmVudHNEYXRhLnB1c2goZGF0YS5yZWNvcmRzW2ldLmZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50c0RhdGE6IGV2ZW50c0RhdGEgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEV2ZW50RGF0YSgpIHtcbiAgICBsZXQgZXZlbnRzRGF0YSA9IFtdO1xuICAgIC8vcmFuZG9tIHZhcmlhYmxlcyBhdCB0aGUgZW5kIGFyZSB1c2VkIHRvIHNvcnQgZXZlbnRzXG4gICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5iYXNlVVJMICsgXCIvZXZlbnRzP2FwaV9rZXk9XCIgKyB0aGlzLnN0YXRlLmFwaUtleSArIFwiJnNvcnQlNUIwJTVEJTVCZmllbGQlNUQ9ZGF0ZVwiO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXZlbnRzRGF0YS5wdXNoKGRhdGEucmVjb3Jkc1tpXS5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldmVudHNEYXRhOiBldmVudHNEYXRhIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJXZWxjb21lLCBcIiArIHRoaXMuc3RhdGUuYnJvdGhlck5hbWUgKyBcIiDwn5GLXCJ9IGhlaWdodD1cIjclXCIgLz5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkNoYXB0ZXIgQXR0ZW5kYW5jZSDwn5mMXCIgaGVpZ2h0PVwiNDUlXCI+XG4gICAgICAgICAgICA8QXR0ZW5kYW5jZSBkYXRhPXt0aGlzLnN0YXRlLmJyb3RoZXJEYXRhfSBhcGlLZXk9e3RoaXMuc3RhdGUuYXBpS2V5fSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkJyb3RoZXIgU3BvdGxpZ2h0IPCfpKBcIiBoZWlnaHQ9XCI0MCVcIj5cbiAgICAgICAgICAgIDxTcG90bGlnaHQgZGF0YT17dGhpcy5zdGF0ZS5zcG90bGlnaHREYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJDb21pbmcgVXAg4pqh77iPXCIgaGVpZ2h0PVwiNDQuNyVcIj5cbiAgICAgICAgICAgIDxOZXdzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLnVwY29taW5nRGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJOZXdzIFBhbmVsIPCfk7BcIiBoZWlnaHQ9XCI1MCVcIj5cbiAgICAgICAgICAgIDxOZXdzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLm5ld3NEYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJVcGNvbWluZyBFdmVudHMg8J+To1wiIGhlaWdodD1cIjY3LjclXCI+XG4gICAgICAgICAgICA8RXZlbnRzTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmV2ZW50c0RhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiRHJvcCB1cyBhIExpbmUg8J+kllwiIGhlaWdodD1cIjI3JVwiPlxuICAgICAgICAgICAgPFNsYWNrIC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCIgc3R5bGU9e3sgXCJoZWlnaHRcIjogdGhpcy5wcm9wcy5oZWlnaHQgfX0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJib3gtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEF0dGVuZGFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBjaGVja0luKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbS92MC9hcHB3YVV2OU9YZEo0VU5weS9hdHRlbmRhbmNlP2FwaV9rZXk9XCIgKyB0aGlzLnByb3BzLmFwaUtleTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcInJlY29yZHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgXCJOYW1lXCI6IENvb2tpZXMuZ2V0KFwidG9rZW5cIiksXG4gICAgICAgICAgICAgIFwiY2hlY2staW4tdGltZVwiOiBgMjAyMC0wMS0xMVQwMTozMTowMC4wMDBaYFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSlcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZWNvcmRzKTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F0dGVuZGFuY2UucG5nXCIgY2xhc3NOYW1lPVwiYXR0ZW5kYW5jZS1ncmFwaFwiIC8+XG4gICAgICAgIDxwPldlJ3ZlIHNlZW4geW91IGF0IHt0aGlzLnByb3BzLmRhdGEuYXR0ZW5kYW5jZX0gb3V0IG9mIDUgY2hhcHRlcnMgdGhpcyBzZW1lc3Rlci48L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5jaGVja0luKCl9IGNsYXNzTmFtZT1cImNoZWNrLWluLWJ0blwiPmNoZWNrIGluIG5vdzwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFNwb3RsaWdodCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcldoZW5SZWFkeSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmltZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcG90bGlnaHQtaW1nXCIgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1nWzBdLnVybH0gLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJicm90aGVyLWRlc2NyaXB0aW9uXCI+e3RoaXMucHJvcHMuZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVyV2hlblJlYWR5KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5ld3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zLnB1c2goPE5ld3NJdGVtIGtleT17aX0gZGF0YT17dGhpcy5wcm9wcy5kYXRhW2ldfSBpbWc9e3RoaXMucHJvcHMuZGF0YVtpXS5pbWdbMF0udXJsfSAvPik7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVySXRlbXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmV3c0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheU1vZGFsOiAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxpbmsgIT0gXCIjXCIpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuZGF0YS5saW5rLCBcIl9ibGFua1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW1nICE9IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLmltZyAhPSBcIlwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1pdGVtLWNvbnRhaW5lclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpdGVtLWltZ1wiIHNyYz17dGhpcy5wcm9wcy5pbWd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1jb250ZW50XCI+e3RoaXMucHJvcHMuZGF0YS5oZWFkbGluZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TW9kYWwgZGlzcGxheT17dGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWx9IGNsb3NlTW9kYWw9e3RoaXMudG9nZ2xlTW9kYWx9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1nfSBjbGFzc05hbWU9XCJtb2RhbC1pbWdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMuZGF0YS5oZWFkbGluZX08L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtYnRuXCIgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIHdpZHRoPVwiNzAlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRhdGEuY29udGVudH08L3A+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgd2lkdGg9XCI3MCVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckltYWdlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc3BsYXkpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2VNb2RhbH0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEV2ZW50c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtcy5wdXNoKDxFdmVudEl0ZW0ga2V5PXtpfSBkYXRhPXtkYXRhW2ldfSAvPik7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtY29udGFpbmVyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5TW9kYWw6ICF0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pdGVtXCIgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVNb2RhbCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9udGhcIj57dGhpcy5wcm9wcy5kYXRhLm1vbnRofTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF5XCI+e3RoaXMucHJvcHMuZGF0YS5kYXl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZXZlbnQtbmFtZVwiPnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RoaXMucHJvcHMuZGF0YS50aW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheU1vZGFsfSBjbG9zZU1vZGFsPXt0aGlzLnRvZ2dsZU1vZGFsfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PmNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgU2xhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwic2xhY2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIkknbSBodW5ncnkuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNsYWNrLXNlbmRcIiBvbkNsaWNrPXsoKSA9PiBhbGVydChcIlRoaXMgZG9lc24ndCBkbyBhbnl0aGluZyB5ZXQgOihcIil9PnNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"));
  }

}

class NavBar extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("user");
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
        lineNumber: 397
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      className: "nav-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
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
        lineNumber: 399
      },
      __self: this
    }));
  }

}

class ContentContainer extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "",
      baseURL: "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy",
      eventsData: [],
      newsData: [],
      upcomingData: [],
      spotlightData: {},
      brotherData: {},
      brotherName: ""
    };
  }

  componentDidMount() {
    console.log("hi");

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") == undefined) {
      window.location = "/login";
    }

    this.fetchPageData();
    this.getEventData();
    this.getNewsData();
    this.getUpcomingData();
    this.getSpotlightData();
    this.getBrotherData();
  }

  fetchPageData() {
    const url = "http://localhost:8080/pageData";
    fetch(url, {
      method: 'POST'
    });
  }

  getBrotherData() {
    const url = this.state.baseURL + "/brother_data?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json()).then(data => {
      var i = 0;
      var found = false;

      while (i < data.records.length && !found) {
        if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") == data.records[i].fields.username) {
          this.setState({
            brotherData: data.records[i].fields,
            brotherName: data.records[i].fields["first_name"]
          });
          found = true;
        }

        i++;
      }

      if (!found) {
        alert("Hm, we couldn't find you in our system. Please log in again");
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("user");
        window.location = "/login";
      }

      console.log(this.state.brotherData);
    });
  }

  getSpotlightData() {
    const url = this.state.baseURL + "/spotlight?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        spotlightData: data.records[0].fields
      });
    });
  }

  getUpcomingData() {
    let upcomingData = []; //random variables at the end are used to sort events

    const url = this.state.baseURL + "/upcoming?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";
    fetch(url).then(res => res.json()).then(data => {
      for (var i = 0; i < data.records.length; i++) {
        upcomingData.push(data.records[i].fields);
      }

      this.setState({
        upcomingData: upcomingData
      });
    });
  }

  getNewsData() {
    let newsData = []; //random variables at the end are used to sort events

    const url = this.state.baseURL + "/news?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date_added&sort%5B0%5D%5Bdirection%5D=desc";
    fetch(url).then(res => res.json()).then(data => {
      for (var i = 0; i < data.records.length; i++) {
        newsData.push(data.records[i].fields);
      }

      this.setState({
        newsData: newsData
      });
    });
  }

  getEventData() {
    let eventsData = []; //random variables at the end are used to sort events

    const url = this.state.baseURL + "/events?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date";
    fetch(url).then(res => res.json()).then(data => {
      for (var i = 0; i < data.records.length; i++) {
        eventsData.push(data.records[i].fields);
      }

      this.setState({
        eventsData: eventsData
      });
    });
  }

  getEventData() {
    let eventsData = []; //random variables at the end are used to sort events

    const url = this.state.baseURL + "/events?api_key=" + this.state.apiKey + "&sort%5B0%5D%5Bfield%5D=date";
    fetch(url).then(res => res.json()).then(data => {
      for (var i = 0; i < data.records.length; i++) {
        eventsData.push(data.records[i].fields);
      }

      this.setState({
        eventsData: eventsData
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Welcome, " + this.state.brotherName + " 👋",
      height: "7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: this
    }), __jsx(ContentBox, {
      title: "Chapter Attendance \uD83D\uDE4C",
      height: "45%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }, __jsx(Attendance, {
      data: this.state.brotherData,
      apiKey: this.state.apiKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Brother Spotlight \uD83E\uDD20",
      height: "40%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522
      },
      __self: this
    }, __jsx(Spotlight, {
      data: this.state.spotlightData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Coming Up \u26A1\uFE0F",
      height: "44.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.upcomingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "News Panel \uD83D\uDCF0",
      height: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.newsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Upcoming Events \uD83D\uDCE3",
      height: "67.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535
      },
      __self: this
    }, __jsx(EventsList, {
      data: this.state.eventsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Drop us a Line \uD83E\uDD16",
      height: "27%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538
      },
      __self: this
    }, __jsx(Slack, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
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
        lineNumber: 550
      },
      __self: this
    }, __jsx("h3", {
      className: "box-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "box-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552
      },
      __self: this
    }, this.props.children));
  }

}

class Attendance extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
  }

  checkIn() {
    console.log("clicked");
    const url = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/attendance?api_key=" + this.props.apiKey;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        "records": [{
          "fields": {
            "Name": js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token"),
            "check-in-time": `2020-01-11T01:31:00.000Z`
          }
        }]
      })
    }).then(res => res.json()).then(data => {
      console.log(data.records);
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589
      },
      __self: this
    }, __jsx("img", {
      src: "/images/attendance.png",
      className: "attendance-graph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591
      },
      __self: this
    }, "We've seen you at ", this.props.data.attendance, " out of 5 chapters this semester."), __jsx("button", {
      onClick: () => this.checkIn(),
      className: "check-in-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592
      },
      __self: this
    }, "check in now"));
  }

}

class Spotlight extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  renderWhenReady() {
    if (this.props.data.img != undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, __jsx("img", {
        className: "spotlight-img",
        src: this.props.data.img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }), __jsx("p", {
        className: "brother-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
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
        lineNumber: 613
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
          lineNumber: 624
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
        lineNumber: 631
      },
      __self: this
    }, this.renderItems());
  }

}

class NewsItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleModal", () => {
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
          lineNumber: 660
        },
        __self: this
      }, __jsx("div", {
        className: "news-item-container",
        onClick: () => this.handleClick(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        },
        __self: this
      }, __jsx("div", {
        className: "item-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, __jsx("img", {
        className: "item-img",
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      })), __jsx("div", {
        className: "item-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665
        },
        __self: this
      }, __jsx("p", {
        className: "item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666
        },
        __self: this
      }, this.props.data.headline))), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, __jsx("img", {
        src: this.props.img,
        className: "modal-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }), __jsx("div", {
        className: "modal-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, __jsx("h2", {
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, this.props.data.headline), __jsx("p", {
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, this.props.data.description)), __jsx("button", {
        className: "modal-btn",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }, "close")), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        __self: this
      }, this.props.data.content), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }));
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692
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
          lineNumber: 703
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, __jsx("span", {
        className: "close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
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
          lineNumber: 725
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
        lineNumber: 732
      },
      __self: this
    }, this.renderItems());
  }

}

class EventItem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleModal", () => {
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
        lineNumber: 751
      },
      __self: this
    }, __jsx("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752
      },
      __self: this
    }, __jsx("div", {
      className: "event-item",
      onClick: () => this.toggleModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753
      },
      __self: this
    }, __jsx("div", {
      className: "date-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, __jsx("p", {
      className: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755
      },
      __self: this
    }, this.props.data.month), __jsx("p", {
      className: "day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756
      },
      __self: this
    }, this.props.data.day)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758
      },
      __self: this
    }, __jsx("h5", {
      className: "event-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "event-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760
      },
      __self: this
    }, this.props.data.time)))), __jsx(Modal, {
      display: this.state.displayModal,
      closeModal: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764
      },
      __self: this
    }, __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766
      },
      __self: this
    }, __jsx("h2", {
      className: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "modal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 768
      },
      __self: this
    }, this.props.data.description)), __jsx("button", {
      className: "modal-btn",
      onClick: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770
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
        lineNumber: 780
      },
      __self: this
    }, __jsx("textarea", {
      className: "slack-input",
      placeholder: "I'm hungry...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781
      },
      __self: this
    }), __jsx("button", {
      className: "slack-send",
      onClick: () => alert("This doesn't do anything yet :("),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782
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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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