import { HiOutlineHome, HiOutlineUsers, HiOutlineCreditCard, HiOutlineSupport, HiOutlineCog } from "react-icons/hi";

const navItems = [
    {
        icon: HiOutlineHome,
        label: 'Overview',
        href: '/admin/'
    },
    {
        icon: HiOutlineUsers,
        label: 'Users',
        href: '/users',
        dropdown: [
            { label: 'All Users', href: '/admin/users' },
            { label: 'Add New Client', href: '/clients/new' },
            { label: 'Client Groups', href: '/client-groups' },
        ],
        permission: ['view users', 'manage users']
    },
    {
        icon: HiOutlineCreditCard,
        label: 'Billing',
        href: '/admin/billing',
        dropdown: [
            { label: 'Client Groups', href: '/client-groups' },
        ],
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