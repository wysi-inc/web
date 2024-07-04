type Props = {
    user_id: number;
}

async function SubdivisionFlag(p: Props) {
    return (
        <div class="subdivision_flag hidden items-center justify-center h-5 w-7" data-user-id={p.user_id} />
    );
}

export default SubdivisionFlag;
