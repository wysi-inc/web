const searchButton = document.getElementById("search_button");
const searchInput = document.getElementById("search_input");
const searchResults = document.getElementById("search_results");
const searchModal = document.getElementById("search_modal");

searchButton.addEventListener("click", (e) => {
    openDialog(e);
});

document.addEventListener('keypress', function (e) {
    const activeElement = document.activeElement;
    if (activeElement.tagName === "INPUT") {
        if (activeElement.id !== "search_input") return;
    }
    else if (activeElement.tagName === "TEXTAREA") return;
    else if (activeElement.getAttribute('contenteditable') === 'true') return;
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
