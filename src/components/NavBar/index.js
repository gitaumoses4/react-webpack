import React from 'react';

export const NavBar = (
    {
        header = "Maintenance Tracker",
        menuItems
    }) => (
    <div className="mg navbar">
        <div className="header padded left">{header}</div>
        <div className="menu">
            {menuItems}
        </div>
    </div>
);
