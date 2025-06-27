import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Initialize with a default search term
  const [filter, setFilter] = useState("DEFAULT"); // State for the filter

  async function renderMovies(search = searchTerm, currentFilter = filter) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=8855abea&s=${search}`
    );

    const data = await response.json();

    let moviesData = data.Search;

    if (moviesData) {
      if (currentFilter === "A_Z") {
        moviesData.sort((a, b) => a.Title.localeCompare(b.Title));
      } else if (currentFilter === "Z_A") {
        moviesData.sort((a, b) => b.Title.localeCompare(a.Title));
      } else if (currentFilter === "YEAR") {
        moviesData.sort((a, b) => Number(b.Year) - Number(a.Year));
      }
      setMovies(moviesData);
    } else {
      setMovies([]); // Clear movies if no results
    }
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit() {
    renderMovies(searchTerm, filter);
  }

  function handleFilterChange(event) {
    const newFilter = event.target.value;
    setFilter(newFilter);
    renderMovies(searchTerm, newFilter);
  }

  useEffect(() => {
    renderMovies(); // Initial render when component mounts
  }, []); // Empty dependency array means this runs once on mount

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
                  value={filter} // Bind select value to filter state
                  onChange={handleFilterChange}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="A_Z">A-Z</option>
                  <option value="Z_A">Z-A</option>
                  <option value="YEAR">Year</option>
                </select>
              </div>
              <div className="input__wrap">
                <input
                  type="text"
                  placeholder="Search By Title or Keyword"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleSearchSubmit();
                    }
                  }}
                />
                <div className="search__wrapper" onClick={handleSearchSubmit}>
                  <FontAwesomeIcon icon="magnifying-glass" />
                </div>
              </div>
              <div className="movies">
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <Link
                      style={{ width: "25%" }}
                      key={movie.imdbID}
                      to={`/movies/${movie.imdbID}`}
                    >
                      <div className="movie">
                        <figure className="movie__img--wrapper">
                          <img
                            className="movie__img"
                            src={movie.Poster}
                            alt=""
                          />
                        </figure>
                        <div className="movie__title">{movie.Title}</div>
                        <div className="movie__year">{movie.Year}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="no-movies">No movies found.</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;