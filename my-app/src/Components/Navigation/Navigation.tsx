import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import { SideBarContainer } from "./SideBar/SideBarContainer"

const Navigation: React.FC = () => {

    return (
        <nav className={style.navbar}>
            <div >
                <NavLink to="/login" className={navData => navData.isActive ? style.active : style.link}>
                    Login
                </NavLink>
            </div>
            <div >
                <NavLink to="/profile/21932" className={navData => navData.isActive ? style.active : style.link}>
                    Profile
                </NavLink>
            </div>
            <div >
                <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.link}>
                    Dialogs
                </NavLink>
            </div>
            <div><NavLink to="/users" className={navData => navData.isActive ? style.active : style.link}>
                Users
            </NavLink></div>
            <div>
                <SideBarContainer />
            </div>
        </nav >
    )
};

export default Navigation;
