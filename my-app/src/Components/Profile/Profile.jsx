import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer"
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

function Profile(props) {
    return (
        <div className={p.wrapper}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;