import { Link } from "react-router-dom";
import { API } from "../services/http";

function CategoryGrid({ category = [] }) {
  return (
    <div className="container px-4">
      <div className="row row-cols-3 row-gap-3">
        {category.map((product) => (
          <Link to={`/category/${product.id}`} key={product.id} className="col">
            <div className="card">
              <img
                src={API + product.picture}
                className="card-img-top"
                alt="product"
                crossOrigin="anonymous"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100px", // adjust if needed
                }}
              />
              <div className="card-body text-center">
                <p className="card-text fw-light">{product.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CategoryGrid;
