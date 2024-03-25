import { type Rank, User, type Setup } from "../models/User";
import type { Mode } from "../types/osu";
import type { User as UserType } from "../types/users";

export async function updateUser(user: UserType, mode: Mode): Promise<UserType> {
    const country_rank = user.statistics.country_rank;
    const global_ranks = user.rank_history?.data || [];
    if (!country_rank) return user;
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let new_ranks = {
            global_ranks: getNewGlobal(global_ranks, today),
            country_ranks: getNewCountry(country_rank, today),
        }
        let db_user = await User.findOne({ user_id: user.id });
        if (!db_user) {
            db_user = new User({
                user_id: user.id,
                username: user.username,
                modes: { [mode]: new_ranks },
            });
            db_user.save();
            user.db_ranks = new_ranks;
            user.db_setup = db_user.setup as any;
            return user;
        }
        db_user.username = user.username;
        if (!db_user.modes[mode]) {
            db_user.modes[mode] = new_ranks as any;
            user.db_ranks = new_ranks;
            user.db_setup = db_user.setup as any;
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
        user.db_setup = db_user.setup as any;
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
    const user = await User.findOne({ user_id });
    if (!user) return null;
    const tablet: Setup["tablet"] = {
        name: setup.tablet_name,
        size: {
            w: Number(setup.tablet_size_w),
            h: Number(setup.tablet_size_h),
        },
        area: {
            w: Number(setup.tablet_area_w),
            h: Number(setup.tablet_area_h),
        },
        position: {
            y: Number(setup.tablet_position_y),
            x: Number(setup.tablet_position_x),
            r: Number(setup.tablet_position_r),
        }
    };
    const keyboard: Setup["keyboard"] = {
        name: setup.keyboard_name,
        layout: setup.keyboard_layout,
        keys: Object.keys(setup).filter(key => key.startsWith("keyboard_key_")).map(key => key.replace("keyboard_key_", "")),
    };
    const mouse: Setup["mouse"] = {
        name: setup.mouse_name,
        dpi: Number(setup.mouse_dpi),
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
        tablet,
        keyboard,
        mouse,
        peripherals,
        computer,
    };
    user.save();
    return user.setup;
}
