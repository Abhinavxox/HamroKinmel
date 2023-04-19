import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./layout/Loader";
import { clearErrors, updateUser } from "../actions/userActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.auth);

  const { isUpdated } = useSelector((state) => state.user);

  const [userData, setUser] = useState({
    name: user.name,
    email: user.email,
  });
  const { name, email } = userData;

  const [avatar, setAvatar] = useState(user.avatar.src);

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setUser({ ...userData, avatar: e.target.files[0] });
    } else {
      setUser({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const update = () => {
    //validation email regex and password
    if (!name || !email) {
      toast.error("Please fill in all fields", options);
      return;
    }
    //convert userData json in formdata
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);

    dispatch(updateUser(formData));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error, options);
    }
    if (isUpdated && isUpdated.success) {
      toast.success("Successfully updated user ", options);
      dispatch(updateUser("reset"));
      navigate("/profile");
    }
  }, [dispatch, error, isUpdated, avatar]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Update your avatar</span>
                  </label>
                  <div className="flex justify-between">
                    <div className="rounded-full w-14 ">
                      <img src={avatar} className="rounded-full w-16 h-12" />
                    </div>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                      name="avatar"
                      id="customFile"
                      accept="images/*"
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                    value={userData.name}
                    onChange={onChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                    name="password"
                    onChange={onChange}
                    value={userData.email}
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn btn-primary"
                    onClick={() => update()}
                    disabled={loading ? true : false}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProfile;
