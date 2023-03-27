import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const SearchPage = () => {
  const params = useParams();
  const keyword = params.keyword;
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <div className=" w-full sm:w-96 md:w-3/12  lg:w-4/12 ">
          <ul className="menu bg-base-100 w-56 p-2 rounded-box">
            <li className="menu-title">
              <span>Price Range</span>
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
          //right
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
