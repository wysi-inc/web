import { env } from "bun";
import { auth } from "osu-api-extended";
import mongoose from "mongoose";

export async function connect_mongodb() {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.info("[ OK ] Connected to MongoDB")
    } catch (err) {
        console.error("[ EE ] Couldn't connect to MongoDB\n", err);
    }
}

export async function connect_osu() {
    const result = await auth.login(env.OSU_ID, env.OSU_SECRET, ["public"]).catch((err) => console.error(err));

    if (!result?.expires_in) return console.error("[ EE ] Couldn't connect to osu!API\n", result);
    console.info("[ OK ] Connected to osu!API")
    setTimeout(async () => {
        await relogin()
        setInterval(async () => await relogin(), 1000 * 60 * 60 * 12);
    }, result.expires_in * 1000);

    auth.set_v1(env.OSU_API_KEY);
}

async function relogin() {
    const result = await auth.re_login();
    if (!result) return console.error("[ EE ] Couldn't reconnect to osu!API\n");
}
