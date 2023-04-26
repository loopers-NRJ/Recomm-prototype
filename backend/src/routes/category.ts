import { Router } from "express";
import {
  createCategory,
  getBrandsByCategory,
  getCategories,
  getCategory,
  getProductsByCategory,
} from "../database/category";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getCategories();
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await getCategory(id);
  res.json(category);
});

router.get("/:id/products", async (req, res) => {
  const { id } = req.params;
  const products = await getProductsByCategory(id);
  res.json(products);
});

router.get("/:id/brands", async (req, res) => {
  const { id } = req.params;
  const brands = await getBrandsByCategory(id);
  res.json(brands);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const category = await createCategory(name);
  res.json(category);
});

export default router;
