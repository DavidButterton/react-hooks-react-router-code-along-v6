import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {

    return (
        <>
        <NavLink
        to="/"
        className="nav-link"
        >
            Home
        </NavLink>
        <NavLink
        to="/"
        className="nav-link"
        >
            About
        </NavLink>
        <NavLink
        to="/"
        className="nav-link"
        >
            Login
        </NavLink>
        </>
    )
}

export default NavBar;