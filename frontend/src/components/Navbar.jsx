import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import axios from 'axios'
import { baseurl } from '../Core'
import { useNavigate } from 'react-router-dom'

import { GlobalContext } from '../context/Context';
import { useContext, useEffect } from "react";

function Navbar() {

    const navigate = useNavigate()

    let { state, dispatch } = useContext(GlobalContext);

    const logout = () => {
        axios.get(`${baseurl}/api/v1/logout`, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res: ", res.data)
                dispatch({
                    type: "USER_LOGOUT"
                })
                navigate("/login")
            })
    }


    return (
        <>
            {(state?.user?.email == null) ?
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
                            </ul>
                        </div>
                    </div>
                </nav>
                :

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
                                        <a className="nav-link" onClick={logout}>Logout</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    )
}

export default Navbar