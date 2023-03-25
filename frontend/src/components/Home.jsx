import React, { useEffect } from "react";
import Carousel from "./layout/Carousel";
import Card from "./layout/Card";
import W5 from "./../images/w5.jpg";
import Sale from "./../images/sale.png";
import { Oval } from "react-loader-spinner";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, error, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
        <h2 className="text-2xl font-bold text-center mb-4">
          Featured Products
        </h2>
        {loading ? (
          <h2 className="text-2xl font-bold text-center mb-4">Loading...</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-7xl">
            {products &&
              products.map((product) => (
                <div className="w-full">
                  <Card item={product} key={product.id} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
