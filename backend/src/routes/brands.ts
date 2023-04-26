import { Router } from "express";
import models from "./models";
import { createBrand, getBrand, getBrands } from "../database/brands";

const router = Router();

router.get("/", async (req, res) => {
  const brands = await getBrands();
  res.json(brands);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const brand = await getBrand(id);
  res.json(brand);
});

router.use("/:brandId/models", models);

router.post("/", async (req, res) => {
  const { name } = req.body;
  const brand = await createBrand(name);
  res.json(brand);
});

export default router;
