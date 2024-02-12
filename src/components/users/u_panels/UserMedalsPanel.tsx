import { Medal } from "@/src/models/Medal";
import MedalBadge from "./u_components/Medal";
import type { UserMedal } from "@/src/types/users";

type ProfileMedal = {
    achievement_id: number,
    achieved_at: string
}

type Props = {
    user_medals: ProfileMedal[]
}

type Group = {
    [key: string]: {
        count: number;
        medals: UserMedal[];
    }
}

const UserMedalsPanel = async (props: Props) => {

    const user_medals = props.user_medals;

    const db_medals: Medal[] = await Medal.find().lean();

    // make a map of user_medals keyed by achievement_id
    const user_medal_map = new Map<number, ProfileMedal>();
    user_medals.forEach((um) => {
        user_medal_map.set(um.achievement_id, um);
    });

    // iterate over db_medals, if user_medal_map has a key for the medal,
    // add it to a new array called medals that will be typed as UserMedal[]
    // with the achieved_at property set to the value from user_medal_map and achieved set to true
    // if the key is not found, add the medal to the array with achieved_at set to null and achieved set to false

    const medals: UserMedal[] = db_medals.map((m) => {
        const um = user_medal_map.get(m.medal_id);
        if (um) {
            return { ...m, achieved: true, achieved_at: new Date(um.achieved_at) } as UserMedal;
        } else {
            return { ...m, achieved: false, achieved_at: null } as UserMedal;
        }
    });

    // group the medals by category to an objet of type Group
    // the category is the key and the value is an object with a count and an array of medals
    // the count is the number of medals in the category that the user has achieved

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

    // get a list of the 10 most recent medals achieved by the user

    const recent_medals = medals.filter((m) => m.achieved).sort((a, b) => {
        if (a.achieved_at && b.achieved_at) {
            return b.achieved_at.getTime() - a.achieved_at.getTime();
        } else {
            return 0;
        }
    }).slice(0, 10);

    // get rarest medal that the user has achieved

    const rarest_medal = medals.filter((m) => m.achieved).sort((a, b) => {
        return a.rarity - b.rarity;
    })[0];

    return (
        <div class="p-4 bg-base-100 rounded-lg flex flex-col gap-4 shadow-lg">
            <div class="flex flex-row items-center gap-2">
                <a class="tooltip" data-tip="powered by osekai.net" href="https://osekai.net" target="_blank">
                    <img src="/public/img/osekai.svg" class="w-5 h-5" alt="osekai" />
                </a>
                <div>
                    Medals
                </div>
            </div>
            <div class="flex flex-row gap-4">
                <div class="rounded-lg bg-neutral shadow-lg grow">
                    <div class="p-1 px-2">
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
                <div class="rounded-lg bg-neutral shadow-lg">
                    <div class="p-1 px-2">
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
                    <div class="py-1 px-2 flex flex-row justify-between items-center">
                        <div>
                            {key}
                        </div>
                        <div class="flex flex-row items-center gap-2">
                            <progress class="progress progress-accent w-52" value={vals.count} max={vals.medals.length} />
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
