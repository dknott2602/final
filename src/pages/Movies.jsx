import React, { useState, useEffect } from "react";




const Movies = () => {
    const [movies, setMovies] = useState()

async function renderMovies(filter) {
    const moviesWrapper = document.querySelector('.movies')

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=8855abea&s=fast`
    );

    const data = await response.json();

    
    let movies = []
    
    if (filter === 'A_Z') {
        data.Search.sort((a, b) => b.Year - a.Year);
    }
    else if (filter === 'Z_A') {
        data.Search.sort((a, b) => a.Year - b.Year);
    }
    else if (filter === 'YEAR') {
        movies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }
    
    
    const indexHtml = data.Search.map((movies) => {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
    <img class="movie__img" src="${movies.Poster}" alt="">
    </figure>
    <div class="movie__title">
        ${movies.Title}
    </div>
    <div class="movie__year">
        ${movies.Year}
    </div>
    </div>`
        })
    .join("");
        
    moviesWrapper.innerHTML = indexHtml    
}
    
function filterMovies(event) {
    renderMovies(event.target.value);
    }
    
setTimeout (() => {
    renderMovies();
});
    

// moviesWrapper.classList += ' movies__loading'

    
    
// moviesWrapper.classList.remove('movies__loading')


    return (
        <div id="movies__body">
            <main id="movies__main">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="movies__header">
                                <h2 className="section__tilte movies__header--title">
                                    All <span className="yellow">Movies</span>
                                </h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterMovies(event.target.value)}>
                                    <option value="DEFAULT" disabled>Sort</option>
                                    <option value="A_Z">A-Z</option>
                                    <option value="Z_A">Z-A</option>
                                    <option value="YEAR">Year</option>
                                </select>
                            </div>
                            <div className="movies"></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Movies