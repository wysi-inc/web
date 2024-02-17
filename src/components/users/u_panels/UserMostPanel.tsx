import UserMostList from "./u_components/UserMostList";

type Props = {
    id: number;
}

const UserMostPanel = (props: Props) => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <UserMostList id={props.id} offset={0} limit={6} />
        </div>
    );
}

export default UserMostPanel;
