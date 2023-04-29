import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createProduct,
  getBrandsByCategory,
  getCategory,
  getModelsByBrand,
} from "../services/backend";

function Sellit() {
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [model, setModel] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategory();
      if (data instanceof Error) return setError(data.message);
      setCategory(data);
      setSelectedCategory(data[0]?.id);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "") return;
    const fetchData = async () => {
      const data = await getBrandsByCategory(selectedCategory);
      if (data instanceof Error) return setError(data.message);
      setBrand(data);
      setSelectedBrand(data[0]?.id);
    };
    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedBrand === "") return;
    const fetchData = async () => {
      const data = await getModelsByBrand(selectedBrand);
      if (data instanceof Error) return setError(data.message);
      setModel(data);
      setSelectedModel(data[0]?.id);
    };
    fetchData();
  }, [selectedBrand]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", "6448e0ad3071cb152d12fd1b");
    formData.append("modelId", selectedModel);
    formData.append("price", price);
    pictures.forEach((picture) => {
      formData.append("pictures", picture);
    });
    const product = await createProduct(formData);
    if (product instanceof Error) return setError(product.message);
    navigate("/mylistings");
  };

  return (
    <div className="m-3">
      <div className="title my-4 text-center">
        <h1>Sell It</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="category">Category</label>
        <select
          className="form-select form-select-lg mb-3"
          name="category"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {category.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="brandId">Brand</label>
        <select
          className="form-select form-select-lg mb-3"
          name="brandId"
          id="brandId"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brand.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="modelId">Model</label>
        <select
          className="form-select form-select-lg mb-3"
          name="modelId"
          id="modelId"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          {model.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="price">price</label>
        <input
          type="number"
          className="form-control form-control-md mt-2"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label className="mt-2" htmlFor="upload-pics">
          Upload Pictures
        </label>
        <input
          className="form-control form-control-md mt-2 mb-5"
          type="file"
          name="upload-pics"
          id="upload-pics"
          multiple
          accept="image/*"
          onChange={(e) => setPictures([...pictures, ...e.target.files])}
        />

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="container text-center">
          <button
            className="btn btn-success mb-3 px-5 py-3 translate-start"
            type="submit"
          >
            SELL IT
          </button>
        </div>
      </form>
    </div>
  );
}
export default Sellit;
