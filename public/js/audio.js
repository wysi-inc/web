const audio = document.getElementById('audio_player');
const audio_box = document.getElementById('audio_box');
const play_button = document.getElementById('audio_play');
const pause_button = document.getElementById('audio_pause');
const audio_progress = document.getElementById('audio_progress');
const audio_loading = document.getElementById('audio_loading');

audio_box.style.display = 'none';
audio.volume = 0.1;

play_button.addEventListener('click', () => audio.play());
pause_button.addEventListener('click', () => audio.pause());

audio.addEventListener('loadstart', () => {
    audio_progress.value = 0;
    audio_loading.style.display = 'block';
    play_button.style.display = 'none';
    pause_button.style.display = 'none';

    audio_box.style.display = 'block';
});

audio.addEventListener('play', () => {
    audio_progress.value = 0;
    audio_loading.style.display = 'none';
    play_button.style.display = 'none';
    pause_button.style.display = 'block';

    audio_box.style.display = 'block';
});

audio.addEventListener('pause', () => {
    audio_loading.style.display = 'none';
    play_button.style.display = 'block';
    pause_button.style.display = 'none';

    audio_box.style.display = 'block';
});

audio.addEventListener('ended', () => {
    audio_box.style.display = 'none';

    play_button.style.display = 'none';
    pause_button.style.display = 'none';
    audio_loading.style.display = 'none';
});

audio_progress.addEventListener('change', (e) => {
    audio.currentTime = (audio.duration / 100) * e.target.value;
});

audio.addEventListener('timeupdate', () => {
    audio_progress.value = `${(audio.currentTime / audio.duration) * 100}`;
});
