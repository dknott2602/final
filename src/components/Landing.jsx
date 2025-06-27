import React, { useState } from "react";
import OMBDImage from "../Assets/OMBD.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  function SearchComponent({ data }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("DEFAULT")

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    function handleSearchSubmit() {
      renderMovies(searchTerm, filter);
    }

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
      <section id="landing">
        <header>
          <div className="container">
            <div className="content__wrapper">
              <h1>America's largest online movie platform</h1>
              <h2>
                Find your favorite movie with{" "}
                <span className="yellow">IMDb</span>
              </h2>
              <div className="input__wrap">
                <input
                  type="text"
                  placeholder="Search By Title or Keyword"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleSearchSubmit();
                    }}}
                />
                <div className="search__wrapper">
                  <FontAwesomeIcon icon="magnifying-glass" />
                </div>
              </div>
            </div>
          </div>
          <figure className="header__img">
            <img src={OMBDImage} className="header__img--logo" alt="" />
          </figure>
        </header>
      </section>
    );
  }
  return <SearchComponent data={[]} />;
};

export default Landing;
