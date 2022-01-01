import React from "react";
import h from "./Header.module.css"
function Header() {
    return (
        <header className={h.header}>
            <img alt="text" className={h.logo} src="https://sun9-11.userapi.com/impf/16DTiyAzrnTd8-VD8tapJyUq_4YtZuWRpAQelQ/WewFCXPSgf8.jpg?size=300x293&quality=96&sign=33614419586a69ad06a507ca5682e190&type=album" />
            <h1 className={h.text}>Head</h1>
        </header>
    )
};

export default Header;