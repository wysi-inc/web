const Search = () => {

    return (<>
        <label for="search-modal" class="btn btn-wide bg-base-300">
            <i class="fa-solid fa-magnifying-glass" />
            Search
        </label>
        <input type="checkbox" id="search-modal" class="modal-toggle" />
        <div class="modal" role="dialog" id="search-modal">
            <div class="modal-box flex flex-col gap-4">
                <input type="text" name="q" class="input input-bordered"
                    hx-post="/search"
                    hx-trigger="keyup changed delay:500ms"
                    hx-target="#search-results"
                    placeholder="Search..."
                />
                <div id="search-results" />
            </div>
            <label class="modal-backdrop" for="search-modal">Close</label>
        </div>
    </>);
}

export default Search;
