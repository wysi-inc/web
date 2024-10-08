const AudioPlayButton = (p: {
    set_id: number,
    beatmap_id: number,
    beatmap_title: string,
    beatmap_artist: string,
    join?: boolean,
}) => (<>
    <button class={`btn group/audio ${p.join ? "join-item btn-info" : "no-animation hidden group-hover/audio_card:flex group-hover/audio_card:bg-opacity-75 aria-expanded:flex border-none aria-expanded:bg-opacity-75 size-full"}`}
        data-song={JSON.stringify({
            src: `https://catboy.best/preview/audio/${p.beatmap_id}`,
            cover: `https://assets.ppy.sh/beatmaps/${p.set_id}/covers/card.jpg?${p.set_id}`,
            title: p.beatmap_title,
            artist: p.beatmap_artist,
            set_id: p.set_id,
            beatmap_id: p.beatmap_id,
        })} onclick="on_card_click(this);">
        <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
        <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
    </button >
</>);


export default AudioPlayButton;
