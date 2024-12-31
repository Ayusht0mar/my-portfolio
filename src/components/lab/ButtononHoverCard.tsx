"use client"
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ButtononHoverCard = () => {
    const [showOverlay, setShowOverlay] = useState(true)

    return ( 
        <motion.div 
            className="relative overflow-hidden h-[240px] w-[240px] bg-slate-400 rounded-lg flex justify-center items-center mx-auto"
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div 
                        className="absolute inset-0 z-10 flex justify-center items-center"
                        initial= {{opacity: 0}}
                        animate= {{opacity: 1}}
                        exit= {{opacity: 0}}
                    >
                        <div className="absolute bg-black pointer-events-none h-full w-full opacity-50"></div>
                        <motion.h1 
                            className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 cursor-pointer"
                            initial={{ y: 10}}
                            animate={{ y: 0}}
                            exit={{ y: 10}}
                            >
                            <span>Explore Now</span>
                            <ArrowRight />
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <Image
                src="/lab/modernhouse.png"
                alt="Img"
                fill
            />
        </motion.div>
     );
}
 
export default ButtononHoverCard;