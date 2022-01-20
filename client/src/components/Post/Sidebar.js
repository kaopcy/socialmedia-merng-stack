import React, { useState } from "react";
import PropTypes from "prop-types";
import { faChartArea , faChartBar } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import './Sidebar.css'

const Sidebar = ({}) => {
    const [user, setUser] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        createdAt: "",
    });

    const links = [
        {
            name: "Feed",
            icon: faChartArea,
            to: 'feed',
        },
        {
            name: "Friends",
            icon: faChartBar,
            to: 'friend',
        },
        {
            name: "Event",
            icon: faChartArea,
            to: 'event',
        },
    ];

    return (
        <div className="w-[300px] h-screen bg-white flex flex-col items-center space-y-4 ">
            <div className="h-[100px]"></div>
            <UserDisplay />
            <div className="flex flex-col w-full self-start space-y-1">
                {links.map((link) => (
                    <Link link={link} />
                ))}
            </div>
        </div>
    );
};

const UserDisplay = () => {
    return (
        <div className="w-[90%] py-2 px-2 rounded-2xl flex space-x-4 justify-start items-center border bg-slate-50">
            <img
                className="w-[60px] h-[60px] rounded-full "
                src="https://source.unsplash.com/ZHvM3XIOHoE"
                alt=""
            />
            <div className="flex flex-col items-start space-y-1">
                <span className="text-base font-semibold text-black leading-none tracking-normal">
                    Piyachai Kaewchum
                </span>
                <span className="text-xs font-normal text-gray-400 ">
                    @kaopcy
                </span>
            </div>
        </div>
    );
};

const Link = ({ link:{ name , icon , to }  })=>{
    return (
        <NavLink to={to} className="nav w-full flex items-center pl-6 py-2 space-x-4 text-lg font-bold text-gray-800">
            <FontAwesomeIcon icon={icon} className="text-base text-gray-400" />
            <span >{ name }</span>
        </NavLink>
    )
}

export default Sidebar;

Sidebar.proptype = {
    user: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        firstname: PropTypes.string,
        lastname: PropTypes.string,
    }),
};
