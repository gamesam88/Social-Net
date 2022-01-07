import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navigation.module.css"
import SideBar from "./SideBar/SideBar"

const Navigation = (props) => {
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
                <SideBar state={props.state} />
            </div>
        </nav >
    )
};

export default Navigation;
