type Props = {
    user_id: number
}

function Clan(p: Props) {
    return (
        <div class="clan_tag hidden drop-shadow-solid" data-user-id={p.user_id} />
    );
}

export default Clan;
