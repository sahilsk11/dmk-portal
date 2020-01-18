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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}.bg-color{background-color:#F7F7FB;}.nav-container{width:100%;background-color:#AB1B23;height:58px;}.nav-img{width:50px;margin-left:20px;margin-top:6px;}.content-container{width:100%;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:700px;max-width:1200px;margin-bottom:50px;}.column{width:100%;}.content-box{background-color:white;width:90%;box-shadow:0 4px 4px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);display:block;margin:0px auto;margin-top:20px;overflow:scroll;}.box-title{text-align:center;padding-top:10px;margin:0px;font-weight:400;font-size:20px;}.box-content{padding-top:10px;width:95%;display:block;margin:0px auto;position:relative;}p{text-align:center;color:grey;font-weight:300;margin-top:3px;margin-bottom:3px;}.attendance-graph{padding-top:0px;margin:0px auto;display:block;width:40%;max-width:200px;margin-bottom:10px;}.spotlight-img:hover{box-shadow:4px 4px 4px 0 rgba(0,0,0,0.2),-10px 6px 20px 0 rgba(0,0,0,0.19);cursor:pointer;}.spotlight-img{width:43%;margin:0px auto;display:block;margin-bottom:25px;margin-top:20px;border-radius:50%;-webkit-transition-duration:0.2s;transition-duration:0.2s;min-width:120px;}.brother-description{-webkit-transition-duration:0.2s;transition-duration:0.2s;}.brother-description:hover{cursor:pointer;color:rgb(50,50,50);}.events-container{margin-top:40px;}.event-wrapper{min-height:70px;position:relative;}.event-item{margin-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer;border-radius:10px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px;width:calc(100% - 20px);}.event-item:hover{background-color:rgb(235,235,235);}.news-item-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;padding-top:7px;padding-bottom:7px;padding-right:2px;border-radius:10px;cursor:pointer;min-height:50px;}.news-item-container:hover{background-color:rgb(235,235,235);}.item-img-wrapper{width:30%;position:relative;}.item-img{position:relative;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.item-text-wrapper{width:70%;position:relative;}.item-content{position:relative;top:50%;-webkit-transform:translateY(-70%);-ms-transform:translateY(-70%);transform:translateY(-70%);}.hr{border:0.6px solid rgb(215,215,215);margin:3px auto;}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content{background-color:#fefefe;margin:auto;border:1px solid white;width:80%;max-width:500px;position:relative;padding-bottom:40px;padding-top:3%;}.modal-img{width:40%;display:block;margin:0px auto;min-width:150px;max-width:80%;}.modal-text-wrapper{width:77%;padding-left:10%;padding-right:10%;margin:0px auto;display:block;}.modal-title{text-align:center;}.modal-text{text-align:left;}.close{color:#aaaaaa;float:right;font-size:35px;font-weight:bold;position:absolute;right:10px;top:0px;}.close:hover,.close:focus{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-btn{text-align:center;display:block;margin:0px auto;margin-top:30px;height:30px;font-size:16px;}.date-container{width:50px;height:50px;background-color:#AB1B23;border-radius:10px;}.event-name{margin-top:5px;margin-left:10px;font-weight:300;margin-bottom:0px;}.event-time{text-align:left;margin-left:10px;}.month{margin-top:3px;margin-bottom:0px;color:white;font-size:12px;}.day{color:white;margin-top:0px;font-size:25px;}.input-wrapper{width:90%;display:block;margin:0px auto;position:relative;}.slack-input{background-color:rgb(242,242,242);resize:none;font-size:17px;width:92%;height:70px;border:none;border-radius:4px;margin-bottom:30px;padding:10px;}button{font-size:17px;border:none;background-color:rgb(191,49,56);color:white;width:80px;height:25px;cursor:pointer;outline:none;border-radius:4px;}.slack-send{position:absolute;bottom:0;right:3px;}button:hover{background-color:#AB1B23;}.check-in-btn{display:block;margin:0px auto;margin-top:40px;height:40px;width:140px;}@media only screen and (max-width:790px){.content-container{display:block;max-width:500px;height:auto;}.content-box{max-height:400px;}.slack-input{margin-bottom:50px;}.slack-send{bottom:20px;right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNXLEFBRzBCLEFBUWMsQUFJZCxBQU1BLEFBTUEsQUFVQSxBQUlZLEFBVUwsQUFRRCxBQVFDLEFBUUYsQUFTa0UsQUFLeEUsQUFXZSxBQUlWLEFBS0MsQUFJQSxBQUtELEFBY3FCLEFBSXZCLEFBWXVCLEFBSTFCLEFBS1EsQUFRUixBQUtRLEFBTW9CLEFBTXZCLEFBdUJVLEFBV2YsQUFRQSxBQVFRLEFBSUYsQUFNRixBQVVILEFBTU8sQUFTUCxBQU9JLEFBT0MsQUFLRCxBQU9ILEFBTUYsQUFPMEIsQUFZckIsQUFZRyxBQU1PLEFBSVgsQUFTRSxBQUtHLEFBR0UsQUFHUCxVQTlRRSxBQStERSxBQWFBLEFBbURKLEFBUUcsQUEyRUgsQ0F4U1csQUFZQSxBQU1SLEFBTUQsQUFVbEIsQUF1TnVCLEFBZVQsQ0EwQkcsQUFtRUYsRUF0SEQsQUFrR0ksQUFTRSxDQXJQSSxBQWNULEFBaUVILEFBMkZPLEFBWUMsQUFnQ04sQ0FuUEksQUFrQ2xCLEFBSW9CLEFBMkhwQixBQTZDbUIsQ0E5TlAsQUF1U1YsQ0EvU2lCLEFBZ0JOLEFBMEZELEFBYUYsQUE4RFYsQUEwQmdCLEFBd0VMLENBMkJULElBNVRVLEFBbU9lLEFBNkZ6QixDQWhKZ0IsQUFtRkEsQ0FqU2xCLEFBOEtvQixBQW9CTixBQW1JZCxDQXRQZ0IsQUFpRmEsQUF3RVosQ0F2TkYsQUFnQ0MsQUFxS0ksQUFxRUgsQUF5Qm1CLEFBWXhCLENBclRLLEFBbUlqQixBQUtXLEFBUVgsQ0FsR2tCLENBaVJBLEFBU0YsRUFsUkEsQUF1TEUsQUFnQkEsQ0F6TzRELEFBZ1A5RSxBQUtjLENBN0tkLEFBa0JBLEFBZ0JBLEFBOEpjLENBOVBELEFBcURiLENBckdzSSxBQVl4SCxBQWdLSSxDQWpCUixBQStDZSxBQThIekIsR0FqUHFCLEFBK0hILEFBbUZFLENBaFBGLEFBdUxDLENBbURuQixBQXdERSxDQXhVRixBQW9LUyxFQXRIUSxBQTJGaUIsQUFrRWhCLEFBOERELENBM09DLEFBd0JOLEFBc09LLEFBbUNILEVBclVkLEFBbVBrQixBQVNHLEFBT0QsRUF4RlosRUFYUixJQW5Ha0IsQUErR0wsQUE4QkcsQ0E3SkksQ0FzQ3BCLEFBaUpvQixBQXlEcEIsQUF5Q2MsQ0EzUEksQUFvT0osQ0ExUE0sQUF5SVIsQUFrRlosQ0E5RGdCLEFBMEJDLEFBdURMLENBOVBLLEVBK01ILEVBZ0JkLENBdEZjLEFBK0VkLEdBOURrQixBQVlsQixBQTRIQSxDQW5DYyxBQVlELENBbFBRLEVBeURRLENBekU3QixBQXFCaUIsQUFTRyxBQXVJcEIsQ0FrQmEsQUFRYixBQVFpQixDQS9NakIsQ0FnQkEsQ0EwSGdCLEdBaUlGLENBWkEsR0FyR00sQ0FzQ1YsRUFoSW1CLENBbEM3QixDQUxBLEFBdUxBLEVBeksyQixBQXFHSyxDQWdJZixDQTNFakIsQUErRG9CLE1BMVJZLENBY2hCLEVBdUtNLEtBa0hQLElBWk0sR0E1UUgsR0FnSWxCLEVBeUJzQyxDQWdJbEIsRUFsSEgsUUF0S0MsQUE0UUgsT0FyR2YsQ0FrSEEsS0FaQSxHQTVRa0IsRUFtSGxCLENBbEVrQixHQXdHbEIsVUF4SkEsR0FpREEsQ0ExRnFDLFdBbUlWLGVBakJBLFNBakgzQixhQXVCZSxhQUNJLFFBMkdELFNBMUdHLE1BeUZKLENBa0JJLFlBMUdyQixFQXlGcUIsS0FrQkQsY0FqQkEsSUFrQkMsY0FqQlgsS0FrQk8sR0FqQlksWUFrQlgsZ0JBQ2xCLGlFQWxCZSxhQUNXLHdCQUMxQiIsImZpbGUiOiIvVXNlcnMvc2FoaWwvRHJvcGJveC9Qb3J0Zm9saW8vZG1rLXBvcnRhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJnLWNvbG9yIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FCMUIyMztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3gtdGl0bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm94LWNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXR0ZW5kYW5jZS1ncmFwaCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BvdGxpZ2h0LWltZzpob3ZlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAtMTBweCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwb3RsaWdodC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnJvdGhlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5icm90aGVyLWRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5ld3MtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3cy1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3B4IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAvKiBTaXQgb24gdG9wICovXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvKiBGdWxsIHdpZHRoICovXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIE1vZGFsIENvbnRlbnQgKi9cblxuICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNzclO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtdGV4dCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cblxuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtYnRuIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQjFCMjM7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC1uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtdGltZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXkge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGFjay1pbnB1dCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCA0OSwgNTYpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xhY2stc2VuZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIxQjIzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hlY2staW4tYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2xhY2staW5wdXQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNsYWNrLXNlbmQge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGxvZ291dFN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHJpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgICB0b3A6IFwiMTVweFwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCIgY2xhc3NOYW1lPVwibmF2LWltZ1wiIC8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdXQucG5nXCIgc3R5bGU9e3N0eWxlcy5sb2dvdXRTdHlsZX0gb25DbGljaz17KCkgPT4geyB0aGlzLmxvZ291dCgpIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwaUtleTogXCJcIiwgYmFzZVVSTDogXCJodHRwczovL2FwaS5haXJ0YWJsZS5jb20vdjAvYXBwd2FVdjlPWGRKNFVOcHlcIiwgZXZlbnRzRGF0YTogW10sIG5ld3NEYXRhOiBbXSwgdXBjb21pbmdEYXRhOiBbXSwgc3BvdGxpZ2h0RGF0YToge30sIGJyb3RoZXJEYXRhOiB7fSwgYnJvdGhlck5hbWU6IFwiXCIgfVxuICB9XG5cbiAgc2V0QXBpS2V5KGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIlxuICAgIGZldGNoKHVybCArIFwiL2FwaVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwaUtleTogZGF0YS5hcGlLZXkgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpXG4gICAgaWYgKENvb2tpZXMuZ2V0KFwidXNlclwiKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xvZ2luXCJcbiAgICB9XG4gICAgdGhpcy5zZXRBcGlLZXkodGhpcy5yZW5kZXJQYWdlRGF0YSlcbiAgfVxuICAgIFxuICByZW5kZXJQYWdlRGF0YSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hcGlLZXkgIT0gXCJcIikge1xuICAgICAgdGhpcy5nZXRFdmVudERhdGEoKTtcbiAgICAgIHRoaXMuZ2V0TmV3c0RhdGEoKTtcbiAgICAgIHRoaXMuZ2V0VXBjb21pbmdEYXRhKCk7XG4gICAgICB0aGlzLmdldFNwb3RsaWdodERhdGEoKTtcbiAgICAgIHRoaXMuZ2V0QnJvdGhlckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICBnZXRCcm90aGVyRGF0YSgpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmJhc2VVUkwgKyBcIi9icm90aGVyX2RhdGE/YXBpX2tleT1cIiArIHRoaXMuc3RhdGUuYXBpS2V5O1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgIHdoaWxlIChpIDwgZGF0YS5yZWNvcmRzLmxlbmd0aCAmJiAhZm91bmQpIHtcbiAgICAgICAgICBpZiAoQ29va2llcy5nZXQoXCJ1c2VyXCIpID09IGRhdGEucmVjb3Jkc1tpXS5maWVsZHMudXNlcm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBicm90aGVyRGF0YTogZGF0YS5yZWNvcmRzW2ldLmZpZWxkcywgYnJvdGhlck5hbWU6IGRhdGEucmVjb3Jkc1tpXS5maWVsZHNbXCJmaXJzdF9uYW1lXCJdIH0pO1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgIGFsZXJ0KFwiSG0sIHdlIGNvdWxkbid0IGZpbmQgeW91IGluIG91ciBzeXN0ZW0uIFBsZWFzZSBsb2cgaW4gYWdhaW5cIik7XG4gICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyXCIpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xvZ2luXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5icm90aGVyRGF0YSlcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0U3BvdGxpZ2h0RGF0YSgpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmJhc2VVUkwgKyBcIi9zcG90bGlnaHQ/YXBpX2tleT1cIiArIHRoaXMuc3RhdGUuYXBpS2V5O1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcG90bGlnaHREYXRhOiBkYXRhLnJlY29yZHNbMF0uZmllbGRzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRVcGNvbWluZ0RhdGEoKSB7XG4gICAgbGV0IHVwY29taW5nRGF0YSA9IFtdO1xuICAgIC8vcmFuZG9tIHZhcmlhYmxlcyBhdCB0aGUgZW5kIGFyZSB1c2VkIHRvIHNvcnQgZXZlbnRzXG4gICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5iYXNlVVJMICsgXCIvdXBjb21pbmc/YXBpX2tleT1cIiArIHRoaXMuc3RhdGUuYXBpS2V5ICsgXCImc29ydCU1QjAlNUQlNUJmaWVsZCU1RD1kYXRlX2FkZGVkJnNvcnQlNUIwJTVEJTVCZGlyZWN0aW9uJTVEPWRlc2NcIjtcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHVwY29taW5nRGF0YS5wdXNoKGRhdGEucmVjb3Jkc1tpXS5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGNvbWluZ0RhdGE6IHVwY29taW5nRGF0YSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0TmV3c0RhdGEoKSB7XG4gICAgbGV0IG5ld3NEYXRhID0gW107XG4gICAgLy9yYW5kb20gdmFyaWFibGVzIGF0IHRoZSBlbmQgYXJlIHVzZWQgdG8gc29ydCBldmVudHNcbiAgICBjb25zdCB1cmwgPSB0aGlzLnN0YXRlLmJhc2VVUkwgKyBcIi9uZXdzP2FwaV9rZXk9XCIgKyB0aGlzLnN0YXRlLmFwaUtleSArIFwiJnNvcnQlNUIwJTVEJTVCZmllbGQlNUQ9ZGF0ZV9hZGRlZCZzb3J0JTVCMCU1RCU1QmRpcmVjdGlvbiU1RD1kZXNjXCI7XG4gICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuZXdzRGF0YS5wdXNoKGRhdGEucmVjb3Jkc1tpXS5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdzRGF0YTogbmV3c0RhdGEgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEV2ZW50RGF0YSgpIHtcbiAgICBsZXQgZXZlbnRzRGF0YSA9IFtdO1xuICAgIC8vcmFuZG9tIHZhcmlhYmxlcyBhdCB0aGUgZW5kIGFyZSB1c2VkIHRvIHNvcnQgZXZlbnRzXG4gICAgY29uc3QgdXJsID0gdGhpcy5zdGF0ZS5iYXNlVVJMICsgXCIvZXZlbnRzP2FwaV9rZXk9XCIgKyB0aGlzLnN0YXRlLmFwaUtleSArIFwiJnNvcnQlNUIwJTVEJTVCZmllbGQlNUQ9ZGF0ZVwiO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXZlbnRzRGF0YS5wdXNoKGRhdGEucmVjb3Jkc1tpXS5maWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBldmVudHNEYXRhOiBldmVudHNEYXRhIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRFdmVudERhdGEoKSB7XG4gICAgbGV0IGV2ZW50c0RhdGEgPSBbXTtcbiAgICAvL3JhbmRvbSB2YXJpYWJsZXMgYXQgdGhlIGVuZCBhcmUgdXNlZCB0byBzb3J0IGV2ZW50c1xuICAgIGNvbnN0IHVybCA9IHRoaXMuc3RhdGUuYmFzZVVSTCArIFwiL2V2ZW50cz9hcGlfa2V5PVwiICsgdGhpcy5zdGF0ZS5hcGlLZXkgKyBcIiZzb3J0JTVCMCU1RCU1QmZpZWxkJTVEPWRhdGVcIjtcbiAgICBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGV2ZW50c0RhdGEucHVzaChkYXRhLnJlY29yZHNbaV0uZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXZlbnRzRGF0YTogZXZlbnRzRGF0YSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e1wiV2VsY29tZSwgXCIgKyB0aGlzLnN0YXRlLmJyb3RoZXJOYW1lICsgXCIg8J+Ri1wifSBoZWlnaHQ9XCI3JVwiIC8+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJDaGFwdGVyIEF0dGVuZGFuY2Ug8J+ZjFwiIGhlaWdodD1cIjQ1JVwiPlxuICAgICAgICAgICAgPEF0dGVuZGFuY2UgZGF0YT17dGhpcy5zdGF0ZS5icm90aGVyRGF0YX0gYXBpS2V5PXt0aGlzLnN0YXRlLmFwaUtleX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJCcm90aGVyIFNwb3RsaWdodCDwn6SgXCIgaGVpZ2h0PVwiNDAlXCI+XG4gICAgICAgICAgICA8U3BvdGxpZ2h0IGRhdGE9e3RoaXMuc3RhdGUuc3BvdGxpZ2h0RGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiQ29taW5nIFVwIOKaoe+4j1wiIGhlaWdodD1cIjQ0LjclXCI+XG4gICAgICAgICAgICA8TmV3c0xpc3QgZGF0YT17dGhpcy5zdGF0ZS51cGNvbWluZ0RhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiTmV3cyBQYW5lbCDwn5OwXCIgaGVpZ2h0PVwiNTAlXCI+XG4gICAgICAgICAgICA8TmV3c0xpc3QgZGF0YT17dGhpcy5zdGF0ZS5uZXdzRGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiVXBjb21pbmcgRXZlbnRzIPCfk6NcIiBoZWlnaHQ9XCI2Ny43JVwiPlxuICAgICAgICAgICAgPEV2ZW50c0xpc3QgZGF0YT17dGhpcy5zdGF0ZS5ldmVudHNEYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkRyb3AgdXMgYSBMaW5lIPCfpJZcIiBoZWlnaHQ9XCIyNyVcIj5cbiAgICAgICAgICAgIDxTbGFjayAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IHRoaXMucHJvcHMuaGVpZ2h0IH19PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYm94LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBBdHRlbmRhbmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY2hlY2tJbigpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5haXJ0YWJsZS5jb20vdjAvYXBwd2FVdjlPWGRKNFVOcHkvYXR0ZW5kYW5jZT9hcGlfa2V5PVwiICsgdGhpcy5wcm9wcy5hcGlLZXk7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJyZWNvcmRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgIFwiTmFtZVwiOiBcIlN5ZG5leThcIixcbiAgICAgICAgICAgICAgXCJjaGVjay1pbi10aW1lXCI6IFwiMjAyMC0wMS0xMVQwMTozMTowMC4wMDBaXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVjb3Jkcyk7XG4gICAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdHRlbmRhbmNlLnBuZ1wiIGNsYXNzTmFtZT1cImF0dGVuZGFuY2UtZ3JhcGhcIiAvPlxuICAgICAgICA8cD5XZSd2ZSBzZWVuIHlvdSBhdCB7dGhpcy5wcm9wcy5kYXRhLmF0dGVuZGFuY2V9IG91dCBvZiA1IGNoYXB0ZXJzIHRoaXMgc2VtZXN0ZXIuPC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hlY2tJbigpfSBjbGFzc05hbWU9XCJjaGVjay1pbi1idG5cIj5jaGVjayBpbiBub3c8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBTcG90bGlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJXaGVuUmVhZHkoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YS5pbWcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3BvdGxpZ2h0LWltZ1wiIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltZ1swXS51cmx9IC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJvdGhlci1kZXNjcmlwdGlvblwiPnt0aGlzLnByb3BzLmRhdGEuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlcldoZW5SZWFkeSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOZXdzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtcy5wdXNoKDxOZXdzSXRlbSBrZXk9e2l9IGRhdGE9e3RoaXMucHJvcHMuZGF0YVtpXX0gaW1nPXt0aGlzLnByb3BzLmRhdGFbaV0uaW1nWzBdLnVybH0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5ld3NJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGlzcGxheU1vZGFsOiBmYWxzZSB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlNb2RhbDogIXRoaXMuc3RhdGUuZGlzcGxheU1vZGFsIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YS5saW5rICE9IFwiI1wiKSB7XG4gICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmRhdGEubGluaywgXCJfYmxhbmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckltYWdlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmltZyAhPSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5pbWcgIT0gXCJcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBzcmM9e3RoaXMucHJvcHMuaW1nfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tY29udGVudFwiPnt0aGlzLnByb3BzLmRhdGEuaGVhZGxpbmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1vZGFsIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheU1vZGFsfSBjbG9zZU1vZGFsPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ30gY2xhc3NOYW1lPVwibW9kYWwtaW1nXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLmRhdGEuaGVhZGxpbmV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtdGV4dFwiPnt0aGlzLnByb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PmNsb3NlPC9idXR0b24+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiB3aWR0aD1cIjcwJVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIHdpZHRoPVwiNzAlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbWFnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNwbGF5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTW9kYWx9PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBFdmVudHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXMucHVzaCg8RXZlbnRJdGVtIGtleT17aX0gZGF0YT17ZGF0YVtpXX0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBFdmVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheU1vZGFsOiAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTW9kYWwoKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbnRoXCI+e3RoaXMucHJvcHMuZGF0YS5tb250aH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRheVwiPnt0aGlzLnByb3BzLmRhdGEuZGF5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImV2ZW50LW5hbWVcIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aGlzLnByb3BzLmRhdGEudGltZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbCBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbH0gY2xvc2VNb2RhbD17dGhpcy50b2dnbGVNb2RhbH0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNsYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInNsYWNrLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJJJ20gaHVuZ3J5Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbGFjay1zZW5kXCIgb25DbGljaz17KCkgPT4gYWxlcnQoXCJUaGlzIGRvZXNuJ3QgZG8gYW55dGhpbmcgeWV0IDooXCIpfT5zZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"));
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

  setApiKey(callback) {
    const url = "http://localhost:8080";
    fetch(url + "/api", {
      method: "POST"
    }).then(response => response.json()).then(data => {
      this.setState({
        apiKey: data.apiKey
      });
    });
  }

  componentDidMount() {
    console.log("hi");

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user") == undefined) {
      window.location = "/login";
    }

    this.setApiKey(this.renderPageData);
  }

  renderPageData() {
    if (this.state.apiKey != "") {
      this.getEventData();
      this.getNewsData();
      this.getUpcomingData();
      this.getSpotlightData();
      this.getBrotherData();
    }
  }

  getBrotherData() {
    const url = this.state.baseURL + "/brother_data?api_key=" + this.state.apiKey;
    fetch(url).then(res => res.json()).then(data => {
      var i = 0;
      var found = false;

      while (i < data.records.length && !found) {
        if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("user") == data.records[i].fields.username) {
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
        lineNumber: 523
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Welcome, " + this.state.brotherName + " 👋",
      height: "7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
      },
      __self: this
    }), __jsx(ContentBox, {
      title: "Chapter Attendance \uD83D\uDE4C",
      height: "45%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, __jsx(Attendance, {
      data: this.state.brotherData,
      apiKey: this.state.apiKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Brother Spotlight \uD83E\uDD20",
      height: "40%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: this
    }, __jsx(Spotlight, {
      data: this.state.spotlightData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Coming Up \u26A1\uFE0F",
      height: "44.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.upcomingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "News Panel \uD83D\uDCF0",
      height: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.newsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Upcoming Events \uD83D\uDCE3",
      height: "67.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    }, __jsx(EventsList, {
      data: this.state.eventsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Drop us a Line \uD83E\uDD16",
      height: "27%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, __jsx(Slack, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
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
        lineNumber: 557
      },
      __self: this
    }, __jsx("h3", {
      className: "box-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "box-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
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
            "Name": "Sydney8",
            "check-in-time": "2020-01-11T01:31:00.000Z"
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
        lineNumber: 596
      },
      __self: this
    }, __jsx("img", {
      src: "/images/attendance.png",
      className: "attendance-graph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598
      },
      __self: this
    }, "We've seen you at ", this.props.data.attendance, " out of 5 chapters this semester."), __jsx("button", {
      onClick: () => this.checkIn(),
      className: "check-in-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599
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
          lineNumber: 610
        },
        __self: this
      }, __jsx("img", {
        className: "spotlight-img",
        src: this.props.data.img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }), __jsx("p", {
        className: "brother-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612
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
        lineNumber: 620
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
          lineNumber: 631
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
        lineNumber: 638
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
          lineNumber: 667
        },
        __self: this
      }, __jsx("div", {
        className: "news-item-container",
        onClick: () => this.handleClick(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668
        },
        __self: this
      }, __jsx("div", {
        className: "item-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 669
        },
        __self: this
      }, __jsx("img", {
        className: "item-img",
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      })), __jsx("div", {
        className: "item-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, __jsx("p", {
        className: "item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, this.props.data.headline))), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        },
        __self: this
      }, __jsx("img", {
        src: this.props.img,
        className: "modal-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677
        },
        __self: this
      }), __jsx("div", {
        className: "modal-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678
        },
        __self: this
      }, __jsx("h2", {
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679
        },
        __self: this
      }, this.props.data.headline), __jsx("p", {
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, this.props.data.description)), __jsx("button", {
        className: "modal-btn",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, "close")), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 690
        },
        __self: this
      }, this.props.data.content), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691
        },
        __self: this
      }));
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
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
          lineNumber: 710
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, __jsx("span", {
        className: "close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 712
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
          lineNumber: 732
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
        lineNumber: 739
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
        lineNumber: 758
      },
      __self: this
    }, __jsx("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759
      },
      __self: this
    }, __jsx("div", {
      className: "event-item",
      onClick: () => this.toggleModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760
      },
      __self: this
    }, __jsx("div", {
      className: "date-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761
      },
      __self: this
    }, __jsx("p", {
      className: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762
      },
      __self: this
    }, this.props.data.month), __jsx("p", {
      className: "day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763
      },
      __self: this
    }, this.props.data.day)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765
      },
      __self: this
    }, __jsx("h5", {
      className: "event-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "event-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767
      },
      __self: this
    }, this.props.data.time)))), __jsx(Modal, {
      display: this.state.displayModal,
      closeModal: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771
      },
      __self: this
    }, __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773
      },
      __self: this
    }, __jsx("h2", {
      className: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "modal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775
      },
      __self: this
    }, this.props.data.description)), __jsx("button", {
      className: "modal-btn",
      onClick: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777
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
        lineNumber: 787
      },
      __self: this
    }, __jsx("textarea", {
      className: "slack-input",
      placeholder: "I'm hungry...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788
      },
      __self: this
    }), __jsx("button", {
      className: "slack-send",
      onClick: () => alert("This doesn't do anything yet :("),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789
      },
      __self: this
    }, "send"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
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