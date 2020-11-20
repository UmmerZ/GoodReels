import React from 'react';
import { addReview } from '../actions/aReviews';
import { useState } from 'react';
import { connect } from 'react-redux';


const AddReview = (props) => {
    let alreadyReviewed = false;

    const [review, setNewReview] = useState('');
    const [rating, setNewRating] = useState('');

    // OnSubmit dispatch to store
    const newAddition = event => {
        event.preventDefault();
        props.dispatch(addReview(props.activeUser.clickedMovie, props.activeUser.username, rating, review));
    }

    // Checks if user already reviewed movie
    for (const review of props.reviews) {
        if (review.username === props.activeUser.username && review.movieId === props.activeUser.clickedMovie)
            alreadyReviewed = true;
    }

    // If the movie has already been reviewed by the activeUser, it will not return anything, otherwise it returns form for adding a review.
    if (alreadyReviewed) return "";
    else return (

        <>
            <form onSubmit={newAddition}>

                <div className="inputs-section">
                    <div className="add-review">
                        <label htmlFor="mreview">Add Review</label>
                        <textarea id="mreview" placeholder="Start typing your review..." required
                            onChange={e => { setNewReview(e.target.value) }}
                            value={review} />
                    </div>

                    <div className="add-rating">
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" required
                            onChange={e => { setNewRating(e.target.value) }}
                            value={rating}>
                            <option value="0">Rate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <button className="submit-review">Submit</button>

            </form>

        </>

    );

}
export default connect(state => ({ activeUser: state.activeUser, reviews: state.reviews }))(AddReview);