setup();
function setup() {
    const form = document.getElementById('setup_form');
    const fieldset = document.getElementById('setup_fieldset');

    const form_edit = document.getElementById('setup_form_edit');
    const form_submit = document.getElementById('setup_form_submit');
    const form_cancel = document.getElementById('setup_form_cancel');

    const tablet = document.getElementById('tablet');
    const tablet_area = document.getElementById('tablet_area');

    form_edit.addEventListener('click', (e) => {
        e.preventDefault();
        fieldset.disabled = false;
    });

    form_submit.addEventListener('click', (e) => {
        e.preventDefault();
        fieldset.disabled = true;
    });

    form_cancel.addEventListener('click', (e) => {
        e.preventDefault();
        fieldset.disabled = true;
        form.reset();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    form.addEventListener('change', (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'tablet_width':
                tablet.style.width = `${value}px`;
                scale();
                break;
            case 'tablet_height':
                tablet.style.height = `${value}px`;
                scale();
                break;
            case 'area_width':
                tablet_area.style.width = `${value}px`;
                break;
            case 'area_height':
                tablet_area.style.height = `${value}px`;
                break;
            case 'area_y':
                tablet_area.style.top = `${value}px`;
                break;
            case 'area_x':
                tablet_area.style.left = `${value}px`;
                break;
            case 'area_r':
                tablet_area.style.transform = `rotate(${value}deg)`;
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
    });

}

function scale() {
    const tablet = document.querySelector('#tablet');
    const parent = tablet.parentNode;
    const ratio = (parent.offsetWidth / tablet.offsetWidth);
    const padding = tablet.offsetHeight * ratio;

    tablet.style.transform = 'scale(' + ratio + ')';
    tablet.style.transformOrigin = 'top left';

    parent.style.paddingTop = padding; // keeps the parent height in ratio to child resize
}
