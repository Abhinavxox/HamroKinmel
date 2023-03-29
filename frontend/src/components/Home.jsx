import React, { useEffect, useState } from "react";
import Sale from "./../images/sale.png";
import ProductView from "./layout/ProductView";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import Loader from "./layout/Loader";

const Home = () => {
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
    dispatch(getProducts(" ", currentPage));
  }, [dispatch, error, currentPage]);

  return (
    <>
      <div
        className="hero min-h-[30rem] bg-base-200"
        style={{ backgroundImage: `url(${Sale})` }}
      >
        <div className="hero-content flex-col lg:flex-row text-white">
          <div>
            <h1 className="text-5xl font-bold">Big Dashain Sales!</h1>
            <p className="py-6">
              Dashain dhamaka sale is here! Get upto 50% off on all products.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="w-1/6 h-1 bg-gray-300 m-1"></div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Featured Products
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex justify-center ">
              <ProductView products={products} />
            </div>
            <div className="flex justify-center p-20">
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
        )}
      </div>
    </>
  );
};

export default Home;
