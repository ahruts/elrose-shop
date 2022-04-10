import React from "react";
import { NavLink } from "react-router-dom";

function InDevelopment() {
    return (
<div className="in-development">
              <p className="in-development__text">This page is in development</p>
            <NavLink to='/' className="in-development__btn">Go to main page</NavLink></div>
    );
}

export default InDevelopment