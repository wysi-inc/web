import { downloadZip } from "https://unpkg.com/client-zip@2.4.5/index.js"

const delay = ms => new Promise(res => setTimeout(res, ms));

getDownloadButtons();
function getDownloadButtons() {
    const buttons = document.getElementsByClassName("collection-download-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            e.preventDefault();
            downloadCollection(buttons[i].id)
        });
    }
}

async function downloadCollection(id) {

    const button = document.getElementById(id);
    const label = button.getElementsByTagName("label")[0];
    const progress = button.getElementsByTagName("progress")[0];
    const indicator = button.getElementsByClassName("progress-indicator")[0];
    const regular = button.getElementsByClassName("regular")[0];
    const loading = button.getElementsByClassName("loading")[0];

    try {
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
            const data = await getBeatmap(hashes[i], label);
            if (!data) continue;
            label.innerText = "Downloading...";
            const name = decodeURIComponent(data.headers.get("content-disposition").split("filename=")[1]);
            const input = {
                name: name.substring(1, name.length - 1),
                lastModified: new Date(),
                input: data.body
            };
            files.push(input);
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

async function getBeatmap(hash, label) {
    try {
        const res = await fetch(`https://catboy.best/api/v2/md5/${hash}`);
        if (!res.ok) return;
        const beatmap = await res.json();
        const data = await fetch(`https://catboy.best/d/${beatmap.set.id}`);
        console.log(data.headers);
        if (data.ok) return data;
        if (data.status === 429) {
            for (let s = 60; s >= 0; s--) {
                label.innerText = `Rate limit hit, waiting ${s}s...`;
                await delay(1000);
            }
            return await getBeatmap(...arguments);
        }
    } catch (err) {
        return;
    }
    throw new Error(data.statusText);
}
