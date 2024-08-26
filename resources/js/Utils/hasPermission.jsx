import { usePage } from "@inertiajs/react";

export function hasPermission(permission) {
    const { auth } = usePage().props;

    if (Array.isArray(permission)) {
        return permission.some(perm => auth.user.permissions.includes(perm));
    } else {
        return auth.user.permissions.includes(permission);
    }
}