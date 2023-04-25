import { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { options } from "../alert/Alert";
import { toast } from "react-toastify";

const ProtectedRoute = ({ Children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("You need to login first!", options);
    }
  }, [isAuthenticated]);
  return isAuthenticated ? Children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
