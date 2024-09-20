import { User } from "@/src/models/User";

async function AdminAdmins() {

    const admins = await User.find({ admin: { $eq: true } });
    if (!admins) return <>No admins found!</>;

    return (<>
        {admins.map(a => a.username)}
    </>);
}

export default AdminAdmins;
