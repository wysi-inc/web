import { DonationModel } from "@/src/models/Donations";

async function Contributors() {
    const donations = await DonationModel.find();
    return (<>
        <div>hellooo</div>
        {donations.map(d => (
            <div>
                {d.from_name}
            </div>
        ))}
    </>);
}

export default Contributors;
