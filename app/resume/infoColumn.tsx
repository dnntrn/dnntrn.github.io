import type { NextPage } from 'next'
import Section from './section'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const InfoColumn: NextPage = () => {
  return (
    <div className="bg-[#FDF1F2] p-3 w-fit max-w-[26%]">
        <h1 className="resume-name">Deanna Tran</h1>
        <div className="resume-title mt-2 mb-6">Software Engineer</div>
        <div className="flex flex-col gap-4 resume-description">
            <Section title="Summary" content={
                <p>Software Engineer with 4 years of experience. Excellent at cross-functional collaboration and highly motivated by business impact. Passionate about product and beautiful web development.</p>
            } />
            <Section title="Contact" content={
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <FontAwesomeIcon className="w-[10px]" icon={ faLocationDot } />
                        <div>New York City, NY</div>
                    </div>
                    <a href="mailto:itsdeannatran@gmail.com" target="_blank">
                        <div className="flex gap-2">
                            <FontAwesomeIcon className="w-[10px]" icon={ faEnvelopeOpen } />
                            <div>itsdeannatran@gmail.com</div>
                        </div>
                    </a>
                    <a href="tel:+18564057989" target="_blank">
                        <div className="flex gap-2">
                            <FontAwesomeIcon className="w-[10px]" icon={ faPhone } />
                            <div>856-405-7989</div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/deannatran/" target="_blank">
                        <div className="flex gap-2">
                            <FontAwesomeIcon className="w-[10px]" icon={ faLinkedin } />
                            <div>linkedin.com/in/deannatran/</div>
                        </div>
                    </a>  
                </div>
            } />
            <Section title="Education" content={
                <div className="flex flex-col gap-1">
                    <div className="resume-role-title font-bold">Bachelor of Arts, Computer Science</div>
                    <div><span className="font-bold">New York University</span>, May 2020</div>
                    <div>Minors: Web Design and Linguistics</div>
                </div>
            }   />
            <Section title="Skills" content={
                <ul className="list-disc ml-3 flex flex-col gap-1">
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