import React from "react"
import NavigationLink from "./NavigationLink"
import UserDropdown from './UserDropdown';

export default function Navigation() {
    return (
        <nav className="py-6 border-b border-border">
            <div className="container relative">
                <div className="flex items-center justify-between">
                    <div className="w-[118px]">
                        <img width="118" height="25" src="/images/default/branding/logo_with_text.webp" alt="Logo" />
                    </div>

                    <UserDropdown />
                </div>
                <ul className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-14">
                    <NavigationLink title="Overview" path="/" />
                    <NavigationLink title="Services" path="/" />
                    <NavigationLink title="Support" path="/" />
                </ul>
            </div>
        </nav>
    )
}