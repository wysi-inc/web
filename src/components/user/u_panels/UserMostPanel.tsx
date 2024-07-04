import UserMostList from "./u_components/UserMostList";

type Props = {
    user_id: number;
}

const UserMostPanel = (p: Props) => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserMostList id={p.user_id} offset={0} limit={6} />
        </div>
    );
}

export default UserMostPanel;
