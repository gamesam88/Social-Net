import React from "react";
import { addPost, updatePost } from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"
/*
function oldMyPostsContainer(props) {
    let state = props.store.getState()

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updatePostActionCreater(text)
        props.store.dispatch(action)
    }

    return (<MyPosts
        addNewPost={addNewPost}
        onPostChange={onPostChange}
        posts={state.profileReducer.posts}
        newPost={state.profileReducer.newPost}
    />
    )
};
*/

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