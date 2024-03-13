'use client'
import type { NextPage } from 'next'
import { ProjectIds, projects, projectsToContentMap } from '../copy'
import ProjectPreview from './projectPreview'
import { universialMotionVariant } from '../motion';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useCallback, useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Work: NextPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // const [selectedProject, setSelectedProject] = useState<React.ReactNode>();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  let selectedProject = useSearchParams().get("project") as ProjectIds;


  return (
    <div className='mt-10'>
        
        

      {/* <AnimatePresence>
          {!selectedProject && (
              <>
                <h2 className='text-[4rem] font-brittany text-t-mobile text-center'>Work</h2>
                <motion.div variants={universialMotionVariant} exit="exit" className="auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 mt-5">
                  {projects.map(({ title, details, ...rest }, i) => (
                      <motion.div
                        key={title}
                        variants={universialMotionVariant}
                        initial="hidden"
                        animate="enter"
                        transition={{ type: "linear", delay: i > 1 ? .4 * Math.round((i+1)/2) -.4 : 0}}
                        >
                          <ProjectPreview onClick={() => setSelectedProject(details)} title={title} {...rest} />
                      </motion.div>
                  ))}
                </motion.div>
              </>
          )}
        </AnimatePresence> */}

        <AnimatePresence>
          {!selectedProject && (
              <motion.section variants={universialMotionVariant} exit="exit">
                <h1 className='text-[4rem] font-brittany text-t-mobile text-center'>Work</h1>
                <div className="auto-rows-max grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 mt-5">
                  {projects.map(({ title, id, ...rest }, i) => (
                      <motion.div
                        key={title}
                        variants={universialMotionVariant}
                        initial="hidden"
                        animate="enter"
                        transition={{ type: "linear", delay: i > 1 ? .4 * Math.round((i+1)/2) -.4 : 0}}
                        >
                          <ProjectPreview onClick={() =>  router.push(pathname + '?' + createQueryString('project', `${id}`))} title={title} {...rest} />
                      </motion.div>
                  ))}
                </div>
              </motion.section>
          )}
        </AnimatePresence>
        

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              variants={universialMotionVariant}
              initial="hidden"
              animate="enter"
              transition={{ type: "linear", delay: .5}}>
              {projectsToContentMap.get(selectedProject)}
            </motion.div>
          )}
        </AnimatePresence>

        
    </div>
  )
}

export default Work