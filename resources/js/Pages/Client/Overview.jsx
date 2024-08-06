import React from "react"
import { Link } from "@inertiajs/react"

export default function Overview() {
    return (
        <>
            <h1>Dashboard</h1>

            <Link href="/auth/logout">Logout</Link>
        </>
    )
}