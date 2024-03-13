"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resume/page",{

/***/ "(app-pages-browser)/./app/copy.tsx":
/*!**********************!*\
  !*** ./app/copy.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contacts: function() { return /* binding */ contacts; },\n/* harmony export */   interests: function() { return /* binding */ interests; },\n/* harmony export */   mentoredAt: function() { return /* binding */ mentoredAt; },\n/* harmony export */   professionalExperience: function() { return /* binding */ professionalExperience; },\n/* harmony export */   projects: function() { return /* binding */ projects; },\n/* harmony export */   projectsMap: function() { return /* binding */ projectsMap; },\n/* harmony export */   teammateSkills: function() { return /* binding */ teammateSkills; },\n/* harmony export */   techSkills: function() { return /* binding */ techSkills; }\n/* harmony export */ });\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n// import intermittentMesaging from '../public/images/projects/intermittent-messaging.png'\n// import galley from '../public/images/projects/galley.png'\n// import checkout from '../public/images/projects/checkout.png'\n// import intakeForm from '../public/images/projects/intake-form.png'\n// import storefront from '../public/images/projects/storefront.png'\n// import fraudFlow from '../public/images/projects/fraud-flow.png'\n// import idTech from '../public/images/mentorship/id-tech-camps.png'\n// import winc from '../public/images/mentorship/winc-logo.png'\n// import codeInPlace from '../public/images/mentorship/stanford-code-in-place.jpeg'\n// import nycWomenInStem from '../public/images/mentorship/nyc-women-in-stem.png'\nvar projects = [\n    {\n        image: \"/images/projects/intermittent-messaging.png\",\n        title: \"Intermittent Messaging\",\n        description: \"In-app messaging between providers and patients\"\n    },\n    {\n        image: \"/images/projects/checkout.png\",\n        title: \"New Cart & Checkout Flow\",\n        description: \"New checkout experience that supports multiple carts and checkout options\"\n    },\n    {\n        image: \"/images/projects/storefront.png\",\n        title: \"Premade Meals Storefront\",\n        description: \"Marketplace displaying multiple vendors for premade meals w/ different delivery dates and delivery minimums\"\n    },\n    {\n        image: \"/images/projects/intake-form.png\",\n        title: \"Intake Forms\",\n        description: \"Intake forms to collect initial health information about our patients during sign up\"\n    },\n    {\n        image: \"/images/projects/galley.png\",\n        title: \"Design System (Galley)\",\n        description: \"Spearheaded our effort to move from MUI to a custom design system\"\n    },\n    {\n        image: \"/images/projects/fraud-flow.png\",\n        title: \"Fraud Flow\",\n        description: \"Revamped the in-app fraud flow for users flagged as potential bad actors\"\n    }\n];\nvar projectsMap = new Map([\n    [\n        0,\n        projects[0]\n    ],\n    [\n        1,\n        projects[1]\n    ],\n    [\n        2,\n        projects[2]\n    ],\n    [\n        3,\n        projects[3]\n    ],\n    [\n        4,\n        projects[4]\n    ],\n    [\n        5,\n        projects[5]\n    ]\n]);\nvar techSkills = [\n    \"React\",\n    \"Typescript\",\n    \"Javascript\",\n    \"React Testing Library\",\n    \"Jest\",\n    \"TailwindCSS\",\n    \"CSS\",\n    \"HTML\",\n    \"React Native\"\n];\nvar teammateSkills = [\n    \"Effective Communicaton\",\n    \"Empathy\",\n    \"Encouragement\",\n    \"Inclusivity\"\n];\nvar professionalExperience = [\n    {\n        title: \"Software Engineer, Frontend\",\n        company: \"Season Health\",\n        companyWebsite: \"https://www.seasonhealth.com/\",\n        location: \"NYC, NY (hybrid)\",\n        date: \"Jul 2022 - Nov 2023\",\n        years: \"2022-23\",\n        companyDescription: \"a16z-backed Series A health company creating a food-as-medicine platform to improve patient health (B2B and DTC)\",\n        keyTechnologies: [\n            \"React\",\n            \"React Query\",\n            \"TypeScript\",\n            \"TailwindCSS\",\n            \"React Testing Library\",\n            \"DataDog\"\n        ],\n        responsibilities: [\n            \"Delivered large patient-facing features including a new cart checkout flow, intermittent messaging, intake forms, and a storefront page for third-party vendors\",\n            \"Increased team development speed and productivity by creating an internal design system and developing reusable components\",\n            \"Lead product planning on major projects by defining scope, breaking up tasks, writing tickets, and providing launch date estimates\",\n            \"Resolved numerous production bugs and usability issues during on-call rotations\",\n            \"Code reviewed pull requests and manually tested (QA) features and large projects before launch to assure product and code quality\"\n        ]\n    },\n    {\n        title: \"Software Engineer ||\",\n        company: \"Ellevest\",\n        companyWebsite: \"https://www.ellevest.com/\",\n        location: \"NYC, NY\",\n        date: \"Jun 2019 - Jun 2022\",\n        years: \"2019-22\",\n        companyDescription: \"Series B finance company offering wealth management services focused on underrepresented groups (DTC)\",\n        keyTechnologies: [\n            \"React\",\n            \"JavaScript\",\n            \"Redux\",\n            \"Jest\",\n            \"Enzyme\",\n            \"React Native\"\n        ],\n        responsibilities: [\n            \"Developed core features for the mobile and web application resulting in a 4% increase in  conversion, 20% increase in funding rate, and a 2-day reduction in the time users spent in a restricted state\",\n            \"Worked cross-functionally with product managers, designers, and other stakeholders to solidify business goals\",\n            \"Debugged and fixed production application issues reported through bug reports and client support requests\",\n            \"Wrote end-to-end tests for our mobile app and website using WebdriverIO\",\n            \"Conducted technical interviews (technical project walkthrough)\",\n            \"Planned and led a maintenance sprint for the engineering team resulting in reduced tech debt and increased collaboration between different engineering teams\"\n        ]\n    }\n];\nvar mentoredAt = [\n    {\n        src: \"/images/mentorship/winc-logo.png\",\n        alt: \"NYU Women in Computing\",\n        link: \"https://nyuwinc.org/\"\n    },\n    {\n        src: \"/images/mentorship/id-tech-camps.png\",\n        alt: \"ID tech camps\",\n        link: \"https://www.idtech.com/\"\n    },\n    {\n        src: \"/images/mentorship/stanford-code-in-place.jpeg\",\n        alt: \"Stanford Code in Place\",\n        link: \"https://codeinplace.stanford.edu/\"\n    },\n    {\n        src: \"/images/mentorship/nyc-women-in-stem.png\",\n        alt: \"NYC Women in Stem\",\n        link: \"https://www.nycwomeninstem.org/\"\n    }\n];\nvar interests = [\n    {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBook,\n        title: \"I loved reading\",\n        subtitle: \"Tender is the Flesh\",\n        link: \"https://bookshop.org/p/books/tender-is-the-flesh-agustina-bazterrica/13446672\"\n    },\n    {\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMusic,\n        title: \"On repeat\",\n        subtitle: \"Mother's Daughter (Wuki Remix)\",\n        link: \"https://www.youtube.com/watch?v=QTsn-R7XRvc\"\n    }\n];\nvar contacts = {\n    linkedin: {\n        text: \"linkedin.com/in/deannatran/\",\n        link: \"https://www.linkedin.com/in/deannatran/\"\n    },\n    email: {\n        text: \"itsdeannatran@gmail.com\",\n        link: \"mailto:itsdeannatran@gmail.com\"\n    },\n    phone: {\n        text: \"856-405-7989\",\n        link: \"tel:+18564057989\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3g/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmYUJvb2ssIGZhTXVzaWMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG4vLyBpbXBvcnQgaW50ZXJtaXR0ZW50TWVzYWdpbmcgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9wcm9qZWN0cy9pbnRlcm1pdHRlbnQtbWVzc2FnaW5nLnBuZydcbi8vIGltcG9ydCBnYWxsZXkgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9wcm9qZWN0cy9nYWxsZXkucG5nJ1xuLy8gaW1wb3J0IGNoZWNrb3V0IGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvcHJvamVjdHMvY2hlY2tvdXQucG5nJ1xuLy8gaW1wb3J0IGludGFrZUZvcm0gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9wcm9qZWN0cy9pbnRha2UtZm9ybS5wbmcnXG4vLyBpbXBvcnQgc3RvcmVmcm9udCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2plY3RzL3N0b3JlZnJvbnQucG5nJ1xuLy8gaW1wb3J0IGZyYXVkRmxvdyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2plY3RzL2ZyYXVkLWZsb3cucG5nJ1xuLy8gaW1wb3J0IGlkVGVjaCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL21lbnRvcnNoaXAvaWQtdGVjaC1jYW1wcy5wbmcnXG4vLyBpbXBvcnQgd2luYyBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL21lbnRvcnNoaXAvd2luYy1sb2dvLnBuZydcbi8vIGltcG9ydCBjb2RlSW5QbGFjZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL21lbnRvcnNoaXAvc3RhbmZvcmQtY29kZS1pbi1wbGFjZS5qcGVnJ1xuLy8gaW1wb3J0IG55Y1dvbWVuSW5TdGVtIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbWVudG9yc2hpcC9ueWMtd29tZW4taW4tc3RlbS5wbmcnXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvaW50ZXJtaXR0ZW50LW1lc3NhZ2luZy5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiSW50ZXJtaXR0ZW50IE1lc3NhZ2luZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbi1hcHAgbWVzc2FnaW5nIGJldHdlZW4gcHJvdmlkZXJzIGFuZCBwYXRpZW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL2NoZWNrb3V0LnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJOZXcgQ2FydCAmIENoZWNrb3V0IEZsb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmV3IGNoZWNrb3V0IGV4cGVyaWVuY2UgdGhhdCBzdXBwb3J0cyBtdWx0aXBsZSBjYXJ0cyBhbmQgY2hlY2tvdXQgb3B0aW9uc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL3N0b3JlZnJvbnQucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlByZW1hZGUgTWVhbHMgU3RvcmVmcm9udFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXJrZXRwbGFjZSBkaXNwbGF5aW5nIG11bHRpcGxlIHZlbmRvcnMgZm9yIHByZW1hZGUgbWVhbHMgdy8gZGlmZmVyZW50IGRlbGl2ZXJ5IGRhdGVzIGFuZCBkZWxpdmVyeSBtaW5pbXVtc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL2ludGFrZS1mb3JtLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJJbnRha2UgRm9ybXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSW50YWtlIGZvcm1zIHRvIGNvbGxlY3QgaW5pdGlhbCBoZWFsdGggaW5mb3JtYXRpb24gYWJvdXQgb3VyIHBhdGllbnRzIGR1cmluZyBzaWduIHVwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvZ2FsbGV5LnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJEZXNpZ24gU3lzdGVtIChHYWxsZXkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNwZWFyaGVhZGVkIG91ciBlZmZvcnQgdG8gbW92ZSBmcm9tIE1VSSB0byBhIGN1c3RvbSBkZXNpZ24gc3lzdGVtXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvZnJhdWQtZmxvdy5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiRnJhdWQgRmxvd1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXZhbXBlZCB0aGUgaW4tYXBwIGZyYXVkIGZsb3cgZm9yIHVzZXJzIGZsYWdnZWQgYXMgcG90ZW50aWFsIGJhZCBhY3RvcnNcIixcbiAgICB9LFxuXVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHNNYXAgPSBuZXcgTWFwKFtcbiAgICBbMCwgcHJvamVjdHNbMF1dLFxuICAgIFsxLCBwcm9qZWN0c1sxXV0sXG4gICAgWzIsIHByb2plY3RzWzJdXSxcbiAgICBbMywgcHJvamVjdHNbM11dLFxuICAgIFs0LCBwcm9qZWN0c1s0XV0sXG4gICAgWzUsIHByb2plY3RzWzVdXSxcbl0pO1xuXG5leHBvcnQgY29uc3QgdGVjaFNraWxscyA9IFtcbiAgICBcIlJlYWN0XCIsXG4gICAgXCJUeXBlc2NyaXB0XCIsXG4gICAgXCJKYXZhc2NyaXB0XCIsXG4gICAgXCJSZWFjdCBUZXN0aW5nIExpYnJhcnlcIixcbiAgICBcIkplc3RcIixcbiAgICBcIlRhaWx3aW5kQ1NTXCIsXG4gICAgXCJDU1NcIixcbiAgICBcIkhUTUxcIixcbiAgICBcIlJlYWN0IE5hdGl2ZVwiXG5dXG5cbmV4cG9ydCBjb25zdCB0ZWFtbWF0ZVNraWxscyA9IFtcbiAgICBcIkVmZmVjdGl2ZSBDb21tdW5pY2F0b25cIixcbiAgICBcIkVtcGF0aHlcIixcbiAgICBcIkVuY291cmFnZW1lbnRcIixcbiAgICBcIkluY2x1c2l2aXR5XCIsXG5dXG5cbmV4cG9ydCBjb25zdCBwcm9mZXNzaW9uYWxFeHBlcmllbmNlID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU29mdHdhcmUgRW5naW5lZXIsIEZyb250ZW5kXCIsXG4gICAgICAgIGNvbXBhbnk6IFwiU2Vhc29uIEhlYWx0aFwiLFxuICAgICAgICBjb21wYW55V2Vic2l0ZTogXCJodHRwczovL3d3dy5zZWFzb25oZWFsdGguY29tL1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJOWUMsIE5ZIChoeWJyaWQpXCIsXG4gICAgICAgIGRhdGU6IFwiSnVsIDIwMjIgLSBOb3YgMjAyM1wiLFxuICAgICAgICB5ZWFyczogXCIyMDIyLTIzXCIsXG4gICAgICAgIGNvbXBhbnlEZXNjcmlwdGlvbjogXCJhMTZ6LWJhY2tlZCBTZXJpZXMgQSBoZWFsdGggY29tcGFueSBjcmVhdGluZyBhIGZvb2QtYXMtbWVkaWNpbmUgcGxhdGZvcm0gdG8gaW1wcm92ZSBwYXRpZW50IGhlYWx0aCAoQjJCIGFuZCBEVEMpXCIsXG4gICAgICAgIGtleVRlY2hub2xvZ2llczogW1wiUmVhY3RcIiwgXCJSZWFjdCBRdWVyeVwiLCBcIlR5cGVTY3JpcHRcIiwgXCJUYWlsd2luZENTU1wiLCBcIlJlYWN0IFRlc3RpbmcgTGlicmFyeVwiLCBcIkRhdGFEb2dcIl0sXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICAgICAgIFwiRGVsaXZlcmVkIGxhcmdlIHBhdGllbnQtZmFjaW5nIGZlYXR1cmVzIGluY2x1ZGluZyBhIG5ldyBjYXJ0IGNoZWNrb3V0IGZsb3csIGludGVybWl0dGVudCBtZXNzYWdpbmcsIGludGFrZSBmb3JtcywgYW5kIGEgc3RvcmVmcm9udCBwYWdlIGZvciB0aGlyZC1wYXJ0eSB2ZW5kb3JzXCIsXG4gICAgICAgICAgICBcIkluY3JlYXNlZCB0ZWFtIGRldmVsb3BtZW50IHNwZWVkIGFuZCBwcm9kdWN0aXZpdHkgYnkgY3JlYXRpbmcgYW4gaW50ZXJuYWwgZGVzaWduIHN5c3RlbSBhbmQgZGV2ZWxvcGluZyByZXVzYWJsZSBjb21wb25lbnRzXCIsXG4gICAgICAgICAgICBcIkxlYWQgcHJvZHVjdCBwbGFubmluZyBvbiBtYWpvciBwcm9qZWN0cyBieSBkZWZpbmluZyBzY29wZSwgYnJlYWtpbmcgdXAgdGFza3MsIHdyaXRpbmcgdGlja2V0cywgYW5kIHByb3ZpZGluZyBsYXVuY2ggZGF0ZSBlc3RpbWF0ZXNcIixcbiAgICAgICAgICAgIFwiUmVzb2x2ZWQgbnVtZXJvdXMgcHJvZHVjdGlvbiBidWdzIGFuZCB1c2FiaWxpdHkgaXNzdWVzIGR1cmluZyBvbi1jYWxsIHJvdGF0aW9uc1wiLFxuICAgICAgICAgICAgXCJDb2RlIHJldmlld2VkIHB1bGwgcmVxdWVzdHMgYW5kIG1hbnVhbGx5IHRlc3RlZCAoUUEpIGZlYXR1cmVzIGFuZCBsYXJnZSBwcm9qZWN0cyBiZWZvcmUgbGF1bmNoIHRvIGFzc3VyZSBwcm9kdWN0IGFuZCBjb2RlIHF1YWxpdHlcIlxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlciB8fFwiLFxuICAgICAgICBjb21wYW55OiBcIkVsbGV2ZXN0XCIsXG4gICAgICAgIGNvbXBhbnlXZWJzaXRlOiBcImh0dHBzOi8vd3d3LmVsbGV2ZXN0LmNvbS9cIixcbiAgICAgICAgbG9jYXRpb246IFwiTllDLCBOWVwiLFxuICAgICAgICBkYXRlOiBcIkp1biAyMDE5IC0gSnVuIDIwMjJcIixcbiAgICAgICAgeWVhcnM6IFwiMjAxOS0yMlwiLFxuICAgICAgICBjb21wYW55RGVzY3JpcHRpb246IFwiU2VyaWVzIEIgZmluYW5jZSBjb21wYW55IG9mZmVyaW5nIHdlYWx0aCBtYW5hZ2VtZW50IHNlcnZpY2VzIGZvY3VzZWQgb24gdW5kZXJyZXByZXNlbnRlZCBncm91cHMgKERUQylcIixcbiAgICAgICAga2V5VGVjaG5vbG9naWVzOiBbXCJSZWFjdFwiLCBcIkphdmFTY3JpcHRcIiwgXCJSZWR1eFwiLCBcIkplc3RcIiwgXCJFbnp5bWVcIiwgXCJSZWFjdCBOYXRpdmVcIl0sXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICAgICAgIFwiRGV2ZWxvcGVkIGNvcmUgZmVhdHVyZXMgZm9yIHRoZSBtb2JpbGUgYW5kIHdlYiBhcHBsaWNhdGlvbiByZXN1bHRpbmcgaW4gYSA0JSBpbmNyZWFzZSBpbiAgY29udmVyc2lvbiwgMjAlIGluY3JlYXNlIGluIGZ1bmRpbmcgcmF0ZSwgYW5kIGEgMi1kYXkgcmVkdWN0aW9uIGluIHRoZSB0aW1lIHVzZXJzIHNwZW50IGluIGEgcmVzdHJpY3RlZCBzdGF0ZVwiLFxuICAgICAgICAgICAgXCJXb3JrZWQgY3Jvc3MtZnVuY3Rpb25hbGx5IHdpdGggcHJvZHVjdCBtYW5hZ2VycywgZGVzaWduZXJzLCBhbmQgb3RoZXIgc3Rha2Vob2xkZXJzIHRvIHNvbGlkaWZ5IGJ1c2luZXNzIGdvYWxzXCIsXG4gICAgICAgICAgICBcIkRlYnVnZ2VkIGFuZCBmaXhlZCBwcm9kdWN0aW9uIGFwcGxpY2F0aW9uIGlzc3VlcyByZXBvcnRlZCB0aHJvdWdoIGJ1ZyByZXBvcnRzIGFuZCBjbGllbnQgc3VwcG9ydCByZXF1ZXN0c1wiLFxuICAgICAgICAgICAgXCJXcm90ZSBlbmQtdG8tZW5kIHRlc3RzIGZvciBvdXIgbW9iaWxlIGFwcCBhbmQgd2Vic2l0ZSB1c2luZyBXZWJkcml2ZXJJT1wiLFxuICAgICAgICAgICAgXCJDb25kdWN0ZWQgdGVjaG5pY2FsIGludGVydmlld3MgKHRlY2huaWNhbCBwcm9qZWN0IHdhbGt0aHJvdWdoKVwiLFxuICAgICAgICAgICAgXCJQbGFubmVkIGFuZCBsZWQgYSBtYWludGVuYW5jZSBzcHJpbnQgZm9yIHRoZSBlbmdpbmVlcmluZyB0ZWFtIHJlc3VsdGluZyBpbiByZWR1Y2VkIHRlY2ggZGVidCBhbmQgaW5jcmVhc2VkIGNvbGxhYm9yYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgZW5naW5lZXJpbmcgdGVhbXNcIlxuICAgICAgICBdLFxuXG4gICAgfVxuXVxuXG5leHBvcnQgY29uc3QgbWVudG9yZWRBdCA9IFtcbiAgICB7XG4gICAgICAgIHNyYzogXCIvaW1hZ2VzL21lbnRvcnNoaXAvd2luYy1sb2dvLnBuZ1wiLFxuICAgICAgICBhbHQ6IFwiTllVIFdvbWVuIGluIENvbXB1dGluZ1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbnl1d2luYy5vcmcvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBcIi9pbWFnZXMvbWVudG9yc2hpcC9pZC10ZWNoLWNhbXBzLnBuZ1wiLFxuICAgICAgICBhbHQ6IFwiSUQgdGVjaCBjYW1wc1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmlkdGVjaC5jb20vXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBcIi9pbWFnZXMvbWVudG9yc2hpcC9zdGFuZm9yZC1jb2RlLWluLXBsYWNlLmpwZWdcIixcbiAgICAgICAgYWx0OiBcIlN0YW5mb3JkIENvZGUgaW4gUGxhY2VcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2NvZGVpbnBsYWNlLnN0YW5mb3JkLmVkdS9cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IFwiL2ltYWdlcy9tZW50b3JzaGlwL255Yy13b21lbi1pbi1zdGVtLnBuZ1wiLFxuICAgICAgICBhbHQ6IFwiTllDIFdvbWVuIGluIFN0ZW1cIixcbiAgICAgICAgbGluazogXCJodHRwczovL3d3dy5ueWN3b21lbmluc3RlbS5vcmcvXCJcbiAgICB9LFxuXVxuXG5leHBvcnQgY29uc3QgaW50ZXJlc3RzID0gW1xuICAgIHtcbiAgICAgICAgaWNvbjogZmFCb29rLFxuICAgICAgICB0aXRsZTogXCJJIGxvdmVkIHJlYWRpbmdcIixcbiAgICAgICAgc3VidGl0bGU6IFwiVGVuZGVyIGlzIHRoZSBGbGVzaFwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vYm9va3Nob3Aub3JnL3AvYm9va3MvdGVuZGVyLWlzLXRoZS1mbGVzaC1hZ3VzdGluYS1iYXp0ZXJyaWNhLzEzNDQ2NjcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogZmFNdXNpYyxcbiAgICAgICAgdGl0bGU6IFwiT24gcmVwZWF0XCIsXG4gICAgICAgIHN1YnRpdGxlOiBcIk1vdGhlcidzIERhdWdodGVyIChXdWtpIFJlbWl4KVwiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UVRzbi1SN1hSdmNcIlxuICAgIH0sIFxuXVxuXG5leHBvcnQgY29uc3QgY29udGFjdHMgPSB7XG4gICAgbGlua2VkaW46IHtcbiAgICAgICAgdGV4dDogJ2xpbmtlZGluLmNvbS9pbi9kZWFubmF0cmFuLycsXG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGVhbm5hdHJhbi8nXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0ZXh0OiAnaXRzZGVhbm5hdHJhbkBnbWFpbC5jb20nLFxuICAgICAgICBsaW5rOiAnbWFpbHRvOml0c2RlYW5uYXRyYW5AZ21haWwuY29tJ1xuICAgIH0sXG4gICAgcGhvbmU6IHtcbiAgICAgICAgdGV4dDogJzg1Ni00MDUtNzk4OScsXG4gICAgICAgIGxpbms6ICd0ZWw6KzE4NTY0MDU3OTg5J1xuICAgIH1cbn0iXSwibmFtZXMiOlsiZmFCb29rIiwiZmFNdXNpYyIsInByb2plY3RzIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvamVjdHNNYXAiLCJNYXAiLCJ0ZWNoU2tpbGxzIiwidGVhbW1hdGVTa2lsbHMiLCJwcm9mZXNzaW9uYWxFeHBlcmllbmNlIiwiY29tcGFueSIsImNvbXBhbnlXZWJzaXRlIiwibG9jYXRpb24iLCJkYXRlIiwieWVhcnMiLCJjb21wYW55RGVzY3JpcHRpb24iLCJrZXlUZWNobm9sb2dpZXMiLCJyZXNwb25zaWJpbGl0aWVzIiwibWVudG9yZWRBdCIsInNyYyIsImFsdCIsImxpbmsiLCJpbnRlcmVzdHMiLCJpY29uIiwic3VidGl0bGUiLCJjb250YWN0cyIsImxpbmtlZGluIiwidGV4dCIsImVtYWlsIiwicGhvbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/copy.tsx\n"));

/***/ })

});