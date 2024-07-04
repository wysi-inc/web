const colors = {
    grades: {
        xh: '#dddddd',
        x: '#ffa317',
        sh: '#dddddd',
        s: '#ff7d31',
        a: '#4db508',
        b: '#0564eb',
        c: '#c715e0',
        d: '#e30012',
        f: '#aaaaaa'
    }
};

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
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                user_id: user.user_id,
                mode: user.mode,
                username: user.username
            })
        });
        const inspector = await res.json();
        if (inspector.user === null) throw new Error("User not found");

        grade_counts.set("XH", { count: inspector.user.ssh_count, color: colors.grades.xh });
        grade_counts.set("X", { count: inspector.user.ss_count, color: colors.grades.x });
        grade_counts.set("SH", { count: inspector.user.sh_count, color: colors.grades.sh });
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
            line.style = `width:${val.count / total * 100}%;background-color:${val.color};`;
            line_div.appendChild(line);
        });

        chart.appendChild(grade_div);
        chart.appendChild(line_div);

    } catch (err) {
        console.log(err);
    }
    loading.classList.add("hidden");
}

getGrades();
