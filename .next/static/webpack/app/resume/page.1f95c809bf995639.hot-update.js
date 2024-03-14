"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-pages-browser)/./app/work/intakeForms.tsx":
/*!**********************************!*\
  !*** ./app/work/intakeForms.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chip */ \"(app-pages-browser)/./app/components/chip.tsx\");\nvar _this = undefined;\n\n\n\nvar IntakeForms = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14\",\n                children: \"Intake Forms\"\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2\",\n                                children: \"Background\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"This project was built for Season Health. Previously, our product was only available to patients through our contracts with Payers. These Payers would provide us some information about their patients' health. We pivoted to a D2C offering and needed to collect this information directly in our application. This information needed to be accessible in our own admin application as well as a third party EHR.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/images/projects/intake-form.png\",\n                                alt: \"cart\",\n                                width: \"0\",\n                                height: \"0\",\n                                sizes: \"100vw\",\n                                className: \"w-full md:w-[80%] h-auto mx-auto my-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2\",\n                                children: \"Difficult Tasks\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"ml-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold\",\n                                                children: \"Data management:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 25\n                                            }, _this),\n                                            \" The answers we collected needed to be persisted across other forms in the app. We used formik and react query to achieve this.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold\",\n                                                children: \"Form Validation:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 25\n                                            }, _this),\n                                            \" The answers we collected had to be validated under specific restraints, especially when collecting health metrics like A1C. We used Yup for this form validation. We wanted to make sure that all errors displayed would not negatively affect the experience.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold\",\n                                                children: \"Third Party EHR:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 25\n                                            }, _this),\n                                            \" The answers needed to be pushed to our EHR, Healthie. Unfortunately, their api was very brittle and any subsequent form changes would break this connection. We had to build the form with this in mind.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2\",\n                                children: \"Impact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Providers could spend less time per patient since their initial health information was collected in-app instead of verbally in meetings. This reduced the company's cost for each appointment.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2\",\n                                children: \"Tech used\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-2 flex-wrap\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Typescript\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"React Query\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Formik\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Redux\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        text: \"Yup\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/intakeForms.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = IntakeForms;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IntakeForms);\nvar _c;\n$RefreshReg$(_c, \"IntakeForms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93b3JrL2ludGFrZUZvcm1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytCO0FBQ087QUFFdEMsSUFBTUUsY0FBd0I7SUFDNUIscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQXVHOzs7Ozs7MEJBQ3JILDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ1gsOERBQUNDOzswQ0FDRyw4REFBQ0M7Z0NBQUdGLFdBQVU7MENBQW1GOzs7Ozs7MENBQ2pHLDhEQUFDRzswQ0FBRTs7Ozs7OzBDQVFILDhEQUFDUixtREFBS0E7Z0NBQ0VTLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLE9BQU07Z0NBQ05DLFFBQU87Z0NBQ1BDLE9BQU07Z0NBQ05SLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJdEIsOERBQUNDOzswQ0FDRyw4REFBQ0M7Z0NBQUdGLFdBQVU7MENBQW1GOzs7Ozs7MENBQ2pHLDhEQUFDUztnQ0FBR1QsV0FBVTs7a0RBQ1YsOERBQUNVOzswREFDRyw4REFBQ0M7Z0RBQUtYLFdBQVU7MERBQVk7Ozs7Ozs0Q0FBdUI7Ozs7Ozs7a0RBR3ZELDhEQUFDVTs7MERBQ0csOERBQUNDO2dEQUFLWCxXQUFVOzBEQUFZOzs7Ozs7NENBQXVCOzs7Ozs7O2tEQUd2RCw4REFBQ1U7OzBEQUNHLDhEQUFDQztnREFBS1gsV0FBVTswREFBWTs7Ozs7OzRDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPL0QsOERBQUNDOzswQ0FDRyw4REFBQ0M7Z0NBQUdGLFdBQVU7MENBQW1GOzs7Ozs7MENBQ2pHLDhEQUFDRzswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQU1QLDhEQUFDRjs7MENBQ0csOERBQUNDO2dDQUFHRixXQUFVOzBDQUFtRjs7Ozs7OzBDQUNqRyw4REFBQ0Y7Z0NBQUlFLFdBQVU7O2tEQUNYLDhEQUFDSix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7a0RBQ1gsOERBQUNoQix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7a0RBQ1gsOERBQUNoQix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7a0RBQ1gsOERBQUNoQix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7a0RBQ1gsOERBQUNoQix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7a0RBQ1gsOERBQUNoQix3REFBSUE7d0NBQUNnQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7S0FuRU1mO0FBcUVOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93b3JrL2ludGFrZUZvcm1zLnRzeD9jYzcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IENoaXAgZnJvbSAnLi4vY29tcG9uZW50cy9jaGlwJztcblxuY29uc3QgSW50YWtlRm9ybXM6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtcG9wcGlucyB0ZXh0LXQtbW9iaWxlIGZvbnQtYm9sZCB0ZXh0LVsxLjVyZW1dIG1kOnRleHQtWzIuMnJlbV0gdGV4dC1jZW50ZXIgbXQtMTAgbWQ6bXQtMjAgbWItMTQnPkludGFrZSBGb3JtczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtcG9wcGlucyB1cHBlcmNhc2UgdGV4dC10LW1vYmlsZSB0ZXh0LVsxcmVtXSBtZDp0ZXh0LVsxLjNyZW1dIGZvbnQtYm9sZCBtYi0yJz5CYWNrZ3JvdW5kPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcm9qZWN0IHdhcyBidWlsdCBmb3IgU2Vhc29uIEhlYWx0aC5cblxuICAgICAgICAgICAgICAgICAgICBQcmV2aW91c2x5LCBvdXIgcHJvZHVjdCB3YXMgb25seSBhdmFpbGFibGUgdG8gcGF0aWVudHMgdGhyb3VnaCBvdXIgY29udHJhY3RzIHdpdGggUGF5ZXJzLiBUaGVzZSBQYXllcnMgd291bGQgcHJvdmlkZSB1c1xuICAgICAgICAgICAgICAgICAgICBzb21lIGluZm9ybWF0aW9uIGFib3V0IHRoZWlyIHBhdGllbnRzJmFwb3M7IGhlYWx0aC4gV2UgcGl2b3RlZCB0byBhIEQyQyBvZmZlcmluZyBhbmQgbmVlZGVkIHRvIGNvbGxlY3QgdGhpcyBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RseSBpbiBvdXIgYXBwbGljYXRpb24uIFRoaXMgaW5mb3JtYXRpb24gbmVlZGVkIHRvIGJlIGFjY2Vzc2libGUgaW4gb3VyIG93biBhZG1pbiBhcHBsaWNhdGlvbiBhcyB3ZWxsIGFzIGEgXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkIHBhcnR5IEVIUi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzL2ludGFrZS1mb3JtLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctWzgwJV0gaC1hdXRvIG14LWF1dG8gbXktNlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtcG9wcGlucyB1cHBlcmNhc2UgdGV4dC10LW1vYmlsZSB0ZXh0LVsxcmVtXSBtZDp0ZXh0LVsxLjNyZW1dIGZvbnQtYm9sZCBtYi0yJz5EaWZmaWN1bHQgVGFza3M8L2gyPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J21sLTEwJz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RGF0YSBtYW5hZ2VtZW50Ojwvc3Bhbj4gVGhlIGFuc3dlcnMgd2UgY29sbGVjdGVkIG5lZWRlZCB0byBiZSBwZXJzaXN0ZWQgYWNyb3NzIG90aGVyIGZvcm1zIGluIHRoZSBhcHAuIFdlIHVzZWQgZm9ybWlrXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgcmVhY3QgcXVlcnkgdG8gYWNoaWV2ZSB0aGlzLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Gb3JtIFZhbGlkYXRpb246PC9zcGFuPiBUaGUgYW5zd2VycyB3ZSBjb2xsZWN0ZWQgaGFkIHRvIGJlIHZhbGlkYXRlZCB1bmRlciBzcGVjaWZpYyByZXN0cmFpbnRzLCBlc3BlY2lhbGx5IHdoZW4gY29sbGVjdGluZyBoZWFsdGggbWV0cmljcyBsaWtlIEExQy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHVzZWQgWXVwIGZvciB0aGlzIGZvcm0gdmFsaWRhdGlvbi4gV2Ugd2FudGVkIHRvIG1ha2Ugc3VyZSB0aGF0IGFsbCBlcnJvcnMgZGlzcGxheWVkIHdvdWxkIG5vdCBuZWdhdGl2ZWx5IGFmZmVjdCB0aGUgZXhwZXJpZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VGhpcmQgUGFydHkgRUhSOjwvc3Bhbj4gVGhlIGFuc3dlcnMgbmVlZGVkIHRvIGJlIHB1c2hlZCB0byBvdXIgRUhSLCBIZWFsdGhpZS4gVW5mb3J0dW5hdGVseSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVpciBhcGkgd2FzIHZlcnkgYnJpdHRsZSBhbmQgYW55IHN1YnNlcXVlbnQgZm9ybSBjaGFuZ2VzIHdvdWxkIGJyZWFrIHRoaXMgY29ubmVjdGlvbi4gV2UgaGFkIHRvIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGQgdGhlIGZvcm0gd2l0aCB0aGlzIGluIG1pbmQuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1wb3BwaW5zIHVwcGVyY2FzZSB0ZXh0LXQtbW9iaWxlIHRleHQtWzFyZW1dIG1kOnRleHQtWzEuM3JlbV0gZm9udC1ib2xkIG1iLTInPkltcGFjdDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGVycyBjb3VsZCBzcGVuZCBsZXNzIHRpbWUgcGVyIHBhdGllbnQgc2luY2UgdGhlaXIgaW5pdGlhbCBoZWFsdGggaW5mb3JtYXRpb24gd2FzIGNvbGxlY3RlZCBpbi1hcHAgaW5zdGVhZCBvZiB2ZXJiYWxseSBpbiBtZWV0aW5ncy5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyByZWR1Y2VkIHRoZSBjb21wYW55JmFwb3M7cyBjb3N0IGZvciBlYWNoIGFwcG9pbnRtZW50LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1wb3BwaW5zIHVwcGVyY2FzZSB0ZXh0LXQtbW9iaWxlIHRleHQtWzFyZW1dIG1kOnRleHQtWzEuM3JlbV0gZm9udC1ib2xkIG1iLTInPlRlY2ggdXNlZDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hpcCB0ZXh0PSdSZWFjdCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoaXAgdGV4dD0nVHlwZXNjcmlwdCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoaXAgdGV4dD0nUmVhY3QgUXVlcnknIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGlwIHRleHQ9J0Zvcm1paycgLz5cbiAgICAgICAgICAgICAgICAgICAgPENoaXAgdGV4dD0nUmVkdXgnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGlwIHRleHQ9J1l1cCcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGFrZUZvcm1zIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2hpcCIsIkludGFrZUZvcm1zIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDIiLCJwIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXplcyIsInVsIiwibGkiLCJzcGFuIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/work/intakeForms.tsx\n"));

/***/ })

});