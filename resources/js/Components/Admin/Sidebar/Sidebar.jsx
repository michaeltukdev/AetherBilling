import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineX } from "react-icons/hi";
import MainInput from "../../ui/Inputs/MainInput"
import navItems from '../../../Data/adminLinks';
import SidebarDropdown from './SidebarDropdown';
import SidebarItem from './SidebarItem';
import UserBar from './UserBar';
import { hasPermission } from '../../../Utils/hasPermission';

const Sidebar = ({ isMobile, setSidebarOpen }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const filteredNavItems = navItems.filter(item => hasPermission(item.permission) || !item.permission);

    return (
        <motion.aside initial={{ x: isMobile ? "-100%" : 0 }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "spring", bounce: 0, duration: 0.4 }} className="fixed inset-y-0 left-0 z-50 w-[280px] bg-surface md:relative px-4 flex flex-col">

            {isMobile && (
                <HiOutlineX className='h-6 w-6 absolute top-4 right-4 cursor-pointer' onClick={() => setSidebarOpen?.(false)} />
            )}

            <nav className="mt-8 flex-grow">
                <img className="mx-auto" width="60" src="/images/default/branding/logo.webp" alt="Logo" />

                <MainInput className='w-full mt-8' placeholder="Search..." />

                <ul className="space-y-4 mt-5 text-15 font-medium">
                    {filteredNavItems.map((item, index) => (
                        <li key={index}>
                            {item.dropdown ? (
                                <SidebarDropdown {...item} isActive={activeDropdown === item.label} setActiveDropdown={setActiveDropdown} />
                            ) : (
                                <SidebarItem {...item} />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <UserBar />
        </motion.aside>
    );
};

export default Sidebar;
