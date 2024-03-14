import type { NextPage } from 'next'
import Image from 'next/image';
import Chip from '../components/chip';

const DesignSystem: NextPage = () => {
  return (
    <div>
        <h1 className='font-poppins text-t-mobile font-bold text-[1.5rem] md:text-[2.2rem] text-center mt-10 md:mt-20 mb-14'>Design System</h1>
        <div className="flex flex-col gap-14">
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Background</h2>
                <p>
                    This project was built for Season Health. Season was using Material UI to build most of their 
                    components. We wanted a more customized experience and decided to create a custom reusuable UI library.
                </p>
            </section>

            <section className='text-center'>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2 text-left'>Some Components I built:</h2>
                <p className="caption my-6">Autocomplete</p>
                <Image
                    src="/images/projects/galley.png"
                    alt="autocomplete component"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[30%] h-auto mx-auto my-6"
                />

                <p className="caption my-6">All input types</p>
                <Image
                    src="/images/projects/input.png"
                    alt="autocomplete component"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full md:w-[30%] h-auto mx-auto my-6"
                />
                <p>These were also hooked up to Formik to allow for use in our Formik forms</p>
                <p className="caption my-6">Accordian</p>
                <video width="320" height="240" controls preload="none" className='mx-auto'>
                    <source src="/videos/projects/accordian.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
            
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Difficult Tasks</h2>
                <p>
                    The existing MUI components were heavily used throughout our app. While I created new custom components, I had to replace these old components.
                    This wasn&apos;t always straightforward depending on how these old components were used or styled. It often required me to refactor major parts of our codebase.
                </p>
            </section>
    
            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Impact</h2>
                <p>
                    This project resulted in faster delivery times from our engineering team since our engineers now had a library of reusable components to draw from.
                    It also reduced the amount of communication that the frontend team needed to do with our designer since these components were pre-built.
                    Finally, it allowed our backend engineers to work on the frontend of our admin app without much assistance since the components already existed.
                </p>
            </section>

            <section>
                <h2 className='font-poppins uppercase text-t-mobile text-[1rem] md:text-[1.3rem] font-bold mb-2'>Tech used</h2>
                <div className="flex gap-2 flex-wrap">
                    <Chip text='React' />
                    <Chip text='Typescript' />
                    <Chip text='Formik' />
                </div>
            </section>
        </div>
        
    </div>
  )
}

export default DesignSystem