import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"

function MyPosts(props) {
    let postsElements = props.posts.map(m => <Post key={m.id} message={m.message} likes={m.like} />)

    let addNewPost = () => {
        props.addNewPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text)
    }
    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea placeholder="Yo! Write something here." onChange={onPostChange} value={props.newPost} cols="30" rows="5"></textarea>
                <button onClick={addNewPost}>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;