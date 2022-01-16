import React from "react";
import { AddMessageActionCreater } from "../../Redux/dialogs_reducer";
import { updateMessageActionCreater } from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux"

/*
function oldDialogsContainer(props) {

    let state = props.store.getState()

    let addNewMessage = () => {
        props.store.dispatch(AddMessageActionCreater())
    }

    let onMessageChange = (text) => {
        let action = updateMessageActionCreater(text)
        props.store.dispatch(action)
    }

    return (<Dialogs
        addNewMessage={addNewMessage} onMessageChange={onMessageChange}
        friends={state.dialogsReducer.friends} messages={state.dialogsReducer.messages}
        newMessage={state.dialogsReducer.newMessage}
    />)
};
*/

let mapStateToProps = (state) => {
    return {
        friends: state.dialogsReducer.friends,
        messages: state.dialogsReducer.messages,
        newMessage: state.dialogsReducer.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(AddMessageActionCreater())
        },
        onMessageChange: (text) => {
            dispatch(updateMessageActionCreater(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;