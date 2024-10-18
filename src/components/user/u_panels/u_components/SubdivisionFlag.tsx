type Props = {
    user_id: number;
}

async function SubdivisionFlag(p: Props) {
    return (
        <div class="subdivision_flag hidden h-5 w-7 items-center justify-center" data-user-id={p.user_id} />
    );
}

export default SubdivisionFlag;
