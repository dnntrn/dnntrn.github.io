"use strict";
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 8055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Chip = ({ text })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-dusty-pink text-[.9rem] p-2 w-fit text-white font-poppins uppercase after:h-full after:bg-[rgba(255,255,255,0.4)] hover:after:bg-[rgba(255,255,255,0)] hover:after:transition-all hover:after:ease-in-out after:w-0 after:absolute after:top-0 after:left-0 after:content-[''] hover:after:w-[120%] hover:after:duration-700",
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chip);


/***/ }),

/***/ 9268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ contacts),
/* harmony export */   N_: () => (/* binding */ interests),
/* harmony export */   Tg: () => (/* binding */ professionalExperience),
/* harmony export */   dM: () => (/* binding */ teammateSkills),
/* harmony export */   qq: () => (/* binding */ mentoredAt),
/* harmony export */   uZ: () => (/* binding */ techSkills)
/* harmony export */ });
/* unused harmony export projects */
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7877);
/* harmony import */ var _public_images_projects_intermittent_messaging_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6915);
/* harmony import */ var _public_images_projects_galley_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9469);
/* harmony import */ var _public_images_projects_checkout_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7551);
/* harmony import */ var _public_images_projects_intake_form_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2355);
/* harmony import */ var _public_images_projects_storefront_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9902);
/* harmony import */ var _public_images_projects_fraud_flow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2375);
/* harmony import */ var _public_images_mentorship_id_tech_camps_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4865);
/* harmony import */ var _public_images_mentorship_winc_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8867);
/* harmony import */ var _public_images_mentorship_stanford_code_in_place_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(410);
/* harmony import */ var _public_images_mentorship_nyc_women_in_stem_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(141);











