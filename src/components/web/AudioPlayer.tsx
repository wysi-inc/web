function AudioPlayer() {
    return (<>
        <div class="fixed bottom-2 z-50 hidden rounded-lg bg-base-300 p-2 shadow-lg" id="audio_box">
            <div class="flex flex-row gap-2">
                <div class="flex w-96 flex-col gap-2">
                    <div class="flex flex-row justify-between gap-2">
                        <div id="audio_image" class="size-12 rounded-lg bg-cover bg-center bg-no-repeat">
                            <div class="flex size-12 grow items-center justify-center rounded-lg bg-base-300 bg-opacity-50">
                                <button class="group/audio btn btn-ghost size-12" onclick="on_player_click()" id="audio_button">
                                    <span class="loading loading-spinner hidden group-aria-busy/audio:block" />
                                    <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
                                    <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
                                </button>
                            </div>
                        </div>
                        <div class="w-72 grow truncate">
                            <a id="audio_title" class="underline-offset-2 hover:underline" />
                            <div id="audio_artist" class="text-sm text-gray-400" />
                        </div>
                    </div>
                    <input id="audio_progress" type="range" min="0" max="100" value="0" class="range range-accent range-xs" />
                </div>
                <div class="relative flex flex-col items-center gap-2">
                    <button class="btn btn-ghost btn-sm size-8" onclick="audio_end()">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <label class="group/volume peer btn btn-ghost btn-sm size-8">
                        <i class="fa-solid fa-volume-high flex group-has-[:checked]/volume:hidden" />
                        <i class="fa-solid fa-volume-mute hidden group-has-[:checked]/volume:flex" />
                        <input class="hidden" type="checkbox" onclick="mute_unmute(this)" />
                    </label>
                    <div class="absolute -top-2 hidden -translate-y-8 -rotate-90 items-center justify-center p-2 hover:flex peer-hover-[:checked]:flex">
                        <div class="flex items-center justify-center rounded-lg bg-neutral p-2">
                            <input type="range" class="range range-xs w-20" id="audio_volume" min="0" max="100" value="10" />
                        </div>
                    </div>
                </div>
            </div>
            <audio id="audio_player" preload="none" />
        </div>
    </>);
}

export default AudioPlayer;
