const AudioPlayer = () => {
    return (
        <div class="p-2 sticky bottom-2 left-2 z-50 bg-base-300 shadow-lg rounded-lg" id="audio_box">
            <div class="flex flex-row gap-2">
                <div class="flex flex-col gap-2 w-96">
                    <div class="flex flex-row gap-2 justify-between">
                        <img id="audio_image" class="w-12 h-12 rounded-lg object-cover" alt="audio-cover" />
                        <div class="grow w-72 truncate">
                            <a id="audio_title" class="hover:underline underline-offset-2" />
                            <div id="audio_artist" class="text-sm text-gray-400" />
                        </div>
                    </div>
                    <input id="audio_progress" type="range" min="0" max="100" value="0" class="range range-xs range-accent" />
                </div>
                <div class="flex flex-col gap-2 items-center">
                    <button class="btn btn-ghost btn-sm" id="audio_close">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <div>
                        <button class="btn btn-ghost btn-sm" id="audio_loading">
                            <span class="loading loading-spinner loading-sm size-3" />
                        </button>
                        <button class="btn btn-ghost btn-sm" id="audio_play" onclick="document.getElementById('audio_player').play()">
                            <i class="fa-solid fa-play fa-lg" />
                        </button>
                        <button class="btn btn-ghost btn-sm" id="audio_pause" onclick="document.getElementById('audio_player').pause()">
                            <i class="fa-solid fa-pause fa-lg" />
                        </button>
                    </div>
                </div>
            </div>
            <audio id="audio_player" autoplay />
        </div>
    );
}

export default AudioPlayer;
