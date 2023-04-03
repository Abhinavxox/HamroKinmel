import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../actions/userActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import Loader from "./layout/Loader";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const loginUser = () => {
    //validation email regex and password
    if (!email || !password) {
      toast.error("Please fill in all fields", options);
      return;
    }

    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error, options);
    }
    if (isAuthenticated) {
      toast.success("Successfully logged in", options);
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={() => loginUser()}>
                Login
              </button>
            </div>
            <div className="text-grey-dark text-center mt-6">
              Don't have an account?
              <Link to="/signup">Sign up</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
