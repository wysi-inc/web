const audio = document.getElementById('audio');

function playAudio(src) {
    console.log(src);
    audio.src = src;
    audio.play();
}
