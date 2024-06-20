const searchForm = document.getElementById("search_form");
const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
const searchResults = document.getElementById("search_results");
const searchModal = document.getElementById("search_modal");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let link = document.createElement("a");
    link.href = `/users/${searchInput.value}`;
    link.click();
});

searchButton.addEventListener("click", (e) => {
    openDialog(e);
});

document.addEventListener('keypress', function(e) {
    if (e.key === '/') {
        openDialog(e);
    }
});

function openDialog(e) {
    if (searchModal.open) return;
    e.preventDefault();
    searchResults.innerHTML = "";
    searchModal.showModal();
    searchInput.value = "";
    setTimeout(() => {
        searchInput.focus();
    }, 0);
}
