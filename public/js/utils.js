var htmxAfterFunctions = [];
document.body.addEventListener("htmx:afterRequest", () => {
    htmxAfterFunctions.forEach((f) => {
        try {
            f();
        } catch (err) {
            console.error(err);
        }
    });
});

const modsInt = {
    NM: 0,
    NF: 1,
    EZ: 2,
    TD: 4,
    HD: 8,
    HR: 16,
    SD: 32,
    DT: 64,
    RX: 128,
    HT: 256,
    NC: 64,
    FL: 1024,
    Autoplay: 2048,
    SO: 4096,
    AP: 8192,
    PF: 16384,
    "4K": 32768,
    "5K": 65536,
    "6K": 131072,
    "7K": 262144,
    "8K": 524288,
    FI: 1048576,
    RD: 2097152,
    LastMod: 4194304,
    "9K": 16777216,
    "10K": 33554432,
    "1K": 67108864,
    "3K": 134217728,
    "2K": 268435456,
    ScoreV2: 536870912,
    MR: 1073741824,
};

const colors = {
    ui: {
        font: "#f5f5f5",
        bg: "#212529",
        main: "#b74757",
        accent: "#ffb86b",
    },
    mods: {
        nomod: "#bbbbbb",
        reduction: "#9ce64e",
        increase: "#ed5750",
        automation: "#66d3ee",
        conversion: "#8c66ff",
        fun: "#ff66ab",
    },
    modes: {
        any: "#f0f0f0",
        osu: "#e1567d",
        taiko: "#7de17d",
        fruits: "#7db8e1",
        mania: "#9b7de1",
    },
    judgements: {
        x320: "#bbbbbb",
        x300: "#66b0ff",
        x200: "#2266ff",
        x100: "#0cad60",
        x50: "#ffa317",
        x20: "#bbbbbb",
        xMiss: "#f87454",
    },
    grades: {
        xh: "#f9fafb",
        x: "#eab308",
        sh: "#a3a3a3",
        s: "#f97316",
        a: "#84cc16",
        b: "#3b82f6",
        c: "#8b5cf6",
        d: "#ef4444",
        f: "#6b7280",
    },
    beatmap: {
        any: "#f0f0f0",
        graveyard: "#cccccc",
        wip: "#ff9966",
        pending: "#ffd966",
        ranked: "#b3ff66",
        approved: "#b3ff66",
        qualified: "#66ccff",
        loved: "#ff66ab",
    },
    difficulty: ["#4290fe", "#4cb6ff", "#4fffd4", "#cdf458", "#fc9964", "#f64d7a", "#ad4dc2", "#4d4bc4", "#12106a", "#000000", "#000000"],
};

function secondsToTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    let h = hours > 0 ? hours + "h " : "";
    let m = minutes > 0 ? minutes + "m " : "";
    return `${h}${m}${seconds}s`;
}

async function getGrades() {
    const loading = document.getElementById("total_grades_loading");
    try {
        loading.classList.remove("hidden");
        const chart = document.getElementById("total_grades");
        const user = JSON.parse(chart.getAttribute("data-user"));
        const grade_counts = new Map();
        const res = await fetch(`https://api.kirino.sh/inspector/extension/profile`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                user_id: user.user_id,
                mode: user.mode,
                username: user.username,
            }),
        });
        const inspector = await res.json();
        if (inspector.user === null) throw new Error("User not found");

        grade_counts.set("SS+", { count: inspector.user.ssh_count, color: colors.grades.xh });
        grade_counts.set("SS", { count: inspector.user.ss_count, color: colors.grades.x });
        grade_counts.set("S+", { count: inspector.user.sh_count, color: colors.grades.sh });
        grade_counts.set("S", { count: inspector.user.s_count, color: colors.grades.s });
        grade_counts.set("A", { count: inspector.user.a_count, color: colors.grades.a });
        grade_counts.set("B", { count: inspector.user.b_count, color: colors.grades.b });
        grade_counts.set("C", { count: inspector.user.c_count, color: colors.grades.c });
        grade_counts.set("D", { count: inspector.user.d_count, color: colors.grades.d });

        const total = Array.from(grade_counts.values()).reduce((acc, val) => acc + val.count, 0);

        chart.innerHTML = "";

        const grade_div = document.createElement("div");
        grade_div.className = "flex flex-row flex-wrap gap-4 justify-around";
        const line_div = document.createElement("div");
        line_div.className = "flex flex-row h-2 rounded-lg overflow-hidden";

        Array.from(grade_counts.entries()).forEach(([key, val]) => {
            const wrapper = document.createElement("div");
            const label = document.createElement("div");
            label.className = "px-4 text-center rounded-full";
            label.style = `background-color:${val.color};color:#000;`;
            label.innerText = key;
            const count = document.createElement("div");
            count.className = "text-center";
            count.innerText = val.count;
            wrapper.appendChild(label);
            wrapper.appendChild(count);
            grade_div.appendChild(wrapper);

            const line = document.createElement("div");
            line.className = "h-full";
            line.style = `width:${(val.count / total) * 100}%;background-color:${val.color};`;
            line_div.appendChild(line);
        });

        chart.appendChild(grade_div);
        chart.appendChild(line_div);
    } catch (err) {
        console.log(err);
    }
    loading.classList.add("hidden");
}

async function getClans() {
    const clan_tags = document.getElementsByClassName("clan_tag");
    if (!clan_tags) return;
    const ids = [];
    const user_map = new Map();
    for (let i = 0; i < clan_tags.length; i++) {
        const tag = clan_tags[i];
        if (tag.getAttribute("done")) continue;
        tag.setAttribute("done", true);
        const id = Number(tag.getAttribute("data-user-id"));
        user_map.set(id, tag);
        ids.push(id);
    }
    if (ids.length === 0) return;

    const res = await fetch("https://api.kirino.sh/inspector/extension/clans/users", {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ids }),
    });
    if (!res.ok) return;
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const div = user_map.get(user.osu_id);
        if (!div) continue;
        const a = document.createElement("a");
        a.innerText = `[${user.clan.tag}]`;
        div.setAttribute("data-tip", user.clan.name);
        div.classList.remove("hidden");
        div.classList.add("tooltip");
        a.className = "p-1 drop-shadow-solid";
        a.style = `color: #${user.clan.color};`;
        a.href = `https://score.kirino.sh/clan/${user.clan.id}`;
        a.target = "_blank";
        div.appendChild(a);
    }
}

async function getSubdivisions() {
    const subdivision_flags = document.getElementsByClassName("subdivision_flag");
    if (!subdivision_flags) return;
    const ids = [];
    const user_map = new Map();
    for (let i = 0; i < subdivision_flags.length; i++) {
        const flag = subdivision_flags[i];
        if (flag.getAttribute("done")) continue;
        flag.setAttribute("done", true);
        const id = Number(flag.getAttribute("data-user-id"));
        user_map.set(id, flag);
        ids.push(id);
    }
    if (ids.length === 0) return;
    const res = await fetch(`/api/subdivisions`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ids }),
    });

    if (!res.ok) return;
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        const subdivision = data[i];
        const div = user_map.get(subdivision.user_id);
        if (!div) continue;
        const img = document.createElement("img");
        img.src = subdivision.flag || "https://upload.wikimedia.org/wikipedia/commons/4/49/Noflag2.svg";
        img.alt = `Flag of ${subdivision.name}`;
        img.className = "max-h-5 max-w-7 rounded-sm drop-shadow-solid";
        img.loading = "lazy";
        div.classList.remove("hidden");
        div.parentElement.classList.remove("hidden");
        div.classList.add("flex");
        div.classList.add("tooltip");
        div.setAttribute("data-tip", subdivision.name);
        div.appendChild(img);
    }
}

async function getSubdivisionRankings() {
    const subdivision_ranks = document.getElementsByClassName("subdivision_ranking");
    if (!subdivision_ranks) return;
    const ids = [];
    const user_map = new Map();
    for (let i = 0; i < subdivision_ranks.length; i++) {
        const rank = subdivision_ranks[i];
        if (rank.getAttribute("done")) continue;
        rank.setAttribute("done", true);
        const id = Number(rank.getAttribute("data-user-id"));
        user_map.set(id, rank);
        ids.push(id);
    }
    if (ids.length === 0) return;

    for (let i = 0; i < ids.length; i++) {
        const res = await fetch(`https://osuworld.octo.moe/api/users/${ids[i]}?mode=${user_map.get(ids[i]).getAttribute("data-user-mode")}`);
        if (!res.ok) continue;
        const user = await res.json();
        const h2 = user_map.get(user.id);
        if (!h2) continue;
        h2.classList.remove("hidden");
        h2.parentElement.classList.remove("hidden");
        h2.parentElement.classList.add("flex");
        h2.classList.add("flex");
        h2.innerText = `#${user.placement}`;
    }
}

function getUserStuff() {
    getSubdivisions();
    getSubdivisionRankings();
    getClans();
}

document.addEventListener("click", function (event) {
    let target = event.target;
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(function (dropdown) {
        // Check if the clicked target is not inside the dropdown and if the dropdown is visible
        if (!dropdown.contains(target) && dropdown.offsetParent !== null) {
            dropdown.removeAttribute("open");
        }
    });
});

getUserStuff();
htmxAfterFunctions.push(getUserStuff);
