import { Router } from "express";
import { createProduct, getProduct, getProducts } from "../database/products";

import multer from "multer";

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000 } });

const router = Router();

router.get("/", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProduct(id);
  res.json(product);
});

router.post("/", upload.array("pictures", 5), async (req, res) => {
  const { userId, color, price, modelId } = req.body;
  if (!req.files)
    return res.status(400).json({ error: "No files were uploaded." });
  if (!Array.isArray(req.files))
    return res.status(400).json({ error: "Files must be an array." });
  // remove the public/ from the path
  const pictures = req.files.map((file) => file.path.replace("public/", ""));
  if (pictures.length === 0)
    return res.status(400).json({ error: "No files were uploaded." });

  if (Number.isNaN(+price))
    return res.status(400).json({ error: "Price must be a number." });

  const product = await createProduct(userId, modelId, +price, color, pictures);
  if (product instanceof Error)
    return res.status(400).json({ error: product.message });
  res.json(product);
});

export default router;
