import type { Medal } from "../models/Medal";

export type OsekaiMedal = {
    MedalID: number;
    Name: string;
    Link: string;
    Description: string;
    Restriction: string;
    Grouping: string;
    ModeOrder: number;
    Ordering: number;
    Rarity: number;
    AchievementDate: Date;
    Achieved: boolean;
};

export type UserMedal = Medal & {
    achieved: boolean;
    achieved_at: Date | null;
};
