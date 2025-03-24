import React from 'react'

const Button = ({ value, className = '', onClick, disabled = false }) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={() => onClick?.(value)}
            disabled={disabled}
        >
            {value}
        </button>
    );
};

export default Button