const projects = [
    {
        image: _public_images_projects_intermittent_messaging_png__WEBPACK_IMPORTED_MODULE_0__["default"],
        title: "Intermittent Messaging",
        description: "In-app messaging between providers and patients"
    },
    {
        image: _public_images_projects_checkout_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        title: "New Cart & Checkout Flow",
        description: "New checkout experience that supports multiple carts and checkout options"
    },
    {
        image: _public_images_projects_storefront_png__WEBPACK_IMPORTED_MODULE_4__["default"],
        title: "Premade Meals Storefront",
        description: "Marketplace displaying multiple vendors for premade meals w/ different delivery dates and delivery minimums"
    },
    {
        image: _public_images_projects_intake_form_png__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: "Intake Forms",
        description: "Intake forms to collect initial health information about our patients during sign up"
    },
    {
        image: _public_images_projects_galley_png__WEBPACK_IMPORTED_MODULE_1__["default"],
        title: "Design System (Galley)",
        description: "Spearheaded our effort to move from MUI to a custom design system"
    },
    {
        image: _public_images_projects_fraud_flow_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        title: "Fraud Flow",
        description: "Revamped the in-app fraud flow for users flagged as potential bad actors"
    }
];
const techSkills = [
    "React",
    "Typescript",
    "Javascript",
    "React Testing Library",
    "Jest",
    "TailwindCSS",
    "CSS",
    "HTML",
    "React Native"
];
const teammateSkills = [
    "Effective Communicaton",
    "Empathy",
    "Encouragement",
    "Inclusivity"
];
const professionalExperience = [
    {
        title: "Software Engineer, Frontend",
        company: "Season Health",
        companyWebsite: "https://www.seasonhealth.com/",
        location: "NYC, NY (hybrid)",
        date: "Jul 2022 - Nov 2023",
        years: "2022-23",
        companyDescription: "a16z-backed Series A health company creating a food-as-medicine platform to improve patient health (B2B and DTC)",
        keyTechnologies: [
            "React",
            "React Query",
            "TypeScript",
            "TailwindCSS",
            "React Testing Library",
            "DataDog"
        ],
        responsibilities: [
            "Delivered large patient-facing features including a new cart checkout flow, intermittent messaging, intake forms, and a storefront page for third-party vendors",
            "Increased team development speed and productivity by creating an internal design system and developing reusable components",
            "Lead product planning on major projects by defining scope, breaking up tasks, writing tickets, and providing launch date estimates",
            "Resolved numerous production bugs and usability issues during on-call rotations",
            "Code reviewed pull requests and manually tested (QA) features and large projects before launch to assure product and code quality"
        ]
    },
    {
        title: "Software Engineer ||",
        company: "Ellevest",
        companyWebsite: "https://www.ellevest.com/",
        location: "NYC, NY",
        date: "Jun 2019 - Jun 2022",
        years: "2019-22",
        companyDescription: "Series B finance company offering wealth management services focused on underrepresented groups (DTC)",
        keyTechnologies: [
            "React",
            "JavaScript",
            "Redux",
            "Jest",
            "Enzyme",
            "React Native"
        ],
        responsibilities: [
            "Developed core features for the mobile and web application resulting in a 4% increase in  conversion, 20% increase in funding rate, and a 2-day reduction in the time users spent in a restricted state",
            "Worked cross-functionally with product managers, designers, and other stakeholders to solidify business goals",
            "Debugged and fixed production application issues reported through bug reports and client support requests",
            "Wrote end-to-end tests for our mobile app and website using WebdriverIO",
            "Conducted technical interviews (technical project walkthrough)",
            "Planned and led a maintenance sprint for the engineering team resulting in reduced tech debt and increased collaboration between different engineering teams"
        ]
    }
];
const mentoredAt = [
    {
        src: _public_images_mentorship_winc_logo_png__WEBPACK_IMPORTED_MODULE_7__["default"],
        alt: "NYU Women in Computing",
        link: "https://nyuwinc.org/"
    },
    {
        src: _public_images_mentorship_id_tech_camps_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        alt: "ID tech camps",
        link: "https://www.idtech.com/"
    },
    {
        src: _public_images_mentorship_stanford_code_in_place_jpeg__WEBPACK_IMPORTED_MODULE_8__["default"],
        alt: "Stanford Code in Place",
        link: "https://codeinplace.stanford.edu/"
    },
    {
        src: _public_images_mentorship_nyc_women_in_stem_png__WEBPACK_IMPORTED_MODULE_9__["default"],
        alt: "NYC Women in Stem",
        link: "https://www.nycwomeninstem.org/"
    }
];
const interests = [
    {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__/* .faBook */ .FL8,
        title: "I loved reading",
        subtitle: "Tender is the Flesh",
        link: "https://bookshop.org/p/books/tender-is-the-flesh-agustina-bazterrica/13446672"
    },
    {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__/* .faMusic */ .Xig,
        title: "On repeat",
        subtitle: "Mother's Daughter (Wuki Remix)",
        link: "https://www.youtube.com/watch?v=QTsn-R7XRvc"
    }
];
const contacts = {
    linkedin: {
        text: "linkedin.com/in/deannatran/",
        link: "https://www.linkedin.com/in/deannatran/"
    },
    email: {
        text: "itsdeannatran@gmail.com",
        link: "mailto:itsdeannatran@gmail.com"
    },
    phone: {
        text: "856-405-7989",
        link: "tel:+18564057989"
    }
};


/***/ }),

/***/ 3459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8195);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7877);
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8055);




const Role = ({ isCondensed, title, company, companyWebsite, location, date, companyDescription, keyTechnologies, responsibilities })=>{
    if (isCondensed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full resume-description",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "my-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                    width: 10,
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .faLocationDot */ .opg,
                                    className: "inline mr-2 my-auto"
                                }),
                                location
                            ]
                        }),
                        companyWebsite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: companyWebsite,
                                target: "_blank",
                                children: companyWebsite
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "mt-3 list-disc ml-10",
                    children: responsibilities.map((r)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mb-2",
                            children: r
                        }, r))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap gap-2 mt-6",
                    children: keyTechnologies && keyTechnologies.map((tech)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chip__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            text: tech
                        }, tech))
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full resume-description",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "resume-role-title",
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "resume-role-company",
                                        children: companyWebsite ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: companyWebsite,
                                            target: "_blank",
                                            children: company
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: company
                                        })
                                    }),
                                    " - ",
                                    location
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: date
                    })
                ]
            }),
            companyDescription && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 mb-1",
                children: companyDescription
            }),
            keyTechnologies && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Key Technologies: ",
                    keyTechnologies.join(", ")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "mt-3 list-disc ml-10",
                children: responsibilities.map((r)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "mb-2",
                        children: r
                    }, r))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Role);


/***/ })

};
;