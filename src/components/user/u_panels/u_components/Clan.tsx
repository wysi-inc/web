type Props = {
    user_id: number
}

function Clan(p: Props) {
    return (
        <div class="hidden clan_tag drop-shadow-solid" data-user-id={p.user_id} />
    );
}

export default Clan;
