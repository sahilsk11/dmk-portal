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
    const host = false ? undefined : "localhost";
    const url = "http://" + host + ":8080/checkUser?username=" + username;
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
    const host = false ? undefined : "localhost";
    const url = "http://" + host + ":8080/sendEmail?username=" + username + "&firstName=" + firstName + "&lastName=" + lastName + "&newUser=" + this.state.newUser + "&cellID=" + this.state.cellID;
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
    const host = false ? undefined : "localhost";
    const url = "http://" + host + ":8080/authenticate?username=" + this.state.username + "&token=" + token;
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
          lineNumber: 114
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
          lineNumber: 116
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
          lineNumber: 118
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
          lineNumber: 120
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
          lineNumber: 122
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
          lineNumber: 124
        },
        __self: this
      });
    } else {
      return __jsx(ErrorBox, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      });
    }
  }

  componentDidMount() {
    console.log("development");
  }

  render() {
    return __jsx("div", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "DMK Portal - Login"), __jsx("link", {
      href: "/images/icon.png",
      rel: "icon",
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }), this.renderBasedOnState(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5za2lwRW1haWwgPSB0aGlzLnNraXBFbWFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29uZmlybWVkRW1haWwgPSB0aGlzLmNvbmZpcm1lZEVtYWlsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUgPSB0aGlzLmF1dGhlbnRpY2F0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tVc2VybmFtZSA9IHRoaXMuY2hlY2tVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gdGhpcy5zZXRGaXJzdE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExhc3ROYW1lID0gdGhpcy5zZXRMYXN0TmFtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHNraXBFbWFpbCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhJXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJhdXRoZW50aWNhdGVcIiB9KVxuICB9XG5cbiAgdmFsaWRhdGVJbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIHVzZXJuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hlY2tVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBjb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcInBvcnRhbC5kbWthbHBoYS5vcmdcIiA6IFwibG9jYWxob3N0XCI7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBuZXdVc2VyOiBkYXRhLnN0YXRlID09PSBcIm5ld1VzZXJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0Rmlyc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIGlucHV0VmFsdWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJzZXRMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwicmV0dXJuaW5nVXNlclwiIH0pO1xuICB9XG5cbiAgY29uZmlybWVkRW1haWwoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRoaXMuc3RhdGUuZmlyc3ROYW1lO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5sYXN0TmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09IFwicHJvZHVjdGlvblwiID8gXCJwb3J0YWwuZG1rYWxwaGEub3JnXCIgOiBcImxvY2FsaG9zdFwiO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL1wiICsgaG9zdCArIFwiOjgwODAvc2VuZEVtYWlsP3VzZXJuYW1lPVwiICsgdXNlcm5hbWUgKyBcIiZmaXJzdE5hbWU9XCIgKyBmaXJzdE5hbWUgKyBcIiZsYXN0TmFtZT1cIiArIGxhc3ROYW1lICsgXCImbmV3VXNlcj1cIiArIHRoaXMuc3RhdGUubmV3VXNlciArIFwiJmNlbGxJRD1cIiArIHRoaXMuc3RhdGUuY2VsbElEO1xuICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzcGxheVN0YXRlOiBcImF1dGhlbnRpY2F0ZVwiLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhdXRoZW50aWNhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXG5cbiAgICBjb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBcInBvcnRhbC5kbWthbHBoYS5vcmdcIiA6IFwibG9jYWxob3N0XCI7XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vXCIgKyBob3N0ICsgXCI6ODA4MC9hdXRoZW50aWNhdGU/dXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCImdG9rZW49XCIgKyB0b2tlbjtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj1cIiArIGRhdGEudG9rZW4gKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJpbnZhbGlkUGFzc3dvcmRcIiB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyQmFzZWRPblN0YXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcImRlZmF1bHRcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJIZXkgVGhlcmUg8J+Ri1wiIHN1YnRpdGxlPVwiIFdlbGNvbWUgdG8gdGhlIERNSyBQb3J0YWwhIExldCdzIHN0YXJ0IHdpdGggeW91ciBQdXJkdWUgdXNlcm5hbWUuXCIgb25Gb3JtU3VibWl0PXt0aGlzLmNoZWNrVXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIlB1cmR1ZSB1c2VybmFtZVwiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcIm5ld1VzZXJcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJZb3UgbG9vayBuZXchIPCfkYBcIiBzdWJ0aXRsZT1cIldoYXQncyB5b3VyIGZpcnN0IG5hbWU/XCIgb25Gb3JtU3VibWl0PXt0aGlzLnNldEZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgZ28gYnk/XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwic2V0TGFzdE5hbWVcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCIuLi5hbmQgbGFzdCBuYW1lIPCfjolcIiBzdWJ0aXRsZT1cIk5vIG1pZGRsZSBuYW1lIHBsZWFzZS5cIiBvbkZvcm1TdWJtaXQ9e3RoaXMuc2V0TGFzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIldobyBhcmUgeW91ciBwZW9wbGU/XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwicmV0dXJuaW5nVXNlclwiKSB7XG4gICAgICByZXR1cm4gPERpYWxvZ3VlQm94IHRpdGxlPXtcIldlbGNvbWUsIFwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiDwn5C2XCJ9IHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvblN1Ym1pdD17dGhpcy5jb25maXJtZWRFbWFpbH0gc2tpcEVtYWlsPXt0aGlzLnNraXBFbWFpbH0gZGlzcGxheVNraXA9eyF0aGlzLnN0YXRlLm5ld1VzZXJ9IC8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcImF1dGhlbnRpY2F0ZVwiKSB7XG4gICAgICByZXR1cm4gPElucHV0Q29udGVudEJveCB0aXRsZT1cIklkZW50aWZ5IFlvdXJzZWxmIPCflJBcIiBzdWJ0aXRsZT1cIllvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCB5b3VyIGNvZGUgdmlhIGVtYWlsLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5hdXRoZW50aWNhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIlRvcCBzZWNyZXRcIiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJpbnZhbGlkUGFzc3dvcmRcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJOb3QgcXVpdGUg8J+YlVwiIHN1YnRpdGxlPVwiVGhhdCBjb2RlIGlzIGluY29ycmVjdC4gRGlkIHlvdSBnZXQgY2FwcyByaWdodD9cIiBvbkZvcm1TdWJtaXQ9e3RoaXMuYXV0aGVudGljYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJUb3Agc2VjcmV0XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxFcnJvckJveCAvPjtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRNSyBQb3J0YWwgLSBMb2dpbjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9pbWFnZXMvaWNvbi5wbmdcIiByZWw9XCJpY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckJhc2VkT25TdGF0ZSgpfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXYgPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXRDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudEJveCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gc3VidGl0bGU9e3RoaXMucHJvcHMuc3VidGl0bGV9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wcm9wcy5vbkZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9IGJ1dHRvblRleHQ9XCLihpJcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NvbnRlbnRCb3g+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBFcnJvckJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIiBzdWJ0aXRsZT1cIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBEaWFsb2d1ZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlclNraXAoKSB7XG4gICAgY29uc3QgYW5jaG9yU3R5bGUgPSB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzcGxheVNraXApIHtcbiAgICAgIHJldHVybiA8YSBzdHlsZT17YW5jaG9yU3R5bGV9IGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5za2lwRW1haWx9Pkkga25vdyBteSBjb2RlPC9hPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYW5jaG9yU3R5bGUgPSB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCJcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdWJ0aXRsZT17XCJXZSdyZSBzZW5kaW5nIHlvdXIgY29kZSB0byBcIiArIHRoaXMucHJvcHMudXNlcm5hbWUgKyBcIkBwdXJkdWUuZWR1LlwifT5cbiAgICAgICAgPEJ1dHRvbiBidXR0b25UZXh0PVwiRW1haWwgbWUgdGhlIGNvZGVcIiBmb250U2l6ZT1cIjE1XCIgd2lkdGg9XCIxODBcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU3VibWl0fSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI0MHB4XCIgfX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2tpcCgpfVxuICAgICAgICAgIDxhIHN0eWxlPXthbmNob3JTdHlsZX0gaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKX0+T29wcyAtIHdyb25nIGVtYWlsITwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgIGNvbnRlbnRCb3hTdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSlcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG4gICAgICAgIGhlaWdodDogXCIzNTBweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCI5NSVcIlxuICAgICAgfSxcbiAgICAgIGJveFRpdGxlU3R5bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICBmb250U2l6ZTogXCIzNXB4XCJcbiAgICAgIH0sXG4gICAgICBpbm5lckNvbnRlbnRTdHlsZToge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgIH0sXG4gICAgICBzdWJ0aXRsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudEJveFN0eWxlfT5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuYm94VGl0bGVTdHlsZX0+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9Pnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pbm5lckNvbnRlbnRTdHlsZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICApXG4gICAgfSByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplID09IHVuZGVmaW5lZCA/IFwiMzBweFwiIDogdGhpcy5wcm9wcy5mb250U2l6ZSArIFwicHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoID09IHVuZGVmaW5lZCA/IFwiMTAwcHhcIiA6IHRoaXMucHJvcHMud2lkdGggKyBcInB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gICAgfVxuICAgIGNvbnN0IGxvYWRpbmdTeWxlID0ge1xuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCJcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXIpIHtcbiAgICAgIGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0FCMUIyM1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy13aGl0ZS5naWZcIiBzdHlsZT17bG9hZGluZ1N5bGV9IC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT57dGhpcy5wcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        lineNumber: 173
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
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
        lineNumber: 183
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.props.onFormSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx(Input, {
      onChange: this.props.onChange,
      value: this.props.inputValue,
      placeholder: this.props.placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx(Button, {
      loading: this.props.loading,
      buttonText: "\u2192",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
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
        lineNumber: 196
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
          lineNumber: 210
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
        lineNumber: 223
      },
      __self: this
    }, __jsx(Button, {
      buttonText: "Email me the code",
      fontSize: "15",
      width: "180",
      onClick: this.props.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }), __jsx("div", {
      style: {
        marginTop: "40px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, this.renderSkip(), __jsx("a", {
      style: anchorStyle,
      href: "#",
      onClick: () => location.reload(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
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
        lineNumber: 273
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
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
          lineNumber: 298
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
          lineNumber: 340
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
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