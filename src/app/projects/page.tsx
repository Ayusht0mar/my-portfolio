import { Github, Globe, Home } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        label: "Airbnb Clone",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
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
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Clarity",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Linktree",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Airbnb Clone",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Airbnb Clone",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
    },
    {
        label: "Airbnb Clone",
        imgSrc: "/project/airbnb-cover.png",
        githublink: "/",
        livelink: "/"
    },
]

const ProjectsPage = () => {
    return ( 
        <div className="w-[90vw] mx-auto max-w-xl mt-5 md:mt-10 space-y-4">
            <div className="flex text-xl items-center gap-2 pl-2">
                <a href="/"><Home size={20}/></a>/ <p className="text-base">Projects</p>
            </div>
            <div className="grid  md:grid-cols-2 gap-5 pb-10">
                {projects.map(({ label, imgSrc, githublink, livelink }) => (
                        <div className= "rounded-xl border border-[#242424] p-2 space-y-2">
                            <Image src={imgSrc} alt={label} width={9999} height={9999} className="rounded-lg" />
                            <div className="flex justify-between items-center px-1">
                                <h2>{label}</h2>
                                <div className="flex gap-2">
                                    <a href={livelink}>
                                       <Globe size={18}/>
                                    </a>
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