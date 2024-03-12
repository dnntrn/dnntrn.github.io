// app/template.tsx
"use client"
import { motion } from "framer-motion"
import { useEffect } from "react"

const variants = {
  hidden: { opacity: 0, y: "0", x: 0, top: 0 },
  enter: { opacity: 1, y: 0, x: 0, top: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // window.onload = function() {
            
        // };

        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0); // This will delay the execution by 100 milliseconds after the page fully loads
    }) 
    return (
        <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
        >
            <div className="pt-20">
                {children}
            </div>
        
        </motion.main>
    )
}