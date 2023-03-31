import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductView from "./layout/ProductView";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import Loader from "./layout/Loader";

const SearchPage = () => {
  const params = useParams();
  const keyword = params.keyword;
  const [priceRange, setPriceRange] = useState([0, 6000]);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const { loading, products, error, productCount, resPerPage } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / resPerPage);

  const setCurrentPageNo = (action) => {
    if (action === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage > 1 && action === "prev") {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, options);
    }
    dispatch(getProducts(keyword, currentPage, priceRange, rating, category));
  }, [dispatch, error, currentPage, keyword, priceRange, rating, category]);

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className=" w-full sm:w-96 md:w-1/12  lg:w-2/12 ">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li className="menu-title">
              <span>Price Range</span>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([0, 500])}
              >
                $0-$500
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([500, 1000])}
              >
                $500-$1000
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([1000, 2000])}
              >
                $1000-$2000
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([2000, 3000])}
              >
                $2000-$3000
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([3000, 4000])}
              >
                $3000-$4000
              </button>
            </li>

            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([4000, 5000])}
              >
                $4000-$5000
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => handlePriceRangeChange([5000, 6000])}
              >
                $5000-$6000
              </button>
            </li>
            <li className="menu-title">
              <span>Rating range</span>
            </li>
            <li>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleRatingChange(1)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => {
                    handleRatingChange(2);
                  }}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleRatingChange(3)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleRatingChange(4)}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleRatingChange(5)}
                />
              </div>
            </li>
            <li className="menu-title">
              <span>Category</span>
            </li>
            <li onClick={() => handleCategoryChange("Phone")}>
              <a>Phone</a>
            </li>
            <li onClick={() => handleCategoryChange("Laptop")}>
              <a>Laptop</a>
            </li>
            <li onClick={() => handleCategoryChange("Camera")}>
              <a>Camera</a>
            </li>
            <li onClick={() => handleCategoryChange("Accessories")}>
              <a>Accessories</a>
            </li>
            <li onClick={() => handleCategoryChange("Headphones")}>
              <a>Headphones</a>
            </li>
            <li onClick={() => handleCategoryChange("Food")}>
              <a>Food</a>
            </li>
            <li onClick={() => handleCategoryChange("Clothes/Shoes")}>
              <a>Clothes/Shoes</a>
            </li>
            <li onClick={() => handleCategoryChange("Beauty/Health")}>
              <a>Beauty/Health</a>
            </li>
            <li onClick={() => handleCategoryChange("Sports")}>
              <a>Sports</a>
            </li>
            <li onClick={() => handleCategoryChange("Outdoor")}>
              <a>Outdoor</a>
            </li>
            <li onClick={() => handleCategoryChange("Home")}>
              <a>Home</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-96 md:w-11/12 lg:w-10/12 items-center">
          {loading ? (
            <Loader />
          ) : products.length > 0 ? (
            <>
              <div className="w-full flex justify-center">
                <ProductView products={products} />
              </div>
              <div className="flex justify-center mt-20">
                <div className="btn-group">
                  <button
                    className="btn"
                    onClick={() => setCurrentPageNo("prev")}
                  >
                    «
                  </button>
                  <button className="btn">Page {currentPage}</button>
                  <button
                    className="btn"
                    onClick={() => setCurrentPageNo("next")}
                  >
                    »
                  </button>
                </div>
              </div>
            </>
          ) : (
            <h1 className="text-2xl font-bold text-center">
              No Products Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
