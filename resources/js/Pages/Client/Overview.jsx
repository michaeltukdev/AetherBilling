import React from "react"
import { Link } from "@inertiajs/react"
import Navigation from "../../Components/Client/Navigation"

export default function Overview() {
    return (
        <>
            <header className="bg-surface">
                <Navigation />

                <div className="container py-8">
                    <h3 className="text-lg font-medium">Your services</h3>
                </div>
            </header>

            <Link href="/auth/logout">Logout</Link>
        </>
    )
}