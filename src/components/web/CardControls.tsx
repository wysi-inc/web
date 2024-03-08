import AudioPlayer from "./AudioPlayer";

type Props = {
    beatmap_id: number;
    set_id: number;
}

const CardControls = (props: Props) => {
    return (
        <div class="flex flex-col items-center justify-around p-1 gap-1">
            <AudioPlayer beatmap_id={props.beatmap_id} />
            <a class="btn btn-ghost btn-sm grow p-2" href={`osu://b/${props.beatmap_id}`}>
                <i class="fa-solid fa-file-arrow-down fa-sm" />
            </a>
            {
                // <a class="btn btn-ghost btn-sm grow p-2" href={`https://catboy.best/d/${props.set_id}`}>
                //     <i class="fa-solid fa-download fa-sm" />
                // </a>
            }
        </div>
    );
}
export default CardControls;
