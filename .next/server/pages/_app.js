module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAtdGFibGUtbmV4dC9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZTIubWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_dew_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/dew.css */ \"./styles/dew.css\");\n/* harmony import */ var _styles_dew_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_dew_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/dashboard.css */ \"./styles/dashboard.css\");\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/card.css */ \"./styles/card.css\");\n/* harmony import */ var _styles_card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_card_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_mapku_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/mapku.css */ \"./styles/mapku.css\");\n/* harmony import */ var _styles_mapku_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_mapku_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/table.css */ \"./styles/table.css\");\n/* harmony import */ var _styles_table_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_table_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_infoBox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/infoBox.css */ \"./styles/infoBox.css\");\n/* harmony import */ var _styles_infoBox_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_infoBox_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap_table_next_dist_react_bootstrap_table2_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap-table-next/dist/react-bootstrap-table2.min.css */ \"./node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css\");\n/* harmony import */ var react_bootstrap_table_next_dist_react_bootstrap_table2_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_table_next_dist_react_bootstrap_table2_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_Login_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Login.css */ \"./styles/Login.css\");\n/* harmony import */ var _styles_Login_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers */ \"./pages/reducers/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);\nvar _jsxFileName = \"/home/wadudu/Documents/nextJS/ANTD/cmsv2/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n // import '../styles/global.css'\n\n\n\n\n\n // import \"leaflet/dist/leaflet.css\";\n\n\n\n // import '../styles/cobaSide.css'\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_11__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_11__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_11__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_12___default.a)));\n\n\n\n // export default function MyApp({ Component, pageProps }) {\n//   return <Component {...pageProps} />\n// }\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, console.log(\"ini store2\", store), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJjb21wb3NlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtDQUVBOztBQUVBO0FBQ0E7Q0FFQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUdDLDBEQUFXLENBQUNDLGtEQUFELEVBQVVDLHNEQUFPLENBQUNDLDhEQUFlLENBQUNDLG1EQUFELENBQWhCLENBQWpCLENBQXpCO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzFDLFNBQ0UsTUFBQyxxREFBRDtBQUFVLFNBQUssRUFBRVIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCVixLQUF6QixDQURILEVBRUUsTUFBQyxTQUFELGVBQWVRLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGLENBREY7QUFNRCxDQVBEOztBQVNlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2Rldy5jc3MnXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuIFxuaW1wb3J0ICcuLi9zdHlsZXMvZGFzaGJvYXJkLmNzcydcbiBcbmltcG9ydCAnLi4vc3R5bGVzL2NhcmQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFwa3UuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdGFibGUuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5mb0JveC5jc3MnXG4vLyBpbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdyZWFjdC1ib290c3RyYXAtdGFibGUtbmV4dC9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZTIubWluLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9Mb2dpbi5jc3MnXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9jb2JhU2lkZS5jc3MnXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcbmltcG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbi8vICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vIH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIHtjb25zb2xlLmxvZyhcImluaSBzdG9yZTJcIixzdG9yZSl9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/actions/userActions.js":
/*!**************************************!*\
  !*** ./pages/actions/userActions.js ***!
  \**************************************/
