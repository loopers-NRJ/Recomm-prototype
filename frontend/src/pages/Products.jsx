import image from "../assets/image.jpg";
import "../index.css";

function Products() {
  return (
    <>
      <div className="container d-flex flex-column px-3 align-items-center">
        <div className="container mt-3 title d-flex align-items-center justify-content-center position-relative">
          <h1>Bikes</h1>
          <div className="position-absolute end-0 p-2 rounded-3 me-1">
            <i className="fa-solid fa-arrow-down-wide-short fa-xl"></i>
          </div>
        </div>
        <div className="rounded-4 overflow-hidden">
          <img src={image} className="d-block w-100" />
        </div>
      </div>

    {/* PRODUCT GRID */}
      <div className="row row-cols-2 mx-3 mt-4">
        <div className="col p-2 d-flex justify-content-center">
          <div className="card prod d-inline-block overflow-hidden hot">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center">
          <div className="card prod d-inline-block overflow-hidden hot">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center ">
          <div className="card prod d-inline-block overflow-hidden">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center ">
          <div className="card prod d-inline-block overflow-hidden">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center ">
          <div className="card prod d-inline-block overflow-hidden">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center ">
          <div className="card prod d-inline-block overflow-hidden">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>

        <div className="col p-2 d-flex justify-content-center ">
          <div className="card prod d-inline-block overflow-hidden">
            <img src={image} className="card-img-top card-image" />
            <p className="card-text p-2">Product Name and Model</p>
          </div>
        </div>
      </div>    

    </>
  );
}
export default Products;
