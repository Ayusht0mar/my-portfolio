import Image from "next/image";

interface TechButtonProps {
    label: string;
    imgSrc: string
}

const TechButton = ({
    label,
    imgSrc
}: TechButtonProps) => {
    return ( 
        <div className="group flex flex-col items-center border border-[#242424] py-1.5 px-3 rounded w-fit">
            <h4 className="text-[15px]">{label}</h4>
            <div className="bg-[#1C1C1C] border border-[#242424] min-h-20 min-w-20 mt-8 rounded-md overflow-hidden hidden group-hover:block absolute">
                <Image src={imgSrc} alt={label} width={80} height={80} className="p-1.5 hiddenm"/>

            </div>
        </div>
     );
}
 
export default TechButton;