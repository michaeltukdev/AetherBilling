import React from "react"
import { Link } from "@inertiajs/react"

export default function SettingsLink({ path, title, description }) {
    return (
        <Link href={path} className="p-5 rounded-lg bg-surface hover:shadow-lg transition">
            <h5 className="text-sm">{title}</h5>
            <p className="text-xs font-medium text-text-dark leading-6 mt-2 ">{description}</p>
        </Link>
    )
}