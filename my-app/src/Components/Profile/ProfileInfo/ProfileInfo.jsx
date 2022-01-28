import React from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import avatarUser from "../../../assets/images/kateika.jpg"

let ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.wrapper}>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : avatarUser} />
            </div>
            <div className={style.discription}>
                {props.profile.fullName}
            </div>
        </div>
    )
};

export default ProfileInfo;