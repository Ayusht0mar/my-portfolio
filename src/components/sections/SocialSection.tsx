import Image from "next/image";

const SocialSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Social</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/github.svg" alt="GitHub" width={48} height={48}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@ayusht0mar</p>
                        </div>
                    </div>
                    <a href="https://github.com/Ayusht0mar" target="_blank" className="bg-black text-white w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Follow</p>
                    </a>
                </div>
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/linkedin.svg" alt="Inconcise" width={48} height={48}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@ayusht0mar</p>
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/ayusht0mar/" className="bg-[#0077B5] text-white w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Connect</p>
                    </a>
                </div>
                <div className="aspect-square border border-[#242424] rounded-xl p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/tech/x.svg" alt="Inconcise" width={48} height={48}/>
                        <div>
                            <h3 className="text-[#9B9B9B] font-bold ">Ayush Tomar</h3>
                            <p className="text-sm">@justayushtomar</p>
                        </div>
                    </div>
                    <a href="https://x.com/justayushtomar" className="bg-black text-white w-fit py-1.5 px-[18px] rounded-full">
                        <p className="font-semibold">Follow</p>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default SocialSection;