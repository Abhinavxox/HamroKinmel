import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
