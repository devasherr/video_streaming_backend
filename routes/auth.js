import express from "express";
import { googleAuth, signin, signup, signout } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

// google auth
router.post("/google", googleAuth);

router.post("/signout", signout);

export default router;
