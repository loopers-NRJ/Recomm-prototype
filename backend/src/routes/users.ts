import { Router } from "express";
import { createUser, getMyListings, getUser } from "../database/users";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser(email, password);
  if (user instanceof Error)
    return res.status(400).json({ error: user.message });
  res.json(user);
});

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;
  const user = await createUser(email, name, password);
  res.json(user);
});

router.get("/mylistings", async (req, res) => {
  const { userId } = req.body;
  const listings = await getMyListings(userId);
  res.json(listings);
});

export default router;
