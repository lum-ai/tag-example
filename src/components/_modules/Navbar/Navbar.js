import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-container">
                        <ul className="navbar-links">
                            <li>
                                <NavLink to="/Home">
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
