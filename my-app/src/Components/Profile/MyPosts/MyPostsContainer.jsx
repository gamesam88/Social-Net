import React from "react";
import { addPost, updatePost } from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"

let mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPost: state.profileReducer.newPost
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addNewPost: () => {
            dispatch(addPost())
        },
        onPostChange: (text) => {
            let action = updatePost(text)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)