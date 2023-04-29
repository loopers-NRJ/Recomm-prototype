import { NavLink } from "react-router-dom";

function Appbar() {
  return (
    <div className="fixed-bottom p-1 d-flex px-3">
      <ul
        className="nav nav-pills mb-3 bg-black rounded p-2 d-flex flex-grow-1 justify-content-around align-items-center"
        // id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <NavLink
            to="/"
            className="nav-link px-4 py-2"
            id="pills-home-tab"
            // data-bs-toggle="pill"
            // data-bs-target="#pills-home"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-house-user fa-xl"></i>
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <div
            className="nav-link px-4 py-2"
            id="pills-profile-tab"
            // data-bs-toggle="pill"
            // data-bs-target="#pills-profile"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-heart fa-xl"></i>
          </div>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            to="/mylistings"
            className="nav-link px-4 py-2"
            id="pills-contact-tab"
            // data-bs-toggle="pill"
            // data-bs-target="#pills-contact"
            type="button"
            role="tab"
          >
            <i className="fa-solid fa-comments fa-xl"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Appbar;
