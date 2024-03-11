import { faBook, faMusic } from "@fortawesome/free-solid-svg-icons";
// import intermittentMesaging from '../public/images/projects/intermittent-messaging.png'
// import galley from '../public/images/projects/galley.png'
// import checkout from '../public/images/projects/checkout.png'
// import intakeForm from '../public/images/projects/intake-form.png'
// import storefront from '../public/images/projects/storefront.png'
// import fraudFlow from '../public/images/projects/fraud-flow.png'
// import idTech from '../public/images/mentorship/id-tech-camps.png'
// import winc from '../public/images/mentorship/winc-logo.png'
// import codeInPlace from '../public/images/mentorship/stanford-code-in-place.jpeg'
// import nycWomenInStem from '../public/images/mentorship/nyc-women-in-stem.png'

export const projects = [
    {
        image: "/images/projects/intermittent-messaging.png",
        title: "Intermittent Messaging",
        description: "In-app messaging between providers and patients",
    },
    {
        image: "/images/projects/checkout.png",
        title: "New Cart & Checkout Flow",
        description: "New checkout experience that supports multiple carts and checkout options",
    },
    {
        image: "/images/projects/storefront.png",
        title: "Premade Meals Storefront",
        description: "Marketplace displaying multiple vendors for premade meals w/ different delivery dates and delivery minimums",
    },
    {
        image: "/images/projects/intake-form.png",
        title: "Intake Forms",
        description: "Intake forms to collect initial health information about our patients during sign up",
    },
    {
        image: "/images/projects/galley.png",
        title: "Design System (Galley)",
        description: "Spearheaded our effort to move from MUI to a custom design system",
    },
    {
        image: "/images/projects/fraud-flow.png",
        title: "Fraud Flow",
        description: "Revamped the in-app fraud flow for users flagged as potential bad actors",
    },
]

export const techSkills = [
    "React",
    "Typescript",
    "Javascript",
    "React Testing Library",
    "Jest",
    "TailwindCSS",
    "CSS",
    "HTML",
    "React Native"
]

export const teammateSkills = [
    "Effective Communicaton",
    "Empathy",
    "Encouragement",
    "Inclusivity",
]

export const professionalExperience = [
    {
        title: "Software Engineer, Frontend",
        company: "Season Health",
        companyWebsite: "https://www.seasonhealth.com/",
        location: "NYC, NY (hybrid)",
        date: "Jul 2022 - Nov 2023",
        years: "2022-23",
        companyDescription: "a16z-backed Series A health company creating a food-as-medicine platform to improve patient health (B2B and DTC)",
        keyTechnologies: ["React", "React Query", "TypeScript", "TailwindCSS", "React Testing Library", "DataDog"],
        responsibilities: [
            "Delivered large patient-facing features including a new cart checkout flow, intermittent messaging, intake forms, and a storefront page for third-party vendors",
            "Increased team development speed and productivity by creating an internal design system and developing reusable components",
            "Lead product planning on major projects by defining scope, breaking up tasks, writing tickets, and providing launch date estimates",
            "Resolved numerous production bugs and usability issues during on-call rotations",
            "Code reviewed pull requests and manually tested (QA) features and large projects before launch to assure product and code quality"
        ],
    },
    {
        title: "Software Engineer ||",
        company: "Ellevest",
        companyWebsite: "https://www.ellevest.com/",
        location: "NYC, NY",
        date: "Jun 2019 - Jun 2022",
        years: "2019-22",
        companyDescription: "Series B finance company offering wealth management services focused on underrepresented groups (DTC)",
        keyTechnologies: ["React", "JavaScript", "Redux", "Jest", "Enzyme", "React Native"],
        responsibilities: [
            "Developed core features for the mobile and web application resulting in a 4% increase in  conversion, 20% increase in funding rate, and a 2-day reduction in the time users spent in a restricted state",
            "Worked cross-functionally with product managers, designers, and other stakeholders to solidify business goals",
            "Debugged and fixed production application issues reported through bug reports and client support requests",
            "Wrote end-to-end tests for our mobile app and website using WebdriverIO",
            "Conducted technical interviews (technical project walkthrough)",
            "Planned and led a maintenance sprint for the engineering team resulting in reduced tech debt and increased collaboration between different engineering teams"
        ],

    }
]

export const mentoredAt = [
    {
        src: "/images/mentorship/winc-logo.png",
        alt: "NYU Women in Computing",
        link: "https://nyuwinc.org/"
    },
    {
        src: "/images/mentorship/id-tech-camps.png",
        alt: "ID tech camps",
        link: "https://www.idtech.com/"
    },
    {
        src: "/images/mentorship/stanford-code-in-place.jpeg",
        alt: "Stanford Code in Place",
        link: "https://codeinplace.stanford.edu/"
    },
    {
        src: "/images/mentorship/nyc-women-in-stem.png",
        alt: "NYC Women in Stem",
        link: "https://www.nycwomeninstem.org/"
    },
]

export const interests = [
    {
        icon: faBook,
        title: "I loved reading",
        subtitle: "Tender is the Flesh",
        link: "https://bookshop.org/p/books/tender-is-the-flesh-agustina-bazterrica/13446672"
    },
    {
        icon: faMusic,
        title: "On repeat",
        subtitle: "Mother's Daughter (Wuki Remix)",
        link: "https://www.youtube.com/watch?v=QTsn-R7XRvc"
    }, 
]

export const contacts = {
    linkedin: {
        text: 'linkedin.com/in/deannatran/',
        link: 'https://www.linkedin.com/in/deannatran/'
    },
    email: {
        text: 'itsdeannatran@gmail.com',
        link: 'mailto:itsdeannatran@gmail.com'
    },
    phone: {
        text: '856-405-7989',
        link: 'tel:+18564057989'
    }
}