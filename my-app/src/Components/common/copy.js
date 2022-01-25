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