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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1746d0275fa2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/MmExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE3NDZkMDI3NWZhMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./app/navbar.tsx":
/*!************************!*\
  !*** ./app/navbar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var itemVariants = {\n        open: {\n            x: \"-15%\",\n            y: \"-15%\",\n            width: \"500px\",\n            height: \"500px\",\n            transition: {\n                type: \"spring\",\n                stiffness: 300,\n                damping: 24\n            }\n        },\n        closed: {\n            width: \"40px\",\n            height: \"40px\",\n            transition: {\n                duration: 0.2\n            }\n        }\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showNav = _useState[0], setShowNav = _useState[1];\n    var handleClick = function() {\n        setShowNav(function(prevState) {\n            return !prevState;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n            whileHover: {\n                scale: 1.1\n            },\n            whileTap: {\n                scale: 0.9\n            },\n            animate: showNav ? \"open\" : \"closed\",\n            onClick: handleClick,\n            className: \"rounded-[50%] w-10 h-10 fixed bg-white z-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                whileHover: {\n                    scale: 1.1\n                },\n                whileTap: {\n                    scale: 0.9\n                },\n                variants: itemVariants,\n                animate: showNav ? \"open\" : \"closed\",\n                className: \"rounded-[50%] bg-black z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        color: \"white\",\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBars,\n                        className: \"m-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, _this),\n                    showNav && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \" gap-x-6 text-white \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Contacts\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/navbar.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(Navbar, \"a3zpZv3Q/5BAXsC/YOXmjosS+lQ=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2dDO0FBQ047QUFDWDtBQUVoRCxJQUFNSSxTQUFTOztJQUNYLElBQU1DLGVBQXlCO1FBQzNCQyxNQUFNO1lBQ0ZDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsWUFBWTtnQkFBRUMsTUFBTTtnQkFBVUMsV0FBVztnQkFBS0MsU0FBUztZQUFHO1FBQzlEO1FBQ0FDLFFBQVE7WUFDSk4sT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7Z0JBQUVLLFVBQVU7WUFBSTtRQUNoQztJQUNGO0lBRUYsSUFBOEJoQixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBaENpQixVQUF1QmpCLGNBQWRrQixhQUFjbEI7SUFDOUIsSUFBTW1CLGNBQWM7UUFDaEJELFdBQVcsU0FBQ0U7bUJBQWMsQ0FBQ0E7O0lBQy9CO0lBQ0EscUJBQ0ksOERBQUNDO2tCQUVHLDRFQUFDbEIsaURBQU1BLENBQUNtQixNQUFNO1lBQ1ZDLFlBQVk7Z0JBQUVDLE9BQU87WUFBSTtZQUN6QkMsVUFBVTtnQkFBRUQsT0FBTztZQUFJO1lBQ3ZCRSxTQUFTVCxVQUFVLFNBQVM7WUFDNUJVLFNBQVNSO1lBQ1RTLFdBQVU7c0JBRVYsNEVBQUN6QixpREFBTUEsQ0FBQzBCLEdBQUc7Z0JBQ1BOLFlBQVk7b0JBQUVDLE9BQU87Z0JBQUk7Z0JBQ3pCQyxVQUFVO29CQUFFRCxPQUFPO2dCQUFJO2dCQUN2Qk0sVUFBVXpCO2dCQUNWcUIsU0FBU1QsVUFBVSxTQUFTO2dCQUM1QlcsV0FBVTs7a0NBRVYsOERBQUMzQiwyRUFBZUE7d0JBQUM4QixPQUFNO3dCQUFRQyxNQUFPOUIscUVBQU1BO3dCQUFHMEIsV0FBVTs7Ozs7O29CQUN4RFgseUJBQ0csOERBQUNnQjt3QkFBR0wsV0FBVTs7MENBQ2QsOERBQUNNOzBDQUNHLDRFQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7MENBRVAsOERBQUNEOzBDQUNHLDRFQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7MENBRVAsOERBQUNEOzBDQUNHLDRFQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVS9CO0dBekRNL0I7S0FBQUE7QUEyRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL25hdmJhci50c3g/NWY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiwgVmFyaWFudHMgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtVmFyaWFudHM6IFZhcmlhbnRzID0ge1xuICAgICAgICBvcGVuOiB7XG4gICAgICAgICAgICB4OiBcIi0xNSVcIixcbiAgICAgICAgICAgIHk6IFwiLTE1JVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDMwMCwgZGFtcGluZzogMjQgfVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZWQ6IHsgXG4gICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFxuICAgIGNvbnN0IFtzaG93TmF2LCBzZXRTaG93TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd05hdigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17c2hvd05hdiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVs1MCVdIHctMTAgaC0xMCBmaXhlZCBiZy13aGl0ZSB6LTEwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17aXRlbVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtzaG93TmF2ID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLVs1MCVdIGJnLWJsYWNrIHotMTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjb2xvcj1cIndoaXRlXCIgaWNvbj17IGZhQmFycyB9IGNsYXNzTmFtZT1cIm0tYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93TmF2ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgZ2FwLXgtNiB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFib3V0IFVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZXJ2aWNlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29udGFjdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYUJhcnMiLCJtb3Rpb24iLCJOYXZiYXIiLCJpdGVtVmFyaWFudHMiLCJvcGVuIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImNsb3NlZCIsImR1cmF0aW9uIiwic2hvd05hdiIsInNldFNob3dOYXYiLCJoYW5kbGVDbGljayIsInByZXZTdGF0ZSIsIm5hdiIsImJ1dHRvbiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwiYW5pbWF0ZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJkaXYiLCJ2YXJpYW50cyIsImNvbG9yIiwiaWNvbiIsInVsIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/navbar.tsx\n"));

/***/ })

});