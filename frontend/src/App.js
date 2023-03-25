import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components//Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/layout/Login";
import Signup from "./components/layout/Signup";
import ProductDetail from "./components/layout/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/product/:id" Component={ProductDetail} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
