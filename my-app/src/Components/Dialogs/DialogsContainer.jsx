import React from "react";
import { AddMessageActionCreater, updateMessageActionCreater } from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux"
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

/*
function DialogsContainer(props) {

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
        newMessage: state.dialogsReducer.newMessage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);