import React, { useState } from "react";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the review to the server
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Add a review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="rating"
            className="block text-gray-700 font-medium mb-2"
          >
            Rating
          </label>
          <div className="rating">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="5"
              checked={rating === 5}
              onChange={handleRatingChange}
            />
            <label htmlFor="star5" title="5 stars" className="mr-1">
              <i className="fas fa-star"></i>
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="4"
              checked={rating === 4}
              onChange={handleRatingChange}
            />
            <label htmlFor="star4" title="4 stars" className="mr-1">
              <i className="fas fa-star"></i>
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              checked={rating === 3}
              onChange={handleRatingChange}
            />
            <label htmlFor="star3" title="3 stars" className="mr-1">
              <i className="fas fa-star"></i>
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="2"
              checked={rating === 2}
              onChange={handleRatingChange}
            />
            <label htmlFor="star2" title="2 stars" className="mr-1">
              <i className="fas fa-star"></i>
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="1"
              checked={rating === 1}
              onChange={handleRatingChange}
            />
            <label htmlFor="star1" title="1 star" className="mr-1">
              <i className="fas fa-star"></i>
            </label>
          </div>
        </div>
        <div>
          <label
            htmlFor="reviewText"
            className="block text-gray-700 font-medium mb-2"
          >
            Review text
          </label>
          <textarea
            id="reviewText"
            name="reviewText"
            rows="5"
            className="form-input rounded-md shadow-sm"
            value={reviewText}
            onChange={handleReviewTextChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
