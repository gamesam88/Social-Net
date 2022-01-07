import React from "react";
import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css"
import FriendItem from "./Friend/FriendItem"

const SideBar = (props) => {

    let friendItems = props.state.friends.map(d => <FriendItem name={d.name} id={d.id} ava={d.ava} />)

    return (
        <div className={s.sidebar}>
            <h3>Friends</h3>
            <div className={s.friendsItems}>
                {friendItems}
            </div >
        </div>
    )
};

export default SideBar;
