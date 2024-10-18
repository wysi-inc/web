import { UserModel, type CollectionDB } from "@/src/models/User";
import LoadMoreButton from "../../web/LoadMoreButton";
import Title from "../../web/Title";

type Props = {
    user_id: number,
    logged_id: number | undefined,
    collections?: CollectionDB[]
}

async function UserCollectionsPanel({ user_id, logged_id, collections }: Props) {

    const editable = user_id === logged_id;

    if (!collections) {
        const user = await UserModel.findOne({ user_id });
        collections = user?.collections as any;
    }

    return (<div id="colpanel" class="flex flex-col gap-4">
        {editable ?
            <form id="collections_form" class="flex flex-row items-center justify-between gap-2" hx-swap="innerHTML" hx-target="#colpanel" hx-trigger="submit"
                hx-encoding='multipart/form-data' hx-post={`/users/${user_id}/collections/parse`} >
                <fieldset id="collections_fieldset" class="group join" disabled>
                    <input type="file" accept=".db" name="collection" required class="peer file-input join-item file-input-bordered file-input-sm w-full max-w-xs group-disabled:hidden" />
                    <button type="submit" class="btn btn-primary join-item btn-sm group-disabled:hidden peer-invalid:hidden">
                        <div class="htmx-indicator flex flex-row items-center gap-4">
                            <span class="loading loading-spinner" />
                        </div>
                        Submit
                        <i class="fa-solid fa-arrow-up-from-bracket" />
                    </button>
                    {!collections || collections.length === 0 ?
                        <span class="hidden group-disabled:block">
                            Upload your <em>collection.db</em> file from your osu! folder
                        </span> : null
                    }
                </fieldset>
                <div class="flex flex-row gap-2">
                    <button type="button" class="btn btn-accent btn-sm block" id="collections_form_edit">
                        <i class="fa-solid fa-pen-to-square" />
                    </button>
                    <button type="button" class="btn btn-sm hidden flex-row items-center gap-2"
                        id="collections_form_delete" onclick="collections_delete_modal.showModal()">
                        <i class="fa-regular fa-trash-can" />
                        <span>Delete ALL</span>
                    </button>
                    <button type="reset" class="btn btn-error btn-sm hidden"
                        id="collections_form_cancel">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <dialog id="collections_delete_modal" class="modal">
                        <div class="modal-box">
                            <h3 class="text-lg font-bold">Caution!</h3>
                            <p class="py-4">You are about to DELETE your collections, this action cannot be undone!</p>
                            <p class="py-4">Are you sure you want to proceed?</p>
                            <div class="modal-action">
                                <button class="btn btn-error" hx-swap="innerHTML" hx-target="#colpanel"
                                    hx-delete={`/users/${user_id}/collections/delete`}>
                                    Yes, delete them
                                </button>
                                <form method="dialog">
                                    <button class="btn btn-success">No, go back</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </form>
            : null
        }
        {collections && collections.length > 0 ? <>
            <div class="flex flex-row flex-wrap gap-2">
                <button class="collection-download-button btn btn-info btn-sm flex h-8 grow cursor-pointer flex-row items-center gap-2"
                    id={`btn_download_${user_id}`} data-name={`all_collections_${user_id}`} data-ids={JSON.stringify(collections.map(c => c.beatmapsMd5.map(h => h)).flat())}>
                    <i class="fa-regular fa-file-zipper" />
                    <span class="loading loading-spinner loading-xs"
                        style={{ display: "none" }} />
                    <label class="cursor-pointer" data-title="Download All Maps">
                        Download All Maps
                    </label>
                    <progress class="progress progress-success w-56" value={0} max={collections.map(c => c.beatmapsMd5.length).reduce((total, c) => total + c, 0)}
                        style={{ display: "none" }} />
                    <span class="progress-indicator" style={{ display: "none" }}>
                        0/{collections.map(c => c.beatmapsMd5.length).reduce((total, c) => total + c, 0)}
                    </span>
                </button>
                <a class="btn btn-disabled btn-secondary btn-sm">
                    <i class="fa-regular fa-file-code" />
                    Download collection.db (wip)
                </a>
            </div>
            <div class="flex flex-col gap-2">
                {collections.map((c) => (
                    <div class="flex flex-col gap-2 rounded-lg bg-base-300 p-2">
                        <details class="group">
                            <summary class="flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg bg-neutral ps-4">
                                <div class="flex flex-row items-center gap-4">
                                    <i class="fa-solid fa-caret-down transform duration-200 ease-out group-open:rotate-180" />
                                    <h6>{c.name} ({c.beatmapsMd5.length})</h6>
                                </div>
                                <button class="collection-download-button btn btn-info btn-sm flex h-8 cursor-pointer flex-row items-center gap-2"
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
                            </summary>
                            <div class="flex flex-col gap-2 pt-2">
                                <LoadMoreButton url={`/users/${user_id}/0/lists/collections/${encodeURIComponent(c.name || "")}?offset=0`} />
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </> : null}
        <Title scripts={[
            "/public/js/collections.js",
            "/public/js/collectiondownloader.js"
        ]} />
    </div>)
}

export default UserCollectionsPanel;
