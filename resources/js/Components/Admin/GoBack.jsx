import React from "react";
import { Link } from "@inertiajs/react";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function GoBack({href}) {
    return (
        <Link href={href} className="flex items-center gap-3 mb-4 text-sm text-text-dark font-medium hover:text-text-medium transition">
            <HiArrowNarrowLeft />
            Go Back
        </Link>
    )
}