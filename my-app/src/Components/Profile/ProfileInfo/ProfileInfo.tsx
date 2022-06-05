import React, { useState } from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../common/preloader/Preloader"
import avatarUser from "../../../assets/images/kateika.jpg"
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm"

let ProfileInfo = (props: any) => {
    let [editMode, setEditMode] = useState(false)

    let owner = true
    //props.userProfile.userId === props.authUserId

    let handleEditMode = () => {
        if (!editMode) {
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }

    if (!props.userProfile) {
        return <Preloader />
    }

    const onChosenPhoto = (e: any) => {
        if (e.target.files.length) {
            props.savePhotoThunk(e.target.files[0])
        }
    }

    return (
        <div className={style.wrapper}>
            <div>
                <img alt="" src={props.userProfile.photos.large || avatarUser} />
                <div>{owner &&
                    < input type={"file"} onChange={onChosenPhoto} />}
                </div>
                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
            </div>
            {editMode ? <ProfileDataForm initialValues={props.userProfile} {...props} /> : <ProfileData {...props} />}
            <div className={style.btnSettings}>
                {owner && <button onClick={handleEditMode}>Settings</button>}
            </div>
        </div>
    )
};


export const ProfileData = (props: any) => {

    return (
        <div className={style.discription}>
            <div>
                <b>Name:  </b> {props.userProfile.fullName}
            </div>
            <div >
                <b>About me:  </b>{props.userProfile.aboutMe || "Write something about yourself."}
            </div>
            <div >
                {props.userProfile.lookingForAJob
                    ? <div className={style.lookFor}>"Looking for a job!"</div>
                    : <div className={style.notLookFor}>"Not looking for a job yet."</div>}
            </div>
            <div>
                <b>My skills:  </b> {props.userProfile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts:  </b>{Object.keys(props.userProfile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]} /> })}
            </div>
        </div>
    )
}

export const Contact = ({ contactTitle, contactValue }: any) => {
    return <div><b>{contactTitle} :</b> {contactValue}</div>
}

export default ProfileInfo;