import TechButton from "./TechButton";

const TechStackSection = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-white">Tech Stack</h2>
            <div className="border border-[#242424] rounded-xl px-3 py-4 grid gap-4 lg:gap-0 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm">Frontend</h3>
                    <div className="flex flex-wrap gap-1.5">
                        <TechButton label="HTML" imgSrc="/tech/html.svg"/>
                        <TechButton label="CSS" imgSrc="/tech/css.svg"/>
                        <TechButton label="JavaScript" imgSrc="/tech/js.svg"/>
                        <TechButton label="ReactJs" imgSrc="/tech/react.svg"/>
                        <TechButton label="NextJs" imgSrc="/tech/next.webp"/>
                        <TechButton label="TypeScript" imgSrc="/tech/typescript.svg"/>
                        <TechButton label="Tailwind" imgSrc="/tech/tailwindcss.svg"/>
                        <TechButton label="Motion" imgSrc="/tech/motion.svg"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm">Backend</h3>
                    <div className="flex flex-wrap gap-1.5">
                        <TechButton label="NodeJs" imgSrc="/tech/node_js.svg"/>
                        <TechButton label="BunJs" imgSrc="/tech/bunjs.svg"/>
                        <TechButton label="AuthJs" imgSrc="/tech/nextauth.svg"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm">Database</h3>
                    <div className="flex flex-wrap gap-1.5">
                        <TechButton label="MongoDB" imgSrc="/tech/mongodb.svg"/>
                        <TechButton label="Neon" imgSrc="/tech/neon.svg"/>
                        <TechButton label="MySQL" imgSrc="/tech/mysql.svg"/>
                        <TechButton label="PostgreSQL" imgSrc="/tech/postgresql.svg"/>
                        <TechButton label="Supabase" imgSrc="/tech/supabase.svg"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm">Design</h3>
                    <div className="flex flex-wrap gap-1.5">
                        <TechButton label="Framer" imgSrc="/tech/framer.png"/>
                        <TechButton label="Figma" imgSrc="/tech/figma.svg"/>
                        <TechButton label="ProtoPie" imgSrc="/tech/protopie.png"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TechStackSection;