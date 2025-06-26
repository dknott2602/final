import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  async function renderMovies(filter) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=8855abea&s=fast`
    );

    const data = await response.json();

    let moviesData = data.Search;

    if (filter === "A_Z") {
      moviesData.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filter === "Z_A") {
      moviesData.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (filter === "YEAR") {
      moviesData.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    setMovies(moviesData);
  }

  function filterMovies(event) {
    renderMovies(event.target.value);
  }

  useEffect(() => {
    renderMovies();
  }, []);

  return (
    <div id="movies__body">
      <main id="movies__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="movies__header">
                <h2 className="section__title movies__header--title">
                  All <span className="yellow">Movies</span>
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterMovies(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="A_Z">A-Z</option>
                  <option value="Z_A">Z-A</option>
                  <option value="YEAR">Year</option>
                </select>
              </div>
              <div className="movies">
                {movies.map((movie) => (
                  <Link style={{ width: "25%" }} key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
                    <div className="movie">
                      <figure className="movie__img--wrapper">
                        <img className="movie__img" src={movie.Poster} alt="" />
                      </figure>
                      <div className="movie__title">
                        {movie.Title}
                      </div>
                      <div className="movie__year">
                        {movie.Year}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;