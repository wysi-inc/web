import { CollectionsDBModel, type CollectionsDB } from "@/src/models/CollectionDB";

type Props = {
    user_id: number,
    logged_id: number | undefined,
    collection?: CollectionsDB
}

async function UserCollectionsPanel({ user_id, logged_id, collection }: Props) {

    if (!collection) {
        collection = await CollectionsDBModel.findOne({ user_id }) as any;
    }

    const editable = user_id === logged_id;

    const collections = collection?.collections;

    return (<div id="colpanel" class="max-h-96 overflow-y-scroll flex flex-col gap-4">
        {editable ?
            <div class="flex flex-row-reverse flex-wrap items-center justify-between">
                <div class="flex flex-row gap-2">
                    <button type="button" class="block btn btn-sm btn-accent"
                        id="collections_form_edit">
                        <i class="fa-solid fa-pen-to-square" />
                    </button>
                    <button type="button" class="hidden btn btn-sm flex-row gap-2 items-center"
                        id="collections_form_delete" onclick="collections_delete_modal.showModal()">
                        <i class="fa-regular fa-trash-can" />
                        <span>Delete ALL</span>
                    </button>
                    <button type="reset" class="hidden btn btn-sm btn-error"
                        id="collections_form_cancel">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <dialog id="collections_delete_modal" class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Caution!</h3>
                            <p class="py-4">You are about to DELETE your collections, this action cannot be undone!</p>
                            <p class="py-4">Are you sure you want to proceed?</p>
                            <div class="modal-action">
                                <button class="btn btn-error" hx-swap="innerHTML" hx-target="#colpanel"
                                    hx-post={`/users/${user_id}/collections/delete`}>
                                    Yes, delete them
                                </button>
                                <form method="dialog">
                                    <button class="btn btn-success">No, go back</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <form id="collections_form" class="hidden flex-row items-center gap-2" hx-swap="innerHTML" hx-target="#colpanel" hx-trigger="submit"
                    hx-encoding='multipart/form-data' hx-post={`/users/${user_id}/collections/parse`} >
                    <div class="join">
                        <input type="file" name="collection" class="join-item file-input file-input-sm file-input-bordered w-full max-w-xs" />
                        <button type="submit" class="join-item btn btn-sm btn-primary">
                            Submit
                            <div class="htmx-indicator flex flex-row items-center gap-4">
                                <span class="loading loading-spinner" />
                            </div>
                        </button>
                    </div>
                </form>
                <script src="/public/js/collections.js" />
            </div> : <></>
        }
        {collections ? <>
            <button class="btn btn-sm btn-info collection-download-button h-8 cursor-pointer flex flex-row gap-2 items-center"
                id={`btn_download_${user_id}`} data-name={`all_collections_${user_id}`} data-ids={JSON.stringify(collections.map(c => c.beatmapsMd5.map(h => h)).flat())}>
                <i class="regular fa-regular fa-file-zipper" />
                <span class="loading loading-spinner loading-xs"
                    style={{ display: "none" }} />
                <label class="cursor-pointer" data-title="Download All">
                    Download All
                </label>
                <progress class="progress progress-success w-56" value={0} max={collections.map(c => c.beatmapsMd5.length).reduce((total, c) => total + c, 0)}
                    style={{ display: "none" }} />
                <span class="progress-indicator" style={{ display: "none" }}>
                    0/{collections.map(c => c.beatmapsMd5.length).reduce((total, c) => total + c, 0)}
                </span>
            </button>
            <div class="flex flex-col gap-2">
                {collections.map((c) => (
                    <div class="flex flex-col items-start gap-2 p-2 bg-base-300 rounded-lg">
                        <button class="btn btn-sm btn-info collection-download-button h-8 cursor-pointer flex flex-row gap-2 items-center"
                            id={`btn_download_${c.name}`} data-name={c.name} data-ids={JSON.stringify(c.beatmapsMd5.map(h => h))}>
                            <i class="regular fa-regular fa-file-zipper" />
                            <span class="loading loading-spinner loading-xs"
                                style={{ display: "none" }} />
                            <label class="cursor-pointer" data-title="Download">
                                Download
                            </label>
                            <progress class="progress progress-success w-56" value={0} max={c.beatmapsMd5.length}
                                style={{ display: "none" }} />
                            <span class="progress-indicator" style={{ display: "none" }}>
                                0/{c.beatmapsMd5.length}
                            </span>
                        </button>
                        <div class="collapse collapse-arrow">
                            <input type="checkbox" name="collections-acordion" />
                            <div class="collapse-title bg-neutral rounded-lg grow">
                                {c.name} ({c.beatmapsMd5.length})
                            </div>
                            <div class="collapse-content p-0 m-0">
                                <div class="flex flex-col gap-2 pt-2">
                                    <button hx-post={`/users/${user_id}/0/lists/collections?name=${c.name}&offset=${0}`}
                                        hx-trigger="click" hx-swap="outerHTML" hx-boost="false"
                                        class="col-span-full btn btn-success btn-sm flex flex-row gap-2">
                                        <div>Load more</div>
                                        <span class="htmx-indicator loading loading-spinner loading-md" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <script type="module" src="/public/js/collectiondownloader.js" />
            </div>
        </> : <></>
        }
    </div>)
}

export default UserCollectionsPanel;
