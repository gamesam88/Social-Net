import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
function Profile() {
    return (
        <div className={p.wrapper}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
};

export default Profile;