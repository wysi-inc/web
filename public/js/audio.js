const audio = document.getElementById('audio_player');
const audio_box = document.getElementById('audio_box');
const play_button = document.getElementById('audio_play');
const pause_button = document.getElementById('audio_pause');
const audio_progress = document.getElementById('audio_progress');

audio_box.style.display = 'none';
audio.volume = 0.1;

play_button.addEventListener('click', () => {
    audio.play();
});

pause_button.addEventListener('click', () => {
    audio.pause();
});

audio.addEventListener('play', () => {
    audio_box.style.display = 'block';
    play_button.style.display = 'none';
    pause_button.style.display = 'block';
    audio_progress.value = 0;
});

audio.addEventListener('pause', () => {
    play_button.style.display = 'block';
    pause_button.style.display = 'none';
});

audio.addEventListener('ended', () => {
    audio_box.style.display = 'none';
    play_button.style.display = 'block';
    pause_button.style.display = 'none';
});

audio_progress.addEventListener('change', (e) => {
    audio.currentTime = (audio.duration / 100) * e.target.value;
});

audio.addEventListener('timeupdate', () => {
    audio_progress.value = `${(audio.currentTime / audio.duration) * 100}`;
});
