import React from "react";
import p from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
        <div className={p.wrapper}>
            <img className={p.image} src="https://northernfable.ru/upload/medialibrary/e7e/e7e2afca7a05bfd031f36300134e1296.jpg" />
            <div className={p.discription}>
                Info
            </div>
        </div>
    )
};

export default ProfileInfo;