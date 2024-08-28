import React from "react"
import PageTitle from "../../../Components/Admin/PageTitle"
import AdminLayout from "../../../Components/Layouts/Admin"
import SettingsLink from "../../../Components/Admin/Settings/SettingsLink"
import { SettingsInfo } from "../../../Data/Settings/settingsInfo"
import { hasPermission } from "../../../utils/hasPermission"

export default function Settings() {
    const filteredSettings = SettingsInfo.filter(item => hasPermission(item.permission) || !item.permission);

    return (
        <AdminLayout>
            <PageTitle title="Settings" description="Manage all of your sites settings from here." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredSettings.map((setting, index) => (
                    <SettingsLink key={index} {...setting} />
                ))}
            </div>
        </AdminLayout>
    )
}