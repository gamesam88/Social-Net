import { React, useEffect } from "react"
import { connect } from "react-redux"
import { follow, unfollow, setUsers, changePage, changeToggle, changeProgress } from "../../Redux/users_reducer"
import Users from "./Users"
import { usersAPI } from "../../api/api"

const UsersApiComponent = (props) => {

    useEffect(() => {
        console.log("useEffect")
        props.changeToggle(true)
        usersAPI.getUsers(props.currentPage, props.pageSize)
            .then(response => {
                props.changeToggle(false)
                props.setUsers(response.items)
            })
    }, [])

    const onPageChange = (currentPage) => {
        console.log("onPageChan")
        props.changePage(currentPage)
        props.changeToggle(true)
        usersAPI.getUsers(props.currentPage, props.pageSize)
            .then(response => {
                props.changeToggle(false)
                props.setUsers(response.items)
            })
    }
    return <Users totalCounts={props.totalCounts}
        pageSize={props.pageSize}
        onPageChange={onPageChange}
        currentPage={props.currentPage}
        users={props.users}
        unfollow={props.unfollow}
        follow={props.follow}
        changeToggle={props.changeToggle}
        isFetching={props.isFetching}
        changeProgress={props.changeProgress}
        inProgress={props.inProgress}
    />

}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalCounts: state.usersReducer.totalCounts,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        inProgress: state.usersReducer.inProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    changeToggle,
    changeProgress,
})(UsersApiComponent)