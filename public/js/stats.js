stats();
function stats() {
    const form = document.getElementById('stats_form');

    form.addEventListener('change', async (e) => {
        e.preventDefault();

        // get the id of the map in the url ex: /beatmapsets/123456
        //
        const curr_url = window.location.href;
        const id = curr_url.split('/').pop();

        const formData = new FormData(form);
        const data = {
            x100: formData.get('x100') || 0,
            x50: formData.get('x50') || 0,
            xmiss: formData.get('xMiss') || 0,
        };

        console.log(data);

        const mods_id = 0;
        const acc = 100;
        const url = `https://catboy.best/api/meta/${id}?misses=0&acc=${acc}&mods=${mods_id}`;

        const res = await fetch(url);
        const json = await res.json();
        console.log(json);

        const stats_ar = document.getElementById('stats_ar');
        const stats_cs = document.getElementById('stats_cs');
        const stats_od = document.getElementById('stats_od');
        const stats_hp = document.getElementById('stats_hp');

        setNewStats(stats_ar, Math.floor(Math.random() * 11));
        setNewStats(stats_cs, Math.floor(Math.random() * 11));
        setNewStats(stats_od, Math.floor(Math.random() * 11));
        setNewStats(stats_hp, Math.floor(Math.random() * 11));

        const stats_sr = document.getElementById('stats_sr');
        const stats_len = document.getElementById('stats_len');
        const stats_bpm = document.getElementById('stats_bpm');
        const stats_pp = document.getElementById('stats_pp');

    })

    function setNewStats(html, val) {
        html.children[1].value = val;
        html.children[2].innerHTML = val;
    }
}
