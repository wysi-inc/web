import { env } from "bun";
import mongoose from "mongoose";
import { log } from "./logs";
import type { ClientAuth } from "../types/api";

export let OSU_API_TOKEN = "";

export async function connect_mongodb() {
    try {
        await mongoose.connect(env.MONGO_URI);
        log.success("Connected to MongoDB")
    } catch (err) {
        log.error("Couldn't connect to MongoDB\n", err);
    }
}

export async function connect_osu() {
    try {
        const url = new URL("https://osu.ppy.sh/oauth/token");
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        };

        let body = `client_id=${env.OSU_ID}&client_secret=${env.OSU_SECRET}&grant_type=client_credentials&scope=public`;

        const res = await fetch(url.toString(), {
            method: "POST", headers, body: body,
        });

        if (!res.ok) {
            log.error("Error authenticating with osu!API", res.text);
            return;
        }

        const data = await res.json() as ClientAuth;
        log.success("Connected to the osu!API");
        OSU_API_TOKEN = data.access_token;
    } catch (err) {
        log.error("Something went wrong when connecting to the osu!API", err);
    }
}
