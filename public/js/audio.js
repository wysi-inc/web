const audio_player = document.getElementById('audio_player');
const audio_box = document.getElementById('audio_box');
const audio_progress = document.getElementById('audio_progress');
const audio_image = document.getElementById('audio_image');
const audio_title = document.getElementById('audio_title');
const audio_artist = document.getElementById('audio_artist');
const audio_button = document.getElementById('audio_button');
let current_button = null;
let playing = false;
let song = null;

function on_card_click(btn) {
    if (btn === current_button) {
        play_pause(current_button);
        return;
    }
    current_button?.removeAttribute("aria-pressed");
    current_button = btn;
    song = JSON.parse(btn.getAttribute("data-song"));
    audio_player.src = song.src;
    audio_image.style.backgroundImage = `url('${song.cover}')`;
    audio_title.innerText = song.title;
    audio_title.href = `/beatmaps/${song.set_id}/${song.beatmap_id}`;
    audio_artist.innerText = `by ${song.artist}`;
    audio_start();
}

function on_player_click() {
    play_pause(audio_button);
}

function play_pause(btn) {
    if (btn.getAttribute("aria-pressed")) {
        audio_pause();
    } else {
        audio_play();
    }
}

audio_player.addEventListener('loadstart', audio_start);
audio_player.addEventListener('ended', audio_end);
audio_progress.addEventListener('change', (e) => {
    audio_player.currentTime = (audio_player.duration / 100) * e.target.value;
});
audio_player.addEventListener('timeupdate', () => {
    audio_progress.value = `${(audio_player.currentTime / audio_player.duration) * 100}`;
});

function audio_start() {
    audio_player.volume = 0.1;
    audio_progress.value = 0;
    audio_box.style.display = 'block';
    audio_play();
}

function audio_end() {
    audio_pause();
    audio_box.style.display = 'none';
    current_button = null;
}

function audio_play() {
    current_button?.setAttribute("aria-pressed", true);
    audio_button?.setAttribute("aria-pressed", true);
    audio_player.play();
}

function audio_pause() {
    audio_player.pause();
    current_button?.removeAttribute("aria-pressed", true);
    audio_button?.removeAttribute("aria-pressed", true);
}
