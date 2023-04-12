import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../actions/userActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import Loader from "./layout/Loader";
import UserAvatar from "../images/user.png";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("../images/user.png");

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          UserAvatar = reader.result;
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setUser({ ...user, avatar: e.target.files[0] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerUser = () => {
    //validation email regex and password
    if (!name || !email || !password) {
      toast.error("Please fill in all fields", options);
      return;
    }
    //convert user json in formdata
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + " - " + pair[1]);
    // }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      toast.error(error, options);
    }
    if (isAuthenticated) {
      toast.success("Successfully registered and logged in", options);
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, avatar]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add your avatar</span>
              </label>
              <div className="flex justify-between">
                <div className="rounded-full w-14 ">
                  <img src={UserAvatar} className="rounded-full w-16 h-12" />
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
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={() => registerUser()}
                disabled={loading ? true : false}
              >
                Signup
              </button>
              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the{" "}
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="text-grey-dark text-center mt-6">
              Already have an account?
              <Link to="/login">Log in</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
