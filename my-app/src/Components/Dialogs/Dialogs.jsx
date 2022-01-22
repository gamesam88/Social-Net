import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs(props) {

    let dialogsElements = props.friends.map(d => <DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava} />)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)

    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        props.addNewMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessage} cols="30" rows="5" />
                    <button onClick={addNewMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;