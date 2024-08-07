import React from 'react';
import { motion } from 'framer-motion';
import { Link, usePage } from '@inertiajs/react';
import Dropdown from './Dropdown';
import navItems from '../../Data/adminLinks';
import { HiOutlineX, HiOutlineSearch, HiOutlineLogout } from "react-icons/hi";

const NavItem = ({ item: { dropdown, label, icon: Icon, href } }) => (
    <li>
        {dropdown ? (
            <Dropdown label={label} icon={Icon} items={dropdown} />
        ) : (
            <Link href={href} className="text-text-medium w-full p-2.5 rounded-lg leading-none flex items-center transition hover:bg-border">
                <Icon className="mr-2 text-lg" />
                {label}
            </Link>
        )}
    </li>
);

const Sidebar = ({ isMobile, setSidebarOpen }) => {
    const { user } = usePage().props;

    return (
        <motion.aside
            initial={{ x: isMobile ? "-100%" : 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-[300px] bg-surface md:relative px-4 flex flex-col"
        >
            {isMobile && <HiOutlineX className='h-6 w-6 absolute top-4 right-4 cursor-pointer' onClick={() => setSidebarOpen?.(false)} />}
            <nav className="mt-8 flex-grow">
                <img className="mx-auto" width="60" src="/images/default/branding/logo.webp" alt="Logo" />

                <div className="relative mt-8">
                    <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-text-medium" />
                    <input placeholder="Search..." className='pl-10 p-3 rounded-lg w-full bg-border text-15 leading-none font-medium border-none focus:outline-none' />
                </div>

                <ul className="space-y-4 mt-5 text-15 font-medium">
                    {navItems.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))}
                </ul>
            </nav>

            <div className="mt-auto mb-4 flex items-center p-2.5 rounded-lg bg-border">
                <img src={user.avatar || "/images/default/avatar.jpg"} alt="User Avatar" className="w-8 h-8 rounded-full mr-3" />
                <div className="flex-grow">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-text-medium text-xs">{user.email}</p>
                </div>
                <Link href="/auth/logout">
                    <HiOutlineLogout className="text-xl text-text-medium cursor-pointer" />
                </Link>
            </div>
        </motion.aside>
    );
};

export default Sidebar;