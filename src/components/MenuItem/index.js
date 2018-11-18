import React from 'react';
import {Link} from "react-router-dom";

export const MenuItem = ({link = null, children, right = false}) => (
    <>
        {
            link ? (
                <Link to={link} className={(right ? "right aligned" : "") + " item"}>{children}</Link>
            ) : (
                <div className={"item "+(right ? "right aligned" : "")}>{children}</div>
            )
        }
    </>
);
