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

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"31a8ad0ae100\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/MmExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjMxYThhZDBhZTEwMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/navbar.tsx":
/*!************************!*\
  !*** ./app/navbar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-client)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var itemVariants = {\n        open: {\n            x: \"-50%\",\n            y: \"-50%\",\n            width: \"1000px\",\n            height: \"1000px\",\n            backgroundColor: \"#C45B52\"\n        },\n        closed: {\n            x: \"20\",\n            y: \"20\",\n            width: \"100px\",\n            height: \"100px\",\n            transition: {\n                duration: 0.2\n            }\n        }\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showNav = _useState[0], setShowNav = _useState[1];\n    var handleClick = function() {\n        setShowNav(function(prevState) {\n            return !prevState;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n            whileHover: {\n                scale: 1.1\n            },\n            whileTap: {\n                scale: 0.9\n            },\n            variants: itemVariants,\n            animate: showNav ? \"open\" : \"closed\",\n            className: \"rounded-[50%] fixed bg-black\",\n            onClick: handleClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    color: \"white\",\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBars,\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(!showNav ? \"z-10 fixed left-[13px] top-[6px]\" : \"z-10 fixed left-[50%] top-[50%]\")\n                }, void 0, false, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, _this),\n                showNav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \" gap-x-6 text-white ml-[30%] mt-[40%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"About Us\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Contacts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"a3zpZv3Q/5BAXsC/YOXmjosS+lQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNpQztBQUNnQztBQUNOO0FBQ1g7QUFDcEI7QUFFNUIsSUFBTUssU0FBUzs7SUFDWCxJQUFNQyxlQUF5QjtRQUMzQkMsTUFBTTtZQUNGQyxHQUFHO1lBQ0hDLEdBQUc7WUFDSEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGlCQUFpQjtRQUNyQjtRQUNBQyxRQUFRO1lBQ0pMLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkcsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1FBQ2hDO0lBQ0Y7SUFFRixJQUE4QmYsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQWhDZ0IsVUFBdUJoQixjQUFkaUIsYUFBY2pCO0lBQzlCLElBQU1rQixjQUFjO1FBQ2hCRCxXQUFXLFNBQUNFO21CQUFjLENBQUNBOztJQUMvQjtJQUNBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ2pCLGlEQUFNQSxDQUFDa0IsTUFBTTtZQUNOQyxZQUFZO2dCQUFFQyxPQUFPO1lBQUk7WUFDekJDLFVBQVU7Z0JBQUVELE9BQU87WUFBSTtZQUN2QkUsVUFBVW5CO1lBQ1ZvQixTQUFTVixVQUFVLFNBQVM7WUFDNUJXLFdBQVU7WUFDVkMsU0FBU1Y7OzhCQUVULDhEQUFDakIsMkVBQWVBO29CQUFDNEIsT0FBTTtvQkFBUUMsTUFBTzVCLHFFQUFNQTtvQkFBR3lCLFdBQVd2QiwwQ0FBSUEsQ0FBQyxDQUFDWSxVQUFVLHFDQUFxQzs7Ozs7O2dCQUM5R0EseUJBQ0csOERBQUNlO29CQUFHSixXQUFVOztzQ0FDViw4REFBQ0s7c0NBQ0csNEVBQUNDOzBDQUFFOzs7Ozs7Ozs7OztzQ0FFUCw4REFBQ0Q7c0NBQ0csNEVBQUNDOzBDQUFFOzs7Ozs7Ozs7OztzQ0FFUCw4REFBQ0Q7c0NBQ0csNEVBQUNDOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5DO0dBbERNNUI7S0FBQUE7QUFvRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25hdmJhci50c3g/NWY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiwgVmFyaWFudHMgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgeyBjbHN4IH0gZnJvbSAnY2xzeCc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtVmFyaWFudHM6IFZhcmlhbnRzID0ge1xuICAgICAgICBvcGVuOiB7XG4gICAgICAgICAgICB4OiBcIi01MCVcIixcbiAgICAgICAgICAgIHk6IFwiLTUwJVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwMHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwMHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQzQ1QjUyJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZWQ6IHsgXG4gICAgICAgICAgICB4OiBcIjIwXCIsXG4gICAgICAgICAgICB5OiBcIjIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjIgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgY29uc3QgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRTaG93TmF2KChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2l0ZW1WYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17c2hvd05hdiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1bNTAlXSBmaXhlZCBiZy1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjb2xvcj1cIndoaXRlXCIgaWNvbj17IGZhQmFycyB9IGNsYXNzTmFtZT17Y2xzeCghc2hvd05hdiA/IFwiei0xMCBmaXhlZCBsZWZ0LVsxM3B4XSB0b3AtWzZweF1cIiA6IFwiei0xMCBmaXhlZCBsZWZ0LVs1MCVdIHRvcC1bNTAlXVwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dOYXYgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIiBnYXAteC02IHRleHQtd2hpdGUgbWwtWzMwJV0gbXQtWzQwJV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFib3V0IFVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZXJ2aWNlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGFjdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICl9ICAgXG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUJhcnMiLCJtb3Rpb24iLCJjbHN4IiwiTmF2YmFyIiwiaXRlbVZhcmlhbnRzIiwib3BlbiIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbG9zZWQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzaG93TmF2Iiwic2V0U2hvd05hdiIsImhhbmRsZUNsaWNrIiwicHJldlN0YXRlIiwibmF2IiwiYnV0dG9uIiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJ2YXJpYW50cyIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY29sb3IiLCJpY29uIiwidWwiLCJsaSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/navbar.tsx\n"));

/***/ })

});