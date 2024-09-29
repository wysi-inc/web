import { Medal } from "@/src/models/Medal";
import type { OsekaiMedal } from "@/src/types/medals";
import { StatsModel } from "../models/Stats";
import { UserModel } from "../models/User";
import { log } from "./logs";
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
        log.success("Finished updating medals...");
    } catch (err) {
        log.error("Error updating medals", err);
    }
}
