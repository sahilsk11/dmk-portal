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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const style = {
      position: "relative",
      minHeight: "100vh"
    };
    return __jsx("div", {
      style: style,
      className: "jsx-2002169182",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx(ContentContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2002169182",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}.bg-color{background-color:#F7F7FB;}.nav-container{width:100%;background-color:#AB1B23;height:58px;}.nav-img{width:50px;margin-left:20px;margin-top:6px;}.content-container{width:100%;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:700px;max-width:1200px;margin-bottom:50px;}.column{width:100%;}.content-box{background-color:white;width:90%;box-shadow:0 4px 4px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);display:block;margin:0px auto;margin-top:20px;overflow:scroll;}.box-title{text-align:center;padding-top:10px;margin:0px;font-weight:400;font-size:20px;}.box-content{padding-top:10px;width:95%;display:block;margin:0px auto;position:relative;}p{text-align:center;color:grey;font-weight:300;margin-top:3px;margin-bottom:3px;}.attendance-graph{padding-top:0px;margin:0px auto;display:block;width:40%;max-width:200px;margin-bottom:10px;}.spotlight-img:hover{box-shadow:4px 4px 4px 0 rgba(0,0,0,0.2),-10px 6px 20px 0 rgba(0,0,0,0.19);cursor:pointer;}.spotlight-img{width:43%;margin:0px auto;display:block;margin-bottom:25px;margin-top:20px;border-radius:50%;-webkit-transition-duration:0.2s;transition-duration:0.2s;min-width:120px;}.brother-description{-webkit-transition-duration:0.2s;transition-duration:0.2s;}.brother-description:hover{cursor:pointer;color:rgb(50,50,50);}.events-container{margin-top:40px;}.event-wrapper{min-height:70px;position:relative;}.event-item{margin-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer;border-radius:10px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px;width:calc(100% - 20px);}.event-item:hover{background-color:rgb(235,235,235);}.news-item-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;padding-top:7px;padding-bottom:7px;padding-right:2px;border-radius:10px;cursor:pointer;min-height:50px;}.news-item-container:hover{background-color:rgb(235,235,235);}.item-img-wrapper{width:30%;position:relative;}.item-img{position:relative;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.item-text-wrapper{width:70%;position:relative;}.item-content{position:relative;top:50%;-webkit-transform:translateY(-70%);-ms-transform:translateY(-70%);transform:translateY(-70%);}.hr{border:0.6px solid rgb(215,215,215);margin:3px auto;}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content{background-color:#fefefe;margin:auto;border:1px solid white;width:80%;max-width:500px;position:relative;padding-bottom:40px;padding-top:3%;}.modal-img{width:40%;display:block;margin:0px auto;min-width:150px;max-width:80%;}.modal-text-wrapper{width:77%;padding-left:10%;padding-right:10%;margin:0px auto;display:block;}.modal-title{text-align:center;}.modal-text{text-align:left;}.close{color:#aaaaaa;float:right;font-size:35px;font-weight:bold;position:absolute;right:10px;top:0px;}.close:hover,.close:focus{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-btn{text-align:center;display:block;margin:0px auto;margin-top:30px;height:30px;font-size:16px;}.date-container{width:50px;height:50px;background-color:#AB1B23;border-radius:10px;}.event-name{margin-top:5px;margin-left:10px;font-weight:300;margin-bottom:0px;}.event-time{text-align:left;margin-left:10px;}.month{margin-top:3px;margin-bottom:0px;color:white;font-size:12px;}.day{color:white;margin-top:0px;font-size:25px;}.input-wrapper{width:90%;display:block;margin:0px auto;position:relative;}.slack-input{background-color:rgb(242,242,242);resize:none;font-size:17px;width:92%;height:70px;border:none;border-radius:4px;margin-bottom:30px;padding:10px;}button{font-size:17px;border:none;background-color:rgb(191,49,56);color:white;width:80px;height:25px;cursor:pointer;outline:none;border-radius:4px;}.slack-send{position:absolute;bottom:0;right:3px;}button:hover{background-color:#AB1B23;}.check-in-btn{display:block;margin:0px auto;margin-top:40px;height:40px;width:140px;}@media only screen and (max-width:790px){.content-container{display:block;max-width:500px;height:auto;}.content-box{max-height:400px;}.slack-input{margin-bottom:50px;}.slack-send{bottom:20px;right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFXLEFBRzBCLEFBUWMsQUFJZCxBQU1BLEFBTUEsQUFVQSxBQUlZLEFBVUwsQUFRRCxBQVFDLEFBUUYsQUFTa0UsQUFLeEUsQUFXZSxBQUlWLEFBS0MsQUFJQSxBQUtELEFBY3FCLEFBSXZCLEFBWXVCLEFBSTFCLEFBS1EsQUFRUixBQUtRLEFBTW9CLEFBTXZCLEFBdUJVLEFBV2YsQUFRQSxBQVFRLEFBSUYsQUFNRixBQVVILEFBTU8sQUFTUCxBQU9JLEFBT0MsQUFLRCxBQU9ILEFBTUYsQUFPMEIsQUFZckIsQUFZRyxBQU1PLEFBSVgsQUFTRSxBQUtHLEFBR0UsQUFHUCxVQTlRRSxBQStERSxBQWFBLEFBbURKLEFBUUcsQUEyRUgsQ0F4U1csQUFZQSxBQU1SLEFBTUQsQUFVbEIsQUF1TnVCLEFBZVQsQ0EwQkcsQUFtRUYsRUF0SEQsQUFrR0ksQUFTRSxDQXJQSSxBQWNULEFBaUVILEFBMkZPLEFBWUMsQUFnQ04sQ0FuUEksQUFrQ2xCLEFBSW9CLEFBMkhwQixBQTZDbUIsQ0E5TlAsQUF1U1YsQ0EvU2lCLEFBZ0JOLEFBMEZELEFBYUYsQUE4RFYsQUEwQmdCLEFBd0VMLENBMkJULElBNVRVLEFBbU9lLEFBNkZ6QixDQWhKZ0IsQUFtRkEsQ0FqU2xCLEFBOEtvQixBQW9CTixBQW1JZCxDQXRQZ0IsQUFpRmEsQUF3RVosQ0F2TkYsQUFnQ0MsQUFxS0ksQUFxRUgsQUF5Qm1CLEFBWXhCLENBclRLLEFBbUlqQixBQUtXLEFBUVgsQ0FsR2tCLENBaVJBLEFBU0YsRUFsUkEsQUF1TEUsQUFnQkEsQ0F6TzRELEFBZ1A5RSxBQUtjLENBN0tkLEFBa0JBLEFBZ0JBLEFBOEpjLENBOVBELEFBcURiLENBckdzSSxBQVl4SCxBQWdLSSxDQWpCUixBQStDZSxBQThIekIsR0FqUHFCLEFBK0hILEFBbUZFLENBaFBGLEFBdUxDLENBbURuQixBQXdERSxDQXhVRixBQW9LUyxFQXRIUSxBQTJGaUIsQUFrRWhCLEFBOERELENBM09DLEFBd0JOLEFBc09LLEFBbUNILEVBclVkLEFBbVBrQixBQVNHLEFBT0QsRUF4RlosRUFYUixJQW5Ha0IsQUErR0wsQUE4QkcsQ0E3SkksQ0FzQ3BCLEFBaUpvQixBQXlEcEIsQUF5Q2MsQ0EzUEksQUFvT0osQ0ExUE0sQUF5SVIsQUFrRlosQ0E5RGdCLEFBMEJDLEFBdURMLENBOVBLLEVBK01ILEVBZ0JkLENBdEZjLEFBK0VkLEdBOURrQixBQVlsQixBQTRIQSxDQW5DYyxBQVlELENBbFBRLEVBeURRLENBekU3QixBQXFCaUIsQUFTRyxBQXVJcEIsQ0FrQmEsQUFRYixBQVFpQixDQS9NakIsQ0FnQkEsQ0EwSGdCLEdBaUlGLENBWkEsR0FyR00sQ0FzQ1YsRUFoSW1CLENBbEM3QixDQUxBLEFBdUxBLEVBeksyQixBQXFHSyxDQWdJZixDQTNFakIsQUErRG9CLE1BMVJZLENBY2hCLEVBdUtNLEtBa0hQLElBWk0sR0E1UUgsR0FnSWxCLEVBeUJzQyxDQWdJbEIsRUFsSEgsUUF0S0MsQUE0UUgsT0FyR2YsQ0FrSEEsS0FaQSxHQTVRa0IsRUFtSGxCLENBbEVrQixHQXdHbEIsVUF4SkEsR0FpREEsQ0ExRnFDLFdBbUlWLGVBakJBLFNBakgzQixhQXVCZSxhQUNJLFFBMkdELFNBMUdHLE1BeUZKLENBa0JJLFlBMUdyQixFQXlGcUIsS0FrQkQsY0FqQkEsSUFrQkMsY0FqQlgsS0FrQk8sR0FqQlksWUFrQlgsZ0JBQ2xCLGlFQWxCZSxhQUNXLHdCQUMxQiIsImZpbGUiOiIvVXNlcnMvc2FoaWwvRHJvcGJveC9Qb3J0Zm9saW8vZG1rLXBvcnRhbC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJnLWNvbG9yIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FCMUIyMztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmF2LWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3gtdGl0bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm94LWNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXR0ZW5kYW5jZS1ncmFwaCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BvdGxpZ2h0LWltZzpob3ZlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAtMTBweCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwb3RsaWdodC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDMlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnJvdGhlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5icm90aGVyLWRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5ld3MtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubmV3cy1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0taW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwLjZweCBzb2xpZCByZ2IoMjE1LCAyMTUsIDIxNSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3B4IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAvKiBTaXQgb24gdG9wICovXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvKiBGdWxsIHdpZHRoICovXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgLyogRnVsbCBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgICAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIE1vZGFsIENvbnRlbnQgKi9cblxuICAgICAgICAgICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNzclO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtdGV4dCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cblxuICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWFhYWE7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jbG9zZTpob3ZlciwgLmNsb3NlOmZvY3VzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtYnRuIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQjFCMjM7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ldmVudC1uYW1lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtdGltZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXkge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGFjay1pbnB1dCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCA0OSwgNTYpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xhY2stc2VuZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIxQjIzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hlY2staW4tYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2xhY2staW5wdXQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNsYWNrLXNlbmQge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGxvZ291dFN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHJpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgICB0b3A6IFwiMTVweFwiLFxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCIgY2xhc3NOYW1lPVwibmF2LWltZ1wiIC8+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdXQucG5nXCIgc3R5bGU9e3N0eWxlcy5sb2dvdXRTdHlsZX0gb25DbGljaz17KCkgPT4geyB0aGlzLmxvZ291dCgpIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGV2ZW50c0RhdGE6IFtdLCBuZXdzRGF0YTogW10sIHVwY29taW5nRGF0YTogW10sIHNwb3RsaWdodERhdGE6IHt9LCBicm90aGVyRGF0YToge30sIGxvYWRlZFBhZ2U6IGZhbHNlfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKENvb2tpZXMuZ2V0KFwidG9rZW5cIikgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogQ29va2llcy5nZXQoXCJ0b2tlblwiKX0pO1xuICAgIH1cbiAgICB0aGlzLmZldGNoUGFnZURhdGEoKTtcbiAgfVxuXG4gIGZldGNoUGFnZURhdGEoKSB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcGFnZURhdGE/dXNlcm5hbWU9XCIgKyBDb29raWVzLmdldChcInRva2VuXCIpO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNwb3RsaWdodERhdGE6IGRhdGEuYm9keS5icm90aGVyU3BvdGxpZ2h0LFxuICAgICAgICB1cGNvbWluZ0RhdGE6IGRhdGEuYm9keS51cGNvbWluZ0RhdGEsXG4gICAgICAgIG5ld3NEYXRhOiBkYXRhLmJvZHkubmV3c0RhdGEsXG4gICAgICAgIGV2ZW50c0RhdGE6IGRhdGEuYm9keS5ldmVudHNEYXRhLFxuICAgICAgICBicm90aGVyRGF0YTogZGF0YS5ib2R5LmJyb3RoZXJEYXRhLFxuICAgICAgICBsb2FkZWRQYWdlOiB0cnVlXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkZWRQYWdlKSB7XG4gICAgICBjb25zdCBsb2FkaW5nU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCI1MCVcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIixcbiAgICAgICAgd2lkdGg6IFwiMzBweFwiXG4gICAgICB9XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3R5bGV9IC8+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e1wiV2VsY29tZSwgXCIgKyB0aGlzLnN0YXRlLmJyb3RoZXJEYXRhLmZpcnN0TmFtZSArIFwiIPCfkYtcIn0gaGVpZ2h0PVwiNyVcIiAvPlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiQ2hhcHRlciBBdHRlbmRhbmNlIPCfmYxcIiBoZWlnaHQ9XCI0NSVcIj5cbiAgICAgICAgICAgIDxBdHRlbmRhbmNlIGRhdGE9e3RoaXMuc3RhdGUuYnJvdGhlckRhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiQnJvdGhlciBTcG90bGlnaHQg8J+koFwiIGhlaWdodD1cIjQwJVwiPlxuICAgICAgICAgICAgPFNwb3RsaWdodCBkYXRhPXt0aGlzLnN0YXRlLnNwb3RsaWdodERhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkNvbWluZyBVcCDimqHvuI9cIiBoZWlnaHQ9XCI0NC43JVwiPlxuICAgICAgICAgICAgPE5ld3NMaXN0IGRhdGE9e3RoaXMuc3RhdGUudXBjb21pbmdEYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIk5ld3MgUGFuZWwg8J+TsFwiIGhlaWdodD1cIjUwJVwiPlxuICAgICAgICAgICAgPE5ld3NMaXN0IGRhdGE9e3RoaXMuc3RhdGUubmV3c0RhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIlVwY29taW5nIEV2ZW50cyDwn5OjXCIgaGVpZ2h0PVwiNjcuNyVcIj5cbiAgICAgICAgICAgIDxFdmVudHNMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZXZlbnRzRGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJEcm9wIHVzIGEgTGluZSDwn6SWXCIgaGVpZ2h0PVwiMjclXCI+XG4gICAgICAgICAgICA8U2xhY2sgLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIiBzdHlsZT17eyBcImhlaWdodFwiOiB0aGlzLnByb3BzLmhlaWdodCB9fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJveC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXR0ZW5kYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGNoZWNrSW4oKSB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tL3YwL2FwcHdhVXY5T1hkSjRVTnB5L2F0dGVuZGFuY2U/YXBpX2tleT1cIiArIHRoaXMucHJvcHMuYXBpS2V5O1xuICAgIGZldGNoKHVybCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXR0ZW5kYW5jZS5wbmdcIiBjbGFzc05hbWU9XCJhdHRlbmRhbmNlLWdyYXBoXCIgLz5cbiAgICAgICAgPHA+V2UndmUgc2VlbiB5b3UgYXQge3RoaXMucHJvcHMuZGF0YS5hdHRlbmRhbmNlfSBvdXQgb2YgNSBjaGFwdGVycyB0aGlzIHNlbWVzdGVyLjwvcD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrSW4oKX0gY2xhc3NOYW1lPVwiY2hlY2staW4tYnRuXCI+Y2hlY2sgaW4gbm93PC9idXR0b24+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgU3BvdGxpZ2h0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyV2hlblJlYWR5KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEuaW1nICE9IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNwb3RsaWdodC1pbWdcIiBzcmM9e3RoaXMucHJvcHMuZGF0YS5pbWdbMF0udXJsfSAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJyb3RoZXItZGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5kYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJXaGVuUmVhZHkoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmV3c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJJdGVtcygpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcHMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXMucHVzaCg8TmV3c0l0ZW0ga2V5PXtpfSBkYXRhPXt0aGlzLnByb3BzLmRhdGFbaV19IGltZz17dGhpcy5wcm9wcy5kYXRhW2ldLmltZ1swXS51cmx9IC8+KTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOZXdzSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5TW9kYWw6ICF0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEubGluayAhPSBcIiNcIikge1xuICAgICAgd2luZG93Lm9wZW4odGhpcy5wcm9wcy5kYXRhLmxpbmssIFwiX2JsYW5rXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzcGxheU1vZGFsKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pbWcgIT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMuaW1nICE9IFwiXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWl0ZW0tY29udGFpbmVyXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIml0ZW0taW1nXCIgc3JjPXt0aGlzLnByb3BzLmltZ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLWNvbnRlbnRcIj57dGhpcy5wcm9wcy5kYXRhLmhlYWRsaW5lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxNb2RhbCBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbH0gY2xvc2VNb2RhbD17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd9IGNsYXNzTmFtZT1cIm1vZGFsLWltZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5wcm9wcy5kYXRhLmhlYWRsaW5lfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgd2lkdGg9XCI3MCVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiB3aWR0aD1cIjcwJVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVySW1hZ2UoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfT4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRXZlbnRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGl0ZW1zLnB1c2goPEV2ZW50SXRlbSBrZXk9e2l9IGRhdGE9e2RhdGFbaV19IC8+KTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVySXRlbXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgRXZlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGlzcGxheU1vZGFsOiBmYWxzZSB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlNb2RhbDogIXRoaXMuc3RhdGUuZGlzcGxheU1vZGFsIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb250aFwiPnt0aGlzLnByb3BzLmRhdGEubW9udGh9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXlcIj57dGhpcy5wcm9wcy5kYXRhLmRheX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJldmVudC1uYW1lXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImV2ZW50LXRpbWVcIj57dGhpcy5wcm9wcy5kYXRhLnRpbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgZGlzcGxheT17dGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWx9IGNsb3NlTW9kYWw9e3RoaXMudG9nZ2xlTW9kYWx9PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtdGV4dFwiPnt0aGlzLnByb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtYnRuXCIgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTbGFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJzbGFjay1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiSSdtIGh1bmdyeS4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2xhY2stc2VuZFwiIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiVGhpcyBkb2Vzbid0IGRvIGFueXRoaW5nIHlldCA6KFwiKX0+c2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"));
  }

}

