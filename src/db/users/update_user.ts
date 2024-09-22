import { type Rank, User, type Setup, type CollectionDB, type UserSocialType } from "../../models/User";
import type { Mode } from "../../types/osu";
import type { Res, User as UserType } from "../../types/users";
//@ts-ignore
import OsuDBParser from "osu-db-parser";

export async function updateUser(user: UserType, mode: Mode): Promise<UserType> {
    const country_rank = user.statistics.country_rank || null;
    const global_ranks = user.rank_history?.data || [];
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let new_ranks = {
            global_ranks: getNewGlobal(global_ranks, today),
            country_ranks: country_rank ? getNewCountry(country_rank, today) : [],
        }
        let db_user = await User.findOne({ user_id: user.id });
        if (!db_user) {
            db_user = new User({
                user_id: user.id,
                username: user.username,
                modes: { [mode]: new_ranks },
            });
            await db_user.save();
            user.db_ranks = new_ranks;
            user.db_setup = db_user.setup as any;
            return user;
        }
        db_user.username = user.username;
        if (!db_user.modes[mode]) {
            db_user.modes[mode] = new_ranks as any;
            user.db_ranks = new_ranks;
            user.db_setup = db_user.setup as any;
            user.collections = db_user.collections as any;
            await db_user.save();
            return user;
        }
        const user_mode = db_user.modes[mode] as any;
        new_ranks = getNewMerge(
            user_mode.global_ranks,
            new_ranks.global_ranks,
            user_mode.country_ranks,
            new_ranks.country_ranks
        );
        db_user.modes[mode] = new_ranks as any;
        user.db_ranks = new_ranks;
        user.dan = db_user.dan as any;
        user.db_setup = db_user.setup as any;
        user.collections = db_user.collections as any;
        user.socials = db_user.socials as any;
        user.wysi_badges = db_user.wysi_badges as any;
        await db_user.save();
        return user;
    } catch (err) {
        console.error(err);
        return user;
    }
}

function getNewMerge(old_g: Rank[], new_g: Rank[], old_c: Rank[], new_c: Rank[]) {
    return {
        global_ranks: addRanks(old_g, new_g),
        country_ranks: addRanks(old_c, new_c),
    }
}

function addRanks(r_old: Rank[], r_new: Rank[]) {
    const rankMap = new Map(r_old.map(entry => [entry.date.getTime(), entry]));
    for (const r of r_new) {
        const existingEntry = rankMap.get(r.date.getTime());
        if (existingEntry) {
            existingEntry.rank = r.rank;
        } else {
            rankMap.set(r.date.getTime(), { date: r.date, rank: r.rank });
        }
    }
    return Array.from(rankMap.values());
}

function getNewGlobal(ranks: number[], today: Date): Rank[] {
    return ranks.map((number, index) => {
        const date = new Date(today);
        date.setDate(date.getDate() - (ranks.length - 1 - index));
        return { rank: number, date };
    })
}

function getNewCountry(rank: number, today: Date): Rank[] {
    return [{ date: today, rank }]
}

