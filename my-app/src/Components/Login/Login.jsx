import React from "react";
import { Form, Field } from 'react-final-form'
import style from "./Login.module.css"
import { formValidation } from "../../utilits/validators/validators"



const Login = (props) => {

    const onSubmit = (values) => {
        debugger
        props.loginThunk(values)
        console.log(values)
    }
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={(values) => formValidation.validateForm(values)}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field name="email" >
                                {({ input, meta }) => (
                                    <div>
                                        <label>Email: </label>
                                        <input {...input} type="email" placeholder="email" autoComplete="current-email" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password" >
                                {({ input, meta }) => (
                                    <div>
                                        <label>Password: </label>
                                        <input {...input} type="password" autoComplete="current-password" placeholder="Password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <div>
                                <Field name="rememberMe" component="input" type="checkbox" />
                                <span>remember me</span>
                            </div>
                        </div>
                        <button type="submit">Log In</button>
                        <button onClick={props.logOutThunk} type="button">Log Out</button>
                    </form>
                )}
            />

        </div>

    )

}

export default Login

