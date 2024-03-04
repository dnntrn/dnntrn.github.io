import clsx from 'clsx'
import Project from './project'
import { projects } from "./copy";

const Page = () => {
  return (
    <div className="font-roboto font-[100]">
        <div className="h-[100vh] flex p-10 text-black justify-center items-center">
            <div className="m-auto flex flex-col justify-center text-center">
                <h1 className=" text-center font-higuen text-[4.4rem] mb-4">Hi! I&apos;m Deanna.</h1>
                <p className="text-[1rem] w-[90%] m-auto">
                    I'm a Software Engineer based in New York City.
                </p>
                <p className="text-[1rem] w-[90%] m-auto">
                    I'm passionate about building beautiful features that deliver meaningful impact.
                </p>
            </div> 
        </div>
        <section>
            <h2 className='text-[2.5rem] font-higuen'>Projects</h2>
            <div className="flex flex-col gap-5">
            <div className="flex m-auto gap-4">
                {projects.slice(0, 3).map(({ title, ...rest }) => (
                    <Project key={title} title={title} {...rest} />
                ))}
            </div>   
            <div className="flex m-auto gap-4">
                {projects.slice(3).map(({ title, ...rest }) => (
                    <Project key={title} title={title} {...rest} />
                ))}
            </div>
            
            </div>
            
        </section>
    </div>
  )
}

export default Page