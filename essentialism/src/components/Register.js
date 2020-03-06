import React, { useState } from "react";
import axios from "axios";
import "../css/Register.css";
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../utils/Spinner"

const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    username: ""
};

const Register = props => {
    const [data, setData] = useState(initialState);
    const button = document.getElementById("register-button")
    const { error, isLoading } = useSelector(state => state)

    const dispatch = useDispatch()
    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let disabled = true
    if (button && data.email && data.phone && data.name && data.password && data.username) {
        button.classList.remove("register-button")
        button.classList.add("activates-button")
        disabled = false
    }

    const handleSubmit = async (e, user) => {
        e.preventDefault();
        try {
            dispatch({ type: USER_REGISTER_START })
            await axios.post("https://essentialism-backend1.herokuapp.com/auth/register", user)
            props.history.push("/");
            button.classList.remove("activates-button")
            button.classList.add("register-button")
            setData({
                name: "",
                email: "",
                phone: "",
                password: "",
                username: ""
            })
            dispatch({ type: USER_REGISTER_SUCCESS })
        }
        catch (err) {
            console.log(err)
            dispatch({ type: USER_REGISTER_FAILURE })

        }
    };


    return (
        <div className="Register">
            <h1>Essentialism</h1>
            <h2>Create a New Account</h2>
            <form onSubmit={e => handleSubmit(e, data)}>
                <label>First Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={data.name}
                    onChange={handleChange}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={data.phone}
                    onChange={handleChange}
                />
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={data.username}
                    onChange={handleChange}
                />
                <label>E-Mail Address</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter E-Mail Address"
                    value={data.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleChange}
                />
                <button disabled={disabled} id="register-button" className="register-button" type="submit">Submit</button>
                {error && <p>{error}</p>}
                {isLoading && <Spinner />}
            </form>
        </div>
    );
};

export default Register;


export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';