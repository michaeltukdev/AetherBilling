import React from "react"
import AdminLayout from "../../../Components/Layouts/Admin"
import GoBack from "../../../Components/ui/Buttons/GoBack"
import PageTitle from "../../../Components/Admin/PageTitle"
import { User, Mail, Phone, MapPin, CreditCard, ShoppingCart, Edit, Trash2, DollarSign, AlertCircle } from "lucide-react"
import { usePage } from "@inertiajs/react"

export default function Overview() {
    const { user } = usePage().props;

    return (
        <AdminLayout>
            <GoBack href="/admin/" />

            <PageTitle title={`${user.forename} ${user.surname} - #${user.id}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <CustomerInfoCard user={user} />
                <RecentOrdersCard user={user} />
                <CustomerStatsCard user={user} />
            </div>
        </AdminLayout>
    )
}

function CustomerInfoCard({ user }) {
    return (
        <div className="bg-surface rounded-lg shadow">
            <div className="py-2.5 px-5 bg-border rounded-t-lg">
                <p className="text-sm font-medium text-text-dark">Customer Information</p>
            </div>

            <div className="p-5 space-y-4">
                <InfoItem icon={<User size={16} />} label="Name" value={`${user.forename} ${user.surname}`} />
                <InfoItem icon={<Mail size={16} />} label="Email" value={user.email} />
            </div>
        </div>
    )
}

function RecentOrdersCard({ user }) {
    return (
        <div className="bg-surface rounded-lg shadow">
            <div className="py-2.5 px-5 bg-border rounded-t-lg">
                <p className="text-sm font-medium text-text-dark">Recent Orders</p>
            </div>

            <div className="p-5 space-y-4">

            </div>
        </div>
    )
}

function CustomerStatsCard({ user }) {
    return (
        <div className="bg-surface rounded-lg shadow">
            <div className="py-2.5 px-5 bg-border rounded-t-lg">
                <p className="text-sm font-medium text-text-dark">Customer Stats</p>
            </div>

            <div className="p-5 space-y-4">

            </div>
        </div>
    )
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-center space-x-3 border-b border-input-border pb-3 text-text-medium">
            <div className="text-primary">{icon}</div>
            <p className="text-sm flex-1">{label}:</p>
            <p className="text-sm font-medium">{value}</p>
        </div>
    )
}