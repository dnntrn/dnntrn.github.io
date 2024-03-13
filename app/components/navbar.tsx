"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
    let pathname = usePathname() || "/";
    const [scrollY, setScrollY] = useState(0);

    const navItems = [
        {
            path: "/",
            name: "About",
        },
        {
            path: "/work",
            name: "Work",
        },
        {
            path: "/resume",
            name: "Resume",
        },
    ];

    const onScroll = useCallback(() => {
        const { scrollY } = window;
        console.log("yOffset", "scrollY", scrollY);
        setScrollY(scrollY);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
         window.removeEventListener("scroll", onScroll);
      }
    }, [onScroll]);

    return (
        <nav>
            <div className={clsx(scrollY > 50 ? "bg-[#F2D0D4]" : "bg-transparent", "transition-all p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 -ml-[115px] top-4 z-[100]")}>
                <ul className="flex saturate-150 justify-between w-full list-none">
                    {navItems.map(({name, path}) => {
                        return (
                            <li className="py-1" key={path}>
                                <Link 
                                    className={`py-2 px-4 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in`}
                                    href={path}>
                                        {name}
                                        {path === pathname && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-full rounded-4xl bg-white-transparent-3 -z-10"
                                                layoutId="navbar"
                                                aria-hidden="true"
                                                style={{
                                                    width: "100%",
                                                }}
                                                transition={{
                                                    bounce: 0.25,
                                                    stiffness: 130,
                                                    damping: 9,
                                                    duration: 0.4,
                                                }}
                                            />
                                        )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            
        </nav>
    );
};

export default Navbar;



