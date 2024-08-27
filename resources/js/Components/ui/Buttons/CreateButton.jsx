import React from "react"
import { Link } from "@inertiajs/react"
import { HiOutlinePlusSm } from "react-icons/hi";

export default function CreateButton({text, href}) {
    return (
        <Link href={href} className="text-sm py-2 px-4 bg-border border border-input-border rounded flex gap-2 justify-center items-center hover:bg-accent transition hover:text-background w-full md:w-auto">
            <HiOutlinePlusSm />
            {text}
        </Link>
    )
}