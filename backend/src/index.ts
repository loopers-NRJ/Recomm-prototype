import express from "express";
import cors from "cors";
import helmet from "helmet";

import brands from "./routes/brands";
import models from "./routes/models";
import category from "./routes/category";
import products from "./routes/products";
import users from "./routes/users";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Recomm Prototype API");
});

app.use("/api/brands", brands);
app.use("/api/models", models);
app.use("/api/category", category);
app.use("/api/products", products);
app.use("/api/users", users);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
