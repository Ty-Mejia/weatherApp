/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ \"./src/modules/loadPage.js\");\n/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n\n\n\n(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nconst locationSearchForm = document.getElementById(\"location-search-form\");\n\nlocationSearchForm.addEventListener(\"submit\", () => {\n\tconst where = document.getElementById(\"location-search-input\").value;    \n    (0,_modules_api__WEBPACK_IMPORTED_MODULE_1__.default)(where);\n\n});\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = document.getElementById(\"main-display\");\n\n\nasync function letsFetchSomeData(where) {\n\t\tconst response = await fetch(\n\t\t\t`api.openweathermap.org/data/2.5/weather?q=${where}&appid=b4511e0f3d46dc6c849105371aafd345`,\n\t\t\t{ mode: \"cors\" }\n\t\t);\n\t\tconst weatherData = await response.json();\n\n\t\tdisplay.textContent = weatherData.weather;\n\t}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (letsFetchSomeData);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// creates a btn\nfunction createBtn(idAndClass, text) {\n\tconst btn = document.createElement(\"button\");\n\tbtn.setAttribute(\"id\", idAndClass);\n\tbtn.setAttribute(\"class\", idAndClass);\n\n\tconst span = document.createElement(\"span\");\n\tspan.setAttribute(\"class\", \"span\");\n\tspan.textContent = text;\n\n\tbtn.appendChild(span);\n\n\treturn btn;\n}\n\n// create header\nfunction createHeader(id, text) {\n\tconst header = document.createElement(\"header\");\n\theader.setAttribute(\"id\", id);\n\n\tconst headerText = document.createElement(\"h1\");\n\theaderText.textContent = text;\n\theader.appendChild(headerText);\n\n\treturn header;\n}\n\n// create footer\nfunction createFooter(id, text) {\n\tconst footer = document.createElement(\"footer\");\n\tfooter.setAttribute(\"id\", id);\n\n\tconst footerText = document.createElement(\"h5\");\n\tfooterText.textContent = text;\n\tfooter.appendChild(footerText);\n\n\treturn footer;\n}\n\nfunction createMain(id) {\n\tconst main = document.createElement(\"div\");\n\tmain.setAttribute(\"id\", id);\n\n\tconst div = document.createElement('div');\n\tdiv.setAttribute(`${id}-display`, id)\n\tmain.appendChild(div);\n\n\treturn main;\n}\n\nfunction createForm(id) {\n\tconst form = document.createElement(\"form\");\n\tform.setAttribute(\"id\", id);\n\n\treturn form;\n}\n\nfunction createInput(id, type) {\n\tconst input = document.createElement(\"input\");\n\tinput.setAttribute(\"id\", id);\n\tinput.setAttribute(\"type\", type);\n\n\treturn input;\n}\n\nfunction createLabel(id, text) {\n\tconst label = document.createElement(\"label\");\n\tlabel.setAttribute(\"id\", id);\n\tlabel.textContent = text;\n\n\treturn label;\n}\n\nfunction createSearchBar(id) {\n\tconst searchBarContainer = document.createElement(\"div\");\n\tsearchBarContainer.setAttribute(\"id\", `${id}-container`);\n\n\tconst searchBar = createForm(`${id}-form`);\n\tconst label = createLabel(`${id}-label`, \"Location\");\n\tconst input = createInput(`${id}-input`, \"text\");\n\tconst btn = createBtn(`${id}-btn`, \"S\");\n\n\tsearchBarContainer.appendChild(searchBar);\n\tsearchBar.appendChild(label);\n\tsearchBar.appendChild(input);\n\tsearchBar.appendChild(btn);\n\n\treturn searchBarContainer;\n}\n\nfunction loadPage() {\n\tconst content = document.getElementById(\"content\");\n\tconst header = createHeader(\"header\", \"Weather App\");\n\tconst main = createMain(\"main\");\n\tconst searchBar = createSearchBar(\"location-search\");\n\tconst footer = createFooter(\"footer\", \"@All Rights Reserved\");\n\n\tcontent.appendChild(header);\n\tcontent.appendChild(main);\n\tcontent.appendChild(footer);\n\n\tmain.appendChild(searchBar);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/loadPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;