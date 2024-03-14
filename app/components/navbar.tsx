"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
    const pathname = usePathname() || "/";
    const [scrollY, setScrollY] = useState(0);
    // const [hoveredPath, setHoveredPath] = useState<string>();
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
        setScrollY(scrollY);
    }, []);
  
    useEffect(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
         window.removeEventListener("scroll", onScroll);
      }
    }, [onScroll]);

    return (
        <nav className="print:hidden">
            <div className={clsx(scrollY > 50 ? "bg-[#F2D0D4]" : "bg-transparent", "transition-all p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 -ml-[115px] top-4 z-[100]")}>
                <ul className="flex saturate-150 justify-between w-full list-none">
                    {navItems.map(({name, path}) => {
                        const isActive = path === pathname;
                        return (
                            <li className={clsx(isActive && "bg-dusty-pink", "hover:bg-white-transparent-3 py-1 relative rounded-4xl")} key={path}>
                                <Link 
                                    className={clsx("!no-underline py-2 px-4 rounded-md text-sm lg:text-base relative")}
                                    href={path}>
                                        {name}
                                </Link>
                                {/* {path === hoveredPath && (
                                    <motion.div
                                        className="absolute w-fit top-0 h-full rounded-4xl bg-white-transparent-3 -z-10"
                                        layoutId="navbar"
                                        aria-hidden="true"
                                        style={{
                                            width: "100%",
                                        }}
                                        transition={{
                                            bounce: 0.25,
                                            stiffness: 130,
                                            damping: 9,
                                            duration: 0.3,
                                        }}
                                    />
                                )} */}
                            </li>
                            
                        )
                    })}
                </ul>
            </div>   
        </nav>
    );
};

export default Navbar;



