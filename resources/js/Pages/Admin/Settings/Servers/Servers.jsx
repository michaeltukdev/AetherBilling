import React, { useState } from "react"
import { usePage, router, Link } from "@inertiajs/react"
import AdminLayout from "../../../../Components/Layouts/Admin"
import GoBack from "../../../../Components/ui/Buttons/GoBack"
import PageTitle from "../../../../Components/Admin/PageTitle"
import Table from "../../../../Components/Tables/Table"
import FlashMessage from "../../../../Components/FlashMessage"
import { hasPermission } from "../../../../Utils/hasPermission"
import DeleteConfirmationModal from "../../../../Components/Modals/DeleteConfirmationModal"

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'hostname', header: 'Hostname' },
  { accessorKey: 'ip_address', header: 'IP Address' },
  { accessorKey: 'module.name', header: 'Module' },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

      return (
        <div className="flex gap-2">
          {hasPermission('edit servers') && (
            <Link href={`/admin/settings/servers/${row.original.id}`}>Edit</Link>
          )}

          {hasPermission('delete servers') && (
            <>
              <button onClick={() => setIsDeleteModalOpen(true)} className="text-red-300 hover:text-red-500">
                Delete
              </button>
              <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => router.delete(`/admin/settings/servers/${row.original.id}`)}
                itemType="server"
                itemName={row.original.name}
              />
            </>
          )}
        </div>
      )
    }
  }
];

export default function Servers() {
  const { servers, flash } = usePage().props;

  return (
    <AdminLayout>
      <FlashMessage message={flash.success ?? flash.error} type={flash.success ? 'success' : 'error'} />

      <GoBack href="/admin/settings" />

      <PageTitle title="Servers" description="Manage your servers here" createLinkProps={{ text: "Add server", href: "servers/create", permission: "create servers" }} />

      <Table columns={columns} data={servers} />
    </AdminLayout>
  )
}