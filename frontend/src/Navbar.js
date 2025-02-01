// frontend/src/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">MyApp</Link>
                <div className="navbar-buttons">
                    <Link to="/login" className="navbar-button">Login</Link>
                    <Link to="/signup" className="navbar-button">Signup</Link>
                    <button onClick={handleLogout} className="navbar-button">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
