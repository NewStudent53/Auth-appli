import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Private from './Private';
import Navbar from './Navbar';

const App = () => {
    const [error, setError] = useState('');

    const PrivateRoute = ({ children }) => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            setError('You must be logged in to access this page.');
            return <Navigate to="/" />;
        }
        return children;
    };

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>} />
                <Route path="/" element={
                    <div className="App-header">
                        <h1>Home Page</h1>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                } />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default App;
