import React from "react"
import { usePage } from "@inertiajs/react"
import AdminLayout from "../../../Components/Layouts/Admin"
import GoBack from "../../../Components/ui/Buttons/GoBack"
import PageTitle from "../../../Components/Admin/PageTitle"
import Table from "../../../Components/Tables/Table"
import { formatDate } from "../../../Utils/FormatDate"

const columns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'forename', header: 'First Name' },
    { accessorKey: 'surname', header: 'Last Name' },
    { accessorKey: 'email', header: 'Email' },
    {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ row }) => formatDate(row.original.created_at)
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className="flex gap-2"></div>
        )
    }
];

export default function Overview() {
    const { clients } = usePage().props;

    return (
        <AdminLayout>

            <GoBack href="/admin/" />

            <PageTitle title="Clients" description="A full list of all of your clients. Both with and without services" />

            <Table columns={columns} data={clients} />
        </AdminLayout>
    )
}