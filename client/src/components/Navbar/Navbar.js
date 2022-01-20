import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    faHome,
    faTasks,
    faBook,
    faCommentDots,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@headlessui/react";

import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
    {
        name: "Home",
        path: "",
        icon: faHome,
    },
    {
        name: "Task",
        path: "",
        icon: faTasks,
    },
    {
        name: "Vocaburaly",
        path: "",
        icon: faBook,
        childs: [
            {
                name: "Add",
                path: "",
                icon: faBook,
            },
            {
                name: "Remove",
                path: "",
                icon: faBook,
            },
            {
                name: "Store",
                path: "",
                icon: faBook,
            },
        ],
    },
    {
        name: "Post",
        path: "post",
        icon: faCommentDots,
    },
];

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkWindowWidth = () => {
            if (window.innerWidth < 1024) {
                setIsMobile(true);
            } else setIsMobile(false);
        };
        checkWindowWidth();
        window.addEventListener("resize", checkWindowWidth);
        return () => {
            window.removeEventListener("resize", checkWindowWidth);
        };
    }, []);

    const Link = (path, name) => {
        return (
            <NavLink
                className="relative text-xl font-semibold text-gray-600 hover:text-gray-400 transition-all cursor-pointer "
                to={`/${path}`}
                key={name}
            >
                {name}
            </NavLink>
        );
    };

    const LinkDropdown = (link) => {
        const { name, path, childs } = link;
        return (
            <Menu key={name} as="div" className="">
                {({ open }) => (
                    <div
                        className={`relative px-1 py-1 ${
                            open && "bg-violet-600 rounded-t-xl"
                        }`}
                    >
                        <Menu.Button as="div">
                            <NavLink
                                className={`relative flex space-x-3 items-center text-xl px-3 py-1 font-semibold text-gray-600 hover:text-gray-400 transition-all cursor-pointer transition-none ${
                                    open && "bg-white rounded-xl"
                                }`}
                                to={`/${path}`}
                            >
                                <span>{name}</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className="text-sm"
                                />
                            </NavLink>
                        </Menu.Button>
                        <Menu.Items
                            as="div"
                            className="absolute w-full bg-violet-600 translate-x-[-50%] left-[50%] rounded-b-xl py-1 px-1"
                        >
                            {childs.map((e) => (
                                <Menu.Item
                                    key={e.name}
                                >
                                    {({ active }) => (
                                        <div className={`flex items-center justify-start space-x-2 px-2 py-1 text-white text-base font-semibold ${ active && 'bg-white text-slate-800 rounded-xl cursor-pointer' }`}>
                                            <FontAwesomeIcon
                                                icon={e.icon}
                                                className={`text-sm `}
                                            />
                                            <span>{e.name}</span>
                                        </div>
                                    )}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </div>
                )}
            </Menu>
        );
    };

    return (
        <div className="z-10 fixed top-0 right-0 flex space-x-16 items-center py-8 px-10 bg-white bg-opacity-90">
            {isMobile ? (
                <Dropdown links={links} />
            ) : (
                links.map((link) =>
                    link.childs
                        ? LinkDropdown(link)
                        : Link(link.path, link.name)
                )
            )}
        </div>
    );
};

export default Navbar;
