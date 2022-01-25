import React from "react"
import { connect } from "react-redux"
import { follow, unfollow, setUsers, changePage, changeToggle } from "../../Redux/users_reducer"
import * as axios from "axios"
import Users from "./Users"

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.changeToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeToggle(false)
                this.props.setUsers(response.data.items)
            })
    }
    onPageChange = (currentPage) => {
        this.props.changePage(currentPage)
        this.props.changeToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeToggle(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalCounts={this.props.totalCounts}
            pageSize={this.props.pageSize}
            onPageChange={this.onPageChange}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            changeToggle={this.props.changeToggle}
            isFetching={this.props.isFetching} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalCounts: state.usersReducer.totalCounts,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    changeToggle
})(UsersApiComponent)