const Search = () => {

    return (<>
        <button onclick="search_modal.showModal()" class="btn btn-wide bg-base-300">
            <i class="fa-solid fa-magnifying-glass" />
            <span>Search</span>
        </button>
        <dialog class="modal" id="search_modal">
            <form hx-get="" hx-trigger="submit" hx-target="#main" id="search_form"
                class="modal-box flex flex-col gap-4">
                <input type="text" name="q" id="search_input"
                    class="input input-bordered"
                    hx-post="/search"
                    hx-trigger="keyup changed delay:500ms"
                    hx-target="#search_results"
                    hx-sync="closest form:abort"
                    placeholder="Search..."
                />
                <div id="search_results" />
            </form>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        <script type="module">{`
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
        `}</script>
    </>);
}

export default Search;
