import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs(props) {

    let DialogsElements = props.state.friends.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                {DialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;