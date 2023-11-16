import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { auth } from "osu-api-extended";
import routes from "../routes/index.js";
import schedule from "node-schedule";
import mysql from "mysql2";

export default class Server {
  constructor() {
    this.port = process.env.PORT || 5000;
    this.app = express();

    this.middlewares();
    this.routes();
    this.schedules();
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

  async database() {
    mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const mongodb = mongoose.connection;
    mongodb.on("error", (err) => console.error(err));
    mongodb.once("open", () => console.log("Connected to mongodb!"));

    this.mysqldb = mysql
      .createPool({
        host: "127.0.0.1",
        user: "ies",
        password: "super3",
        database: "wysi",
      })
      .promise();
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

  schedules() {
    this.getMedals();
    schedule.scheduleJob("0 0 * * *", async () => {
      this.getMedals();
    });
  }
  
  async getMedals() {
    const result = await fetch("https://osekai.net/medals/api/medals.php");
    const medals = await result.json();
    const query = [
      "REPLACE INTO medals SET",
      "medal_id=?, name=?, link=?, description=?, restriction=?, grouping=?, instructions=?, solution_found=?, solution=?, mods=?, locked=?, video=?, date=?, pack_id=?, first_achieved_date=?, first_achieved_by=?, mode_order=?, ordering=?, rarity=?"
    ]
    const sql = query.join(" ") + ";";
    for (const medal of medals) {
      this.mysqldb.query(
        sql, 
        [
          parseInt(medal.MedalID),
          medal.Name,
          medal.Link,
          medal.Description,
          medal.Restriction,
          medal.Grouping,
          medal.Instructions,
          Boolean(medal.SolutionFound),
          medal.Solution,
          medal.Mods,
          Boolean(medal.Locked),
          medal.Video,
          new Date(medal.Date),
          medal.PackId,
          new Date(medal.FirstAchievedDate),
          medal.FirstAchievedBy,
          parseInt(medal.ModeOrder),
          parseInt(medal.Ordering),
          parseFloat(medal.Rarity),
        ]
      );
    }
  }
}
