import React from 'react';
import { Link } from '@inertiajs/react';
import { HiChevronDown } from "react-icons/hi";

const Dropdown = ({ label, icon: Icon, items, isOpen, onClick }) => {
    return (
        <div className="relative">
            <div onClick={onClick} className="text-text-medium cursor-pointer flex items-center justify-between w-full p-2.5 rounded-lg leading-none transition hover:bg-border">
                <span className="flex items-center">
                    <Icon className="mr-2 text-lg" />
                    {label}
                </span>
                <HiChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isOpen && (
                <ul className="mt-2 w-full bg-surface rounded-lg overflow-hidden">
                    {items.map(({ href, label }, index) => (
                        <li key={index}>
                            <Link href={href} className="text-text-medium block px-4 py-2 text-sm hover:bg-border rounded-lg transition">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;