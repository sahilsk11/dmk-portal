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
        _this3.setState({
          displayState: "authenticate",
          inputValue: ""
        });
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
            lineNumber: 112
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
            lineNumber: 114
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
            lineNumber: 116
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
            lineNumber: 118
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
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      }), this.renderBasedOnState(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1555840043",
        __self: this
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25maXJtZWRFbWFpbCA9IHRoaXMuY29uZmlybWVkRW1haWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZSA9IHRoaXMuYXV0aGVudGljYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja1VzZXJuYW1lID0gdGhpcy5jaGVja1VzZXJuYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRGaXJzdE5hbWUgPSB0aGlzLnNldEZpcnN0TmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TGFzdE5hbWUgPSB0aGlzLnNldExhc3ROYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVJbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgaWYgKGlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIHVzZXJuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY2hlY2tVc2VybmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lLCBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jaGVja1VzZXI/dXNlcm5hbWU9XCIgKyB1c2VybmFtZTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICAgIGNlbGxJRDogZGF0YS5jZWxsSUQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogXCJcIixcbiAgICAgICAgICBuZXdVc2VyOiBkYXRhLnN0YXRlID09PSBcIm5ld1VzZXJcIixcbiAgICAgICAgICBmaXJzdE5hbWU6IGRhdGEuZmlyc3ROYW1lXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0Rmlyc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIGlucHV0VmFsdWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJzZXRMYXN0TmFtZVwiIH0pO1xuICB9XG5cbiAgc2V0TGFzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwicmV0dXJuaW5nVXNlclwiIH0pO1xuICB9XG5cbiAgY29uZmlybWVkRW1haWwoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lO1xuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHRoaXMuc3RhdGUuZmlyc3ROYW1lO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gdGhpcy5zdGF0ZS5sYXN0TmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvc2VuZEVtYWlsP3VzZXJuYW1lPVwiICsgdXNlcm5hbWUgKyBcIiZmaXJzdE5hbWU9XCIgKyBmaXJzdE5hbWUgKyBcIiZsYXN0TmFtZT1cIiArIGxhc3ROYW1lICsgXCImbmV3VXNlcj1cIiArIHRoaXMuc3RhdGUubmV3VXNlciArIFwiJmNlbGxJRD1cIiArIHRoaXMuc3RhdGUuY2VsbElEO1xuICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGlzcGxheVN0YXRlOiBcImF1dGhlbnRpY2F0ZVwiLFxuICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwiZXJyb3JcIiB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXV0aGVudGljYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICBpZiAodG9rZW4gPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIGxvZ2luIHRva2VuIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodG9rZW4ubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoZW50aWNhdGU/dXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCImdG9rZW49XCIgKyB0b2tlbjtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubmV3VXNlcikge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj1cIiArIGRhdGEudG9rZW4gKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcIm5ld1VzZXJGaXJzdE5hbWVcIiwgaW5wdXRWYWx1ZTogXCJcIiB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj1cIiArIGRhdGEudG9rZW4gKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJpbnZhbGlkUGFzc3dvcmRcIiB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyQmFzZWRPblN0YXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcImRlZmF1bHRcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJIZXkgVGhlcmUg8J+Ri1wiIHN1YnRpdGxlPVwiIFdlbGNvbWUgdG8gdGhlIERNSyBQb3J0YWwhIExldCdzIHN0YXJ0IHdpdGggeW91ciBQdXJkdWUgdXNlcm5hbWUuXCIgb25Gb3JtU3VibWl0PXt0aGlzLmNoZWNrVXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIlB1cmR1ZSB1c2VybmFtZVwiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRpc3BsYXlTdGF0ZSA9PSBcIm5ld1VzZXJcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCJZb3UgbG9vayBuZXchIPCfkYBcIiBzdWJ0aXRsZT1cIldoYXQncyB5b3VyIGZpcnN0IG5hbWU/XCIgb25Gb3JtU3VibWl0PXt0aGlzLnNldEZpcnN0TmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPVwiV2hhdCBkbyB5b3UgZ28gYnk/XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwic2V0TGFzdE5hbWVcIikge1xuICAgICAgcmV0dXJuIDxJbnB1dENvbnRlbnRCb3ggdGl0bGU9XCIuLi5hbmQgbGFzdCBuYW1lIPCfjolcIiBzdWJ0aXRsZT1cIk5vIG1pZGRsZSBuYW1lIHBsZWFzZS5cIiBvbkZvcm1TdWJtaXQ9e3RoaXMuc2V0TGFzdE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXRWYWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj1cIldobyBhcmUgeW91ciBwZW9wbGU/XCIgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwicmV0dXJuaW5nVXNlclwiKSB7XG4gICAgICByZXR1cm4gPERpYWxvZ3VlQm94IHRpdGxlPXtcIldlbGNvbWUsIFwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiDwn5C2XCJ9IHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvblN1Ym1pdD17dGhpcy5jb25maXJtZWRFbWFpbH0gLz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZGlzcGxheVN0YXRlID09IFwiYXV0aGVudGljYXRlXCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiSWRlbnRpZnkgWW91cnNlbGYg8J+UkFwiIHN1YnRpdGxlPVwiWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIHlvdXIgY29kZSB2aWEgZW1haWwuXCIgb25Gb3JtU3VibWl0PXt0aGlzLmF1dGhlbnRpY2F0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBpbnB1dFZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPVwiVG9wIHNlY3JldFwiIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8RXJyb3JCb3ggLz47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RE1LIFBvcnRhbCAtIExvZ2luPC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHJlbD1cImljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAge3RoaXMucmVuZGVyQmFzZWRPblN0YXRlKCl9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FCMUIyM1wiLFxuICAgICAgaGVpZ2h0OiBcIjU4cHhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZJbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHN0eWxlPXtuYXZJbWdTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdWJ0aXRsZT17dGhpcy5wcm9wcy5zdWJ0aXRsZX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLm9uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMucHJvcHMubG9hZGluZ30gYnV0dG9uVGV4dD1cIuKGklwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEVycm9yQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKClcbiAge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudEJveCB0aXRsZT1cIldlbGwsIHRoYXQncyBlbWJhcnJhc3Npbmcg8J+ZiFwiIHN1YnRpdGxlPVwiVGhlcmUncyBhbiBlcnJvciBvbiBvdXIgZW5kLiBUcnkgYWdhaW4gbGF0ZXIhXCIgLz5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIERpYWxvZ3VlQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFuY2hvclN0eWxlID0ge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGVudEJveCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gc3VidGl0bGU9e1wiV2UncmUgc2VuZGluZyB5b3VyIGNvZGUgdG8gXCIgKyB0aGlzLnByb3BzLnVzZXJuYW1lICsgXCJAcHVyZHVlLmVkdS5cIn0+XG4gICAgICAgIDxCdXR0b24gYnV0dG9uVGV4dD1cIkVtYWlsIG1lIHRoZSBjb2RlXCIgZm9udFNpemU9XCIxNVwiIHdpZHRoPVwiMTgwXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblN1Ym1pdH0vPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiBcIjQwcHhcIn19PlxuICAgICAgICAgIDxhIHN0eWxlPXthbmNob3JTdHlsZX0gaHJlZj1cIiNcIj5JIGtub3cgbXkgY29kZTwvYT5cbiAgICAgICAgICA8YSBzdHlsZT17YW5jaG9yU3R5bGV9IGhyZWY9XCIjXCI+T29wcyAtIHdyb25nIGVtYWlsITwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9Db250ZW50Qm94PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgIClcbiAgICB9IHJldHVybiBudWxsO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhvdmVyOiBmYWxzZSB9XG4gIH1cbiAgdG9nZ2xlSG92ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IHRoaXMucHJvcHMuZm9udFNpemUgPT0gdW5kZWZpbmVkID8gXCIzMHB4XCIgOiB0aGlzLnByb3BzLmZvbnRTaXplICsgXCJweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggPT0gdW5kZWZpbmVkID8gXCIxMDBweFwiIDogdGhpcy5wcm9wcy53aWR0aCArIFwicHhcIixcbiAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbG9hZGluZ1N5bGUgPSB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Zlcikge1xuICAgICAgYnV0dG9uU3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUIxQjIzXCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLXdoaXRlLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3lsZX0gLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9Pnt0aGlzLnByb3BzLmJ1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
          lineNumber: 189
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
          lineNumber: 203
        },
        __self: this
      }, __jsx(Button, {
        buttonText: "Email me the code",
        fontSize: "15",
        width: "180",
        onClick: this.props.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), __jsx("div", {
        style: {
          marginTop: "40px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("a", {
        style: anchorStyle,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "I know my code"), __jsx("a", {
        style: anchorStyle,
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
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
          lineNumber: 253
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
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
            lineNumber: 278
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
            lineNumber: 320
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
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
            lineNumber: 325
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
//# sourceMappingURL=login.js.c6ba52d6a7bfe37ff8e4.hot-update.js.map