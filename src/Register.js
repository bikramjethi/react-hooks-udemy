import React, { useState } from 'react';

const initialState = { username: "", email: "", password: "" };

export default function Register() {
    const [form, setForm] = useState(initialState);
    const [user, setUser] = useState(null);

    const { username, password, email } = form;

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialState);
    }

    return <div style={{ textAlign: "center" }}>
        <h2>Register</h2>
        <form
            style={{
                display: "grid",
                alignItems: "center",
                justifyItems: "center"
            }}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={username}
            />
            <input
                type="email"
                placeholder="Enter email address"
                name="email"
                onChange={handleChange}
                value={email}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={password}
            />
            <button type="submit">Register</button>
            {user && JSON.stringify(user)}
        </form>
    </div>;
}