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

/***/ "(app-pages-browser)/./app/projects/page.tsx":
/*!*******************************!*\
  !*** ./app/projects/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_without_properties */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_without_properties.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy */ \"(app-pages-browser)/./app/copy.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Projects = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), 2), currentProject = _useState[0], setCurrentProject = _useState[1];\n    var showPreview = function(id) {\n        var project = _copy__WEBPACK_IMPORTED_MODULE_1__.projectsMap.get(id);\n        if (project) {\n            setCurrentProject(project);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-[4rem] font-brittany text-t-mobile text-center\",\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2\",\n                children: [\n                    currentProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: currentProject.title\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: _copy__WEBPACK_IMPORTED_MODULE_1__.projects.map(function(_param) /*#__PURE__*/ {\n                            var id = _param.id, title = _param.title, rest = (0,_swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_4__._)(_param, [\n                                \"id\",\n                                \"title\"\n                            ]);\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onMouseOver: function() {\n                                    return showPreview(id);\n                                },\n                                className: \"block\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Projects, \"mrBhquoOH1tawya9nIkCMrNZPNE=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFK0M7QUFFZDtBQUVqQyxJQUFNRyxXQUFxQjs7SUFDekIsSUFBNENELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBN0NFLGlCQUFxQ0YsY0FBckJHLG9CQUFxQkg7SUFNNUMsSUFBTUksY0FBYyxTQUFDQztRQUNuQixJQUFNQyxVQUFVUCw4Q0FBV0EsQ0FBQ1EsR0FBRyxDQUFDRjtRQUNoQyxJQUFJQyxTQUFTO1lBQ1hILGtCQUFrQkc7UUFDcEI7SUFFRjtJQUNBLHFCQUNFLDhEQUFDRTs7MEJBRUcsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzRDs7Ozs7OzBCQUNwRSw4REFBQ0M7Z0JBQUlELFdBQVU7O29CQUNaUixnQ0FDQyw4REFBQ1M7a0NBQ0VULGVBQWVVLEtBQUs7Ozs7OztrQ0FJekIsOERBQUNEO2tDQUNBYiwyQ0FBUUEsQ0FBQ2UsR0FBRyxDQUFDO2dDQUFHUixZQUFBQSxJQUFJTyxlQUFBQSxPQUFVRSxPQUFBQSx5RUFBQUE7Z0NBQWRUO2dDQUFJTzs7bUNBQ2YsOERBQUNHO2dDQUFPQyxhQUFhOzJDQUFNWixZQUFZQzs7Z0NBQUtLLFdBQVU7MENBQVNFOzs7Ozs7d0JBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0Y7R0EzQ01YO0tBQUFBO0FBNkNOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9wYWdlLnRzeD82NzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBwcm9qZWN0cywgcHJvamVjdHNNYXAgfSBmcm9tICcuLi9jb3B5J1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFByb2plY3RzOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRQcm9qZWN0LCBzZXRDdXJyZW50UHJvamVjdF0gPSB1c2VTdGF0ZTx7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59PigpO1xuXG4gIGNvbnN0IHNob3dQcmV2aWV3ID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNNYXAuZ2V0KGlkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgfVxuXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtWzRyZW1dIGZvbnQtYnJpdHRhbnkgdGV4dC10LW1vYmlsZSB0ZXh0LWNlbnRlcic+V29yazwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yJz5cbiAgICAgICAgICB7Y3VycmVudFByb2plY3QgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2N1cnJlbnRQcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKCh7IGlkLCB0aXRsZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbk1vdXNlT3Zlcj17KCkgPT4gc2hvd1ByZXZpZXcoaWQpfSBjbGFzc05hbWU9J2Jsb2NrJz57dGl0bGV9PC9idXR0b24+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImF1dG8tcm93cy1tYXggZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoeyB0aXRsZSwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPFByb2plY3Qga2V5PXt0aXRsZX0gdGl0bGU9e3RpdGxlfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbInByb2plY3RzIiwicHJvamVjdHNNYXAiLCJ1c2VTdGF0ZSIsIlByb2plY3RzIiwiY3VycmVudFByb2plY3QiLCJzZXRDdXJyZW50UHJvamVjdCIsInNob3dQcmV2aWV3IiwiaWQiLCJwcm9qZWN0IiwiZ2V0Iiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2IiwidGl0bGUiLCJtYXAiLCJyZXN0IiwiYnV0dG9uIiwib25Nb3VzZU92ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/page.tsx\n"));

/***/ })

});