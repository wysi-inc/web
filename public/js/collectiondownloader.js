import { downloadZip } from "https://unpkg.com/client-zip@2.4.5/index.js"

const delay = ms => new Promise(res => setTimeout(res, ms));

let requests_left = 1;
async function downloadCollection(id) {

    const button = document.getElementById(id);
    const label = button.getElementsByTagName("label")[0];
    const progress = button.getElementsByTagName("progress")[0];
    const indicator = button.getElementsByClassName("progress-indicator")[0];
    const regular = button.getElementsByClassName("regular")[0];
    const loading = button.getElementsByClassName("loading")[0];

    try {
        console.log("starting download");

        const name = button.getAttribute("data-name");
        const hashes = JSON.parse(button.getAttribute("data-ids"));
        let count = 0;

        button.disabled = true;
        indicator.innerHTML = `${count}/${hashes.length}`;
        progress.value = count;
        label.innerText = "Downloading...";
        regular.style.display = "none";
        loading.style.display = "flex";
        progress.style.display = "flex";

        const files = [];
        for (let i = 0; i < hashes.length; i++) {
            const res = await fetch(`https://catboy.best/api/v2/md5/${hashes[i]}`);
            const beatmap = await res.json();
            if (requests_left <= 0) {
                for (let s = 60; s >= 0; s--) {
                    label.innerText = `Rate Limit Hit, waiting ${s}s...`;
                    await delay(1000);
                }
            }
            label.innerText = "Downloading...";
            try {
                let data = await fetch(`https://catboy.best/d/${beatmap.set.id}`);
                requests_left = Number(data.headers.get("x-ratelimit-remaining"));
                const input = {
                    name: `${beatmap.set.id}.osz`,
                    lastModified: new Date(),
                    input: data.body
                };
                files.push(input);
            } catch (err) {
                console.error(err);
            }
            count++;
            indicator.innerHTML = `${count}/${hashes.length}`;
            progress.value = count;
        }

        label.innerText = "Compressing...";

        const content = await downloadZip(files).blob();
        var blobUrl = URL.createObjectURL(content);

        let link = document.createElement("a");
        link.href = blobUrl;
        link.download = `collection-${name}.zip`;
        link.click();
        link.remove();
        label.innerText = "Download";
    } catch (err) {
        console.error(err);
        label.innerText = "Error (try again later)";
    }

    indicator.innerHTML = `0/0`;
    button.disabled = false;
    label.style.display = "flex";
    regular.style.display = "flex";
    loading.style.display = "none";
    progress.value = 0;
    progress.style.display = "none";

}

window.downloadCollection = downloadCollection;
