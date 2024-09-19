import "https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js";

const colors = {
    difficulty: [
        '#4290fe',
        '#4cb6ff',
        '#4fffd4',
        '#cdf458',
        '#fc9964',
        '#f64d7a',
        '#ad4dc2',
        '#4d4bc4',
        '#12106a',
        '#000000',
        '#000000'
    ]
};

export function getDiffColor(diff) {
    let startColor;
    let endColor;
    let ratio;
    if (diff < 10) {
        startColor = colors.difficulty[Math.floor(diff)];
        endColor = colors.difficulty[Math.ceil(diff)];
        ratio = diff - Math.floor(diff);
    } else {
        startColor = colors.difficulty[10]
        endColor = colors.difficulty[10]
        ratio = 1;
    }
    const startR = parseInt(startColor.slice(1, 3), 16);
    const startG = parseInt(startColor.slice(3, 5), 16);
    const startB = parseInt(startColor.slice(5, 7), 16);
    const endR = parseInt(endColor.slice(1, 3), 16);
    const endG = parseInt(endColor.slice(3, 5), 16);
    const endB = parseInt(endColor.slice(5, 7), 16);
    const r = Math.round(startR + (endR - startR) * ratio).toString(16).padStart(2, "0");
    const g = Math.round(startG + (endG - startG) * ratio).toString(16).padStart(2, "0");
    const b = Math.round(startB + (endB - startB) * ratio).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
}

