import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <NavLink className="navbar-brand" to="#">AKTU Login Page</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink exact activeClassName='active' className="nav-link" to="">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName='active' className="nav-link" to="/about">Courses</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;



