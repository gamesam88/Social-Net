import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"
function MyPosts() {

    let postsData = [
        { id: "1", message: "Hello, how are you", like: "4" },
        { id: "2", message: "Fine, and you?", like: "7" },
        { id: "3", message: "Im fine.", like: "15" },
    ]

    let postsElements = postsData.map(m => <Post message={m.message} likes={m.like} />)

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;