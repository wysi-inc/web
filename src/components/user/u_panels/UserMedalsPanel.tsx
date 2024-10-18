import { Medal } from "@/src/models/Medal";
import type { UserMedal } from "@/src/types/medals";
import MedalBadge from "./u_components/Medal";

type ProfileMedal = {
    achievement_id: number,
    achieved_at: string
}


type Group = {
    [key: string]: {
        count: number;
        medals: UserMedal[];
    }
}

async function UserMedalsPanel(p: {
    user_id: number,
    medals: ProfileMedal[],
    lang: string
}) {

    const db_medals = await Medal.find().lean();

    const user_medals_map = new Map<number, ProfileMedal>();
    p.medals.forEach(um => user_medals_map.set(um.achievement_id, um));

    const medals: UserMedal[] = db_medals.map((m) => {
        const user_medal = user_medals_map.get(m.medal_id);
        if (user_medal) {
            return { ...m, achieved: true, achieved_at: new Date(user_medal.achieved_at) };
        } else {
            return { ...m, achieved: false, achieved_at: null };
        }
    });

    const categories: Group = {};
    medals.forEach((m) => {
        if (!categories[m.category]) {
            categories[m.category] = { count: 0, medals: [] };
        }
        if (m.achieved) {
            categories[m.category].count++;
        }
        categories[m.category].medals.push(m);
    });

    const recent_medals = medals.filter((m) => m.achieved).sort((a, b) => {
        if (a.achieved_at && b.achieved_at) {
            return b.achieved_at.getTime() - a.achieved_at.getTime();
        } else {
            return 0;
        }
    }).slice(0, 10);

    const rarest_medal = medals.filter((m) => m.achieved).sort((a, b) => {
        return a.rarity - b.rarity;
    })[0];

    return (<>
        <div class="flex flex-row flex-wrap gap-4">
            <div class="grow rounded-lg bg-neutral shadow-lg">
                <div class="p-1 px-2 text-neutral-content">
                    Recent Medals
                </div>
                <div class="flex flex-row flex-wrap gap-2 rounded-lg bg-base-300 p-4">
                    {recent_medals.length > 0 ? recent_medals.map((m) =>
                        <MedalBadge medal={m} />
                    ) :
                        <div>No recent medals</div>
                    }
                </div>
            </div>
            <div class="grow rounded-lg bg-neutral shadow-lg">
                <div class="p-1 px-2 text-neutral-content">
                    Rarest Medal ({rarest_medal?.rarity?.toFixed(2)}%)
                </div>
                <div class="flex items-center justify-center rounded-lg bg-base-300 p-4">
                    {rarest_medal ?
                        <MedalBadge medal={rarest_medal} /> :
                        <span>???</span>
                    }
                </div>
            </div>
        </div>
        <details class="group mt-4">
            <summary class="flex cursor-pointer flex-row items-center justify-between gap-4 overflow-hidden rounded-lg bg-neutral px-4 py-2 group-open:mb-4">
                <div class="flex flex-row items-center gap-4">
                    <i class="fa-solid fa-caret-down transform duration-200 ease-out group-open:rotate-180" />
                    <h6 class="flex group-open:hidden">Show All</h6>
                    <h6 class="hidden group-open:flex">Show Less</h6>
                </div>
                <div class="flex flex-row items-center gap-2">
                    <progress class="progress progress-accent hidden w-52 sm:inline-block" value={p.medals?.length} max={db_medals.length} />
                    <span>{p.medals?.length} / {db_medals.length}</span>
                </div>
            </summary>
            <div class="flex flex-col gap-4 overflow-hidden">
                {Object.entries(categories).map(([key, vals]) =>
                    <div class="rounded-lg bg-neutral shadow-lg">
                        <div class="flex flex-row items-center justify-between px-2 py-1 text-neutral-content">
                            <span>{key}</span>
                            <div class="flex flex-row items-center gap-2">
                                <progress class="progress progress-accent hidden w-52 sm:inline-block" value={vals.count} max={vals.medals.length} />
                                <span>{vals.count} / {vals.medals.length}</span>
                            </div>
                        </div>
                        <div class="flex grow flex-row justify-between rounded-lg bg-base-300">
                            <div class="flex grow flex-row flex-wrap justify-center gap-2 p-4">
                                {vals.medals.sort((m) => m.ordering - m.ordering).map((m) =>
                                    <MedalBadge medal={m} />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </details>
    </>);
}

export default UserMedalsPanel;
