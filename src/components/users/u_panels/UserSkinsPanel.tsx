type Props = {
    id: number;
}

const UserSkinsPanel = (props: Props) => {

    return (
        <div>
            <h1>UserSkinsPanel</h1>
            <p>id: {props.id}</p>
        </div>
    );
}

export default UserSkinsPanel;
