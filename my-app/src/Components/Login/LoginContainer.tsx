import React, { FC } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { loginThunk, logOutThunk } from "../../Redux/auth_reducer"
import { AppStateType } from '../../Redux/redux-store';

type MapStateToPropsType = {
    userId: number | null
}

type MapDispathToPropsType = {
    loginThunk: (email: string | null, password: string | null, rememberMe: boolean) => void
    logOutThunk: () => void
}

type LoginStateType = MapStateToPropsType & MapDispathToPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        userId: state.authReducer.userId
    }
}

const LoginContainer: React.FC = (props) => {
    return (
        <Login  {...props} />
    )
}



export default connect(mapStateToProps, { loginThunk, logOutThunk })(LoginContainer)