import React from "react";
import style from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    fullName: "Aleksander D",
                    avatar: "https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-6.jpg",
                    statusUser: "Hello",
                    location: { city: "Moscow", country: "Russia" },
                    followState: true
                },
                {
                    id: 2,
                    fullName: "Potter G",
                    avatar: "https://i.pinimg.com/736x/ed/8c/92/ed8c927354330ff8d1b4cffbb1c372f1--lew-doodle.jpg",
                    statusUser: "Hello",
                    location: { city: "London", country: "England" },
                    followState: true
                },
                {
                    id: 3,
                    fullName: "Frady K",
                    avatar: "https://avatarko.ru/img/kartinka/33/shlyapa_film_devushka_Freddy_Krueger_33462.jpg",
                    statusUser: "Hello",
                    location: { city: "New-York", country: "USA" },
                    followState: false
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.avatar} />
                    </div>
                    <div>
                        {u.followState
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.statusUser}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>)
        }
    </div>

}

export default Users
