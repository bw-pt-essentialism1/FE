import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "../css/login.css";
import { LoginDiv, Plinks, RegisterLink, Inputs } from "../styles"


function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const History = useHistory()
    const button = document.getElementById("login-button")

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setValues({
            email: "",
            password: ""
        })
        History.push("/onboarding")
        disabled = true
        button.classList.add("login-button")
    }

    function RouteToRegister() {
        History.push("/register")
    }

    let disabled = true
    if (values.email && values.password) {
        button.classList.remove("login-button")
        button.classList.add("activate-button")
        disabled = false
    }

    return (
        <LoginDiv>
            <h1 className="loginh1">Essentialism</h1>
            <form onSubmit={handleSubmit}>
                <Inputs>
                    <h5>E-Mail Address</h5>
                    <input className="input" type="text" placeholder="input your email.." name="email" onChange={handleChange} value={values.email} />
                </Inputs>
                <Inputs>
                    <h5>Password</h5>
                    <input className="input" type="password" placeholder="input your password..." name="password" onChange={handleChange} value={values.password} />
                </Inputs>
                <RegisterLink>
                    <Plinks onClick={RouteToRegister}>New user?</Plinks>
                    <Plinks>Forgot password?</Plinks>
                </RegisterLink>
                <button disabled={disabled} className="login-button" id="login-button" type="submit">Sign In</button>
            </form>
        </LoginDiv>
    )
}



export default Login