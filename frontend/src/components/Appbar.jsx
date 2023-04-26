function Appbar() {
  return (
    <div className="container fixed-bottom p-1 d-flex justify-content-around">
      <ul
        className="nav nav-pills mb-3 bg-black rounded p-2"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <div
            className="nav-link px-4 py-2 active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-house-user fa-xl"></i>
          </div>
        </li>
        <li className="nav-item" role="presentation">
          <div
            className="nav-link px-4 py-2"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-heart fa-xl"></i>
          </div>
        </li>
        <li className="nav-item" role="presentation">
          <div
            className="nav-link px-4 py-2"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-comments fa-xl"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Appbar;
