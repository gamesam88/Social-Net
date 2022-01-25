import React from "react";
import style from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = (props) => {
    return (
        <header className={style.header}>
            <img alt="logo" className={style.logo} src="https://img2.freepng.ru/20180528/qba/kisspng-yellow-angry-birds-clip-art-angry-bird-5b0bb1b3228f94.8444199715274930431416.jpg" />
            <h1 className={style.text}>InZoo</h1>
            <div >
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={"/login"}>Login</NavLink>}

            </div>

        </header>
    )
};

export default Header;