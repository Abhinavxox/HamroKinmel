import React from "react";
import Card from "./Card";

const ProductView = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {products &&
          products.map((product) => (
            <div
              className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 "
              key={product._id}
            >
              <div className="flex justify-center mt-10 mx-auto">
                <Card item={product} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductView;
