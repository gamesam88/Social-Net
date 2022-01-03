import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={n.navbar}>
            <div >
                <NavLink to="/profile" className={navData => navData.isActive ? n.active : n.link}>
                    Profile
                </NavLink>
            </div>
            <div >
                <NavLink to="/dialogs" className={navData => navData.isActive ? n.active : n.link}>
                    Messages
                </NavLink>
            </div>
        </nav >
    )
};

export default Navigation;
