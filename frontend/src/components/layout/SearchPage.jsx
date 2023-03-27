import React, { useEffect } from "react";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";

import { options } from "../alert/Alert";
import { toast } from "react-toastify";
import Loader from "./Loader";

const SearchPage = () => {
  const dispatch = useDispatch();

  const { loading, products, error, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return toast.error(error, options);
    }
    dispatch(getProducts());
  }, [dispatch, error]);

  return <></>;
};

export default SearchPage;
