htmxAfterFunctions.push(getChokes);
function getChokes() {
    const scores = document.getElementsByClassName("score_card");
    const new_scores = [];
    for (let score of scores) {
        if (score.hasAttribute("calculated")) continue;
        score.setAttribute("calculated", true);
        new_scores.push(score);
    }
    for (let score of new_scores) {
        getChoke(score);
    }
}

async function getChoke(score_card) {
    const score = JSON.parse(score_card.getAttribute("data-score"));
    const fc_acc = score_card.getAttribute("data-fc-acc");
    const beatmap = score.beatmap;
    let stats = {};
    if (score.mods.length > 0 || score.perfect === false) {
        const mods_int = score.mods.reduce((t, m) => t + modsInt[m], 0);
        const url = new URL(`https://catboy.best/api/meta/${beatmap.id}`);
        url.searchParams.set("misses", 0);
        url.searchParams.set("acc", fc_acc);
        url.searchParams.set("mods", mods_int);
        const res = await fetch(url);
        if (!res.ok) return;
        const data = await res.json();
        const new_sr = data.difficulty?.stars;
        if (new_sr !== beatmap.difficulty_rating) {
            stats.sr = new_sr?.toFixed(2);
        }
        stats.ar = data.map.ar?.toFixed(1);
        stats.cs = data.map.cs?.toFixed(1);
        stats.od = data.map.od?.toFixed(1);
        stats.hp = data.map.hp?.toFixed(1);
        stats.pp = Math.round(data?.pp?.[Number(fc_acc)]?.pp);
        if (stats.pp <= Number(score.pp) + 10) {
            stats.pp = null;
        }
        if (score.mods.includes("DT") || score.mods.includes("NC")) {
            stats.len = Math.round(beatmap.total_length / 1.5);
            stats.bpm = beatmap.bpm * 1.5;
        } else if (score.mods.includes("HT")) {
            stats.len = Math.round(beatmap.total_length / 0.75);
            stats.bpm = beatmap.bpm * 0.75;
        }
    }

    if (stats.pp) {
        const stats_pp = score_card.getElementsByClassName("stats_pp")[0];
        stats_pp.classList.add("text-opacity-60");
        stats_pp.classList.add("text-base-content");
        stats_pp.classList.add("tooltip");
        stats_pp.setAttribute("data-tip", `${stats.pp}pp if FC`);
    }

    if (stats.sr) {
        const stats_sr = score_card.getElementsByClassName("stats_sr")[0];
        if (stats.sr > beatmap.difficulty_rating) {
            stats_sr.classList.add("text-error");
        } else if (stats.sr < beatmap.difficulty_rating) {
            stats_sr.classList.add("text-success");
        }
        stats_sr.classList.add("tooltip");
        stats_sr.setAttribute("data-tip", `★ ${beatmap.difficulty_rating}`);
        stats_sr.innerHTML = stats.sr;
    }

    if (stats.bpm) {
        const stats_bpm = score_card.getElementsByClassName("stats_bpm")[0];
        if (stats.bpm > beatmap.bpm) {
            stats_bpm.classList.add("text-error");
        } else if (stats.bpm < beatmap.bpm) {
            stats_bpm.classList.add("text-success");
        }
        stats_bpm.classList.add("tooltip");
        stats_bpm.setAttribute("data-tip", `${Math.round(beatmap.bpm)}bpm`);
        stats_bpm.innerHTML = `${Math.round(stats.bpm)}bpm`;
    }

    if (stats.len) {
        const stats_len = score_card.getElementsByClassName("stats_len")[0];
        if (stats.len > beatmap.total_length) {
            stats_len.classList.add("text-error");
        } else if (stats.len < beatmap.total_length) {
            stats_len.classList.add("text-success");
        }
        stats_len.classList.add("tooltip");
        stats_len.setAttribute("data-tip", secondsToTime(beatmap.total_length));
        stats_len.innerHTML = secondsToTime(stats.len);
    }
}
