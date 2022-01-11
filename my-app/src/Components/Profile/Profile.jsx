import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import p from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
function Profile(props) {
    return (
        <div className={p.wrapper}>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
        </div>
    )
};

export default Profile;