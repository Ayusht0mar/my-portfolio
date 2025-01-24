import { Github, Globe, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        label: "Airbnb Clone",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "https://github.com/Ayusht0mar/airbnb-clone",
        livelink: "https://airbnb-clone-ayush.vercel.app/"
    },
    {
        label: "Miro Clone",
        imgSrc: "/project/miro-cover.png",
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Discord Clone",
        imgSrc: "/project/discord-cover.png",
        githublink: "https://github.com/Ayusht0mar/discord-clone",
        livelink: "https://discord-clone-ayush.vercel.app/"
    },
    {
        label: "Clarity",
        imgSrc: "/project/clarity-cover.png",
        githublink: "https://github.com/Ayusht0mar/clarity",
        livelink: "https://forclarity.vercel.app/"
    },
    {
        label: "Speaksy",
        imgSrc: "/project/speaksy-cover.png",
        githublink: "https://github.com/Ayusht0mar/speaksy",
        livelink: ""
    },
    {
        label: "Flux",
        imgSrc: "/project/flux-cover.png",
        githublink: "https://github.com/Ayusht0mar/flux",
        livelink: "https://flux-inconcise.vercel.app/"
    },
    // {
    //     label: "Linktree",
    //     imgSrc: "/project/airbnb-cover.png",
    //     githublink: "/",
    //     livelink: "/"
    // },
    // {
    //     label: "Hello",
    //     imgSrc: "/project/airbnb-cover.png",
    //     githublink: "/",
    //     livelink: "/"
    // },
]

const ProjectsPage = () => {
    return ( 
        <div className="w-[90vw] mx-auto max-w-xl mt-5 md:mt-10 space-y-4">
            <div className="flex text-xl items-center gap-2 pl-2">
                <Link href="/"><Home size={20}/></Link>/ <p className="text-base">Projects</p>
            </div>
            <div className="grid  md:grid-cols-2 gap-5 pb-10">
                {projects.map(({ label, imgSrc, githublink, livelink }) => (
                        <div key={label} className= "rounded-xl border border-[#242424] p-2 space-y-2">
                            <Image src={imgSrc} alt={label} width={9999} height={9999} className="rounded-lg" />
                            <div className="flex justify-between items-center px-1">
                                <h2>{label}</h2>
                                <div className="flex gap-2">

                                    {livelink &&
                                        <a href={livelink}>
                                        <Globe size={18}/>
                                        </a>
                                    }
                                    <a href={githublink}>
                                        <Github size={18}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
     );
}
 
export default ProjectsPage;