import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MovieInfo = () => {
  return (
    <div className="movies__body">
      <main id="movies__main">
        <div className="movies__container">
          <div className="row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
                  alt=""
                  className="movie__selcted--img"
                />
              </figure>
              <div className="movie__selected--description">
                <h2 className="movie__selected--title">
                  The Fast and the Furious
                </h2>
              </div>
              <div className="movie__selected--year">2001</div>
              <div className="movie__summary">
                <h3 className="movie__summary--title">Summary</h3>
                <p className="movie__summary--para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  tenetur, nulla ullam, provident vero consequatur sit
                  consectetur pariatur culpa quisquam omnis dolore autem libero
                  eos ea qui assumenda saepe sint.
                </p>
                <p className="movie__summary--para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  tenetur, nulla ullam, provident vero consequatur sit
                  consectetur pariatur culpa quisquam omnis dolore autem libero
                  eos ea qui assumenda saepe sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieInfo;
