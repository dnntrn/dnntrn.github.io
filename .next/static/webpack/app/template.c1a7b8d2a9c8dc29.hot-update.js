"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/template",{

/***/ "(app-pages-browser)/./app/template.tsx":
/*!**************************!*\
  !*** ./app/template.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Template; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        y: \"0\",\n        x: 0,\n        top: 0\n    },\n    enter: {\n        opacity: 1,\n        y: 0,\n        x: 0,\n        top: 0\n    }\n};\nfunction Template(param) {\n    var children = param.children;\n    // useEffect(() => {\n    //     setTimeout(function() {\n    //         // window.moveTo(0,0)\n    //         // window.scrollTo(0, 0);\n    //     }, 0);\n    // }) \n    // const router = useRouter();\n    // useEffect(()=>{\n    //     const handleRouteChange = () => {\n    //         window.scrollTo(0, 0);\n    //     }\n    //     router.events.on('routeChangeComplete', handleRouteChange)\n    // },[]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.main, {\n        variants: variants,\n        initial: \"hidden\",\n        animate: \"enter\",\n        transition: {\n            type: \"linear\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-20\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/deanna/Desktop/workspace/my-website/app/template.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/deanna/Desktop/workspace/my-website/app/template.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = Template;\nvar _c;\n$RefreshReg$(_c, \"Template\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZW1wbGF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN1QztBQUl2QyxJQUFNQyxXQUFXO0lBQ2ZDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO1FBQUtDLEdBQUc7UUFBR0MsS0FBSztJQUFFO0lBQzNDQyxPQUFPO1FBQUVKLFNBQVM7UUFBR0MsR0FBRztRQUFHQyxHQUFHO1FBQUdDLEtBQUs7SUFBRTtBQUMxQztBQUVlLFNBQVNFLFNBQVMsS0FBMkM7UUFBM0MsaUJBQUVDO0lBQy9CLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsTUFBTTtJQUVOLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGlDQUFpQztJQUNqQyxRQUFRO0lBQ1IsaUVBQWlFO0lBQ2pFLFNBQVM7SUFFVCxxQkFDSSw4REFBQ1QsaURBQU1BLENBQUNVLElBQUk7UUFDUlQsVUFBVUE7UUFDVlUsU0FBUTtRQUNSQyxTQUFRO1FBQ1JDLFlBQVk7WUFBRUMsTUFBTTtRQUFTO2tCQUU3Qiw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDVlA7Ozs7Ozs7Ozs7O0FBS2pCO0tBN0J3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3RlbXBsYXRlLnRzeD8yOTg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiBcIjBcIiwgeDogMCwgdG9wOiAwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHg6IDAsIHRvcDogMCB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wbGF0ZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgIC8vIHdpbmRvdy5tb3ZlVG8oMCwwKVxuICAgIC8vICAgICAgICAgLy8gd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIC8vICAgICB9LCAwKTtcbiAgICAvLyB9KSBcblxuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgLy8gfSxbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLm1haW5cbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwXCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8L21vdGlvbi5tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsibW90aW9uIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsIngiLCJ0b3AiLCJlbnRlciIsIlRlbXBsYXRlIiwiY2hpbGRyZW4iLCJtYWluIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/template.tsx\n"));

/***/ })

});