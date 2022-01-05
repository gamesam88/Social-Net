import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs() {
    let friendsData = [
        { id: "1", name: "Aleks" },
        { id: "2", name: "Nazar" },
        { id: "3", name: "Anton" },
    ]

    let messagesData = [
        { id: "1", message: "Hellow!" },
        { id: "2", message: "Go wolk!" },
        { id: "3", message: "Hellow! Of course!" },
    ]

    let DialogsElements = friendsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messagesData.map(m => <Message message={m.message} id={m.id} />)


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