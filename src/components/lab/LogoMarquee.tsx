"use client"
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import {motion} from "framer-motion";
import Image from "next/image";


const LogoMarquee = () => {

    const images = [
        "/lab/logos/apple.svg",
        "/lab/logos/discord.svg",
        "/lab/logos/facebook.svg",
        "/lab/logos/figma.svg",
        "/lab/logos/google.svg",
        "/lab/logos/instagram.svg",
        "/lab/logos/linkedin.svg",
        "/lab/logos/spotify.svg",
        "/lab/logos/tictok.svg",
        "/lab/logos/twitch.svg",
        "/lab/logos/whatsapp.svg",
        "/lab/logos/x.svg",
        "/lab/logos/youtube.svg",
    ]

    const [ref, {width}] = useMeasure();

    const xTraslation = useMotionValue(0);
    
    useEffect(() => {
        const FinalPosition = -width/3 - 8;

        const controls = animate(xTraslation, [0,FinalPosition], {
            ease: 'linear',
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay:0
        });

        return controls.stop
    }, [xTraslation, width])

    return ( 
        <div className="relative py-2 mx-auto h-60 overflow-hidden">
            <motion.div className="absolute left-0 top-4 flex gap-8" ref={ref} style={{x: xTraslation}}>
                {[...images, ...images, ...images].map((item, idx) => (
                    <Card key={idx} image={item} />
                ))}

            </motion.div>

        </div>
     );
}
 
export default LogoMarquee;


interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({image}) => {
    return ( 
        <motion.div className="relative overflow-hidden size-12 rounded-xl flex justify-center items-center">
            <Image
                src={image}
                alt={image}
                fill 
                style={{objectFit:'cover'}}
            />
        </motion.div>
     );
}
 