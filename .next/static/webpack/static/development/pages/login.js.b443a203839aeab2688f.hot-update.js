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
    _this.confirmedEmail = _this.confirmedEmail.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
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
        username: username,
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
    key: "confirmedEmail",
    value: function confirmedEmail() {
      var _this3 = this;

      var username = this.state.username;
      var firstName = this.state.firstName;
      var lastName = this.state.lastName;
      this.setState({
        loading: true
      });
      var url = "http://localhost:8080/sendEmail?username=" + username + "&firstName=" + firstName + "&lastName=" + lastName + "&newUser=" + this.state.newUser + "&cellID=" + this.state.cellID;
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          _this3.setState({
            displayState: "authenticate",
            inputValue: "",
            loading: false
          });
        }
      })["catch"](function (error) {
        _this3.setState({
          displayState: "error"
        });
      });
    }
  }, {
    key: "authenticate",
    value: function authenticate(event) {
      var _this4 = this;

      event.preventDefault();
      var token = this.state.inputValue;
      var url = "http://localhost:8080/authenticate?username=" + this.state.username + "&token=" + token;
      fetch(url, {
        method: "POST"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.authenticated) {
          if (_this4.state.newUser) {
            document.cookie = "token=" + data.token + "; path=/";

            _this4.setState({
              displayState: "newUserFirstName",
              inputValue: ""
            });
          } else {
            document.cookie = "token=" + data.token + "; path=/";
            window.location = "/";
          }
        } else {
          _this4.setState({
            displayState: "invalidPassword"
          });
        }
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
            lineNumber: 109
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
            lineNumber: 111
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
            lineNumber: 113
          },
          __self: this
        });
      } else if (this.state.displayState == "returningUser") {
        return __jsx(DialogueBox, {
          title: "Welcome, " + this.state.firstName + " 🐶",
          username: this.state.username,
          onSubmit: this.confirmedEmail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
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
            lineNumber: 117
          },
          __self: this
        });
      } else {
        return __jsx(ErrorBox, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
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
          lineNumber: 125
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "DMK Portal - Login"), __jsx("link", {
        href: "/images/icon.png",
        rel: "icon",
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })), __jsx(NavBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), this.renderBasedOnState(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1555840043",
        __self: this
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25maXJtZWRFbWFpbCA9IHRoaXMuY29uZmlybWVkRW1haWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZSA9IHRoaXMuYXV0aGVudGljYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja1VzZXJuYW1lID0gdGhpcy5jaGVja1VzZXJuYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaXJzdE5hbWUgPSB0aGlzLnNldEZpcnN0TmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGFzdE5hbWUgPSB0aGlzLnNldExhc3ROYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVJbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIHVzZXJuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hlY2tVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBuZXdVc2VyOiBkYXRhLnN0YXRlID09PSBcIm5ld1VzZXJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0Rmlyc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIGlucHV0VmFsdWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJzZXRMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwicmV0dXJuaW5nVXNlclwiIH0pO1xuICB9XG5cbiAgY29uZmlybWVkRW1haWwoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRoaXMuc3RhdGUuZmlyc3ROYW1lO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5sYXN0TmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2VuZEVtYWlsP3VzZXJuYW1lPVwiICsgdXNlcm5hbWUgKyBcIiZmaXJzdE5hbWU9XCIgKyBmaXJzdE5hbWUgKyBcIiZsYXN0TmFtZT1cIiArIGxhc3ROYW1lICsgXCImbmV3VXNlcj1cIiArIHRoaXMuc3RhdGUubmV3VXNlciArIFwiJmNlbGxJRD1cIiArIHRoaXMuc3RhdGUuY2VsbElEO1xuICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzcGxheVN0YXRlOiBcImF1dGhlbnRpY2F0ZVwiLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBhdXRoZW50aWNhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aGVudGljYXRlP3VzZXJuYW1lPVwiICsgdGhpcy5zdGF0ZS51c2VybmFtZSArIFwiJnRva2VuPVwiICsgdG9rZW47XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm5ld1VzZXIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJuZXdVc2VyRmlyc3ROYW1lXCIsIGlucHV0VmFsdWU6IFwiXCIgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49XCIgKyBkYXRhLnRva2VuICsgXCI7IHBhdGg9L1wiO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiaW52YWxpZFBhc3N3b3JkXCIgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlckJhc2VkT25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiSGV5IFRoZXJlIPCfkYtcIiBzdWJ0aXRsZT1cIiBXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5jaGVja1VzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJQdXJkdWUgdXNlcm5hbWVcIiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJuZXdVc2VyXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiWW91IGxvb2sgbmV3ISDwn5GAXCIgc3VidGl0bGU9XCJXaGF0J3MgeW91ciBmaXJzdCBuYW1lP1wiIG9uRm9ybVN1Ym1pdD17dGhpcy5zZXRGaXJzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IGdvIGJ5P1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInNldExhc3ROYW1lXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiLi4uYW5kIGxhc3QgbmFtZSDwn46JXCIgc3VidGl0bGU9XCJObyBtaWRkbGUgbmFtZSBwbGVhc2UuXCIgb25Gb3JtU3VibWl0PXt0aGlzLnNldExhc3ROYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJXaG8gYXJlIHlvdXIgcGVvcGxlP1wiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcInJldHVybmluZ1VzZXJcIikge1xuICAgICAgcmV0dXJuIDxEaWFsb2d1ZUJveCB0aXRsZT17XCJXZWxjb21lLCBcIiArIHRoaXMuc3RhdGUuZmlyc3ROYW1lICsgXCIg8J+QtlwifSB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25TdWJtaXQ9e3RoaXMuY29uZmlybWVkRW1haWx9IC8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcImF1dGhlbnRpY2F0ZVwiKSB7XG4gICAgICByZXR1cm4gPElucHV0Q29udGVudEJveCB0aXRsZT1cIklkZW50aWZ5IFlvdXJzZWxmIPCflJBcIiBzdWJ0aXRsZT1cIllvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCB5b3VyIGNvZGUgdmlhIGVtYWlsLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5hdXRoZW50aWNhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIlRvcCBzZWNyZXRcIiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPEVycm9yQm94IC8+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkRNSyBQb3J0YWwgLSBMb2dpbjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9pbWFnZXMvaWNvbi5wbmdcIiByZWw9XCJpY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIHt0aGlzLnJlbmRlckJhc2VkT25TdGF0ZSgpfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZCO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXYgPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNBQjFCMjNcIixcbiAgICAgIGhlaWdodDogXCI1OHB4XCJcbiAgICB9XG4gICAgY29uc3QgbmF2SW1nU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICBtYXJnaW5MZWZ0OiBcIjIwcHhcIixcbiAgICAgIG1hcmdpblRvcDogXCI2cHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17bmF2Q29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi5wbmdcIiBzdHlsZT17bmF2SW1nU3R5bGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXRDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudEJveCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gc3VidGl0bGU9e3RoaXMucHJvcHMuc3VidGl0bGV9PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5wcm9wcy5vbkZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9IGJ1dHRvblRleHQ9XCLihpJcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NvbnRlbnRCb3g+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBFcnJvckJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIiBzdWJ0aXRsZT1cIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBEaWFsb2d1ZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhbmNob3JTdHlsZSA9IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN1YnRpdGxlPXtcIldlJ3JlIHNlbmRpbmcgeW91ciBjb2RlIHRvIFwiICsgdGhpcy5wcm9wcy51c2VybmFtZSArIFwiQHB1cmR1ZS5lZHUuXCJ9PlxuICAgICAgICA8QnV0dG9uIGJ1dHRvblRleHQ9XCJFbWFpbCBtZSB0aGUgY29kZVwiIGZvbnRTaXplPVwiMTVcIiB3aWR0aD1cIjE4MFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TdWJtaXR9IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjQwcHhcIiB9fT5cbiAgICAgICAgICA8YSBzdHlsZT17YW5jaG9yU3R5bGV9IGhyZWY9XCIjXCI+SSBrbm93IG15IGNvZGU8L2E+XG4gICAgICAgICAgPGEgc3R5bGU9e2FuY2hvclN0eWxlfSBocmVmPVwiI1wiPk9vcHMgLSB3cm9uZyBlbWFpbCE8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L0NvbnRlbnRCb3g+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50Qm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICBjb250ZW50Qm94U3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDRweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzUwcHhcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCJcbiAgICAgIH0sXG4gICAgICBib3hUaXRsZVN0eWxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgZm9udFNpemU6IFwiMzVweFwiXG4gICAgICB9LFxuICAgICAgaW5uZXJDb250ZW50U3R5bGU6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjk1JVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG4gICAgICB9LFxuICAgICAgc3VidGl0bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICBwYWRkaW5nTGVmdDogXCIyMHB4XCIsXG4gICAgICAgIHBhZGRpbmdSaWdodDogXCIyMHB4XCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRlbnRCb3hTdHlsZX0+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLmJveFRpdGxlU3R5bGV9Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLnN1YnRpdGxlfT57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJDb250ZW50U3R5bGV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbnB1dFN0eWxlID0ge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgcGFkZGluZzogXCI2cHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIyMHB4IGF1dG9cIixcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZHRoXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhpZGUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IHN0eWxlPXtpbnB1dFN0eWxlfSB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgKVxuICAgIH0gcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaG92ZXI6IGZhbHNlIH1cbiAgfVxuICB0b2dnbGVIb3ZlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uU3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogdGhpcy5wcm9wcy5mb250U2l6ZSA9PSB1bmRlZmluZWQgPyBcIjMwcHhcIiA6IHRoaXMucHJvcHMuZm9udFNpemUgKyBcInB4XCIsXG4gICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTEsIDQ5LCA1NilcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCA9PSB1bmRlZmluZWQgPyBcIjEwMHB4XCIgOiB0aGlzLnByb3BzLndpZHRoICsgXCJweFwiLFxuICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgbWFyZ2luVG9wOiBcIjMwcHhcIlxuICAgIH1cbiAgICBjb25zdCBsb2FkaW5nU3lsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhvdmVyKSB7XG4gICAgICBidXR0b25TdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNBQjFCMjNcIlxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubG9hZGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmctd2hpdGUuZ2lmXCIgc3R5bGU9e2xvYWRpbmdTeWxlfSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+e3RoaXMucHJvcHMuYnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
          lineNumber: 162
        },
        __self: this
      }, __jsx("img", {
        src: "/images/icon.png",
        style: navImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
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
          lineNumber: 172
        },
        __self: this
      }, __jsx("form", {
        onSubmit: this.props.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.props.onChange,
        value: this.props.inputValue,
        placeholder: this.props.placeholder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), __jsx(Button, {
        loading: this.props.loading,
        buttonText: "\u2192",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
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
          lineNumber: 185
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
        paddingBottom: "10px"
      };
      return __jsx(ContentBox, {
        title: this.props.title,
        subtitle: "We're sending your code to " + this.props.username + "@purdue.edu.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, __jsx(Button, {
        buttonText: "Email me the code",
        fontSize: "15",
        width: "180",
        onClick: this.props.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), __jsx("div", {
        style: {
          marginTop: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, __jsx("a", {
        style: anchorStyle,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "I know my code"), __jsx("a", {
        style: anchorStyle,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Oops - wrong email!")));
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
          lineNumber: 249
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
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
            lineNumber: 274
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
    var _this5;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    _this5 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).call(this, props));
    _this5.state = {
      hover: false
    };
    return _this5;
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
      var _this6 = this;

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
            lineNumber: 316
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, __jsx("button", {
          onMouseLeave: function onMouseLeave() {
            return _this6.toggleHover();
          },
          onMouseEnter: function onMouseEnter() {
            return _this6.toggleHover();
          },
          style: buttonStyle,
          onClick: this.props.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
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
//# sourceMappingURL=login.js.b443a203839aeab2688f.hot-update.js.map