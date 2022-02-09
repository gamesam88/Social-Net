import { React, useEffect } from "react"
import { connect } from "react-redux"
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, changePage } from "../../Redux/users_reducer"
import Users from "./Users"
import { compose } from "redux"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { getUsers, getPageSize, getTotalCounts, getCurrentPage, getIsFetching, getInProgress, getIsAuth } from "../../Redux/users-selectors"

const UsersApiComponent = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])

    const onPageChange = (currentPage) => {
        props.getUsersThunkCreator(currentPage, props.pageSize)
    }

    return <Users
        users={props.users}
        pageSize={props.pageSize}
        totalCounts={props.totalCounts}
        onPageChange={onPageChange}
        currentPage={props.currentPage}
        inProgress={props.inProgress}
        followThunkCreator={props.followThunkCreator}
        unfollowThunkCreator={props.unfollowThunkCreator}
    />
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCounts: getTotalCounts(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgress: getInProgress(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(connect(mapStateToProps, {
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
    changePage
}),
    WithAuthRedirect)
    (UsersApiComponent)

