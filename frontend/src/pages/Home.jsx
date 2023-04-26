import Welcome from "../components/Welcome";
import Advertisement from "../components/Advertisement";
import SimpleProductGrid from "../components/SimpleProductGrid";
import "../index.css";
import Products from "./Products";

function Home() {
  return (
    <div className="pb-5 mb-5">
      <Welcome></Welcome>
      <Advertisement></Advertisement>
      <h5 className="d-block p-3">Categories</h5>
      <SimpleProductGrid></SimpleProductGrid>

      <div className="d-flex p-3 gap-3 container-fluid">
        <button className="wish btn btn-success w-50 px-3 py-2">Wish it</button>
        <button className="sell btn btn-warning w-50 px-3 py-2">Sell it</button>
      </div>
    </div>
  );
}

export default Home;
