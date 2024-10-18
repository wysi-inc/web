const audio_player = document.getElementById("audio_player");
const audio_box = document.getElementById("audio_box");
const audio_progress = document.getElementById("audio_progress");
const audio_image = document.getElementById("audio_image");
const audio_title = document.getElementById("audio_title");
const audio_artist = document.getElementById("audio_artist");
const audio_volume = document.getElementById("audio_volume");
let current_button = null;
let playing = false;
let song = null;

function on_card_click(btn) {
    if (btn === current_button) {
        play_pause(current_button);
        return;
    }
    btn_remove("active");
    btn_remove("playing");
    btn_remove("paused");
    btn_remove("loading");
    current_button = btn;
    btn_set("active");
    song = JSON.parse(btn.getAttribute("data-song"));
    console.log(song);
    audio_player.src = song.src;
    audio_image.style.backgroundImage = `url("${song.cover}")`;
    audio_title.innerText = song.title;
    audio_title.setAttribute("hx-get", `/beatmapsets/${song.set_id}/${song.map_id}`);
    audio_artist.innerText = `by ${song.artist}`;
    htmx.process("#audio_title");
    audio_player.play();
}

function play_pause() {
    if (current_button.getAttribute("data-playing")) {
        audio_pause();
    } else {
        audio_player.play();
    }
}

function mute_unmute(input) {
    audio_player.muted = input.checked;
}

audio_volume.addEventListener("input", (e) => {
    audio_player.volume = e.target.value / 100;
})

audio_player.addEventListener("loadstart", () => {
    btn_remove("playing");
    btn_remove("paused");
    audio_player.volume = audio_volume.value / 100;
    audio_progress.value = 0;
    btn_set("loading");
});

audio_player.addEventListener("ended", audio_end);

audio_player.addEventListener("playing", () => {
    btn_remove("loading");
    btn_remove("paused");
    btn_set("playing");
})

audio_player.addEventListener("pause", () => {
    btn_remove("loading");
    btn_remove("playing");
    btn_set("paused");
});

audio_progress.addEventListener("change", (e) => {
    audio_player.currentTime = (audio_player.duration / 100) * e.target.value;
});

audio_player.addEventListener("timeupdate", () => {
    audio_progress.value = `${(audio_player.currentTime / audio_player.duration) * 100}`;
});

function audio_end() {
    audio_pause();
    current_button = null;
    btn_remove("active");
}

function audio_pause() {
    audio_player.pause();
}

function btn_set(status) {
    current_button?.setAttribute(`data-${status}`, true);
    audio_box?.setAttribute(`data-${status}`, true);
}

function btn_remove(status) {
    current_button?.removeAttribute(`data-${status}`);
    audio_box?.removeAttribute(`data-${status}`);
}
