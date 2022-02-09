import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { addPost, profileThunkCreator, getStatusThunk, updateStatusThunk } from "../../Redux/profile_reducer";
import { useParams } from "react-router-dom"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux";

let ProfileContainer = (props) => {

    useEffect(() => {
        props.profileThunkCreator(userId)
        props.getStatusThunk(userId)
    }, [])

    let { userId } = useParams()
    if (!userId) {
        userId = props.authUserId
    }

    return (<Profile {...props} />)
}

let mapStateToProps = (state) => {
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
}),
    WithAuthRedirect
)(ProfileContainer)