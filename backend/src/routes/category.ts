import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategory,
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

router.post("/", async (req, res) => {
  const { name } = req.body;
  const category = await createCategory(name);
  res.json(category);
});

export default router;