class NavBar extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("user");
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
        lineNumber: 401
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      className: "nav-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
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
        lineNumber: 403
      },
      __self: this
    }));
  }

}

class ContentContainer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      newsData: [],
      upcomingData: [],
      spotlightData: {},
      brotherData: {},
      loadedPage: false
    };
  }

  componentDidMount() {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token") == undefined) {
      window.location = "/login";
    } else {
      this.setState({
        username: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token")
      });
    }

    this.fetchPageData();
  }

  fetchPageData() {
    const url = "http://localhost:8080/pageData?username=" + js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token");
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        spotlightData: data.body.brotherSpotlight,
        upcomingData: data.body.upcomingData,
        newsData: data.body.newsData,
        eventsData: data.body.eventsData,
        brotherData: data.body.brotherData,
        loadedPage: true
      });
    });
  }

  render() {
    if (!this.state.loadedPage) {
      const loadingStyle = {
        display: "block",
        margin: "0px auto",
        marginTop: "50%",
        transform: "translateY(-50%)",
        width: "30px"
      };
      return __jsx("img", {
        src: "/images/loading.gif",
        style: loadingStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      });
    }

    return __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Welcome, " + this.state.brotherData.firstName + " 👋",
      height: "7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455
      },
      __self: this
    }), __jsx(ContentBox, {
      title: "Chapter Attendance \uD83D\uDE4C",
      height: "45%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, __jsx(Attendance, {
      data: this.state.brotherData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Brother Spotlight \uD83E\uDD20",
      height: "40%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, __jsx(Spotlight, {
      data: this.state.spotlightData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Coming Up \u26A1\uFE0F",
      height: "44.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.upcomingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "News Panel \uD83D\uDCF0",
      height: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.newsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Upcoming Events \uD83D\uDCE3",
      height: "67.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, __jsx(EventsList, {
      data: this.state.eventsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Drop us a Line \uD83E\uDD16",
      height: "27%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }, __jsx(Slack, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }))));
  }

}

