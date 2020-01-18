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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

class Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "S",
      lastName: "a",
      username: "h",
      displayState: "form",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateToken = this.validateToken.bind(this);
  }

  handleChange(event) {
    const inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validateFields()) {
      const url = "http://localhost:8080";
      fetch(url + "/add?first=" + this.state.firstName + "&last=" + this.state.lastName + "&username=" + this.state.username, {
        method: "POST",
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state)
      }).then(response => response.json()).then(data => {
        if (data["sent"]) {
          this.setState({
            displayState: "loading"
          });
        } else {
          this.setState({
            displayState: "error"
          });
        }
      }).catch(error => {
        this.setState({
          displayState: "error"
        });
      });
    } else {
      this.setState({
        displayState: "invalid"
      });
    }

    console.log(this.state);
  }

  validateToken() {
    const url = "http://localhost:8080";
    fetch(url + "/authenticate?username=" + this.state.username + "&token=" + this.state.password, {
      method: "POST"
    }).then(response => response.json()).then(data => {
      if (data["authenticated"]) {
        document.cookie = "user=" + this.state.username + "; path=/";
        document.cookie = "name=" + this.state.firstName + "; path=/";
        window.location = "/";
      } else {
        this.setState({
          displayState: "error"
        });
      }
    });
  }

  validateFields() {
    return this.state.firstName !== "" && this.state.lastName !== "" && this.state.username !== "";
  }

  displayBox() {
    if (this.state.displayState === "form") {
      return __jsx(ContentBox, {
        title: "Hey There 👋",
        subtitle: "Welcome to the new DMK Portal!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(FormBox, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }));
    } else if (this.state.displayState === "loading") {
      return __jsx(ContentBox, {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication. If you didn't get anything, refresh and retype your username.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(Input, {
        placeholder: "top secret...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx(Button, {
        onClick: this.validateToken,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }));
    } else if (this.state.displayState === "invalid") {
      return __jsx(ContentBox, {
        title: "Uh Oh 😕",
        subtitle: "Looks like you are missing some fields. Try again.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(FormBox, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }));
    } else {
      return __jsx(ContentBox, {
        title: "Well, that's embarrassing 🙈",
        subtitle: "There's an error on our end. Try again later!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), this.displayBox(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmaXJzdE5hbWU6IFwiU1wiLCBsYXN0TmFtZTogXCJhXCIsIHVzZXJuYW1lOiBcImhcIiwgZGlzcGxheVN0YXRlOiBcImZvcm1cIiwgcGFzc3dvcmQ6IFwiXCIgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRlVG9rZW4gPSB0aGlzLnZhbGlkYXRlVG9rZW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbaW5wdXROYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUZpZWxkcygpKSB7XG4gICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgICAgZmV0Y2godXJsICsgXCIvYWRkP2ZpcnN0PVwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiZsYXN0PVwiICsgdGhpcy5zdGF0ZS5sYXN0TmFtZSArIFwiJnVzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGlmIChkYXRhW1wic2VudFwiXSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJsb2FkaW5nXCIgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSlcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFwiIH0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICB2YWxpZGF0ZVRva2VuKCkge1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG4gICAgZmV0Y2godXJsICsgXCIvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdGhpcy5zdGF0ZS5wYXNzd29yZCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhW1wiYXV0aGVudGljYXRlZFwiXSkge1xuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidXNlcj1cIiArIHRoaXMuc3RhdGUudXNlcm5hbWUgKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJuYW1lPVwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICB2YWxpZGF0ZUZpZWxkcygpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuZmlyc3ROYW1lICE9PSBcIlwiICYmIHRoaXMuc3RhdGUubGFzdE5hbWUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gXCJcIik7XG4gIH1cblxuICBkaXNwbGF5Qm94KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJmb3JtXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIkhleSBUaGVyZSDwn5GLXCJ9IHN1YnRpdGxlPXtcIldlbGNvbWUgdG8gdGhlIG5ldyBETUsgUG9ydGFsIVwifT5cbiAgICAgICAgICA8Rm9ybUJveCBmaXJzdE5hbWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfSBsYXN0TmFtZT17dGhpcy5zdGF0ZS5sYXN0TmFtZX0gdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIkNoZWNrIHlvdXIgZW1haWwg8J+Tq1wifSBzdWJ0aXRsZT17XCJDaGVjayB5b3VyIFB1cmR1ZSBlbWFpbCBmb3IgYXV0aGVudGljYXRpb24uIElmIHlvdSBkaWRuJ3QgZ2V0IGFueXRoaW5nLCByZWZyZXNoIGFuZCByZXR5cGUgeW91ciB1c2VybmFtZS5cIn0+XG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwidG9wIHNlY3JldC4uLlwiIC8+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnZhbGlkYXRlVG9rZW59IC8+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJpbnZhbGlkXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIlVoIE9oIPCfmJVcIn0gc3VidGl0bGU9e1wiTG9va3MgbGlrZSB5b3UgYXJlIG1pc3Npbmcgc29tZSBmaWVsZHMuIFRyeSBhZ2Fpbi5cIn0+XG4gICAgICAgICAgPEZvcm1Cb3ggZmlyc3ROYW1lPXt0aGlzLnN0YXRlLmZpcnN0TmFtZX0gbGFzdE5hbWU9e3RoaXMuc3RhdGUubGFzdE5hbWV9IHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIldlbGwsIHRoYXQncyBlbWJhcnJhc3Npbmcg8J+ZiFwifSBzdWJ0aXRsZT17XCJUaGVyZSdzIGFuIGVycm9yIG9uIG91ciBlbmQuIFRyeSBhZ2FpbiBsYXRlciFcIn0+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAge3RoaXMuZGlzcGxheUJveCgpfVxuICAgICAgICB7LypHbG9iYWwgQ1NTIGdvZXMgaW4gaGVyZSovfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FCMUIyM1wiLFxuICAgICAgaGVpZ2h0OiBcIjU4cHhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZJbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHN0eWxlPXtuYXZJbWdTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICBjb250ZW50Qm94U3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCJcbiAgICAgIH0sXG4gICAgICBib3hUaXRsZVN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgZm9udFNpemU6IFwiMzVweFwiXG4gICAgICB9LFxuICAgICAgaW5uZXJDb250ZW50U3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICB9LFxuICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIyMHB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnRCb3hTdHlsZX0+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLmJveFRpdGxlU3R5bGV9Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJDb250ZW50U3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBGb3JtQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICBmb3JtQ29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXt0aGlzLnByb3BzLmZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy5sYXN0TmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXt0aGlzLnByb3BzLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUHVyZHVlIFVzZXJuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLmZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyKSB7XG4gICAgICBidXR0b25TdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQjFCMjNcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT7ihpI8L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
  }

}

class NavBar extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const navContainerStyle = {
      width: "100%",
      backgroundColor: "#AB1B23",
      height: "58px"
    };
    const navImgStyle = {
      width: "50px",
      marginLeft: "20px",
      marginTop: "6px"
    };
    return __jsx("div", {
      style: navContainerStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }));
  }

}

class ContentBox extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let styles = {
      contentBoxStyle: {
        backgroundColor: "white",
        width: "500px",
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: "block",
        margin: "0px auto",
        marginTop: "20px",
        overflow: "scroll",
        height: "450px",
        maxWidth: "95%"
      },
      boxTitleStyle: {
        textAlign: "center",
        paddingTop: "30px",
        margin: "0px",
        fontWeight: "400",
        fontSize: "35px"
      },
      innerContentStyle: {
        paddingTop: "10px",
        width: "95%",
        display: "block",
        margin: "0px auto",
        position: "relative"
      },
      subtitle: {
        textAlign: "center",
        fontWeight: "300",
        marginTop: "10px",
        paddingLeft: "20px",
        paddingRight: "20px"
      }
    };
    return __jsx("div", {
      style: styles.contentBoxStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, this.props.children));
  }

}

