import { Medal } from "@/src/models/Medal";
import type { OsekaiMedal } from "@/src/types/medals";
import { StatsModel } from "../models/Stats";
import { UserModel } from "../models/User";
import { log } from "./logs";
import { TokenModel } from "../models/Tokens";
import { api_auth_user_refresh } from "../api/auth";
// import { api_cloudflare_stats } from "../api/cloudflare";

export async function update_stats() {
    log.info("Started updating stats...");
    try {
        const user_count = await UserModel.countDocuments();
        const users_with_setup = await UserModel.countDocuments({ setup: { $exists: true, $ne: null } });
        const users_with_collections = await UserModel.countDocuments({ collections: { $exists: true, $nin: [null, []] } });
        // const cloudflare = await api_cloudflare_stats();

        let stats = await StatsModel.findOne();
        if (!stats) stats = new StatsModel();

        stats.users = user_count;
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
        const res = await fetch("https://osekai.net/medals/api/medals.php");
        const new_medals: OsekaiMedal[] = await res.json() as any;
        for (const m of new_medals) {
            let medal = await Medal.findOne({ medal_id: m.MedalID });
            if (medal) {
                medal.name = m.Name;
                medal.link = m.Link;
                medal.description = m.Description;
                medal.category = m.Grouping;
                medal.mode_order = m.ModeOrder || 0;
                medal.ordering = m.Ordering || 0;
                medal.rarity = m.Rarity || 0;
            } else {
                medal = new Medal({
                    medal_id: m.MedalID,
                    name: m.Name,
                    link: m.Link,
                    description: m.Description,
                    category: m.Grouping,
                    mode_order: m.ModeOrder || 0,
                    ordering: m.Ordering || 0,
                    rarity: m.Rarity || 0,
                });
            }
            medal.save();
        }
        log.success("Finished updating medals!");
    } catch (err) {
        log.error("Error updating medals", err);
    }
}

export async function update_user_tokens() {
    try {
        log.info("started updating user tokens...");
        // 10h from now
        let time_limit = Math.floor(Date.now() / 1000) + (60 * 60 * 10);
        const tokens = await TokenModel.find({ expires_at: { $lt: time_limit } });
        let done = 0;
        for (let old_token of tokens) {
            const new_token = await api_auth_user_refresh(old_token.refresh_token);
            if (!new_token) continue;
            old_token.access_token = new_token.access_token;
            old_token.refresh_token = new_token.refresh_token;
            old_token.expires_at = Math.floor(Date.now() / 1000) + new_token.expires_in;
            await old_token.save();
            done++;
        }
        log.success(`Finished updating ${done} user tokens!`);
    } catch (err) {
        log.error("Error updating user tokens", err)
    }
}
