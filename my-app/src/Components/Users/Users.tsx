import React, { useState } from "react";
import style from "./Users.module.css"
import Preloader from "../common/preloader/Preloader"
import User from "./User";
import Paginator from "../common/paginator/Paginator"
import { ProfileType } from "../../Redux/profile_reducer";

export type UsersPropsType = {
    isFetching: boolean
    users: Array<ProfileType>
    pageSize: number
    portionSize: number
    totalCounts: number
    onPageChange: (userId: number) => void
    currentPage: number
    inProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    const fetchState = () => {
        if (props.isFetching) {
            return <Preloader />
        }
    }
    return (
        < div >
            <Paginator {...props} />
            <div>
                {fetchState()}
            </div>
            <User {...props} />
        </div >)
}

export default Users

