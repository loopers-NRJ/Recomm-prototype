import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar"; 
import Appbar from "./components/Appbar";
import Sellit from "./pages/Sellit";
import "./index.css";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
      <Sellit></Sellit>
      <Appbar></Appbar>
    </>
  );
}

export default App;
