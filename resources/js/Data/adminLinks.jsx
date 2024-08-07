import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi";

const navItems = [
    {
        icon: HiOutlineHome,
        label: 'Overview',
        href: '/admin/overview'
    },
    {
        icon: HiOutlineUsers,
        label: 'Clients',
        href: '/clients',
        dropdown: [
            { label: 'All Clients', href: '/admin/clients' },
            { label: 'Add New Client', href: '/clients/new' },
            { label: 'Client Groups', href: '/client-groups' },
        ]
    },
];

export default navItems;