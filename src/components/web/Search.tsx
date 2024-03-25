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
                <div id="search_results" class="flex flex-col" />
            </form>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>);
}

export default Search;
