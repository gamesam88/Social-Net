import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs(props) {

    let dialogsElements = props.state.friends.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                    <textarea ref={newMessageElement} name="" id="" cols="30" rows="5"></textarea>
                    <button onClick={addMessage}>Send message</button>
                </div>

            </div>

        </div>
    )
};

export default Dialogs;