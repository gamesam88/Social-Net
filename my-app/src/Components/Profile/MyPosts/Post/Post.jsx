import React from "react";
import Po from "./Post.module.css"
import kote from "../../../../assets/images/kateika.jpg"

function Post(props) {

    if (props.message) {
        return (
            <div className={Po.main}>
                <img src={kote}></img>
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