import React from "react";

const UpdatePassword = () => {
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
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
