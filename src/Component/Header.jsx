import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Service">Service</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header