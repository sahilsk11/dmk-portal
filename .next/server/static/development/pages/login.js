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
      firstName: "",
      lastName: "",
      username: "",
      displayState: "form",
      password: "",
      loading: false
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
    this.setState({
      loading: true
    });

    if (this.validateFields()) {
      const url = "http://localhost:8080";
      fetch(url + "/add?first=" + this.state.firstName + "&last=" + this.state.lastName + "&username=" + this.state.username, {
        method: "POST",
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state)
      }).then(response => response.json()).then(data => {
        if (data.sent) {
          this.setState({
            displayState: "loading"
          });
        } else {
          const state = data.state;
          console.log(state);
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
  }

  validateToken(event) {
    event.preventDefault();
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
          lineNumber: 65
        },
        __self: this
      }, __jsx(FormBox, {
        loading: this.state.loading,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    } else if (this.state.displayState === "loading") {
      return __jsx(ContentBox, {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication. If you didn't get anything, refresh and retype your username.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.validateToken,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(Input, {
        placeholder: "top secret...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })));
    } else if (this.state.displayState === "invalid") {
      return __jsx(ContentBox, {
        title: "Uh Oh 😕",
        subtitle: "Looks like you are missing some fields. Try again.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
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
          lineNumber: 81
        },
        __self: this
      }));
    } else {
      return __jsx(ContentBox, {
        title: "Well, that's embarrassing 🙈",
        subtitle: "There's an error on our end. Try again later!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
        lineNumber: 94
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), this.displayBox(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmaXJzdE5hbWU6IFwiXCIsIGxhc3ROYW1lOiBcIlwiLCB1c2VybmFtZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcImZvcm1cIiwgcGFzc3dvcmQ6IFwiXCIsIGxvYWRpbmc6IGZhbHNlIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0ZVRva2VuID0gdGhpcy52YWxpZGF0ZVRva2VuLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dE5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2lucHV0TmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICBpZiAodGhpcy52YWxpZGF0ZUZpZWxkcygpKSB7XG4gICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgICAgZmV0Y2godXJsICsgXCIvYWRkP2ZpcnN0PVwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiZsYXN0PVwiICsgdGhpcy5zdGF0ZS5sYXN0TmFtZSArIFwiJnVzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnNlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwibG9hZGluZ1wiIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZGF0YS5zdGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImludmFsaWRcIiB9KVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlVG9rZW4oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG4gICAgZmV0Y2godXJsICsgXCIvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdGhpcy5zdGF0ZS5wYXNzd29yZCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhW1wiYXV0aGVudGljYXRlZFwiXSkge1xuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidXNlcj1cIiArIHRoaXMuc3RhdGUudXNlcm5hbWUgKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJuYW1lPVwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICB2YWxpZGF0ZUZpZWxkcygpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuZmlyc3ROYW1lICE9PSBcIlwiICYmIHRoaXMuc3RhdGUubGFzdE5hbWUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gXCJcIik7XG4gIH1cblxuICBkaXNwbGF5Qm94KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJmb3JtXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIkhleSBUaGVyZSDwn5GLXCJ9IHN1YnRpdGxlPXtcIldlbGNvbWUgdG8gdGhlIG5ldyBETUsgUG9ydGFsIVwifT5cbiAgICAgICAgICA8Rm9ybUJveCBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGZpcnN0TmFtZT17dGhpcy5zdGF0ZS5maXJzdE5hbWV9IGxhc3ROYW1lPXt0aGlzLnN0YXRlLmxhc3ROYW1lfSB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e1wiQ2hlY2sgeW91ciBlbWFpbCDwn5OrXCJ9IHN1YnRpdGxlPXtcIkNoZWNrIHlvdXIgUHVyZHVlIGVtYWlsIGZvciBhdXRoZW50aWNhdGlvbi4gSWYgeW91IGRpZG4ndCBnZXQgYW55dGhpbmcsIHJlZnJlc2ggYW5kIHJldHlwZSB5b3VyIHVzZXJuYW1lLlwifT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy52YWxpZGF0ZVRva2VufT5cbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cInRvcCBzZWNyZXQuLi5cIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT09IFwiaW52YWxpZFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJVaCBPaCDwn5iVXCJ9IHN1YnRpdGxlPXtcIkxvb2tzIGxpa2UgeW91IGFyZSBtaXNzaW5nIHNvbWUgZmllbGRzLiBUcnkgYWdhaW4uXCJ9PlxuICAgICAgICAgIDxGb3JtQm94IGZpcnN0TmFtZT17dGhpcy5zdGF0ZS5maXJzdE5hbWV9IGxhc3ROYW1lPXt0aGlzLnN0YXRlLmxhc3ROYW1lfSB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIn0gc3VidGl0bGU9e1wiVGhlcmUncyBhbiBlcnJvciBvbiBvdXIgZW5kLiBUcnkgYWdhaW4gbGF0ZXIhXCJ9PlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIHt0aGlzLmRpc3BsYXlCb3goKX1cbiAgICAgICAgey8qR2xvYmFsIENTUyBnb2VzIGluIGhlcmUqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjQ1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgZm9ybUNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wcm9wcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy5maXJzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3RoaXMucHJvcHMubGFzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlB1cmR1ZSBVc2VybmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMucHJvcHMubG9hZGluZ30gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLmZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gICAgfVxuICAgIGNvbnN0IGxvYWRpbmdTeWxlID0ge1xuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCJcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXIpIHtcbiAgICAgIGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0FCMUIyM1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3lsZX0gLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PuKGkjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        lineNumber: 128
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
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
        lineNumber: 173
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
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
        lineNumber: 196
      },
      __self: this
    }, __jsx("div", {
      style: styles.formContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx(Input, {
      name: "firstName",
      value: this.props.firstName,
      onChange: this.props.handleChange,
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), __jsx(Input, {
      name: "lastName",
      value: this.props.lastName,
      onChange: this.props.handleChange,
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }), __jsx(Input, {
      name: "username",
      value: this.props.username,
      onChange: this.props.handleChange,
      placeholder: "Purdue Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    })), __jsx(Button, {
      loading: this.props.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
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
        lineNumber: 221
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
    const loadingSyle = {
      width: "30px",
      display: "block",
      margin: "0px auto"
    };

    if (this.state.hover) {
      buttonStyle.backgroundColor = "#AB1B23";
    }

    if (this.props.loading) {
      return __jsx("img", {
        src: "/images/loading.gif",
        style: loadingSyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "\u2192"));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
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