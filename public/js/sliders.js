// get the slider elements
let stars_min = document.getElementById('stars_min');
let stars_max = document.getElementById('stars_max');
let bpm_min = document.getElementById('bpm_min');
let bpm_max = document.getElementById('bpm_max');
let len_min = document.getElementById('length_min');
let len_max = document.getElementById('length_max');
let year_min = document.getElementById('year_min');
let year_max = document.getElementById('year_max');

// get the label elements
let stars_min_label = document.getElementById('stars_min_label');
let stars_max_label = document.getElementById('stars_max_label');
let bpm_min_label = document.getElementById('bpm_min_label');
let bpm_max_label = document.getElementById('bpm_max_label');
let len_min_label = document.getElementById('length_min_label');
let len_max_label = document.getElementById('length_max_label');
let year_min_label = document.getElementById('year_min_label');
let year_max_label = document.getElementById('year_max_label');

let sliders = [stars_min, stars_max, bpm_min, bpm_max];
let labels = [stars_min_label, stars_max_label, bpm_min_label, bpm_max_label];
let year_sliders = [year_min, year_max];
let year_labels = [year_min_label, year_max_label];
let len_sliders = [len_min, len_max];
let len_labels = [len_min_label, len_max_label];

// set the initial values of the labels on input change
// if the values reach the max value set an infinite text to the label
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
