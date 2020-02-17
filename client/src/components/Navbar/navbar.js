import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

 function Navbar() {
    return (
        <nav className="navbar navbar-custom fixed-top navbar-expand-lg">
            <Link to="/" className="navbar-brand">Exercise Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto text-decoration-none">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">New Exercise</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;