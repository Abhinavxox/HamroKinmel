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
    <div className="w-full max-w-lg mx-auto my-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            value={1}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={2}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={3}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={4}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={5}
          />
        </div>
        <div>
          <label
            htmlFor="reviewText"
            className="block text-gray-700 font-medium mb-2"
          >
            Review text
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
