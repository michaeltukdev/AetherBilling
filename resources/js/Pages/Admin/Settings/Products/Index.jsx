import React from "react"
import AdminLayout from "../../../../Components/Layouts/Admin"
import GoBack from "../../../../Components/ui/Buttons/GoBack"
import PageTitle from "../../../../Components/Admin/PageTitle"
import CreateButton from '../../../../Components/ui/Buttons/CreateButton';

export default function Products() {

    return (
        <AdminLayout>
            <GoBack href="/admin/settings" />

            <PageTitle title="Products" description="All your products and services are customized here. Each product must be added to a group">
                <CreateButton text='Add Product' href='/admin/settings/products/create' />
                <CreateButton text='Add Product Group' href='' />
            </PageTitle>

        </AdminLayout>
    )
}