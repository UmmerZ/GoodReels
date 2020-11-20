import React from "react";
import ListMovies from "./ListMovies";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Browse.css";
import { useState } from "react";

const Browse = (props) => {

  let [searchTerm, updateSearch] = useState("");

  if (props.activeUser.username !== undefined) {

    // Search, filter, then lists all movies based on the searched Term
    return (
      <>
        <form
            onSubmit={(event) => {
            event.preventDefault();
        }}>

          <div className="searchbox-div">

            <label htmlFor="movie-search" className="screen-reader-text">
              Enter Movie Name
            </label>
            <input
              id="movie-search"
              type="search"
              onChange={(e) => updateSearch(e.target.value)}
              value={searchTerm}
              placeholder="Search Movie"
            />
          </div>

        </form>

        <section className="main-section">
          <h2 className="screen-reader-text">Movies Section</h2>
          <ListMovies searchTerm={searchTerm} />
        </section>
      </>
    );
  } else return <Redirect to="/" />;
};

export default connect((state) => ({ activeUser: state.activeUser }))(Browse);
