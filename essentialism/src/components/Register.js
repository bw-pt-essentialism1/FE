import React, { useState } from "react";
import axios from "axios";
import "../css/Register.css";

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

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    let disabled = true
    if (data.email && data.phone && data.name && data.password && data.username) {
        button.classList.remove("register-button")
        button.classList.add("activates-button")
        disabled = false
    }

    const handleSubmit = event => {
        event.preventDefault();
        // axios.post("")
        //     .then(response => {
        //     })
        //     .catch(error => {
        //         console.log("Sorry, an error has occured.", error)
        //     });
        props.history.push("/");
        button.classList.remove("activates-button")
        button.classList.add("register-button")
    };

    return (
        <div className="Register">
            <h1>Essentialism</h1>
            <h2>Create a New Account</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter  name"
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
            </form>
        </div>
    );
};

export default Register;