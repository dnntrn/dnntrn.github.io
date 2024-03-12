import { teammateSkills, techSkills } from "../copy";
import Chip from "../components/chip";

const Skills = () => {
  return (
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
  )
}

export default Skills