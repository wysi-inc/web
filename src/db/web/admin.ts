import { TabletModel } from "@/src/models/Tablet";
import { UserModel } from "@/src/models/User";
import { log } from "@/src/tasks/logs";
import type { Res } from "@/src/types/users";

export async function removeBadge(user_id: number, badge: number): Promise<Res<string>> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user)
            return {
                error: true,
                data: "User doesn't exist!",
                code: 400,
            };
        if (!user.wysi_badges)
            return {
                error: true,
                data: "This user doesn't have any badges",
                code: 400,
            };
        if (!user.wysi_badges.includes(badge))
            return {
                error: true,
                data: "This user does not have that badge!",
                code: 400,
            };
        user.wysi_badges = user.wysi_badges.filter((b) => b !== badge) as any;
        await user.save();
        log.info("Badge removed");
        return {
            error: false,
            data: "Removed badge from user!",
            code: 200,
        };
    } catch (err) {
        log.error("Error removing badge", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function addBadge(user_id: string, badge: number): Promise<Res<string>> {
    try {
        let user;
        if (isNaN(Number(user_id))) {
            user = await UserModel.findOne({ username: { $eq: user_id } });
        } else {
            user = await UserModel.findOne({ user_id: Number(user_id) });
        }
        if (!user)
            return {
                error: true,
                data: "User doesn't exist!",
                code: 400,
            };
        if (!user.wysi_badges) user.wysi_badges = [badge] as any;
        else if (user.wysi_badges.includes(badge))
            return {
                error: true,
                data: "User already has this badge!",
                code: 400,
            };
        else user.wysi_badges.push(badge);
        await user.save();
        log.info("Badge added");
        return {
            error: false,
            data: "Added badge to user!",
            code: 200,
        };
    } catch (err) {
        log.error("Error adding badge", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function sortBadges(user_id: number, badges: string[]): Promise<Res<string>> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user)
            return {
                error: true,
                data: "User doesn't exist!",
                code: 400,
            };
        user.wysi_badges = badges.map((b) => Number(b));
        await user.save();
        log.info("Badges sorted");
        return {
            error: false,
            data: "Badges sorted!",
            code: 200,
        };
    } catch (err) {
        log.error("Error sorting badges", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function setRole(user_id: number, role: string): Promise<Res<string>> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user)
            return {
                error: true,
                data: "User doesn't exist!",
                code: 400,
            };
        user.role = role as any;
        await user.save();
        log.info("Updated user role");
        return {
            error: false,
            data: "Updated user role",
            code: 200,
        };
    } catch (err) {
        log.error("Error updating role", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function removeRole(user_id: number): Promise<Res<string>> {
    try {
        const user = await UserModel.findOne({ user_id });
        if (!user)
            return {
                error: true,
                data: "User doesn't exist!",
                code: 400,
            };
        user.role = undefined;
        await user.save();
        log.info("Removed user role");
        return {
            error: false,
            data: "Removed user role",
            code: 200,
        };
    } catch (err) {
        log.error("Error removing role", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function addTablet(name: string, w: number, h: number): Promise<Res<string>> {
    try {
        const tablet = new TabletModel({ name, w, h });
        await tablet.save();
        log.info("Tablet added");
        return {
            error: false,
            data: tablet.id,
            code: 201,
        };
    } catch (err) {
        log.error("Error adding tablet", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}

export async function removeTablet(id: string): Promise<Res<string>> {
    try {
        await TabletModel.deleteOne({ _id: id });
        log.info("Tablet deleted");
        return {
            error: false,
            data: "Tablet deleted",
            code: 200,
        };
    } catch (err) {
        log.error("Error deleting tablet", err);
        return {
            error: true,
            data: "Something went wrong",
            code: 500,
        };
    }
}
