"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/uploadToPinata.js":
/*!*********************************!*\
  !*** ./utils/uploadToPinata.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\n\nasync function uploadToPinata(blob) {\n    // Upload the blob to PINATA\n    try {\n        const formData = new FormData();\n        formData.append(\"file\", blob);\n        const resFile = await (0,axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            method: \"post\",\n            url: \"https://api.pinata.cloud/pinning/pinFileToIPFS\",\n            data: formData,\n            headers: {\n                pinata_api_key: \"ad74e07fb692218fa8ca\",\n                pinata_secret_api_key: \"02f02b50d8560661df6c30cd130bf7249c8c26cd53f29e4582349453c0050afc\",\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        const fileURL = \"ipfs://\".concat(resFile.data.IpfsHash);\n        return fileURL;\n    } catch (e) {\n        console.error(e);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploadToPinata);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91cGxvYWRUb1BpbmF0YS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDNkI7QUFFdkQsZUFBZUcsZUFBZUMsSUFBSTtJQUNoQyw0QkFBNEI7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxRQUFRSDtRQUN4QixNQUFNSSxVQUFVLE1BQU1SLGlEQUFLQSxDQUFDO1lBQzFCUyxRQUFRO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTU47WUFDTk8sU0FBUztnQkFDUEMsZ0JBQWlCO2dCQUNqQkMsdUJBQXdCO2dCQUN4QixnQkFBZ0I7WUFDbEI7UUFDRjtRQUNBLE1BQU1DLFVBQVUsVUFBZ0MsT0FBdEJQLFFBQVFHLElBQUksQ0FBQ0ssUUFBUTtRQUMvQyxPQUFPRDtJQUNULEVBQUUsT0FBT0UsR0FBRztRQUNWQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2hCO0FBQ0Y7QUFFQSwrREFBZWQsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy91cGxvYWRUb1BpbmF0YS5qcz81YzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRUb1BpbmF0YShibG9iKSB7XG4gIC8vIFVwbG9hZCB0aGUgYmxvYiB0byBQSU5BVEFcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgYmxvYik7XG4gICAgY29uc3QgcmVzRmlsZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkucGluYXRhLmNsb3VkL3Bpbm5pbmcvcGluRmlsZVRvSVBGU1wiLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHBpbmF0YV9hcGlfa2V5OiBgYWQ3NGUwN2ZiNjkyMjE4ZmE4Y2FgLFxuICAgICAgICBwaW5hdGFfc2VjcmV0X2FwaV9rZXk6IGAwMmYwMmI1MGQ4NTYwNjYxZGY2YzMwY2QxMzBiZjcyNDljOGMyNmNkNTNmMjllNDU4MjM0OTQ1M2MwMDUwYWZjYCxcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGZpbGVVUkwgPSBgaXBmczovLyR7cmVzRmlsZS5kYXRhLklwZnNIYXNofWA7XG4gICAgcmV0dXJuIGZpbGVVUkw7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFRvUGluYXRhO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInVwbG9hZFRvUGluYXRhIiwiYmxvYiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNGaWxlIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImhlYWRlcnMiLCJwaW5hdGFfYXBpX2tleSIsInBpbmF0YV9zZWNyZXRfYXBpX2tleSIsImZpbGVVUkwiLCJJcGZzSGFzaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/uploadToPinata.js\n"));

/***/ })

});