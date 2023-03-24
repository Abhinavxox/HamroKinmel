import React from "react";

const Home = () => {
  return (
    <>
      <h1
        className="text-2xl md:text-3xl font-bold mt-10 mb-5"
        id="products_heading"
      >
        Latest Products
      </h1>
      <section id="products" className="container mx-auto px-2 md:px-0">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 my-3 px-2">
            <div className="card rounded-lg overflow-hidden">
              <img
                className="card-img-top mx-auto h-48 md:h-56 lg:h-64 object-cover"
                src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                alt="Product"
              />
              <div className="card-body flex flex-col justify-between">
                <h5 className="card-title font-medium text-base md:text-lg">
                  <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
                </h5>
                <div className="ratings mt-2">
                  <div className="rating-outer w-24 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="rating-inner h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <span id="no_of_reviews" className="text-xs md:text-sm ml-2">
                    (5 Reviews)
                  </span>
                </div>
                <p className="card-text font-medium text-base md:text-lg">
                  $45.67
                </p>
                <a href="#" id="view_btn" className="btn btn-block mt-2">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
