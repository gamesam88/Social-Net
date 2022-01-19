import React from "react";
import { connect } from "react-redux"
import { followAC } from "../../Redux/users_reducer"
import { unfollowAC } from "../../Redux/users_reducer"
import { setUsersAC } from "../../Redux/users_reducer"
import Users from "./Users"


let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;