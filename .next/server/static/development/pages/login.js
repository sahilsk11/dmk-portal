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
      displayState: "entry",
      password: "",
      loading: false,
      newUser: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateToken = this.validateToken.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
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

  checkUsername(event) {
    event.preventDefault();
    console.log(this.state.username);
    this.setState({
      loading: true
    });
    const url = "http://localhost:8080/check_user?=" + this.state.username;
    fetch(url, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      let newUser = false;
      let newState = data.state;

      if (data.state === "new_user") {
        newUser = true;
        newState = "authenticate";
      }

      this.setState({
        displayState: newState,
        loading: false,
        newUser: newUser
      });
    });
  }

  validateFields() {
    return this.state.firstName !== "" && this.state.lastName !== "" && this.state.username !== "";
  }

  displayBox() {
    if (this.state.displayState === "entry") {
      return __jsx(ContentBox, {
        title: "Hey There 👋",
        subtitle: "Welcome to the DMK Portal! Let's start with your Purdue username.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.checkUsername,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx(Input, {
        name: "username",
        onChange: this.handleChange,
        placeholder: "Purdue Username",
        value: this.state.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })));
    } else if (this.state.displayState === "authenticate") {
      return __jsx(ContentBox, {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication (or continue if password saved).",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.validateToken,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(Input, {
        value: this.state.password,
        placeholder: "top secret...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })));
    } else {
      console.log(this.state.displayState);
      return __jsx(ContentBox, {
        title: "Well, that's embarrassing 🙈",
        subtitle: "There's an error on our end. Try again later!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
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
        lineNumber: 112
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), this.displayBox(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9IVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmaXJzdE5hbWU6IFwiXCIsIGxhc3ROYW1lOiBcIlwiLCB1c2VybmFtZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcImVudHJ5XCIsIHBhc3N3b3JkOiBcIlwiLCBsb2FkaW5nOiBmYWxzZSwgbmV3VXNlcjogZmFsc2UgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRlVG9rZW4gPSB0aGlzLnZhbGlkYXRlVG9rZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrVXNlcm5hbWUgPSB0aGlzLmNoZWNrVXNlcm5hbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbaW5wdXROYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgIGlmICh0aGlzLnZhbGlkYXRlRmllbGRzKCkpIHtcbiAgICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG4gICAgICBmZXRjaCh1cmwgKyBcIi9hZGQ/Zmlyc3Q9XCIgKyB0aGlzLnN0YXRlLmZpcnN0TmFtZSArIFwiJmxhc3Q9XCIgKyB0aGlzLnN0YXRlLmxhc3ROYW1lICsgXCImdXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXG4gICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuc2VudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJsb2FkaW5nXCIgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBkYXRhLnN0YXRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSlcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFwiIH0pXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVUb2tlbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcbiAgICBmZXRjaCh1cmwgKyBcIi9hdXRoZW50aWNhdGU/dXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCImdG9rZW49XCIgKyB0aGlzLnN0YXRlLnBhc3N3b3JkLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGFbXCJhdXRoZW50aWNhdGVkXCJdKSB7XG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ1c2VyPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiOyBwYXRoPS9cIjtcbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcIm5hbWU9XCIgKyB0aGlzLnN0YXRlLmZpcnN0TmFtZSArIFwiOyBwYXRoPS9cIjtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja191c2VyPz1cIiArIHRoaXMuc3RhdGUudXNlcm5hbWU7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGxldCBuZXdVc2VyID0gZmFsc2U7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IGRhdGEuc3RhdGU7XG4gICAgICAgIGlmIChkYXRhLnN0YXRlID09PSBcIm5ld191c2VyXCIpIHtcbiAgICAgICAgICBuZXdVc2VyID0gdHJ1ZTtcbiAgICAgICAgICBuZXdTdGF0ZSA9IFwiYXV0aGVudGljYXRlXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBuZXdTdGF0ZSwgbG9hZGluZzogZmFsc2UsIG5ld1VzZXI6IG5ld1VzZXIgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlRmllbGRzKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5maXJzdE5hbWUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS5sYXN0TmFtZSAhPT0gXCJcIiAmJiB0aGlzLnN0YXRlLnVzZXJuYW1lICE9PSBcIlwiKTtcbiAgfVxuXG4gIGRpc3BsYXlCb3goKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09PSBcImVudHJ5XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIkhleSBUaGVyZSDwn5GLXCJ9IHN1YnRpdGxlPXtcIldlbGNvbWUgdG8gdGhlIERNSyBQb3J0YWwhIExldCdzIHN0YXJ0IHdpdGggeW91ciBQdXJkdWUgdXNlcm5hbWUuXCJ9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmNoZWNrVXNlcm5hbWV9PlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VybmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJQdXJkdWUgVXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09PSBcImF1dGhlbnRpY2F0ZVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJDaGVjayB5b3VyIGVtYWlsIPCfk6tcIn0gc3VidGl0bGU9e1wiQ2hlY2sgeW91ciBQdXJkdWUgZW1haWwgZm9yIGF1dGhlbnRpY2F0aW9uIChvciBjb250aW51ZSBpZiBwYXNzd29yZCBzYXZlZCkuXCJ9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnZhbGlkYXRlVG9rZW59PlxuICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cInRvcCBzZWNyZXQuLi5cIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIn0gc3VidGl0bGU9e1wiVGhlcmUncyBhbiBlcnJvciBvbiBvdXIgZW5kLiBUcnkgYWdhaW4gbGF0ZXIhXCJ9PlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIHt0aGlzLmRpc3BsYXlCb3goKX1cbiAgICAgICAgey8qR2xvYmFsIENTUyBnb2VzIGluIGhlcmUqL31cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjQ1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgZm9ybUNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wcm9wcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy5maXJzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e3RoaXMucHJvcHMubGFzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5wcm9wcy51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlB1cmR1ZSBVc2VybmFtZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMucHJvcHMubG9hZGluZ30gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhvdmVyOiBmYWxzZSB9XG4gIH1cbiAgdG9nZ2xlSG92ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbG9hZGluZ1N5bGUgPSB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Zlcikge1xuICAgICAgYnV0dG9uU3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUIxQjIzXCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgc3R5bGU9e2xvYWRpbmdTeWxlfSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+4oaSPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        lineNumber: 146
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
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
        lineNumber: 191
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
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
        lineNumber: 214
      },
      __self: this
    }, __jsx("div", {
      style: styles.formContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx(Input, {
      name: "firstName",
      value: this.props.firstName,
      onChange: this.props.handleChange,
      placeholder: "First Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }), __jsx(Input, {
      name: "lastName",
      value: this.props.lastName,
      onChange: this.props.handleChange,
      placeholder: "Last Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }), __jsx(Input, {
      name: "username",
      value: this.props.username,
      onChange: this.props.handleChange,
      placeholder: "Purdue Username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    })), __jsx(Button, {
      loading: this.props.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
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
      value: this.props.value,
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
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
          lineNumber: 277
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
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