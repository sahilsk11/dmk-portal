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
      className: "jsx-2673417444",
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
      className: "jsx-2673417444",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "DMK Portal"), __jsx("link", {
      href: "/images/icon.png",
      rel: "icon",
      className: "jsx-2673417444",
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
      id: "2673417444",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}.bg-color{background-color:#F7F7FB;}.nav-container{width:100%;background-color:#AB1B23;height:58px;}.nav-img{width:50px;margin-left:20px;margin-top:6px;}.content-container{width:100%;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:700px;max-width:1200px;margin-bottom:50px;}.column{width:100%;}.content-box{background-color:white;width:90%;box-shadow:0 4px 4px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);display:block;margin:0px auto;margin-top:20px;overflow:scroll;}.box-title{text-align:center;padding-top:10px;margin:0px;font-weight:400;font-size:20px;}.box-content{padding-top:10px;width:95%;display:block;margin:0px auto;position:relative;}p{text-align:center;color:grey;font-weight:300;margin-top:3px;margin-bottom:3px;}.attendance-graph{padding-top:0px;margin:0px auto;display:block;width:40%;max-width:200px;margin-bottom:10px;}.spotlight-img:hover{box-shadow:4px 4px 4px 0 rgba(0,0,0,0.2),-10px 6px 20px 0 rgba(0,0,0,0.19);cursor:pointer;}.spotlight-img{width:43%;margin:0px auto;display:block;margin-bottom:25px;margin-top:20px;border-radius:50%;-webkit-transition-duration:0.2s;transition-duration:0.2s;min-width:120px;}.brother-description{-webkit-transition-duration:0.2s;transition-duration:0.2s;}.brother-description:hover{cursor:pointer;color:rgb(50,50,50);}.events-container{margin-top:40px;}.event-wrapper{min-height:70px;position:relative;}.event-item{margin-top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;cursor:pointer;border-radius:10px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px;width:calc(100% - 20px);}.event-item:hover{background-color:rgb(235,235,235);}.news-item-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-transition-duration:0.2s;transition-duration:0.2s;padding-top:7px;padding-bottom:7px;padding-right:2px;border-radius:10px;cursor:pointer;min-height:50px;}.news-item-container:hover{background-color:rgb(235,235,235);}.item-img-wrapper{width:30%;position:relative;}.item-img{position:relative;width:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.item-text-wrapper{width:70%;position:relative;}.item-content{position:relative;top:50%;-webkit-transform:translateY(-70%);-ms-transform:translateY(-70%);transform:translateY(-70%);}.hr{border:0.6px solid rgb(215,215,215);margin:3px auto;}.modal{position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);}.modal-content{background-color:#fefefe;margin:auto;border:1px solid white;width:80%;max-width:500px;position:relative;padding-bottom:40px;padding-top:3%;}.modal-img{width:40%;display:block;margin:0px auto;min-width:150px;max-width:80%;}.modal-text-wrapper{width:77%;padding-left:10%;padding-right:10%;margin:0px auto;display:block;}.modal-title{text-align:center;}.modal-text{text-align:left;}.close{color:#aaaaaa;float:right;font-size:35px;font-weight:bold;position:absolute;right:10px;top:0px;}.close:hover,.close:focus{color:#000;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.modal-btn{text-align:center;display:block;margin:0px auto;margin-top:30px;height:30px;font-size:16px;}.date-container{width:50px;height:50px;background-color:#AB1B23;border-radius:10px;}.event-name{margin-top:5px;margin-left:10px;font-weight:300;margin-bottom:0px;}.event-time{text-align:left;margin-left:10px;}.month{margin-top:3px;margin-bottom:0px;color:white;font-size:12px;}.day{color:white;margin-top:0px;font-size:25px;}.input-wrapper{width:90%;display:block;margin:0px auto;position:relative;}.slack-input{background-color:rgb(242,242,242);resize:none;font-size:17px;width:92%;height:70px;border:none;border-radius:4px;margin-bottom:30px;padding:10px;}button{font-size:17px;border:none;background-color:rgb(191,49,56);color:white;width:80px;height:25px;cursor:pointer;outline:none;border-radius:4px;}.slack-send{position:absolute;bottom:0;right:3px;}button:hover{background-color:#AB1B23;}*{margin:0;padding:0;}.rate{float:middle;height:46px;padding:0 10px;}.rate:not(:checked)>input{position:absolute;top:-9999px;}.rate:not(:checked)>label{float:right;width:1em;overflow:hidden;white-space:nowrap;cursor:pointer;font-size:30px;color:#ccc;}.rate:not(:checked)>label:before{content:'\u2605 ';}.rate>input:checked~label{color:#ffc700;}.rate:not(:checked)>label:hover,.rate:not(:checked)>label:hover~label{color:#deb217;}.rate>input:checked+label:hover,.rate>input:checked+label:hover~label,.rate>input:checked~label:hover,.rate>input:checked~label:hover~label,.rate>label:hover~input:checked~label{color:#c59b08;}@media only screen and (max-width:790px){.content-container{display:block;max-width:500px;height:auto;}.content-box{max-height:400px;}.slack-input{margin-bottom:50px;}.slack-send{bottom:20px;right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CVyxBQUcwQixBQVFjLEFBSWQsQUFNQSxBQU1BLEFBVUEsQUFJWSxBQVVMLEFBUUQsQUFRQyxBQVFGLEFBU2tFLEFBS3hFLEFBV2UsQUFJVixBQUtDLEFBSUEsQUFLRCxBQWNxQixBQUl2QixBQVl1QixBQUkxQixBQUtRLEFBUVIsQUFLUSxBQU1vQixBQU12QixBQXVCVSxBQVdmLEFBUUEsQUFRUSxBQUlGLEFBTUYsQUFVSCxBQU1PLEFBU1AsQUFPSSxBQU9DLEFBS0QsQUFPSCxBQU1GLEFBTzBCLEFBWXJCLEFBWUcsQUFNTyxBQUloQixBQUlJLEFBS0UsQUFJTixBQVNFLEFBR0MsQUFJQSxBQU9BLEFBTUksQUFLRyxBQUdFLEFBR1AsU0FwREosQ0EzUE0sQUErREUsQUFhQSxBQW1ESixBQVFHLEFBMkVILENBeFNXLEFBWUEsQUFNUixBQU1ELEFBVWxCLEFBdU51QixBQWVULENBMEJHLEFBNERWLEFBd0NRLENBakRELEFBa0JwQixDQXhIb0IsQUEySHBCLEFBSUEsQUFPQSxBQU0wQixDQXRSSSxBQWNULEFBaUVILEFBMkZPLEFBWUMsQUFnQ04sQ0FuUEksQUFrQ2xCLEFBSW9CLEFBMkhwQixBQTZDbUIsQ0E5TlAsQUF3VVYsQ0FoVmlCLEFBZ0JOLEFBMEZELEFBYUYsQUE4RFYsQUEwQmdCLEFBd0VMLEFBbUJGLENBUlQsQUFpREUsR0FwQ1csQ0F6VEQsQUFtT2UsQUE4SHpCLENBakxnQixBQW1GQSxDQWpTbEIsQUE4S29CLEFBb0JOLEFBbUlkLEFBU2lCLENBL1BELEFBaUZhLEFBd0VaLENBdk5GLEFBZ0NDLEFBcUtJLEFBcUVILEFBeUJtQixBQVl4QixDQXJUSyxBQW1JakIsQUFLVyxBQVFYLENBbEdrQixDQTBSeEIsQUFpQ3NCLEVBblRBLEFBdUxFLEFBZ0JBLENBek80RCxBQWdQOUUsQUFLYyxDQTdLZCxBQWtCQSxBQWdCQSxBQThKYyxDQTlQRCxBQXFEYixDQXJHc0ksQUFZeEgsQUFnS0ksQ0FqQlIsQUErQ2UsQUE4SHpCLENBdUJnQixFQXhRSyxBQStISCxBQW1GRSxBQTZDcEIsQ0E3UmtCLEFBdUxDLENBbURuQixBQXlGRSxDQXpXRixBQW9LUyxFQXRIUSxBQTJGaUIsQUFrRWhCLEFBOERELENBM09DLEFBd0JOLEFBc09LLEVBbFNqQixBQW1Qa0IsQUFTRyxBQU9ELEVBeEZaLEVBWFIsSUFuR2tCLEFBK0dMLEFBOEJHLENBN0pJLEFBc1NSLENBaFFaLEFBaUpvQixBQXlEcEIsQ0FsTmtCLEFBb09KLENBMVBNLEFBeUlSLEFBa0ZaLENBOURnQixBQTBCQyxBQXVETCxDQTlQSyxFQStNSCxFQWdCZCxDQXRGYyxBQStFZCxHQTlEa0IsQUFZbEIsQ0F5RmMsQUFZRCxDQWxQUSxBQXNSVCxFQTdOaUIsQ0F6RTdCLEFBcUJpQixBQVNHLEFBdUlwQixDQWtCYSxBQVFiLEFBUWlCLENBL01qQixDQWdCQSxDQTBIZ0IsR0FpSUYsQ0FaQSxHQXJHTSxDQXNDVixBQStHRixFQS9PcUIsQ0FsQzdCLENBTEEsQUF1TEEsRUF6SzJCLEFBcUdLLENBZ0lmLENBM0VqQixBQStEb0IsR0FnRDFCLEdBMVVzQyxDQWNoQixFQXVLTSxLQWtIUCxJQVpNLEdBNVFILEdBZ0lsQixFQXlCc0MsQ0FnSWxCLEVBbEhILFFBdEtDLEFBNFFILE9BckdmLENBa0hBLEtBWkEsR0E1UWtCLEVBbUhsQixDQWxFa0IsR0F3R2xCLFVBeEpBLEdBaURBLENBMUZxQyxXQW1JVixlQWpCQSxTQWpIM0IsYUF1QmUsYUFDSSxRQTJHRCxTQTFHRyxNQXlGSixDQWtCSSxZQTFHckIsRUF5RnFCLEtBa0JELGNBakJBLElBa0JDLGNBakJYLEtBa0JPLEdBakJZLFlBa0JYLGdCQUNsQixpRUFsQmUsYUFDVyx3QkFDMUIiLCJmaWxlIjoiL1VzZXJzL3NhaGlsL0Ryb3Bib3gvUG9ydGZvbGlvL2Rtay1wb3J0YWwvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRNSyBQb3J0YWw8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8Q29udGVudENvbnRhaW5lciAvPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iZy1jb2xvciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQjFCMjM7XG4gICAgICAgICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hdi1pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm94LXRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJveC1jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmF0dGVuZGFuY2UtZ3JhcGgge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwb3RsaWdodC1pbWc6aG92ZXIge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgLTEwcHggNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcG90bGlnaHQtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQzJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJyb3RoZXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnJvdGhlci1kZXNjcmlwdGlvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50cy1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50LWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50LWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uZXdzLWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5ld3MtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWltZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS1pbWcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXRlbS10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pdGVtLWNvbnRlbnQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwJSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ociB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMC42cHggc29saWQgcmdiKDIxNSwgMjE1LCAyMTUpO1xuICAgICAgICAgICAgICBtYXJnaW46IDNweCBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgLyogU2l0IG9uIHRvcCAqL1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgLyogRnVsbCB3aWR0aCAqL1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBNb2RhbCBDb250ZW50ICovXG5cbiAgICAgICAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubW9kYWwtdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDc3JTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLXRleHQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG5cbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xvc2U6aG92ZXIsIC5jbG9zZTpmb2N1cyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWJ0biB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGF0ZS1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIxQjIzO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXZlbnQtbmFtZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV2ZW50LXRpbWUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vbnRoIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGF5IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xhY2staW5wdXQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgNDksIDU2KTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNsYWNrLXNlbmQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0FCMUIyMztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGUge1xuICAgICAgICAgICAgICBmbG9hdDogbWlkZGxlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6LTk5OTlweDtcbiAgICAgIH1cbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICB3aWR0aDoxZW07XG4gICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6MzBweDtcbiAgICAgICAgICBjb2xvcjojY2NjO1xuICAgICAgfVxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAn4piFICc7XG4gICAgICB9XG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmYzcwMDtcbiAgICAgIH1cbiAgICAgIC5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3Zlcixcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZGViMjE3O1xuICAgICAgfVxuICAgICAgLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXG4gICAgICAucmF0ZSA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciB+IGxhYmVsLFxuICAgICAgLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXG4gICAgICAucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxuLnJhdGUgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogI2M1OWIwODtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XG4gICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2xhY2staW5wdXQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNsYWNrLXNlbmQge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgbG9nb3V0KCkge1xuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XG4gICAgd2luZG93LmxvY2F0aW9uID0gXCIvbG9naW5cIlxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBsb2dvdXRTdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICByaWdodDogXCIyMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjI1cHhcIixcbiAgICAgICAgdG9wOiBcIjE1cHhcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIGNsYXNzTmFtZT1cIm5hdi1pbWdcIiAvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nb3V0LnBuZ1wiIHN0eWxlPXtzdHlsZXMubG9nb3V0U3R5bGV9IG9uQ2xpY2s9eygpID0+IHsgdGhpcy5sb2dvdXQoKSB9fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbnRlbnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBldmVudHNEYXRhOiBbXSwgbmV3c0RhdGE6IFtdLCB1cGNvbWluZ0RhdGE6IFtdLCBzcG90bGlnaHREYXRhOiB7fSwgYnJvdGhlckRhdGE6IHt9LCBsb2FkZWRQYWdlOiBmYWxzZSB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoQ29va2llcy5nZXQoXCJ0b2tlblwiKSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xvZ2luXCJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRva2VuOiBDb29raWVzLmdldChcInRva2VuXCIpIH0pO1xuICAgIH1cbiAgICB0aGlzLmZldGNoUGFnZURhdGEoKTtcbiAgfVxuXG4gIGZldGNoUGFnZURhdGEoKSB7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcGFnZURhdGE/dG9rZW49XCIgKyBDb29raWVzLmdldChcInRva2VuXCIpO1xuICAgIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNwb3RsaWdodERhdGE6IGRhdGEuYm9keS5icm90aGVyU3BvdGxpZ2h0LFxuICAgICAgICAgIHVwY29taW5nRGF0YTogZGF0YS5ib2R5LnVwY29taW5nRGF0YSxcbiAgICAgICAgICBuZXdzRGF0YTogZGF0YS5ib2R5Lm5ld3NEYXRhLFxuICAgICAgICAgIGV2ZW50c0RhdGE6IGRhdGEuYm9keS5ldmVudHNEYXRhLFxuICAgICAgICAgIGJyb3RoZXJEYXRhOiBkYXRhLmJvZHkuYnJvdGhlckRhdGEsXG4gICAgICAgICAgbG9hZGVkUGFnZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRlZFBhZ2UpIHtcbiAgICAgIGNvbnN0IGxvYWRpbmdTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjIwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICB3aWR0aDogXCIzMHB4XCJcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3R5bGV9IC8+XG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e1wiV2VsY29tZSwgXCIgKyB0aGlzLnN0YXRlLmJyb3RoZXJEYXRhLmZpcnN0TmFtZSArIFwiIPCfkYtcIn0gaGVpZ2h0PVwiNyVcIiAvPlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiQ2hhcHRlciBBdHRlbmRhbmNlIPCfmYxcIiBoZWlnaHQ9XCI0NSVcIj5cbiAgICAgICAgICAgIDxBdHRlbmRhbmNlIGRhdGE9e3RoaXMuc3RhdGUuYnJvdGhlckRhdGF9IGNoZWNrSW5BY3RpdmU9e3RydWV9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiQnJvdGhlciBTcG90bGlnaHQg8J+koFwiIGhlaWdodD1cIjQwJVwiPlxuICAgICAgICAgICAgPFNwb3RsaWdodCBkYXRhPXt0aGlzLnN0YXRlLnNwb3RsaWdodERhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIkNvbWluZyBVcCDimqHvuI9cIiBoZWlnaHQ9XCI0NC43JVwiPlxuICAgICAgICAgICAgPE5ld3NMaXN0IGRhdGE9e3RoaXMuc3RhdGUudXBjb21pbmdEYXRhfSAvPlxuICAgICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIk5ld3MgUGFuZWwg8J+TsFwiIGhlaWdodD1cIjUwJVwiPlxuICAgICAgICAgICAgPE5ld3NMaXN0IGRhdGE9e3RoaXMuc3RhdGUubmV3c0RhdGF9IC8+XG4gICAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8Q29udGVudEJveCB0aXRsZT1cIlVwY29taW5nIEV2ZW50cyDwn5OjXCIgaGVpZ2h0PVwiNjcuNyVcIj5cbiAgICAgICAgICAgIDxFdmVudHNMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZXZlbnRzRGF0YX0gLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJEcm9wIHVzIGEgTGluZSDwn6SWXCIgaGVpZ2h0PVwiMjclXCI+XG4gICAgICAgICAgICA8U2xhY2sgLz5cbiAgICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIiBzdHlsZT17eyBcImhlaWdodFwiOiB0aGlzLnByb3BzLmhlaWdodCB9fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJveC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNvbnRlbnRcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQXR0ZW5kYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlNb2RhbDogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5TW9kYWw6ICF0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbCB9KTtcbiAgfVxuICByZW5kZXJCdXR0b24oKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25TdHlsZSA9IHtcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiXG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxOHB4XCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuY2hlY2tJbkFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTW9kYWwoKX0gc3R5bGU9e2J1dHRvblN0eWxlfT5jaGVjayBpbjwvYnV0dG9uPlxuICAgICAgICAgIDxNb2RhbCBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbH0gY2xvc2VNb2RhbD17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8Q2hlY2tJbkZvcm0gLz5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwIHN0eWxlPXtkZXNjcmlwdGlvblN0eWxlfT5XZSd2ZSBzZWVuIHlvdSBhdCB7dGhpcy5wcm9wcy5kYXRhLmF0dGVuZGFuY2V9IG91dCBvZiA1IGNoYXB0ZXJzIHRoaXMgc2VtZXN0ZXIuPC9wPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JhcGggYXR0ZW5kZWQ9e3RoaXMucHJvcHMuZGF0YS5hdHRlbmRhbmNlfSB0b3RhbENoYXB0ZXJzPVwiNVwiIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckJ1dHRvbigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDaGVja0luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGNvZGVWYWx1ZTogXCJcIiB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblxuICB9XG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY2hlY2tJbj90b2tlbj1cIiArIENvb2tpZXMuZ2V0KFwidG9rZW5cIikgKyBcIiZjb2RlPVwiICsgdGhpcy5zdGF0ZS5jb2RlVmFsdWU7XG4gICAgZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnZhbGlkQ29kZSA/IFwicmF0ZUNoYXB0ZXJcIiA6IFwiaW52YWxpZFwiXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29kZVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgcmVuZGVyU3RhdGUoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgbW9kYWxTdWJ0aXRsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgIH0sXG4gICAgICBpbnB1dFN0eWxlOiB7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxuICAgICAgICBwYWRkaW5nOiBcIjZweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhcbiAgICAgIH0sXG4gICAgICBzdWJtaXRCdXR0b25TdHlsZToge1xuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjcwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICAgICAgfSxcbiAgICAgIHRleHRJbnB1dDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDI0MiwgMjQyLCAyNDIpXCIsXG4gICAgICAgIHJlc2l6ZTogXCJub25lXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgd2lkdGg6IFwiOTIlXCIsXG4gICAgICAgIGhlaWdodDogXCI3MHB4XCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIlxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwcHhcIiB9fSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkNoZWNrIEluPC9oMj5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLm1vZGFsU3VidGl0bGV9IGNsYXNzTmFtZT1cIm1vZGFsLXRleHRcIj5QbGVhc2UgZW50ZXIgdGhlIGNvZGUgcHJvdmlkZWQgaW4gY2hhcHRlci48L3A+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0U3R5bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29kZVZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5zdWJtaXRCdXR0b25TdHlsZX0+4oaSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcImludmFsaWRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBweFwiIH19IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+Tm90IHF1aXRlIPCfmJU8L2gyPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubW9kYWxTdWJ0aXRsZX0gY2xhc3NOYW1lPVwibW9kYWwtdGV4dFwiPkRpZCB5b3Ugc3BlbGwgaXQgcmlnaHQ/PC9wPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3N0eWxlcy5pbnB1dFN0eWxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNvZGVWYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuc3VibWl0QnV0dG9uU3R5bGV9PuKGkjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJyYXRlQ2hhcHRlclwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMHB4XCIgfX0gY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5UaGFua3MgZm9yIGNvbWluZyB0b2RheSDinKg8L2gyPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMubW9kYWxTdWJ0aXRsZX0gY2xhc3NOYW1lPVwibW9kYWwtdGV4dFwiPkhvdyB3b3VsZCB5b3UgcmF0ZSBjaGFwdGVyIHRvZGF5PzwvcD5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPFJhdGluZ1N5c3RlbSAvPlxuICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXtzdHlsZXMudGV4dElucHV0fSBwbGFjZWhvbGRlcj1cIkkgbG92ZWQgdGhlLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5zdWJtaXRCdXR0b25TdHlsZX0+4oaSPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAge3RoaXMucmVuZGVyU3RhdGUoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBSYXRpbmdTeXN0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJyYXRlXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXI1XCIgbmFtZT1cInJhdGVcIiB2YWx1ZT1cIjVcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwic3RhcjVcIiB0aXRsZT1cInRleHRcIj41IHN0YXJzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwic3RhcjRcIiBuYW1lPVwicmF0ZVwiIHZhbHVlPVwiNFwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzdGFyNFwiIHRpdGxlPVwidGV4dFwiPjQgc3RhcnM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJzdGFyM1wiIG5hbWU9XCJyYXRlXCIgdmFsdWU9XCIzXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cInN0YXIzXCIgdGl0bGU9XCJ0ZXh0XCI+MyBzdGFyczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInN0YXIyXCIgbmFtZT1cInJhdGVcIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgICA8bGFiZWwgZm9yPVwic3RhcjJcIiB0aXRsZT1cInRleHRcIj4yIHN0YXJzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwic3RhcjFcIiBuYW1lPVwicmF0ZVwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJzdGFyMVwiIHRpdGxlPVwidGV4dFwiPjEgc3RhcjwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3BsaXRDb2xvcnMoKSB7XG4gICAgcmV0dXJuIFtwYXJzZUludCh0aGlzLnByb3BzLmF0dGVuZGVkKSwgcGFyc2VJbnQodGhpcy5wcm9wcy50b3RhbENoYXB0ZXJzKSAtIHBhcnNlSW50KHRoaXMucHJvcHMuYXR0ZW5kZWQpXTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1xuICAgICAgICAnQXR0ZW5kZWQnLFxuICAgICAgICAnTWlzc2VkJ1xuICAgICAgXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiB0aGlzLnNwbGl0Q29sb3JzKCksXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICcjQUYxRTJCJyxcbiAgICAgICAgICAnI2Q2ZDZkNicsXG4gICAgICAgIF0sXG4gICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgJyM5OTBBMUInLFxuICAgICAgICAgICcjYjViNWI1JyxcbiAgICAgICAgXVxuICAgICAgfV1cbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjdXRvdXRQZXJjZW50YWdlOiA1MFxuICAgIH1cbiAgICBjb25zdCBncmFwaENvbnRhaW5lclN0eWxlID0ge1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8RG91Z2hudXQgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBTcG90bGlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJXaGVuUmVhZHkoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YS5pbWcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3BvdGxpZ2h0LWltZ1wiIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltZ1swXS51cmx9IC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJvdGhlci1kZXNjcmlwdGlvblwiPnt0aGlzLnByb3BzLmRhdGEuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlcldoZW5SZWFkeSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOZXdzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpdGVtcy5wdXNoKDxOZXdzSXRlbSBrZXk9e2l9IGRhdGE9e3RoaXMucHJvcHMuZGF0YVtpXX0gaW1nPXt0aGlzLnByb3BzLmRhdGFbaV0uaW1nWzBdLnVybH0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckl0ZW1zKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5ld3NJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZGlzcGxheU1vZGFsOiBmYWxzZSB9O1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlNb2RhbDogIXRoaXMuc3RhdGUuZGlzcGxheU1vZGFsIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YS5saW5rICE9IFwiI1wiKSB7XG4gICAgICB3aW5kb3cub3Blbih0aGlzLnByb3BzLmRhdGEubGluaywgXCJfYmxhbmtcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckltYWdlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmltZyAhPSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy5pbWcgIT0gXCJcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIiBzcmM9e3RoaXMucHJvcHMuaW1nfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW0tY29udGVudFwiPnt0aGlzLnByb3BzLmRhdGEuaGVhZGxpbmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1vZGFsIGRpc3BsYXk9e3RoaXMuc3RhdGUuZGlzcGxheU1vZGFsfSBjbG9zZU1vZGFsPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ30gY2xhc3NOYW1lPVwibW9kYWwtaW1nXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLmRhdGEuaGVhZGxpbmV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9kYWwtdGV4dFwiPnt0aGlzLnByb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLWJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PmNsb3NlPC9idXR0b24+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHJcIiB3aWR0aD1cIjcwJVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kYXRhLmNvbnRlbnR9PC9wPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIHdpZHRoPVwiNzAlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbWFnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNwbGF5KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlTW9kYWx9PiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBFdmVudHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaXRlbXMucHVzaCg8RXZlbnRJdGVtIGtleT17aX0gZGF0YT17ZGF0YVtpXX0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICB7dGhpcy5yZW5kZXJJdGVtcygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBFdmVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheU1vZGFsOiAhdGhpcy5zdGF0ZS5kaXNwbGF5TW9kYWwgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlTW9kYWwoKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vbnRoXCI+e3RoaXMucHJvcHMuZGF0YS5tb250aH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRheVwiPnt0aGlzLnByb3BzLmRhdGEuZGF5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImV2ZW50LW5hbWVcIj57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aGlzLnByb3BzLmRhdGEudGltZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbCBkaXNwbGF5PXt0aGlzLnN0YXRlLmRpc3BsYXlNb2RhbH0gY2xvc2VNb2RhbD17dGhpcy50b2dnbGVNb2RhbH0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC1idG5cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNsYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInNsYWNrLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJJJ20gaHVuZ3J5Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzbGFjay1zZW5kXCIgb25DbGljaz17KCkgPT4gYWxlcnQoXCJUaGlzIGRvZXNuJ3QgZG8gYW55dGhpbmcgeWV0IDooXCIpfT5zZW5kPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/index.js */"));
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
        lineNumber: 440
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      className: "nav-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
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
        lineNumber: 442
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
        loadedPage: true
      });
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
          lineNumber: 488
        },
        __self: this
      });
    }

    return __jsx("div", {
      className: "content-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Welcome, " + this.state.brotherData.firstName + " 👋",
      height: "7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494
      },
      __self: this
    }), __jsx(ContentBox, {
      title: "Chapter Attendance \uD83D\uDE4C",
      height: "45%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }, __jsx(Attendance, {
      data: this.state.brotherData,
      checkInActive: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Brother Spotlight \uD83E\uDD20",
      height: "40%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498
      },
      __self: this
    }, __jsx(Spotlight, {
      data: this.state.spotlightData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Coming Up \u26A1\uFE0F",
      height: "44.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.upcomingData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "News Panel \uD83D\uDCF0",
      height: "50%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      },
      __self: this
    }, __jsx(NewsList, {
      data: this.state.newsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      },
      __self: this
    }, __jsx(ContentBox, {
      title: "Upcoming Events \uD83D\uDCE3",
      height: "67.7%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, __jsx(EventsList, {
      data: this.state.eventsData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    })), __jsx(ContentBox, {
      title: "Drop us a Line \uD83E\uDD16",
      height: "27%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      },
      __self: this
    }, __jsx(Slack, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515
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
        lineNumber: 526
      },
      __self: this
    }, __jsx("h3", {
      className: "box-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    }, this.props.title), __jsx("div", {
      className: "box-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
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

    if (this.props.checkInActive) {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, __jsx("button", {
        onClick: () => this.toggleModal(),
        style: buttonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, "check in"), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, __jsx(CheckInForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      })));
    } else {
      return __jsx("p", {
        style: descriptionStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }, "We've seen you at ", this.props.data.attendance, " out of 5 chapters this semester.");
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 574
      },
      __self: this
    }, __jsx(Graph, {
      attended: this.props.data.attendance,
      totalChapters: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
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
      codeValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/checkIn?token=" + js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("token") + "&code=" + this.state.codeValue;
    fetch(url).then(res => res.json()).then(data => {
      this.setState({
        displayState: data.validCode ? "rateChapter" : "invalid"
      });
    });
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
        marginTop: "40px",
        padding: "10px"
      }
    };

    if (this.state.displayState == "default") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }, "Check In"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      }, "Please enter the code provided in chapter."), __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
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
          lineNumber: 652
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }, "\u2192")));
    } else if (this.state.displayState == "invalid") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        },
        __self: this
      }, "Not quite \uD83D\uDE15"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        },
        __self: this
      }, "Did you spell it right?"), __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
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
          lineNumber: 663
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }, "\u2192")));
    } else if (this.state.displayState == "rateChapter") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, __jsx("h2", {
        style: {
          marginTop: "0px"
        },
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, "Thanks for coming today \u2728"), __jsx("p", {
        style: styles.modalSubtitle,
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, "How would you rate chapter today?"), __jsx("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }, __jsx(RatingSystem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674
        },
        __self: this
      }), __jsx("textarea", {
        style: styles.textInput,
        placeholder: "I loved the...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675
        },
        __self: this
      }), __jsx("button", {
        style: styles.submitButtonStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
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
        lineNumber: 684
      },
      __self: this
    }, this.renderState());
  }

}

