module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(4);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js




var head_Head = function Head(props) {
   return external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement('meta', { charset: 'UTF-8' }),
      external__react__default.a.createElement(
         'title',
         null,
         props.title || ''
      ),
      external__react__default.a.createElement('link', { rel: 'icon', href: '../static/logo_recaptcha.png' }),
      external__react__default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' })
   );
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "react-google-recaptcha"
var external__react_google_recaptcha_ = __webpack_require__(5);
var external__react_google_recaptcha__default = /*#__PURE__*/__webpack_require__.n(external__react_google_recaptcha_);

// CONCATENATED MODULE: ./pages/index.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var pages__class = function (_React$Component) {
   _inherits(_class, _React$Component);

   function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = { recaptchaFilled: false, value: '' };
      _this.handleSubmit = _this.handleSubmit.bind(_this);
      _this.handleFilled = _this.handleFilled.bind(_this);
      _this.handleExpired = _this.handleExpired.bind(_this);
      _this.handleTextChange = _this.handleTextChange.bind(_this);
      return _this;
   }

   _createClass(_class, [{
      key: 'handleSubmit',
      value: function handleSubmit(event) {
         if (this.state.recaptchaFilled) return true;
         event.preventDefault();
         alert('Fill the captcha!');
      }
   }, {
      key: 'handleFilled',
      value: function handleFilled() {
         this.setState({ recaptchaFilled: true });
      }
   }, {
      key: 'handleExpired',
      value: function handleExpired() {
         this.setState({ recaptchaFilled: false });
      }
   }, {
      key: 'handleTextChange',
      value: function handleTextChange(event) {
         this.setState({ value: event.target.value });
      }
   }, {
      key: 'render',
      value: function render() {
         return external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(head, { title: 'Google reCAPTCHA app' }),
            external__react__default.a.createElement(
               'h1',
               null,
               'aaaaa'
            ),
            external__react__default.a.createElement(
               'form',
               { method: 'post', action: '?query=submit', onSubmit: this.handleSubmit },
               external__react__default.a.createElement('input', { type: 'email', name: 'email', placeholder: 'Type your email', size: '40', required: true }),
               external__react__default.a.createElement('br', null),
               external__react__default.a.createElement('textarea', { type: 'text', name: 'content', value: this.state.value, onChange: this.handleTextChange, placeholder: 'Enter your comments', size: '40', required: true }),
               external__react__default.a.createElement(external__react_google_recaptcha__default.a, {
                  ref: 'recaptcha',
                  sitekey: '6Ldy80YUAAAAAFk1TycvEjZ7wu_tQb3ti5_vq7Qp',
                  onChange: this.handleFilled,
                  onExpired: this.handleExpired
               }),
               external__react__default.a.createElement('input', { type: 'submit' }),
               external__react__default.a.createElement('br', null),
               external__react__default.a.createElement('br', null)
            )
         );
      }
   }]);

   return _class;
}(external__react__default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages__class);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-google-recaptcha");

/***/ })
/******/ ]);