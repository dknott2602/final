import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMBDImage from "../Assets/IMBD.jpg";

const Nav = () => {
  function openMenu() {
    document.body.classList += "menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={IMBDImage} alt="" className="logo" />
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
          <li className="nav__list">
            <a href="/" className="nav__link nav__link--primary">
              Contact
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
              <a href="/" className="menu__link">
                Find Your Movie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
