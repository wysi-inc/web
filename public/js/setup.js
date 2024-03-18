setup();
function setup() {
    const form = document.getElementById('setup_form');

    const tablet = document.getElementById('tablet');
    const tablet_area = document.getElementById('tablet_area');
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
                break;
            case 'tablet_height':
                tablet.style.height = `${value}px`;
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
            default:
                break;
        }
    });

}
