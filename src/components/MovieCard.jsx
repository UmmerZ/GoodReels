import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateClickedMovie } from "../actions/aActiveUser";
import { avgRating } from '../utilities/avgRating';
import { getRatingClass } from '../utilities/getRatingClass'
import "../css/MovieCard.css";

// Props Required: movieId

const MovieCard = (props) => {
  let thisMovie = {};
  let averageRating;
  let colorClass;

  // Find the movie with given ID to show, find it in store and copy it into thisMovie object.
  for (let movie of props.movies) {
    if (movie.id === props.movieId) {
      thisMovie = { ...movie };
    }
  }

  // Keeps track of which movie user clicked on
  const passInId = (e) => {
    props.dispatch(updateClickedMovie(thisMovie.id));
  };

  // Calculates average ratings and assigns classes for colors based on rating
  averageRating = avgRating(thisMovie.id, props.reviews);
  colorClass = getRatingClass(averageRating);

  return (
    <>
      <Link to="/Movie" onClick={passInId} >
        <div className="movie-card">
          <div className="card-title">
            <p>
              <strong>{thisMovie.title}</strong> ({thisMovie.year})
            </p>
          </div>

          <div className="card-poster ">
            <img src={require(`../img/${thisMovie.image}`)} alt="Movie Poster" className={colorClass}/>
          </div>
        </div>
      </Link>
    </>
  );
};
export default connect((state) => ({
  movies: state.movies,
  reviews: state.reviews,
  state: state,
}))(MovieCard);
