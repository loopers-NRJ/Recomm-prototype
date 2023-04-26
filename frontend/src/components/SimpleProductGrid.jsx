import image from "../assets/image.jpg";
import "../index.css";

function SimpleProductGrid() {
  return (
    <div className="container px-4">
      <div className="row row-cols-3 row-gap-3">
        <div className="col">
          <div className="card" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <p className="card-text fw-light">Product Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SimpleProductGrid;
