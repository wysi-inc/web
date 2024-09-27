import { log } from "@/src/tasks/logs";
import { type Rank, type Setup, type CollectionDB, UserModel } from "../../models/User";
import type { Mode } from "../../types/osu";
import type { Res, UserBasic, UserExtended } from "../../types/users";
//@ts-ignore
import OsuDBParser from "osu-db-parser";

export async function updateUser(
    user: UserBasic,
    mode: Mode
): Promise<UserExtended> {
    const country_rank = user.statistics.country_rank || null;
    const global_ranks = user.rank_history?.data || [];
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let new_ranks = {
            global_ranks: getNewGlobal(global_ranks, today),
            country_ranks: country_rank ? getNewCountry(country_rank, today) : [],
        }
        let db_user = await UserModel.findOne({ user_id: user.id });
        let updated_user: UserExtended = user;
        if (!db_user) {
            db_user = new UserModel({
                user_id: user.id,
                username: user.username,
                modes: { [mode]: new_ranks },
            });
            await db_user.save();
            updated_user.db_ranks = new_ranks;
            updated_user.db_setup = db_user.setup as any;
            return updated_user;
        }
        db_user.username = user.username;
        if (!db_user.modes[mode]) {
            db_user.modes[mode] = new_ranks as any;
            updated_user.db_ranks = new_ranks;
            updated_user.db_setup = db_user.setup as any;
            updated_user.collections = db_user.collections as any;
            await db_user.save();
            return updated_user;
        }
        const user_mode = db_user.modes[mode] as any;
        new_ranks = getNewMerge(
            user_mode.global_ranks,
            new_ranks.global_ranks,
            user_mode.country_ranks,
            new_ranks.country_ranks
        );
        db_user.modes[mode] = new_ranks as any;
        updated_user.db_ranks = new_ranks;
        updated_user.dan = db_user.dan;
        updated_user.db_setup = db_user.setup;
        updated_user.collections = db_user.collections;
        updated_user.socials = db_user.socials;
        updated_user.wysi_badges = db_user.wysi_badges;
        await db_user.save();
        return updated_user;
    } catch (err) {
        log.error("Error Updating User", err);
        return user;
    }
}

function getNewMerge(
    old_g: Rank[],
    new_g: Rank[],
    old_c: Rank[],
    new_c: Rank[]
) {
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

export async function saveSetup(
    user_id: number,
    setup: any
): Promise<Setup | null> {
    try {
        const user = await UserModel.findOne({ user_id });

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
            rt: setup.keyboard_rt ? true : false,
            press: setup.keyboard_press,
            release: setup.keyboard_release,
            actuation: setup.keyboard_actuation,
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
        log.error("Error saving setup", err);
        return null;
    }
}

export async function parseCollection(file: any) {
    try {
        let collectionBuffer = Buffer.from(await file.arrayBuffer());
        const collectionDB = new OsuDBParser(null, collectionBuffer);
        return collectionDB.getCollectionData();
    } catch (err) {
        log.error("Error parsing setup", err);
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
    const user = await UserModel.findOne({ user_id });
    if (!user) throw new Error("User doesnt exist");
    user.collections = collections as any;
    await user.save();
}


export async function deleteCollections(user_id: number) {
    const user = await UserModel.findOne({ user_id });
    if (!user) return;
    if (!user.collections) return;
    user.collections = [] as any;
    await user.save();
}

export async function getCollectionFile(user_id: number) {
    const user = await UserModel.findOne({ user_id });
    if (!user) return;
    if (!user.collections) return;
    return user.collections;
}

export async function saveSocial(
    user_id: number,
    username: string,
    platform: string
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist",
            code: 404
        };
        if (user.socials?.find(s => s.platform === platform)) return {
            error: true,
            msg: "User already has this social",
            code: 400
        };
        if (!user.socials) [{ platform, username }] as any;
        else user.socials.push({ platform, username });
        await user.save();
        return {
            error: false,
            msg: "Social added",
            code: 201
        };
    } catch (err) {
        log.error("Error adding social", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function deleteSocial(
    user_id: number,
    platform: string
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist",
            code: 404
        };
        if (!user.socials?.find(s => s.platform === platform)) return {
            error: true,
            msg: "User doesnt have this social",
            code: 400
        };
        user.socials = user.socials.filter(s => s.platform !== platform) as any;
        await user.save();
        return {
            error: false,
            msg: "Social removed",
            code: 200
        };
    } catch (err) {
        log.error("Error removing social", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function sortSocials(
    user_id: number,
    platforms: string[]
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist",
            code: 404
        };
        if (!user.socials) return {
            error: true,
            msg: "User doesnt have socials",
            code: 404
        };
        let new_socials: any = [];
        for (let platform of platforms) {
            new_socials.push(user.socials.find(s => s.platform === platform));
        }
        user.socials = new_socials;
        await user.save();
        return {
            error: false,
            msg: "Socials sorted",
            code: 200
        };
    } catch (err) {
        log.error("Error sorting socials", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function updateDan(
    user_id: number,
    dan: string
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesn't exist",
            code: 400
        };
        user.dan = dan as any;
        await user.save();
        return {
            error: false,
            msg: "Dan updated",
            code: 200
        };
    } catch (err) {
        log.error("Error updating Dan", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function addSkin(user_id: number, skin_id: string): Promise<Res & { id?: number }> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist!",
            code: 404
        };
        if (user.skins.length >= 2) return {
            error: true,
            msg: "User has reached the skin limit!",
            code: 400
        };
        if (user.skins?.find(s => s === skin_id)) return {
            error: true,
            msg: "User already has this skin!",
            code: 400
        };
        if (!user.skins) user.skins = [skin_id];
        else user.skins.push(skin_id);
        await user.save();
        return {
            error: false,
            msg: "Skin added",
            code: 201,
            id: user.skins.length - 1,
        };
    } catch (err) {
        log.error("Error adding skin", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function deleteSkin(
    user_id: number,
    skin_id: string
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist",
            code: 404
        };
        if (!user.skins?.find(s => s === skin_id)) return {
            error: true,
            msg: "User doesnt have this skin",
            code: 400
        };
        user.skins = user.skins.filter(s => s !== skin_id);
        await user.save();
        return {
            error: false,
            msg: "Skin removed",
            code: 200
        };
    } catch (err) {
        log.error("Error removing skin", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}

export async function sortSkins(
    user_id: number,
    skins: string[]
): Promise<Res> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user) return {
            error: true,
            msg: "User doesnt exist",
            code: 404
        };
        if (!user.socials) return {
            error: true,
            msg: "User doesnt have any skins",
            code: 404
        };
        let new_skins: any = [];
        for (let skin of skins) {
            new_skins.push(user.skins.find(s => s === skin));
        }
        user.skins = new_skins;
        await user.save();
        return {
            error: false,
            msg: "Skins sorted",
            code: 200
        };
    } catch (err) {
        log.error("Error sorting skins", err);
        return {
            error: true,
            msg: "Something went wrong",
            code: 500
        }
    }
}
