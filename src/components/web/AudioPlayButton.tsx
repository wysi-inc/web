function AudioPlayButton(p: {
    set_id: number;
    beatmap_id: number;
    beatmap_title: string;
    beatmap_artist: string;
}) {
    const audio_src = `https://catboy.best/preview/audio/${p.beatmap_id}`;
    const cardImg = `https://assets.ppy.sh/beatmaps/${p.set_id}/covers/card.jpg?${p.set_id}`;
    return (<>
        <button class="hidden bg-opacity-50 hover:bg-opacity-75 border-none group-hover:flex aria-pressed:flex aria-pressed:bg-opacity-75  btn btn-sm size-full group/audio"
            data-song={JSON.stringify({
                src: audio_src,
                cover: cardImg,
                title: p.beatmap_title,
                artist: p.beatmap_artist,
                set_id: p.set_id,
                beatmap_id: p.beatmap_id,
            })} onclick="on_card_click(this);">
            <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
            <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
        </button >
    </>);
}

export default AudioPlayButton;