class FormBox extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    let styles = {
      formContainer: {
        display: "block",
        margin: "0px auto",
        width: "100%",
        marginBottom: "20px",
        marginTop: "30px"
      }
    };
    return __jsx("form", {
      onSubmit: this.props.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("div", {
      style: styles.formContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(Input, {
      name: "firstName",
      value: this.props.firstName,
      onChange: this.props.handleChange,
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }), __jsx(Input, {
      name: "lastName",
      value: this.props.lastName,
      onChange: this.props.handleChange,
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), __jsx(Input, {
      name: "username",
      value: this.props.username,
      onChange: this.props.handleChange,
      placeholder: "Purdue Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), __jsx(Button, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }));
  }

}

class Input extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    const inputStyle = {
      border: "1px solid black",
      padding: "6px",
      borderRadius: "4px",
      fontSize: "17px",
      display: "block",
      margin: "20px auto",
      textAlign: "center",
      width: this.props.width
    };
    return __jsx("input", {
      name: this.props.name,
      style: inputStyle,
      value: this.props.firstName,
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    });
  }

}

class Button extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let buttonStyle = {
      fontSize: "30px",
      border: "none",
      backgroundColor: "rgb(191, 49, 56)",
      color: "white",
      width: "100px",
      height: "40px",
      cursor: "pointer",
      outline: "none",
      borderRadius: "4px",
      display: "block",
      margin: "0px auto",
      marginTop: "30px"
    };

    if (this.state.hover) {
      buttonStyle.backgroundColor = "#AB1B23";
    }

    return __jsx("button", {
      onMouseLeave: () => this.toggleHover(),
      onMouseEnter: () => this.toggleHover(),
      style: buttonStyle,
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "\u2192");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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
//# sourceMappingURL=login.js.map