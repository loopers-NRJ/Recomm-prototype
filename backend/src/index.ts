import express from "express";
import cors from "cors";
import helmet from "helmet";

import brands from "./routes/brands";
import category from "./routes/category";
import products from "./routes/products";
import users from "./routes/users";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(express.json());

app.use(express.static("public"));

app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Recomm Prototype API");
});

app.use("/api/brands", brands);
app.use("/api/category", category);
app.use("/api/products", products);
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
