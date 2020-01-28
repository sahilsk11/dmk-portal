webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      displayState: "default",
      loading: false,
      inputValue: "",
      newUser: false,
      username: "",
      firstName: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.authenticate = _this.authenticate.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.checkUsername = _this.checkUsername.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setFirstName = _this.setFirstName.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.setLastName = _this.setLastName.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
  }, {
    key: "validateInput",
    value: function validateInput(inputValue) {
      if (inputValue == "") {
        alert("Please type in your username!");
        return;
      } else if (inputValue.length > 10) {
        alert("That's a little too long!");
        return;
      }
    }
  }, {
    key: "checkUsername",
    value: function checkUsername(event) {
      var _this2 = this;

      event.preventDefault();
      var username = this.state.inputValue;
      this.setState({
        loading: true
      });
      var url = "http://localhost:8080/checkUser?username=" + username;
      fetch(url, {
        method: 'POST'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.setState({
          displayState: data.state,
          cellID: data.cellID,
          loading: false,
          inputValue: "",
          newUser: data.state === "newUser",
          firstName: data.firstName
        });
      })["catch"](function (error) {
        _this2.setState({
          displayState: "error"
        });
      });
      ;
    }
  }, {
    key: "authenticate",
    value: function authenticate(event) {
      var _this3 = this;

      event.preventDefault();
      var token = this.state.inputValue;

      if (token == "") {
        alert("Please type in your login token!");
        return;
      } else if (token.length > 10) {
        alert("That's a little too long!");
        return;
      }

      var url = "http://localhost:8080/authenticate?username=" + this.state.username + "&token=" + token;
      fetch(url, {
        method: "POST"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.authenticated) {
          if (_this3.state.newUser) {
            document.cookie = "token=" + data.token + "; path=/";

            _this3.setState({
              displayState: "newUserFirstName",
              inputValue: ""
            });
          } else {
            document.cookie = "token=" + data.token + "; path=/";
            window.location = "/";
          }
        } else {
          _this3.setState({
            displayState: "invalidPassword"
          });
        }
      });
    }
  }, {
    key: "setFirstName",
    value: function setFirstName(event) {
      event.preventDefault();
      this.setState({
        firstName: this.state.inputValue,
        inputValue: "",
        displayState: "setLastName"
      });
    }
  }, {
    key: "setLastName",
    value: function setLastName(event) {
      event.preventDefault();
      this.setState({
        lastName: this.state.inputValue,
        inputValue: "",
        displayState: "returningUser"
      });
    }
  }, {
    key: "renderBasedOnState",
    value: function renderBasedOnState() {
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
            lineNumber: 93
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
            lineNumber: 95
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
            lineNumber: 97
          },
          __self: this
        });
      } else if (this.state.displayState == "returningUser") {
        return __jsx(DialogueBox, {
          title: "Welcome, " + this.state.firstName + " 🐶",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        });
      } else {
        return __jsx(ErrorBox, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "DMK Portal - Login"), __jsx("link", {
        href: "/images/icon.png",
        rel: "icon",
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), __jsx(NavBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), this.renderBasedOnState(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1555840043",
        __self: this
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUgPSB0aGlzLmF1dGhlbnRpY2F0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tVc2VybmFtZSA9IHRoaXMuY2hlY2tVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gdGhpcy5zZXRGaXJzdE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExhc3ROYW1lID0gdGhpcy5zZXRMYXN0TmFtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQoaW5wdXRWYWx1ZSkge1xuICAgIGlmIChpbnB1dFZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciB1c2VybmFtZSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGlucHV0VmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBuZXdVc2VyOiBkYXRhLnN0YXRlID09PSBcIm5ld1VzZXJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pOztcbiAgfVxuXG4gIGF1dGhlbnRpY2F0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgaWYgKHRva2VuID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciBsb2dpbiB0b2tlbiFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRva2VuLmxlbmd0aCA+IDEwKSB7XG4gICAgICBhbGVydChcIlRoYXQncyBhIGxpdHRsZSB0b28gbG9uZyFcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdG9rZW47XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5ld1VzZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJuZXdVc2VyRmlyc3ROYW1lXCIsIGlucHV0VmFsdWU6IFwiXCIgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFBhc3N3b3JkXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHNldEZpcnN0TmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwic2V0TGFzdE5hbWVcIiB9KTtcbiAgfVxuXG4gIHNldExhc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGFzdE5hbWU6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcInJldHVybmluZ1VzZXJcIiB9KTtcbiAgfVxuXG4gIHJlbmRlckJhc2VkT25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiSGV5IFRoZXJlIPCfkYtcIiBzdWJ0aXRsZT1cIiBXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5jaGVja1VzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJQdXJkdWUgdXNlcm5hbWVcIiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJuZXdVc2VyXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiWW91IGxvb2sgbmV3ISDwn5GAXCIgc3VidGl0bGU9XCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiIG9uRm9ybVN1Ym1pdD17dGhpcy5zZXRGaXJzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IGdvIGJ5P1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInNldExhc3ROYW1lXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiLi4uYW5kIGxhc3QgbmFtZSDwn46JXCIgc3VidGl0bGU9XCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIgb25Gb3JtU3VibWl0PXt0aGlzLnNldExhc3ROYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInJldHVybmluZ1VzZXJcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERpYWxvZ3VlQm94IHRpdGxlPXtcIldlbGNvbWUsIFwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiDwn5C2XCJ9PlxuICAgICAgICAgIFxuICAgICAgICA8L0RpYWxvZ3VlQm94PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxFcnJvckJveCAvPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5ETUsgUG9ydGFsIC0gTG9naW48L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJCYXNlZE9uU3RhdGUoKX1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2ID5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQUIxQjIzXCIsXG4gICAgICBoZWlnaHQ6IFwiNThweFwiXG4gICAgfVxuICAgIGNvbnN0IG5hdkltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiNnB4XCJcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e25hdkNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCIgc3R5bGU9e25hdkltZ1N0eWxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIElucHV0Q29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN1YnRpdGxlPXt0aGlzLnByb3BzLnN1YnRpdGxlfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMub25Gb3JtU3VibWl0fT5cbiAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfSBidXR0b25UZXh0PVwi4oaSXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Db250ZW50Qm94PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgRXJyb3JCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKVxuICB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPVwiV2VsbCwgdGhhdCdzIGVtYmFycmFzc2luZyDwn5mIXCIgc3VidGl0bGU9XCJUaGVyZSdzIGFuIGVycm9yIG9uIG91ciBlbmQuIFRyeSBhZ2FpbiBsYXRlciFcIiAvPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgRGlhbG9ndWVCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYW5jaG9yU3R5bGUgPSB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN1YnRpdGxlPXtcIldlJ3JlIHNlbmRpbmcgeW91ciB0b2tlbiB0byBcIiArIHRoaXMucHJvcHMudXNlcm5hbWUgKyBcIkBwdXJkdWUuZWR1XCJ9PlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblRleHQ9XCJFbWFpbCBtZSB0aGUgY29kZVwiIGZvbnRTaXplPVwiMTVcIiB3aWR0aD1cIjE4MFwiIC8+XG4gICAgICAgIDxhIHN0eWxlPXthbmNob3JTdHlsZX0gaHJlZj1cIiNcIj5JIGtub3cgbXkgY29kZTwvYT5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgIGNvbnRlbnRCb3hTdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSlcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG4gICAgICAgIGhlaWdodDogXCIzNTBweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCI5NSVcIlxuICAgICAgfSxcbiAgICAgIGJveFRpdGxlU3R5bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICBmb250U2l6ZTogXCIzNXB4XCJcbiAgICAgIH0sXG4gICAgICBpbm5lckNvbnRlbnRTdHlsZToge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgIH0sXG4gICAgICBzdWJ0aXRsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudEJveFN0eWxlfT5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuYm94VGl0bGVTdHlsZX0+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9Pnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pbm5lckNvbnRlbnRTdHlsZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICApXG4gICAgfSByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLmZvbnRTaXplID09IHVuZGVmaW5lZCA/IFwiMzBweFwiIDogdGhpcy5wcm9wcy5mb250U2l6ZSArIFwicHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoID09IHVuZGVmaW5lZCA/IFwiMTAwcHhcIiA6IHRoaXMucHJvcHMud2lkdGggKyBcInB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gICAgfVxuICAgIGNvbnN0IGxvYWRpbmdTeWxlID0ge1xuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCJcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXIpIHtcbiAgICAgIGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0FCMUIyM1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy13aGl0ZS5naWZcIiBzdHlsZT17bG9hZGluZ1N5bGV9IC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT57dGhpcy5wcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var NavBar =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _React$Component2);

  function NavBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      var navContainerStyle = {
        width: "100%",
        backgroundColor: "#AB1B23",
        height: "58px"
      };
      var navImgStyle = {
        width: "50px",
        marginLeft: "20px",
        marginTop: "6px"
      };
      return __jsx("div", {
        style: navContainerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("img", {
        src: "/images/icon.png",
        style: navImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var InputContentBox =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InputContentBox, _React$Component3);

  function InputContentBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputContentBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InputContentBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputContentBox, [{
    key: "render",
    value: function render() {
      return __jsx(ContentBox, {
        title: this.props.title,
        subtitle: this.props.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.props.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.props.onChange,
        value: this.props.inputValue,
        placeholder: this.props.placeholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), __jsx(Button, {
        loading: this.props.loading,
        buttonText: "\u2192",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })));
    }
  }]);

  return InputContentBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var ErrorBox =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ErrorBox, _React$Component4);

  function ErrorBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBox, [{
    key: "render",
    value: function render() {
      return __jsx(ContentBox, {
        title: "Well, that's embarrassing \uD83D\uDE48",
        subtitle: "There's an error on our end. Try again later!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      });
    }
  }]);

  return ErrorBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var DialogueBox =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DialogueBox, _React$Component5);

  function DialogueBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DialogueBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DialogueBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DialogueBox, [{
    key: "render",
    value: function render() {
      var anchorStyle = {
        textAlign: 'center',
        fontSize: "12px",
        display: "block",
        marginTop: "40px"
      };
      return __jsx(ContentBox, {
        title: this.props.title,
        subtitle: "We're sending your token to " + this.props.username + "@purdue.edu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, __jsx(Button, {
        buttonText: "Email me the code",
        fontSize: "15",
        width: "180",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), __jsx("a", {
        style: anchorStyle,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "I know my code"));
    }
  }]);

  return DialogueBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var ContentBox =
/*#__PURE__*/
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContentBox, _React$Component6);

  function ContentBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContentBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentBox, [{
    key: "render",
    value: function render() {
      var styles = {
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
          lineNumber: 232
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return ContentBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Input =
/*#__PURE__*/
function (_React$Component7) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _React$Component7);

  function Input() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Input);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Input).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, [{
    key: "render",
    value: function render() {
      var inputStyle = {
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
            lineNumber: 257
          },
          __self: this
        });
      }

      return null;
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Button =
/*#__PURE__*/
function (_React$Component8) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, _React$Component8);

  function Button(props) {
    var _this4;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    _this4 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).call(this, props));
    _this4.state = {
      hover: false
    };
    return _this4;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "toggleHover",
    value: function toggleHover() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var buttonStyle = {
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
      var loadingSyle = {
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
            lineNumber: 299
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          },
          __self: this
        }, __jsx("button", {
          onMouseLeave: function onMouseLeave() {
            return _this5.toggleHover();
          },
          onMouseEnter: function onMouseEnter() {
            return _this5.toggleHover();
          },
          style: buttonStyle,
          onClick: this.props.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, this.props.buttonText));
      }
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=login.js.fc6e82392e7fd677899b.hot-update.js.map