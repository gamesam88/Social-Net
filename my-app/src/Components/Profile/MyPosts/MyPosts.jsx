import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"
function MyPosts(props) {

    let postsElements = props.posts.map(m => <Post message={m.message} likes={m.like} />)

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;