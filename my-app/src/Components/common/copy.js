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


/*
function DialogsContainer(props) {

    let state = props.store.getState()

    let addNewMessage = () => {
        props.store.dispatch(AddMessageActionCreater())
    }

    let onMessageChange = (text) => {
        let action = updateMessageActionCreater(text)
        props.store.dispatch(action)
    }

    return (<Dialogs
        addNewMessage={addNewMessage} onMessageChange={onMessageChange}
        friends={state.dialogsReducer.friends} messages={state.dialogsReducer.messages}
        newMessage={state.dialogsReducer.newMessage}
    />)
};
*/

import React from "react"
import { connect } from "react-redux"
import { follow, unfollow, setUsers, changePage, changeToggle } from "../../Redux/users_reducer"
import Users from "./Users"
import { usersAPI } from "../../api/api"

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.changeToggle(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.changeToggle(false)
                this.props.setUsers(response.items)
            })
    }
    onPageChange = (currentPage) => {
        this.props.changePage(currentPage)
        this.props.changeToggle(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.changeToggle(false)
                this.props.setUsers(response.items)
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