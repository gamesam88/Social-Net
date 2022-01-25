import React from "react";
import Header from "./Header"
import * as axios from "axios"
import { connect } from "react-redux";
import { setMyData } from "../../Redux/auth_reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setMyData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
}
)
export default connect(mapStateToProps, { setMyData })(HeaderContainer)