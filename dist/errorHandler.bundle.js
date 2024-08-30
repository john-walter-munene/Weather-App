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

/***/ "./src/Console App/errorHandler.js":
/*!*****************************************!*\
  !*** ./src/Console App/errorHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleGetGifError: () => (/* binding */ handleGetGifError),\n/* harmony export */   handleGetWeatherError: () => (/* binding */ handleGetWeatherError)\n/* harmony export */ });\n/* harmony import */ var _Frontend_loadingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frontend/loadingComponent */ \"./src/Frontend/loadingComponent.js\");\n\r\n\r\nconst weatherApplication = document.querySelector('.weather-app');\r\n\r\nfunction handleGetWeatherError(error) {\r\n\r\n    // Notify user about error.\r\n    const loadingComponent = document.querySelector('.loading-component');\r\n    loadingComponent.textContent = '';\r\n    loadingComponent.textContent = 'Ooops, failed to fetch. Please check your connection and try again';\r\n\r\n    // Check if error is a SyntaxError and contains specific text\r\n     if ((error instanceof SyntaxError) && error.message.includes('Bad API ')) {\r\n        loadingComponent.textContent = '';\r\n        loadingComponent.textContent = 'Ooops! Your Location is unavailable. Please enter a valid location!';\r\n    }\r\n\r\n    //Remove notification after 4 seconds and load home page.\r\n    setTimeout( () => {\r\n        (0,_Frontend_loadingComponent__WEBPACK_IMPORTED_MODULE_0__.removeLoadingComponent)()\r\n    }, 3000);\r\n}\r\n\r\nfunction handleGetGifError(error) {\r\n    console.log(error);\r\n    const gifHolder = document.querySelector('.weather-gif');\r\n    weatherApplication.removeChild(gifHolder);\r\n}   \r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29uc29sZSBBcHAvZXJyb3JIYW5kbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtGQUFzQjtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnN0YXJ0YnVpbGRpbmcvLi9zcmMvQ29uc29sZSBBcHAvZXJyb3JIYW5kbGVyLmpzPzBkOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtb3ZlTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9Gcm9udGVuZC9sb2FkaW5nQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB3ZWF0aGVyQXBwbGljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1hcHAnKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUdldFdlYXRoZXJFcnJvcihlcnJvcikge1xyXG5cclxuICAgIC8vIE5vdGlmeSB1c2VyIGFib3V0IGVycm9yLlxyXG4gICAgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLWNvbXBvbmVudCcpO1xyXG4gICAgbG9hZGluZ0NvbXBvbmVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgbG9hZGluZ0NvbXBvbmVudC50ZXh0Q29udGVudCA9ICdPb29wcywgZmFpbGVkIHRvIGZldGNoLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4nO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGVycm9yIGlzIGEgU3ludGF4RXJyb3IgYW5kIGNvbnRhaW5zIHNwZWNpZmljIHRleHRcclxuICAgICBpZiAoKGVycm9yIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0JhZCBBUEkgJykpIHtcclxuICAgICAgICBsb2FkaW5nQ29tcG9uZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbG9hZGluZ0NvbXBvbmVudC50ZXh0Q29udGVudCA9ICdPb29wcyEgWW91ciBMb2NhdGlvbiBpcyB1bmF2YWlsYWJsZS4gUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24hJztcclxuICAgIH1cclxuXHJcbiAgICAvL1JlbW92ZSBub3RpZmljYXRpb24gYWZ0ZXIgNCBzZWNvbmRzIGFuZCBsb2FkIGhvbWUgcGFnZS5cclxuICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICByZW1vdmVMb2FkaW5nQ29tcG9uZW50KClcclxuICAgIH0sIDMwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVHZXRHaWZFcnJvcihlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgY29uc3QgZ2lmSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZ2lmJyk7XHJcbiAgICB3ZWF0aGVyQXBwbGljYXRpb24ucmVtb3ZlQ2hpbGQoZ2lmSG9sZGVyKTtcclxufSAgIFxyXG5cclxuZXhwb3J0IHsgaGFuZGxlR2V0V2VhdGhlckVycm9yLCBoYW5kbGVHZXRHaWZFcnJvciwgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Console App/errorHandler.js\n");

/***/ }),

