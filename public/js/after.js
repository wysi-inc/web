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
    const res = await fetch("https://api.kirino.sh/inspector/extension/clans/users", {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ ids })
    })
    if (!res.ok) return;
    const data = await res.json();
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const a = user_map.get(user.osu_id);
        if (!a) continue;
        a.innerText = `[${user.clan.tag}]`;
        a.classList.remove("hidden");
        a.classList.add("tooltip");
        a.setAttribute("data-tip", user.clan.name);
        a.href = `https://score.kirino.sh/clan/${user.clan.id}`;
        a.style = `color: #${user.clan.color};`;
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

    const res = await fetch(`/api/subdivisions`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ ids })
    });

    if (!res.ok) return;
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        const subdivision = data[i];
        const div = user_map.get(subdivision.user_id);
        if (!div) continue;
        const img = document.createElement("img");
        img.src = subdivision.flag;
        img.alt = `Flag of ${subdivision.name}`;
        img.className = "max-h-5 max-w-7 rounded-sm outline outline-1 outline-base-300";
        img.loading = "lazy";
        div.classList.remove("hidden");
        div.classList.add("flex");
        div.classList.add("tooltip");
        div.setAttribute("data-tip", subdivision.name);
        div.appendChild(img);
    }

}

function getUserStuff() {
    getSubdivisions();
    getClans();
}

getUserStuff();
