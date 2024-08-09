import React from "react"
import { usePage } from "@inertiajs/react"

export default function Welcome() {
    const { module, serverInfo } = usePage().props
    console.log(module);
    console.log(serverInfo);
    return (
        <div>
            {module.map((module, index) => ( 
                <div key={index}>
                    <h1>{module.name}</h1>
                </div>
            ))}
        </div>
    )
}