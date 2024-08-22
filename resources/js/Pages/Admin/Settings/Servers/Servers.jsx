import React from "react"
import AdminLayout from "../../../../Components/Layouts/Admin"
import GoBack from "../../../../Components/Admin/GoBack"
import PageTitle from "../../../../Components/Admin/PageTitle"
import Table from "../../../../Components/Tables/Table"
import { usePage } from "@inertiajs/react"

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'hostname', header: 'Hostname' },
  { accessorKey: 'ip_address', header: 'IP Address' },
  { accessorKey: 'module.name', header: 'Module' },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex gap-2">
        {/* <p>Edit</p>
        <p>Delete</p> */}
      </div>
    )
  }
];

export default function Servers() {
    const { servers } = usePage().props;

    return (
        <AdminLayout>
            <GoBack href="/admin/settings" />

            <PageTitle title="Servers" description="Manage your servers here" createLinkProps={{ text: "Add server", href: "servers/create" }} />

            <Table columns={columns} data={servers} />

        </AdminLayout>
    )
}