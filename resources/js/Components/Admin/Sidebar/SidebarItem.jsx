import React from "react";
import { Link } from "@inertiajs/react";

export default function SidebarItem ({ href, label, icon: Icon }) {
    return (
        <Link href={href} className="flex items-center p-2.5 rounded-lg hover:bg-border text-sm text-text-medium">
            <Icon className="mr-2 text-15" /> {label}
        </Link>
    );
};
