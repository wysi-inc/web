const Search = () => {

    return (<>
        <label for="search-modal" class="btn btn-wide bg-base-300">
            <i class="fa-solid fa-magnifying-glass" />
            Search
        </label>
        <input type="checkbox" id="search-modal" class="modal-toggle" />
        <div class="modal" role="dialog" id="search-modal">
            <form hx-get="" hx-trigger="submit" hx-target="#main" id="search-form"
                class="modal-box flex flex-col gap-4">
                <input type="text" name="q" id="search-input"
                    class="input input-bordered"
                    hx-post="/search"
                    hx-trigger="keyup changed delay:500ms"
                    hx-target="#search-results"
                    hx-sync="closest form:abort"
                    placeholder="Search..."
                />
                <div id="search-results" />
            </form>
            <label class="modal-backdrop" for="search-modal">Close</label>
        </div>
        <script type="module">{`
        const searchForm = document.getElementById("search-form");
        const searchInput = document.getElementById("search-input");
        const searchResults = document.getElementById("search-results");
        const searchModal = document.getElementById("search-modal");
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
