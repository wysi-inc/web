function CardControls(props: {
    set_id: number;
}) {
    return (<>
        <div class="hidden group-hover/card:flex transition duration-300 ease-in-out flex-col items-center justify-around p-1 gap-1">
            <a class="btn btn-ghost btn-xs grow p-2" href={`https://catboy.best/d/${props.set_id}`}>
                <i class="fa-solid fa-download" />
            </a>
            <a class="btn btn-ghost btn-xs grow p-2" href={`osu://s/${props.set_id}`}>
                <i class="fa-solid fa-angles-down" />
            </a>
        </div>
    </>);
}

export default CardControls;
