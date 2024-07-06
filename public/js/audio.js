const audio_player = document.getElementById('audio_player');
const audio_box = document.getElementById('audio_box');
const audio_progress = document.getElementById('audio_progress');
const audio_loading = document.getElementById('audio_loading');
const play_button = document.getElementById('audio_play');
const pause_button = document.getElementById('audio_pause');
const close_button = document.getElementById('audio_close');
const audio_image = document.getElementById('audio_image');
const audio_title = document.getElementById('audio_title');
const audio_artist = document.getElementById('audio_artist');

function playAudio(btn) {
    const song = JSON.parse(btn.getAttribute("data-song"));
    audio_player.src = song.src;
    audio_image.style.backgroundImage = `url('${song.cover}')`;
    audio_title.innerText = song.title;
    audio_title.href = `/beatmaps/${song.set_id}/${song.beatmap_id}`;
    audio_artist.innerText = `by ${song.artist}`;
    audio_player.volume = 0.1;
    audio_player.play();
}

function Audio() {
    close_button.addEventListener('click', () => {
        audio_player.pause();
        audio_box.style.display = 'none';
    });
    audio_player.addEventListener('loadstart', () => {
        audio_progress.value = 0;
        audio_loading.style.display = 'block';
        play_button.style.display = 'none';
        pause_button.style.display = 'none';
        audio_box.style.display = 'block';
    });
    audio_player.addEventListener('pause', () => {
        play_button.style.display = 'block';
        pause_button.style.display = 'none';
    });
    audio_player.addEventListener('ended', () => {
        audio_box.style.display = 'none';
    });
    audio_progress.addEventListener('change', (e) => {
        audio_player.currentTime = (audio_player.duration / 100) * e.target.value;
    });
    audio_player.addEventListener('timeupdate', () => {
        play_button.style.display = 'none';
        pause_button.style.display = 'block';
        audio_loading.style.display = 'none';
        audio_progress.value = `${(audio_player.currentTime / audio_player.duration) * 100}`;
    });
}

Audio();
