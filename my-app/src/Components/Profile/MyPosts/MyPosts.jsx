import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"
function MyPosts() {
    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </div>

            <Post message="Hello, how are you" like="7" />
            <Post message="Fine, and you?" like="15" />
            <Post />
        </div>
    )
};

export default MyPosts;