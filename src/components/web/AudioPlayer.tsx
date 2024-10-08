const AudioPlayer = () => {
    return (
        <div class="hidden p-2 sticky bottom-2 left-2 z-50 bg-base-300 shadow-lg rounded-lg" id="audio_box">
            <div class="flex flex-row gap-2">
                <div class="flex flex-col gap-2 w-96">
                    <div class="flex flex-row gap-2 justify-between">
                        <div id="audio_image" class="size-12 rounded-lg bg-center bg-no-repeat bg-cover">
                            <div class="size-12 flex grow items-center justify-center rounded-lg bg-base-300 bg-opacity-50">
                                <button class="size-12 btn btn-ghost group/audio" onclick="on_player_click()" id="audio_button">
                                    <span class="loading loading-spinner hidden group-aria-busy/audio:block" />
                                    <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
                                    <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
                                </button>
                            </div>
                        </div>
                        <div class="grow w-72 truncate">
                            <a id="audio_title" class="hover:underline underline-offset-2" />
                            <div id="audio_artist" class="text-sm text-gray-400" />
                        </div>
                    </div>
                    <input id="audio_progress" type="range" min="0" max="100" value="0" class="range range-xs range-accent" />
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <button class="btn btn-ghost btn-sm size-8" onclick="audio_end()">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <button class="btn btn-ghost btn-sm size-8">
                        <i class="fa-solid fa-volume-high" />
                    </button>
                    <div>
                    </div>
                </div>
            </div>
            <audio id="audio_player" preload="none" />
        </div>
    );
}

export default AudioPlayer;
