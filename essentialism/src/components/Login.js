import React, { useState } from "react"
import styled from "styled-components"
import "./css/login.css";



function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <LoginDiv>
            <h1 class="loginh1">Essentialism</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h5>E-Mail Address</h5>
                    <input class="input" type="text" placeholder="input your email.." name="email" onChange={handleChange} value={values.email} />
                </div>
                <div>
                    <h5>Password</h5>
                    <input class="input" type="password" placeholder="input your password..." name="password" onChange={handleChange} value={values.password} />
                </div>
                <RegisterLink>
                    <p>New user?</p>
                    <p>Forgot password?</p>
                </RegisterLink>
                <Button type="submit">Sign In</Button>
            </form>
        </LoginDiv>
    )
}

const LoginDiv = styled.section`
    background: gray;
    width: 70%;
    margin: 0 auto;
`

const RegisterLink = styled.div`
    background: blue;
    display:flex;
    justify-content: space-evenly;
    margin:0 auto;
    width: 60%;

`

const Button = styled.button`
   padding: 1%;

`




export default Login