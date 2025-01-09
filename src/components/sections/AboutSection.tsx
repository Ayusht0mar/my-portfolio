import Image from "next/image";
import CopyToClipboardComponent from "../CopyToClipboard";

const AboutSection = () => {
    return ( 
        <div className="flex flex-col sticky top-16 gap-4">
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl font-bold">Ayush Tomar</h1>
                <p>Brings ideas to life with code! <br /> I make websites that don’t just work—they look good too. Right now, I’m working on <a href="https://www.doplo.ayushtomar.in/" target="_blanket" className="text-blue-500">Doplo</a>, a low-level UI library focused on accessibility, and <a href="https://www.inconcise.in/" target="_blanket" className="text-blue-500">Inconcise</a>, a ready-to-use component library built on top of it. Also, yes, I know how to center a div. </p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="px-3 py-1.5 border flex gap-2 items-center rounded border-[#242424]">
                    <Image src="/dot.svg" alt="Dot" width={8} height={8}/>
                    <p className="leading-5">Available</p>
                </div>
                <a className="leading-5" href="mailto:hi@ayushtomar.in">hi@ayushtomar.in</a>
                <CopyToClipboardComponent textToCopy="hi@ayushtomar.in"/>
               
            </div>
            <div className="border w-full rounded-xl bg-[#1C1C1C] border-[#242424] flex gap-2 items-end justify-between py-6 px-4">
                    <div className="space-y-1">
                        <h3 className="text-[#F5F5F5] font-bold">Inconcise</h3>
                        <p className="text-sm">Copy paste the most trending components in your websites within two clicks.</p>
                    </div>
                    <a href="https://www.inconcise.in/" className=" border-[#242424] border text-nowrap rounded-full px-4 py-1 text-sm hover:bg-black">
                        Browse Now
                    </a>
            </div>
            <div className="border w-full rounded-xl bg-[#1C1C1C] border-[#242424] flex gap-2 items-end justify-between py-6 px-4">
                    <p>Explore <a href="/lab" className="text-[#F5F5F5] text-sm">Lab</a> where I do my UI experiments.</p>
            </div>
        </div>
     );
}
 
export default AboutSection;