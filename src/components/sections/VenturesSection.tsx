import Image from "next/image";
import TechButton from "./TechButton";
import { ArrowUpRight } from "lucide-react";

const VenturesSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Ventures</h2>
            <div className="flex flex-col gap-2">
                <div className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/inconciselogo.svg" alt="Inconcise" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Inconcise</h3>
                        <p className="text-sm">Building Blocks for your Next project.</p>
                    </div>
                    <a href="https://www.inconcise.in/" target="_blank" className="absolute right-2 top-2">
                        <ArrowUpRight color="#9B9B9B"/> 
                    </a>
                </div>
                <div className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/shortcutlogo.svg" alt="Shortcut" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Shortcuts</h3>
                        <p className="text-sm">Every Tool's shortcuts at one place.</p>
                    </div>
                    <a href="https://shortcuts.vercel.app/" target="_blank" className="absolute right-2 top-2">
                        <ArrowUpRight color="#9B9B9B"/> 
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default VenturesSection;