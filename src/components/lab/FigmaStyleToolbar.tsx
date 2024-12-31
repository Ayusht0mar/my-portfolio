"use client"
import { AnimatePresence, motion} from "framer-motion"
import { Switch } from "@/components/ui/Switch";
import { FilePen, Frame, MessageSquare, MousePointer2, PenTool, Ruler, Sparkles, Square, Type } from "lucide-react";
import { useState } from "react";

const FigmaStyleToolbar = () => {

    const [isDevMode, setIsDevMode] = useState(false);

    return ( 
        <div className="min-h-screen flex justify-center items-center">
            <motion.div layout className="relative px-3 py-2 bg-neutral-50 rounded-md flex gap-3 items-center shadow-md overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                    {isDevMode ? (
                        <motion.div 
                            className="flex gap-6 items-center"
                            initial={{y:100}}
                            animate={{y:0}}
                            exit={{y:100}}
                            transition={{type: "spring", bounce: 0}}
                            key="dev-toolbar"
                            layout
                        >
                            <MousePointer2/>
                            <Ruler/>
                            <FilePen/>
                            <MessageSquare/>
                        </motion.div>
                        ) : (
                        <motion.div 
                            className="flex gap-6 items-center"
                            initial={{y: -100}}
                            animate={{y:0}}
                            exit={{y: -100}}
                            transition={{type: "spring", bounce: 0}}
                            key="design-toolbar"
                            layout
                        >
                            <MousePointer2/>
                            <Frame/>
                            <Square/>
                            <PenTool/>
                            <Type/>
                            <MessageSquare/>
                            <Sparkles/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div layout className="w-0.5 self-stretch bg-neutral-200 -my-2 "/>
                <motion.div layout className="flex items-center" >
                    <Switch checked={isDevMode} onCheckedChange={setIsDevMode}/>
                </motion.div>
            </motion.div>
        </div>
     );
}
 
export default FigmaStyleToolbar;