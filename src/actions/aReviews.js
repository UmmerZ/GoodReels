


const addReview = (movieId, username, rating, review) => {


    return {
        type: "ADD_REVIEW",
        movieId,
        username,
        rating,
        review        
    };
}

const removeReview = (id) => {

    return {
        type: "REMOVE_REVIEW",
        id: id
    };
}
export { addReview, removeReview };