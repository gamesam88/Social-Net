import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css"
function Profile() {
    return (
        <div className={p.wrapper}>
            <img className={p.image} src="https://northernfable.ru/upload/medialibrary/e7e/e7e2afca7a05bfd031f36300134e1296.jpg" />
            <div>
                <MyPosts />
            </div>
        </div>
    )
};

export default Profile;