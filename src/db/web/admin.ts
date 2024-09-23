import { TabletModel } from "@/src/models/Tablet";
import { User } from "@/src/models/User";
import type { Res } from "@/src/types/users";

export async function removeBadge(user_id: number, badge: number): Promise<Res> {
    const user = await User.findOne({ user_id });
    if (!user) return {
        done: false,
        msg: "User doesn't exist!",
        code: 400
    };
    if (!user.wysi_badges) return {
        done: false,
        msg: "This user doesn't have any badges",
        code: 400
    };
    if (!user.wysi_badges.includes(badge)) return {
        done: false,
        msg: "This user does not have that badge!",
        code: 400
    };
    user.wysi_badges = user.wysi_badges.filter(b => b !== badge) as any;
    await user.save();
    return {
        done: true,
        msg: "Removed badge from user!",
        code: 200
    };
}

export async function addBadge(user_id: string, badge: number): Promise<Res> {
    let user;
    if (isNaN(Number(user_id))) {
        user = await User.findOne({ username: { $eq: user_id } });
    } else {
        user = await User.findOne({ user_id: Number(user_id) });
    }
    if (!user) return {
        done: false,
        msg: "User doesn't exist!",
        code: 400
    };
    if (!user.wysi_badges) user.wysi_badges = [badge] as any;
    else if (user.wysi_badges.includes(badge)) return {
        done: false,
        msg: "User already has this badge!",
        code: 400
    };
    else user.wysi_badges.push(badge);
    await user.save();
    return {
        done: true,
        msg: "Added badge to user!",
        code: 200
    };
}

export async function setRole(user_id: number, role: string): Promise<Res> {
    const user = await User.findOne({ user_id });
    if (!user) return {
        done: false,
        msg: "User doesn't exist!",
        code: 400
    };
    user.role = role as any;
    await user.save();
    return {
        done: true,
        msg: "Updated user role",
        code: 200
    };
}

export async function removeRole(user_id: number): Promise<Res> {
    const user = await User.findOne({ user_id });
    if (!user) return {
        done: false,
        msg: "User doesn't exist!",
        code: 400
    };
    user.role = undefined;
    await user.save();
    return {
        done: true,
        msg: "Removed user role",
        code: 200
    };
}

export async function addTablet(name: number, w: number, h: number): Promise<Res & { id?: string }> {
    try {
        const tablet = new TabletModel({ name, w, h })
        await tablet.save();
        return {
            done: true,
            msg: "Tablet added!",
            code: 201,
            id: tablet._id.toString()
        };
    } catch (err: any) {
        console.error(err);
        return {
            done: false,
            msg: err.message,
            code: 400,
        };
    }
}

export async function removeTablet(id: string): Promise<Res> {
    try {
        await TabletModel.deleteOne({ _id: id });
        return {
            done: true,
            msg: "Tablet deleted!",
            code: 200
        };
    } catch (err: any) {
        return {
            done: false,
            msg: err.message,
            code: 400
        };
    }
}