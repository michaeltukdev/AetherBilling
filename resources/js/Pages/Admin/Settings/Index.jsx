import React from "react"
import PageTitle from "../../../Components/Admin/PageTitle"
import AdminLayout from "../../../Components/Layouts/Admin"
import SettingsLink from "../../../Components/Admin/Settings/SettingsLink"
import { SettingsInfo } from "../../../Data/Settings/settingsInfo"

export default function Settings() {
    return (
        <AdminLayout>
            <PageTitle>Settings</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SettingsInfo.map((setting, index) => (
                    <SettingsLink key={index} {...setting} />
                ))}
            </div>
        </AdminLayout>
    )
}