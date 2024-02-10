import UserMostList from "./u_components/UserMostList";

type Props = {
    id: number;
}

const UserMostPanel = (props: Props) => {
    return (
        <div class="rounded-lg bg-base-100 p-4 flex-flex-col gap-4" id="scores-panel">
            <div class="flex flex-row items-center gap-2">
                <i class="fa-solid fa-arrow-rotate-left" />
                <div>
                    Most Played
                </div>
            </div>
            <div class="grid grid-cols-1 mt-2 md:grid-cols-2 gap-4">
                <UserMostList id={props.id} offset={0} limit={6} />
            </div>
        </div>
    );
}

export default UserMostPanel;
