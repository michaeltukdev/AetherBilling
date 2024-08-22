import React from "react";

export default function MainInput({ label, required = false, type = "text", value, onChange, error, placeholder = "", className = "" }) {
  const inputClasses = `mt-3.5 bg-border rounded-lg text-text-medium text-xs border font-normal py-3 px-3.5 outline-none ${className} ${error ? 'border-red-300' : 'border-input-border'}`;

  return (
    <div>
      
      {label && (
        <label className="text-15 text-text-medium" htmlFor={label}>
          {label}
          {required ? <span className="text-red-300"> *</span> : <span className="text-text-dark"> (optional)</span>}
        </label>
      )}
      
      <input className={inputClasses} type={type} placeholder={placeholder} name={label} id={label} value={value} onChange={onChange} />

      {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
  );
}