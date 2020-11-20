
const logInUser = (username) => {


    return {
        
        type: "LOG_IN_USER",
        username

    };
}

const updateClickedMovie = (movieId) => {


    return {
        
        type: "UPDATE_CLICKED_MOVIE",
        movieId

    };
}

const updateImage = (image) => {


    return {
        
        type: "UPDATE_IMAGE",
        image

    };
}

export { logInUser, updateClickedMovie, updateImage };