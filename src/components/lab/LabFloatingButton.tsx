import { Home } from "lucide-react";
import Link from "next/link";

interface LabFloatingButtonProps {

    sourceLink: string;

}

const LabFloatingButton = ({ sourceLink }: LabFloatingButtonProps) => {
    return ( 
        <div className="absolute p-2 rounded left-2 bottom-2 flex gap-2 text-sm items-center bg-black">
            <Link href="/">
                <Home size={18}/>            
            </Link>
            <Link href="/lab/" >Lab</Link>
            <Link href={sourceLink} target="_blank" className="text-white">Source</Link>

        </div>
     );
}
 
export default LabFloatingButton;