class ContentBox extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return __jsx("div", {
      className: "content-box",
      style: {
        "height": this.props.height
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: this
    }, __jsx("h3", {
      className: "box-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "box-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, this.props.children));
  }

}

class Attendance extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
  }

  checkIn() {
    console.log("clicked");
    const url = "https://api.airtable.com/v0/appwaUv9OXdJ4UNpy/attendance?api_key=" + this.props.apiKey;
    fetch(url);
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, __jsx("img", {
      src: "/images/attendance.png",
      className: "attendance-graph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      },
      __self: this
    }, "We've seen you at ", this.props.data.attendance, " out of 5 chapters this semester."), __jsx("button", {
      onClick: () => this.checkIn(),
      className: "check-in-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, "check in now"));
  }

}

class Spotlight extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  renderWhenReady() {
    if (this.props.data.img != undefined) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, __jsx("img", {
        className: "spotlight-img",
        src: this.props.data.img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }), __jsx("p", {
        className: "brother-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
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
        lineNumber: 532
      },
      __self: this
    }, this.renderWhenReady());
  }

}

class NewsList extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  renderItems() {
    var items = [];

    for (var i = 0; i < this.props.data.length; i++) {
      items.push(__jsx(NewsItem, {
        key: i,
        data: this.props.data[i],
        img: this.props.data[i].img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
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
        lineNumber: 550
      },
      __self: this
    }, this.renderItems());
  }

}

