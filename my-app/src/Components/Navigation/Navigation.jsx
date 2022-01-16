import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navigation.module.css"
import { SideBarContainer } from "./SideBar/SideBarContainer"

const Navigation = () => {
    return (
        <nav className={n.navbar}>
            <div >
                <NavLink to="/Profile" className={navData => navData.isActive ? n.active : n.link}>
                    Profile
                </NavLink>
            </div>
            <div >
                <NavLink to="/Dialogs" className={navData => navData.isActive ? n.active : n.link}>
                    Dialogs
                </NavLink>
            </div>
            <div>
                <SideBarContainer />
            </div>
        </nav >
    )
};

export default Navigation;
