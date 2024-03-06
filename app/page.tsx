import Chip from './chip'
import { interests, mentoredAt, professionalExperience, teammateSkills, techSkills } from "./copy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import me from '../public/images/me.png'
import meWithLion from '../public/images/me-lion.jpg'
import idTech from '../public/images/mentorship/id-tech-camps.png'
import winc from '../public/images/mentorship/winc-logo.png'
import codeInPlace from '../public/images/mentorship/stanford-code-in-place.jpeg'
import nycWomenInStem from '../public/images/mentorship/nyc-women-in-stem.png'
import Accordian from './accordian';
import Role from './role';
import InterestPill from './interestPill';



const Page = () => {
  return (
    <div className="font-roboto font-[100]">
        <div className="flex h-[85vh] text-black justify-center items-center">
            <div className="m-auto flex flex-col justify-center text-center">
                <Image
                    src={me}
                    alt="profile picture"
                    width={200}
                    className='m-auto'
                />
                <h1 className="text-center font-brittany text-t-mobile text-[5rem]">Hi! I&apos;m Deanna.</h1>
                <p className="text-[1.3rem] w-[90%] m-auto">
                    I'm a Software Engineer based in New York City.
                </p>
                <p className="text-[1.3rem] w-[90%] m-auto">
                    I'm passionate about building beautiful features that deliver meaningful impact.
                </p>
                
            </div>
        </div>

        <section className="flex gap-10 min-h-[16rem]">
            <h2 className='font-poppins text-t-mobile font-bold text-[2.2rem] mt-6'>Professional<br></br> Experience</h2>
            <div className='grow flex flex-col gap-2 justify-start'>
                {professionalExperience.map(({title, company, date, companyWebsite, responsibilities, location, keyTechnologies}) => (
                    <Accordian key={title} role={`${title} @ ${company}`} year={date} 
                        description={
                            <Role
                                isCondensed
                                companyWebsite={companyWebsite}
                                keyTechnologies={keyTechnologies}
                                location={location}
                                responsibilities={responsibilities}/>
                        } />

                ))}
            </div>       
        </section>

        <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 transition-all bg-white-transparent rounded-4xl">
            <div className="border-b-2 border-[rgba(255,255,255,.3)] md:border-b-0 md:border-r-2 flex flex-col gap-3">
                <h3 className='font-poppins text-t-mobile font-bold text-center text-[1.5rem]'>As a developer</h3>
                <div className='flex gap-1 text-center mx-auto flex-wrap px-3 py-4'>
                    {techSkills.map((skill) => (
                        <Chip key={skill} text={skill} />
                    ))}
                </div>
                <p>
                    <em>My passion is building things. Code is my tool.</em>
                </p>
                <p>
                    I excel at executing features at a high velocity and
                    I&apos;ve seen my work have immediate impact on business metrics.
                </p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className='font-poppins text-t-mobile font-bold text-center text-[1.5rem]'>As a teammate</h3>
                <div className='flex gap-1 text-center mx-auto flex-wrap px-3 py-4'>
                    {teammateSkills.map((skill) => (
                        <Chip key={skill} text={skill} />
                    ))}
                </div>
                <p><em>I love a good prank :)</em></p>
                <p>I think people do their best work when they are having fun! I try to encourage that with the positive attitude I bring to every team.</p>   
            </div>    
        </section>

        
        <section className="mt-20">
            <h2 className='font-brittany text-t-mobile text-[4rem]'>Get to know me</h2>
            <div className="p-10 flex flex-col gap-4 transition-all bg-white-transparent rounded-4xl">
                <div className='flex gap-6 items-center'>
                    <Image
                        src={meWithLion}
                        alt="Me and my cat"
                        width={150}
                    />
                    <div className='flex flex-col gap-4'>
                        <p> I stumbled into coding as a freshman at NYU, and I&apos;ve been hooked ever since. Computer science started as "just an elective", and soon became my major and passion.</p>
                        <p>I struggled a lot with self-doubt when I first started coding, and I love teaching others how to code by focusing on empathy and the creative aspects of development.</p>
                        <p>Please reach out if you need advice or just an ear to listen! <FontAwesomeIcon className="w-6 inline" color='red' icon={ faHeart } /></p>
                    </div>
                </div>

                <p className='font-poppins text-t-mobile font-bold'>I'm proud to have taught students with:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                    {mentoredAt.map((org) => (
                        <a href={org.link} target="_blank">
                            <Image
                                key={org.alt}
                                src={org.src}
                                alt={org.alt}
                                width={200}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>

        <section className='-mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-3 px-6'>
            {interests.map((interest) => (
                <InterestPill {...interest} />
            ))}
        </section>
        

        

        {/* <div className="w-full bg-[#DF72A9] text-white py-20 mt-10 text-[20px]">
            <section>
                <p> I stumbled into coding as a freshman at NYU, and I&apos;ve been hooked ever since. Computer science started as "just an elective", and soon became my major and passion.</p>
                <p>I struggled a lot with self-doubt when I first started coding, and I love teaching others how to code by focusing on empathy and the creative aspects of development.</p>
            </section>
        </div> */}

        {/* <h2 className='text-[2.8rem] font-higuen'>Things I've worked on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
            {projects.map(({ title, ...rest }) => (
                <Project key={title} title={title} {...rest} />
            ))}
        </div> */}
    </div>
  )
}

export default Page