/***/ "./src/Frontend/loadingComponent.js":
/*!******************************************!*\
  !*** ./src/Frontend/loadingComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blurContentWaitingForResponse: () => (/* binding */ blurContentWaitingForResponse),\n/* harmony export */   displayLoadingComponent: () => (/* binding */ displayLoadingComponent),\n/* harmony export */   removeLoadingComponent: () => (/* binding */ removeLoadingComponent)\n/* harmony export */ });\n// Get required DOM elements.\r\nconst weatherApplication = document.querySelector('.weather-app');\r\nconst temperatureHolder = document.querySelector('.temperature-disp');\r\nconst locationHolder = document.querySelector('.location-details');\r\nconst weatherGifHolder = document.querySelector('.weather-gif');\r\nconst briefSummaryHolder = document.querySelector('.brief-summary');\r\nconst forecastHolder = document.querySelector('.weather-forecast');\r\nconst forecastDescriptionHolder = document.querySelector('.weathercast-description');\r\nconst toggleDetailsHolder = document.querySelector('.toggle-details');\r\nconst latestSearchesHolder = document.querySelector('.last-searches');\r\n\r\nconst uIComponents = [\r\n    temperatureHolder,\r\n    locationHolder,\r\n    weatherGifHolder,\r\n    briefSummaryHolder,\r\n    forecastHolder,\r\n    forecastDescriptionHolder,\r\n    toggleDetailsHolder,\r\n    latestSearchesHolder,\r\n];\r\n\r\nfunction blurContentWaitingForResponse() {\r\n    uIComponents.forEach((component) => component.style.opacity = 0);\r\n}\r\n\r\nfunction displayLoadingComponent() {\r\n    const loadingComponent = document.createElement('div');\r\n    loadingComponent.setAttribute('class', 'loading-component');\r\n    const loadingText = document.createElement('h3');\r\n    loadingText.textContent = 'Hold a moment, fetching you weather forecast...';\r\n    loadingComponent.appendChild(loadingText);\r\n\r\n    weatherApplication.appendChild(loadingComponent);\r\n}\r\n\r\nfunction removeLoadingComponent() {\r\n    const loadingComponent = document.querySelector('.loading-component');\r\n    if (loadingComponent) weatherApplication.removeChild(loadingComponent);\r\n    uIComponents.forEach((component) => component.style.opacity = 1);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRnJvbnRlbmQvbG9hZGluZ0NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzdGFydGJ1aWxkaW5nLy4vc3JjL0Zyb250ZW5kL2xvYWRpbmdDb21wb25lbnQuanM/ZDFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZXQgcmVxdWlyZWQgRE9NIGVsZW1lbnRzLlxyXG5jb25zdCB3ZWF0aGVyQXBwbGljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1hcHAnKTtcclxuY29uc3QgdGVtcGVyYXR1cmVIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtZGlzcCcpO1xyXG5jb25zdCBsb2NhdGlvbkhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1kZXRhaWxzJyk7XHJcbmNvbnN0IHdlYXRoZXJHaWZIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1naWYnKTtcclxuY29uc3QgYnJpZWZTdW1tYXJ5SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJyaWVmLXN1bW1hcnknKTtcclxuY29uc3QgZm9yZWNhc3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1mb3JlY2FzdCcpO1xyXG5jb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJjYXN0LWRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IHRvZ2dsZURldGFpbHNIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWRldGFpbHMnKTtcclxuY29uc3QgbGF0ZXN0U2VhcmNoZXNIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC1zZWFyY2hlcycpO1xyXG5cclxuY29uc3QgdUlDb21wb25lbnRzID0gW1xyXG4gICAgdGVtcGVyYXR1cmVIb2xkZXIsXHJcbiAgICBsb2NhdGlvbkhvbGRlcixcclxuICAgIHdlYXRoZXJHaWZIb2xkZXIsXHJcbiAgICBicmllZlN1bW1hcnlIb2xkZXIsXHJcbiAgICBmb3JlY2FzdEhvbGRlcixcclxuICAgIGZvcmVjYXN0RGVzY3JpcHRpb25Ib2xkZXIsXHJcbiAgICB0b2dnbGVEZXRhaWxzSG9sZGVyLFxyXG4gICAgbGF0ZXN0U2VhcmNoZXNIb2xkZXIsXHJcbl07XHJcblxyXG5mdW5jdGlvbiBibHVyQ29udGVudFdhaXRpbmdGb3JSZXNwb25zZSgpIHtcclxuICAgIHVJQ29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5zdHlsZS5vcGFjaXR5ID0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbG9hZGluZ0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGluZ0NvbXBvbmVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvYWRpbmctY29tcG9uZW50Jyk7XHJcbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCA9ICdIb2xkIGEgbW9tZW50LCBmZXRjaGluZyB5b3Ugd2VhdGhlciBmb3JlY2FzdC4uLic7XHJcbiAgICBsb2FkaW5nQ29tcG9uZW50LmFwcGVuZENoaWxkKGxvYWRpbmdUZXh0KTtcclxuXHJcbiAgICB3ZWF0aGVyQXBwbGljYXRpb24uYXBwZW5kQ2hpbGQobG9hZGluZ0NvbXBvbmVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nQ29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctY29tcG9uZW50Jyk7XHJcbiAgICBpZiAobG9hZGluZ0NvbXBvbmVudCkgd2VhdGhlckFwcGxpY2F0aW9uLnJlbW92ZUNoaWxkKGxvYWRpbmdDb21wb25lbnQpO1xyXG4gICAgdUlDb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LnN0eWxlLm9wYWNpdHkgPSAxKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYmx1ckNvbnRlbnRXYWl0aW5nRm9yUmVzcG9uc2UsIGRpc3BsYXlMb2FkaW5nQ29tcG9uZW50LCByZW1vdmVMb2FkaW5nQ29tcG9uZW50LCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Frontend/loadingComponent.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Console App/errorHandler.js");
/******/ 	
/******/ })()
;