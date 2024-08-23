import React, { useEffect, useState } from "react"
import { router, useForm, usePage } from "@inertiajs/react"
import AdminLayout from "../../Layouts/Admin"
import GoBack from "../../../Components/ui/Buttons/GoBack"
import MainInput from "../../../Components/ui/Inputs/MainInput"
import SelectInput from "../../../Components/ui/Inputs/SelectInput"
import SettingsContainer from "../../../Components/ui/SettingsContainer"
import FlashMessage from "../../../Components/FlashMessage"
import PageTitle from "../../../Components/Admin/PageTitle"
import Button from "../../../Components/ui/Buttons/Button"

export default function ServerForm({ isUpdate = false, initialData = {} }) {
    const { errors: serverErrors, modules, flash } = usePage().props;
    const [isTestingConnection, setIsTestingConnection] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const { data, setData } = useForm({
        name: initialData.name || "",
        hostname: initialData.hostname || "",
        ip_address: initialData.ip_address || "",
        monthly_cost: initialData.monthly_cost || "",
        max_accounts: initialData.max_accounts || "",
        port: initialData.port || "",
        nameservers: initialData.nameservers || "",
        module_id: initialData.module_id || "",
        module_username: initialData.module_username || "",
        module_password: initialData.module_password || "",
        module_api_token: initialData.module_api_token || "",
    })

    useEffect(() => {
        setCanSubmit(!!flash.success);
    }, [flash]);

    function handleSubmit(e) {
        e.preventDefault()
        if (canSubmit) {
            const url = isUpdate ? '/admin/settings/servers/update' : '/admin/settings/servers/create';
            router.post(url, data)
        }
    }

    function handleTestConnection(e) {
        e.preventDefault()
        setIsTestingConnection(true)
        router.post('/admin/settings/servers/test-connection', data, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setIsTestingConnection(false)
                setCanSubmit(!!flash.success);
            },
            onError: () => {
                setIsTestingConnection(false)
                setCanSubmit(false)
            }
        })
    }

    function handleInputChange(field, value) {
        setData(field, value)
        setCanSubmit(false)
    }

    return (
        <AdminLayout>
            <FlashMessage message={flash.success ?? flash.error} type={flash.success ? 'success' : 'error'} onClose={() => { }} />
            <GoBack href="/admin/settings/servers" />
            <PageTitle title={isUpdate ? "Update Server" : "Create Server"} description={isUpdate ? "Update the information related to your server below." : "Fill in the form below to create a new server"} />

            <form onSubmit={handleSubmit}>
                <SettingsContainer>
                    <MainInput className="w-full" value={data.name} id="name" label="Server Name" required placeholder="Enter server name" type="text" onChange={e => handleInputChange('name', e.target.value)} error={serverErrors.name} />
                    <MainInput className="w-full" value={data.hostname} id="hostname" label="Hostname" placeholder="Enter hostname" type="text" onChange={e => handleInputChange('hostname', e.target.value)} error={serverErrors.hostname} />
                    <MainInput className="w-full" value={data.ip_address} id="ip_address" label="IP Address" placeholder="Enter IP address" type="text" onChange={e => handleInputChange('ip_address', e.target.value)} error={serverErrors.ip_address} />
                    <MainInput className="w-full" value={data.monthly_cost} id="monthly_cost" label="Monthly Cost" placeholder="Enter monthly cost" type="number" onChange={e => handleInputChange('monthly_cost', e.target.value)} error={serverErrors.monthly_cost} />
                    <MainInput className="w-full" value={data.max_accounts} id="max_accounts" label="Max Accounts" placeholder="Enter max accounts" type="number" onChange={e => handleInputChange('max_accounts', e.target.value)} error={serverErrors.max_accounts} />
                    <MainInput className="w-full" value={data.port} id="port" label="Port" placeholder="Enter port number" type="number" onChange={e => handleInputChange('port', e.target.value)} error={serverErrors.port} />
                </SettingsContainer>

                <SettingsContainer>
                    <MainInput className="w-full" value={data.nameservers} id="nameservers" label="Nameservers" placeholder="Enter nameservers (JSON format)" type="text" onChange={e => handleInputChange('nameservers', e.target.value)} error={serverErrors.nameservers} />
                    <SelectInput label="Module" name="module_id" value={data.module_id} onChange={(value) => handleInputChange('module_id', value)} options={modules.map(module => ({ value: module.id, label: module.name }))} error={serverErrors.module_id} placeholder="Select Module" />
                    <MainInput className="w-full" value={data.module_username} id="module_username" label="Module Username" placeholder="Enter module username" type="text" onChange={e => handleInputChange('module_username', e.target.value)} error={serverErrors.module_username} />
                    <MainInput className="w-full" value={data.module_password} id="module_password" label="Module Password" placeholder="Enter module password" type="password" onChange={e => handleInputChange('module_password', e.target.value)} error={serverErrors.module_password} />
                    <MainInput className="w-full" value={data.module_api_token} id="module_api_token" label="Module API Token" placeholder="Enter module API token" type="text" onChange={e => handleInputChange('module_api_token', e.target.value)} error={serverErrors.module_api_token} />
                </SettingsContainer>

                <div className="flex justify-end gap-4 items-center">
                    <Button className="mt-6" onClick={handleTestConnection}> {isTestingConnection ? 'Testing...' : 'Test Connection'} </Button>
                    <Button type="submit" className="mt-6" disabled={!canSubmit}> {isUpdate ? 'Update Server' : 'Create Server'} </Button>
                </div>
            </form>
        </AdminLayout>
    )
}