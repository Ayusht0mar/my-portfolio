"use client"
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { Dribbble, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
    {
        label: "About"
    },
    {
        label: "Pricing"
    },
    {
        label: "Blog"
    },
    {
        label: "Contact"
    },
]

const ResponsiveNavbar = () => {


    return ( 
        <nav className="flex justify-between items-center p-8">
            <h1 className="font-bold text-2xl">Logo</h1>
            
            <ul className="hidden sm:flex gap-6">
                {navItems.map(({label}) => (
                    <Link href="/" key={label}>
                        <>{label}</>
                    </Link>
                ))}
            </ul>
            <NavMenu/>
        </nav>
     );
}
 
export default ResponsiveNavbar;


const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const path1Controls = useAnimation();
    const path2Controls = useAnimation();

    const path1Variants = {
        open: {d: "M3.06061 2.99999L21.0606 21"},
        closed: {d: "M0 8.5L24 8.5"},
    }

    const path2Variants = {
        open: {d: "M3.00006 21.0607L21 3.06064"},
        closed: {d: "M0 15.5L24 15.5"},
    }

    useEffect(() => {
        if (menuOpen) {
            path1Controls.start(path1Variants.open)
            path2Controls.start(path2Variants.open)
        } else {
            path1Controls.start(path1Variants.closed)
            path2Controls.start(path2Variants.closed)
        }
    }, [menuOpen, path1Controls, path1Variants.open, path1Variants.closed, path2Controls, path2Variants.open, path2Variants.closed]);


    return (
        <div className="relative block sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-black stroke-2 z-50">
                <svg width='24' height='24' viewBox="0 0 24 24">
                    <motion.path {...path1Variants.closed} animate={path1Controls} transition={{duration: 0.2}}/>
                    <motion.path {...path2Variants.closed} animate={path2Controls} transition={{duration: 0.2}}/>
                </svg>
            </button>
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0, opacity: 0}}
                    transition={{duration: 0.5, type:"spring"}}
                    className="absolute -top-4 -right-4 w-64 min-h-64 rounded-md bg-neutral-50 p-8 z-10 flex flex-col origin-top-right">
                    <ul className="flex flex-col gap-2 flex-1">
                        {navItems.map(({label}) => (
                            <Link href="/" key={label}>
                                <>{label}</>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex gap-4 mt-8">
                         <Github/>
                         <Dribbble/>
                         <Twitter/>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}