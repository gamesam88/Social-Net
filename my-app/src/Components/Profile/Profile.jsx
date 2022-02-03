import React from "react";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { MyPostsContainer } from "./MyPosts/MyPostsContainer"

let Profile = (props) => {

    return (
        <div className={p.wrapper}>
            <ProfileInfo {...props} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;

