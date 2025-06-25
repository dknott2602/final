import React from "react";
import IMBDImage from "../Assets/IMBD.jpg"

const Footer = () => {
    return( 
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                    <figure className="footer__logo">
                        <img src={IMBDImage} className="footer__logo--img" alt="" />
                    </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className="footer__link">Home</a>
                        <span className="footer__link no_cursor">About</span>
                        <a href="/movies" className="footer__link">Movies</a>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2025 Movies
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer