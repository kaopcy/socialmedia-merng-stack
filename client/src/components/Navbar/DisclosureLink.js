import React from "react";
import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DisclosureLink = ({ link }) => {
    const { name, icon, childs } = link;
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as="div"
                        className={`text-[#fff] text-xl font-medium flex space-x-2 items-center justify-between w-full py-2 px-2  ${"hover:bg-[#fff] hover:text-[#303030] rounded-lg"}  ${
                            open && "bg-white text-[#303030] rounded-b-none"
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon
                                icon={icon}
                                className={`text-sm ${
                                    open && "text-[#e48aff]"
                                }`}
                            />
                            <span>{name}</span>
                        </div>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-sm"
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel
                        as="div"
                        className=" text-base bg-white w-full"
                    >
                        {childs.map((child) => (
                            <NavLink
                                className={`text-[#444444] font-medium flex space-x-2 items-center w-full py-2 px-2 `}
                                to={child.path}
                                key={child.name}
                            >
                                <FontAwesomeIcon
                                    icon={child.icon}
                                    className="text-xs text-purple-500"
                                />
                                <span>{child.name}</span>
                            </NavLink>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default DisclosureLink;
