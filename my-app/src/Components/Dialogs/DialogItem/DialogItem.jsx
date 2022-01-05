import React from "react";
import d from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? d.active : d.free}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;