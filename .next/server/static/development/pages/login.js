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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState: "default",
      loading: false,
      inputValue: "",
      newUser: false,
      username: "",
      firstName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.skipEmail = this.skipEmail.bind(this);
    this.confirmedEmail = this.confirmedEmail.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  skipEmail() {
    console.log("HI");
    this.setState({
      displayState: "authenticate"
    });
  }

  validateInput(inputValue) {
    if (inputValue == "") {
      alert("Please type in your username!");
      return;
    } else if (inputValue.length > 10) {
      alert("That's a little too long!");
      return;
    }
  }

  checkUsername(event) {
    event.preventDefault();
    const username = this.state.inputValue;
    this.setState({
      username,
      loading: true
    });
    const url = "http://localhost:8080/checkUser?username=" + username;
    fetch(url, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      this.setState({
        displayState: data.state,
        cellID: data.cellID,
        loading: false,
        inputValue: "",
        newUser: data.state === "newUser",
        firstName: data.firstName
      });
    }).catch(error => {
      this.setState({
        displayState: "error"
      });
    });
  }

  setFirstName(event) {
    event.preventDefault();
    this.setState({
      firstName: this.state.inputValue,
      inputValue: "",
      displayState: "setLastName"
    });
  }

  setLastName(event) {
    event.preventDefault();
    this.setState({
      lastName: this.state.inputValue,
      inputValue: "",
      displayState: "returningUser"
    });
  }

  confirmedEmail() {
    const username = this.state.username;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    this.setState({
      loading: true
    });
    const url = "http://localhost:8080/sendEmail?username=" + username + "&firstName=" + firstName + "&lastName=" + lastName + "&newUser=" + this.state.newUser + "&cellID=" + this.state.cellID;
    fetch(url).then(response => response.json()).then(data => {
      if (data.success) {
        this.setState({
          displayState: "authenticate",
          inputValue: "",
          loading: false
        });
      }
    }).catch(error => {
      this.setState({
        displayState: "error"
      });
    });
  }

  authenticate(event) {
    event.preventDefault();
    const token = this.state.inputValue;
    const url = "http://localhost:8080/authenticate?username=" + this.state.username + "&token=" + token;
    fetch(url, {
      method: "POST"
    }).then(response => response.json()).then(data => {
      if (data.authenticated) {
        document.cookie = "token=" + data.token + "; path=/";
        window.location = "/";
      } else {
        this.setState({
          displayState: "invalidPassword"
        });
      }
    });
  }

  renderBasedOnState() {
    if (this.state.displayState == "default") {
      return __jsx(InputContentBox, {
        title: "Hey There \uD83D\uDC4B",
        subtitle: " Welcome to the DMK Portal! Let's start with your Purdue username.",
        onFormSubmit: this.checkUsername,
        onChange: this.handleChange,
        inputValue: this.state.inputValue,
        placeholder: "Purdue username",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      });
    } else if (this.state.displayState == "newUser") {
      return __jsx(InputContentBox, {
        title: "You look new! \uD83D\uDC40",
        subtitle: "What's your first name?",
        onFormSubmit: this.setFirstName,
        onChange: this.handleChange,
        inputValue: this.state.inputValue,
        placeholder: "What do you go by?",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      });
    } else if (this.state.displayState == "setLastName") {
      return __jsx(InputContentBox, {
        title: "...and last name \uD83C\uDF89",
        subtitle: "No middle name please.",
        onFormSubmit: this.setLastName,
        onChange: this.handleChange,
        inputValue: this.state.inputValue,
        placeholder: "Who are your people?",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      });
    } else if (this.state.displayState == "returningUser") {
      return __jsx(DialogueBox, {
        title: "Welcome, " + this.state.firstName + " 🐶",
        username: this.state.username,
        onSubmit: this.confirmedEmail,
        skipEmail: this.skipEmail,
        displaySkip: !this.state.newUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      });
    } else if (this.state.displayState == "authenticate") {
      return __jsx(InputContentBox, {
        title: "Identify Yourself \uD83D\uDD10",
        subtitle: "You should have received your code via email.",
        onFormSubmit: this.authenticate,
        onChange: this.handleChange,
        inputValue: this.state.inputValue,
        placeholder: "Top secret",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      });
    } else if (this.state.displayState == "invalidPassword") {
      return __jsx(InputContentBox, {
        title: "Not quite \uD83D\uDE15",
        subtitle: "That code is incorrect. Did you get caps right?",
        onFormSubmit: this.authenticate,
        onChange: this.handleChange,
        inputValue: this.state.inputValue,
        placeholder: "Top secret",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      });
    } else {
      return __jsx(ErrorBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
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
        lineNumber: 128
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "DMK Portal - Login"), __jsx("link", {
      href: "/images/icon.png",
      rel: "icon",
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    })), __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), this.renderBasedOnState(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5za2lwRW1haWwgPSB0aGlzLnNraXBFbWFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZmlybWVkRW1haWwgPSB0aGlzLmNvbmZpcm1lZEVtYWlsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUgPSB0aGlzLmF1dGhlbnRpY2F0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tVc2VybmFtZSA9IHRoaXMuY2hlY2tVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gdGhpcy5zZXRGaXJzdE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExhc3ROYW1lID0gdGhpcy5zZXRMYXN0TmFtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHNraXBFbWFpbCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhJXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJhdXRoZW50aWNhdGVcIiB9KVxuICB9XG5cbiAgdmFsaWRhdGVJbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIHVzZXJuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hlY2tVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBuZXdVc2VyOiBkYXRhLnN0YXRlID09PSBcIm5ld1VzZXJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0Rmlyc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIGlucHV0VmFsdWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJzZXRMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwicmV0dXJuaW5nVXNlclwiIH0pO1xuICB9XG5cbiAgY29uZmlybWVkRW1haWwoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRoaXMuc3RhdGUuZmlyc3ROYW1lO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5sYXN0TmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2VuZEVtYWlsP3VzZXJuYW1lPVwiICsgdXNlcm5hbWUgKyBcIiZmaXJzdE5hbWU9XCIgKyBmaXJzdE5hbWUgKyBcIiZsYXN0TmFtZT1cIiArIGxhc3ROYW1lICsgXCImbmV3VXNlcj1cIiArIHRoaXMuc3RhdGUubmV3VXNlciArIFwiJmNlbGxJRD1cIiArIHRoaXMuc3RhdGUuY2VsbElEO1xuICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzcGxheVN0YXRlOiBcImF1dGhlbnRpY2F0ZVwiLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhdXRoZW50aWNhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdG9rZW47XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFBhc3N3b3JkXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlckJhc2VkT25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiSGV5IFRoZXJlIPCfkYtcIiBzdWJ0aXRsZT1cIiBXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5jaGVja1VzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJQdXJkdWUgdXNlcm5hbWVcIiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJuZXdVc2VyXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiWW91IGxvb2sgbmV3ISDwn5GAXCIgc3VidGl0bGU9XCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiIG9uRm9ybVN1Ym1pdD17dGhpcy5zZXRGaXJzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IGdvIGJ5P1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInNldExhc3ROYW1lXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiLi4uYW5kIGxhc3QgbmFtZSDwn46JXCIgc3VidGl0bGU9XCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIgb25Gb3JtU3VibWl0PXt0aGlzLnNldExhc3ROYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInJldHVybmluZ1VzZXJcIikge1xuICAgICAgcmV0dXJuIDxEaWFsb2d1ZUJveCB0aXRsZT17XCJXZWxjb21lLCBcIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCIg8J+QtlwifSB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25TdWJtaXQ9e3RoaXMuY29uZmlybWVkRW1haWx9IHNraXBFbWFpbD17dGhpcy5za2lwRW1haWx9IGRpc3BsYXlTa2lwPXshdGhpcy5zdGF0ZS5uZXdVc2VyfSAvPlxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJhdXRoZW50aWNhdGVcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJJZGVudGlmeSBZb3Vyc2VsZiDwn5SQXCIgc3VidGl0bGU9XCJZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgeW91ciBjb2RlIHZpYSBlbWFpbC5cIiBvbkZvcm1TdWJtaXQ9e3RoaXMuYXV0aGVudGljYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJUb3Agc2VjcmV0XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwiaW52YWxpZFBhc3N3b3JkXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiTm90IHF1aXRlIPCfmJVcIiBzdWJ0aXRsZT1cIlRoYXQgY29kZSBpcyBpbmNvcnJlY3QuIERpZCB5b3UgZ2V0IGNhcHMgcmlnaHQ/XCIgb25Gb3JtU3VibWl0PXt0aGlzLmF1dGhlbnRpY2F0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPVwiVG9wIHNlY3JldFwiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8RXJyb3JCb3ggLz47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RE1LIFBvcnRhbCAtIExvZ2luPC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAge3RoaXMucmVuZGVyQmFzZWRPblN0YXRlKCl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FCMUIyM1wiLFxuICAgICAgaGVpZ2h0OiBcIjU4cHhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZJbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHN0eWxlPXtuYXZJbWdTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdWJ0aXRsZT17dGhpcy5wcm9wcy5zdWJ0aXRsZX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMucHJvcHMubG9hZGluZ30gYnV0dG9uVGV4dD1cIuKGklwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEVycm9yQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudEJveCB0aXRsZT1cIldlbGwsIHRoYXQncyBlbWJhcnJhc3Npbmcg8J+ZiFwiIHN1YnRpdGxlPVwiVGhlcmUncyBhbiBlcnJvciBvbiBvdXIgZW5kLiBUcnkgYWdhaW4gbGF0ZXIhXCIgLz5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIERpYWxvZ3VlQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyU2tpcCgpIHtcbiAgICBjb25zdCBhbmNob3JTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5kaXNwbGF5U2tpcCkge1xuICAgICAgcmV0dXJuIDxhIHN0eWxlPXthbmNob3JTdHlsZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNraXBFbWFpbH0+SSBrbm93IG15IGNvZGU8L2E+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhbmNob3JTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIlxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN1YnRpdGxlPXtcIldlJ3JlIHNlbmRpbmcgeW91ciBjb2RlIHRvIFwiICsgdGhpcy5wcm9wcy51c2VybmFtZSArIFwiQHB1cmR1ZS5lZHUuXCJ9PlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblRleHQ9XCJFbWFpbCBtZSB0aGUgY29kZVwiIGZvbnRTaXplPVwiMTVcIiB3aWR0aD1cIjE4MFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TdWJtaXR9IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjQwcHhcIiB9fT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTa2lwKCl9XG4gICAgICAgICAgPGEgc3R5bGU9e2FuY2hvclN0eWxlfSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IGxvY2F0aW9uLnJlbG9hZCgpfT5Pb3BzIC0gd3JvbmcgZW1haWwhPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9Db250ZW50Qm94PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgIClcbiAgICB9IHJldHVybiBudWxsO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhvdmVyOiBmYWxzZSB9XG4gIH1cbiAgdG9nZ2xlSG92ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgPT0gdW5kZWZpbmVkID8gXCIzMHB4XCIgOiB0aGlzLnByb3BzLmZvbnRTaXplICsgXCJweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggPT0gdW5kZWZpbmVkID8gXCIxMDBweFwiIDogdGhpcy5wcm9wcy53aWR0aCArIFwicHhcIixcbiAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbG9hZGluZ1N5bGUgPSB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Zlcikge1xuICAgICAgYnV0dG9uU3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUIxQjIzXCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLXdoaXRlLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3lsZX0gLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9Pnt0aGlzLnByb3BzLmJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
  }

}

