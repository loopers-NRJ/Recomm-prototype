import { useEffect, useState } from "react";
import Loading from "../components/Loading";

import { Link } from "react-router-dom";

import { getMyListings } from "../services/backend";
import { API } from "../services/http";

function MyListings() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchMyListings = async () => {
      const data = await getMyListings("6448e0ad3071cb152d12fd1b");
      if (data instanceof Error) return setError(data.message);
      setListings(data);
      setLoading(false);
    };
    fetchMyListings();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>{error}</h1>
      </div>
    );
  if (listings.length <= 0)
    return (
      <h1 className="d-flex justify-content-center align-items-center min-vh-100">
        No Listings found
      </h1>
    );

  return (
    <>
      <h1 className="text-center">My Listings</h1>
      {listings.map((listing) => (
        <Link
          to={`/products/${listing.id}`}
          className="card mb-2 p-2"
          style={{ maxWidth: "540px" }}
          key={listing.id}
        >
          <div className="row g-0">
            <div className="col-4">
              <img
                src={API + listing.pictures[0]}
                style={{ objectFit: "cover", height: "150px" }}
                className="img-fluid rounded w-100"
                alt="listing"
                crossOrigin="anonymous"
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{listing.model.brand.name}</h5>
                <p className="card-text fs-6">{listing.model.name}</p>
                <p className="card-text mt-1 fs-6">Rs: {listing.price}</p>
              </div>
            </div>
            <div className="btn btn-primary mt-1">Bidding</div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default MyListings;
