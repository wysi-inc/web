import type { UserCookie } from "@/src/types/users";
import UserMostList from "./u_components/UserMostList";

function UserMostPanel(p: {
    user_id: number;
    user?: UserCookie | null
}) {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserMostList id={p.user_id} offset={0} limit={6} user={p.user} />
        </div>
    );
}

export default UserMostPanel;
