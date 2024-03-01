"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 1844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 7085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 4490:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 3750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2673);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9419);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    const tree = {
        children: [
        '',
        {
        children: [
        'resume',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8845)), "/Users/deanna/Desktop/workspace/my-website/app/resume/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2078)), "/Users/deanna/Desktop/workspace/my-website/app/layout.tsx"],
          
        }
      ]
      }.children;
    const pages = ["/Users/deanna/Desktop/workspace/my-website/app/resume/page.tsx"];
    
    const originalPathname = "/resume/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    
  

/***/ }),

/***/ 8845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/noop-head.js
var noop_head = __webpack_require__(252);
var noop_head_default = /*#__PURE__*/__webpack_require__.n(noop_head);
;// CONCATENATED MODULE: ./app/resume/section.tsx

const Section = ({ title, content })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "resume-subsection-title shrink pr-2",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "my-auto mx-0 grow border-[#737373]"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "resume-description",
                children: content
            })
        ]
    });
};
/* harmony default export */ const section = (Section);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(3866);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(41);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(2447);
;// CONCATENATED MODULE: ./app/resume/infoColumn.tsx





const InfoColumn = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#FDF1F2] p-3 w-fit max-w-[26%]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "resume-name",
                children: "Deanna Tran"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "resume-title mt-2 mb-6",
                children: "Software Engineer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-4 resume-description",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Summary",
                        content: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Software Engineer with 4 years of experience. Excellent at cross-functional collaboration and highly motivated by business impact. Passionate about product and beautiful web development."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Contact",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                            className: "w-[10px]",
                                            icon: free_solid_svg_icons/* faLocationDot */.opg
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: "New York City, NY"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "mailto:itsdeannatran@gmail.com",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                                className: "w-[10px]",
                                                icon: free_solid_svg_icons/* faEnvelopeOpen */.dwZ
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "itsdeannatran@gmail.com"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "tel:+18564057989",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                                className: "w-[10px]",
                                                icon: free_solid_svg_icons/* faPhone */.j1w
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "856-405-7989"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.linkedin.com/in/deannatran/",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                                className: "w-[10px]",
                                                icon: free_brands_svg_icons/* faLinkedin */.D9H
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "linkedin.com/in/deannatran/"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Education",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "resume-role-title",
                                    children: "Bachelor of Arts, Computer Science"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold",
                                            children: "New York University"
                                        }),
                                        ", May 2020"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "Minors: Web Design and Linguistics"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Skills",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "list-disc ml-3 flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "React"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "TypeScript, JavaScript"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "React Testing Library, Jest"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "TailwindCSS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "CSS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "HTML"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "React Native"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Written and verbal communication"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Cross-functional collaboration"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Work Eligibility",
                        content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Eligible to work in the U.S. with no restrictions"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(section, {
                        title: "Interests",
                        content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Reading, cats, sweets, and coding! :)"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const infoColumn = (InfoColumn);

;// CONCATENATED MODULE: ./app/resume/role.tsx

const Role = ({ title, company, location, date, companyDescription, keyTechnologies, responsibilities })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full resume-description",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "resume-role-title",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "resume-role-company",
                                        children: company
                                    }),
                                    " - ",
                                    location
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: date
                    })
                ]
            }),
            companyDescription && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 mb-1",
                children: companyDescription
            }),
            keyTechnologies && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Key Technologies: ",
                    keyTechnologies
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "mt-3 list-disc ml-10",
                children: responsibilities.map((r)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-2",
                        children: r
                    }, r))
            })
        ]
    });
};
/* harmony default export */ const role = (Role);

;// CONCATENATED MODULE: ./app/resume/experienceColumn.tsx



const ExperienceColumn = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-3 w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-4 resume-description",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(section, {
                    title: "Work Experience",
                    content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-3 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(role, {
                                title: "Software Engineer, Frontend",
                                company: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.seasonhealth.com/",
                                    target: "_blank",
                                    children: "Season Health"
                                }),
                                location: "NYC, NY (hybrid)",
                                date: "Jul 2022 - Nov 2023",
                                companyDescription: "a16z-backed Series A health company creating a food-as-medicine platform to improve patient health (B2B and DTC)",
                                keyTechnologies: "React, React Query, TypeScript, TailwindCSS, React Testing Library, DataDog",
                                responsibilities: [
                                    "Delivered large patient-facing features including a new cart checkout flow, intermittent messaging, intake forms, and a storefront page for third-party vendors",
                                    "Increased team development speed and productivity by creating an internal design system and developing reusable components",
                                    "Lead product planning on major projects by defining scope, breaking up tasks, writing tickets, and providing launch date estimates",
                                    "Resolved numerous production bugs and usability issues during on-call rotations",
                                    "Code reviewed pull requests and manually tested (QA) features and large projects before launch to assure product and code quality"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(role, {
                                title: "Software Engineer II",
                                company: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.ellevest.com/",
                                    target: "_blank",
                                    children: "Ellevest"
                                }),
                                location: "NYC, NY",
                                date: "Jun 2019 - Jun 2022",
                                companyDescription: "Series B finance company offering wealth management services focused on underrepresented groups (DTC)",
                                keyTechnologies: "React, JavaScript, Redux, Jest, Enzyme, React Native",
                                responsibilities: [
                                    "Developed core features for the mobile and web application resulting in a 4% increase in  conversion, 20% increase in funding rate, and a 2-day reduction in the time users spent in a restricted state",
                                    "Worked cross-functionally with product managers, designers, and other stakeholders to solidify business goals",
                                    "Debugged and fixed production application issues reported through bug reports and client support requests",
                                    "Wrote end-to-end tests for our mobile app and website using WebdriverIO",
                                    "Conducted technical interviews (technical project walkthrough)",
                                    "Planned and led a maintenance sprint for the engineering team resulting in reduced tech debt and increased collaboration between different engineering teams"
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(section, {
                    title: "Additional Leadership Experience",
                    content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-3 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(role, {
                                title: "Instructor, volunteer",
                                company: "Standford Code in Place",
                                location: "Remote",
                                date: "Apr 2021 - Jun 2021",
                                responsibilities: [
                                    "Taught coding fundamentals in Python in a weekly class",
                                    "Graded assignments and provided feedback to students’ code"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(role, {
                                title: "President",
                                company: "NYU Women in Computing",
                                location: "NYC, NY",
                                date: "Sept 2019 - May 2020",
                                responsibilities: [
                                    "Facilitated professional and community events for over 100 Women in Computing members",
                                    "Planned and led a conference for over 10 high schools to provide mentorship"
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const experienceColumn = (ExperienceColumn);

;// CONCATENATED MODULE: ./app/resume/page.tsx




const Resume = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((noop_head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Deanna Tran Resume"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Deanna Tran Resume"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-[960px] mx-auto p-5 mb-5 my-5 shadow-[0_1rem_3rem_rgba(0,0,0,.175)] flex gap-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(infoColumn, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(experienceColumn, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const page = (Resume);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [843,683,723], () => (__webpack_exec__(565)));
module.exports = __webpack_exports__;

})();