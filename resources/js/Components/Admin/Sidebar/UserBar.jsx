import React from "react"
import { Link } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"
import { HiOutlineLogout } from "react-icons/hi"

export default function UserBar() {
    const { auth } = usePage().props

    return (
        <div className="mt-auto mb-4 flex items-center px-2.5 py-2 rounded-lg bg-border border border-input-border">
            <img src={auth.user.avatar || "/images/default/avatar.jpg"} alt="User Avatar" className="w-7 h-7 rounded-full mr-3" />

            <div className="flex-grow">
                <p className="font-medium text-xs">{auth.user.name}</p>
                <p className="text-text-medium text-xs">{auth.user.email}</p>
            </div>

            <Link href="/auth/logout">
                <HiOutlineLogout className="text-lg text-text-medium cursor-pointer" />
            </Link>
        </div>
    )
}