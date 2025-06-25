import React from "react";

const Movies = () => {
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
                                <select id="filter" defaultValue="DEFAULT">
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