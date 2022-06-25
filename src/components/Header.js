import React from "react";
import Applications from './Applications';
import Stats from './Stats';
import Status from './Status';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

function Header() {

    return (
        <div className="text-center">
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>AIC GUSEC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarSupportedContent">
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to="/">Applications</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to="stats">Statistics</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to="status">Status</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Applications />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/status" element={<Status />} />
            </Routes>
        </div>
    )
}

export default Header;