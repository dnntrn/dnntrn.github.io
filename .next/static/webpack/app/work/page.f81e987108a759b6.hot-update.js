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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_object_without_properties */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_without_properties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy */ \"(app-pages-browser)/./app/copy.tsx\");\n/* harmony import */ var _projectPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPreview */ \"(app-pages-browser)/./app/work/projectPreview.tsx\");\n/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../motion */ \"(app-pages-browser)/./app/motion.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Work = function() {\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    // const [selectedProject, setSelectedProject] = useState<React.ReactNode>();\n    var createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function(name, value) {\n        var params = new URLSearchParams(searchParams.toString());\n        params.set(name, value);\n        return params.toString();\n    }, [\n        searchParams\n    ]);\n    var selectedProject = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)().get(\"project\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10 min-h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: !selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.section, {\n                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                    exit: \"exit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[4rem] font-brittany text-t-mobile text-center\",\n                            children: \"Work\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 mt-5\",\n                            children: _copy__WEBPACK_IMPORTED_MODULE_1__.projects.map(function(_param, i) /*#__PURE__*/ {\n                                var title = _param.title, id = _param.id, rest = (0,_swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_8__._)(_param, [\n                                    \"title\",\n                                    \"id\"\n                                ]);\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                                    initial: \"hidden\",\n                                    animate: \"enter\",\n                                    transition: {\n                                        type: \"linear\",\n                                        delay: i > 1 ? .4 * Math.round((i + 1) / 2) - .4 : 0\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_projectPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__._)({\n                                        onClick: function() {\n                                            return router.push(pathname + \"?\" + createQueryString(\"project\", \"\".concat(id)));\n                                        },\n                                        title: title\n                                    }, rest), void 0, false, {\n                                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 27\n                                    }, _this)\n                                }, title, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 23\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {\n                children: selectedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    variants: _motion__WEBPACK_IMPORTED_MODULE_3__.universialMotionVariant,\n                    initial: \"hidden\",\n                    animate: \"enter\",\n                    transition: {\n                        type: \"linear\",\n                        delay: .5\n                    },\n                    children: _copy__WEBPACK_IMPORTED_MODULE_1__.projectsToContentMap.get(selectedProject)\n                }, void 0, false, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/work/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Work, \"F3g+JMeT8cVpNRmOzDn4FYtBKm4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93b3JrL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVvRTtBQUN2QjtBQUNPO0FBQ2U7QUFDckI7QUFDNEI7QUFFMUUsSUFBTVUsT0FBaUI7O0lBQ3JCLElBQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixJQUFNRyxXQUFXTCw0REFBV0E7SUFDNUIsSUFBTU0sZUFBZUwsZ0VBQWVBO0lBQ3BDLDZFQUE2RTtJQUU3RSxJQUFNTSxvQkFBb0JSLGtEQUFXQSxDQUNuQyxTQUFDUyxNQUFjQztRQUNiLElBQU1DLFNBQVMsSUFBSUMsZ0JBQWdCTCxhQUFhTSxRQUFRO1FBQ3hERixPQUFPRyxHQUFHLENBQUNMLE1BQU1DO1FBRWpCLE9BQU9DLE9BQU9FLFFBQVE7SUFDeEIsR0FDQTtRQUFDTjtLQUFhO0lBRWhCLElBQUlRLGtCQUFrQmIsZ0VBQWVBLEdBQUdjLEdBQUcsQ0FBQztJQUc1QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNwQiwwREFBZUE7MEJBQ2IsQ0FBQ2lCLGlDQUNFLDhEQUFDaEIsaURBQU1BLENBQUNvQixPQUFPO29CQUFDQyxVQUFVdkIsNERBQXVCQTtvQkFBRXdCLE1BQUs7O3NDQUN0RCw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQXNEOzs7Ozs7c0NBQ3BFLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWnhCLDJDQUFRQSxDQUFDNkIsR0FBRyxDQUFDLGlCQUF5QkM7b0NBQXRCQyxlQUFBQSxPQUFPQyxZQUFBQSxJQUFPQyxPQUFBQSx5RUFBQUE7b0NBQWRGO29DQUFPQzs7dUNBQ3BCLDhEQUFDM0IsaURBQU1BLENBQUNrQixHQUFHO29DQUVURyxVQUFVdkIsNERBQXVCQTtvQ0FDakMrQixTQUFRO29DQUNSQyxTQUFRO29DQUNSQyxZQUFZO3dDQUFFQyxNQUFNO3dDQUFVQyxPQUFPUixJQUFJLElBQUksS0FBS1MsS0FBS0MsS0FBSyxDQUFDLENBQUNWLElBQUUsS0FBRyxLQUFJLEtBQUs7b0NBQUM7OENBRTNFLDRFQUFDNUIsdURBQWNBLEVBQUFBLDZEQUFBQTt3Q0FBQ3VDLFNBQVM7bURBQU85QixPQUFPK0IsSUFBSSxDQUFDOUIsV0FBVyxNQUFNRSxrQkFBa0IsV0FBVyxHQUFNLE9BQUhrQjs7d0NBQVFELE9BQU9BO3VDQUFXRTs7Ozs7bUNBTnBIRjs7Ozs7NEJBT0s7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVExQiw4REFBQzNCLDBEQUFlQTswQkFDYmlCLGlDQUNDLDhEQUFDaEIsaURBQU1BLENBQUNrQixHQUFHO29CQUNURyxVQUFVdkIsNERBQXVCQTtvQkFDakMrQixTQUFRO29CQUNSQyxTQUFRO29CQUNSQyxZQUFZO3dCQUFFQyxNQUFNO3dCQUFVQyxPQUFPO29CQUFFOzhCQUN0Q3JDLHVEQUFvQkEsQ0FBQ3FCLEdBQUcsQ0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhDO0dBekRNWDs7UUFDV0Qsc0RBQVNBO1FBQ1BGLHdEQUFXQTtRQUNQQyw0REFBZUE7UUFZZEEsNERBQWVBOzs7S0FmakNFO0FBMkROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93b3JrL3BhZ2UudHN4PzlhNzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFByb2plY3RJZHMsIHByb2plY3RzLCBwcm9qZWN0c1RvQ29udGVudE1hcCB9IGZyb20gJy4uL2NvcHknXG5pbXBvcnQgUHJvamVjdFByZXZpZXcgZnJvbSAnLi9wcm9qZWN0UHJldmlldydcbmltcG9ydCB7IHVuaXZlcnNpYWxNb3Rpb25WYXJpYW50IH0gZnJvbSAnLi4vbW90aW9uJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uLCB1c2VTY3JvbGwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmNvbnN0IFdvcms6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlPFJlYWN0LlJlYWN0Tm9kZT4oKTtcblxuICBjb25zdCBjcmVhdGVRdWVyeVN0cmluZyA9IHVzZUNhbGxiYWNrKFxuICAgIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkpXG4gICAgICBwYXJhbXMuc2V0KG5hbWUsIHZhbHVlKVxuIFxuICAgICAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG4gICAgfSxcbiAgICBbc2VhcmNoUGFyYW1zXVxuICApXG4gIGxldCBzZWxlY3RlZFByb2plY3QgPSB1c2VTZWFyY2hQYXJhbXMoKS5nZXQoXCJwcm9qZWN0XCIpIGFzIFByb2plY3RJZHM7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBtaW4taC1bMTAwdmhdJz5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7IXNlbGVjdGVkUHJvamVjdCAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uc2VjdGlvbiB2YXJpYW50cz17dW5pdmVyc2lhbE1vdGlvblZhcmlhbnR9IGV4aXQ9XCJleGl0XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1bNHJlbV0gZm9udC1icml0dGFueSB0ZXh0LXQtbW9iaWxlIHRleHQtY2VudGVyJz5Xb3JrPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tcm93cy1tYXggZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAteS02IGdhcC14LTIgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoeyB0aXRsZSwgaWQsIC4uLnJlc3QgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3VuaXZlcnNpYWxNb3Rpb25WYXJpYW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcImxpbmVhclwiLCBkZWxheTogaSA+IDEgPyAuNCAqIE1hdGgucm91bmQoKGkrMSkvMikgLS40IDogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0UHJldmlldyBvbkNsaWNrPXsoKSA9PiAgcm91dGVyLnB1c2gocGF0aG5hbWUgKyAnPycgKyBjcmVhdGVRdWVyeVN0cmluZygncHJvamVjdCcsIGAke2lkfWApKX0gdGl0bGU9e3RpdGxlfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uc2VjdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgXG5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICB7c2VsZWN0ZWRQcm9qZWN0ICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICB2YXJpYW50cz17dW5pdmVyc2lhbE1vdGlvblZhcmlhbnR9XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwibGluZWFyXCIsIGRlbGF5OiAuNX19PlxuICAgICAgICAgICAgICB7cHJvamVjdHNUb0NvbnRlbnRNYXAuZ2V0KHNlbGVjdGVkUHJvamVjdCl9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yayJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInByb2plY3RzVG9Db250ZW50TWFwIiwiUHJvamVjdFByZXZpZXciLCJ1bml2ZXJzaWFsTW90aW9uVmFyaWFudCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZUNhbGxiYWNrIiwidXNlUGF0aG5hbWUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJXb3JrIiwicm91dGVyIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJjcmVhdGVRdWVyeVN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwic2V0Iiwic2VsZWN0ZWRQcm9qZWN0IiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInZhcmlhbnRzIiwiZXhpdCIsImgxIiwibWFwIiwiaSIsInRpdGxlIiwiaWQiLCJyZXN0IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRlbGF5IiwiTWF0aCIsInJvdW5kIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/work/page.tsx\n"));

/***/ })

});