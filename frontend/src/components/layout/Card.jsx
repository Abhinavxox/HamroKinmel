import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Link to={`/product/${item._id}`}>
          <img
            src={item.images[0].url}
            alt={item.name}
            className="rounded-xl"
          />
        </Link>
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/product/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>{item.price}</p>
        <Rating rating={item.ratings} />
        <div className="card-actions">
          <button className="btn btn-primary">
            <Link to={`/product/${item._id}`}>Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
