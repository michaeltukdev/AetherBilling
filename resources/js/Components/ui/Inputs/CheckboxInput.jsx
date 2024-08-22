import React from "react"

export default function CheckboxInput({ label, name, checked, onChange, error }) {
    return (
        <div className="flex">
            <div className="relative inline-block"> <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} className="appearance-none w-5 h-5 border border-input-border rounded-md bg-border checked:bg-accent checked:border-accent-light"/>
                
                {checked && (
                    <svg className="absolute w-4 h-4 top-0.5 left-0.5 pointer-events-none text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                )}
            </div>
            
            <label htmlFor={name} className="text-sm font-medium ml-2.5">{label}</label>

            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    )
}