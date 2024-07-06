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
    url.searchParams.append('mods', mods_int);

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
    if (mod_names.includes("DT") || mod_names.includes("NC")) {
        new_bpm *= 1.5;
    }
    if (mod_names.includes("EZ")) {
        new_bpm *= 0.75;
    }
    stats_bpm.innerHTML = Math.round(new_bpm);
    stats_sr.innerHTML = data.difficulty.stars.toFixed(2);
    stats_pp.innerHTML = Math.round(data.pp[acc.acc].pp) + "pp";

    const length = parseInt(stats_len.getAttribute("data-original-value"));
    const new_len = length / data.map.clockRate;

    stats_len.innerHTML = secondsToTime(new_len);
}