function ModeIcon(props) {
    switch (props.mode) {
        case 'taiko':
            return (`
                <svg xmlns="http://www.w3.org/2000/svg" class="${props.css}" width="${props.size}" height="${props.size}" viewBox="0 0 500 500" version="1.1">
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" />
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" d="M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.624 C 194.025 72.696, 166.205 83.694, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 179.888 424.568, 223.031 436.003, 262.198 433.022 C 315.188 428.989, 364.571 402.551, 395.247 361.793 C 427.793 318.549, 440.117 262.390, 428.463 210.428 C 419.918 172.330, 398.315 135.598, 370.495 111.867 C 346.659 91.534, 315.342 76.249, 284.500 69.896 C 276.673 68.283, 269.828 67.765, 253 67.509 C 241.175 67.330, 230.150 67.382, 228.500 67.624 M 228.870 108.468 C 181.632 116.214, 142.959 144.291, 122.083 185.996 C 111.254 207.630, 107 225.668, 107 249.955 C 107 273.405, 111.340 292.590, 121.235 312.880 C 130.645 332.175, 146.724 351.655, 163.844 364.504 C 172.964 371.349, 189.244 380.231, 200.500 384.504 C 219.242 391.618, 248.355 394.882, 268.100 392.083 C 315.048 385.429, 354.739 357.477, 376.552 315.710 C 382.808 303.730, 388.314 287.749, 390.706 274.628 C 392.983 262.141, 392.961 237.531, 390.662 225.500 C 386.894 205.775, 378.633 185.637, 367.500 169.034 C 360.889 159.175, 345.636 143.361, 335.139 135.483 C 319.752 123.935, 298.200 114.195, 278.500 109.886 C 266.426 107.245, 240.792 106.513, 228.870 108.468 M 221 151.132 C 211.852 153.585, 199.313 159.355, 191.286 164.806 C 172.060 177.862, 156.700 199.419, 150.447 222.122 C 147.244 233.753, 146.118 253.470, 147.935 266.105 C 152.766 299.690, 175.760 330.208, 206.690 344.085 C 213.089 346.956, 225.978 351, 228.730 351 C 229.748 351, 230 330.986, 230 250 C 230 194.450, 229.662 149.027, 229.250 149.061 C 228.838 149.094, 225.125 150.026, 221 151.132 M 270 250 C 270 305.550, 270.309 351, 270.686 351 C 273.133 351, 287.694 346.242, 293.727 343.471 C 308.712 336.588, 326.159 321.641, 335.130 308 C 351.758 282.717, 356.647 252.464, 348.937 222.567 C 341.961 195.514, 321.867 170.921, 296.282 158.121 C 289.953 154.955, 273.048 149, 270.388 149 C 270.175 149, 270 194.450, 270 250" />
                </svg>
            `);
        case 'fruits':
            return (`
                <svg xmlns="http://www.w3.org/2000/svg" class="${props.css}" width="${props.size}" height="${props.size}" viewBox="0 0 500 500" version="1.1">
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" />
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" d="M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.629 C 194.234 72.619, 166.194 83.702, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 158.029 409.892, 178.719 419.938, 192.030 424.352 C 258.615 446.428, 334.597 427.318, 383.014 376.318 C 404.945 353.217, 422.179 319.994, 429.075 287.524 C 439.831 236.878, 427.133 180.565, 395.475 138.512 C 369.628 104.178, 328.670 78.890, 284.379 69.918 C 275.609 68.142, 269.429 67.664, 252.500 67.453 C 240.950 67.310, 230.150 67.388, 228.500 67.629 M 154.994 184.878 C 146.700 187.586, 136.296 196.508, 132.349 204.298 C 127.821 213.234, 127.708 227.587, 132.099 236.194 C 135.303 242.475, 143.593 250.652, 149.891 253.745 C 154.877 256.194, 156.610 256.500, 165.500 256.499 C 174.546 256.499, 176.014 256.228, 180.881 253.666 C 188.118 249.857, 195.543 242.218, 198.796 235.236 C 201.070 230.356, 201.469 228.157, 201.469 220.500 C 201.469 212.830, 201.071 210.647, 198.781 205.732 C 195.504 198.698, 187.270 190.255, 180.500 186.988 C 176.553 185.083, 173.605 184.520, 166.500 184.317 C 161.550 184.176, 156.372 184.428, 154.994 184.878 M 324 184.879 C 310.863 189.184, 300.124 201.449, 297.985 214.594 C 296.875 221.414, 298.315 230.717, 301.433 236.862 C 304.904 243.705, 314.322 252.228, 321.291 254.836 C 341.518 262.404, 364.194 250.281, 369.590 229.015 C 373.768 212.551, 365.711 195.538, 349.881 187.400 C 345.384 185.088, 343.021 184.587, 335.500 184.347 C 330.550 184.189, 325.375 184.429, 324 184.879 M 240.271 303.540 C 233.505 305.362, 228.648 308.498, 222.679 314.897 C 215.429 322.670, 213.571 327.567, 213.532 339 C 213.504 347.455, 213.813 349.138, 216.348 354.301 C 219.983 361.702, 227.298 369.017, 234.699 372.652 C 239.774 375.144, 241.629 375.500, 249.521 375.500 C 257.695 375.500, 259.168 375.192, 265.206 372.219 C 272.693 368.533, 279.374 361.842, 283.118 354.280 C 285.150 350.174, 285.485 348.019, 285.492 339 C 285.499 329.876, 285.189 327.910, 283.129 324 C 277.426 313.173, 268.510 305.799, 258.184 303.369 C 251.103 301.703, 246.946 301.742, 240.271 303.540" />
                </svg>
            `);
        case 'mania':
            return (`
                <svg xmlns="http://www.w3.org/2000/svg" class="${props.css}" width="${props.size}" height="${props.size}" viewBox="0 0 500 500" version="1.1">
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" />
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" d="M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.629 C 194.234 72.619, 166.194 83.702, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 158.029 409.892, 178.719 419.938, 192.030 424.352 C 258.615 446.428, 334.597 427.318, 383.014 376.318 C 404.945 353.217, 422.179 319.994, 429.075 287.524 C 439.831 236.878, 427.133 180.565, 395.475 138.512 C 369.628 104.178, 328.670 78.890, 284.379 69.918 C 275.609 68.142, 269.429 67.664, 252.500 67.453 C 240.950 67.310, 230.150 67.388, 228.500 67.629 M 240.399 108.906 C 238.143 109.931, 234.606 112.461, 232.537 114.529 C 224.948 122.118, 225.531 111.556, 225.230 246.997 C 225.042 332.117, 225.289 370.074, 226.056 373.768 C 229.122 388.537, 246.391 397.346, 259.673 390.916 C 265.258 388.213, 271.425 381.149, 272.904 375.760 C 273.775 372.588, 274.001 339.960, 273.787 248 L 273.500 124.500 271.342 120.500 C 265.213 109.142, 251.332 103.941, 240.399 108.906 M 160 176.590 C 155.517 178.527, 149.370 184.455, 146.915 189.210 C 145.094 192.738, 145 195.721, 145 250.075 L 145 307.229 147.661 312.119 C 152.180 320.422, 159.761 325, 168.990 325 C 176.171 325, 180.788 322.944, 186.201 317.335 C 193.224 310.058, 193.001 312.249, 192.994 250.782 C 192.991 216.783, 192.601 194.105, 191.983 191.877 C 190.645 187.062, 183.563 179.161, 178.539 176.878 C 173.612 174.640, 164.830 174.504, 160 176.590 M 322.500 176.061 C 318.163 177.334, 312.417 182.435, 309.249 187.824 L 306.500 192.500 306.500 250 C 306.500 307.151, 306.513 307.525, 308.678 311.568 C 311.479 316.802, 317.718 322.422, 322.468 323.990 C 324.539 324.673, 329.036 325.040, 332.578 324.814 C 337.641 324.492, 339.835 323.792, 343.201 321.426 C 348.411 317.764, 352.830 311.650, 354.042 306.426 C 354.543 304.267, 354.963 278.844, 354.976 249.932 C 354.996 206.510, 354.744 196.505, 353.529 192.432 C 349.687 179.554, 335.714 172.182, 322.500 176.061" />
                </svg>
            `);
        case 'osu':
        default:
            return (`
                <svg xmlns="http://www.w3.org/2000/svg" class="${props.css}" width="${props.size}" height="${props.size}" viewBox="0 0 500 500" version="1.1">
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" />
                    <path stroke="none" fill="${props.color}" fill-rule="evenodd" d="M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.624 C 194.025 72.696, 166.205 83.694, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 179.888 424.568, 223.031 436.003, 262.198 433.022 C 315.188 428.989, 364.571 402.551, 395.247 361.793 C 427.793 318.549, 440.117 262.390, 428.463 210.428 C 419.918 172.330, 398.315 135.598, 370.495 111.867 C 346.659 91.534, 315.342 76.249, 284.500 69.896 C 276.673 68.283, 269.828 67.765, 253 67.509 C 241.175 67.330, 230.150 67.382, 228.500 67.624 M 231.430 107.979 C 183.927 114.711, 143.233 143.745, 122.083 185.996 C 111.247 207.644, 107 225.664, 107 250 C 107 274.672, 111.335 292.758, 122.539 314.831 C 130.426 330.368, 138.890 341.790, 151.328 353.681 C 170.265 371.785, 193.839 384.292, 220.114 390.175 C 233.938 393.270, 263.651 393.536, 277 390.684 C 335.768 378.130, 380.083 332.899, 390.706 274.628 C 392.983 262.141, 392.961 237.531, 390.662 225.500 C 386.894 205.775, 378.633 185.637, 367.500 169.034 C 360.889 159.175, 345.636 143.361, 335.139 135.483 C 319.444 123.704, 296.988 113.741, 276.500 109.467 C 267.296 107.548, 240.679 106.669, 231.430 107.979" />
                </svg>
            `);
    }
}

