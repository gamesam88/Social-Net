let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (currentPage) => {
            dispatch(changePageAC(currentPage))
        },
        changeToggle: (isFetching) => {
            dispatch(changeToggleAC(isFetching))
        }
    }
}


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