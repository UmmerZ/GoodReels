import { v4 as uuidv4 } from 'uuid';
const initialState = require("../defaults/reviews.json");





const rReviews = (state = initialState, action) => {

    const newReview = {
        id: uuidv4(),
        movieId: action.movieId,
        username: action.username,
        rating: action.rating,
        review: action.review 
    };

    switch (action.type){

        case "ADD_REVIEW":

            return [...state, newReview];
        

        case "REMOVE_REVIEW":{

            let alteredArray = [...state];

            for (let review of alteredArray){
                if (review.id === action.id) alteredArray.splice(alteredArray.indexOf(review),1);
            }

            return alteredArray;
        }
            
            
        
        default:
            return state;

    }

}
export default rReviews;