const modsInt = {
    "NM": 0,
    "NF": 1,
    "EZ": 2,
    "TD": 4,
    "HD": 8,
    "HR": 16,
    "SD": 32,
    "DT": 64,
    "RX": 128,
    "HT": 256,
    "NC": 512,
    "FL": 1024,
    "Autoplay": 2048,
    "SO": 4096,
    "AP": 8192,
    "PF": 16384,
    "4K": 32768,
    "5K": 65536,
    "6K": 131072,
    "7K": 262144,
    "8K": 524288,
    "FI": 1048576,
    "RD": 2097152,
    "LastMod": 4194304,
    "9K": 16777216,
    "10K": 33554432,
    "1K": 67108864,
    "3K": 134217728,
    "2K": 268435456,
    "ScoreV2": 536870912,
    "MR": 1073741824
}

Stats();
function Stats() {
    const form = document.getElementById('stats_form');
    getStats(form);
    form.addEventListener('change', (e) => {
        e.preventDefault();
        const name = e.target.name;
        if (name !== 'x100' && name !== 'x50' && name !== 'xMiss') return;
        const acc = getAcc(form).acc;
        const acc_label = document.getElementById('acc_label');
        acc_label.innerHTML = acc + '%';
    });

    form.addEventListener('reset', () => {
        const acc_label = document.getElementById('acc_label');
        acc_label.innerHTML = '100%';
        getStats(form);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getStats(form);
    })

}

