import React from "react";
import { Link } from "@inertiajs/react";

export default function NavigationLink({path, title}) {
    return (
        <Link href={path} className="text-sm font-medium hover:text-white transition">{title}</Link>
    );
}