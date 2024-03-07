import type { NextPage } from 'next'
import { projects } from '../copy'
import Project from '../project'

const Projects: NextPage = () => {
  return (
    <section>
        <h2 className='text-[4rem] font-brittany text-t-mobile text-center'>Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(({ title, ...rest }) => (
                <Project key={title} title={title} {...rest} />
            ))}
        </div>
    </section>
  )
}

export default Projects