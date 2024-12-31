"use client" 
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
    { id: 1, label: "Home", content: "Content for Home" },
    { id: 2, label: "About", content: "Content for About" },
    { id: 3, label: "Lab", content: "Content for Lab" },
];

const Tabs = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="w-fit mx-auto flex flex-col items-center">
            <div className="flex space-x-1">
                {tabs.map((tab) => (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${
                            activeTab === tab.id ? "" : "hover:opacity-50"
                        } relative rounded-full px-3 py-1.5 text-sm md:text-base font-medium text-white outline-2 outline-sky-400 focus-visible:outline`}
                    >
                        {activeTab === tab.id && (
                            <motion.div 
                                layoutId="active"
                                className="absolute inset-0 bg-blue-500"
                                style={{
                                    borderRadius: 9999,
                                }}
                                transition={{type: "spring", duration: 0.6}}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>
            {tabs.map((tab) => (
                <div key={tab.id}>
                    <div className={`${activeTab === tab.id ? "block" : "hidden"} text-white mt-4 border-gray-500 border p-4 rounded-md min-w-80 text-center`}>
                        {tab.content}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tabs;