import { Home } from "lucide-react";
import Image from "next/image";


const component = [
    {
        label: "Navbar",
        imgSrc: "/lab/componentscovers/navbar-cover.png",
        componentLink: "/lab/navbar/"
    },
    {
        label: "Responsive Navbar",
        imgSrc: "/lab/componentscovers/responsive-navbar-cover.png",
        componentLink: "/lab/responsivenavbar/"
    },
    {
        label: "Figma Style Toolbar",
        imgSrc: "/lab/componentscovers/figma-toolbar-cover.png",
        componentLink: "/lab/figmastyletoolbar/"
    },
    {
        label: "Button on Hover Card",
        imgSrc: "/lab/componentscovers/button-on-hover-card-cover.png",
        componentLink: "/lab/buttononhovercard/"
    },
    {
        label: "Tabs",
        imgSrc: "/lab/componentscovers/tabs-cover.png",
        componentLink: "/lab/tabs/"
    },
    {
        label: "Bottom Tray",
        imgSrc: "/lab/componentscovers/button-tray-cover.png",
        componentLink: "/lab/bottomtray/"
    },
]

const LabPage = () => {
    return ( 
        <div className="w-[80vw] mx-auto max-w-xl mt-10 space-y-4">
            <div className="flex text-xl items-center gap-2 pl-2">
                <a href="/"><Home size={20}/></a>/ <p className="text-base">Lab</p>
            </div>
            <div className="grid grid-cols-2 gap-5 pb-10">
                {component.map(({ label, imgSrc, componentLink }) => (
                        <a href={componentLink} key={label} className= "rounded-xl border border-[#242424] p-2 space-y-2">
                            <Image src={imgSrc} alt={label} width={9999} height={9999} className="rounded-lg" />
                            <h2 className="pl-1">{label}</h2>
                        </a>
                ))}
            </div>
        </div>
     );
}
 
export default LabPage;