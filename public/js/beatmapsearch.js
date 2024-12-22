var DIFF_LIMIT = 5;
var DEBOUNCE_MS = 500;

var debounceTimer;
var controller = null;
var latest = 0;

function getBeatmaps(offset) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        fetchBeatmaps(offset);
    }, DEBOUNCE_MS);
}

fetchBeatmaps(0);
async function fetchBeatmaps(offset) {
    const results = document.getElementById("beatmap-search-results");
    if (Number(offset) === 0) {
        results.innerHTML = "";
    }

    const url = new URL("https://catboy.best/api/v2/search");
    const form = document.getElementById("search-form");
    const data = new FormData(form);
    const query = [];
    const q = {
        title: String(data.get("title")),
        mapper: String(data.get("mapper")),
        modes: Array.from(data.entries())
            .map((e) => (e[0] === "mode" ? e[1] : null))
            .filter((e) => e !== null),
        statuses: Array.from(data.entries())
            .map((e) => (e[0] === "status" ? e[1] : null))
            .filter((e) => e !== null),
        sorting: String(data.get("sorting")),
        bpm: {
            min: Number(data.get("bpm_min")),
            max: Number(data.get("bpm_max")),
        },
        sr: {
            min: Number(data.get("sr_min")),
            max: Number(data.get("sr_max")),
        },
        len: {
            min: Number(data.get("len_min")),
            max: Number(data.get("len_max")),
        },
        year: {
            min: Number(data.get("year_min")),
            max: Number(data.get("year_max")),
        },
        cs: {
            min: Number(data.get("cs_min")),
            max: Number(data.get("cs_max")),
        },
        od: {
            min: Number(data.get("od_min")),
            max: Number(data.get("od_max")),
        },
        ar: {
            min: Number(data.get("ar_min")),
            max: Number(data.get("ar_max")),
        },
        hp: {
            min: Number(data.get("hp_min")),
            max: Number(data.get("hp_max")),
        },
    };

    if (q.mapper) {
        query.push(`creator=${q.mapper}`);
    }
    if (q.bpm.min > 0) {
        query.push(`bpm>=${q.bpm.min}`);
    }
    if (q.bpm.max < 300) {
        query.push(`bpm<=${q.bpm.max}`);
    }
    if (q.sr.min > 0) {
        query.push(`beatmaps.difficulty_rating>=${q.sr.min}`);
    }
    if (q.sr.max < 10) {
        query.push(`beatmaps.difficulty_rating<=${q.sr.max}`);
    }
    if (q.year.min > 2007) {
        const min_date = new Date();
        min_date.setFullYear(Number());
        query.push(`submitted_date>=${min_date.getTime()}`);
    }
    if (q.year.max < new Date().getFullYear()) {
        const max_date = new Date();
        max_date.setFullYear(Number(data.get("year_max")) + 1);
        query.push(`submitted_date<=${max_date.getTime()}`);
    }
    if (q.ar.min > 0) {
        query.push(`beatmaps.ar>=${q.ar.min}`);
    }
    if (q.ar.max < 10) {
        query.push(`beatmaps.ar<=${q.ar.max}`);
    }
    if (q.cs_min > 0) {
        query.push(`beatmaps.cs>=${q.cs.min}`);
    }
    if (q.cs.max < 10) {
        query.push(`beatmaps.cs<=${q.cs.max}`);
    }
    if (q.hp.min > 0) {
        query.push(`beatmaps.drain>=${q.hp.min}`);
    }
    if (q.hp.max < 10) {
        query.push(`beatmaps.drain<=${q.hp.max}`);
    }
    if (q.od.min > 0) {
        query.push(`beatmaps.od>=${q.od.min}`);
    }
    if (q.od.max < 10) {
        query.push(`beatmaps.od<=${q.od.max}`);
    }
    if (q.len.min > 0) {
        query.push(`beatmaps.total_length>=${q.len.min}`);
    }
    if (q.len.max < 600) {
        query.push(`beatmaps.total_length<=${q.len.max}`);
    }
    let query_string = "";
    if (q.title) {
        query_string += q.title;
    }
    if (query.length > 0) {
        query_string += `[${query.join(" AND ")}]`;
    }
    if (query_string) {
        url.searchParams.set("query", query_string);
    }
    url.searchParams.set("limit", 50);
    url.searchParams.set("offset", offset);
    if (q.modes) {
        q.modes.forEach((mode) => url.searchParams.append("mode", mode));
    }
    if (q.statuses) {
        q.statuses.forEach((status) => url.searchParams.append("status", status));
    }
    if (q.sorting !== "relevant") {
        url.searchParams.set("sort", q.sorting);
    }

    controller?.abort();
    controller = new AbortController();
    const res = await fetch(url.toString(), { signal: controller.signal });
    if (!res.ok) return;
    const beatmapsets = await res.json();

    if (!beatmapsets) {
        results.innerHTML = "";
        return;
    }

    const template = document.getElementById("beatmapset-template");

    for (const b_set of beatmapsets) {
        const clone = template.content.cloneNode(true);
        const beatmaps = b_set?.beatmaps?.sort((a, b) => (a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int));
        if (!beatmaps) continue;

        const img_bgs = clone.querySelectorAll(".set_bg_img");
        for (const img_bg of img_bgs) {
            img_bg.style.backgroundImage = `url('https://b.ppy.sh/thumb/${b_set.id}l.jpg')`;
        }

        const play_btn = clone.querySelector(".set_play_btn");
        play_btn.setAttribute(
            "data-song",
            JSON.stringify({
                src: `https://catboy.best/preview/audio/${b_set.id}`,
                cover: `https://assets.ppy.sh/beatmaps/${b_set.id}/covers/card.jpg?${b_set.id}`,
                title: b_set.title,
                artist: b_set.artist,
                set_id: b_set.id,
                map_id: beatmaps[0].id,
            })
        );

        const title = clone.querySelector(".set_title");
        title.textContent = b_set.title;
        title.setAttribute("href", `/beatmapsets/${b_set.id}`);
        title.setAttribute("hx-get", `/beatmapsets/${b_set.id}`);

        const artist = clone.querySelector(".set_artist");
        artist.textContent = `by ${b_set.artist}`;

        const mapper = clone.querySelector(".set_mapper");
        mapper.textContent = `mapped by ${b_set.user?.id || b_set.user_id}`;
        mapper.setAttribute("href", `/users/${b_set.user?.id || b_set.user_id}`);
        mapper.setAttribute("hx-get", `/users/${b_set.user?.id || b_set.user_id}`);

        const badge = clone.querySelector(".set_badge");
        badge.textContent = b_set.status;
        badge.style.backgroundColor = colors.beatmap[b_set.status];

        const diffs = clone.querySelector(".set_diffs");
        let i = 0;
        for (const beatmap of beatmaps) {
            if (i > DIFF_LIMIT) break;
            const a = document.createElement("a");
            a.className = "flex items-center";
            a.setAttribute("href", `/beatmapsets/${b_set.id}/${beatmap.id}`);
            a.setAttribute("hx-get", `/beatmapsets/${b_set.id}/${beatmap.id}`);
            const span = document.createElement("span");
            span.className = "tooltip m-0 p-0";
            span.setAttribute("data-tip", `★ ${beatmap.difficulty_rating} - [${beatmap.version}]`);
            const xmlns = "http://www.w3.org/2000/svg";
            const svg = document.createElementNS(xmlns, "svg");
            svg.setAttribute("width", 16);
            svg.setAttribute("height", 16);
            svg.setAttribute("viewBox", "0 0 500 500");
            svg.setAttribute("version", "1.1");
            const color = getDiffColor(beatmap.difficulty_rating);
            const path1 = document.createElementNS(xmlns, "path");
            path1.setAttribute("stroke", "none");
            path1.setAttribute("fill", color);
            path1.setAttribute("fill-rule", "evenodd");
            const path2 = document.createElementNS(xmlns, "path");
            path2.setAttribute("stroke", "none");
            path2.setAttribute("fill", color);
            path2.setAttribute("fill-rule", "evenodd");
            switch (beatmap.mode) {
                case "taiko":
                    path2.setAttribute(
                        "d",
                        "M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.624 C 194.025 72.696, 166.205 83.694, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 179.888 424.568, 223.031 436.003, 262.198 433.022 C 315.188 428.989, 364.571 402.551, 395.247 361.793 C 427.793 318.549, 440.117 262.390, 428.463 210.428 C 419.918 172.330, 398.315 135.598, 370.495 111.867 C 346.659 91.534, 315.342 76.249, 284.500 69.896 C 276.673 68.283, 269.828 67.765, 253 67.509 C 241.175 67.330, 230.150 67.382, 228.500 67.624 M 228.870 108.468 C 181.632 116.214, 142.959 144.291, 122.083 185.996 C 111.254 207.630, 107 225.668, 107 249.955 C 107 273.405, 111.340 292.590, 121.235 312.880 C 130.645 332.175, 146.724 351.655, 163.844 364.504 C 172.964 371.349, 189.244 380.231, 200.500 384.504 C 219.242 391.618, 248.355 394.882, 268.100 392.083 C 315.048 385.429, 354.739 357.477, 376.552 315.710 C 382.808 303.730, 388.314 287.749, 390.706 274.628 C 392.983 262.141, 392.961 237.531, 390.662 225.500 C 386.894 205.775, 378.633 185.637, 367.500 169.034 C 360.889 159.175, 345.636 143.361, 335.139 135.483 C 319.752 123.935, 298.200 114.195, 278.500 109.886 C 266.426 107.245, 240.792 106.513, 228.870 108.468 M 221 151.132 C 211.852 153.585, 199.313 159.355, 191.286 164.806 C 172.060 177.862, 156.700 199.419, 150.447 222.122 C 147.244 233.753, 146.118 253.470, 147.935 266.105 C 152.766 299.690, 175.760 330.208, 206.690 344.085 C 213.089 346.956, 225.978 351, 228.730 351 C 229.748 351, 230 330.986, 230 250 C 230 194.450, 229.662 149.027, 229.250 149.061 C 228.838 149.094, 225.125 150.026, 221 151.132 M 270 250 C 270 305.550, 270.309 351, 270.686 351 C 273.133 351, 287.694 346.242, 293.727 343.471 C 308.712 336.588, 326.159 321.641, 335.130 308 C 351.758 282.717, 356.647 252.464, 348.937 222.567 C 341.961 195.514, 321.867 170.921, 296.282 158.121 C 289.953 154.955, 273.048 149, 270.388 149 C 270.175 149, 270 194.450, 270 250"
                    );
                    break;
                case "fruits":
                    path2.setAttribute(
                        "d",
                        "M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.629 C 194.234 72.619, 166.194 83.702, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 158.029 409.892, 178.719 419.938, 192.030 424.352 C 258.615 446.428, 334.597 427.318, 383.014 376.318 C 404.945 353.217, 422.179 319.994, 429.075 287.524 C 439.831 236.878, 427.133 180.565, 395.475 138.512 C 369.628 104.178, 328.670 78.890, 284.379 69.918 C 275.609 68.142, 269.429 67.664, 252.500 67.453 C 240.950 67.310, 230.150 67.388, 228.500 67.629 M 154.994 184.878 C 146.700 187.586, 136.296 196.508, 132.349 204.298 C 127.821 213.234, 127.708 227.587, 132.099 236.194 C 135.303 242.475, 143.593 250.652, 149.891 253.745 C 154.877 256.194, 156.610 256.500, 165.500 256.499 C 174.546 256.499, 176.014 256.228, 180.881 253.666 C 188.118 249.857, 195.543 242.218, 198.796 235.236 C 201.070 230.356, 201.469 228.157, 201.469 220.500 C 201.469 212.830, 201.071 210.647, 198.781 205.732 C 195.504 198.698, 187.270 190.255, 180.500 186.988 C 176.553 185.083, 173.605 184.520, 166.500 184.317 C 161.550 184.176, 156.372 184.428, 154.994 184.878 M 324 184.879 C 310.863 189.184, 300.124 201.449, 297.985 214.594 C 296.875 221.414, 298.315 230.717, 301.433 236.862 C 304.904 243.705, 314.322 252.228, 321.291 254.836 C 341.518 262.404, 364.194 250.281, 369.590 229.015 C 373.768 212.551, 365.711 195.538, 349.881 187.400 C 345.384 185.088, 343.021 184.587, 335.500 184.347 C 330.550 184.189, 325.375 184.429, 324 184.879 M 240.271 303.540 C 233.505 305.362, 228.648 308.498, 222.679 314.897 C 215.429 322.670, 213.571 327.567, 213.532 339 C 213.504 347.455, 213.813 349.138, 216.348 354.301 C 219.983 361.702, 227.298 369.017, 234.699 372.652 C 239.774 375.144, 241.629 375.500, 249.521 375.500 C 257.695 375.500, 259.168 375.192, 265.206 372.219 C 272.693 368.533, 279.374 361.842, 283.118 354.280 C 285.150 350.174, 285.485 348.019, 285.492 339 C 285.499 329.876, 285.189 327.910, 283.129 324 C 277.426 313.173, 268.510 305.799, 258.184 303.369 C 251.103 301.703, 246.946 301.742, 240.271 303.540"
                    );
                    break;
                case "mania":
                    path2.setAttribute(
                        "d",
                        "M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.629 C 194.234 72.619, 166.194 83.702, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 158.029 409.892, 178.719 419.938, 192.030 424.352 C 258.615 446.428, 334.597 427.318, 383.014 376.318 C 404.945 353.217, 422.179 319.994, 429.075 287.524 C 439.831 236.878, 427.133 180.565, 395.475 138.512 C 369.628 104.178, 328.670 78.890, 284.379 69.918 C 275.609 68.142, 269.429 67.664, 252.500 67.453 C 240.950 67.310, 230.150 67.388, 228.500 67.629 M 240.399 108.906 C 238.143 109.931, 234.606 112.461, 232.537 114.529 C 224.948 122.118, 225.531 111.556, 225.230 246.997 C 225.042 332.117, 225.289 370.074, 226.056 373.768 C 229.122 388.537, 246.391 397.346, 259.673 390.916 C 265.258 388.213, 271.425 381.149, 272.904 375.760 C 273.775 372.588, 274.001 339.960, 273.787 248 L 273.500 124.500 271.342 120.500 C 265.213 109.142, 251.332 103.941, 240.399 108.906 M 160 176.590 C 155.517 178.527, 149.370 184.455, 146.915 189.210 C 145.094 192.738, 145 195.721, 145 250.075 L 145 307.229 147.661 312.119 C 152.180 320.422, 159.761 325, 168.990 325 C 176.171 325, 180.788 322.944, 186.201 317.335 C 193.224 310.058, 193.001 312.249, 192.994 250.782 C 192.991 216.783, 192.601 194.105, 191.983 191.877 C 190.645 187.062, 183.563 179.161, 178.539 176.878 C 173.612 174.640, 164.830 174.504, 160 176.590 M 322.500 176.061 C 318.163 177.334, 312.417 182.435, 309.249 187.824 L 306.500 192.500 306.500 250 C 306.500 307.151, 306.513 307.525, 308.678 311.568 C 311.479 316.802, 317.718 322.422, 322.468 323.990 C 324.539 324.673, 329.036 325.040, 332.578 324.814 C 337.641 324.492, 339.835 323.792, 343.201 321.426 C 348.411 317.764, 352.830 311.650, 354.042 306.426 C 354.543 304.267, 354.963 278.844, 354.976 249.932 C 354.996 206.510, 354.744 196.505, 353.529 192.432 C 349.687 179.554, 335.714 172.182, 322.500 176.061"
                    );
                    break;
                case "osu":
                    path2.setAttribute(
                        "d",
                        "M 232.402 27.005 C 163.264 32.727, 100.812 69.712, 62.708 127.500 C 54.516 139.925, 41.912 166.067, 37.076 180.663 C 21.134 228.787, 22.611 283.347, 41.139 330.736 C 72.517 410.991, 146.357 465.922, 232.500 473.093 C 296.415 478.413, 361.634 454.204, 407.826 408.011 C 436.548 379.290, 457.894 340.968, 467.435 301 C 473.048 277.489, 474.621 245.776, 471.412 220.842 C 466.625 183.652, 451.004 145.873, 427.376 114.345 C 419.524 103.868, 400.550 84.409, 390.020 76.034 C 364.332 55.606, 330.895 39.294, 300 32.119 C 279.841 27.438, 252.326 25.357, 232.402 27.005 M 228.500 67.624 C 194.025 72.696, 166.205 83.694, 139.854 102.666 C 100.533 130.978, 73.220 178.722, 67.024 229.974 C 63.840 256.315, 67.944 288.959, 77.630 314.341 C 91.692 351.189, 115.333 381.229, 147 402.488 C 179.888 424.568, 223.031 436.003, 262.198 433.022 C 315.188 428.989, 364.571 402.551, 395.247 361.793 C 427.793 318.549, 440.117 262.390, 428.463 210.428 C 419.918 172.330, 398.315 135.598, 370.495 111.867 C 346.659 91.534, 315.342 76.249, 284.500 69.896 C 276.673 68.283, 269.828 67.765, 253 67.509 C 241.175 67.330, 230.150 67.382, 228.500 67.624 M 231.430 107.979 C 183.927 114.711, 143.233 143.745, 122.083 185.996 C 111.247 207.644, 107 225.664, 107 250 C 107 274.672, 111.335 292.758, 122.539 314.831 C 130.426 330.368, 138.890 341.790, 151.328 353.681 C 170.265 371.785, 193.839 384.292, 220.114 390.175 C 233.938 393.270, 263.651 393.536, 277 390.684 C 335.768 378.130, 380.083 332.899, 390.706 274.628 C 392.983 262.141, 392.961 237.531, 390.662 225.500 C 386.894 205.775, 378.633 185.637, 367.500 169.034 C 360.889 159.175, 345.636 143.361, 335.139 135.483 C 319.444 123.704, 296.988 113.741, 276.500 109.467 C 267.296 107.548, 240.679 106.669, 231.430 107.979"
                    );
                    break;
            }
            svg.appendChild(path1);
            svg.appendChild(path2);
            span.appendChild(svg);
            a.appendChild(span);
            diffs.appendChild(a);
            i++;
        }

        if (i > DIFF_LIMIT) {
            const extra = document.createElement("div");
            extra.className = "badge badge-info badge-sm";
            extra.textContent = `+${beatmaps.length - DIFF_LIMIT}`;
            diffs.appendChild(extra);
        }

        htmx.process(clone);
        results.appendChild(clone);
    }

    if (beatmapsets.length >= 50) {
        const loadMoreDiv = document.createElement("div");
        loadMoreDiv.className = "col-span-full flex justify-center";
        const loadMoreBtn = document.createElement("button");
        loadMoreBtn.className = "btn btn-secondary btn-sm btn-wide flex flex-row items-center justify-center gap-4";
        loadMoreBtn.setAttribute("onclick", `loadMore(this, ${beatmapsets.length + (Number(offset) || 0)})`);
        loadMoreBtn.textContent = "Load More";
        loadMoreDiv.appendChild(loadMoreBtn);
        results.appendChild(loadMoreDiv);
    }
}

