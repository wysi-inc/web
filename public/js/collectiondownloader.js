import { downloadZip } from "https://unpkg.com/client-zip@2.4.5/index.js"

async function downloadCollection(id) {

    console.log("starting download");

    const name = document.getElementById(id).getAttribute("data-name");
    const ids = JSON.parse(document.getElementById(id).getAttribute("data-ids"));

    const files = [];

    for (let i = 0; i < ids.length; i++) {
        const data = await fetch(`https://catboy.best/d/${ids[i]}`);
        console.log(data);
        const input = {
            name: `${ids[i]}.osz`,
            lastModified: new Date(),
            input: data.body
        };
        files.push(input);
    }

    const content = await downloadZip(files).blob();
    var blobUrl = URL.createObjectURL(content);
    let link = document.createElement("a"); // Or maybe get it from the current document
    link.href = blobUrl;
    link.download = `collection-${name}.zip`;
    link.click();
    link.remove();
}

window.downloadCollection = downloadCollection;
