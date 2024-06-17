import { downloadZip } from "https://unpkg.com/client-zip@2.4.5/index.js"

const delay = ms => new Promise(res => setTimeout(res, ms));

async function downloadCollection(id) {

    console.log("starting download");
    const button = document.getElementById(id);
    const regular = button.getElementsByClassName("regular")[0];
    const loading = button.getElementsByClassName("loading")[0];

    button.disabled = true;
    regular.style.display = "none";
    loading.style.display = "flex";

    const name = button.getAttribute("data-name");
    const hashes = JSON.parse(button.getAttribute("data-ids"));

    const files = [];

    for (let i = 0; i < hashes.length; i++) {
        const res = await fetch(`https://catboy.best/api/v2/md5/${hashes[i]}`);
        const beatmap = await res.json();
        const data = await fetch(`https://catboy.best/d/${beatmap.set.id}`);
        if (Number(data.headers.get("x-ratelimit-remaining")) <= 0) {
            await delay(61000);
            const data = await fetch(`https://catboy.best/d/${beatmap.set.id}`);
        }
        const input = {
            name: `${beatmap.set.id}.osz`,
            lastModified: new Date(),
            input: data.body
        };
        files.push(input);
    }

    const content = await downloadZip(files).blob();
    var blobUrl = URL.createObjectURL(content);

    button.disabled = false;
    regular.style.display = "flex";
    loading.style.display = "none";

    let link = document.createElement("a");
    link.href = blobUrl;
    link.download = `collection-${name}.zip`;
    link.click();
    link.remove();
}

window.downloadCollection = downloadCollection;
