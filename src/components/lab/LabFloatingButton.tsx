import { Home } from "lucide-react";

interface LabFloatingButtonProps {

    sourceLink: string;

}

const LabFloatingButton = ({ sourceLink }: LabFloatingButtonProps) => {
    return ( 
        <div className="absolute p-2 rounded left-2 bottom-2 flex gap-2 text-sm items-center bg-black">
            <a href="/">
                <Home size={18}/>            
            </a>
            <a href="/lab/" >Lab</a>
            <a href={sourceLink} target="_blank" className="text-white">Source</a>

        </div>
     );
}
 
export default LabFloatingButton;