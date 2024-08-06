import React from "react"

export default function MainInput({ label, required, type, value, onChange, error, placeholder }) {
    return (
        <div>
            {label && (
                <label className="text-15 text-text-medium" htmlFor={label}>
                    {label}
                    {required ? <span className="text-red-300"> *</span> : <span className="text-text-dark"> (optional)</span>}
                </label>
            )}

            <input 
                className={`w-full mt-3.5 bg-border border rounded-lg text-text-medium text-xs font-normal py-3 px-3.5 outline-none ${
                    error ? 'border-red-300' : 'border-input-border'
                }`}
                type={type || "text"}
                placeholder={placeholder || ""}
                name={label}
                id={label}
                value={value}
                onChange={onChange}
            />

            {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
        </div>
    )
}