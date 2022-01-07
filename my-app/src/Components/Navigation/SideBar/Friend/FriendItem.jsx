import React from "react";
import f from "./FriendItem.module.css";
import { NavLink } from "react-router-dom";

const FriendItem = (props) => {
    return (
        <div className={f.friend}>
            <img className={f.friendAvatar} src={props.ava} alt="avatar" />
            <NavLink to="./Profile" className={navData => navData.isActive ? f.active : f.free}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default FriendItem;