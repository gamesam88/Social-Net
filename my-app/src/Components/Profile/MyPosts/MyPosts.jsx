import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"

function MyPosts(props) {

    let postsElements = props.profilePage.posts.map(m => <Post message={m.message} likes={m.like} />)

    let newPostElement = React.createRef()


    let addNewPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text)
    }

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea placeholder="Yo write something here." onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPost} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={addNewPost}>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;