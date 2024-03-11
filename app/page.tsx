'use client'
import Chip from './chip'
import { interests, mentoredAt, professionalExperience, teammateSkills, techSkills } from "./copy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Accordian from './accordian';
import Role from './role';
import InterestPill from './interestPill';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

const Page = () => {
  return (
    <div>
        <ShaderGradientCanvas
            style={{
                position: 'absolute',
                top: 0,
                pointerEvents: "none",
                zIndex: -1
                
            }}
        >
            <ShaderGradient
                control='query'
                urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=0&cDistance=1.9&cPolarAngle=90&cameraZoom=1&color1=%23fcd9dc&color2=%23f5c1c5&color3=%23fcd9dc&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.5&positionX=0&positionY=2&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=90&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.3&uStrength=5.4&uTime=0&wireframe=false"
            />
        </ShaderGradientCanvas>
        <div className="font-roboto font-[100]">
            <div className="flex h-[85vh] text-black justify-center items-center">
                <div className="m-auto flex flex-col justify-center text-center">
                    <Image
                        src="/images/me.png"
                        alt="profile picture"
                        width={200}
                        height={200}
                        className='m-auto'
                    />
                    <h1 className="text-center font-brittany text-t-mobile text-[4.5rem] md:text-[5rem]">Hi! I&apos;m Deanna.</h1>
                    <p className="text-[1.1rem] md:text-[1.3rem] w-[90%] m-auto">
                        I&apos;m a Software Engineer based in New York City.
                    </p>
                    <p className="text-[1.1rem] md:text-[1.3rem] w-[90%] m-auto">
                        I&apos;m passionate about building beautiful features that deliver meaningful impact.
                    </p>
                    
                </div>
            </div>

            <section className="flex flex-col md:flex-row gap-10 min-h-[16rem]">
                <h2 className='text-center font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] mt-6'>Professional<br className="hidden md:block"></br> Experience</h2>
                <div className='grow flex flex-col gap-2 justify-start'>
                    {professionalExperience.map(({title, company, years, companyWebsite, responsibilities, location, keyTechnologies}) => (
                        <Accordian key={title} role={`${title} @ ${company}`} year={years} 
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
                <div className="border-b-2 border-white-transparent-3 md:border-b-0 md:border-r-2 flex flex-col gap-3 pb-6 md:px-4">
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
                <div className='flex flex-col gap-3 pb-6 md:px-4'>
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
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <Image
                            src="/images/meWithLion.png"

                            alt="Me and my cat"
                            width={150}
                            height={150}
                        />
                        <div className='flex flex-col gap-4'>
                            <p> I stumbled into coding as a freshman at NYU, and I&apos;ve been hooked ever since. Computer science started as &quot;just an elective&quot;, and soon became my major and passion.</p>
                            <p>I struggled a lot with self-doubt when I first started coding, and I love teaching others how to code by focusing on empathy and the creative aspects of development.</p>
                            <p>Please reach out if you need advice or just an ear to listen! <FontAwesomeIcon className="w-6 inline" color='red' icon={ faHeart } /></p>
                        </div>
                    </div>

                    <p className='font-poppins text-t-mobile font-bold mt-4'>I&apos;m proud to have taught students with:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                        {mentoredAt.map((org) => (
                            <a key={org.link} href={org.link} target="_blank">
                                <Image
                                    src={org.src}
                                    alt={org.alt}
                                    width={200}
                                    height={200}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className='-mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-3 md:px-6'>
                {interests.map((interest) => (
                    <InterestPill key={interest.title} {...interest} />
                ))}
            </section>
        </div>
    </div>
  )
}

export default Page