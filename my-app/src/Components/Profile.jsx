import React from "react";
import p from "./Profile.module.css"
function Profile() {
    return (
        <div className={p.wraper}>
            <img className={p.image} src="https://northernfable.ru/upload/medialibrary/e7e/e7e2afca7a05bfd031f36300134e1296.jpg" />
        </div>
    )
};

export default Profile;