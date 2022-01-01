import React from "react";
import n from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={n.navbar}>
            <div className={n.link}><a href="">Main</a></div>
            <div className={n.link}><a href="">Messages</a></div>
            <div className={n.link}><a href="">Chats</a></div>
            <div className={n.link}><a href="">Settings</a></div>
        </nav>
    )
};

export default Navigation;
