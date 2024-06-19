function collectionsFormSelect() {
    const selectall = document.getElementById("collections-form-selectall");
    const deselectall = document.getElementById("collections-form-deselectall");

    const checkboxes = document.getElementsByClassName("collection-form-checkbox");

    selectall.addEventListener("click", () => {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    });

    deselectall.addEventListener("click", () => {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    });
}

collectionsFormSelect();
