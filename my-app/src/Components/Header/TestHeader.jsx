import React, { useEffect } from "react";
import Header from "./Header"
import * as axios from "axios"
import { connect } from "react-redux";
import { setMyData } from "../../Redux/auth_reducer"
import { authMe } from "../../api/api"

const HeaderTest = (props) => {
    useEffect(() => {
        authMe().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                props.setMyData(id, email, login)
            }
        })
    })
    return <Header {...props} />
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
)
export default connect(mapStateToProps, { setMyData })(HeaderTest)

