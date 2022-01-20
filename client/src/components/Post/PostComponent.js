import React from "react";
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostComponent = () => {
    return (
        <div className=" w-[50%] min-w-[700px]  px-6 py-4 bg-white rounded-xl shadow-md">
            <UserDisplay />
            aawdawdwadaw
        </div>
    );
};

const UserDisplay = () => {
    return (
        <div className="w-full h-[65px] flex justify-between items-center ">
            <div className="flex items-center space-x-3">
                <img src="https://source.unsplash.com/ZHvM3XIOHoE" alt="" className="w-[45px] h-[45px] rounded-full" />
                <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-wide text-black ">Piyachai Kaewchum</span>
                    <span className="text-sm font-normal tracking-normal text-gray-300">12 April at 09.28PM</span>
                </div>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} className="text-gray-400 text-xl" />
        </div>
    );
};

export default PostComponent;
