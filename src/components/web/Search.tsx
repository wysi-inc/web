const Search = () => {

    return (<>
        <button id="search_button" class="grid grid-cols-3 btn btn-wide bg-base-300">
            <div class="col-start-2 flex flex-row gap-2">
                <i class="fa-solid fa-magnifying-glass" />
                <span>Search</span>
            </div>
            <div class="flex justify-end">
                <kbd class="kbd hidden sm:flex">/</kbd>
            </div>
        </button>
        <dialog id="search_modal" class="modal">
            <div class="modal-box">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg mb-4">Search Users</h3>
                <form id="search_form" class="flex flex-col gap-4">
                    <input type="text" name="q" id="search_input"
                        class="input input-bordered"
                        hx-post="/search"
                        hx-trigger="keyup changed delay:500ms"
                        hx-target="#search_results"
                        hx-sync="closest form:abort"
                        placeholder="Search..."
                    />
                    <div id="search_results" class="flex flex-col gap-2" />
                </form>
            </div>
        </dialog>
    </>);
}

export default Search;
