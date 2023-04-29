import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import image from "../assets/image.jpg";
import { getProduct } from "../services/backend";
import { API } from "../services/http";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      if (data instanceof Error) return setError(data.message);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <h1>{error}</h1>
      </div>
    );

  return (
    <div className="p-2 d-flex flex-column gap-1">
      <div
        id="carouselExampleAutoplaying"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded">
          {product.pictures.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 && "active"}`}
              key={index}
            >
              <img
                src={API + image}
                className="d-block w-100"
                alt="product"
                crossOrigin="anonymous"
                style={{ objectFit: "contain", height: "250px" }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1>{product.model.brand.name}</h1>
      <h2>{product.model.name}</h2>
      <h2>RS. {product.price}</h2>
      <div>
        Description <br /> Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Fuga nobis minus alias nulla officia accusantium culpa corporis
        aperiam aut inventore deserunt natus hic, sed fugiat id ad quas velit
        libero.
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary btn-lg">Buy Now</button>
      </div>
    </div>
  );
}

export default Details;
