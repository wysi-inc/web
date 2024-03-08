type Props = {
    beatmap_id: number;
}

const AudioPlayer = (props: Props) => {
    const audio_url = `https://catboy.best/preview/audio/${props.beatmap_id}`;
    const tag = `audio-${props.beatmap_id}`;
    return (
        <div>
            <audio id={tag} src={audio_url} />
            <button class="btn btn-ghost btn-sm grow p-2" onclick={`document.getElementById('${tag}').play()`}>
                <i class="fa-solid fa-play fa-sm" />
            </button>
        </div>
    )
}

export default AudioPlayer;
