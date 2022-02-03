import React, { useEffect } from "react";
import Header from "./Header"
import { connect } from "react-redux";
import { authoriseThunkCreator } from "../../Redux/auth_reducer"

const HeaderTest = (props) => {
    useEffect(() => {
        props.authoriseThunkCreator()
    }, [])
    return <Header {...props} />
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
)
export default connect(mapStateToProps, { authoriseThunkCreator })(HeaderTest)
