import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "../css/login.css";
import { LoginDiv, Plinks, RegisterLink, Inputs } from "../styles"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../utils/Spinner"


function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const { error, isLoading } = useSelector(state => state)
    const dispatch = useDispatch()
    const History = useHistory()
    const button = document.getElementById("login-button")

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            dispatch({ type: USER_LOGIN_START })
            const { data } = await axios.post("https://essentialism-backend1.herokuapp.com/auth/login", values)
            History.push("/onboarding")
            disabled = true
            button.classList.add("login-button")
            localStorage.setItem("token", data.token)
            localStorage.setItem("user_id", data.id)
            setValues({
                username: "",
                password: ""
            })
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data.message, user_id: data.id, token: data.token })
        }
        catch (err) {
            console.log(err)
            dispatch({ type: USER_LOGIN_FAILURE })
        }
    }

    let disabled = true
    if (button && values.username && values.password) {
        button.classList.remove("login-button")
        button.classList.add("activate-button")
        disabled = false
    }

    return (
        <LoginDiv>
            <h1 className="loginh1">Essentialism</h1>
            <form onSubmit={handleSubmit}>
                <Inputs>
                    <h5>Username</h5>
                    <input className="input" type="text" placeholder="input your username.." name="username" onChange={handleChange} value={values.username} />
                </Inputs>
                <Inputs>
                    <h5>Password</h5>
                    <input className="input" type="password" placeholder="input your password..." name="password" onChange={handleChange} value={values.password} />
                </Inputs>
                <RegisterLink>
                    <Plinks onClick={() => History.push("/register")}>New user?</Plinks>
                    <Plinks>Forgot password?</Plinks>
                </RegisterLink>
                <button disabled={disabled} className="login-button" id="login-button" type="submit">Sign In</button>
                {error && <p>{error}</p>}
                {isLoading && <Spinner />}
            </form>
        </LoginDiv>
    )
}

export default Login

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';