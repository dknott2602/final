import React from 'react'
import OMBDImage from '../Assets/OMBD.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="container">
                    <div className="content__wrapper">
                        <h1>America's largest online movie platform</h1>
                        <h2>Find your favorite movie with <span className="yellow">IMDb</span></h2>
                        <div className="input__wrap">
                            <input type="text" placeholder="Search By Title or Keyword" id='' />
                            <div className="search__wrapper">
                                <FontAwesomeIcon icon="magnifying-glass" />
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="header__img">
                    <img src={OMBDImage} className="header__img--logo"alt="" />
                </figure>
            </header>

        </section>
    );
}

export default Landing