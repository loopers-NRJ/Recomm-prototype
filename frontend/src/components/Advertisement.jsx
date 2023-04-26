import image from "../assets/image.jpg";

function Advertisement() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide container-fluid p-3"
      data-bs-touch="true"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner rounded-3">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={image} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}
export default Advertisement;
