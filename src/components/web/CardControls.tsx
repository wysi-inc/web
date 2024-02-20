type Props = {
    beatmap_id: number;
    set_id: number;
}

const CardControls = (props: Props) => {
    const audio_url = `https://catboy.best/preview/audio/${props.beatmap_id}?set=${props.set_id}`;
    return (
        <div class="flex flex-col items-center justify-around p-1 gap-1">
            <button class="btn btn-ghost btn-sm grow p-2 audio" onclick={`playAudio("${audio_url}")`}>
                <i class="fa-solid fa-play fa-sm" />
            </button>
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
