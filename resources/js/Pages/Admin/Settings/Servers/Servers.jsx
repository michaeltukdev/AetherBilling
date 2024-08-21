import React from "react"
import AdminLayout from "../../../../Components/Layouts/Admin"
import GoBack from "../../../../Components/Admin/GoBack"
import PageTitle from "../../../../Components/Admin/PageTitle"

export default function Servers() {
    return (
        <AdminLayout>
            <GoBack href="/admin/settings" />

            <PageTitle title="Servers" description="Manage your servers here" createLinkProps={{text:  "Add server", href: "servers/create"}} />

            <div className="container bg-surface rounded-lg p-10 mt-8">

            </div>

        </AdminLayout>
    )
}