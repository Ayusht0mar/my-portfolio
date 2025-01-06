"use client"

import { Github, Globe } from "lucide-react";
import Image from "next/image";

const data = [
    { 
      imgSrc: "/project/airbnb-cover.png",
      label: "Airbnb Clone"
    },
    { imgSrc: "/project/miro-cover.png",
      label: "Miro Clone"
    },
    { imgSrc: "/project/discord-cover.png",
      label: "Discord Clone"
    },
];

const ProjectCardGrid = () => {
    return ( 
        <div className="w-full mx-auto">
            <div className="md:grid-container gap-2 space-y-2 md:space-y-0"
            >
              {data.map((data) => (
                <div
                  key={data.imgSrc}
                  className="grid-card relative"
                  >
                  <div
                                className={`relative overflow-hidden h-[240px] bg-slate-400 rounded-xl flex justify-center items-center`}
                  >
                    <Image src={data.imgSrc} alt="" fill className="object-cover" />
                  </div>
                  <p className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm rounded px-[9px] py-1.5">{data.label}</p>
                  <div className="absolute top-2 right-2 flex gap-2 text-white">
                      <a href="" className="bg-black bg-opacity-60 p-1 rounded"><Globe size={18}/></a>
                      <a href="" className="bg-black bg-opacity-60 p-1 rounded"><Github size={18}/></a>
                  </div>
                </div>
              ))}
            </div>
    </div>
     );
}
 
export default ProjectCardGrid;