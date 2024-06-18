type Props = {
    beatmap_id: number;
    set_id: number;
}

const CardControls = (props: Props) => {

    return (
        <div class="transition duration-300 ease-in-out hidden group-hover:flex flex-col items-center justify-around p-1 gap-1">
            <a class="btn btn-ghost btn-sm grow p-2" href={`osu://b/${props.beatmap_id}`}>
                <i class="fa-solid fa-angles-down" />
            </a>
            <a class="btn btn-ghost btn-sm grow p-2" href={`https://catboy.best/d/${props.set_id}`}>
                <i class="fa-solid fa-download" />
            </a>
        </div>
    );
}
export default CardControls;
