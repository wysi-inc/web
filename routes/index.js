import { Router } from "express";
import { isLogged, login, logout } from "../controllers/session.js";
import { getMedals } from "../controllers/medals.js";
import {
  setup,
  userBeatmaps,
  userPost,
  userQuery,
  userScores,
  users,
} from "../controllers/user.js";
import {
  beatmapscores,
  beatmapset,
  beatmapsets,
} from "../controllers/beatmap.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/isLogged", isLogged);

router.get("/getMedals", getMedals);

router.post("/userQuery", userQuery);

router.post("/user", userPost);

router.put("/setup", verifyToken, setup);

router.post("/users", users);

router.post("/userbeatmaps", userBeatmaps);

router.post("/userscores", userScores);

router.post("/beatmapset", beatmapset);

router.post("/beatmapsets", beatmapsets);

router.post("/beatmapscores", beatmapscores);

// router.post("/langProgress", getLangProgress);

export default router;
