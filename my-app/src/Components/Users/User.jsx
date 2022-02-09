import React from "react";
import style from "./Users.module.css"
import avatarUser from "./../../assets/images/avatarUser.jpg"
import { NavLink } from "react-router-dom";

let User = (props) => {
    return <div>{
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
                                props.unfollowThunkCreator(u.id)
                            }}>Unfollow</button>

                            : <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunkCreator(u.id)
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
            </div>)}
    </div>
}

export default User

