import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, usePage } from '@inertiajs/react';
import { hasPermission } from '../../Utils/hasPermission';

const AuthDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const { auth } = usePage().props;

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="py-1 pl-2 pr-3 bg-input-border rounded-full flex items-center gap-2.5 max-w-full cursor-pointer" onClick={toggleDropdown}>
                <img width="32" height="32" className="rounded-full flex-shrink-0" src={auth.user.avatar || "/images/default/avatar.jpg"} alt={`${auth.user.name}'s avatar`} />

                <div className="flex-grow min-w-0">
                    <p className="text-sm font-medium truncate">{auth.user.name}</p>
                </div>

                <HiChevronDown className={`flex-shrink-0 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-full left-0 mt-1 w-full bg-border border border-input-border rounded-lg shadow-lg z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 }}
                    >
                        <ul className="py-1">
                            <li className="px-4 py-2 text-sm hover:bg-input-border transition cursor-pointer">
                                <Link>Profile</Link>
                            </li>

                            {hasPermission('access admin panel') && (
                                <li className="px-4 py-2 text-sm hover:bg-input-border transition cursor-pointer">
                                    <Link href="/admin">Admin</Link>
                                </li>
                            )}
                            
                            <li className="px-4 py-2 text-sm hover:bg-input-border transition cursor-pointer">
                                <Link href="/auth/logout">Logout</Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AuthDropdown;