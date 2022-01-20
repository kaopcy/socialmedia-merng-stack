import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import DisclosureLink from "./DisclosureLink";

const HamburgerIcon = ({ active }) => {
    return (
        <div className="relative w-[30px] h-[36px] flex flex-col justify-center overflow-hidden">
            <span
                className="absolute w-full h-[3px] translate-y-3 transition-all rounded-md"
                style={{
                    transform: active ? "rotate(45deg)" : "",
                    backgroundColor: active ? "red" : "#303030",
                }}
            ></span>
            <span
                className="absolute w-full h-[3px] bg-[#303030] transition-all rounded-md"
                style={{
                    transform: active ? "translateX(100%)" : "",
                    backgroundColor: active ? "red" : "#303030",
                }}
            ></span>
            <span
                className="absolute w-full h-[3px] bg-[#303030] -translate-y-3 transition-all rounded-md"
                style={{
                    transform: active ? "rotate(-45deg)" : "",
                    backgroundColor: active ? "red" : "#303030",
                }}
            ></span>
        </div>
    );
};

const Dropdown = ({ links }) => {

    const DropdownLink = ({ name, path, icon, childs }) => (
        <Menu.Item key={name}>
            {!childs
                ? ({ active }) => (
                      <NavLink
                          className={`text-[#fff] ${
                              active && "bg-[#fff] text-[#303030] rounded-lg"
                          } text-xl font-medium flex space-x-2 items-center w-full py-2 px-2`}
                          to={path}
                      >
                          <FontAwesomeIcon icon={icon} className="text-sm" />
                          <span>{name}</span>
                      </NavLink>
                  )
                : <DisclosureLink link={{name, icon, childs}} />}
        </Menu.Item>
    );
    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <Menu.Button>
                        <HamburgerIcon active={open} />
                    </Menu.Button>
                    <Transition>
                        <Transition.Child
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-[80%] opacity-0"
                            leave="transition duration-300 ease-out"
                            leaveTo="transform scale-[80%] opacity-0"
                        >
                            <Menu.Items
                                as="div"
                                className="absolute bg-[#9c66ff] min-w-[240px] right-0 flex flex-col space-y-0 items-start shadow-lg rounded-lg px-1 py-1"
                            >
                                {links.map((link) => DropdownLink(link))}
                            </Menu.Items>
                        </Transition.Child>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default Dropdown;