function getAcc(form) {
    const formData = new FormData(form);
    const total_hits = parseInt(form.getAttribute('data-total-hits'));
    const max_possible_score = total_hits * 300;
    const hits = {
        x100: parseInt(formData.get('x100')) || 0,
        x50: parseInt(formData.get('x50')) || 0,
        xmiss: parseInt(formData.get('xMiss')) || 0,
    };

    let score = hits.x100 * 100 + hits.x50 * 50;
    score += (total_hits - (hits.x100 + hits.x50 + hits.xmiss)) * 300;
    let acc = score / max_possible_score * 100;
    acc = acc.toFixed(2).replace(/\.?0+$/, '');
    return { acc, misses: hits.xmiss };
}

function setNewStats(html, val) {
    html.children[1].value = val;
    html.children[2].innerHTML = val;
}

function getModsInt(ms) {
    const mods = ms?.map(m => m === 'NC' ? 64 : modsInt[m]);
    return mods !== undefined ? mods.length > 0 ? mods.reduce((a, b) => a + b) : mods[0] : '0';
}


async function getStats(form) {
    const id = form.getAttribute('data-beatmap-id');

    const url = new URL(`https://catboy.best/api/meta/${id}`);

    const acc = getAcc(form);

    const formData = new FormData(form);

    const mods = Array.from(formData.entries()).filter(([name, _]) => name.startsWith('mod'));

    const mod_names = mods.map(([name, value]) => value === 'on' ? name.split("-")[1] : null).filter(v => v !== null);

    const mods_int = getModsInt(mod_names);

    url.searchParams.append('misses', acc.misses);
    url.searchParams.append('acc', acc.acc);
    if (mods_int) url.searchParams.append('mods', mods_int);


    const res = await fetch(url);
    const data = await res.json();

    const stats_ar = document.getElementById("stats_ar");
    const stats_cs = document.getElementById("stats_cs");
    const stats_od = document.getElementById("stats_od");
    const stats_hp = document.getElementById("stats_hp");

    setNewStats(stats_ar, data.map.ar.toFixed(1));
    setNewStats(stats_cs, data.map.cs.toFixed(1));
    setNewStats(stats_od, data.map.od.toFixed(1));
    setNewStats(stats_hp, data.map.hp.toFixed(1));

    const stats_bpm = document.getElementById("stats_bpm");
    const stats_sr = document.getElementById("stats_sr");
    const stats_len = document.getElementById("stats_len");
    const stats_pp = document.getElementById("stats_pp");

    let new_bpm = Number(stats_bpm.getAttribute("data-original-value"));
    let new_len = parseInt(stats_len.getAttribute("data-original-value"));
    if (mod_names.includes("DT") || mod_names.includes("NC")) {
        new_bpm *= 1.5;
        new_len *= 0.75;
    }
    if (mod_names.includes("HT")) {
        new_bpm *= 0.75;
        new_len *= 1.5;
    }
    stats_bpm.innerHTML = Math.round(new_bpm);
    if (new_bpm > Number(stats_bpm.getAttribute("data-original-value"))) {
        stats_bpm.classList.add("text-error");
    } else if (new_bpm < Number(stats_bpm.getAttribute("data-original-value"))) {
        stats_bpm.classList.add("text-success");
    } else {
        stats_bpm.classList.remove("text-success");
        stats_bpm.classList.remove("text-error");
    }

    stats_sr.innerHTML = data.difficulty.stars.toFixed(2);
    if (Number(data.difficulty.stars.toFixed(2)) > Number(stats_sr.getAttribute("data-original-value"))) {
        stats_sr.classList.add("text-error");
    } else if (Number(data.difficulty.stars.toFixed(2)) < Number(stats_sr.getAttribute("data-original-value"))) {
        stats_sr.classList.add("text-success");
    } else {
        stats_sr.classList.remove("text-success");
        stats_sr.classList.remove("text-error");
    }
    stats_pp.innerHTML = Math.round(data.pp[acc.acc].pp) + "pp";

    if (new_len < Number(stats_len.getAttribute("data-original-value"))) {
        stats_len.classList.add("text-success");
    } else if (new_len > Number(stats_len.getAttribute("data-original-value"))) {
        stats_len.classList.add("text-error");
    } else {
        stats_len.classList.remove("text-success");
        stats_len.classList.remove("text-error");
    }

    stats_len.innerHTML = secondsToTime(new_len);
}

