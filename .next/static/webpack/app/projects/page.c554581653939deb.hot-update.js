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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_without_properties */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_without_properties.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../copy */ \"(app-pages-browser)/./app/copy.tsx\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project */ \"(app-pages-browser)/./app/components/project.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../motion */ \"(app-pages-browser)/./app/motion.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Projects = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), 2), currentProject = _useState[0], setCurrentProject = _useState[1];\n    var showPreview = function(id) {\n        var project = _copy__WEBPACK_IMPORTED_MODULE_1__.projectsMap.get(id);\n        if (project) {\n            setCurrentProject(project);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-[4rem] font-brittany text-t-mobile text-center\",\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2\",\n                children: _copy__WEBPACK_IMPORTED_MODULE_1__.projects.map(function(_param, i) /*#__PURE__*/ {\n                    var title = _param.title, rest = (0,_swc_helpers_object_without_properties__WEBPACK_IMPORTED_MODULE_6__._)(_param, [\n                        \"title\"\n                    ]);\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        variants: _motion__WEBPACK_IMPORTED_MODULE_4__.universialMotionVariant,\n                        initial: \"hidden\",\n                        animate: \"enter\",\n                        transition: {\n                            type: \"linear\",\n                            delay: .4 * i\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__._)({\n                            title: title\n                        }, rest), void 0, false, {\n                            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this)\n                    }, title, false, {\n                        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/projects/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Projects, \"mrBhquoOH1tawya9nIkCMrNZPNE=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9qZWN0cy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQztBQUNKO0FBQ1Y7QUFDbUI7QUFDYjtBQUV2QyxJQUFNTSxXQUFxQjs7SUFDekIsSUFBNENILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsUUFBN0NJLGlCQUFxQ0osY0FBckJLLG9CQUFxQkw7SUFNNUMsSUFBTU0sY0FBYyxTQUFDQztRQUNuQixJQUFNQyxVQUFVViw4Q0FBV0EsQ0FBQ1csR0FBRyxDQUFDRjtRQUNoQyxJQUFJQyxTQUFTO1lBQ1hILGtCQUFrQkc7UUFDcEI7SUFFRjtJQUNBLHFCQUNFLDhEQUFDRTs7MEJBRUcsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzRDs7Ozs7OzBCQWtCcEUsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNWZiwyQ0FBUUEsQ0FBQ2lCLEdBQUcsQ0FBQyxpQkFBcUJDO3dCQUFsQkMsZUFBQUEsT0FBVUMsT0FBQUEseUVBQUFBO3dCQUFWRDs7MkJBQ2IsOERBQUNkLGlEQUFNQSxDQUFDVyxHQUFHO3dCQUVUSyxVQUFVakIsNERBQXVCQTt3QkFDakNrQixTQUFRO3dCQUNSQyxTQUFRO3dCQUNSQyxZQUFZOzRCQUFFQyxNQUFNOzRCQUFVQyxPQUFRLEtBQUtSO3dCQUFFO2tDQUUzQyw0RUFBQ2hCLDJEQUFPQSxFQUFBQSw2REFBQUE7NEJBQUNpQixPQUFPQTsyQkFBV0M7Ozs7O3VCQU54QkQ7Ozs7O2dCQU9LOzs7Ozs7Ozs7Ozs7QUFPNUI7R0FwRE1iO0tBQUFBO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9qZWN0cy9wYWdlLnRzeD82NzQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBwcm9qZWN0cywgcHJvamVjdHNNYXAgfSBmcm9tICcuLi9jb3B5J1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1bml2ZXJzaWFsTW90aW9uVmFyaWFudCB9IGZyb20gJy4uL21vdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgUHJvamVjdHM6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0XSA9IHVzZVN0YXRlPHtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn0+KCk7XG5cbiAgY29uc3Qgc2hvd1ByZXZpZXcgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c01hcC5nZXQoaWQpO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1bNHJlbV0gZm9udC1icml0dGFueSB0ZXh0LXQtbW9iaWxlIHRleHQtY2VudGVyJz5Xb3JrPC9oMj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIHctZnVsbCBtaW4taC1bMTAwdmhdIG0tYXV0byc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHsgaWQsIHRpdGxlLCAuLi5yZXN0IH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZU92ZXI9eygpID0+IHNob3dQcmV2aWV3KGlkKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDdXJyZW50UHJvamVjdCh1bmRlZmluZWQpfSBjbGFzc05hbWU9J2Jsb2NrIGZvbnQtbGF0byB0ZXh0LVsxLjNyZW1dIHVuZGVybGluZSB0ZXh0LXQtbW9iaWxlIG10LTInPnt0aXRsZX08L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2N1cnJlbnRQcm9qZWN0ICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxQcm9qZWN0IHsuLi5jdXJyZW50UHJvamVjdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0by1yb3dzLW1heCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC15LTYgZ2FwLXgtMlwiPlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoeyB0aXRsZSwgLi4ucmVzdCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50cz17dW5pdmVyc2lhbE1vdGlvblZhcmlhbnR9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwibGluZWFyXCIsIGRlbGF5OiAoLjQgKiBpKX19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IHRpdGxlPXt0aXRsZX0gey4uLnJlc3R9IC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbInByb2plY3RzIiwicHJvamVjdHNNYXAiLCJQcm9qZWN0IiwidXNlU3RhdGUiLCJ1bml2ZXJzaWFsTW90aW9uVmFyaWFudCIsIm1vdGlvbiIsIlByb2plY3RzIiwiY3VycmVudFByb2plY3QiLCJzZXRDdXJyZW50UHJvamVjdCIsInNob3dQcmV2aWV3IiwiaWQiLCJwcm9qZWN0IiwiZ2V0Iiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwiaSIsInRpdGxlIiwicmVzdCIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/projects/page.tsx\n"));

/***/ })

});