import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">TH-MERNstack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">

                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </li>
                            </Link>

                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                            </Link>

                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link">Contact Us</a>
                                </li>
                            </Link>

                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link">Login</a>
                                </li>
                            </Link>

                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link">Registration</a>
                                </li>
                            </Link>

                            <li className="nav-item">
                                <a className="nav-link">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar