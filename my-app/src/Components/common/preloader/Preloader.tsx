import React from "react";
import loadingGif from "../../../assets/images/loadingGif.gif"
import style from "./Preloader.module.css"

let Preloader = () => {
    return (
        <div className={style.preloadSize}>
            <img src={loadingGif} alt="preloader" />
        </div>
    )
}

export default Preloader
