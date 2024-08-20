import React from "react"
import { Link } from "@inertiajs/react"
import { HiOutlinePlusSm } from "react-icons/hi";

export default function CreateLink({text, href}) {
    return (
        <Link href={href} className="text-sm py-2 px-4 bg-border border border-input-border rounded flex gap-2 items-center hover:bg-accent transition hover:text-background">
            <HiOutlinePlusSm />
            {text}
        </Link>
    )
}