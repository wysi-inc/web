const searchForm = document.getElementById("search_form");
const searchInput = document.getElementById("search_input");
const searchResults = document.getElementById("search_results");
const searchModal = document.getElementById("search_modal");
searchModal.addEventListener("change", (e) => {
    if (e.target.checked) {
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchInput.focus();
    }
});
searchInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    searchForm.setAttribute("hx-get", "/search/" + e.target.value);
});
