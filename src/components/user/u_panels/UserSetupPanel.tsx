type Props = {
    id: number;
}

const UserSetupPanel = (props: Props) => {

    return (
        <div>
            <h1>UserSetupPanel</h1>
            <p>id: {props.id}</p>
        </div>
    );
}

export default UserSetupPanel;
