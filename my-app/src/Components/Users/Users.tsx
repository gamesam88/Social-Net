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
    onPageChange: () => void
    currentPage: number
    inProgress: Array<number>
    followThunkCreator: () => void
    unfollowThunkCreator: () => void
}

const Users = (props: any) => {
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

