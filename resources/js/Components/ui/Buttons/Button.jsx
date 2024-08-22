import React from 'react';

const Button = ({ onClick, disabled = false, className = '',  children, ariaLabel, type }) => {
    const baseClasses = "text-sm py-2 px-4 rounded-lg transition bg-border";
    const disabledClasses = "opacity-60 cursor-not-allowed";
    const enabledClasses = "bg-border hover:bg-input-border";

    const buttonClasses = `${className} ${baseClasses} ${disabled ? disabledClasses : enabledClasses}`.trim();

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses} aria-label={ariaLabel} >
            {children}
        </button>
    );
};

export default Button;