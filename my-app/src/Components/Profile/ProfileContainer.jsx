import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { updatePost, addPost, setUserProfile } from "../../Redux/profile_reducer";
import * as axios from "axios"
import { useParams } from "react-router-dom"


let ProfileContainer = (props) => {

    let { userId } = useParams()
    if (!userId) {
        userId = 2
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => { props.setUserProfile(response.data) })

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