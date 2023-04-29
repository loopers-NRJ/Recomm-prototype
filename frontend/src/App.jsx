import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Appbar from "./components/Appbar";
import Sellit from "./pages/Sellit";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyListings from "./pages/MyListings";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginBottom: "5rem" }}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/category/:id" Component={Products} />
            <Route path="/sellit" Component={Sellit} />
            <Route path="/mylistings" Component={MyListings} />
            <Route path="/products/:id" Component={Details} />
            <Route path="*" Component={() => <h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Appbar />
      </BrowserRouter>
    </>
  );
}

export default App;
