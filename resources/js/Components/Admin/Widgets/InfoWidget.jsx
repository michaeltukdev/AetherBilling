import React from "react"
import { Link } from "@inertiajs/react"

export default function InfoWidget({ label, viewAll, children }) {
    return (
        <div className="bg-surface rounded-lg">
            <div className="py-2.5 px-5 bg-border rounded-t-lg flex justify-between">
                <p className="text-xs font-medium text-text-dark">{label}</p>
                {viewAll && (
                    <Link href={viewAll} className="text-xs font-medium text-accent hover:text-accent-light transition">view all</Link>
                )}
            </div>

            <div className="p-5 space-y-5">
                {children}
            </div>
        </div>
    )
}