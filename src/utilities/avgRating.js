

const avgRating = (movieId = "", reviews = []) => {

    let thisMovieRating = 0;
    let numberOfRatings = 0;

    // Find all matching reviews to get ratings, adds total movie rating and totals number of ratings
    for (const review of reviews){

        if (review.movieId === movieId) {
            thisMovieRating += parseFloat(review.rating);
            numberOfRatings++;
        }

    }

    // Calculates rating average
    if (!thisMovieRating)
        thisMovieRating = "TBD";
    else
        thisMovieRating =  (thisMovieRating / numberOfRatings).toFixed(1);

    
        
    
    return thisMovieRating;
}
export {avgRating};
 