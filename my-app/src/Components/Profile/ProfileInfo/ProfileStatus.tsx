import React, { useState, useEffect, ChangeEventHandler, ChangeEvent } from 'react';

type PropsType = {
    status: string
    updateStatusThunk: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

const ProfileStatus: React.FC<PropsType> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setstatus] = useState(props.status);
    useEffect(() => {
        setstatus(props.status)
    }, [props.status])
    let handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setstatus(e.target.value)
    }

    let onStatusChange = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    return (
        <div>
            <div>{!editMode &&
                <span onDoubleClick={() => setEditMode(true)} >{
                    props.status ? props.status : "no status"
                }</span>}
            </div>
            <div>{editMode &&
                <input autoFocus={true} onBlur={() => onStatusChange()} value={status} onChange={handleStatus} />}
            </div>
        </div>
    )
}

export default ProfileStatus;




