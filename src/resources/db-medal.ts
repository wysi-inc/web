import { Medal } from "../models/Medal";
import type { OsekaiMedal } from "../types/medals";

export async function updateMedals() {
    try {
        const result = await fetch("https://osekai.net/medals/api/medals.php");
        const new_medals: OsekaiMedal[] = await result.json();
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
    } catch (err) {
        console.error("could not update medals", err);
    }
}
