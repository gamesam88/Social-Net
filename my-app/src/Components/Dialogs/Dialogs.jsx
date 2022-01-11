import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { AddMessageActionCreater } from "../../Redux/dialogs_reducer";
import { updateMessageActionCreater } from "../../Redux/dialogs_reducer";


function Dialogs(props) {

    let dialogsElements = props.dialogsPage.friends.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        props.dispatch(AddMessageActionCreater())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageActionCreater(text))
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage} cols="30" rows="5" />
                    <button onClick={addNewMessage}>Send message</button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;