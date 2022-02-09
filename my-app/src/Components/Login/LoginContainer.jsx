import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { loginThunk, logOutThunk } from "../../Redux/auth_reducer"

const LoginContainer = (props) => {

    return (
        <Login {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.authReducer.userId
    }
}

export default connect(mapStateToProps, { loginThunk, logOutThunk })(LoginContainer)