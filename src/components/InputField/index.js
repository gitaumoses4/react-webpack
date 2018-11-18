import React from 'react';

export const InputField = (
    {
        name,
        type,
        label,
        value,
        classNames = '',
        placeHolder = '',
        onChange,
        required
    }
) => (
    <div className={classNames + " field"}>
        <label htmlFor={name}>{label}</label>
        <input
            required={required}
            name={name}
            placeholder={placeHolder}
            type={type}
            onChange={onChange}
        />
    </div>
);

export const MultipleInputField = ({label, children}) => (
    <div className={"field"}>
        <label>{label}</label>
        <div className={"fields"}>
            {children}
        </div>
    </div>
);

