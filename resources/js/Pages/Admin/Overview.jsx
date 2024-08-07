import React from "react"
import AdminLayout from "../../Components/Layouts/Admin"
import OverviewWidget from "../../Components/Admin/OverviewWidget"

export default function Overview() {
    return (
        <AdminLayout>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                <OverviewWidget count={32} label="Tickets Pending" dateRange="8th February 2024 to 8th March 2024" numberColor="#d18b8b" />
                <OverviewWidget count={531} label="Pending Orders" dateRange="8th February 2024 to 8th March 2024" numberColor="#a9d18b" />
                <OverviewWidget count={5} label="Cancellations" dateRange="8th February 2024 to 8th March 2024" numberColor="#8bd1b7" />
                <OverviewWidget count={947} label="Active Clients" dateRange="8th February 2024 to 8th March 2024" numberColor="#8b96d1" />
            </div>

        </AdminLayout>
    )
}