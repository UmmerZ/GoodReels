import React from "react";
import AddReview from "./AddReview";
import ListReviews from "./ListReviews";
import { connect } from "react-redux";
import { avgRating } from "../utilities/avgRating";
import { getRatingClass } from "../utilities/getRatingClass";
import { Redirect } from "react-router-dom";

import "../css/Movie.css";

const Movie = (props) => {
  // receives props.movieId as prop

  let thisMovie;
  let reviewsCopy = [...props.reviews];
  let averageRating;
  let colorClass;

  // Find the movie with matching ID to pull out info from store into my variable
  for (const movie of props.movies) {

    if (movie.id === props.activeUser.clickedMovie) {
      thisMovie = { ...movie };
    }

    if (!thisMovie) thisMovie = props.movies[props.movies.length - 1];

  }

  // Calculates average movie rating and assigns class based on it
  averageRating = avgRating(thisMovie.id, reviewsCopy);
  colorClass = getRatingClass(averageRating);

  // Return HTML element with movie's info
  if (props.activeUser.username !== undefined) {
    
    return (
      <>
        <div className="row1">
          <div className="info">
            <h2 className={colorClass}>{thisMovie.title}</h2>
            
            <p><strong>Year: </strong><em>{thisMovie.year}</em></p>
            <p className="rating"><strong>User Rating: </strong><strong className={colorClass}>{averageRating}</strong></p>
            <p><strong>Genre: </strong>{thisMovie.genre}</p>
          </div>

          <img
            src={require("../img/" + thisMovie.image)}
            alt="Movie Poster"
            className={colorClass}
          />
        </div>

        <section className="synopsis">
          <h2>Synopsis</h2>
          <p>{thisMovie.synopsis}</p>
        </section>

        <section className="reviews-section">
          <ListReviews movieId={thisMovie.id} />
        </section>

        <section className="add-review-section">
          <h2 className="screen-reader-text">Add Reviews</h2>
          <AddReview />
        </section>
      </>
    );
  } else return <Redirect to="/" />;
};
export default connect((state) => ({
  movies: state.movies,
  reviews: state.reviews,
  activeUser: state.activeUser,
}))(Movie);
