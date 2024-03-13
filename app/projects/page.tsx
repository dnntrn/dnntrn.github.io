'use client'
import type { NextPage } from 'next'
import { projects } from '../copy'
import Project from '../components/project'
import { universialMotionVariant } from '../motion';
import { motion } from 'framer-motion';

const Projects: NextPage = () => {
  return (
    <section className='mt-10'>
        
        <h2 className='text-[4rem] font-brittany text-t-mobile text-center'>Work</h2>
        <div className="auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 mt-5">
            {projects.map(({ title, ...rest }, i) => (
                <motion.div
                  key={title}
                  variants={universialMotionVariant}
                  initial="hidden"
                  animate="enter"
                  transition={{ type: "linear", delay: i > 1 ? .4 * Math.round((i+1)/2) -.4 : 0}}
                  >
                    <Project title={title} {...rest} />
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Projects