'use client'

import { motion } from "framer-motion"
import Intro from './home/Intro';
import ProfessionalExperience from './home/ProfessionalExperience';
import Skills from './home/Skills';
import Bio from './home/Bio';



const Page = () => {
    const variants = {
        hidden: { opacity: 0, y: -20, x: 0 },
        enter: { opacity: 1, y: 0, x: 0 },
    }
    const homeComponents = [
        <Intro />,
        <ProfessionalExperience />,
        <Skills />,
        <Bio />
    ]
    return (
        <div className="font-roboto font-[100]">
            {homeComponents.map((hc, i) => (
                <motion.div
                    key={hc.key}
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: "linear", delay: .4 * i }}
                    >
                    {hc}
                </motion.div>
            ))}
        </div>
    )
}

export default Page