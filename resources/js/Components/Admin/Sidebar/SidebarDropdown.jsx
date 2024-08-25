import React from "react";
import { Link } from "@inertiajs/react";
import { HiChevronDown } from "react-icons/hi";

export default function SidebarDropdown({ label, icon: Icon, dropdown, isActive, setActiveDropdown }) {
    return (
        <div className="relative">
            <div onClick={() => setActiveDropdown(isActive ? null : label)} className="flex items-center justify-between p-2.5 rounded-lg text-sm hover:bg-border cursor-pointer text-text-medium">
                <span className="flex items-center">
                    <Icon className="mr-2 text-15" /> {label}
                </span>
                <HiChevronDown className={`ml-2 transition-transform ${isActive ? 'rotate-180' : ''}`} />
            </div>
            {isActive && (
                <ul className="mt-2 w-full bg-surface rounded-lg overflow-hidden">
                    {dropdown.map(({ href, label }, index) => (
                        <li key={index}>
                            <Link href={href} className="block px-4 py-2 text-sm rounded-lg transition hover:bg-border text-text-medium" >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};