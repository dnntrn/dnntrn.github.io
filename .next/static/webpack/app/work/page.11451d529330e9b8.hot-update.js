"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/work/page",{

/***/ "(app-pages-browser)/./app/work/page.tsx":
/*!***************************!*\
  !*** ./app/work/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_object_without_properties */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_without_properties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy */ \"(app-pages-browser)/./app/copy.tsx\");\n/* harmony import */ var _projectPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPreview */ \"(app-pages-browser)/./app/work/projectPreview.tsx\");\n/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../motion */ \"(app-pages-browser)/./app/motion.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Work = function() {\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    var createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function(name, value) {\n        var params = new URLSearchParams(searchParams.toString());\n        params.set(name, value);\n        return params.toString();\n    }, [\n        searchParams\n    ]);\n    var selectedProject = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)().get(\"project\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 min-h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                children: !selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.section, {\n                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                    exit: \"exit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[4rem] font-brittany text-t-mobile text-center\",\n                            children: \"Work\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faStarOfLife,\n                            className: \"absolute right-2 top-2 text-t-mobile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"indicates my personal favorite projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 mt-5\",\n                            children: _copy__WEBPACK_IMPORTED_MODULE_1__.projects.map(function(_param, i) /*#__PURE__*/ {\n                                var title = _param.title, id = _param.id, rest = (0,_swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_10__._)(_param, [\n                                    \"title\",\n                                    \"id\"\n                                ]);\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                                    initial: \"hidden\",\n                                    animate: \"enter\",\n                                    transition: {\n                                        type: \"linear\",\n                                        delay: i > 1 ? .4 * Math.round((i + 1) / 2) - .4 : 0\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projectPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({\n                                        onClick: function() {\n                                            return router.push(pathname + \"?\" + createQueryString(\"project\", \"\".concat(id)));\n                                        },\n                                        title: title\n                                    }, rest), void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 27\n                                    }, _this)\n                                }, title, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 23\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                    initial: \"hidden\",\n                    animate: \"enter\",\n                    transition: {\n                        type: \"linear\",\n                        delay: .5\n                    },\n                    children: _copy__WEBPACK_IMPORTED_MODULE_1__.projectsToContentMap.get(selectedProject)\n                }, void 0, false, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Work, \"F3g+JMeT8cVpNRmOzDn4FYtBKm4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93b3JrL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW9FO0FBQ3ZCO0FBQ087QUFDSTtBQUNwQjtBQUNzQztBQUNUO0FBQ0E7QUFFakUsSUFBTVksT0FBaUI7O0lBQ3JCLElBQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixJQUFNSyxXQUFXUCw0REFBV0E7SUFDNUIsSUFBTVEsZUFBZVAsZ0VBQWVBO0lBRXBDLElBQU1RLG9CQUFvQlYsa0RBQVdBLENBQ25DLFNBQUNXLE1BQWNDO1FBQ2IsSUFBTUMsU0FBUyxJQUFJQyxnQkFBZ0JMLGFBQWFNLFFBQVE7UUFDeERGLE9BQU9HLEdBQUcsQ0FBQ0wsTUFBTUM7UUFFakIsT0FBT0MsT0FBT0UsUUFBUTtJQUN4QixHQUNBO1FBQUNOO0tBQWE7SUFFaEIsSUFBSVEsa0JBQWtCZixnRUFBZUEsR0FBR2dCLEdBQUcsQ0FBQztJQUc1QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN0QiwwREFBZUE7MEJBQ2IsQ0FBQ21CLGlDQUNFLDhEQUFDbEIsaURBQU1BLENBQUNzQixPQUFPO29CQUFDQyxVQUFVekIsNERBQXVCQTtvQkFBRTBCLE1BQUs7O3NDQUN0RCw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQXNEOzs7Ozs7c0NBQ3BFLDhEQUFDaEIsMkVBQWVBOzRCQUFDcUIsTUFBTXBCLDJFQUFZQTs0QkFBRWUsV0FBVTs7Ozs7O3NDQUMvQyw4REFBQ007c0NBQUU7Ozs7OztzQ0FJSCw4REFBQ1A7NEJBQUlDLFdBQVU7c0NBQ1oxQiwyQ0FBUUEsQ0FBQ2lDLEdBQUcsQ0FBQyxpQkFBeUJDO29DQUF0QkMsZUFBQUEsT0FBT0MsWUFBQUEsSUFBT0MsT0FBQUEsMEVBQUFBO29DQUFkRjtvQ0FBT0M7O3VDQUNwQiw4REFBQy9CLGlEQUFNQSxDQUFDb0IsR0FBRztvQ0FFVEcsVUFBVXpCLDREQUF1QkE7b0NBQ2pDbUMsU0FBUTtvQ0FDUkMsU0FBUTtvQ0FDUkMsWUFBWTt3Q0FBRUMsTUFBTTt3Q0FBVUMsT0FBT1IsSUFBSSxJQUFJLEtBQUtTLEtBQUtDLEtBQUssQ0FBQyxDQUFDVixJQUFFLEtBQUcsS0FBSSxLQUFLO29DQUFDOzhDQUUzRSw0RUFBQ2hDLHVEQUFjQSxFQUFBQSw4REFBQUE7d0NBQUMyQyxTQUFTO21EQUFPaEMsT0FBT2lDLElBQUksQ0FBQ2hDLFdBQVcsTUFBTUUsa0JBQWtCLFdBQVcsR0FBTSxPQUFIb0I7O3dDQUFRRCxPQUFPQTt1Q0FBV0U7Ozs7O21DQU5wSEY7Ozs7OzRCQU9LOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFRMUIsOERBQUMvQiwwREFBZUE7MEJBQ2JtQixpQ0FDQyw4REFBQ2xCLGlEQUFNQSxDQUFDb0IsR0FBRztvQkFDVEcsVUFBVXpCLDREQUF1QkE7b0JBQ2pDbUMsU0FBUTtvQkFDUkMsU0FBUTtvQkFDUkMsWUFBWTt3QkFBRUMsTUFBTTt3QkFBVUMsT0FBTztvQkFBRTs4QkFDdEN6Qyx1REFBb0JBLENBQUN1QixHQUFHLENBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QztHQTdETVg7O1FBQ1dILHNEQUFTQTtRQUNQRix3REFBV0E7UUFDUEMsNERBQWVBO1FBV2RBLDREQUFlQTs7O0tBZGpDSTtBQStETiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd29yay9wYWdlLnRzeD85YTcyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBQcm9qZWN0SWRzLCBwcm9qZWN0cywgcHJvamVjdHNUb0NvbnRlbnRNYXAgfSBmcm9tICcuLi9jb3B5J1xuaW1wb3J0IFByb2plY3RQcmV2aWV3IGZyb20gJy4vcHJvamVjdFByZXZpZXcnXG5pbXBvcnQgeyB1bml2ZXJzaWFsTW90aW9uVmFyaWFudCB9IGZyb20gJy4uL21vdGlvbic7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU3Rhck9mTGlmZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmNvbnN0IFdvcms6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblxuICBjb25zdCBjcmVhdGVRdWVyeVN0cmluZyA9IHVzZUNhbGxiYWNrKFxuICAgIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkpXG4gICAgICBwYXJhbXMuc2V0KG5hbWUsIHZhbHVlKVxuIFxuICAgICAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG4gICAgfSxcbiAgICBbc2VhcmNoUGFyYW1zXVxuICApXG4gIGxldCBzZWxlY3RlZFByb2plY3QgPSB1c2VTZWFyY2hQYXJhbXMoKS5nZXQoXCJwcm9qZWN0XCIpIGFzIFByb2plY3RJZHM7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBtaW4taC1bMTAwdmhdJz5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7IXNlbGVjdGVkUHJvamVjdCAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uc2VjdGlvbiB2YXJpYW50cz17dW5pdmVyc2lhbE1vdGlvblZhcmlhbnR9IGV4aXQ9XCJleGl0XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1bNHJlbV0gZm9udC1icml0dGFueSB0ZXh0LXQtbW9iaWxlIHRleHQtY2VudGVyJz5Xb3JrPC9oMT5cbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhck9mTGlmZX0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMiB0ZXh0LXQtbW9iaWxlXCIgLz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgaW5kaWNhdGVzIG15IHBlcnNvbmFsIGZhdm9yaXRlIHByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1yb3dzLW1heCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC15LTYgZ2FwLXgtMiBtdC01XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKCh7IHRpdGxlLCBpZCwgLi4ucmVzdCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17dW5pdmVyc2lhbE1vdGlvblZhcmlhbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwibGluZWFyXCIsIGRlbGF5OiBpID4gMSA/IC40ICogTWF0aC5yb3VuZCgoaSsxKS8yKSAtLjQgOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RQcmV2aWV3IG9uQ2xpY2s9eygpID0+ICByb3V0ZXIucHVzaChwYXRobmFtZSArICc/JyArIGNyZWF0ZVF1ZXJ5U3RyaW5nKCdwcm9qZWN0JywgYCR7aWR9YCkpfSB0aXRsZT17dGl0bGV9IHsuLi5yZXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5zZWN0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICBcblxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtzZWxlY3RlZFByb2plY3QgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXt1bml2ZXJzaWFsTW90aW9uVmFyaWFudH1cbiAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiwgZGVsYXk6IC41fX0+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1RvQ29udGVudE1hcC5nZXQoc2VsZWN0ZWRQcm9qZWN0KX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cblxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrIl0sIm5hbWVzIjpbInByb2plY3RzIiwicHJvamVjdHNUb0NvbnRlbnRNYXAiLCJQcm9qZWN0UHJldmlldyIsInVuaXZlcnNpYWxNb3Rpb25WYXJpYW50IiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlQ2FsbGJhY2siLCJ1c2VQYXRobmFtZSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU3Rhck9mTGlmZSIsIldvcmsiLCJyb3V0ZXIiLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsImNyZWF0ZVF1ZXJ5U3RyaW5nIiwibmFtZSIsInZhbHVlIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJzZXQiLCJzZWxlY3RlZFByb2plY3QiLCJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwidmFyaWFudHMiLCJleGl0IiwiaDEiLCJpY29uIiwicCIsIm1hcCIsImkiLCJ0aXRsZSIsImlkIiwicmVzdCIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkZWxheSIsIk1hdGgiLCJyb3VuZCIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/work/page.tsx\n"));

/***/ })

});