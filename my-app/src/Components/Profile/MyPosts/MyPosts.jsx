import React from "react";
import Post from "./Post/Post"
import MyP from "./MyPosts.module.css"
function MyPosts() {
    return (
        <div className={MyP.main}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
            <Post message="Hello, how are you" like="7" />
            <Post message="Fine, and you?" like="15" />
            <Post />
        </div>
    )
};

export default MyPosts;