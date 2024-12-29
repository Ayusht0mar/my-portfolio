import { Copy, Dot } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
    return ( 
        <div className="flex flex-col sticky top-16 gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl font-bold">Ayush Tomar</h1>
                <p>Web Developer with a strong foundation in software engineering creating digital products. Passionate about interface design and attention to detail, striving to create great experiences.</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="px-3 py-1.5 border flex gap-2 items-center rounded border-[#242424]">
                    <Image src="/dot.svg" alt="Dot" width={8} height={8}/>
                    <p className="leading-5">Available</p>
                </div>
                <p className="leading-5">hi@ayushtomar.in</p>
                <Copy size={16}/>
            </div>
            <div className="border w-full h-24 rounded-xl bg-[#1C1C1C] border-[#242424]">

            </div>
        </div>
     );
}
 
export default AboutSection;