import type { NextPage } from 'next'
import Section from './section'
import Role from '../components/role'
import { professionalExperience } from '../copy'

const ExperienceColumn: NextPage = () => {
  return (
    <div className="p-3 w-full">
        <div className="flex flex-col gap-4 resume-description">
            <Section title="Work Experience" content={
                <div className="mt-3 flex flex-col gap-3">
                    {professionalExperience.map((experience) => (
                        <Role key={experience.title} {...experience} />
                    ))}
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