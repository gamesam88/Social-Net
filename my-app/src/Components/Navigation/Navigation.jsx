import React from "react";
import n from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={n.navbar}>
            <div className={n.link}><a>Main</a></div>
            <div className={n.link}><a>Messages</a></div>
            <div className={n.link}><a>Chats</a></div>
            <div className={n.link}><a>Settings</a></div>
        </nav>
    )
};

export default Navigation;
