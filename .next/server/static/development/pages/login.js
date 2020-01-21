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
var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    this.authenticate = this.authenticate.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  handleChange(event) {
    const inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    });
  }

  authenticate(event) {
    event.preventDefault();
    const url = "http://localhost:8080";
    fetch(url + "/authenticate?username=" + this.state.username + "&token=" + this.state.password, {
      method: "POST"
    }).then(response => response.json()).then(data => {
      if (data["authenticated"]) {
        document.cookie = "token=" + data.token + "; path=/";
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
    const url = "http://localhost:8080/check_user?username=" + this.state.username;
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
    }).catch(error => {
      this.setState({
        displayState: "error"
      });
    });
    ;
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
          lineNumber: 60
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.checkUsername,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(Input, {
        name: "username",
        onChange: this.handleChange,
        placeholder: "Purdue Username",
        value: this.state.username,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })));
    } else if (this.state.displayState === "authenticate") {
      return __jsx(ContentBox, {
        title: "Check your email 📫",
        subtitle: "Check your Purdue email for authentication (or continue if password saved).",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.authenticate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(Input, {
        name: "password",
        onChange: this.handleChange,
        value: this.state.password,
        placeholder: "top secret...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 79
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
        lineNumber: 87
      },
      __self: this
    }, __jsx(NavBar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), this.displayBox(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1555840043",
      __self: this
    }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBmaXJzdE5hbWU6IFwiXCIsIGxhc3ROYW1lOiBcIlwiLCB1c2VybmFtZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcImVudHJ5XCIsIHBhc3N3b3JkOiBcIlwiLCBsb2FkaW5nOiBmYWxzZSwgbmV3VXNlcjogZmFsc2UgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXV0aGVudGljYXRlID0gdGhpcy5hdXRoZW50aWNhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrVXNlcm5hbWUgPSB0aGlzLmNoZWNrVXNlcm5hbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGlucHV0TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbaW5wdXROYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgYXV0aGVudGljYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xuICAgIGZldGNoKHVybCArIFwiL2F1dGhlbnRpY2F0ZT91c2VybmFtZT1cIiArIHRoaXMuc3RhdGUudXNlcm5hbWUgKyBcIiZ0b2tlbj1cIiArIHRoaXMuc3RhdGUucGFzc3dvcmQsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YVtcImF1dGhlbnRpY2F0ZWRcIl0pIHtcbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuPVwiICsgZGF0YS50b2tlbiArIFwiOyBwYXRoPS9cIjtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja191c2VyP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgbGV0IG5ld1VzZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gZGF0YS5zdGF0ZTtcbiAgICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IFwibmV3X3VzZXJcIikge1xuICAgICAgICAgIG5ld1VzZXIgPSB0cnVlO1xuICAgICAgICAgIG5ld1N0YXRlID0gXCJhdXRoZW50aWNhdGVcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IG5ld1N0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbmV3VXNlcjogbmV3VXNlciB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSk7XG4gICAgICB9KTs7XG4gIH1cblxuICB2YWxpZGF0ZUZpZWxkcygpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuZmlyc3ROYW1lICE9PSBcIlwiICYmIHRoaXMuc3RhdGUubGFzdE5hbWUgIT09IFwiXCIgJiYgdGhpcy5zdGF0ZS51c2VybmFtZSAhPT0gXCJcIik7XG4gIH1cblxuICBkaXNwbGF5Qm94KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJlbnRyeVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17XCJIZXkgVGhlcmUg8J+Ri1wifSBzdWJ0aXRsZT17XCJXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwifT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5jaGVja1VzZXJuYW1lfT5cbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUHVyZHVlIFVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PT0gXCJhdXRoZW50aWNhdGVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e1wiQ2hlY2sgeW91ciBlbWFpbCDwn5OrXCJ9IHN1YnRpdGxlPXtcIkNoZWNrIHlvdXIgUHVyZHVlIGVtYWlsIGZvciBhdXRoZW50aWNhdGlvbiAob3IgY29udGludWUgaWYgcGFzc3dvcmQgc2F2ZWQpLlwifT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hdXRoZW50aWNhdGV9PlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwidG9wIHNlY3JldC4uLlwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtcIldlbGwsIHRoYXQncyBlbWJhcnJhc3Npbmcg8J+ZiFwifSBzdWJ0aXRsZT17XCJUaGVyZSdzIGFuIGVycm9yIG9uIG91ciBlbmQuIFRyeSBhZ2FpbiBsYXRlciFcIn0+XG4gICAgICAgIDwvQ29udGVudEJveD5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAge3RoaXMuZGlzcGxheUJveCgpfVxuICAgICAgICB7LypHbG9iYWwgQ1NTIGdvZXMgaW4gaGVyZSovfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FCMUIyM1wiLFxuICAgICAgaGVpZ2h0OiBcIjU4cHhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZJbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHN0eWxlPXtuYXZJbWdTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICBjb250ZW50Qm94U3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzUwcHhcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCJcbiAgICAgIH0sXG4gICAgICBib3hUaXRsZVN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgZm9udFNpemU6IFwiMzVweFwiXG4gICAgICB9LFxuICAgICAgaW5uZXJDb250ZW50U3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICB9LFxuICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIyMHB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnRCb3hTdHlsZX0+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLmJveFRpdGxlU3R5bGV9Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJDb250ZW50U3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dFN0eWxlID0ge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIyMHB4IGF1dG9cIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaG92ZXI6IGZhbHNlIH1cbiAgfVxuICB0b2dnbGVIb3ZlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTEsIDQ5LCA1NilcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBsb2FkaW5nU3lsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyKSB7XG4gICAgICBidXR0b25TdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQjFCMjNcIlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIiBzdHlsZT17bG9hZGluZ1N5bGV9IC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT7ihpI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        lineNumber: 121
      },
      __self: this
    }, __jsx("img", {
      src: "/images/icon.png",
      style: navImgStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
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
        lineNumber: 166
      },
      __self: this
    }, __jsx("h3", {
      style: styles.boxTitleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, this.props.title), __jsx("h3", {
      style: styles.subtitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, this.props.subtitle), __jsx("div", {
      style: styles.innerContentStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
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
    return __jsx("input", {
      name: this.props.name,
      style: inputStyle,
      value: this.props.value,
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    });
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

    if (this.props.loading) {
      return __jsx("img", {
        src: "/images/loading.gif",
        style: loadingSyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      });
    } else {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, __jsx("button", {
        onMouseLeave: () => this.toggleHover(),
        onMouseEnter: () => this.toggleHover(),
        style: buttonStyle,
        onClick: this.props.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
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