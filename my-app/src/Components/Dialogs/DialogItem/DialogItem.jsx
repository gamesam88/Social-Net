import React from "react";
import d from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <img className={d.dialogAvatar} src={props.ava} alt="avatar" />
            <NavLink to="/dialogs" className={navData => navData.isActive ? d.active : d.free}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;