class RatingSystem extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return __jsx("div", {
      class: "rate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694
      },
      __self: this
    }, __jsx("input", {
      type: "radio",
      id: "star5",
      name: "rate",
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: this
    }), __jsx("label", {
      for: "star5",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696
      },
      __self: this
    }, "5 stars"), __jsx("input", {
      type: "radio",
      id: "star4",
      name: "rate",
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697
      },
      __self: this
    }), __jsx("label", {
      for: "star4",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698
      },
      __self: this
    }, "4 stars"), __jsx("input", {
      type: "radio",
      id: "star3",
      name: "rate",
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }), __jsx("label", {
      for: "star3",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }, "3 stars"), __jsx("input", {
      type: "radio",
      id: "star2",
      name: "rate",
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701
      },
      __self: this
    }), __jsx("label", {
      for: "star2",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702
      },
      __self: this
    }, "2 stars"), __jsx("input", {
      type: "radio",
      id: "star1",
      name: "rate",
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703
      },
      __self: this
    }), __jsx("label", {
      for: "star1",
      title: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704
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
        lineNumber: 742
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Doughnut"], {
      data: data,
      options: options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743
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
          lineNumber: 753
        },
        __self: this
      }, __jsx("img", {
        className: "spotlight-img",
        src: this.props.data.img[0].url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }), __jsx("p", {
        className: "brother-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755
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
        lineNumber: 763
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
          lineNumber: 774
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
        lineNumber: 781
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
          lineNumber: 810
        },
        __self: this
      }, __jsx("div", {
        className: "news-item-container",
        onClick: () => this.handleClick(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, __jsx("div", {
        className: "item-img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, __jsx("img", {
        className: "item-img",
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        __self: this
      })), __jsx("div", {
        className: "item-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815
        },
        __self: this
      }, __jsx("p", {
        className: "item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      }, this.props.data.headline))), __jsx(Modal, {
        display: this.state.displayModal,
        closeModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 819
        },
        __self: this
      }, __jsx("img", {
        src: this.props.img,
        className: "modal-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 820
        },
        __self: this
      }), __jsx("div", {
        className: "modal-text-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        },
        __self: this
      }, __jsx("h2", {
        className: "modal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        },
        __self: this
      }, this.props.data.headline), __jsx("p", {
        className: "modal-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        __self: this
      }, this.props.data.description)), __jsx("button", {
        className: "modal-btn",
        onClick: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 825
        },
        __self: this
      }, "close")), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        __self: this
      }));
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 832
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833
        },
        __self: this
      }, this.props.data.content), __jsx("hr", {
        className: "hr",
        width: "70%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 834
        },
        __self: this
      }));
    }
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842
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
          lineNumber: 853
        },
        __self: this
      }, __jsx("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        __self: this
      }, __jsx("span", {
        className: "close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
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
          lineNumber: 875
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
        lineNumber: 882
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
        lineNumber: 901
      },
      __self: this
    }, __jsx("div", {
      className: "event-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902
      },
      __self: this
    }, __jsx("div", {
      className: "event-item",
      onClick: () => this.toggleModal(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903
      },
      __self: this
    }, __jsx("div", {
      className: "date-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904
      },
      __self: this
    }, __jsx("p", {
      className: "month",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905
      },
      __self: this
    }, this.props.data.month), __jsx("p", {
      className: "day",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906
      },
      __self: this
    }, this.props.data.day)), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908
      },
      __self: this
    }, __jsx("h5", {
      className: "event-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 909
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "event-time",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 910
      },
      __self: this
    }, this.props.data.time)))), __jsx(Modal, {
      display: this.state.displayModal,
      closeModal: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914
      },
      __self: this
    }, __jsx("div", {
      className: "modal-text-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916
      },
      __self: this
    }, __jsx("h2", {
      className: "modal-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917
      },
      __self: this
    }, this.props.data.name), __jsx("p", {
      className: "modal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918
      },
      __self: this
    }, this.props.data.description)), __jsx("button", {
      className: "modal-btn",
      onClick: this.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920
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
        lineNumber: 930
      },
      __self: this
    }, __jsx("textarea", {
      className: "slack-input",
      placeholder: "I'm hungry...",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 931
      },
      __self: this
    }), __jsx("button", {
      className: "slack-send",
      onClick: () => alert("This doesn't do anything yet :("),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 932
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