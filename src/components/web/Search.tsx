function Search({ t }: any) {
    return (<>
        <button id="search_button" class="relative grid grid-cols-3 btn btn-block bg-base-300">
            <div class="flex flex-row gap-2">
                <i class="fa-solid fa-magnifying-glass" />
                <span class="text-nowrap">{t.nav.search}</span>
            </div>
            <kbd class="absolute right-2 kbd hidden sm:flex">/</kbd>
        </button>
        <dialog id="search_modal" class="modal">
            <div class="modal-box bg-neutral">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg mb-4">{t.nav.search}</h3>
                <form id="search_form" class="flex flex-col gap-4">
                    <input type="text" name="q" id="search_input"
                        class="input input-bordered"
                        hx-post="/search"
                        hx-trigger="keyup changed delay:500ms"
                        hx-target="#search_results"
                        hx-sync="closest form:abort"
                        placeholder={`${t.nav.search_someone}...`}
                    />
                    <div id="search_results" class="flex flex-col gap-4" />
                </form>
            </div>
        </dialog>
    </>);
}

export default Search;
