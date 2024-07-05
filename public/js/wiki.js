const imgs = document.getElementById("wiki_markdown").getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    const src = new URL(imgs[i].src);
    // if (src.pathname.split('/')[1] === "img") {
    //     imgs[i].src = `https://i.ppy.sh${src.pathname}`;
    // } else {
    imgs[i].src = `https://osu.ppy.sh${src.pathname}`;
    // };
}