export async function saveSetup(user_id: number, setup: any): Promise<Setup | null> {
    try {
        const user = await User.findOne({ user_id });

        if (!user) return null;
        if (setup.keyboard_layout === "k0") setup.keyboard_layout = "";

        const tablet: Setup["tablet"] = {
            name: setup.tablet_name,
            size: {
                w: setup.tablet_size_w,
                h: setup.tablet_size_h,
            },
            area: {
                w: setup.tablet_area_w,
                h: setup.tablet_area_h,
            },
            position: {
                y: setup.tablet_position_y,
                x: setup.tablet_position_x,
                r: setup.tablet_position_r,
            }
        };

        const keys: string[] = [];
        Object.entries(setup).forEach(([key, value]) => {
            if (key.startsWith("keyboard_key_") && value === "on") {
                keys.push(key.replace("keyboard_key_", ""));
            }
        });

        const keyboard: Setup["keyboard"] = {
            name: setup.keyboard_name,
            layout: setup.keyboard_layout,
            keys: keys,
        };

        const mouse: Setup["mouse"] = {
            name: setup.mouse_name,
            dpi: setup.mouse_dpi,
            mult: setup.mouse_x,
        };
        const peripherals: Setup["peripherals"] = {
            mouse: setup.peripherals_mouse,
            mousepad: setup.peripherals_mousepad,
            keyboard: setup.peripherals_keyboard,
            keypad: setup.peripherals_keypad,
            headphones: setup.peripherals_headphones,
            audio: setup.peripherals_audio,
            camera: setup.peripherals_camera,
            microphone: setup.peripherals_microphone,
            chair: setup.peripherals_chair,
            desk: setup.peripherals_desk,
            monitor: setup.peripherals_monitor,
        };
        const computer: Setup["computer"] = {
            os: setup.computer_os,
            cpu: setup.computer_cpu,
            gpu: setup.computer_gpu,
            ram: setup.computer_ram,
            storage: setup.computer_storage,
            motherboard: setup.computer_motherboard,
            psu: setup.computer_psu,
            case: setup.computer_case,
        };

        user.setup = {
            keyboard,
            mouse,
            tablet,
            peripherals,
            computer,
        };

        await user.save();
        return user.setup;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function parseCollection(file: any) {
    try {
        let collectionBuffer = Buffer.from(await file.arrayBuffer());
        const collectionDB = new OsuDBParser(null, collectionBuffer);
        return collectionDB.getCollectionData();
    } catch (err) {
        return;
    }
}

export async function saveCollection(body: object, user_id: number) {

    const collections: CollectionDB[] = [];

    for (const [k, v] of Object.entries(body)) {
        collections.push({
            name: k,
            beatmapsMd5: JSON.parse(v)
        });
    }
    const user = await User.findOne({ user_id });
    if (!user) throw new Error("User doesnt exist");
    user.collections = collections as any;
    await user.save();
}


export async function deleteCollections(user_id: number) {
    const user = await User.findOne({ user_id });
    if (!user) return;
    if (!user.collections) return;
    user.collections = [] as any;
    await user.save();
}

export async function getCollectionFile(user_id: number) {
    const user = await User.findOne({ user_id });
    if (!user) return;
    if (!user.collections) return;
    console.log(user.collections);
    return user.collections;
}

export async function saveSocial(user_id: number, username: string, platform: string): Promise<Res> {
    const user = await User.findOne({ user_id });
    if (!user) return {
        msg: "User doesnt exist",
        done: false,
        code: 404
    };
    if (user.socials?.find(s => s.platform === platform)) return {
        msg: "User already has this social",
        done: false,
        code: 400
    };
    if (!user.socials) [{ platform, username }] as any;
    else user.socials.push({ platform, username });
    await user.save();
    return {
        msg: "Social added",
        done: true,
        code: 201
    };
}

export async function deleteSocial(user_id: number, platform: string): Promise<Res> {
    const user = await User.findOne({ user_id });
    if (!user) return {
        msg: "User doesnt exist",
        done: false,
        code: 404
    };
    if (!user.socials?.find(s => s.platform === platform)) return {
        msg: "User doesnt have this social",
        done: false,
        code: 400
    };
    user.socials = user.socials.filter(s => s.platform !== platform) as any;
    await user.save();
    return {
        msg: "Social removed",
        done: true,
        code: 200
    };
}

export async function updateDan(user_id: number, dan: string): Promise<boolean> {
    const user = await User.findOne({ user_id });
    if (!user) return false;
    user.dan = dan as any;
    await user.save();
    return true;
}

export async function removeBadge(user_id: number, badge: number): Promise<[boolean, string]> {
    const user = await User.findOne({ user_id });
    if (!user) return [false, "User doesn't exist!"];
    if (!user.wysi_badges) return [false, "This user doesn't have any badges"];
    else if (!user.wysi_badges.includes(badge)) {
        return [false, "This user does not have that badge!"];
    }
    else user.wysi_badges = user.wysi_badges.filter(b => b !== badge) as any;
    await user.save();
    return [true, "Removed badge from user!"];
}

export async function addBadge(user_id: string, badge: number): Promise<[boolean, string]> {
    let user;
    if (isNaN(Number(user_id))) {
        user = await User.findOne({ username: { $eq: user_id } });
    } else {
        user = await User.findOne({ user_id: Number(user_id) });
    }
    if (!user) return [false, "User doesn't exist!"];
    if (!user.wysi_badges) user.wysi_badges = [badge] as any;
    else if (user.wysi_badges.includes(badge)) return [false, "User already has this badge!"];
    else user.wysi_badges.push(badge);
    await user.save();
    return [true, "Added badge to user!"];
}

export async function setRole(user_id: number, role: string): Promise<[boolean, string]> {
    const user = await User.findOne({ user_id });
    if (!user) return [false, "User doesn't exist!"];
    user.role = role as any;
    await user.save();
    return [true, "Updated user role"];
}

export async function removeRole(user_id: number): Promise<[boolean, string]> {
    const user = await User.findOne({ user_id });
    if (!user) return [false, "User doesn't exist!"];
    user.role = undefined;
    await user.save();
    return [true, "Deleted user role"];
}
