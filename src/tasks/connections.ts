import { env } from "bun";
import mongoose from "mongoose";
import { log } from "./logs";
import { api_auth_client } from "../api/auth";

export let OSU_API_TOKEN = "";

export async function connect_mongodb() {
    try {
        await mongoose.connect(env.MONGO_URI);
        log.success("Connected to MongoDB");
    } catch (err) {
        log.error("Couldn't connect to MongoDB\n", err);
    }
}

export async function connect_osu() {
    const res = await api_auth_client();
    if (res.error) {
        log.error("Something went wrong when connecting to the osu!API");
        return;
    }
    log.success("Connected to the osu!API");
    OSU_API_TOKEN = res.data.access_token;
}
