sliders();
function sliders() {
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
        let h = hours > 0 ? hours + 'h ' : '';
        let m = minutes > 0 ? minutes + 'm ' : '';
        return `${h}${m}${seconds}s`;
    }
}
