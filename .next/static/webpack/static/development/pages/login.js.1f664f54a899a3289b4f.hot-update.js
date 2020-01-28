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

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props)); //this.state = { firstName: "", lastName: "", username: "", displayState: "entry", password: "", loading: false, newUser: false }

    _this.state = {
      displayState: "username",
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
    key: "checkUsername",
    value: function checkUsername(event) {
      var _this2 = this;

      event.preventDefault();
      var username = this.state.inputValue;

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
  }, {
    key: "setLastName",
    value: function setLastName(event) {
      event.preventDefault();
      var lastName = this.state.inputValue;

      if (lastName == "") {
        alert("Please type in your last name!");
        return;
      } else if (lastName.length > 10) {
        alert("That's a little too long!");
        return;
      }

      var url = "http://localhost:8080/add_name?cellID=" + this.state.cellID + "&firstName=" + this.state.firstName + "&lastName=" + lastName;
      fetch(url);
      window.location = "/";
    }
  }, {
    key: "render",
    value: function render() {
      var pageStates = {
        username: {
          title: "Hey There 👋",
          subtitle: "Welcome to the DMK Portal! Let's start with your Purdue username.",
          onFormSubmit: this.checkUsername,
          inputPlaceholder: "Purdue Username"
        },
        returningUser: {
          title: "Welcome back, " + this.state.firstName + " 🐶",
          subtitle: "Check your Purdue email for authentication (or continue if password saved).",
          onFormSubmit: this.authenticate,
          inputPlaceholder: "top secret..."
        },
        newUser: {
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
      var stateElements = pageStates[this.state.displayState];
      return __jsx("div", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "DMK Portal - Login"), __jsx("link", {
        href: "/images/icon.png",
        rel: "icon",
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), __jsx(NavBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), __jsx(ContentBox, {
        title: stateElements.title,
        subtitle: stateElements.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("form", {
        onSubmit: stateElements.onFormSubmit,
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.handleChange,
        value: this.state.inputValue,
        placeholder: stateElements.inputPlaceholder,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1555840043",
        __self: this
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThKVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vdGhpcy5zdGF0ZSA9IHsgZmlyc3ROYW1lOiBcIlwiLCBsYXN0TmFtZTogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJlbnRyeVwiLCBwYXNzd29yZDogXCJcIiwgbG9hZGluZzogZmFsc2UsIG5ld1VzZXI6IGZhbHNlIH1cbiAgICB0aGlzLnN0YXRlID0geyBkaXNwbGF5U3RhdGU6IFwidXNlcm5hbWVcIiwgbG9hZGluZzogZmFsc2UsIGlucHV0VmFsdWU6IFwiXCIsIG5ld1VzZXI6IGZhbHNlLCB1c2VybmFtZTogXCJcIiwgZmlyc3ROYW1lOiBcIlwiIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZSA9IHRoaXMuYXV0aGVudGljYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja1VzZXJuYW1lID0gdGhpcy5jaGVja1VzZXJuYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaXJzdE5hbWUgPSB0aGlzLnNldEZpcnN0TmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGFzdE5hbWUgPSB0aGlzLnNldExhc3ROYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgY2hlY2tVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgaWYgKHVzZXJuYW1lID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciB1c2VybmFtZSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA+IDEwKSB7XG4gICAgICBhbGVydChcIlRoYXQncyBhIGxpdHRsZSB0b28gbG9uZyFcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pOztcbiAgfVxuXG4gIGF1dGhlbnRpY2F0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgaWYgKHRva2VuID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciBsb2dpbiB0b2tlbiFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRva2VuLmxlbmd0aCA+IDEwKSB7XG4gICAgICBhbGVydChcIlRoYXQncyBhIGxpdHRsZSB0b28gbG9uZyFcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdG9rZW47XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5ld1VzZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJuZXdVc2VyRmlyc3ROYW1lXCIsIGlucHV0VmFsdWU6IFwiXCIgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFBhc3N3b3JkXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHNldEZpcnN0TmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgbmFtZSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdE5hbWU6IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgaW5wdXRWYWx1ZTogXCJcIiwgZGlzcGxheVN0YXRlOiBcIm5ld1VzZXJMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIGlmIChsYXN0TmFtZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgbGFzdCBuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobGFzdE5hbWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hZGRfbmFtZT9jZWxsSUQ9XCIgKyB0aGlzLnN0YXRlLmNlbGxJRCArIFwiJmZpcnN0TmFtZT1cIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCImbGFzdE5hbWU9XCIgKyBsYXN0TmFtZTtcbiAgICBmZXRjaCh1cmwpO1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBhZ2VTdGF0ZXMgPSB7XG4gICAgICB1c2VybmFtZToge1xuICAgICAgICB0aXRsZTogXCJIZXkgVGhlcmUg8J+Ri1wiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuY2hlY2tVc2VybmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJQdXJkdWUgVXNlcm5hbWVcIlxuICAgICAgfSxcbiAgICAgIHJldHVybmluZ1VzZXI6IHtcbiAgICAgICAgdGl0bGU6IFwiV2VsY29tZSBiYWNrLCBcIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCIg8J+QtlwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJDaGVjayB5b3VyIFB1cmR1ZSBlbWFpbCBmb3IgYXV0aGVudGljYXRpb24gKG9yIGNvbnRpbnVlIGlmIHBhc3N3b3JkIHNhdmVkKS5cIixcbiAgICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLmF1dGhlbnRpY2F0ZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJ0b3Agc2VjcmV0Li4uXCJcbiAgICAgIH0sXG4gICAgICBuZXdVc2VyOiB7XG4gICAgICAgIHRpdGxlOiBcIllvdSBsb29rIG5ldyEg8J+RgFwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuc2V0Rmlyc3ROYW1lLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIldoYXQgZG8geW91IGdvIGJ5P1wiXG4gICAgICB9LFxuICAgICAgbmV3VXNlckxhc3ROYW1lOiB7XG4gICAgICAgIHRpdGxlOiBcIi4uLmFuZCBsYXN0IG5hbWUg8J+OiVwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5zZXRMYXN0TmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiXG4gICAgICB9LFxuICAgICAgaW52YWxpZFBhc3N3b3JkOiB7XG4gICAgICAgIHRpdGxlOiBcIlVoIG9oIPCfmKdcIixcbiAgICAgICAgc3VidGl0bGU6IFwiVGhhdCBkb2Vzbid0IGxvb2sgcmlnaHQuIFRyeSBjb3B5aW5nIHRoZSBjb2RlIGV4YWN0bHkgYXMgaXQgYXBwZWFycyBpbiB0aGUgZW1haWwuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5hdXRoZW50aWNhdGUsXG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IFwidG9wIHNlY3JldC4uLlwiXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgdGl0bGU6IFwiV2VsbCwgdGhhdCdzIGVtYmFycmFzc2luZyDwn5mIXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuYXV0aGVudGljYXRlLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcInRvcCBzZWNyZXQuLi5cIixcbiAgICAgICAgaGlkZUZvcm06IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3RhdGVFbGVtZW50cyA9IHBhZ2VTdGF0ZXNbdGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RE1LIFBvcnRhbCAtIExvZ2luPC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3N0YXRlRWxlbWVudHMudGl0bGV9IHN1YnRpdGxlPXtzdGF0ZUVsZW1lbnRzLnN1YnRpdGxlfT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3RhdGVFbGVtZW50cy5vbkZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9e3N0YXRlRWxlbWVudHMuaW5wdXRQbGFjZWhvbGRlcn0gaGlkZT17c3RhdGVFbGVtZW50cy5oaWRlRm9ybX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBoaWRlPXtzdGF0ZUVsZW1lbnRzLmhpZGVGb3JtfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250ZW50Qm94PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXYgPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXRDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBhZ2VTdGF0ZXMgPSB7XG4gICAgICB1c2VybmFtZToge1xuICAgICAgICB0aXRsZTogXCJIZXkgVGhlcmUg8J+Ri1wiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuY2hlY2tVc2VybmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJQdXJkdWUgVXNlcm5hbWVcIlxuICAgICAgfSxcbiAgICAgIHJldHVybmluZ1VzZXI6IHtcbiAgICAgICAgdGl0bGU6IFwiV2VsY29tZSBiYWNrLCBcIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCIg8J+QtlwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJDaGVjayB5b3VyIFB1cmR1ZSBlbWFpbCBmb3IgYXV0aGVudGljYXRpb24gKG9yIGNvbnRpbnVlIGlmIHBhc3N3b3JkIHNhdmVkKS5cIixcbiAgICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLmF1dGhlbnRpY2F0ZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJ0b3Agc2VjcmV0Li4uXCJcbiAgICAgIH0sXG4gICAgICBuZXdVc2VyOiB7XG4gICAgICAgIHRpdGxlOiBcIllvdSBsb29rIG5ldyEg8J+RgFwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuc2V0Rmlyc3ROYW1lLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIldoYXQgZG8geW91IGdvIGJ5P1wiXG4gICAgICB9LFxuICAgICAgbmV3VXNlckxhc3ROYW1lOiB7XG4gICAgICAgIHRpdGxlOiBcIi4uLmFuZCBsYXN0IG5hbWUg8J+OiVwiLFxuICAgICAgICBzdWJ0aXRsZTogXCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5zZXRMYXN0TmFtZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiXG4gICAgICB9LFxuICAgICAgaW52YWxpZFBhc3N3b3JkOiB7XG4gICAgICAgIHRpdGxlOiBcIlVoIG9oIPCfmKdcIixcbiAgICAgICAgc3VidGl0bGU6IFwiVGhhdCBkb2Vzbid0IGxvb2sgcmlnaHQuIFRyeSBjb3B5aW5nIHRoZSBjb2RlIGV4YWN0bHkgYXMgaXQgYXBwZWFycyBpbiB0aGUgZW1haWwuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5hdXRoZW50aWNhdGUsXG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IFwidG9wIHNlY3JldC4uLlwiXG4gICAgICB9LFxuICAgICAgZXJyb3I6IHtcbiAgICAgICAgdGl0bGU6IFwiV2VsbCwgdGhhdCdzIGVtYmFycmFzc2luZyDwn5mIXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuYXV0aGVudGljYXRlLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcInRvcCBzZWNyZXQuLi5cIixcbiAgICAgICAgaGlkZUZvcm06IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3RhdGVFbGVtZW50cyA9IHBhZ2VTdGF0ZXNbdGhpcy5wcm9wcy5kaXNwbGF5U3RhdGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17c3RhdGVFbGVtZW50cy50aXRsZX0gc3VidGl0bGU9e3N0YXRlRWxlbWVudHMuc3VidGl0bGV9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdGF0ZUVsZW1lbnRzLm9uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj17c3RhdGVFbGVtZW50cy5pbnB1dFBsYWNlaG9sZGVyfSBoaWRlPXtzdGF0ZUVsZW1lbnRzLmhpZGVGb3JtfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGhpZGU9e3N0YXRlRWxlbWVudHMuaGlkZUZvcm19IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICBjb250ZW50Qm94U3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzUwcHhcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCJcbiAgICAgIH0sXG4gICAgICBib3hUaXRsZVN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgZm9udFNpemU6IFwiMzVweFwiXG4gICAgICB9LFxuICAgICAgaW5uZXJDb250ZW50U3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICB9LFxuICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIyMHB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnRCb3hTdHlsZX0+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLmJveFRpdGxlU3R5bGV9Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJDb250ZW50U3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dFN0eWxlID0ge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIyMHB4IGF1dG9cIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhpZGUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgKVxuICAgIH0gcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaG92ZXI6IGZhbHNlIH1cbiAgfVxuICB0b2dnbGVIb3ZlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTEsIDQ5LCA1NilcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBsb2FkaW5nU3lsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyKSB7XG4gICAgICBidXR0b25TdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQjFCMjNcIlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmctd2hpdGUuZ2lmXCIgc3R5bGU9e2xvYWRpbmdTeWxlfSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+4oaSPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
          lineNumber: 188
        },
        __self: this
      }, __jsx("img", {
        src: "/images/icon.png",
        style: navImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
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
      var pageStates = {
        username: {
          title: "Hey There 👋",
          subtitle: "Welcome to the DMK Portal! Let's start with your Purdue username.",
          onFormSubmit: this.checkUsername,
          inputPlaceholder: "Purdue Username"
        },
        returningUser: {
          title: "Welcome back, " + this.state.firstName + " 🐶",
          subtitle: "Check your Purdue email for authentication (or continue if password saved).",
          onFormSubmit: this.authenticate,
          inputPlaceholder: "top secret..."
        },
        newUser: {
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
      var stateElements = pageStates[this.props.displayState];
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, __jsx(ContentBox, {
        title: stateElements.title,
        subtitle: stateElements.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx("form", {
        onSubmit: stateElements.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.handleChange,
        value: this.state.inputValue,
        placeholder: stateElements.inputPlaceholder,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }))));
    }
  }]);

  return InputContentBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var ContentBox =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ContentBox, _React$Component4);

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
          lineNumber: 288
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return ContentBox;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Input =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _React$Component5);

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
            lineNumber: 313
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
function (_React$Component6) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Button, _React$Component6);

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
            lineNumber: 355
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
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
            lineNumber: 360
          },
          __self: this
        }, "\u2192"));
      }
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=login.js.1f664f54a899a3289b4f.hot-update.js.map