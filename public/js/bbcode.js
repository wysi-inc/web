document.querySelector('.js-spoilerbox__link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor action
    const spoilerBody = document.querySelector('.js-spoilerbox__body');
    let st1 = document.styleSheets[0].cssRules[1];
    if (spoilerBody.style.display === 'block') {
        spoilerBody.style.display = 'none';
    } else {
        spoilerBody.style.display = 'block';
    }
});
