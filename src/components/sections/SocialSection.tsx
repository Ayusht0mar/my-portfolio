import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SocialSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Social</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/react.svg" alt="Inconcise" width={32} height={32}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@ayushtomar</p>
                        </div>
                    </div>
                    <a href="/" className="bg-black w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Follow</p>
                    </a>
                </div>
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/react.svg" alt="Inconcise" width={32} height={32}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@ayushtomar</p>
                        </div>
                    </div>
                    <a href="/" className="bg-black w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Connect</p>
                    </a>
                </div>
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/react.svg" alt="Inconcise" width={32} height={32}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@ayushtomar</p>
                        </div>
                    </div>
                    <a href="/" className="bg-black w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Follow</p>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default SocialSection;