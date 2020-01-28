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
      }, "body{margin:0px;background-color:#F7F7FB;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIVyxBQUcwQixXQUNjLHlCQUMyRyxvSUFFakcsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9zYWhpbC9Ecm9wYm94L1BvcnRmb2xpby9kbWstcG9ydGFsL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BsYXlTdGF0ZTogXCJkZWZhdWx0XCIsIGxvYWRpbmc6IGZhbHNlLCBpbnB1dFZhbHVlOiBcIlwiLCBuZXdVc2VyOiBmYWxzZSwgdXNlcm5hbWU6IFwiXCIsIGZpcnN0TmFtZTogXCJcIiB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGUgPSB0aGlzLmF1dGhlbnRpY2F0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tVc2VybmFtZSA9IHRoaXMuY2hlY2tVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Rmlyc3ROYW1lID0gdGhpcy5zZXRGaXJzdE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldExhc3ROYW1lID0gdGhpcy5zZXRMYXN0TmFtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNoZWNrVXNlcm5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIGlmICh1c2VybmFtZSA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgdXNlcm5hbWUhXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh1c2VybmFtZS5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY2hlY2tVc2VyP3VzZXJuYW1lPVwiICsgdXNlcm5hbWU7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRpc3BsYXlTdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgICBjZWxsSUQ6IGRhdGEuY2VsbElELFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZVxuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImVycm9yXCIgfSk7XG4gICAgICB9KTs7XG4gIH1cblxuICBhdXRoZW50aWNhdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIGlmICh0b2tlbiA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSB0eXBlIGluIHlvdXIgbG9naW4gdG9rZW4hXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b2tlbi5sZW5ndGggPiAxMCkge1xuICAgICAgYWxlcnQoXCJUaGF0J3MgYSBsaXR0bGUgdG9vIGxvbmchXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGhlbnRpY2F0ZT91c2VybmFtZT1cIiArIHRoaXMuc3RhdGUudXNlcm5hbWUgKyBcIiZ0b2tlbj1cIiArIHRva2VuO1xuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIlxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmF1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5uZXdVc2VyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuPVwiICsgZGF0YS50b2tlbiArIFwiOyBwYXRoPS9cIjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5U3RhdGU6IFwibmV3VXNlckZpcnN0TmFtZVwiLCBpbnB1dFZhbHVlOiBcIlwiIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuPVwiICsgZGF0YS50b2tlbiArIFwiOyBwYXRoPS9cIjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVN0YXRlOiBcImludmFsaWRQYXNzd29yZFwiIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBzZXRGaXJzdE5hbWUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIG5hbWUhXCIpXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KFwiVGhhdCdzIGEgbGl0dGxlIHRvbyBsb25nIVwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiB0aGlzLnN0YXRlLmlucHV0VmFsdWUsIGlucHV0VmFsdWU6IFwiXCIsIGRpc3BsYXlTdGF0ZTogXCJuZXdVc2VyTGFzdE5hbWVcIiB9KTtcbiAgfVxuXG4gIHNldExhc3ROYW1lKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsYXN0TmFtZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICBpZiAobGFzdE5hbWUgPT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBpbiB5b3VyIGxhc3QgbmFtZSFcIilcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGxhc3ROYW1lLmxlbmd0aCA+IDEwKSB7XG4gICAgICBhbGVydChcIlRoYXQncyBhIGxpdHRsZSB0b28gbG9uZyFcIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYWRkX25hbWU/Y2VsbElEPVwiICsgdGhpcy5zdGF0ZS5jZWxsSUQgKyBcIiZmaXJzdE5hbWU9XCIgKyB0aGlzLnN0YXRlLmZpcnN0TmFtZSArIFwiJmxhc3ROYW1lPVwiICsgbGFzdE5hbWU7XG4gICAgZmV0Y2godXJsKTtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgfVxuXG4gIHJlbmRlckJhc2VkT25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNwbGF5U3RhdGUgPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIHJldHVybiA8SW5wdXRDb250ZW50Qm94IHRpdGxlPVwiSGV5IFRoZXJlIPCfkYtcIiBzdWJ0aXRsZT1cIiBXZWxjb21lIHRvIHRoZSBETUsgUG9ydGFsISBMZXQncyBzdGFydCB3aXRoIHlvdXIgUHVyZHVlIHVzZXJuYW1lLlwiIG9uRm9ybVN1Ym1pdD17dGhpcy5jaGVja1VzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0VmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0gcGxhY2Vob2xkZXI9XCJQdXJkdWUgdXNlcm5hbWVcIiAvPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5ETUsgUG9ydGFsIC0gTG9naW48L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvaW1hZ2VzL2ljb24ucG5nXCIgcmVsPVwiaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJCYXNlZE9uU3RhdGUoKX1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2ID5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXJTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjQUIxQjIzXCIsXG4gICAgICBoZWlnaHQ6IFwiNThweFwiXG4gICAgfVxuICAgIGNvbnN0IG5hdkltZ1N0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIyMHB4XCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiNnB4XCJcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e25hdkNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24ucG5nXCIgc3R5bGU9e25hdkltZ1N0eWxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIElucHV0Q29udGVudEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHN1YnRpdGxlPXt0aGlzLnByb3BzLnN1YnRpdGxlfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMub25Gb3JtU3VibWl0fT5cbiAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmlucHV0UGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnByb3BzLmxvYWRpbmd9IGJ1dHRvblRleHQ9XCLihpJcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NvbnRlbnRCb3g+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBFcnJvckJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpXG4gIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnRCb3ggdGl0bGU9XCJXZWxsLCB0aGF0J3MgZW1iYXJyYXNzaW5nIPCfmYhcIiBzdWJ0aXRsZT1cIlRoZXJlJ3MgYW4gZXJyb3Igb24gb3VyIGVuZC4gVHJ5IGFnYWluIGxhdGVyIVwiIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBDb25maXJtRW1haWxCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250ZW50Qm94IHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBzdWJ0aXRsZT1cIkNoZWNrIHlvdXIgUHVyZHVlIGVtYWlsIGZvciBhdXRoZW50aWNhdGlvbiAob3IgY29udGludWUgaWYgcGFzc3dvcmQgc2F2ZWQpLlwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3RhdGVFbGVtZW50cy5vbkZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IHBsYWNlaG9sZGVyPXtzdGF0ZUVsZW1lbnRzLmlucHV0UGxhY2Vob2xkZXJ9IGhpZGU9e3N0YXRlRWxlbWVudHMuaGlkZUZvcm19IC8+XG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGhpZGU9e3N0YXRlRWxlbWVudHMuaGlkZUZvcm19IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQ29udGVudEJveD5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgIGNvbnRlbnRCb3hTdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSlcIixcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMHB4IGF1dG9cIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG4gICAgICAgIGhlaWdodDogXCIzNTBweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCI5NSVcIlxuICAgICAgfSxcbiAgICAgIGJveFRpdGxlU3R5bGU6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweFwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICBmb250U2l6ZTogXCIzNXB4XCJcbiAgICAgIH0sXG4gICAgICBpbm5lckNvbnRlbnRTdHlsZToge1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcbiAgICAgICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcbiAgICAgIH0sXG4gICAgICBzdWJ0aXRsZToge1xuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjIwcHhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudEJveFN0eWxlfT5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuYm94VGl0bGVTdHlsZX0+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMuc3VidGl0bGV9Pnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvaDM+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pbm5lckNvbnRlbnRTdHlsZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkdGhcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGlkZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gc3R5bGU9e2lucHV0U3R5bGV9IHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICApXG4gICAgfSByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBob3ZlcjogZmFsc2UgfVxuICB9XG4gIHRvZ2dsZUhvdmVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBidXR0b25TdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5MSwgNDksIDU2KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCIsXG4gICAgICBtYXJnaW5Ub3A6IFwiMzBweFwiXG4gICAgfVxuICAgIGNvbnN0IGxvYWRpbmdTeWxlID0ge1xuICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgbWFyZ2luOiBcIjBweCBhdXRvXCJcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaG92ZXIpIHtcbiAgICAgIGJ1dHRvblN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0FCMUIyM1wiXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5sb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy13aGl0ZS5naWZcIiBzdHlsZT17bG9hZGluZ1N5bGV9IC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMudG9nZ2xlSG92ZXIoKX0gb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnRvZ2dsZUhvdmVyKCl9IHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT57dGhpcy5wcm9wcy5idXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/sahil/Dropbox/Portfolio/dmk-portal/pages/login.js */"));
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
        placeholder: this.props.inputPlaceholder,
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

var ConfirmEmailBox =
/*#__PURE__*/
function (_React$Component5) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ConfirmEmailBox, _React$Component5);

  function ConfirmEmailBox() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConfirmEmailBox);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConfirmEmailBox).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConfirmEmailBox, [{
    key: "render",
    value: function render() {
      return __jsx(ContentBox, {
        title: this.props.title,
        subtitle: "Check your Purdue email for authentication (or continue if password saved).",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("form", {
        onSubmit: stateElements.onFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx(Input, {
        onChange: this.handleChange,
        value: this.state.inputValue,
        placeholder: stateElements.inputPlaceholder,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), __jsx(Button, {
        loading: this.state.loading,
        hide: stateElements.hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })));
    }
  }]);

  return ConfirmEmailBox;
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
          lineNumber: 228
        },
        __self: this
      }, __jsx("h3", {
        style: styles.boxTitleStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, this.props.title), __jsx("h3", {
        style: styles.subtitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, this.props.subtitle), __jsx("div", {
        style: styles.innerContentStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
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
            lineNumber: 253
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
            lineNumber: 295
          },
          __self: this
        });
      } else {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
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
            lineNumber: 300
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
//# sourceMappingURL=login.js.48620f0b826a2ef7c350.hot-update.js.map