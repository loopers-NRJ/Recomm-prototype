function Welcome() {
  return (
    <div className="container h-100 d-flex flex-column">
      <div className="container d-flex align-items-center">
        <div className="mt-3 welcome">
          <h1>Welcome,</h1>
          <p>Sridharan 👋</p>
        </div>
        <div className="container d-flex flex-column align-items-end justify-content">
          <h6 className="m-0">Available limit</h6>
          <p className="m-0">₹ 60,000</p>
        </div>
      </div>
      <div className="d-flex container-fluid justify-content-between px-2">
        <input
          className="p-3 rounded-3 container-fluid border"
          type="text"
          name="serach-box"
          id="search-box"
          placeholder="Search"
        />
        <div className="text-end p-3 rounded-3 border ms-2">
          <i className="fa-solid fa-arrow-down-wide-short fa-xl"></i>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