async function loadMore(element, offset) {
    const indicator = document.createElement("span");
    indicator.className = "loading loading-spinner loading-md";
    const parent = element.parentNode;
    parent.appendChild(indicator);
    element.remove();
    await fetchBeatmaps(Number(offset));
    parent.remove();
}

function getDiffColor(diff) {
    let startColor;
    let endColor;
    let ratio;
    if (diff < 10) {
        startColor = colors.difficulty[Math.floor(diff)];
        endColor = colors.difficulty[Math.ceil(diff)];
        ratio = diff - Math.floor(diff);
    } else {
        startColor = colors.difficulty[10];
        endColor = colors.difficulty[10];
        ratio = 1;
    }
    const startR = parseInt(startColor.slice(1, 3), 16);
    const startG = parseInt(startColor.slice(3, 5), 16);
    const startB = parseInt(startColor.slice(5, 7), 16);
    const endR = parseInt(endColor.slice(1, 3), 16);
    const endG = parseInt(endColor.slice(3, 5), 16);
    const endB = parseInt(endColor.slice(5, 7), 16);
    const r = Math.round(startR + (endR - startR) * ratio)
        .toString(16)
        .padStart(2, "0");
    const g = Math.round(startG + (endG - startG) * ratio)
        .toString(16)
        .padStart(2, "0");
    const b = Math.round(startB + (endB - startB) * ratio)
        .toString(16)
        .padStart(2, "0");
    return `#${r}${g}${b}`;
}
