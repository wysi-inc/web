import { MedalModel, type Medal } from "@/src/models/Medal";
import { StatsModel } from "../models/Stats";
import { UserModel } from "../models/User";
import { log } from "./logs";
import { TokenModel } from "../models/Tokens";
import { api_auth_user_refresh } from "../api/auth";
import { assert } from "../libs/web_utils";
// import { api_cloudflare_stats } from "../api/cloudflare";

export async function update_stats() {
    log.info("Started updating stats...");
    try {
        const profile_count = await UserModel.countDocuments();
        const user_count = await TokenModel.countDocuments();
        const users_with_setup = await UserModel.countDocuments({ setup: { $exists: true, $ne: null } });
        const users_with_collections = await UserModel.countDocuments({ collections: { $exists: true, $nin: [null, []] } });
        // const cloudflare = await api_cloudflare_stats();

        let stats = await StatsModel.findOne();
        if (!stats) stats = new StatsModel();

        stats.users = user_count;
        stats.profiles = profile_count;
        stats.setups = users_with_setup;
        stats.collections = users_with_collections;
        stats.updated_at = new Date();

        await stats.save();
        log.success("Finished updating stats...");
    } catch (err) {
        log.error("Error updaing stats", err);
    }
}

export async function update_medals() {
    try {
        log.info("started updating medals...");
        const res = await fetch("https://inex.osekai.net/api/medals/get_all");
        const data: any = await res.json();
        const new_medals: Medal[] = data.content;
        assert(new_medals, "no new medals");
        await MedalModel.deleteMany();
        await MedalModel.insertMany(new_medals);
        log.success("Finished updating medals!");
    } catch (err) {
        log.error("Error updating medals", err);
    }
}

export async function update_user_tokens() {
    try {
        log.info("started updating user tokens...");
        // 10h from now
        let time_limit = Math.floor(Date.now() / 1000) + 60 * 60 * 10;
        const tokens = await TokenModel.find({ expires_at: { $lt: time_limit } });
        let done = 0;
        for (let old_token of tokens) {
            const res = await api_auth_user_refresh(old_token.refresh_token);
            if (res.error) continue;
            old_token.access_token = res.data.access_token;
            old_token.refresh_token = res.data.refresh_token;
            old_token.expires_at = Math.floor(Date.now() / 1000) + res.data.expires_in;
            await old_token.save();
            done++;
        }
        log.success(`Finished updating ${done} user tokens!`);
    } catch (err) {
        log.error("Error updating user tokens", err);
    }
}
