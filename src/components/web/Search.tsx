import { txt } from "@/src/tasks/files";

function Search(p: { lang: string }) {
    return (<>
        <button id="search_button" class="btn btn-block relative grid grid-cols-3 bg-base-300">
            <div class="flex flex-row gap-2">
                <i class="fa-solid fa-magnifying-glass" />
                <span class="text-nowrap">{txt(p.lang, "nav.search")}</span>
            </div>
            <kbd class="kbd absolute right-2 hidden sm:flex">/</kbd>
        </button>
        <dialog id="search_modal" class="modal">
            <div class="modal-box bg-neutral">
                <form method="dialog">
                    <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
                </form>
                <h3 class="mb-4 text-lg font-bold">{txt(p.lang, "nav.search")}</h3>
                <form id="search_form" class="flex flex-col gap-4" onsubmit="return false;">
                    <input type="text" name="q" id="search_input"
                        class="input input-bordered"
                        hx-post="/search"
                        hx-trigger="keyup changed delay:500ms"
                        hx-target="#search_results"
                        hx-sync="closest form:abort"
                        placeholder={txt(p.lang, "nav.search_someone")}
                    />
                    <div id="search_results" class="flex flex-col gap-4" />
                </form>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>);
}

export default Search;