/*! exports provided: GET_COVIDS_LIST, GET_COVID_INDO, GET_COVID_POSITIF, GET_COVID_SEMBUH, SIGN_IN, SIGN_OUT, GET_USER_INFO, LOGIN_STATUS, ADD_PRODUCT, getCovidsList, getCovidIndo, getCovidPositif, getCovidSembuh, signIn, signOut, getUserInfo, changeLoginStatus, addProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_COVIDS_LIST\", function() { return GET_COVIDS_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_COVID_INDO\", function() { return GET_COVID_INDO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_COVID_POSITIF\", function() { return GET_COVID_POSITIF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_COVID_SEMBUH\", function() { return GET_COVID_SEMBUH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_IN\", function() { return SIGN_IN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_OUT\", function() { return SIGN_OUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_INFO\", function() { return GET_USER_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_STATUS\", function() { return LOGIN_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_PRODUCT\", function() { return ADD_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCovidsList\", function() { return getCovidsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCovidIndo\", function() { return getCovidIndo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCovidPositif\", function() { return getCovidPositif; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCovidSembuh\", function() { return getCovidSembuh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signOut\", function() { return signOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLoginStatus\", function() { return changeLoginStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProduct\", function() { return addProduct; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GET_COVIDS_LIST = \"GET_COVIDS_LIST\";\nconst GET_COVID_INDO = \"GET_COVID_INDO\";\nconst GET_COVID_POSITIF = \"GET_COVID_POSITIF\";\nconst GET_COVID_SEMBUH = \"GET_COVID_SEMBUH\";\nconst SIGN_IN = \"SIGN_IN\";\nconst SIGN_OUT = \"SIGN_OUT\";\nconst GET_USER_INFO = \"GET_USER_INFO\";\nconst LOGIN_STATUS = \"LOGIN_STATUS\";\nconst ADD_PRODUCT = \"ADD_PRODUCT\"; // const baseURL = 'https://api.kawalcorona.com/indonesia/'\n\nconst getCovidsList = () => {\n  return dispatch => {\n    // axios.get('http://localhost:3004/covids') \n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://api.kawalcorona.com/indonesia/provinsi/`).then(function (response) {\n      console.log(\"action prov\", response.data);\n      dispatch({\n        type: GET_COVIDS_LIST,\n        payload: {\n          data: response.data,\n          errorMessage: false\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n      dispatch({\n        type: GET_COVIDS_LIST,\n        payload: {\n          data: false,\n          errorMessage: error.message\n        }\n      });\n    });\n  };\n};\nconst getCovidIndo = () => {\n  return dispatch => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.kawalcorona.com/indonesia/').then(function (response) {\n      // console.log(\"action indo\",response);\n      dispatch({\n        type: GET_COVID_INDO,\n        payload: {\n          data: response.data,\n          errorMessage: false\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n      dispatch({\n        type: GET_COVID_INDO,\n        payload: {\n          data: false,\n          errorMessage: error.message\n        }\n      });\n    });\n  };\n};\nconst getCovidPositif = () => {\n  return dispatch => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.kawalcorona.com/positif').then(function (response) {\n      console.log(\"action positif\", response);\n      dispatch({\n        type: GET_COVID_POSITIF,\n        payload: {\n          data: response.data,\n          errorMessage: false\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n      dispatch({\n        type: GET_COVID_POSITIF,\n        payload: {\n          data: false,\n          errorMessage: error.message\n        }\n      });\n    });\n  };\n};\nconst getCovidSembuh = () => {\n  return dispatch => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.kawalcorona.com/sembuh').then(function (response) {\n      // console.log(\"action positif\",response);\n      dispatch({\n        type: GET_COVID_SEMBUH,\n        payload: {\n          data: response.data,\n          errorMessage: false\n        }\n      });\n    }).catch(function (error) {\n      console.log(error);\n      dispatch({\n        type: GET_COVID_SEMBUH,\n        payload: {\n          data: false,\n          errorMessage: error.message\n        }\n      });\n    });\n  };\n};\nconst signIn = userId => {\n  return {\n    type: SIGN_IN,\n    payload: userId\n  };\n};\nconst signOut = () => {\n  return {\n    type: SIGN_OUT\n  };\n};\nconst getUserInfo = userInfo => {\n  return {\n    type: GET_USER_INFO,\n    payload: {\n      userInfo\n    }\n  };\n};\nconst changeLoginStatus = isLogin => {\n  return {\n    type: LOGIN_STATUS,\n    isLogin: true\n  };\n};\nconst addProduct = product => {\n  return {\n    type: ADD_PRODUCT,\n    product\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzP2JmM2UiXSwibmFtZXMiOlsiR0VUX0NPVklEU19MSVNUIiwiR0VUX0NPVklEX0lORE8iLCJHRVRfQ09WSURfUE9TSVRJRiIsIkdFVF9DT1ZJRF9TRU1CVUgiLCJTSUdOX0lOIiwiU0lHTl9PVVQiLCJHRVRfVVNFUl9JTkZPIiwiTE9HSU5fU1RBVFVTIiwiQUREX1BST0RVQ1QiLCJnZXRDb3ZpZHNMaXN0IiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJlcnJvck1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwibWVzc2FnZSIsImdldENvdmlkSW5kbyIsImdldENvdmlkUG9zaXRpZiIsImdldENvdmlkU2VtYnVoIiwic2lnbkluIiwidXNlcklkIiwic2lnbk91dCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJjaGFuZ2VMb2dpblN0YXR1cyIsImlzTG9naW4iLCJhZGRQcm9kdWN0IiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFdBQVcsR0FB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RUFBRTtBQUZQO0FBRkYsT0FBRCxDQUFSO0FBT0QsS0FYSCxFQVlHQyxLQVpILENBWVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QlAsYUFBTyxDQUFDQyxHQUFSLENBQVlNLEtBQVo7QUFDQVosY0FBUSxDQUFDO0FBQ1BRLFlBQUksRUFBRWYsZ0JBREM7QUFFUGdCLGVBQU8sRUFBRTtBQUNQRixjQUFJLEVBQUUsS0FEQztBQUVQRyxzQkFBWSxFQUFFRSxLQUFLLENBQUNDO0FBRmI7QUFGRixPQUFELENBQVI7QUFPRCxLQXJCSDtBQXNCRCxHQXZCRDtBQXdCRCxDQXpCTTtBQTRCQSxNQUFNSSxNQUFNLEdBQUlDLE1BQUQsSUFBWTtBQUNoQyxTQUFPO0FBQ0xWLFFBQUksRUFBRWQsT0FERDtBQUVMZSxXQUFPLEVBQUVTO0FBRkosR0FBUDtBQUlELENBTE07QUFPQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUMzQixTQUFPO0FBQ0xYLFFBQUksRUFBRWI7QUFERCxHQUFQO0FBR0QsQ0FKTTtBQU1BLE1BQU15QixXQUFXLEdBQUlDLFFBQUQsSUFBYztBQUN2QyxTQUFPO0FBQ0xiLFFBQUksRUFBRVosYUFERDtBQUVMYSxXQUFPLEVBQUU7QUFDUFk7QUFETztBQUZKLEdBQVA7QUFNRCxDQVBNO0FBU0EsTUFBTUMsaUJBQWlCLEdBQUlDLE9BQUQsSUFBYTtBQUM1QyxTQUFPO0FBQ0xmLFFBQUksRUFBRVgsWUFERDtBQUVMMEIsV0FBTyxFQUFFO0FBRkosR0FBUDtBQUlELENBTE07QUFPQSxNQUFNQyxVQUFVLEdBQUlDLE9BQUQsSUFBYTtBQUNyQyxTQUFPO0FBQ0xqQixRQUFJLEVBQUVWLFdBREQ7QUFFRDJCO0FBRkMsR0FBUDtBQUlELENBTE0iLCJmaWxlIjoiLi9wYWdlcy9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuIFxuZXhwb3J0IGNvbnN0IEdFVF9DT1ZJRFNfTElTVCA9IFwiR0VUX0NPVklEU19MSVNUXCJcbmV4cG9ydCBjb25zdCBHRVRfQ09WSURfSU5ETyA9IFwiR0VUX0NPVklEX0lORE9cIlxuZXhwb3J0IGNvbnN0IEdFVF9DT1ZJRF9QT1NJVElGID0gXCJHRVRfQ09WSURfUE9TSVRJRlwiXG5leHBvcnQgY29uc3QgR0VUX0NPVklEX1NFTUJVSCA9IFwiR0VUX0NPVklEX1NFTUJVSFwiXG5leHBvcnQgY29uc3QgU0lHTl9JTiA9IFwiU0lHTl9JTlwiO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gXCJTSUdOX09VVFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX1VTRVJfSU5GTyA9IFwiR0VUX1VTRVJfSU5GT1wiO1xuZXhwb3J0IGNvbnN0IExPR0lOX1NUQVRVUyA9IFwiTE9HSU5fU1RBVFVTXCI7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1QgPSBcIkFERF9QUk9EVUNUXCI7XG5cblxuXG5cblxuLy8gY29uc3QgYmFzZVVSTCA9ICdodHRwczovL2FwaS5rYXdhbGNvcm9uYS5jb20vaW5kb25lc2lhLydcblxuZXhwb3J0IGNvbnN0IGdldENvdmlkc0xpc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAvLyBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb3ZpZHMnKSBcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmthd2FsY29yb25hLmNvbS9pbmRvbmVzaWEvcHJvdmluc2kvYCkgXG5cblxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIHByb3ZcIixyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9DT1ZJRFNfTElTVCxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9DT1ZJRFNfTElTVCxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn0gXG5cbmV4cG9ydCBjb25zdCBnZXRDb3ZpZEluZG8gPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmthd2FsY29yb25hLmNvbS9pbmRvbmVzaWEvJykgXG5cbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFjdGlvbiBpbmRvXCIscmVzcG9uc2UpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogR0VUX0NPVklEX0lORE8sXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfQ09WSURfSU5ETyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENvdmlkUG9zaXRpZiA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkua2F3YWxjb3JvbmEuY29tL3Bvc2l0aWYnKSBcblxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uIHBvc2l0aWZcIixyZXNwb25zZSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfQ09WSURfUE9TSVRJRixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9DT1ZJRF9QT1NJVElGLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRDb3ZpZFNlbWJ1aCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkua2F3YWxjb3JvbmEuY29tL3NlbWJ1aCcpIFxuXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3Rpb24gcG9zaXRpZlwiLHJlc3BvbnNlKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEdFVF9DT1ZJRF9TRU1CVUgsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBHRVRfQ09WSURfU0VNQlVILFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBzaWduSW4gPSAodXNlcklkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0lHTl9JTixcbiAgICBwYXlsb2FkOiB1c2VySWQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSUdOX09VVCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICh1c2VySW5mbykgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEdFVF9VU0VSX0lORk8sXG4gICAgcGF5bG9hZDoge1xuICAgICAgdXNlckluZm9cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlTG9naW5TdGF0dXMgPSAoaXNMb2dpbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOX1NUQVRVUyxcbiAgICBpc0xvZ2luOiB0cnVlXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1BST0RVQ1QsXG4gICAgICAgIHByb2R1Y3RcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/actions/userActions.js\n");

/***/ }),

