import React from "react";
import ServerForm from "../../../../Components/Admin/Forms/ServerForm";
import { usePage } from "@inertiajs/react"

export default function UpdateServer() {
    const { server } = usePage().props;
    return <ServerForm isUpdate={true} initialData={server} />
}