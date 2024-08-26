export const SettingsInfo = [
    {
        'title': 'General Settings',
        'description': 'Settings regarding site configuration, company info and ordering.',
        'path': '/admin/settings/general',
        'permission': 'manage general settings',
    },
    {
        'title': 'Servers',
        'description': 'Add, edit or manage your connected servers.',
        'path': '/admin/settings/servers',
        'permission': 'view servers',
    },
    {
        'title': 'Roles & Permissions',
        'description': 'Manage the roles and permissions of your users.',
        'path': '/admin/settings/roles',
        'permission': ['view roles', 'manage roles'],
    }
];