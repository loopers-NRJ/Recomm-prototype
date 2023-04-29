import { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Advertisement from "../components/Advertisement";
import CategoryGrid from "../components/CategoryGrid";

import { getCategory } from "../services/backend";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

function Home() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategory();
      if (data instanceof Error) return setError(data.message);
      setCategory(data);
      setLoading(false);
    };
    fetchCategory();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>{error}</h1>
      </div>
    );
  if (category.length <= 0)
    return (
      <h1 className="d-flex justify-content-center align-items-center min-vh-100">
        No category found
      </h1>
    );

  return (
    <>
      <Welcome />
      <Advertisement />
      <h5 className="d-block p-3">Categories</h5>
      <CategoryGrid category={category} />
      <div className="d-flex p-3 gap-3 container-fluid">
        <button className="wish btn btn-success w-50 px-3 py-2">Wish it</button>
        <NavLink to="/sellit" className="sell btn btn-warning w-50 px-3 py-2">
          Sell it
        </NavLink>
      </div>
    </>
  );
}

export default Home;
