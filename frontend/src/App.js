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
          <Route path="/" Component={Home} exact />
          <ProtectedRoute path="/login" Component={Login} />
          <ProtectedRoute path="/signup" Component={Signup} />
          <ProtectedRoute path="/profile" Component={Profile} />
          <Route path="/categories" Component={Categories} />
          <Route path="/search/:keyword" Component={SearchPage} />
          <Route path="/product/:id" Component={ProductDetail} exact />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
