const AudioPlayButton = (p: {
    set_id: number,
    map_id: number,
    set_title: string,
    set_artist: string,
    join?: boolean,
}) => (<>
    <button class={`group/audio ${p.join ? "join-item btn-info" : "no-animation size-full"} btn hidden border-none group-hover/audio_card:flex group-hover/audio_card:bg-opacity-75 aria-expanded:flex aria-expanded:bg-opacity-75`}
        data-song={JSON.stringify({
            src: `https://catboy.best/preview/audio/${p.map_id}`,
            cover: `https://assets.ppy.sh/beatmaps/${p.set_id}/covers/card.jpg?${p.set_id}`,
            title: p.set_title,
            artist: p.set_artist,
            set_id: p.set_id,
            map_id: p.map_id,
        })} onclick="on_card_click(this);">
        <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
        <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
    </button >
</>);


export default AudioPlayButton;
