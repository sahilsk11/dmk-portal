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
      return __jsx("div", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "DMK Portal - Login"), __jsx("link", {
        href: "/images/icon.png",
        rel: "icon",
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), __jsx(NavBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), __jsx(ContentBox, {
        title: stateElements.title,
        subtitle: stateElements.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, __jsx("form", {
        onSubmit: stateElements.onFormSubmit,
        className: "jsx-1555840043",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.handleChange,
        value: this.state.inputValue,
        placeholder: stateElements.inputPlaceholder,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1555840043",
        __self: this
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJ1c2VybmFtZVwiLCBsb2FkaW5nOiBmYWxzZSwgaW5wdXRWYWx1ZTogXCJcIiwgbmV3VXNlcjogZmFsc2UsIHVzZXJuYW1lOiBcIlwiLCBmaXJzdE5hbWU6IFwiXCIgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXV0aGVudGljYXRlID0gdGhpcy5hdXRoZW50aWNhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrVXNlcm5hbWUgPSB0aGlzLmNoZWNrVXNlcm5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEZpcnN0TmFtZSA9IHRoaXMuc2V0Rmlyc3ROYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRMYXN0TmFtZSA9IHRoaXMuc2V0TGFzdE5hbWUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBjaGVja1VzZXJuYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICBpZiAodXNlcm5hbWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIHVzZXJuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodXNlcm5hbWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NoZWNrVXNlcj91c2VybmFtZT1cIiArIHVzZXJuYW1lO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkaXNwbGF5U3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgICAgY2VsbElEOiBkYXRhLmNlbGxJRCxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgICAgIGZpcnN0TmFtZTogZGF0YS5maXJzdE5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJlcnJvclwiIH0pO1xuICAgICAgfSk7O1xuICB9XG5cbiAgYXV0aGVudGljYXRlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICBpZiAodG9rZW4gPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIGxvZ2luIHRva2VuIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodG9rZW4ubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hdXRoZW50aWNhdGU/dXNlcm5hbWU9XCIgKyB0aGlzLnN0YXRlLnVzZXJuYW1lICsgXCImdG9rZW49XCIgKyB0b2tlbjtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubmV3VXNlcikge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj1cIiArIGRhdGEudG9rZW4gKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcIm5ld1VzZXJGaXJzdE5hbWVcIiwgaW5wdXRWYWx1ZTogXCJcIiB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0b2tlbj1cIiArIGRhdGEudG9rZW4gKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogXCJpbnZhbGlkUGFzc3dvcmRcIiB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgc2V0Rmlyc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciBuYW1lIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLmxlbmd0aCA+IDEwKSB7XG4gICAgICBhbGVydChcIlRoYXQncyBhIGxpdHRsZSB0b28gbG9uZyFcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TmFtZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCBpbnB1dFZhbHVlOiBcIlwiLCBkaXNwbGF5U3RhdGU6IFwibmV3VXNlckxhc3ROYW1lXCIgfSk7XG4gIH1cblxuICBzZXRMYXN0TmFtZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbGFzdE5hbWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgaWYgKGxhc3ROYW1lID09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHR5cGUgaW4geW91ciBsYXN0IG5hbWUhXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChsYXN0TmFtZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FkZF9uYW1lP2NlbGxJRD1cIiArIHRoaXMuc3RhdGUuY2VsbElEICsgXCImZmlyc3ROYW1lPVwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiZsYXN0TmFtZT1cIiArIGxhc3ROYW1lO1xuICAgIGZldGNoKHVybCk7XG4gICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5ETUsgUG9ydGFsIC0gTG9naW48L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8Q29udGVudEJveCB0aXRsZT17c3RhdGVFbGVtZW50cy50aXRsZX0gc3VidGl0bGU9e3N0YXRlRWxlbWVudHMuc3VidGl0bGV9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdGF0ZUVsZW1lbnRzLm9uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfSBwbGFjZWhvbGRlcj17c3RhdGVFbGVtZW50cy5pbnB1dFBsYWNlaG9sZGVyfSBoaWRlPXtzdGF0ZUVsZW1lbnRzLmhpZGVGb3JtfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGhpZGU9e3N0YXRlRWxlbWVudHMuaGlkZUZvcm19IC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRlbnRCb3g+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RkI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2RpdiA+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyU3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0FCMUIyM1wiLFxuICAgICAgaGVpZ2h0OiBcIjU4cHhcIlxuICAgIH1cbiAgICBjb25zdCBuYXZJbWdTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtuYXZDb250YWluZXJTdHlsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLnBuZ1wiIHN0eWxlPXtuYXZJbWdTdHlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBJbnB1dENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGFnZVN0YXRlcyA9IHtcbiAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgIHRpdGxlOiBcIkhleSBUaGVyZSDwn5GLXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIldlbGNvbWUgdG8gdGhlIERNSyBQb3J0YWwhIExldCdzIHN0YXJ0IHdpdGggeW91ciBQdXJkdWUgdXNlcm5hbWUuXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5jaGVja1VzZXJuYW1lLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIlB1cmR1ZSBVc2VybmFtZVwiXG4gICAgICB9LFxuICAgICAgcmV0dXJuaW5nVXNlcjoge1xuICAgICAgICB0aXRsZTogXCJXZWxjb21lIGJhY2ssIFwiICsgdGhpcy5zdGF0ZS5maXJzdE5hbWUgKyBcIiDwn5C2XCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIkNoZWNrIHlvdXIgUHVyZHVlIGVtYWlsIGZvciBhdXRoZW50aWNhdGlvbiAob3IgY29udGludWUgaWYgcGFzc3dvcmQgc2F2ZWQpLlwiLFxuICAgICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMuYXV0aGVudGljYXRlLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcInRvcCBzZWNyZXQuLi5cIlxuICAgICAgfSxcbiAgICAgIG5ld1VzZXI6IHtcbiAgICAgICAgdGl0bGU6IFwiWW91IGxvb2sgbmV3ISDwn5GAXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIldoYXQncyB5b3VyIGZpcnN0IG5hbWU/XCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5zZXRGaXJzdE5hbWUsXG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IFwiV2hhdCBkbyB5b3UgZ28gYnk/XCJcbiAgICAgIH0sXG4gICAgICBuZXdVc2VyTGFzdE5hbWU6IHtcbiAgICAgICAgdGl0bGU6IFwiLi4uYW5kIGxhc3QgbmFtZSDwn46JXCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIk5vIG1pZGRsZSBuYW1lIHBsZWFzZS5cIixcbiAgICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLnNldExhc3ROYW1lLFxuICAgICAgICBpbnB1dFBsYWNlaG9sZGVyOiBcIldobyBhcmUgeW91ciBwZW9wbGU/XCJcbiAgICAgIH0sXG4gICAgICBpbnZhbGlkUGFzc3dvcmQ6IHtcbiAgICAgICAgdGl0bGU6IFwiVWggb2gg8J+Yp1wiLFxuICAgICAgICBzdWJ0aXRsZTogXCJUaGF0IGRvZXNuJ3QgbG9vayByaWdodC4gVHJ5IGNvcHlpbmcgdGhlIGNvZGUgZXhhY3RseSBhcyBpdCBhcHBlYXJzIGluIHRoZSBlbWFpbC5cIixcbiAgICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLmF1dGhlbnRpY2F0ZSxcbiAgICAgICAgaW5wdXRQbGFjZWhvbGRlcjogXCJ0b3Agc2VjcmV0Li4uXCJcbiAgICAgIH0sXG4gICAgICBlcnJvcjoge1xuICAgICAgICB0aXRsZTogXCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIixcbiAgICAgICAgc3VidGl0bGU6IFwiVGhlcmUncyBhbiBlcnJvciBvbiBvdXIgZW5kLiBUcnkgYWdhaW4gbGF0ZXIhXCIsXG4gICAgICAgIG9uRm9ybVN1Ym1pdDogdGhpcy5hdXRoZW50aWNhdGUsXG4gICAgICAgIGlucHV0UGxhY2Vob2xkZXI6IFwidG9wIHNlY3JldC4uLlwiLFxuICAgICAgICBoaWRlRm9ybTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdGF0ZUVsZW1lbnRzID0gcGFnZVN0YXRlc1t0aGlzLnByb3BzLmRpc3BsYXlTdGF0ZV07XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPXtzdGF0ZUVsZW1lbnRzLnRpdGxlfSBzdWJ0aXRsZT17c3RhdGVFbGVtZW50cy5zdWJ0aXRsZX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdGF0ZUVsZW1lbnRzLm9uRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9e3N0YXRlRWxlbWVudHMuaW5wdXRQbGFjZWhvbGRlcn0gaGlkZT17c3RhdGVFbGVtZW50cy5oaWRlRm9ybX0gLz5cbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gaGlkZT17c3RhdGVFbGVtZW50cy5oaWRlRm9ybX0gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Db250ZW50Qm94PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQ29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGVzID0ge1xuICAgICAgY29udGVudEJveFN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KVwiLFxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM1MHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjk1JVwiXG4gICAgICB9LFxuICAgICAgYm94VGl0bGVTdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMHB4XCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjM1cHhcIlxuICAgICAgfSxcbiAgICAgIGlubmVyQ29udGVudFN0eWxlOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxuICAgICAgICB3aWR0aDogXCI5NSVcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIlxuICAgICAgfSxcbiAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMjBweFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250ZW50Qm94U3R5bGV9PlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5ib3hUaXRsZVN0eWxlfT57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5zdWJ0aXRsZX0+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmlubmVyQ29udGVudFN0eWxlfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4XCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBmb250U2l6ZTogXCIxN3B4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5oaWRlICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn0gLz5cbiAgICAgIClcbiAgICB9IHJldHVybiBudWxsO1xuICB9XG59XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhvdmVyOiBmYWxzZSB9XG4gIH1cbiAgdG9nZ2xlSG92ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyOiAhdGhpcy5zdGF0ZS5ob3ZlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJ1dHRvblN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IFwiMzBweFwiLFxuICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTkxLCA0OSwgNTYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgIG1hcmdpblRvcDogXCIzMHB4XCJcbiAgICB9XG4gICAgY29uc3QgbG9hZGluZ1N5bGUgPSB7XG4gICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIlxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Zlcikge1xuICAgICAgYnV0dG9uU3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjQUIxQjIzXCJcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLXdoaXRlLmdpZlwiIHN0eWxlPXtsb2FkaW5nU3lsZX0gLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy50b2dnbGVIb3ZlcigpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PuKGkjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
          lineNumber: 147
        },
        __self: this
      }, __jsx("img", {
        src: "/images/icon.png",
        style: navImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
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
      return __jsx(ContentBox, {
        title: stateElements.title,
        subtitle: stateElements.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("form", {
        onSubmit: stateElements.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.handleChange,
        value: this.state.inputValue,
        placeholder: stateElements.inputPlaceholder,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })));
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
          lineNumber: 245
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
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
            lineNumber: 270
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
            lineNumber: 312
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
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
            lineNumber: 317
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
//# sourceMappingURL=login.js.65f2122fa02e0cec7b83.hot-update.js.map