/***/ "./pages/reducers/covids.js":
/*!**********************************!*\
  !*** ./pages/reducers/covids.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/userActions */ \"./pages/actions/userActions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// let initialState = {\n//   title : \"dew\",\n//   covids : [\n//     {\n//       id:1,\n//       nama: \"dewaq\",\n//       alamat: \"magetan\",\n//       umur: 21\n//     },\n//     {\n//       id:2,\n//       nama: \"kiki\",\n//       alamat: \"Solo\",\n//       umur: 21\n//     },\n//     {\n//       id:3,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:4,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:5,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:6,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:7,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:8,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:9,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:10,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     },\n//     {\n//       id:11,\n//       nama: \"Ani\",\n//       alamat: \"Semarang\",\n//       umur: 21\n//     }\n//   ],\n//   error: false,\n// }\n// const users = (state = initialState, action) => {\n//   return state\n// }\n// export default users\n\nlet initialState = {\n  title: \"dewa\",\n  getCovidsList: false,\n  getCovidIndo: false,\n  getCovidPositif: false,\n  getCovidSembuh: false,\n  errorCovidsList: false,\n  errorCovidIndo: false,\n  errorCovidPositif: false,\n  errorCovidSembuh: false,\n  isSignedIn: null,\n  userId: null\n};\n\nconst covids = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"GET_COVIDS_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        getCovidsList: action.payload.data,\n        errorCovidsList: action.payload.errorMessage\n      });\n\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"GET_COVID_INDO\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        getCovidIndo: action.payload.data,\n        errorCovidIndo: action.payload.errorMessage\n      });\n\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"GET_COVID_POSITIF\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        getCovidPositif: action.payload.data,\n        errorCovidPositif: action.payload.errorMessage\n      });\n\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"GET_COVID_SEMBUH\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        getCovidSembuh: action.payload.data,\n        errorCovidSembuh: action.payload.errorMessage\n      });\n\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"SIGN_IN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: true,\n        userId: action.payload\n      });\n\n    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__[\"SIGN_OUT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isSignedIn: false,\n        userId: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (covids);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWR1Y2Vycy9jb3ZpZHMuanM/N2FhZCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0aXRsZSIsImdldENvdmlkc0xpc3QiLCJnZXRDb3ZpZEluZG8iLCJnZXRDb3ZpZFBvc2l0aWYiLCJnZXRDb3ZpZFNlbWJ1aCIsImVycm9yQ292aWRzTGlzdCIsImVycm9yQ292aWRJbmRvIiwiZXJyb3JDb3ZpZFBvc2l0aWYiLCJlcnJvckNvdmlkU2VtYnVoIiwiaXNTaWduZWRJbiIsInVzZXJJZCIsImNvdmlkcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkdFVF9DT1ZJRFNfTElTVCIsInBheWxvYWQiLCJkYXRhIiwiZXJyb3JNZXNzYWdlIiwiR0VUX0NPVklEX0lORE8iLCJHRVRfQ09WSURfUE9TSVRJRiIsIkdFVF9DT1ZJRF9TRU1CVUgiLCJTSUdOX0lOIiwiU0lHTl9PVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBLElBQUlBLFlBQVksR0FBRztBQUNqQkMsT0FBSyxFQUFFLE1BRFU7QUFFakJDLGVBQWEsRUFBQyxLQUZHO0FBR2pCQyxjQUFZLEVBQUMsS0FISTtBQUlqQkMsaUJBQWUsRUFBQyxLQUpDO0FBS2pCQyxnQkFBYyxFQUFDLEtBTEU7QUFPakJDLGlCQUFlLEVBQUUsS0FQQTtBQVFqQkMsZ0JBQWMsRUFBQyxLQVJFO0FBU2pCQyxtQkFBaUIsRUFBQyxLQVREO0FBVWpCQyxrQkFBZ0IsRUFBQyxLQVZBO0FBWWpCQyxZQUFVLEVBQUUsSUFaSztBQWFqQkMsUUFBTSxFQUFFO0FBYlMsQ0FBbkI7O0FBaUJBLE1BQU1DLE1BQU0sR0FBRyxDQUFDQyxLQUFLLEdBQUdiLFlBQVQsRUFBdUJjLE1BQXZCLEtBQWtDO0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG9FQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRVgscUJBQWEsRUFBRVksTUFBTSxDQUFDRyxPQUFQLENBQWVDLElBRmhDO0FBR0VaLHVCQUFlLEVBQUVRLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRTtBQUhsQzs7QUFNRixTQUFLQyxtRUFBTDtBQUNFLDZDQUNLUCxLQURMO0FBRUVWLG9CQUFZLEVBQUVXLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUYvQjtBQUdFWCxzQkFBYyxFQUFFTyxNQUFNLENBQUNHLE9BQVAsQ0FBZUU7QUFIakM7O0FBTUYsU0FBS0Usc0VBQUw7QUFDRSw2Q0FDS1IsS0FETDtBQUVFVCx1QkFBZSxFQUFFVSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsSUFGbEM7QUFHRVYseUJBQWlCLEVBQUVNLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRTtBQUhwQzs7QUFNRixTQUFLRyxxRUFBTDtBQUNFLDZDQUNLVCxLQURMO0FBRUVSLHNCQUFjLEVBQUVTLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxJQUZqQztBQUdFVCx3QkFBZ0IsRUFBRUssTUFBTSxDQUFDRyxPQUFQLENBQWVFO0FBSG5DOztBQU1GLFNBQUtJLDREQUFMO0FBQ0UsNkNBQVlWLEtBQVo7QUFBbUJILGtCQUFVLEVBQUUsSUFBL0I7QUFBcUNDLGNBQU0sRUFBRUcsTUFBTSxDQUFDRztBQUFwRDs7QUFFQSxTQUFLTyw2REFBTDtBQUNFLDZDQUFZWCxLQUFaO0FBQW1CSCxrQkFBVSxFQUFFLEtBQS9CO0FBQXNDQyxjQUFNLEVBQUU7QUFBOUM7O0FBRUo7QUFDRSxhQUFPRSxLQUFQO0FBcENKO0FBc0NELENBdkNEOztBQXlDZUQscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWR1Y2Vycy9jb3ZpZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZXQgaW5pdGlhbFN0YXRlID0ge1xuLy8gICB0aXRsZSA6IFwiZGV3XCIsXG4vLyAgIGNvdmlkcyA6IFtcbi8vICAgICB7XG4vLyAgICAgICBpZDoxLFxuLy8gICAgICAgbmFtYTogXCJkZXdhcVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIm1hZ2V0YW5cIixcbi8vICAgICAgIHVtdXI6IDIxXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpZDoyLFxuLy8gICAgICAgbmFtYTogXCJraWtpXCIsXG4vLyAgICAgICBhbGFtYXQ6IFwiU29sb1wiLFxuLy8gICAgICAgdW11cjogMjFcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGlkOjMsXG4vLyAgICAgICBuYW1hOiBcIkFuaVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIlNlbWFyYW5nXCIsXG4vLyAgICAgICB1bXVyOiAyMVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaWQ6NCxcbi8vICAgICAgIG5hbWE6IFwiQW5pXCIsXG4vLyAgICAgICBhbGFtYXQ6IFwiU2VtYXJhbmdcIixcbi8vICAgICAgIHVtdXI6IDIxXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpZDo1LFxuLy8gICAgICAgbmFtYTogXCJBbmlcIixcbi8vICAgICAgIGFsYW1hdDogXCJTZW1hcmFuZ1wiLFxuLy8gICAgICAgdW11cjogMjFcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGlkOjYsXG4vLyAgICAgICBuYW1hOiBcIkFuaVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIlNlbWFyYW5nXCIsXG4vLyAgICAgICB1bXVyOiAyMVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaWQ6Nyxcbi8vICAgICAgIG5hbWE6IFwiQW5pXCIsXG4vLyAgICAgICBhbGFtYXQ6IFwiU2VtYXJhbmdcIixcbi8vICAgICAgIHVtdXI6IDIxXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpZDo4LFxuLy8gICAgICAgbmFtYTogXCJBbmlcIixcbi8vICAgICAgIGFsYW1hdDogXCJTZW1hcmFuZ1wiLFxuLy8gICAgICAgdW11cjogMjFcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGlkOjksXG4vLyAgICAgICBuYW1hOiBcIkFuaVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIlNlbWFyYW5nXCIsXG4vLyAgICAgICB1bXVyOiAyMVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaWQ6MTAsXG4vLyAgICAgICBuYW1hOiBcIkFuaVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIlNlbWFyYW5nXCIsXG4vLyAgICAgICB1bXVyOiAyMVxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgaWQ6MTEsXG4vLyAgICAgICBuYW1hOiBcIkFuaVwiLFxuLy8gICAgICAgYWxhbWF0OiBcIlNlbWFyYW5nXCIsXG4vLyAgICAgICB1bXVyOiAyMVxuLy8gICAgIH1cbi8vICAgXSxcbi8vICAgZXJyb3I6IGZhbHNlLFxuLy8gfVxuXG4vLyBjb25zdCB1c2VycyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4vLyAgIHJldHVybiBzdGF0ZVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCB1c2Vyc1xuIFxuXG5pbXBvcnQgeyBHRVRfQ09WSURTX0xJU1QsIEdFVF9DT1ZJRF9JTkRPLCBHRVRfQ09WSURfUE9TSVRJRiwgR0VUX0NPVklEX1NFTUJVSCwgU0lHTl9JTiwgU0lHTl9PVVQgfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyQWN0aW9uc1wiXG5cbmxldCBpbml0aWFsU3RhdGUgPSB7XG4gIHRpdGxlOiBcImRld2FcIixcbiAgZ2V0Q292aWRzTGlzdDpmYWxzZSxcbiAgZ2V0Q292aWRJbmRvOmZhbHNlLFxuICBnZXRDb3ZpZFBvc2l0aWY6ZmFsc2UsXG4gIGdldENvdmlkU2VtYnVoOmZhbHNlLFxuXG4gIGVycm9yQ292aWRzTGlzdDogZmFsc2UsXG4gIGVycm9yQ292aWRJbmRvOmZhbHNlLFxuICBlcnJvckNvdmlkUG9zaXRpZjpmYWxzZSAsXG4gIGVycm9yQ292aWRTZW1idWg6ZmFsc2UgLFxuXG4gIGlzU2lnbmVkSW46IG51bGwsXG4gIHVzZXJJZDogbnVsbFxuXG59XG4gXG5jb25zdCBjb3ZpZHMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfQ09WSURTX0xJU1Q6XG4gICAgICByZXR1cm57XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBnZXRDb3ZpZHNMaXN0OiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxuICAgICAgICBlcnJvckNvdmlkc0xpc3Q6IGFjdGlvbi5wYXlsb2FkLmVycm9yTWVzc2FnZVxuICAgICAgfVxuXG4gICAgY2FzZSBHRVRfQ09WSURfSU5ETzpcbiAgICAgIHJldHVybntcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdldENvdmlkSW5kbzogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgZXJyb3JDb3ZpZEluZG86IGFjdGlvbi5wYXlsb2FkLmVycm9yTWVzc2FnZVxuICAgICAgfVxuXG4gICAgY2FzZSBHRVRfQ09WSURfUE9TSVRJRjpcbiAgICAgIHJldHVybntcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdldENvdmlkUG9zaXRpZjogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgZXJyb3JDb3ZpZFBvc2l0aWY6IGFjdGlvbi5wYXlsb2FkLmVycm9yTWVzc2FnZVxuICAgICAgfVxuXG4gICAgY2FzZSBHRVRfQ09WSURfU0VNQlVIOlxuICAgICAgcmV0dXJue1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ2V0Q292aWRTZW1idWg6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXG4gICAgICAgIGVycm9yQ292aWRTZW1idWg6IGFjdGlvbi5wYXlsb2FkLmVycm9yTWVzc2FnZVxuICAgICAgfVxuXG4gICAgY2FzZSBTSUdOX0lOOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzU2lnbmVkSW46IHRydWUsIHVzZXJJZDogYWN0aW9uLnBheWxvYWQgfTtcblxuICAgICAgY2FzZSBTSUdOX09VVDpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzU2lnbmVkSW46IGZhbHNlLCB1c2VySWQ6IG51bGwgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb3ZpZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reducers/covids.js\n");

