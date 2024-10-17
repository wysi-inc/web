function getBeatmapStats() {
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

getBeatmapStats();
getRatings();
