import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";
import Sellit from "./pages/Sellit";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:categoryId" Component={Products} />
          <Route path="/sellit" Component={Sellit} />
        </Routes>
        <Appbar />
      </BrowserRouter>
    </>
  );
}

export default App;