class NavBar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
        lineNumber: 165
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }));
  }

}

class InputContentBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(ContentBox, {
      title: this.props.title,
      subtitle: this.props.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.props.onFormSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx(Input, {
      onChange: this.props.onChange,
      value: this.props.inputValue,
      placeholder: this.props.placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), __jsx(Button, {
      loading: this.props.loading,
      buttonText: "\u2192",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    })));
  }

}

class ErrorBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(ContentBox, {
      title: "Well, that's embarrassing \uD83D\uDE48",
      subtitle: "There's an error on our end. Try again later!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    });
  }

}

class DialogueBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderSkip() {
    const anchorStyle = {
      textAlign: 'center',
      fontSize: "12px",
      display: "block",
      paddingBottom: "10px"
    };

    if (this.props.displaySkip) {
      return __jsx("a", {
        style: anchorStyle,
        href: "#",
        onClick: this.props.skipEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "I know my code");
    }
  }

  render() {
    const anchorStyle = {
      textAlign: 'center',
      fontSize: "12px",
      display: "block",
      paddingBottom: "10px"
    };
    return __jsx(ContentBox, {
      title: this.props.title,
      subtitle: "We're sending your code to " + this.props.username + "@purdue.edu.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx(Button, {
      buttonText: "Email me the code",
      fontSize: "15",
      width: "180",
      onClick: this.props.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }), __jsx("div", {
      style: {
        marginTop: "40px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, this.renderSkip(), __jsx("a", {
      style: anchorStyle,
      href: "#",
      onClick: () => location.reload(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "Oops - wrong email!")));
  }

}

class ContentBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
        height: "350px",
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
        lineNumber: 265
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, this.props.children));
  }

}

class Input extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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

    if (this.props.hide !== true) {
      return __jsx("input", {
        name: this.props.name,
        style: inputStyle,
        value: this.props.value,
        onChange: this.props.onChange,
        placeholder: this.props.placeholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      });
    }

    return null;
  }

}

class Button extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
      fontSize: this.props.fontSize == undefined ? "30px" : this.props.fontSize + "px",
      border: "none",
      backgroundColor: "rgb(191, 49, 56)",
      color: "white",
      width: this.props.width == undefined ? "100px" : this.props.width + "px",
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

    if (this.props.hide === true) {
      return null;
    }

    if (this.props.loading) {
      return __jsx("img", {
        src: "/images/loading-white.gif",
        style: loadingSyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, this.props.buttonText));
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