import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import "../App.css"

function ErrorPage() {
    return (
        <div className="error_page">
            <div>
                <h1>Error 404</h1>
            </div>
            <h1>Sorry! Page Not Found</h1>
            <p>
                The page you are looking for might have been removed <br />
                had its name changed or its temporarily unavailable
            </p>
            <NavLink to="/">
                <Button type="submit" variant="contained" color="primary" style={{ width: "fit-content" }}>Back to Home Page</Button>
            </NavLink>
        </div>
    )
}

export default ErrorPage