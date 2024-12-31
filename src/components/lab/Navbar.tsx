"use client"
import { Dispatch, SetStateAction, useRef, useState } from "react";
import {motion} from "framer-motion"

const Navbar = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return ( 
        <div className="grid h-screen place-content-center bg-neutral-100">
            <ul 
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
                <Tab setPosition={setPosition}>Home</Tab>
                <Tab setPosition={setPosition}>Pricing</Tab>
                <Tab setPosition={setPosition}>Features</Tab>
                <Tab setPosition={setPosition}>Docs</Tab>
                <Tab setPosition={setPosition}>Blog</Tab>

                <Cursor position={position}/>
            </ul>
        </div>
     );
}
 
export default Navbar;

type PositionState = {
    left: number;
    width: number;
    opacity: number;
};

type TabProps = {
    children: string;
    setPosition: Dispatch<SetStateAction<PositionState>>;
};

const Tab = ({children, setPosition} : TabProps) => {

    const ref = useRef<HTMLLIElement | null>(null);

    return (
        <li 
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;

                const {width} = ref.current.getBoundingClientRect();

                setPosition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                })
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base">
                {children}
        </li>
    )
}

type CursorProps = {
    position: {
        left: number;
        width: number;
        opacity: number;
    };}

const Cursor = ({position} : CursorProps) => {
    return <motion.li 
                animate= {position}
                className="absolute z-0 h-8 w-36 rounded-full bg-black md:h-12 opacity-0" />;
}