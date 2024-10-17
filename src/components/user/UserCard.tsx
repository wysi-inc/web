import Link from "../web/Link";
import Avatar from "./Avatar";

async function UserCard(p: { user_id: number, username: string }) {
    return (
        <div class="flex flex-row items-center gap-2 rounded-lg bg-base-100 p-2 shadow-lg">
            <div class="avatar size-10">
                <Avatar id={p.user_id} />
            </div>
            <Link url={`/users/${p.user_id}`} css="text-xl">{p.username}</Link>
        </div>
    );
}

export default UserCard;
