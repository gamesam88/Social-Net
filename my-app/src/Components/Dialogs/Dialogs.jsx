import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Form, Field } from "react-final-form";

function Dialogs(props) {

    let dialogsElements = props.friends.map(d => <DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava} />)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)

    const onBattonClick = (value) => {
        props.addNewMessage(value)
    }

    const onSubmit = (e) => {
        onBattonClick(e.textarea)
    }
    const validate = (e) => {
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                {dialogsElements}
            </div>
            <div className={d.messagesItems}>
                <div className={d.messages}>
                    {messagesElements}
                </div>
                <div className={d.textInput}>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Add your message:</label>
                                    <div>
                                        <Field name="textarea" cols="30" rows="5" component="textarea" />
                                    </div>
                                </div>
                                <button type="submit">Send message</button>
                            </form>
                        )}
                    />
                </div>
            </div>
        </div>
    )
};


export default Dialogs;