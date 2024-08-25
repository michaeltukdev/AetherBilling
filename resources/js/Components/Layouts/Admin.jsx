import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from '../Admin/Sidebar/Sidebar';
import { HiOutlineMenu } from "react-icons/hi";

export default function AdminLayout({ children }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1000);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setSidebarOpen(!mobile);
        };

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <AnimatePresence>
                {(sidebarOpen || !isMobile) && (
                    <Sidebar isMobile={isMobile} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                )}
            </AnimatePresence>

            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-surface p-4 flex items-center">
                    {isMobile && (
                        <HiOutlineMenu className='w-6 h-6 text-gray-500 focus:outline-none focus:text-gray-700 cursor-pointer' onClick={() => setSidebarOpen(true)} />
                    )}
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background px-12 pt-16">{children}</main>
            </div>

            <AnimatePresence>
                {isMobile && sidebarOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}