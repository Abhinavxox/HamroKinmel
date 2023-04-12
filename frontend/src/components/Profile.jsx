import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

import { options } from "./alert/Alert";
import { toast } from "react-toastify";
import Loader from "./layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div classNameName="m-2">
          <div className="xl:mx-auto xl:container">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 md:py-9 py-6">
                  <div className="w-full flex justify-center">
                    <img
                      src={user.avatar && user.avatar.src}
                      alt="avatar"
                      className=" rounded-full h-96 w-96 my-5"
                    />
                  </div>

                  <div className=" flex items-center justify-center">
                    <button className="lg:w-auto w-auto btn btn-primary">
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                  <div className="my-2">
                    <p className="md:text-2xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 dark:text-white lg:pb-6 md:pb-4 pb-2">
                      Full Name
                    </p>
                    <p className="text-3xl leading-none text-gray-600 dark:text-white pb-2">
                      {user.name}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="md:text-2xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 dark:text-white lg:pb-6 md:pb-4 pb-2">
                      Email Address
                    </p>
                    <p className="text-3xl leading-none text-gray-600 dark:text-white pb-2">
                      {user.email}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="md:text-2xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 dark:text-white lg:pb-6 md:pb-4 pb-2">
                      Joined On
                    </p>
                    <p className="text-3xl leading-none text-gray-600 dark:text-white pb-2">
                      {user.createdAt.substring(0, 10)}
                    </p>
                  </div>
                  <div className="md:block lg:flex items-center justify-center">
                    <button className="lg:w-auto w-full btn btn-secondary">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
