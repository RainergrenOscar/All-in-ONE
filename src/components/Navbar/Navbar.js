import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import { useState } from 'react';
import { FaTimes,FaBars } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className="header">
            <div className="header__content">
                <NavLink to="/" className="header__content__logo">
                    <h1>aio.</h1>
                </NavLink>
                    <ul className="header__content__nav">
                        <li>
                        <NavLink
                            to="/cryptotrackerapi"
                            className="header__content__nav__links"
                            >
                            Crypto Tracker
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink
                            to="/randomfactsapi"
                            className="header__content__nav__links" 
                            >
                            Ye Quotes
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink
                            to="/recipeapi"
                            className="header__content__nav__links" 
                            >
                            Recipe generator
                        </NavLink> 
                        </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
