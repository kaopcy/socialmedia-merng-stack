import React from "react";

const HomeOverlay = ({ finishOverlay }) => {
    
    return finishOverlay ? (
        null
    ) : (
        <div className="flex flex-col absolute w-full h-full bg-transparent top-0 ">
            <div className="home-overlay relative w-full h-[33.333%] bg-white top-0"></div>
            <div className="home-overlay relative w-full h-[33.333%] bg-white top-0"></div>
            <div className="home-overlay relative w-full h-[33.333%] bg-white top-0"></div>
        </div>
    );
};

export default HomeOverlay;
