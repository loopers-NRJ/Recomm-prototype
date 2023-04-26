import { Router } from "express";

import { createModel, getModel, getModelsByBrand } from "../database/models";

const router = Router({
  mergeParams: true,
});

router.get("/", async (req, res) => {
  const { brandId } = req.params as { brandId: string };
  const models = await getModelsByBrand(brandId);
  res.json(models);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const model = await getModel(id);
  res.json(model);
});

router.post("/", async (req, res) => {
  const { brandId } = req.params as { brandId: string };
  const { name, categoryId } = req.body;
  const model = await createModel(name, brandId, categoryId);
  if (model instanceof Error)
    return res.status(400).json({ error: model.message });
  res.json(model);
});

export default router;
