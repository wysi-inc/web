setup();
function setup() {
    const form = document.getElementById('setup_form');
    const fieldset = document.getElementById('setup_fieldset');

    const form_edit = document.getElementById('setup_form_edit');
    const form_cancel = document.getElementById('setup_form_cancel');

    form_cancel.addEventListener('click', () => {
        setTimeout(() => {
            fieldset.disabled = true;
        }, 0);
    });

    form_edit.addEventListener('click', () => {
        setTimeout(() => {
            fieldset.disabled = false;
        }, 0);
    });

    form.addEventListener('submit', () => {
        setTimeout(() => {
            fieldset.disabled = true;
        }, 0);
    });

    form.addEventListener('change', (e) => {
        formChange(e);
    });

    form.addEventListener('keyup', (e) => {
        formChange(e);
    });

}

function formChange(e) {

    const tablet = document.getElementById('tablet');
    const tablet_area = document.getElementById('tablet_area');
    const tablet_name = document.getElementById('tablet_name');
    const tablet_size_w = document.getElementById('tablet_size_w');
    const tablet_size_h = document.getElementById('tablet_size_h');
    const tablet_custom = document.getElementById('tablet_custom');

    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
        case 'tablet_model':
            if (value === 'custom') {
                tablet_custom.style.display = 'block';
                tablet_name.value = '';
                tablet_size_w.value = '';
                tablet_size_h.value = '';
                tablet.style.width = '0px';
                tablet.style.height = '0px';
            } else {
                tablet_custom.style.display = 'none';
                const data = JSON.parse(value);
                tablet_name.value = data.name;
                tablet_size_w.value = data.w;
                tablet_size_h.value = data.h;
                tablet.style.width = `${data.w}px`;
                tablet.style.height = `${data.h}px`;
            }
            break;
        case 'tablet_size_w':
            tablet.style.width = `${value}px`;
            break;
        case 'tablet_size_h':
            tablet.style.height = `${value}px`;
            break;
        case 'tablet_area_w':
            tablet_area.style.width = `${value}px`;
            break;
        case 'tablet_area_h':
            tablet_area.style.height = `${value}px`;
            break;
        case 'tablet_postion_y':
            tablet_area.style.top = `${value}px`;
            break;
        case 'tablet_postion_x':
            tablet_area.style.left = `${value}px`;
            break;
        case 'tablet_position_r':
            tablet_area.style.transform = `translate(-50%, -50%) rotate(${value}deg)`;
            break;
        case 'keyboard_layout':
            const store = document.getElementById('keyboard_store');
            const keyboard = store.getElementsByClassName(value)[0];
            const keyboard_display = document.getElementById('keyboard_display');
            keyboard_display.innerHTML = keyboard.outerHTML;
            break;
        default:
            break;
    }
}
