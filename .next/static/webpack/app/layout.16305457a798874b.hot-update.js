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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"37dd524b209e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzNlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzN2RkNTI0YjIwOWVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar.tsx":
/*!***********************************!*\
  !*** ./app/components/navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)() || \"/\";\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(pathname), 2), hoveredPath = _useState[0], setHoveredPath = _useState[1];\n    var navItems = [\n        {\n            path: \"/\",\n            name: \"About\"\n        },\n        {\n            path: \"/work\",\n            name: \"Work\"\n        },\n        {\n            path: \"/resume\",\n            name: \"Resume\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-90 p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 -ml-[140px] top-4 z-[100] bg-white-transparent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex saturate-150 justify-between w-full list-none\",\n                children: navItems.map(function(param) {\n                    var name = param.name, path = param.path;\n                    var isActive = path === pathname;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"py-1 px-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in\",\n                            href: path,\n                            onMouseOver: function() {\n                                return setHoveredPath(path);\n                            },\n                            onMouseLeave: function() {\n                                return setHoveredPath(pathname);\n                            },\n                            children: [\n                                name,\n                                path === hoveredPath && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"absolute bottom-0 left-0 h-full rounded-4xl bg-white-transparent-3 rounded-md -z-10\",\n                                    layoutId: \"navbar\",\n                                    \"aria-hidden\": \"true\",\n                                    style: {\n                                        width: \"100%\"\n                                    },\n                                    transition: {\n                                        // type: \"spring\",\n                                        // bounce: 0.25,\n                                        stiffness: 130,\n                                        damping: 9,\n                                        duration: 0.3\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 41\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 33\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 29\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/components/navbar.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"enbZRcEd+8lKfP46c76sDL2ppgA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDaUI7QUFDUDtBQUNOO0FBRWpDLElBQU1JLFNBQVM7O0lBQ1gsSUFBSUMsV0FBV0osNERBQVdBLE1BQU07SUFDaEMsSUFBc0NFLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ0UsZUFBeENDLGNBQStCSCxjQUFsQkksaUJBQWtCSjtJQUN0QyxJQUFNSyxXQUFXO1FBQ2I7WUFDSUMsTUFBTTtZQUNOQyxNQUFNO1FBQ1Y7UUFDQTtZQUNJRCxNQUFNO1lBQ05DLE1BQU07UUFDVjtRQUNBO1lBQ0lELE1BQU07WUFDTkMsTUFBTTtRQUNWO0tBQ0g7SUFDRCxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNDO2dCQUFHRCxXQUFVOzBCQUNUTCxTQUFTTyxHQUFHLENBQUM7d0JBQUVMLGFBQUFBLE1BQU1ELGFBQUFBO29CQUNsQixJQUFNTyxXQUFXUCxTQUFTSjtvQkFDMUIscUJBQ0ksOERBQUNZO3dCQUFHSixXQUFVO2tDQUNWLDRFQUFDYixrREFBSUE7NEJBQ0RhLFdBQVk7NEJBQ1pLLE1BQU1UOzRCQUNOVSxhQUFhO3VDQUFNWixlQUFlRTs7NEJBQ2xDVyxjQUFjO3VDQUFNYixlQUFlRjs7O2dDQUM5Qks7Z0NBQ0FELFNBQVNILDZCQUNWLDhEQUFDSixpREFBTUEsQ0FBQ1UsR0FBRztvQ0FDUEMsV0FBVTtvQ0FDVlEsVUFBUztvQ0FDVEMsZUFBWTtvQ0FDWkMsT0FBTzt3Q0FDSEMsT0FBTztvQ0FDWDtvQ0FDQUMsWUFBWTt3Q0FDUixrQkFBa0I7d0NBQ2xCLGdCQUFnQjt3Q0FDaEJDLFdBQVc7d0NBQ1hDLFNBQVM7d0NBQ1RDLFVBQVU7b0NBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU14Qjs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtHQTFETXhCOztRQUNhSCx3REFBV0E7OztLQUR4Qkc7QUE0RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbmF2YmFyLnRzeD84OTZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGxldCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCkgfHwgXCIvXCI7XG4gICAgY29uc3QgW2hvdmVyZWRQYXRoLCBzZXRIb3ZlcmVkUGF0aF0gPSB1c2VTdGF0ZShwYXRobmFtZSk7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICAgICAgbmFtZTogXCJBYm91dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi93b3JrXCIsXG4gICAgICAgICAgICBuYW1lOiBcIldvcmtcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIvcmVzdW1lXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlJlc3VtZVwiLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05MCBwLVsxMHB4XSBmb250LXJvYm90byBmb250LVsxMDBdIHRleHQtYmxhY2sgcm91bmRlZC00eGwgbWItMTIgZml4ZWQgbGVmdC0xLzIgLW1sLVsxNDBweF0gdG9wLTQgei1bMTAwXSBiZy13aGl0ZS10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNhdHVyYXRlLTE1MCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKCh7bmFtZSwgcGF0aH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gcGF0aCA9PT0gcGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweS0xIHB4LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGxnOnRleHQtYmFzZSByZWxhdGl2ZSBuby11bmRlcmxpbmUgZHVyYXRpb24tMzAwIGVhc2UtaW5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRIb3ZlcmVkUGF0aChwYXRoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZFBhdGgocGF0aG5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aCA9PT0gaG92ZXJlZFBhdGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLWZ1bGwgcm91bmRlZC00eGwgYmctd2hpdGUtdHJhbnNwYXJlbnQtMyByb3VuZGVkLW1kIC16LTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9XCJuYXZiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm91bmNlOiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAxMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG5cblxuXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwibW90aW9uIiwidXNlU3RhdGUiLCJOYXZiYXIiLCJwYXRobmFtZSIsImhvdmVyZWRQYXRoIiwic2V0SG92ZXJlZFBhdGgiLCJuYXZJdGVtcyIsInBhdGgiLCJuYW1lIiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJpc0FjdGl2ZSIsImxpIiwiaHJlZiIsIm9uTW91c2VPdmVyIiwib25Nb3VzZUxlYXZlIiwibGF5b3V0SWQiLCJhcmlhLWhpZGRlbiIsInN0eWxlIiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar.tsx\n"));

/***/ })

});