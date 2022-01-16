
import SideBar from "./SideBar"
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarReducer.friends
    }
}

let mapDispatchToProps = () => {
    return {
    }
}

export const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)


