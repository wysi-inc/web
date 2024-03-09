animateSliders();
getNewStats();
document.querySelector('body').addEventListener('change', () => {
    animateSliders();
    getNewStats();
}, false);

const audio = document.getElementById('audio');

function getNewStats() {

    const url = window.location.href;

    // get the beatmap id and set id from the url (ex: https://osu.ppy.sh/beatmaps/123456/654321)
    // set_id is the first number
    // beatmap_id is the second number

    const set_id = url.split('/')[4];
    const beatmap_id = url.split('/')[5];

    const form = document.getElementById('stats_form');

    const stats_ar = document.getElementById('stats_ar');
    const stats_cs = document.getElementById('stats_cs');
    const stats_od = document.getElementById('stats_od');
    const stats_hp = document.getElementById('stats_hp');

    form.addEventListener('change', (e) => {
        e.preventDefault();
        setNewStats(stats_ar, Math.floor(Math.random() * 11));
        setNewStats(stats_cs, Math.floor(Math.random() * 11));
        setNewStats(stats_od, Math.floor(Math.random() * 11));
        setNewStats(stats_hp, Math.floor(Math.random() * 11));
    })

    function setNewStats(html, val) {
        html.children[1].value = val;
        html.children[2].innerHTML = val;
    }
}


function playAudio(src) {
    console.log(src);
    audio.src = src;
    audio.play();
}

function animateSliders() {
    // get the slider elements
    const stars_min = document.getElementById('stars_min');
    const stars_max = document.getElementById('stars_max');
    const bpm_min = document.getElementById('bpm_min');
    const bpm_max = document.getElementById('bpm_max');
    const len_min = document.getElementById('length_min');
    const len_max = document.getElementById('length_max');
    const year_min = document.getElementById('year_min');
    const year_max = document.getElementById('year_max');

    // get the label elements
    const stars_min_label = document.getElementById('stars_min_label');
    const stars_max_label = document.getElementById('stars_max_label');
    const bpm_min_label = document.getElementById('bpm_min_label');
    const bpm_max_label = document.getElementById('bpm_max_label');
    const len_min_label = document.getElementById('length_min_label');
    const len_max_label = document.getElementById('length_max_label');
    const year_min_label = document.getElementById('year_min_label');
    const year_max_label = document.getElementById('year_max_label');

    const sliders = [stars_min, stars_max, bpm_min, bpm_max];
    const labels = [stars_min_label, stars_max_label, bpm_min_label, bpm_max_label];
    const year_sliders = [year_min, year_max];
    const year_labels = [year_min_label, year_max_label];
    const len_sliders = [len_min, len_max];
    const len_labels = [len_min_label, len_max_label];

    // set the initial values of the labels on input change
    // if the values reach the max value set an infinite text to the label

    // check if we didnt get all the sliders
    if (!stars_min || !stars_max || !bpm_min || !bpm_max || !len_min || !len_max || !year_min || !year_max) {
        return;
    }

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].oninput = function() {
            labels[i].innerHTML = this.value;
            if (this.value == this.max) {
                labels[i].innerHTML = '∞';
            }
        }
    }

    for (let i = 0; i < year_sliders.length; i++) {
        year_sliders[i].oninput = function() {
            year_labels[i].innerHTML = this.value;
            if (this.value == this.max) {
                year_labels[i].innerHTML = 'now';
            }
        }
    }

    for (let i = 0; i < len_sliders.length; i++) {
        len_sliders[i].oninput = function() {
            len_labels[i].innerHTML = secondsToTime(this.value);
            if (this.value == this.max) {
                len_labels[i].innerHTML = '∞';
            }
        }
    }

    function secondsToTime(secs) {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = secs % 60;
        return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
    }
}

