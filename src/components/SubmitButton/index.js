import React from 'react';

export const SubmitButton = (
    {
        label
    }) => (
    <div className={"field"}>
        <button className={"mg fluid button primary"}>
            {label}
        </button>
    </div>
);
