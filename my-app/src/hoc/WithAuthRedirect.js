import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux"

let mapStateToPropsRedirect = (state) => ({ isAuth: state.authReducer.isAuth })

export const WithAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to="/login" />
        return <Component {...props} />
    }
    let ConnectAuthRedirectComponent = connect(mapStateToPropsRedirect, {})(RedirectComponent)
    return ConnectAuthRedirectComponent
}

