import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components//Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./components/layout/ProductDetail";
import Categories from "./components/layout/Categories";
import SearchPage from "./components/SearchPage";
import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect } from "react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<ProtectedRoute />}> */}
          <Route path="/profile" element={<Profile />} />
          {/* </Route> */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetail />} exact />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
