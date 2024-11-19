import type { Medal } from "../models/Medal";

export type UserMedal = Medal & {
    achieved: boolean;
    achieved_at: Date | null;
};
