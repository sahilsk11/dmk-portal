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
    super(props); //this.state = { firstName: "", lastName: "", username: "", displayState: "entry", password: "", loading: false, newUser: false }

    this.state = {
      displayState: "username",
      loading: false,
      inputValue: "",
      newUser: false,
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
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

  checkUsername(event) {
    event.preventDefault();
    const username = this.state.inputValue;

    if (username == "") {
      alert("Please type in your username!");
      return;
    } else if (username.length > 10) {
      alert("That's a little too long!");
      return;
    }

    this.setState({
      loading: true
    });
    const url = "http://localhost:8080/check_user?username=" + username;
    fetch(url, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      this.setState({
        displayState: data.state === "new_user" ? "emailVerification" : data.state,
        cellID: data.cellID,
        newUser: data.state === "new_user",
        username,
        loading: false,
        inputValue: ""
      });
    }).catch(error => {
      this.setState({
        displayState: "error"
      });
    });
    ;
  }

  authenticate(event) {
    event.preventDefault();
    const token = this.state.inputValue;

    if (token == "") {
      alert("Please type in your login token!");
      return;
    } else if (token.length > 10) {
      alert("That's a little too long!");
      return;
    }

    const url = "http://localhost:8080/authenticate?username=" + this.state.username + "&token=" + token;
    fetch(url, {
      method: "POST"
    }).then(response => response.json()).then(data => {
      if (data.authenticated) {
        if (this.state.newUser) {
          this.setState({
            displayState: "newUserFirstName",
            inputValue: ""
          });
        } else {
          document.cookie = "token=" + data.token + "; path=/";
          window.location = "/";
        }
      } else {
        this.setState({
          displayState: "invalidPassword"
        });
      }
    });
  }

  setFirstName(event) {
    event.preventDefault();

    if (this.state.inputValue == "") {
      alert("Please type in your name!");
      return;
    } else if (this.state.inputValue.length > 10) {
      alert("That's a little too long!");
      return;
    }

    this.setState({
      firstName: this.state.inputValue,
      inputValue: "",
      displayState: "newUserLastName"
    });
  }

  setLastName(event) {
    event.preventDefault();
    const lastName = this.state.inputValue;

    if (lastName == "") {
      alert("Please type in your last name!");
      return;
    } else if (lastName.length > 10) {
      alert("That's a little too long!");
      return;
    }

    const url = "http://localhost:8080/add_name?cellID=" + this.state.cellID + "&firstName=" + this.state.firstName + "&lastName=" + lastName;
    fetch(url);
    document.cookie = "token=" + this.state.username + "; path=/";
    window.location = "/";
  }

  render() {
    const pageStates = {
      username: {
        title: "Hey There 👋",
        subtitle: "Welcome to the DMK Portal! Let's start with your Purdue username.",
        onFormSubmit: this.checkUsername,
        inputPlaceholder: "Purdue Username"
      },
      emailVerification: {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication (or continue if password saved).",
        onFormSubmit: this.authenticate,
        inputPlaceholder: "top secret..."
      },
      newUserFirstName: {
        title: "You look new! 👀",
        subtitle: "What's your first name?",
        onFormSubmit: this.setFirstName,
        inputPlaceholder: "What do you go by?"
      },
      newUserLastName: {
        title: "...and last name 🎉",
        subtitle: "No middle name please.",
        onFormSubmit: this.setLastName,
        inputPlaceholder: "Who are your people?"
      },
      invalidPassword: {
        title: "Uh oh 😧",
        subtitle: "That doesn't look right. Try copying the code exactly as it appears in the email.",
        onFormSubmit: this.authenticate,
        inputPlaceholder: "top secret..."
      },
      error: {
        title: "Well, that's embarrassing 🙈",
        subtitle: "There's an error on our end. Try again later!",
        onFormSubmit: this.authenticate,
        inputPlaceholder: "top secret...",
        hideForm: true
      }
    };
    const stateElements = pageStates[this.state.displayState];
    return __jsx("div", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "DMK Portal - Login"), __jsx("link", {
      href: "/images/icon.png",
      rel: "icon",
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), __jsx(ContentBox, {
      title: stateElements.title,
      subtitle: stateElements.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("form", {
      onSubmit: stateElements.onFormSubmit,
      className: "jsx-1555840043",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(Input, {
      onChange: this.handleChange,
      value: this.state.inputValue,
      placeholder: stateElements.inputPlaceholder,
      hide: stateElements.hideForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), __jsx(Button, {
      loading: this.state.loading,
      hide: stateElements.hideForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlLVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vdGhpcy5zdGF0ZSA9IHsgZmlyc3ROYW1lOiBcIlwiLCBsYXN0TmFtZTogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJlbnRyeVwiLCBwYXNzd29yZDogXCJcIiwgbG9hZGluZzogZmFsc2UsIG5ld1VzZXI6IGZhbHNlIH1cbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5U3RhdGU6IFwidXNlcm5hbWVcIiwgbG9hZGluZzogZmFsc2UsIGlucHV0VmFsdWU6IFwiXCIsIG5ld1VzZXI6IGZhbHNlLCB1c2VybmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUgPSB0aGlzLmF1dGhlbnRpY2F0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tVc2VybmFtZSA9IHRoaXMuY2hlY2tVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gdGhpcy5zZXRGaXJzdE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExhc3ROYW1lID0gdGhpcy5zZXRMYXN0TmFtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIGlmICh1c2VybmFtZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgdXNlcm5hbWUhXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh1c2VybmFtZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY2hlY2tfdXNlcj91c2VybmFtZT1cIiArIHVzZXJuYW1lO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlID09PSBcIm5ld191c2VyXCIgPyBcImVtYWlsVmVyaWZpY2F0aW9uXCIgOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbmV3VXNlcjogZGF0YS5zdGF0ZSA9PT0gXCJuZXdfdXNlclwiLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7O1xuICB9XG5cbiAgYXV0aGVudGljYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICBpZiAodG9rZW4gPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIGxvZ2luIHRva2VuIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodG9rZW4ubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoZW50aWNhdGU/dXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCImdG9rZW49XCIgKyB0b2tlbjtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubmV3VXNlcikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJuZXdVc2VyRmlyc3ROYW1lXCIsIGlucHV0VmFsdWU6IFwiXCIgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFBhc3N3b3JkXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHNldEZpcnN0TmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgbmFtZSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdE5hbWU6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcIm5ld1VzZXJMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIGlmIChsYXN0TmFtZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgbGFzdCBuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobGFzdE5hbWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRfbmFtZT9jZWxsSUQ9XCIgKyB0aGlzLnN0YXRlLmNlbGxJRCArIFwiJmZpcnN0TmFtZT1cIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCImbGFzdE5hbWU9XCIgKyBsYXN0TmFtZTtcbiAgICBmZXRjaCh1cmwpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCI7IHBhdGg9L1wiO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBhZ2VTdGF0ZXMgPSB7XG4gICAgICB1c2VybmFtZToge1xuICAgICAgICB0aXRsZTogXCJIZXkgVGhlcmUg8J+Ri1wiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuY2hlY2tVc2VybmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJQdXJkdWUgVXNlcm5hbWVcIlxuICAgICAgfSxcbiAgICAgIGVtYWlsVmVyaWZpY2F0aW9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkNoZWNrIHlvdXIgZW1haWwg8J+Tq1wiLFxuICAgICAgICBzdWJ0aXRsZTogXCJDaGVjayB5b3VyIFB1cmR1ZSBlbWFpbCBmb3IgYXV0aGVudGljYXRpb24gKG9yIGNvbnRpbnVlIGlmIHBhc3N3b3JkIHNhdmVkKS5cIixcbiAgICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLmF1dGhlbnRpY2F0ZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJ0b3Agc2VjcmV0Li4uXCJcbiAgICAgIH0sXG4gICAgICBuZXdVc2VyRmlyc3ROYW1lOiB7XG4gICAgICAgIHRpdGxlOiBcIllvdSBsb29rIG5ldyEg8J+RgFwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuc2V0Rmlyc3ROYW1lLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIldoYXQgZG8geW91IGdvIGJ5P1wiXG4gICAgICB9LFxuICAgICAgbmV3VXNlckxhc3ROYW1lOiB7XG4gICAgICAgIHRpdGxlOiBcIi4uLmFuZCBsYXN0IG5hbWUg8J+OiVwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5zZXRMYXN0TmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiXG4gICAgICB9LFxuICAgICAgaW52YWxpZFBhc3N3b3JkOiB7XG4gICAgICAgIHRpdGxlOiBcIlVoIG9oIPCfmKdcIixcbiAgICAgICAgc3VidGl0bGU6IFwiVGhhdCBkb2Vzbid0IGxvb2sgcmlnaHQuIFRyeSBjb3B5aW5nIHRoZSBjb2RlIGV4YWN0bHkgYXMgaXQgYXBwZWFycyBpbiB0aGUgZW1haWwuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5hdXRoZW50aWNhdGUsXG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IFwidG9wIHNlY3JldC4uLlwiXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgdGl0bGU6IFwiV2VsbCwgdGhhdCdzIGVtYmFycmFzc2luZyDwn5mIXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuYXV0aGVudGljYXRlLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcInRvcCBzZWNyZXQuLi5cIixcbiAgICAgICAgaGlkZUZvcm06IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3RhdGVFbGVtZW50cyA9IHBhZ2VTdGF0ZXNbdGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RE1LIFBvcnRhbCAtIExvZ2luPC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgey8qdGhpcy5kaXNwbGF5Qm94KCkqL31cbiAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3N0YXRlRWxlbWVudHMudGl0bGV9IHN1YnRpdGxlPXtzdGF0ZUVsZW1lbnRzLnN1YnRpdGxlfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3RhdGVFbGVtZW50cy5vbkZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9e3N0YXRlRWxlbWVudHMuaW5wdXRQbGFjZWhvbGRlcn0gaGlkZT17c3RhdGVFbGVtZW50cy5oaWRlRm9ybX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBoaWRlPXtzdGF0ZUVsZW1lbnRzLmhpZGVGb3JtfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICB7LypHbG9iYWwgQ1NTIGdvZXMgaW4gaGVyZSovfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXYgPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgIClcbiAgICB9IHJldHVybiBudWxsO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhvdmVyOiBmYWxzZSB9XG4gIH1cbiAgdG9nZ2xlSG92ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbG9hZGluZ1N5bGUgPSB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Zlcikge1xuICAgICAgYnV0dG9uU3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUIxQjIzXCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLXdoaXRlLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3lsZX0gLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PuKGkjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        lineNumber: 191
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }));
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
        lineNumber: 236
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
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
          lineNumber: 261
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

    if (this.props.hide === true) {
      return null;
    }

    if (this.props.loading) {
      return __jsx("img", {
        src: "/images/loading-white.gif",
        style: loadingSyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "\u2192"));
    }
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