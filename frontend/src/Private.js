// frontend/src/Private.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Private = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            sessionStorage.setItem('error', 'You must be logged in to access this page.');
            navigate('/login');
        } else {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [navigate]);

    return (
        <div className="App-header">
            <h1>Private Page</h1>
            {error && <p className="error-message">{error}</p>}
            <p>This is a private page accessible only to authenticated users.</p>
        </div>
    );
};

export default Private;
