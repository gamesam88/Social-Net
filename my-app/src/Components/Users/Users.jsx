import React from "react";
import style from "./Users.module.css"
import avatarUser from "../../assets/images/avatarUser.jpg"
import Preloader from "../../Components/common/preloader/Preloader"
import { NavLink } from "react-router-dom";

let Users = (props) => {
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
                                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
