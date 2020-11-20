import { v4 as uuidv4 } from 'uuid';
const initialState = require("../defaults/movies.json");




const rMovies = (state = initialState, action) => {

    
    switch (action.type){
        
        case "ADD_MOVIE":{
            
            const newMovie = {
                
                id: uuidv4(),
                title: action.title,
                year: action.year,
                genre: action.genre,
                image: action.image,
                synopsis: action.synopsis
        
            };

            return [...state, newMovie];
        }
        default:
            return state;

    }

}
export default rMovies;