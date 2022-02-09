import React from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import avatarUser from "../../../assets/images/kateika.jpg"
import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div className={style.wrapper}>
            <div>
                <img alt="" src={props.userProfile.photos.large ? props.userProfile.photos.large : avatarUser} />
                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
            </div>
            <div className={style.discription}>
                {props.userProfile.fullName}
            </div>
        </div>
    )
};

export default ProfileInfo;