import React from "react";

const Movie = () => {
    return (
        <div className="movie">
            <a href="/movie/1">
            <figure className="movie__img--wrapper">
                <img src={movie.Poster} alt="" className="movie__img"/>
            </figure>
            </a>
            <div className="movie__title">
                <a href="/movie/1" className="">
                {movie.tilte}
                </a>
            </div>
            <div className="movie__year">
                {movie.year}
            </div>
        </div>
    )
}

export default Movie