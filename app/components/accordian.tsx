'use client'
import clsx from "clsx";
import { useState } from "react";

type Props = {
    role: string;
    year: string;
    description?: React.ReactNode;
}
const Accordian = ({ role, year, description }: Props) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggle = () => {
        setShowDescription((prevState) => !prevState);
    }
    return (
        <>
            <button className={clsx("bg-dusty-pink text-white text-left rounded-4xl duration-[400ms] ease-in-out transition-all relative p-4 flex justify-between items-center hover:bg-t-mobile hover:scale-[1.02]", showDescription && "bg-t-mobile")} onClick={toggle}>
                <div>{role}</div>
                <div className="flex gap-4 items-center">
                    <div>{year}</div>
                    <div className={clsx("text-[1.3rem] transition-all duration-200", showDescription && "rotate-45")}>+</div>
                </div>
            </button>
            
            <div className={clsx("transition-all overflow-hidden rounded-lg duration-[400ms] ease-in-out bg-white-transparent max-h-0", showDescription && "max-h-full")}>
                <div className="p-10">
                    {description}
                </div>
            </div>
            
        </>
        
    )
}

export default Accordian