/***/ }),

/***/ "./pages/reducers/index.js":
/*!*********************************!*\
  !*** ./pages/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _covids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./covids */ \"./pages/reducers/covids.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  covids: _covids__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWR1Y2Vycy9pbmRleC5qcz80ZWU4Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvdmlkcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRWVBLDRIQUFlLENBQUM7QUFDN0JDLHlEQUFNQTtBQUR1QixDQUFELENBQTlCIiwiZmlsZSI6Ii4vcGFnZXMvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY292aWRzIGZyb20gJy4vY292aWRzJ1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgY292aWRzXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reducers/index.js\n");

/***/ }),

/***/ "./styles/Login.css":
/*!**************************!*\
  !*** ./styles/Login.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Mb2dpbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Login.css\n");

/***/ }),

/***/ "./styles/card.css":
/*!*************************!*\
  !*** ./styles/card.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9jYXJkLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/card.css\n");

/***/ }),

/***/ "./styles/dashboard.css":
/*!******************************!*\
  !*** ./styles/dashboard.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9kYXNoYm9hcmQuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/dashboard.css\n");

/***/ }),

/***/ "./styles/dew.css":
/*!************************!*\
  !*** ./styles/dew.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9kZXcuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/dew.css\n");

/***/ }),

/***/ "./styles/infoBox.css":
/*!****************************!*\
  !*** ./styles/infoBox.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9pbmZvQm94LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/infoBox.css\n");

/***/ }),

/***/ "./styles/mapku.css":
/*!**************************!*\
  !*** ./styles/mapku.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9tYXBrdS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/mapku.css\n");

/***/ }),

/***/ "./styles/table.css":
/*!**************************!*\
  !*** ./styles/table.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy90YWJsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/table.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });