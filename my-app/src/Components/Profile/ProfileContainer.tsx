import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { addPost, profileThunkCreator, getStatusThunk, updateStatusThunk, savePhotoThunk, saveProfileInfoThunk, ProfileType, PhotosType } from "../../Redux/profile_reducer";
import { useParams } from "react-router-dom"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux";
import { AppStateType } from "../../Redux/redux-store";

let ProfileContainer = (props: any) => {
    let { userId } = useParams()

    useEffect(() => {
        if (!userId) {
            userId = props.authUserId
        }
        props.profileThunkCreator(userId)
        props.getStatusThunk(userId)
    },
        [userId, props.authUserId])

    return (<Profile {...props} />)
}

type ProfileMapStateToPropsType = {
    userProfile: ProfileType | null
    status: string
    authUserId: number | null
}

type ProfileMapDispathToPropsType = {
    addPost: (newPost: string) => void
    profileThunkCreator: (userId: number) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    savePhotoThunk: (filePhoto: PhotosType) => void
    saveProfileInfoThunk: (profile: ProfileType) => void
}

let mapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        userProfile: state.profileReducer.userProfile,
        status: state.profileReducer.status,
        authUserId: state.authReducer.userId
    }
}

export default compose(connect(mapStateToProps, {
    addPost,
    profileThunkCreator,
    getStatusThunk,
    updateStatusThunk,
    savePhotoThunk,
    saveProfileInfoThunk
}),
    WithAuthRedirect
)(ProfileContainer)