import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components//Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdateProfile from "./components/UpdateProfile";
import ProductDetail from "./components/layout/ProductDetail";
import Categories from "./components/layout/Categories";
import SearchPage from "./components/SearchPage";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect } from "react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdatePassword from "./components/UpdatePassword";
import { useSelector } from "react-redux";
import Loader from "./components/layout/Loader";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const { loading } = useSelector((state) => state.auth);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/profile"
                element={
                  // <ProtectedRoute>
                  <Profile />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/password/update"
                element={
                  // <ProtectedRoute>
                  <UpdatePassword />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/update"
                element={
                  // <ProtectedRoute>
                  <UpdateProfile />
                  // </ProtectedRoute>
                }
              />

              <Route path="/categories" element={<Categories />} />
              <Route path="/password/forgot" element={<ForgotPassword />} />
              <Route path="/search/:keyword" element={<SearchPage />} />
              <Route path="/product/:id" element={<ProductDetail />} exact />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
