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
  console.log(keyword);
  const [priceRange, setPriceRange] = useState(40);

  const dispatch = useDispatch();

  const { loading, products, error, productCount, resPerPage } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productCount / resPerPage);

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
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, error, currentPage]);

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className=" w-full sm:w-96 md:w-3/12  lg:w-4/12 ">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li>
              <span>Price Range: $0-${priceRange}</span>
              <div className="btn btn-ghost">
                <input
                  type="range"
                  min="1"
                  max="10000"
                  value={priceRange}
                  className="range range-warning"
                  onChange={handlePriceRangeChange}
                />
              </div>
            </li>

            <li className="menu-title">
              <span>Category</span>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="  w-full sm:w-96 md:w-9/12 lg:w-8/12 items-center">
          {/* right */}
          <div className="w-full flex justify-center">
            <ProductView products={products} />
          </div>
          <div className="flex justify-center mt-20">
            <div className="btn-group">
              <button className="btn" onClick={() => setCurrentPageNo("prev")}>
                «
              </button>
              <button className="btn">Page {currentPage}</button>
              <button className="btn" onClick={() => setCurrentPageNo("next")}>
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
