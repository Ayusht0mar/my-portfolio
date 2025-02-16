import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const VenturesSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Builds</h2>
            <div className="flex flex-col gap-2">
                    <a href="https://doplo.ayushtomar.in/" target="_blank" className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/doplologo.svg" alt="Doplo" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Doplo</h3>
                        <p className="text-sm">React UI library for building modern websites.</p>
                    </div>
                        <ArrowUpRight color="#9B9B9B" className="absolute right-2 top-2"/> 
                    </a>
                    <a href="https://www.inconcise.in/" target="_blank" className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/inconciselogo.svg" alt="Inconcise" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Inconcise</h3>
                        <p className="text-sm">Collection of ready to use components.</p>
                    </div>
                        <ArrowUpRight color="#9B9B9B" className="absolute right-2 top-2"/>
                    </a>
                    <a href="https://delta.ayushtomar.in/" target="_blank" className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/deltalogo.svg" alt="Inconcise" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Delta</h3>
                        <p className="text-sm">Collection of personal softwares.</p>
                    </div>
                        <ArrowUpRight color="#9B9B9B" className="absolute right-2 top-2"/>
                    </a>
                    <a href="https://shortcuts.vercel.app/" target="_blank" className="relative border border-[#242424] rounded-xl px-6 py-8 flex gap-6">
                    <Image src="/shortcutlogo.svg" alt="Shortcut" width={32} height={32}/>
                    <div>
                        <h3 className="text-[#9B9B9B] font-bold ">Shortcuts</h3>
                        <p className="text-sm">Every Tool&apos;s shortcuts at one place.</p>
                    </div>
                        <ArrowUpRight color="#9B9B9B" className="absolute right-2 top-2"/>
                    </a>
            </div>
        </div>
     );
}
 
export default VenturesSection;