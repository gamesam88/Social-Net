import React from "react";
import p from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
        <div className={p.wrapper}>
            <img className={p.image} src="https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-44.jpg" />
            <div className={p.discription}>
                Info
            </div>
        </div>
    )
};

export default ProfileInfo;