import { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ Children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  return isAuthenticated ? Children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
