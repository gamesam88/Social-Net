import React from "react";
import { addPost } from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPost) => {
            dispatch(addPost(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)