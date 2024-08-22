import React from 'react';

const SelectInput = ({ label, name, value, onChange, options, error, placeholder = "Select an option", className = '' }) => {
  return (
    <div>
      <label className="text-15 text-text-medium" htmlFor={name}> {label} </label>

      <select className={`w-full mt-3.5 bg-border border rounded-lg text-text-medium text-xs font-normal py-3 px-3.5 outline-none ${ error ? 'border-red-300' : 'border-input-border' } ${className}`}
        name={name} id={name} value={value} onChange={(e) => onChange(e.target.value)} required >
            
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectInput;