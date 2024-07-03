function secondsToTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    let h = hours > 0 ? hours + 'h ' : '';
    let m = minutes > 0 ? minutes + 'm ' : '';
    return `${h}${m}${seconds}s`;
}

function getChokes() {
    const ids = document.getElementsByClassName("score_card");
    const new_scores = [];
    for (let i = 0; i < ids.length; i++) {
        if (ids[i].hasAttribute("calculated")) continue;
        ids[i].setAttribute("calculated", true);
        new_scores.push(ids[i]);
    }
    for (let i = 0; i < new_scores.length; i++) {
        getChoke(new_scores[i]);
    }
}

getChokes();
document.getElementById("user_scores_panel").addEventListener('htmx:afterRequest', () => { getChokes() })

async function getChoke(score_card) {
    const score = JSON.parse(score_card.getAttribute("data-score"));
    const fc_acc = score_card.getAttribute("data-fc-acc");
    const beatmap = score.beatmap;
    let stats = {};
    if (score.mods.length > 0 || score.legacy_perfect === false) {
        const url = `https://catboy.best/api/meta/${beatmap.id}?misses=0&acc=${fc_acc}&mods=${score.mods_id}`;
        const res = await fetch(url);
        if (res.ok) {
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
            if (score.mods.find((mod) => mod.acronym === "DT")) {
                stats.len = Math.round(beatmap.total_length / 1.5);
                stats.bpm = beatmap.bpm * 1.5;
            } else if (score.mods.find((mod) => mod.acronym === "HT")) {
                stats.len = Math.round(beatmap.total_length / 0.75);
                stats.bpm = beatmap.bpm * 0.75;
            }
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
