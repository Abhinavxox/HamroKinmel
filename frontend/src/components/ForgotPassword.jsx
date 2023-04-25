import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../actions/userActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { error, message } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      toast.error(error, options);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message, options);
    }
  }, [error, message, dispatch]);

  const change = () => {
    dispatch(forgotPassword({ email: email }));
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p className="flex justify-center text-2xl">Forgot Password</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={() => change()}>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
