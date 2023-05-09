import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, cleanErrors } from "../../actions/productActions";

import { options } from "../alert/Alert";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import Review from "./Review";
import AddReview from "./AddReview";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    if (error) {
      return toast.error(error, options);
    }
    // console.log(params.id);
    dispatch(getProductDetail(params.id));
  }, [dispatch, error, params.id]);

  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => {
      if (prev + 1 <= product.stock) {
        return prev + 1;
      } else {
        toast.warning("Stock completed", options);
        return prev;
      }
    });
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>{product.category}</a>
              </li>
              <li>{product.name}</li>
            </ul>
          </div>
          <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
            {/* <!-- Preview Images Div For larger Screen--> */}

            <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box h-full">
                {product.images &&
                  product.images.map((element) => (
                    <div className="carousel-item" key={element.public_id}>
                      <img
                        src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                        className="rounded-box"
                        alt={element.public_id}
                      />
                    </div>
                  ))}
              </div>
            </div>
            {/* <!-- Description Div --> */}
            <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
              {/* <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
            Home / Furniture / Wooden Stool
          </p> */}
              <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                {product.name}
              </h2>

              <div className=" flex flex-row justify-between  mt-5">
                <div className=" flex flex-row space-x-3">
                  {product.ratings ? <Rating rating={product.ratings} /> : ""}
                </div>
                <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                  {product.numOfReviews} reviews
                </p>
              </div>

              <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                {product.description}
              </p>
              <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                $ {product.price}
              </p>

              <div className="lg:mt-11 mt-10">
                <div className="flex flex-row justify-between">
                  <p className=" font-medium text-base leading-4 text-gray-600">
                    Select quantity
                  </p>
                  <div className="flex">
                    <span
                      onClick={minusCount}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                    >
                      -
                    </span>
                    <input
                      id="counter"
                      aria-label="input"
                      className="border border-gray-300 h-full text-center w-14 pb-1"
                      type="text"
                      value={count}
                      onChange={(e) => e.target.value}
                    />
                    <span
                      onClick={addCount}
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                    >
                      +
                    </span>
                  </div>
                </div>
                <hr className=" bg-gray-200 w-full my-2" />
                <div className=" flex flex-row justify-between items-center mt-4">
                  <p className="font-medium text-base leading-4 text-gray-600">
                    Seller
                  </p>
                  {product.seller}
                </div>
                <hr className=" bg-gray-200 w-full mt-4" />
              </div>
              <p
                className={
                  product.stock > 0
                    ? "text-green-500 font-normal text-base leading-6 mt-4"
                    : "text-red-500 font-normal text-base leading-6 mt-4"
                }
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <button className="btn btn-primary w-full lg:mt-8 mt-4">
                Add to cart
              </button>
            </div>
          </div>
          {/* reviews section */}
          <div className=" w-full lg:pl-10 pl-0">
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold text-base leading-4 text-gray-600">
                {product.numOfReviews > 0 ? (
                  <Review product={product} />
                ) : (
                  "No Reviews"
                )}
              </div>
            </div>
            <hr className=" bg-gray-200 w-full mt-4" />
            <div
              className="flex flex-row justify-between items-center mt-4 h-8"
              onClick={() => {
                setRotate(!rotate);
              }}
            >
              <p className="font-medium text-base leading-4 text-gray-600">
                Add a review
              </p>
              <svg
                onClick={() => {
                  setRotate(!rotate);
                }}
                id="rotateSVG"
                className={
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
                  (rotate ? "rotate-180" : "rotate-0")
                }
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between items-center">
              {rotate ? <AddReview product={product} /> : ""}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
