type Props = {
    set_id: number;
    beatmap_id: number;
    beatmap_title: string;
    beatmap_artist: string;
    css?: string;
}

const AudioPlayButton = (props: Props) => {
    const audio_src = `https://catboy.best/preview/audio/${props.beatmap_id}`;
    const cardImg = `https://assets.ppy.sh/beatmaps/${props.set_id}/covers/card.jpg?${props.set_id}`;

    const audio_player = `document.getElementById('audio_player')`;
    const audio_image = `document.getElementById('audio_image')`;
    const audio_title = `document.getElementById('audio_title')`;
    const audio_artist = `document.getElementById('audio_artist')`;

    return (
        <button class={props.css}
            onclick={`${audio_player}.src = '${audio_src}'; 
                      ${audio_image}.style.backgroundImage = "url('${cardImg}')";
                      ${audio_title}.innerText = '${props.beatmap_title}';
                      ${audio_title}.href = '/beatmaps/${props.set_id}/${props.beatmap_id}';
                      ${audio_artist}.innerText = 'by ${props.beatmap_artist}';
            `}>
            <i class="fa-solid fa-headphones" />
        </button >
    );
}

export default AudioPlayButton;
