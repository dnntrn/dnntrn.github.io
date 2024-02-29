import type { NextPage } from 'next'
import Section from './section'

const InfoColumn: NextPage = () => {
  return (
    <div className="bg-[#FDF1F2] p-3 w-fit max-w-[26%]">
        <h1 className="resume-name">Deanna Tran</h1>
        <div className="resume-title mt-2 mb-6">Software Engineer</div>
        <div className="flex flex-col gap-3">
            <Section title="Summary" content={
                <p>Software Engineer with 4 years of experience. Excellent at cross-functional collaboration and highly motivated by business impact. Passionate about product and beautiful web development.</p>
            } />
            <Section title="Contact" content={
                <>
                    <div>New York City, NY</div>
                    <div>itsdeannatran@gmail.com</div>
                    <div>856-405-7989</div>
                    <div>linkedin.com/in/deannatran/</div>
                </>
            } />
            <Section title="Education" content={
                <>
                    <div>Bachelor of Arts, Computer Science</div>
                    <div>New York University, May 2020</div>
                    <div>Minors: Web Design and Linguistics</div>
                </>
            }   />
            <Section title="Skills" content={
                <ul>
                    <li>React</li>
                    <li>TypeScript, JavaScript</li>
                    <li>React Testing Library, Jest</li>
                    <li>TailwindCSS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>React Native</li>
                    <li>Written and verbal communication</li>
                    <li>Cross-functional collaboration</li>
                </ul>
            } />
            <Section title="Work Eligibility" content={
                <div>Eligible to work in the U.S. with no restrictions</div>
            } />
            <Section title="Interests" content={
                <div>Reading, cats, sweets, and coding! :)</div>
            } />
        </div>
        
    </div>
  )
}

export default InfoColumn