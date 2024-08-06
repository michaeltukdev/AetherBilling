import React from "react";
import { Link } from "@inertiajs/react";

export default function NavigationLinkNavigationLink({path, title}) {
    return (
        <Link href={path} className="text-15 font-medium hover:text-white transition">{title}</Link>
    );
}