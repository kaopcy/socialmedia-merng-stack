import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Link = (path, pathname) => {
        return (
            <NavLink
                className="relative text-xl font-semibold text-gray-600 hover:text-gray-400 transition-all cursor-pointer "
                to={`/${path}`}
            >
                {pathname}
            </NavLink>
        );
    };

    return (
        <div className="z-10 fixed top-0 right-0 flex space-x-16 py-8 px-10 bg-white bg-opacity-90">
            {Link("", "Home")}
            {Link("", "Task")}
            {Link("", "Contract")}
            {Link("", "Vocaburaly")}
        </div>
    );
};

export default Navbar;
