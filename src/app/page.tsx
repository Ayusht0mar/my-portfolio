import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SocialSection from "@/components/sections/SocialSection";
import TechStackSection from "@/components/sections/TechStackSection";
import VenturesSection from "@/components/sections/VenturesSection";

export default function Home() {
  return (
    <div className="mx-auto mt-16 w-[80vw] max-w-7xl grid gap-20 grid-cols-3">
        <div>
          <AboutSection/>
        </div>
        <div className="flex flex-col gap-[60px] col-span-2 mt-4">
          <ProjectsSection/>
          <TechStackSection/>
          <VenturesSection/>
          <SocialSection/>
        </div>
    </div>
 
  );
}
