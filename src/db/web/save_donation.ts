import { DonationModel } from "@/src/models/Donations";

export async function save_donation(data: any): Promise<boolean> {
    try {
        const donation = new DonationModel({
            from_name: data.from_name,
            amount: Number(data.amount),
            currency: data.currency,
            timestamp: data.timestamp
        });
        donation.save();
    } catch (err) {
        console.error(err);
        return false;
    }
    return true;
}
