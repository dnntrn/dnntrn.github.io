"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"539f94d7c5f2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzNlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MzlmOTRkN2M1ZjJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Navbar = function() {\n    _s();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)() || \"/\";\n    var navItems = [\n        {\n            path: \"/\",\n            name: \"About\"\n        },\n        {\n            path: \"/work\",\n            name: \"Work\"\n        },\n        {\n            path: \"/resume\",\n            name: \"Resume\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"navContainer w-90 p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 -ml-[140px] top-4 z-[100] bg-transparent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex saturate-150 justify-between w-full list-none\",\n                children: navItems.map(function(param) {\n                    var name = param.name, path = param.path;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"py-1 px-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in\",\n                            href: path,\n                            children: [\n                                name,\n                                path === pathname && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                    className: \"absolute bottom-0 left-0 h-full rounded-4xl bg-white-transparent-3 -z-10\",\n                                    layoutId: \"navbar\",\n                                    \"aria-hidden\": \"true\",\n                                    style: {\n                                        width: \"100%\"\n                                    },\n                                    transition: {\n                                        bounce: 0.25,\n                                        stiffness: 130,\n                                        damping: 9,\n                                        duration: 0.4\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 45\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 33\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"wVXOWZKWdId76kQQO0KX6Oz3JDA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUNpQjtBQUNQO0FBR3ZDLElBQU1HLFNBQVM7O0lBQ1gsSUFBSUMsV0FBV0gsNERBQVdBLE1BQU07SUFDaEMsSUFBTUksV0FBVztRQUNiO1lBQ0lDLE1BQU07WUFDTkMsTUFBTTtRQUNWO1FBQ0E7WUFDSUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1Y7UUFDQTtZQUNJRCxNQUFNO1lBQ05DLE1BQU07UUFDVjtLQUNIO0lBQ0QscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFBR0QsV0FBVTswQkFDVEwsU0FBU08sR0FBRyxDQUFDO3dCQUFFTCxhQUFBQSxNQUFNRCxhQUFBQTtvQkFDbEIscUJBQ0ksOERBQUNPO3dCQUFHSCxXQUFVO2tDQUNWLDRFQUFDVixrREFBSUE7NEJBQ0RVLFdBQVk7NEJBQ1pJLE1BQU1SOztnQ0FDREM7Z0NBQ0FELFNBQVNGLDBCQUNOLDhEQUFDRixpREFBTUEsQ0FBQ08sR0FBRztvQ0FDUEMsV0FBVTtvQ0FDVkssVUFBUztvQ0FDVEMsZUFBWTtvQ0FDWkMsT0FBTzt3Q0FDSEMsT0FBTztvQ0FDWDtvQ0FDQUMsWUFBWTt3Q0FDUkMsUUFBUTt3Q0FDUkMsV0FBVzt3Q0FDWEMsU0FBUzt3Q0FDVEMsVUFBVTtvQ0FDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTTVCOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0dBckRNcEI7O1FBQ2FGLHdEQUFXQTs7O0tBRHhCRTtBQXVETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9uYXZiYXIudHN4Pzg5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKSB8fCBcIi9cIjtcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkFib3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL3dvcmtcIixcbiAgICAgICAgICAgIG5hbWU6IFwiV29ya1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9yZXN1bWVcIixcbiAgICAgICAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXIgdy05MCBwLVsxMHB4XSBmb250LXJvYm90byBmb250LVsxMDBdIHRleHQtYmxhY2sgcm91bmRlZC00eGwgbWItMTIgZml4ZWQgbGVmdC0xLzIgLW1sLVsxNDBweF0gdG9wLTQgei1bMTAwXSBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNhdHVyYXRlLTE1MCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKCh7bmFtZSwgcGF0aH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB5LTEgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLW1kIHRleHQtc20gbGc6dGV4dC1iYXNlIHJlbGF0aXZlIG5vLXVuZGVybGluZSBkdXJhdGlvbi0zMDAgZWFzZS1pbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aCA9PT0gcGF0aG5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIGgtZnVsbCByb3VuZGVkLTR4bCBiZy13aGl0ZS10cmFuc3BhcmVudC0zIC16LTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPVwibmF2YmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwibW90aW9uIiwiTmF2YmFyIiwicGF0aG5hbWUiLCJuYXZJdGVtcyIsInBhdGgiLCJuYW1lIiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJsaSIsImhyZWYiLCJsYXlvdXRJZCIsImFyaWEtaGlkZGVuIiwic3R5bGUiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJib3VuY2UiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});