import React, { useEffect, FC } from "react"
import { connect } from "react-redux"
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, changePage } from "../../Redux/users_reducer"
import Users from "./Users"
import { compose } from "redux"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { getUsers, getPageSize, getTotalCounts, getPortionSize, getCurrentPage, getIsFetching, getInProgress, getIsAuth } from "../../Redux/users-selectors"
import { AppStateType } from "../../Redux/redux-store"
import { ProfileType } from "../../Redux/profile_reducer"

type OwnPropsType = {

}

type MapStateToPropsType = {
    isFetching: boolean
    users: Array<ProfileType>
    pageSize: number
    portionSize: number
    totalCounts: number
    currentPage: number
    inProgress: Array<number>
    isAuth: boolean
}

type MapDispathToPropsType = {
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    changePage: (currentPage: number) => void
}

type UsersContainerPropsType = MapDispathToPropsType & MapStateToPropsType



const UsersApiComponent: FC<UsersContainerPropsType> = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])

    const onPageChange = (currentPage: number) => {
        props.getUsersThunkCreator(currentPage, props.pageSize)
    }

    return <Users
        users={props.users}
        pageSize={props.pageSize}
        portionSize={props.portionSize}
        totalCounts={props.totalCounts}
        onPageChange={onPageChange}
        currentPage={props.currentPage}
        inProgress={props.inProgress}
        isFetching={props.isFetching}
        followThunkCreator={props.followThunkCreator}
        unfollowThunkCreator={props.unfollowThunkCreator}
    />
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCounts: getTotalCounts(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        inProgress: getInProgress(state),
        isAuth: getIsAuth(state),
        portionSize: getPortionSize(state)
    }
}

export default compose(connect<MapStateToPropsType, MapDispathToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
    changePage
}),
    WithAuthRedirect)
    (UsersApiComponent)