class NewsItem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
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
          lineNumber: 579
        },
        __self: this
      }, __jsx("div", {
        className: "news-item-container",
        onClick: () => this.handleClick(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, __jsx("div", {
        className: "item-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581
        },
        __self: this
      }, __jsx("img", {
        className: "item-img",
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      })), __jsx("div", {
        className: "item-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, __jsx("p", {
        className: "item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, this.props.data.headline))), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, __jsx("img", {
        src: this.props.img,
        className: "modal-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }), __jsx("div", {
        className: "modal-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }, __jsx("h2", {
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, this.props.data.headline), __jsx("p", {
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }, this.props.data.description)), __jsx("button", {
        className: "modal-btn",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, "close")), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, this.props.data.content), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }));
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611
      },
      __self: this
    }, this.renderImage());
  }

}

class Modal extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    if (this.props.display) {
      return __jsx("div", {
        id: this.props.id,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623
        },
        __self: this
      }, __jsx("span", {
        className: "close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }, "\xD7"), this.props.children));
    } else {
      return null;
    }
  }

}

class EventsList extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
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
          lineNumber: 644
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
        lineNumber: 651
      },
      __self: this
    }, this.renderItems());
  }

}

class EventItem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
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
        lineNumber: 670
      },
      __self: this
    }, __jsx("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671
      },
      __self: this
    }, __jsx("div", {
      className: "event-item",
      onClick: () => this.toggleModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672
      },
      __self: this
    }, __jsx("div", {
      className: "date-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673
      },
      __self: this
    }, __jsx("p", {
      className: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674
      },
      __self: this
    }, this.props.data.month), __jsx("p", {
      className: "day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675
      },
      __self: this
    }, this.props.data.day)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677
      },
      __self: this
    }, __jsx("h5", {
      className: "event-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "event-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679
      },
      __self: this
    }, this.props.data.time)))), __jsx(Modal, {
      display: this.state.displayModal,
      closeModal: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683
      },
      __self: this
    }, __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685
      },
      __self: this
    }, __jsx("h2", {
      className: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "modal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, this.props.data.description)), __jsx("button", {
      className: "modal-btn",
      onClick: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689
      },
      __self: this
    }, "close")));
  }

}

class Slack extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    return __jsx("div", {
      className: "input-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }, __jsx("textarea", {
      className: "slack-input",
      placeholder: "I'm hungry...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }), __jsx("button", {
      className: "slack-send",
      onClick: () => alert("This doesn't do anything yet :("),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701
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