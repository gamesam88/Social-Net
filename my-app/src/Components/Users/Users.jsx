import React, { useEffect, useState } from "react";
import style from "./Users.module.css"
import avatarUser from "../../assets/images/avatarUser.jpg"
import Preloader from "../../Components/common/preloader/Preloader"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api"

let Users = (props) => {
    console.log("User")
    let pagesCount = Math.ceil(props.totalCounts / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let fetchState = () => {
        if (props.isFetching) {
            return <Preloader />
        }
    }

    return (
        < div >
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={(e) => { props.onPageChange(p) }}
                        className={props.currentPage === p && style.selectPage}>{p}</span>
                })}
            </div>
            <div>
                {fetchState()}
            </div>
            <div>
                {
                    props.users.map(u =>
                        <div key={u.id}>
                            <div>
                                <div className={style.ava}>
                                    <NavLink to={"/profile/" + u.id} key={u.id}>
                                        <img alt="avatar" src={u.photos.small != null ? u.photos.small : avatarUser} />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                                            props.changeProgress(true, u.id)
                                            usersAPI.unfollowUser(u.id).then(response => {
                                                if (response === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.changeProgress(false, u.id)
                                            })
                                        }}>Unfollow</button>

                                        : <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                                            props.changeProgress(true, u.id)
                                            usersAPI.followUser(u.id).then(response => {
                                                if (response === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.changeProgress(false, u.id)
                                            })
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >)
}

export default Users

