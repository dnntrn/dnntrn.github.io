"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/role.tsx":
/*!*********************************!*\
  !*** ./app/components/role.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chip */ \"(app-pages-browser)/./app/components/chip.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Role = function(param) {\n    var isCondensed = param.isCondensed, title = param.title, company = param.company, companyWebsite = param.companyWebsite, location = param.location, date = param.date, companyDescription = param.companyDescription, keyTechnologies = param.keyTechnologies, responsibilities = param.responsibilities;\n    if (isCondensed) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full resume-description\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    width: 10,\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLocationDot,\n                                    className: \"inline mr-2 my-auto\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, _this),\n                                location\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, _this),\n                        companyWebsite && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: companyWebsite,\n                                target: \"_blank\",\n                                children: companyWebsite\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-3 list-disc ml-10\",\n                    children: responsibilities.map(function(r) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-2\",\n                            children: r\n                        }, r, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap gap-2 mt-6\",\n                    children: keyTechnologies && keyTechnologies.map(function(tech) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chip__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: tech\n                        }, tech, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full resume-description\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"resume-role-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"resume-role-company\",\n                                        children: companyWebsite ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: companyWebsite,\n                                            target: \"_blank\",\n                                            children: company\n                                        }, void 0, false, {\n                                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: company\n                                        }, void 0, false)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, _this),\n                                    \" - \",\n                                    location\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: date\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, _this),\n            companyDescription && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 mb-1\",\n                children: companyDescription\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                lineNumber: 65,\n                columnNumber: 36\n            }, _this),\n            keyTechnologies && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Key Technologies: \",\n                    keyTechnologies.join(\", \")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                lineNumber: 66,\n                columnNumber: 33\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-3 list-disc ml-6 md:ml-10\",\n                children: responsibilities.map(function(r) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"mb-2\",\n                        children: r\n                    }, r, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/role.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, _this);\n};\n_c = Role;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Role);\nvar _c;\n$RefreshReg$(_c, \"Role\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3JvbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDTTtBQUM3QztBQWMxQixJQUFNRyxPQUFPO1FBQUdDLG9CQUFBQSxhQUFhQyxjQUFBQSxPQUFPQyxnQkFBQUEsU0FBU0MsdUJBQUFBLGdCQUFnQkMsaUJBQUFBLFVBQVVDLGFBQUFBLE1BQU1DLDJCQUFBQSxvQkFBb0JDLHdCQUFBQSxpQkFBaUJDLHlCQUFBQTtJQUM5RyxJQUFJUixhQUFhO1FBQ2IscUJBQ0ksOERBQUNTO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2QsMkVBQWVBO29DQUFDZSxPQUFPO29DQUFJQyxNQUFNZiw0RUFBYUE7b0NBQUVhLFdBQVU7Ozs7OztnQ0FDMUROOzs7Ozs7O3dCQUVKRCxnQ0FDRyw4REFBQ007c0NBQ0csNEVBQUNJO2dDQUFFQyxNQUFNWDtnQ0FBZ0JZLFFBQU87MENBQVVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLdEQsOERBQUNhO29CQUFHTixXQUFVOzhCQUNURixpQkFBaUJTLEdBQUcsQ0FBQyxTQUFDQzs2Q0FDbkIsOERBQUNDOzRCQUFHVCxXQUFVO3NDQUFnQlE7MkJBQUpBOzs7Ozs7Ozs7Ozs4QkFHbEMsOERBQUNUO29CQUFJQyxXQUFVOzhCQUNWSCxtQkFDR0EsZ0JBQWdCVSxHQUFHLENBQUMsU0FBQ0c7NkNBQ2pCLDhEQUFDdEIsNkNBQUlBOzRCQUFZdUIsTUFBTUQ7MkJBQVpBOzs7Ozs7Ozs7Ozs7Ozs7OztJQU1uQztJQUNBLHFCQUNJLDhEQUFDWDtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDs7MENBQ0csOERBQUNBO2dDQUFJQyxXQUFVOzBDQUFxQlQ7Ozs7OzswQ0FHcEMsOERBQUNROztrREFDRyw4REFBQ2E7d0NBQUtaLFdBQVU7a0RBQ1hQLCtCQUNHLDhEQUFDVTs0Q0FBRUMsTUFBTVg7NENBQWdCWSxRQUFPO3NEQUFVYjs7Ozs7a0VBQzFDO3NEQUFHQTs7Ozs7OztvQ0FFSjtvQ0FBSUU7Ozs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDSztrQ0FBS0o7Ozs7Ozs7Ozs7OztZQUVUQyxvQ0FBc0IsOERBQUNpQjtnQkFBRWIsV0FBVTswQkFBYUo7Ozs7OztZQUNoREMsaUNBQW1CLDhEQUFDZ0I7O29CQUFFO29CQUFtQmhCLGdCQUFnQmlCLElBQUksQ0FBQzs7Ozs7OzswQkFDL0QsOERBQUNSO2dCQUFHTixXQUFVOzBCQUNURixpQkFBaUJTLEdBQUcsQ0FBQyxTQUFDQzt5Q0FDbkIsOERBQUNDO3dCQUFHVCxXQUFVO2tDQUFnQlE7dUJBQUpBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztLQXpETW5CO0FBMkROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3JvbGUudHN4PzY1MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFMLCBmYUxvY2F0aW9uRG90IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IENoaXAgZnJvbSBcIi4vY2hpcFwiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGlzQ29uZGVuc2VkPzogYm9vbGVhbjtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBjb21wYW55Pzogc3RyaW5nO1xuICAgIGNvbXBhbnlXZWJzaXRlPzogc3RyaW5nO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgZGF0ZT86IHN0cmluZztcbiAgICBjb21wYW55RGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAga2V5VGVjaG5vbG9naWVzPzogc3RyaW5nW107XG4gICAgcmVzcG9uc2liaWxpdGllczogc3RyaW5nW107XG59XG5cbmNvbnN0IFJvbGUgPSAoeyBpc0NvbmRlbnNlZCwgdGl0bGUsIGNvbXBhbnksIGNvbXBhbnlXZWJzaXRlLCBsb2NhdGlvbiwgZGF0ZSwgY29tcGFueURlc2NyaXB0aW9uLCBrZXlUZWNobm9sb2dpZXMsIHJlc3BvbnNpYmlsaXRpZXMgfTogUHJvcHMpID0+IHtcbiAgICBpZiAoaXNDb25kZW5zZWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlc3VtZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gd2lkdGg9ezEwfSBpY29uPXtmYUxvY2F0aW9uRG90fSBjbGFzc05hbWU9XCJpbmxpbmUgbXItMiBteS1hdXRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbn0gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFueVdlYnNpdGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb21wYW55V2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbXBhbnlXZWJzaXRlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0zIGxpc3QtZGlzYyBtbC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2liaWxpdGllcy5tYXAoKHIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCIga2V5PXtyfT57cn08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgbXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICB7a2V5VGVjaG5vbG9naWVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVRlY2hub2xvZ2llcy5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcCBrZXk9e3RlY2h9IHRleHQ9e3RlY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVzdW1lLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLXJvbGUtdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlc3VtZS1yb2xlLWNvbXBhbnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGFueVdlYnNpdGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb21wYW55V2Vic2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbXBhbnl9PC9hPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+e2NvbXBhbnl9PC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAtIHtsb2NhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntkYXRlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y29tcGFueURlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT1cIm10LTIgbWItMVwiPntjb21wYW55RGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgIHtrZXlUZWNobm9sb2dpZXMgJiYgPHA+S2V5IFRlY2hub2xvZ2llczoge2tleVRlY2hub2xvZ2llcy5qb2luKFwiLCBcIil9PC9wPn1cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC0zIGxpc3QtZGlzYyBtbC02IG1kOm1sLTEwXCI+XG4gICAgICAgICAgICAgICAge3Jlc3BvbnNpYmlsaXRpZXMubWFwKChyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi0yXCIga2V5PXtyfT57cn08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb2xlIl0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbiIsImZhTG9jYXRpb25Eb3QiLCJDaGlwIiwiUm9sZSIsImlzQ29uZGVuc2VkIiwidGl0bGUiLCJjb21wYW55IiwiY29tcGFueVdlYnNpdGUiLCJsb2NhdGlvbiIsImRhdGUiLCJjb21wYW55RGVzY3JpcHRpb24iLCJrZXlUZWNobm9sb2dpZXMiLCJyZXNwb25zaWJpbGl0aWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJpY29uIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJ1bCIsIm1hcCIsInIiLCJsaSIsInRlY2giLCJ0ZXh0Iiwic3BhbiIsInAiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/role.tsx\n"));

/***/ })

});