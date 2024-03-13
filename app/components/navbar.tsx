import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="w-90 p-[10px] font-roboto font-[100] text-black rounded-4xl mb-12 fixed left-1/2 -ml-[140px] top-4 z-[100] bg-white-transparent">
                <ul className="flex saturate-150 justify-between w-full">
                    <li className="py-1 px-4">
                        <Link href="/">
                            About
                        </Link>
                    </li>
                    <li className="py-1 px-4">
                        <Link href="/work">
                            Work
                        </Link>
                    </li>
                    <li className="py-1 px-4">
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
            
            
        </nav>
    );
};

export default Navbar;



