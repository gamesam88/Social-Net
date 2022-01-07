import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"

function MyPosts(props) {

    let postsElements = props.posts.map(m => <Post message={m.message} likes={m.like} />)

    let newPostElement = React.createRef()

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={addNewPost}>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;