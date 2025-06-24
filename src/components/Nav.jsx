import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMBDImage from './assets/IMBD.jpg'


const Nav = () => {
    return (
<nav>
    <div className="nav__container">
        <a href="/">
        <img src={IMBDImage} alt="" className="logo"/>
        </a>
        <ul className="nav__links">
            <li className="nav__list">
                <a href="/" className="nav__link">
                Home
                </a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">
                Find Your Movie
                </a>
            </li>
            <button className="btn__menu">
                <FontAwesomeIcon icon="bars" />
            </button>
        </ul>
    </div>
</nav>
    )
}

export default Nav