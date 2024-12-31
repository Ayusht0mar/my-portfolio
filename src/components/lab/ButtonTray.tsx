"use client"
import { AnimatePresence, motion } from "framer-motion"
import { Link, Pen, Share, Trash, X } from "lucide-react";
import { useState } from "react";

const BottomTray = () => {

    const [trayOpen, setTrayOpen] = useState(false);

    return ( 
        <>
        <div className="flex justify-center">
            <button onClick={() => setTrayOpen(true)} className="border px-6 py-2 rounded border-[#242424]">Open Tray</button>
        </div>
        <AnimatePresence>
            {
                trayOpen &&
                <Tray closeTray={() => setTrayOpen(false)}/>
            }
        </AnimatePresence>
        </>
     );
}
 
export default BottomTray;

interface TrayProps {
    closeTray: () => void;
}

const Tray = ({closeTray} : TrayProps) => {
    return(
        <>
            <motion.div 
                className="absolute inset-0 bg-black/20" 
                initial={{opacity:0}} 
                animate={{opacity:1}} 
                exit={{opacity:0}}
                onClick={closeTray}
            />
            <motion.div 
                className="absolute bottom-4 inset-x-0 mx-auto w-[22rem] min-h-10 bg-white px-4 py-3 overflow-hidden rounded-xl"
                initial={{y:336}}
                animate={{y:0}}
                exit={{y:500}}
                transition={{duration: 0.2, ease: "easeIn"}}
                >
                    <button onClick={closeTray} className="absolute right-2 top-2"><X size={18} /></button>
                    Options
                    <ul className="flex flex-col mt-2 gap-2">
                        <li className="flex gap-2 items-center">
                            <Link size={16}/>
                            <p>Copy link</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Share size={16}/>
                            <p>Share</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Pen size={16}/>
                            <p>Edit</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <Trash size={16}/>
                            <p>Delete</p>
                        </li>
                    </ul>
            </motion.div>
        </>
    )
}
