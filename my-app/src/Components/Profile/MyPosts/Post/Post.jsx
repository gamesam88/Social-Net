import React from "react";
import Po from "./Post.module.css"

function Post(props) {
    if (props.message) {
        return (
            <div className={Po.main}>
                <img src="https://proprikol.ru/wp-content/uploads/2020/04/kartinki-dlya-vajbera-na-avu-44.jpg"></img>
                {props.message}
                <div>
                    Likes {props.likes}
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}
export default Post;