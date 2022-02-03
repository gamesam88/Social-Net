import { React, useEffect } from "react"
import { connect } from "react-redux"
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, changePage } from "../../Redux/users_reducer"
import Users from "./Users"
import { compose } from "redux"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"

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
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalCounts: state.usersReducer.totalCounts,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        inProgress: state.usersReducer.inProgress,
        isAuth: state.authReducer.isAuth
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

