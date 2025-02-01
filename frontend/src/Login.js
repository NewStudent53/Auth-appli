// frontend/src/Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const errorMessage = sessionStorage.getItem('error');
        if (errorMessage) {
            setError(errorMessage);
            sessionStorage.removeItem('error');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            alert(response.data.message);
            if (response.data.token) {
                sessionStorage.setItem('token', response.data.token);
                window.location.href = '/private';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App-header">
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
