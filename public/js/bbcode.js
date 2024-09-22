document.querySelectorAll('.js-spoilerbox')?.forEach(box => {
    const body = box.querySelector('.js-spoilerbox__body');
    const link = box.querySelector('.js-spoilerbox__link');
    const icon = link.querySelector('.bbcode-spoilerbox__link-icon');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (body.style.display === 'block') {
            body.style.display = 'none';
            icon.style.transform = 'rotate(90deg)';
        } else {
            body.style.display = 'block';
            icon.style.transform = 'rotate(0)';
        }
    })
});
