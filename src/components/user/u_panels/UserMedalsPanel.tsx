import MedalBadge from "./u_components/Medal";
import { Medal } from "@/src/models/Medal";
import { User, type ProfileMedal } from "@/src/models/User";
import type { UserMedal } from "@/src/types/medals";

type Props = {
    user_id: number
}

type Group = {
    [key: string]: {
        count: number;
        medals: UserMedal[];
    }
}

async function UserMedalsPanel(p: Props) {

    const user = await User.findOne({ user_id: p.user_id });
    if (!user) return <>This user hasn't gotten any yet. ;_;</>;

    const db_medals = await Medal.find().lean();

    const user_medals_map = new Map<number, ProfileMedal>();
    user.medals?.forEach(um => user_medals_map.set(um.achievement_id, um));

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

    return (
        <div class="flex flex-col gap-4">
            <div class="flex flex-row flex-wrap gap-4">
                <div class="rounded-lg bg-neutral shadow-lg grow">
                    <div class="p-1 px-2 text-neutral-content">
                        Recent Medals
                    </div>
                    <div class="flex flex-row gap-2 flex-wrap p-4 bg-base-300 rounded-lg">
                        {recent_medals.length > 0 ? recent_medals.map((m) =>
                            <MedalBadge medal={m} />
                        ) :
                            <div>No recent medals</div>
                        }
                    </div>
                </div>
                <div class="rounded-lg bg-neutral shadow-lg grow">
                    <div class="p-1 px-2 text-neutral-content">
                        Rarest Medal ({rarest_medal?.rarity?.toFixed(2)}%)
                    </div>
                    <div class="flex p-4 bg-base-300 rounded-lg justify-center items-center">
                        {rarest_medal ?
                            <MedalBadge medal={rarest_medal} /> :
                            <div>???</div>
                        }
                    </div>
                </div>
            </div>
            {Object.entries(categories).map(([key, vals]) =>
                <div class="rounded-lg bg-neutral shadow-lg">
                    <div class="text-neutral-content py-1 px-2 flex flex-row justify-between items-center">
                        <div>
                            {key}
                        </div>
                        <div class="flex flex-row items-center gap-2">
                            <progress class="hidden sm:inline-block progress progress-accent w-52" value={vals.count} max={vals.medals.length} />
                            <div>
                                {vals.count} / {vals.medals.length}
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg flex flex-row justify-between grow bg-base-300">
                        <div class="p-4 flex flex-row grow justify-center flex-wrap gap-2">
                            {vals.medals.sort((m) => m.ordering - m.ordering).map((m) =>
                                <MedalBadge medal={m} />
                            )}
                        </div>
                        <div class="flex items-end">
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default UserMedalsPanel;
