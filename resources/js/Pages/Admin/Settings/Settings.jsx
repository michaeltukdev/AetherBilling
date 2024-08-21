import React from "react"
import AdminLayout from "../../../Components/Layouts/Admin"
import { Link } from "@inertiajs/react"

function SettingsLink({ path, title, description }) {
    return (
        <Link href={path} className="p-5 rounded-lg bg-surface hover:shadow-lg transition">
            <h5>{title}</h5>
            <p className="text-xs font-medium text-text-dark leading-6 mt-2 ">{description}</p>
        </Link>
    )
}

export default function Settings() {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-medium">Settings Overview</h1>
            <p className="mt-2 font-base text-text-medium">Click one of the links below to go to the related settings</p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">

                <SettingsLink
                    path="/admin/settings/general"
                    title="General Settings"
                    description="Settings regarding site configuration, company info and ordering."
                />

                <SettingsLink
                    path="/admin/settings/servers"
                    title="Servers"
                    description="Add, edit or manage your connected servers."
                />

            </div>
        </AdminLayout>
    )
}