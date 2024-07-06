collections();

function collections() {
    const fieldset = document.getElementById('collections_fieldset');
    const form_edit = document.getElementById('collections_form_edit');
    const form_cancel = document.getElementById('collections_form_cancel');
    const form_delete = document.getElementById('collections_form_delete');

    form_edit.addEventListener('click', () => {
        setTimeout(() => {
            fieldset.disabled = false;
            form_edit.style.display = "none";
            form_cancel.style.display = "block";
            form_delete.style.display = "flex";
        }, 0);
    });

    form_cancel.addEventListener('click', () => {
        setTimeout(() => {
            fieldset.disabled = true;
            form_edit.style.display = "block";
            form_cancel.style.display = "none";
            form_delete.style.display = "none";
        }, 0);
    });

}
