import React from "react"

export default function SettingsContainer({children}) {
    return (
        <div className="bg-surface rounded-lg p-7 mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {children}
        </div>
    )
}