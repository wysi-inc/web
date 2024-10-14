function scale() {
    const auto_scale = document.getElementsByClassName("auto_scale");
    for (let item of auto_scale) {
        const rect = item.getBoundingClientRect();
        const parent = item.parentElement.getBoundingClientRect();
        const scale = Math.min(
            parent.width / rect.width,
            parent.height / rect.height
        );
        item.style.transform = `scale(${scale})`;
    }
}

function setup() {
    const form = document.getElementById("setup_form");
    const fieldset = document.getElementById("setup_fieldset");

    form.addEventListener("submit", () => {
        setTimeout(() => {
            fieldset.disabled = true;
        }, 0);
    });

    form.addEventListener("reset", () => {
        setTimeout(() => {
            fieldset.disabled = true;
            resetTablet();
        }, 0);
    });

    form.addEventListener("input", (e) => {
        formChange(e);
    });

}

function formChange(e) {

    const tablet = document.getElementById("tablet");
    const tablet_area = document.getElementById("tablet_area");
    const tablet_name = document.getElementById("tablet_name");
    const tablet_size_w = document.getElementById("tablet_size_w");
    const tablet_size_h = document.getElementById("tablet_size_h");
    const tablet_custom = document.getElementById("tablet_custom");

    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
        case "tablet_model":
            if (value === "custom") {
                tablet_custom.style.display = "flex";
                tablet_name.value = "";
                tablet_size_w.value = "";
                tablet_size_h.value = "";
                tablet.style.width = "0px";
                tablet.style.height = "0px";
            } else {
                tablet_custom.style.display = "none";
                const data = JSON.parse(value);
                tablet_name.value = data.name;
                tablet_size_w.value = data.w;
                tablet_size_h.value = data.h;
                tablet.style.width = `${data.w}px`;
                tablet.style.height = `${data.h}px`;
            }
            break;
        case "tablet_size_w":
            tablet.style.width = `${value}px`;
            break;
        case "tablet_size_h":
            tablet.style.height = `${value}px`;
            break;
        case "tablet_area_w":
            tablet_area.style.width = `${value}px`;
            break;
        case "tablet_area_h":
            tablet_area.style.height = `${value}px`;
            break;
        case "tablet_position_y":
            tablet_area.style.top = `${value}px`;
            break;
        case "tablet_position_x":
            tablet_area.style.left = `${value}px`;
            break;
        case "tablet_position_r":
            tablet_area.style.transform = `translate(-50%, -50%) rotate(${value || 0}deg)`;
            break;
        case "keyboard_layout":
            setKeyboard(value)
            break;
        default:
            break;
    }
}

function setKeyboard(name, keys = []) {
    const keeb_template = document.getElementById(`${name}_temp`);
    const keyboard_display = document.getElementById("keyboard_display");
    keyboard_display.innerHTML = "";
    keyboard_display.appendChild(keeb_template.content.cloneNode(true));
    for (let k of keys) {
        keyboard_display.getElementById(`keyboard_key_${k}`).checked = true;
    }
}

function resetTablet() {
    const tablet = document.getElementById("tablet");
    const tablet_area = document.getElementById("tablet_area");
    const o = JSON.parse(tablet.getAttribute("data-original"));
    tablet.style.width = `${o?.size?.w || 0}px`;
    tablet.style.height = `${o?.size?.h || 0}px`;
    tablet_area.style.width = `${o?.area?.w || 0}px`;
    tablet_area.style.height = `${o?.area?.h || 0}px`;
    tablet_area.style.left = `${o?.position?.x || 0}px`;
    tablet_area.style.top = `${o?.position?.y || 0}px`;
    tablet_area.style.transform = `translate(-50%, -50%) rotate(${o?.position?.r || 0}deg)`;
}
