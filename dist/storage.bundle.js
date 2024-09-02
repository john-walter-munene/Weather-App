/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Console App/storage.js":
/*!************************************!*\
  !*** ./src/Console App/storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadLastSearchesFromLocalStorage: () => (/* binding */ loadLastSearchesFromLocalStorage),\n/* harmony export */   saveLatestStoreToLocalStorage: () => (/* binding */ saveLatestStoreToLocalStorage)\n/* harmony export */ });\n// Function to save the store to local storage\r\nfunction saveLatestStoreToLocalStorage(weatherStore) {\r\n    try {\r\n        localStorage.setItem('weatherSearches', JSON.stringify(weatherStore));\r\n    } catch (error) {\r\n        console.error('Error saving to local storage:', error);\r\n    }\r\n}\r\n\r\n// Function to load the store from local storage\r\nfunction loadLastSearchesFromLocalStorage(weatherStore) {\r\n    const weatherData = JSON.parse(localStorage.getItem('weatherSearches'));\r\n\r\n    if (weatherData && weatherData.length > 0) {\r\n        weatherStore.length = 0; // Clear the existing array\r\n        weatherStore.push(...weatherData); // Add new data\r\n        console.log(weatherStore);\r\n    }\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29uc29sZSBBcHAvc3RvcmFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzdGFydGJ1aWxkaW5nLy4vc3JjL0NvbnNvbGUgQXBwL3N0b3JhZ2UuanM/OGU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGdW5jdGlvbiB0byBzYXZlIHRoZSBzdG9yZSB0byBsb2NhbCBzdG9yYWdlXHJcbmZ1bmN0aW9uIHNhdmVMYXRlc3RTdG9yZVRvTG9jYWxTdG9yYWdlKHdlYXRoZXJTdG9yZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlclNlYXJjaGVzJywgSlNPTi5zdHJpbmdpZnkod2VhdGhlclN0b3JlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gbG9hZCB0aGUgc3RvcmUgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbmZ1bmN0aW9uIGxvYWRMYXN0U2VhcmNoZXNGcm9tTG9jYWxTdG9yYWdlKHdlYXRoZXJTdG9yZSkge1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3ZWF0aGVyU2VhcmNoZXMnKSk7XHJcblxyXG4gICAgaWYgKHdlYXRoZXJEYXRhICYmIHdlYXRoZXJEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB3ZWF0aGVyU3RvcmUubGVuZ3RoID0gMDsgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIGFycmF5XHJcbiAgICAgICAgd2VhdGhlclN0b3JlLnB1c2goLi4ud2VhdGhlckRhdGEpOyAvLyBBZGQgbmV3IGRhdGFcclxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyU3RvcmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzYXZlTGF0ZXN0U3RvcmVUb0xvY2FsU3RvcmFnZSwgbG9hZExhc3RTZWFyY2hlc0Zyb21Mb2NhbFN0b3JhZ2UgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Console App/storage.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Console App/storage.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;