getRatings();
function getRatings() {
    const ctx = document.getElementById("chart-ratings");
    const vals = JSON.parse(ctx.attributes['data-vals'].value);

    const data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            data: vals,
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
            ],
        }]
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
        }
    }

    const config = {
        type: 'bar',
        data,
        options
    };

    new Chart(ctx, config);
}

const beatmapsets_form = document.getElementById("beatmapsets_form");
const beatmaps_data = JSON.parse(beatmapsets_form.getAttribute("data-beatmaps"));
const beatmaps = new Map();
beatmaps_data.forEach(b => beatmaps.set(b[0], b[1]));
beatmapsets_form.addEventListener("change", () => changeDiff());

function changeDiff() {
    const data = new FormData(beatmapsets_form);
    const id = Number(data.get("selected_beatmap"));
    const beatmap = beatmaps.get(id);
    if (!beatmap) return;
    setBeatmap(beatmap);
}

async function setBeatmap(beatmap) {
    const diff_version = document.getElementById("diff_version")
    diff_version.innerText = beatmap.version;

    const diff_icon = document.getElementById("diff_icon")
    diff_icon.innerHTML = ModeIcon({
        size: 24,
        mode: beatmap.mode,
        color: getDiffColor(beatmap.difficulty_rating),
    });

    const stats_sr = document.getElementById("stats_sr");
    stats_sr.innerText = beatmap.difficulty_rating;
    stats_sr.setAttribute("data-original-value", beatmap.difficulty_rating);

    const stats_len = document.getElementById("stats_len");
    stats_len.innerText = secondsToTime(beatmap.total_length);
    stats_len.setAttribute("data-original-value", beatmap.total_length);

    const stats_bpm = document.getElementById("stats_bpm");
    stats_bpm.innerText = beatmap.bpm;
    stats_bpm.setAttribute("data-original-value", beatmap.bpm);

    const stats_pp = document.getElementById("stats_pp");
    stats_pp.innerHTML = "";

    const pp_loading = document.createElement("span");
    pp_loading.className = "loading loading-spinner loading-xs";

    stats_pp.appendChild(pp_loading);
    stats_pp.append("pp");

    const stats_ar = document.getElementById("stats_ar");
    const ar_progress = stats_ar.getElementsByTagName("progress")[0];
    ar_progress.value = beatmap.ar;
    const ar_label = stats_ar.getElementsByTagName("td")[2];
    ar_label.innerText = beatmap.ar;

    const stats_cs = document.getElementById("stats_cs");
    const cs_progress = stats_cs.getElementsByTagName("progress")[0];
    cs_progress.value = beatmap.cs;
    const cs_label = stats_ar.getElementsByTagName("td")[2];
    cs_label.innerText = beatmap.ar;

    const stats_od = document.getElementById("stats_od");
    const od_progress = stats_od.getElementsByTagName("progress")[0];
    od_progress.value = beatmap.accuracy;
    const od_label = stats_ar.getElementsByTagName("td")[2];
    od_label.innerText = beatmap.ar;

    const stats_hp = document.getElementById("stats_hp");
    const hp_progress = stats_hp.getElementsByTagName("progress")[0];
    hp_progress.value = beatmap.drain;
    const hp_label = stats_ar.getElementsByTagName("td")[2];
    hp_label.innerText = beatmap.ar;

    const stats_form = document.getElementById("stats_form");
    stats_form.setAttribute('data-beatmap-id', beatmap.id);
    stats_form.reset();

    history.replaceState({}, null, `/beatmapsets/${beatmap.beatmapset_id}/${beatmap.id}`);
    const leaderboards = document.getElementById("load_leaderboards");
    if (!leaderboards) return;
    const res = await fetch(`/beatmapsets/${beatmap.beatmapset_id}/${beatmap.id}/scores/${beatmap.mode}`, { method: "POST" });
    if (!res.ok) {
        leaderboards.innerHTML = "";
        return;
    }
    const data = await res.text();
    leaderboards.innerHTML = data;
}
