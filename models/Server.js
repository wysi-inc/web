import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { auth } from "osu-api-extended";
import routes from "../routes/index.js";

export default class Server {
  constructor() {
    this.port = process.env.PORT || 5000;
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());

    this.database();
    this.osuApi();
  }

  routes() {
    this.app.get("/", (req, res) => {
      return res.send({ msg: "Server is running 🚀" });
    });

    this.app.use("/", routes);
  }

  database() {
    mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", () => console.error("Error connecting to the database"));
    db.once("open", () => console.log("Connected to the database"));
  }

  async osuApi() {
    this.login();
    console.log("Logged into Application");

    setInterval(() => this.login(), 1000 * 60 * 60 * 24);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  async login() {
    await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, [
      "public",
    ]);
  }
}
