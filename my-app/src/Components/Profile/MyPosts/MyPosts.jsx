import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"
import { addPostActionCreator } from "../../../Redux/profile_reducer";
import { updatePostActionCreater } from "../../../Redux/profile_reducer";


function MyPosts(props) {

    let postsElements = props.profilePage.posts.map(m => <Post message={m.message} likes={m.like} />)

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostActionCreater(text))
    }

    {/*
    let newPostElement = React.createRef()

    } let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostActionCreater(text))
    }

    ref={newPostElement} 
*/}

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <textarea placeholder="Yo write something here." onChange={onPostChange} value={props.profilePage.newPost} name="" id="" cols="30" rows="5"></textarea>
                <button onClick={addNewPost}>Send</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;