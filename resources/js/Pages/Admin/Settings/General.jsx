import React from "react"
import AdminLayout from "../../../Components/Layouts/Admin"
import GoBack from "../../../Components/ui/Buttons/GoBack"
import PageTitle from "../../../Components/Admin/PageTitle"

export default function General() {
    return (
        <AdminLayout>

            <GoBack href="/admin/settings" />

            <PageTitle title="General Settings" description="Basic information regarding your website and company." />

        </AdminLayout>
    )
}