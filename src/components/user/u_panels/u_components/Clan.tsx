type Props = {
    user_id: number
}

function Clan(p: Props) {
    return (
        <a class="hidden clan_tag" aria-label="clan tag" data-user-id={p.user_id} target="_blank" />
    );
}

export default Clan;
