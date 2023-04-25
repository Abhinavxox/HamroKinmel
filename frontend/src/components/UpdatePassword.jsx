import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../actions/userActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { isUpdated, error } = useSelector((state) => state.user);

  const change = () => {
    //validation email regex and password
    if (!oldPassword || !newPassword) {
      toast.error("Please fill in all fields", options);
      return;
    }

    dispatch(
      updatePassword({
        oldPassword: oldPassword,
        password: newPassword,
      })
    );
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error, options);
    }
    if (isUpdated) {
      toast.success("Successfully updated password", options);
      navigate("/profile");
    }
  }, [dispatch, error, isUpdated]);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p className="flex justify-center text-2xl">Change Password</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input
                  type="text"
                  placeholder="old password"
                  className="input input-bordered"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="text"
                  placeholder="new password"
                  className="input input-bordered"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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

export default UpdatePassword;
