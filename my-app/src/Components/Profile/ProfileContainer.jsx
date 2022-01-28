import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { updatePost, addPost, setUserProfile } from "../../Redux/profile_reducer";
import * as axios from "axios"
import { useParams } from "react-router-dom"
import { getProfile } from "../../api/api"


let ProfileContainer = (props) => {
    console.log("ProfileCont")
    let { userId } = useParams()
    if (!userId) {
        userId = 2
    }
    useEffect(() => {
        getProfile(userId)
            .then(response => { props.setUserProfile(response) })
    }, [])


    return (
        <div>
            <Profile userProfile={props.userProfile} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPost: state.profileReducer.newPost,
        userProfile: state.profileReducer.userProfile
    }
}

export default connect(mapStateToProps,
    {
        addPost,
        updatePost,
        setUserProfile
    }
)(ProfileContainer);