function Sellit() {
  return (
    <div className="m-3">
      <div className="title my-4 text-center">
        <h1>Sell It</h1>
      </div>
      <div className="form">
        <label htmlFor="category">Category</label>
        <select
          className="form-select form-select-lg mb-3"
          name="category"
          id="category"
        >
          <option selected></option>
          <option value="1">Mobile</option>
          <option value="2">Electronics</option>
          <option value="3">Furniture</option>
        </select>

        <label htmlFor="brand">Brand</label>
        <select
          className="form-select form-select-lg mb-3"
          name="brand"
          id="brand"
        >
          <option selected></option>
          <option value="1">Apple</option>
          <option value="2">Samsung</option>
          <option value="3">Xioami</option>
        </select>

        <label htmlFor="model">Model</label>
        <select
          className="form-select form-select-lg mb-3"
          name="model"
          id="model"
        >
          <option selected></option>
          <option value="1">Galaxy S23 Ultra</option>
          <option value="2">Galaxy M31 plus</option>
          <option value="3">Galaxy Note 9</option>
        </select>

        <label htmlFor="color">Color</label>
        <select
          className="form-select form-select-lg mb-3"
          name="color"
          id="color"
        >
          <option selected></option>
          <option value="1">Space Gray</option>
          <option value="2">Ocean Blue</option>
          <option value="3">Midnight Black</option>
        </select>

        <label className="mt-2" htmlFor="upload-pics">
          Upload Pictures
        </label>
        <input
          className="form-control form-control-md mt-2 mb-5"
          type="file"
          name="upload-pics"
          id="upload-pics"
          multiple
        />

        <div className="container text-center">
          <button
            className="btn btn-success mb-3 px-5 py-3 translate-start"
            type="submit"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sellit;
