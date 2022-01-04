import React from "react";
import d from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={d.dialog}>
            <NavLink to="/dialogs" className={navData => navData.isActive ? d.active : d.free}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>
            {props.message}
        </div>
    )
}

function Dialogs() {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItem}>
                <DialogItem name="Aleks" id="1" />
                <DialogItem name="Nazar" id="2" />
                <DialogItem name="Anton" id="3" />
            </div>
            <div className={d.messages}>
                <Message message="Hellow!" />
                <Message message="Go wolk!" />
                <Message message="Hellow! Of course!" />
            </div>
        </div>
    )
};

export default Dialogs;