import { DonationModel } from "@/src/models/Donations";
import moment from "moment";

async function Support() {
    const donations = await DonationModel.find().sort({ 'timestamp': -1 });
    return (<>
        <div>We appreciate your support!</div>
        <p>This website doesnt (and won't) have any paid features</p>
        {donations.map(d => (
            <div role="alert" class="alert shadow-lg">
                <div class="size-8 rounded-full flex items-center justify-center bg-pink-400">
                    <i class="fa-solid fa-heart" />
                </div>
                <div>
                    <h3 class="font-bold">{d.is_public ? d.from_name : "Anonym"} ({d.amount} {d.currency})</h3>
                    <div class="text-xs">{d.is_public ? d.message : ""}</div>
                </div>
                <span>{moment(d.timestamp).fromNow()}</span>
            </div>
        ))}
    </>);
}

export default Support;
