import defaultLogo from '../img/avatar2.png';


const rActiveUser = (state = {image: defaultLogo}, action) => {

    
    switch (action.type){
        
        case "LOG_IN_USER":

            return {...state, username: action.username};
        
        case "UPDATE_CLICKED_MOVIE":
        
            return {...state, clickedMovie: action.movieId}
        
        case "UPDATE_IMAGE":
    
            return {...state, image: action.image}

        default:
            return state;

    }

}
export default rActiveUser;
