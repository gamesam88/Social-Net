import React from "react";
import { AddMessageActionCreater, updateMessageActionCreater } from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux"
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        friends: state.dialogsReducer.friends,
        messages: state.dialogsReducer.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (message) => {
            dispatch(AddMessageActionCreater(message))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);