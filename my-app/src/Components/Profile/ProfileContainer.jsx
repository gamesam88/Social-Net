import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { updatePost, addPost, profileThunkCreator, getStatusThunk, updateStatusThunk } from "../../Redux/profile_reducer";
import { useParams } from "react-router-dom"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux";

let ProfileContainer = (props) => {
    debugger
    let { userId } = useParams()
    if (!userId) {
        userId = 21932
    }
    useEffect(() => {
        props.profileThunkCreator(userId)
        props.getStatusThunk(userId)
    }, [props.status])

    return (<Profile {...props} />)
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profileReducer.userProfile,
        status: state.profileReducer.status,
    }
}

export default compose(connect(mapStateToProps, {
    addPost,
    updatePost,
    profileThunkCreator,
    getStatusThunk,
    updateStatusThunk,
}),
    WithAuthRedirect
)(ProfileContainer)