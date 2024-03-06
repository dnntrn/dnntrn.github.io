"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion"
import { clsx } from 'clsx';

const Navbar = () => {
    const itemVariants: Variants = {
        open: {
            x: "-225px",
            y: "-125px",
            width: "1000px",
            height: "1000px",
            backgroundColor: '#C45B52',
            transition: {type: "spring", stiffness: 100 }
        },
        closed: { 
            x: "25px",
            y: "25px",
            width: "100px",
            height: "100px",
            transition: { duration: 0.2 }
        }
      };
      
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => {
        setShowNav((prevState) => !prevState);
    }
    return (
        <nav>
            {/* <motion.button
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={itemVariants}
                    animate={showNav ? "open" : "closed"}
                    className="rounded-[50%] top-[25px] left-[25px] fixed bg-white shadow-[0_1rem_3rem_rgba(0,0,0,.10)]"
                    onClick={handleClick}
                >
                    {!showNav && <FontAwesomeIcon color="black" icon={ faBars } className="w-20" />}
                    {showNav && (
                        <ul className=" gap-x-6 text-white m-auto z-10">
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <p>Resume</p>
                            </li>
                            <li>
                                <p>Projects</p>
                            </li>
                        </ul>
                    )}   
            </motion.button> */}

            <div className="w-90 p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 ml-[-180px] top-4 z-[100] bg-white-transparent">
                <ul className="flex saturate-150 justify-between w-full">
                    <li className="py-1 px-4">
                        About
                    </li>
                    <li className="py-1 px-4">
                        Projects
                    </li>
                    <li className="py-1 px-4">
                        Personal
                    </li>
                    <li className="py-1 px-4">
                        Resume
                    </li>
                </ul>
            </div>
            
            
        </nav>
    );
};

export default Navbar;



