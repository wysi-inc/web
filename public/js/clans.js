async function getClans() {
    const clan_tags = document.getElementsByClassName("clan_tag");
    if (!clan_tags) return;
    const ids = [];
    const user_map = new Map();
    for (let i = 0; i < clan_tags.length; i++) {
        const tag = clan_tags[i];
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

getClans();
