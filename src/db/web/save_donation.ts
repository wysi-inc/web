import { DonationModel } from "@/src/models/Donations";
import { log } from "@/src/tasks/logs";

export async function save_donation(data: any): Promise<boolean> {
    try {
        const donation = new DonationModel({
            from_name: data.from_name,
            amount: Number(data.amount),
            currency: data.currency,
            is_public: data.is_public,
            message: data.message,
            timestamp: data.timestamp,
        });
        donation.save();
    } catch (err) {
        log.error("Error saving donation", err);
        return false;
    }
    return true;
}
