"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./app/components/project.tsx":
/*!************************************!*\
  !*** ./app/components/project.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Project = function(param) {\n    var image = param.image, title = param.title, description = param.description, details = param.details;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"p-6 flex gap-4 text-left h-full w-full justify-center rounded-xl m-auto bg-[rgba(255,255,255,.2)] hover:origin-top hover:-translate-y-2 ease-in-out duration-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: title,\n                width: \"0\",\n                height: \"0\",\n                sizes: \"100vw\",\n                className: \"mb-4 w-[60px] h-auto\"\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-bold text-t-mobile\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[1rem] font-lato\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: details\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/project.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Byb2plY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQVEvQixJQUFNQyxVQUFVO1FBQUdDLGNBQUFBLE9BQU9DLGNBQUFBLE9BQU9DLG9CQUFBQSxhQUFhQyxnQkFBQUE7SUFDNUMscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNkLDhEQUFDUCxtREFBS0E7Z0JBQ0pRLEtBQUtOO2dCQUNMTyxLQUFLTjtnQkFDTE8sT0FBTTtnQkFDTkMsUUFBTztnQkFDUEMsT0FBTTtnQkFDTkwsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDTTs7a0NBQ0MsOERBQUNDO3dCQUFHUCxXQUFVO2tDQUEyQko7Ozs7OztrQ0FDekMsOERBQUNZO3dCQUFFUixXQUFVO2tDQUF5Qkg7Ozs7OztrQ0FDdEMsOERBQUNXO2tDQUFHVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Q7S0FuQk1KO0FBcUJOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3Byb2plY3QudHN4PzRjOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZGV0YWlscz86IHN0cmluZztcbn1cbmNvbnN0IFByb2plY3QgPSAoeyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkZXRhaWxzIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTYgZmxleCBnYXAtNCB0ZXh0LWxlZnQgaC1mdWxsIHctZnVsbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXhsIG0tYXV0byBiZy1bcmdiYSgyNTUsMjU1LDI1NSwuMildIGhvdmVyOm9yaWdpbi10b3AgaG92ZXI6LXRyYW5zbGF0ZS15LTIgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICB3aWR0aD1cIjBcIlxuICAgICAgICAgIGhlaWdodD1cIjBcIlxuICAgICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgdy1bNjBweF0gaC1hdXRvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdC1tb2JpbGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxcmVtXSBmb250LWxhdG9cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwPntkZXRhaWxzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiXSwibmFtZXMiOlsiSW1hZ2UiLCJQcm9qZWN0IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZXMiLCJkaXYiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/project.tsx\n"));

/***/ })

});