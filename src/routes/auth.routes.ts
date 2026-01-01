import express from "express";
import { register, login } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, (req, res) => {
  res.json(req.user);
});

export default router;
