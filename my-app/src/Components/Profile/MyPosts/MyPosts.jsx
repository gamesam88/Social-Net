import React from "react";
import Post from "./Post/Post"
import My from "./MyPosts.module.css"
import { Form, Field } from "react-final-form";

const MyPosts = React.memo((props) => {

    let postsElements = [...props.posts].reverse().map(m => <Post key={m.id} message={m.message} likes={m.like} />)

    let onPostSend = (newPost) => {
        props.addNewPost(newPost)
    }

    const onSubmit = (e) => {
        onPostSend(e.textarea)
    }
    const validate = (e) => {
    }

    return (
        <div className={My.main}>
            <div className={My.textButton}>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <Field name="textarea" placeholder="Add your message:" cols="30" rows="5" component="textarea" />
                                </div>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    )}
                />
            </div>
            {postsElements}
        </div>
    )
})

export default MyPosts;
