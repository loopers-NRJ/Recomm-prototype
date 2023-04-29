import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductsByCategory } from "../services/backend";
import { API } from "../services/http";
import Loading from "../components/Loading";

function Products() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProductsByCategory(id);
      if (prod instanceof Error) return setError(prod.message);
      setProducts(prod);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>{error}</h1>
      </div>
    );
  if (products.length <= 0)
    return (
      <h1 className="d-flex justify-content-center align-items-center min-vh-100">
        No products found
      </h1>
    );
  return (
    <>
      <div className="container d-flex flex-column px-3 align-items-center">
        <div className="container mt-3 title d-flex align-items-center justify-content-center position-relative">
          <h1>{products[0]?.model.category.name}</h1>
          <div className="position-absolute end-0 p-2 rounded-3 me-1">
            <i className="fa-solid fa-arrow-down-wide-short fa-xl"></i>
          </div>
        </div>
        <div className="rounded-4 overflow-hidden w-100">
          <img
            src={API + products[0]?.pictures[0]}
            className="d-block w-100"
            style={{
              height: "200px",
              objectFit: "cover",
            }}
            crossOrigin="anonymous"
          />
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="row row-cols-2 mx-3 mt-4">
        {products.map((product) => (
          <Link
            className="col p-2 d-flex justify-content-center"
            key={product.id}
            to={`/products/${product.id}`}
          >
            <div className="card prod d-inline-block overflow-hidden">
              <img
                src={API + product.pictures[0]}
                className="card-img-top card-image"
                crossOrigin="anonymous"
              />
              <p className="card-text p-2">
                {product.model.brand.name} {product.model.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Products;
