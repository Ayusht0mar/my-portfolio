import ProjectCardGrid from "../ProjectCardsGrid";

const ProjectsSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-white">Projects</h2>
                <a href="/projects" className="hover:text-white">view more</a>
            </div>
            <ProjectCardGrid/>
        </div>
     );
}
 
export default ProjectsSection;