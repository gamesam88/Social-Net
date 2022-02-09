import React from "react";
import Header from "./Header"
import { connect } from "react-redux";
import { logOutThunk } from "../../Redux/auth_reducer"

const HeaderContainer = (props) => {

    return <Header {...props} />
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
)
export default connect(mapStateToProps, { logOutThunk })(HeaderContainer)
