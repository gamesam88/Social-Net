import React from "react";
import { Form, Field } from 'react-final-form'
import style from "./ProfileInfo.module.css"
import { profileDataValidation } from "../../../utilits/validators/validators"

const ProfileDataForm = (props) => {

    const onSubmit = (values) => {
        props.saveProfileInfoThunk(values)
        console.log(values)
    }
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={props.userProfile}
                validate={(values) => profileDataValidation.validateForm(values)}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="fullName" >
                                {({ input, meta }) => (
                                    <div>
                                        <label>Name: </label>
                                        <input {...input} type="text" placeholder="" autoComplete="off" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="aboutMe" >
                                {({ input, meta }) => (
                                    <div>
                                        <label>About me: </label>
                                        <input {...input} type="textarea" autoComplete="off" placeholder="" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div>
                                <span>Looking for a job: </span>
                                <Field name="lookingForAJob" component="input" type="checkbox" />
                            </div>
                            <Field name="lookingForAJobDescription" >
                                {({ input, meta }) => (
                                    <div>
                                        <label>lookingForAJobDescription:  </label>
                                        <input {...input} type="textarea" autoComplete="off" placeholder="" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div>{Object.keys(props.userProfile.contacts).map(key => {
                                return (
                                    <Field name={"contacts." + key} >
                                        {({ input, meta }) => (
                                            <div>
                                                <label>{key}: </label>
                                                <input {...input} type="text" autoComplete="off" placeholder="" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                )
                            })}</div>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                )}
            />
        </div>)

}


export default ProfileDataForm;