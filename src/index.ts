import { Elysia } from "elysia";
import * as mongoose from 'mongoose';
import { auth } from "osu-api-extended";
import { getUser, searchUser } from "./controllers/users";
import { getMedals, updateMedals } from "./controllers/medals";

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

function routine(): void {
    auth.login(process.env.OSU_ID, process.env.OSU_SECRET, ["public"])
        .then((res) => res?.expires_in ? console.log('Logged in to osu! API') : console.log(res))
        .catch((err) => console.log(err));

    updateMedals();
}

routine();
setInterval(() => routine(), 1000 * 60 * 60 * 23);

const app = new Elysia()
.get("/", () => "Bon dia i bon' hora!")
.group("/web", (app) => app
    .get("/login", () => "Login Page")
    .get("/logout", () => "Logout Page")
    .get("/is_logged_in", () => "Is Logged In Page")
)
.group("/users", (app) => app
    .get("/", () => "Users Page")
    .get("/search/:query", (req) => searchUser(req.params.query))
    .get("/:id", (req) => getUser(req.params.id))
    .get("/:id/:mode", (req) => getUser(req.params.id, req.params.mode))
    .get("/:id/beatmaps", (req) => "User Beatmaps Page")
    .get("/:id/scores", (req) => "User Scores Page")
    .get("/:id/scores/:mode", (req) => "User Scores Page")
    .get("/:id/most_played", (req) => "User Most Played Page")
)
.group("/beatmaps", (app) => app
    .get("/", () => "Beatmaps Page")
    .get("/:id", (req) => `Beatmap ID: ${req.params.id}`)
    .get("/:id/scores", (req) => "Beatmap Scores Page")
)
.get("medals", () => getMedals())
.listen(5000);

console.log(`Server is running at ${app.server?.hostname}:${app.server?.port}`);
