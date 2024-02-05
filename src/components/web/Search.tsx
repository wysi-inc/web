const Search = () => {
    return (<>
        <label for="search-modal" class="btn btn-wide bg-base-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512">
                <path fill="#a6adbb" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            Search
        </label>
        <input type="checkbox" id="search-modal" class="modal-toggle" />
        <div class="modal" role="dialog">
            <div class="modal-box flex flex-col gap-4">
                <input type="text" name="q" class="input bg-neutral w-full"
                    hx-get="/search"
                    hx-trigger="keyup changed delay:500ms"
                    hx-target="#search-results"
                    placeholder="Search..."
                />
                <div id="search-results"></div>
            </div>
            <label class="modal-backdrop" for="search-modal">Close</label>
        </div>
    </>);
}

export default Search;