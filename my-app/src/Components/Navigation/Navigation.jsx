import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import { SideBarContainer } from "./SideBar/SideBarContainer"

const Navigation = () => {
    return (
        <nav className={style.navbar}>
            <div >
                <NavLink to="/profile/21932" className={navData => navData.isActive ? style.active : style.link}>
                    Profile
                </NavLink>
            </div>
            <div >
                <NavLink to="/Dialogs" className={navData => navData.isActive ? style.active : style.link}>
                    Dialogs
                </NavLink>
            </div>
            <div><NavLink to="/Users" className={navData => navData.isActive ? style.active : style.link}>
                Users
            </NavLink></div>
            <div>
                <SideBarContainer />
            </div>
        </nav >
    )
};

export default Navigation;
