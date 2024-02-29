import type { NextPage } from 'next'
import Section from './section'
import Role from './role'

const ExperienceColumn: NextPage = () => {
  return (
    <div className="p-3 w-full">
        <div className="flex flex-col gap-4 resume-description">
            <Section title="Work Experience" content={
                <div className="mt-3 flex flex-col gap-3">
                    <Role
                        title="Software Engineer, Frontend"
                        company={<a href="https://www.seasonhealth.com/" target="_blank">Season Health</a>}
                        location="NYC, NY (hybrid)"
                        date="Jul 2022 - Nov 2023"
                        companyDescription="a16z-backed Series A health company creating a food-as-medicine platform to improve patient health (B2B and DTC)"
                        keyTechnologies="React, React Query, TypeScript, TailwindCSS, React Testing Library, DataDog"
                        responsibilities={[
                            "Delivered large patient-facing features including a new cart checkout flow, intermittent messaging, intake forms, and a storefront page for third-party vendors",
                            "Increased team development speed and productivity by creating an internal design system and developing reusable components",
                            "Lead product planning on major projects by defining scope, breaking up tasks, writing tickets, and providing launch date estimates",
                            "Resolved numerous production bugs and usability issues during on-call rotations",
                            "Code reviewed pull requests and manually tested (QA) features and large projects before launch to assure product and code quality"
                    ]} />
                    <Role
                        title="Software Engineer II"
                        company={<a href="https://www.ellevest.com/" target="_blank">Ellevest</a>}
                        location="NYC, NY"
                        date="Jun 2019 - Jun 2022"
                        companyDescription="Series B finance company offering wealth management services focused on underrepresented groups (DTC)"
                        keyTechnologies="React, JavaScript, Redux, Jest, Enzyme, React Native"
                        responsibilities={[
                            "Developed core features for the mobile and web application resulting in a 4% increase in  conversion, 20% increase in funding rate, and a 2-day reduction in the time users spent in a restricted state",
                            "Worked cross-functionally with product managers, designers, and other stakeholders to solidify business goals",
                            "Debugged and fixed production application issues reported through bug reports and client support requests",
                            "Wrote end-to-end tests for our mobile app and website using WebdriverIO",
                            "Conducted technical interviews (technical project walkthrough)",
                            "Planned and led a maintenance sprint for the engineering team resulting in reduced tech debt and increased collaboration between different engineering teams"
                    ]} />
                </div>
                
            } />
            <Section title="Additional Leadership Experience" content={
                <div className="mt-3 flex flex-col gap-3">
                    <Role
                        title="Instructor, volunteer"
                        company="Standford Code in Place"
                        location="Remote"
                        date="Apr 2021 - Jun 2021"
                        responsibilities={[
                            "Taught coding fundamentals in Python in a weekly class",
                            "Graded assignments and provided feedback to students’ code"
                    ]} />
                    <Role
                        title="President"
                        company="NYU Women in Computing"
                        location="NYC, NY"
                        date="Sept 2019 - May 2020"
                        responsibilities={[
                            "Facilitated professional and community events for over 100 Women in Computing members",
                            "Planned and led a conference for over 10 high schools to provide mentorship"
                    ]} />
                </div>
            }   />
        </div>
        
    </div>
  )
}

export default ExperienceColumn