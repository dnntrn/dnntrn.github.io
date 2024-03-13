'use client'

import { motion } from "framer-motion"
import Intro from './home/Intro';
import ProfessionalExperience from './home/ProfessionalExperience';
import Skills from './home/Skills';
import Bio from './home/Bio';
import { universialMotionVariant } from "./motion";

const Page = () => {
    const homeComponents = [
        <Intro key="intro" />,
        <ProfessionalExperience key="experience" />,
        <Skills key="skills" />,
        <Bio key="bio" />
    ]
    return (
        <div className="font-roboto font-[100]">
            {homeComponents.map((hc, i) => (
                <motion.div
                    key={hc.key}
                    variants={universialMotionVariant}
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