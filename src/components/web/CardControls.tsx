function CardControls(props: {
    set_id: number;
}) {
    return (<>
        <div class="hidden flex-col items-center justify-around gap-1 p-1 transition duration-300 ease-in-out group-hover/card:flex">
            <a class="btn btn-ghost btn-xs grow p-2 tooltip tooltip-left flex items-center justify-center" href={`https://catboy.best/d/${props.set_id}`} data-tip="download">
                <i class="fa-solid fa-download" />
            </a>
            <a class="btn btn-ghost btn-xs grow p-2 tooltip tooltip-left flex items-center justify-center" href={`osu://s/${props.set_id}`} data-tip="osu!direct">
                <i class="fa-solid fa-angles-down" />
            </a>
        </div>
    </>);
}

export default CardControls;
