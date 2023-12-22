import { Router } from "express";
import { isLogged, login, logout } from "../controllers/session.js";
import { getMedals } from "../controllers/medals.js";
import {
  user,
  userBeatmaps,
  userList,
  userMostPlayed,
  userScores,
  userSearch,
  userSetup,
} from "../controllers/user.js";
import { beatmapscores, beatmapset } from "../controllers/beatmap.js";
import { getLangProgress } from "../controllers/langs.js";
import verifyToken from "../middlewares/verifyToken.js";
import { test } from "../testing/test.js";

const router = Router();
//--testing--//
//router.get("/testing", test);

//---website---//
router.post("/login", login);

router.post("/logout", logout);

router.post("/isLogged", verifyToken, isLogged);

//---user---//
router.get("/medals", getMedals);

router.post("/user/list", userList);

router.post("/user/search", userSearch);

router.post("/user", user);

router.put("/user/setup", verifyToken, userSetup);

router.post("/user/beatmapsets", userBeatmaps);

router.post("/user/scores", userScores);

router.post("/user/mostplayed", userMostPlayed);

//---beatmapsets---//

router.post("/beatmapset", beatmapset);

router.post("/beatmap/scores", beatmapscores);

router.get("/lang/progress", getLangProgress);

export default router;
