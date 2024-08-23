import { HiOutlineHome, HiOutlineUsers, HiOutlineCreditCard, HiOutlineSupport, HiOutlineCog } from "react-icons/hi";

const navItems = [
    {
        icon: HiOutlineHome,
        label: 'Overview',
        href: '/admin/'
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
    {
        icon: HiOutlineCreditCard,
        label: 'Billing',
        href: '/admin/billing',
        dropdown: [
            { label: 'Client Groups', href: '/client-groups' },
        ]
    },
    {
        icon: HiOutlineSupport,
        label: 'Support',
        href: '/clients',
        dropdown: [
            { label: 'Client Groups', href: '/client-groups' },
        ]
    },
    {
        icon: HiOutlineCog,
        label: 'Settings',
        href: '/admin/settings/',
    },
];

export default navItems;