import React from "react"
import AdminLayout from "../../Components/Layouts/Admin"
import StatisticWidget from "../../Components/Admin/Widgets/StatisticWidget"
import InfoWidget from "../../Components/Admin/Widgets/InfoWidget"
import { usePage, Link } from "@inertiajs/react"
import { formatDate } from "../../utils/FormatDate"

export default function Overview() {
    const { users } = usePage().props

    return (
        <AdminLayout>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                <StatisticWidget count={32} label="Tickets Pending" dateRange="8th February 2024 to 8th March 2024" numberColor="#d18b8b" />
                <StatisticWidget count={531} label="Pending Orders" dateRange="8th February 2024 to 8th March 2024" numberColor="#a9d18b" />
                <StatisticWidget count={5} label="Cancellations" dateRange="8th February 2024 to 8th March 2024" numberColor="#8bd1b7" />
                <StatisticWidget count={947} label="Active Clients" dateRange="8th February 2024 to 8th March 2024" numberColor="#8b96d1" />
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
                <InfoWidget label="Recent Users" viewAll="/admin/clients">
                    {users.map(user => (
                        <Link className="block">
                            <p className="text-sm font-medium">{user.forename + ' ' + user.surname}</p>

                            <div className="flex justify-between mt-1">
                                <p className="text-xs font-medium text-text-medium">{user.email}</p>
                                <p className="text-xs font-medium text-text-medium">{formatDate(user.created_at)}</p>
                            </div>
                        </Link>
                    ))}
                </InfoWidget>
            </div>

        </AdminLayout>
    )
}