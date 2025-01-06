import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SocialSection from "@/components/sections/SocialSection";
import TechStackSection from "@/components/sections/TechStackSection";
import VenturesSection from "@/components/sections/VenturesSection";

export default function Home() {
  return (
    <div className="mx-auto mt-16 w-[90vw] lg:w-[80vw] max-w-7xl grid gap-10 lg:grid-cols-3">
        <div>
          <AboutSection/>
        </div>
        <div className="flex flex-col gap-[60px] lg:col-span-2 mt-2 pb-20">
          <ProjectsSection/>
          <TechStackSection/>
          <VenturesSection/>
          <SocialSection/>
        </div>
    </div>
 
  );
}
