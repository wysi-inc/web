import { env } from "bun";
import mongoose from "mongoose";
import { auth } from "osu-api-extended";
import { log } from "./logs";

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
        const result = await auth.login(env.OSU_ID, env.OSU_SECRET, ["public"]);

        if (!result?.expires_in) {
            log.error("Couldn't connect to the osu!API", result);
            return;
        }
        log.success("Connected to the osu!API")
        setTimeout(async () => {
            await relogin()
            setInterval(async () => await relogin(), 1000 * 60 * 60 * 12);
        }, result.expires_in * 1000);

        auth.set_v1(env.OSU_API_KEY);
    } catch (err) {
        log.error("Couldn't connect to the osu!API", err);
    }
}

async function relogin() {
    const result = await auth.re_login();
    if (!result) {
        log.error("Couldn't reconnect to osu!API");
    } else {
        log.success("Re-Logged to the osu!API")
    }
}
