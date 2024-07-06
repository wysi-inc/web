type Props = {
    set_id: number;
    beatmap_id: number;
    beatmap_title: string;
    beatmap_artist: string;
    css?: string;
}

const AudioPlayButton = (p: Props) => {
    const audio_src = `https://catboy.best/preview/audio/${p.beatmap_id}`;
    const cardImg = `https://assets.ppy.sh/beatmaps/${p.set_id}/covers/card.jpg?${p.set_id}`;
    return (
        <button class={p.css} data-song={JSON.stringify({
            src: audio_src,
            cover: cardImg,
            title: p.beatmap_title,
            artist: p.beatmap_artist,
            set_id: p.set_id,
            beatmap_id: p.beatmap_id,
        })} onclick="playAudio(this);">
            <i class="fa-solid fa-play" />
        </button >
    );
}

export default AudioPlayButton;
