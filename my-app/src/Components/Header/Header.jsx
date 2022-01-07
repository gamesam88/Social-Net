import React from "react";
import h from "./Header.module.css"
function Header() {
    return (
        <header className={h.header}>
            <img alt="logo" className={h.logo} src="https://img2.freepng.ru/20180528/qba/kisspng-yellow-angry-birds-clip-art-angry-bird-5b0bb1b3228f94.8444199715274930431416.jpg" />
            <h1 className={h.text}>InZoo</h1>
        </header>
    )
};

export default Header;