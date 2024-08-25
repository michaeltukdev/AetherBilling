import { usePage } from "@inertiajs/react";

export function hasPermission(permission) {
    const { auth } = usePage().props;
    return auth.user && auth.user.permissions.includes(permission);
}