import { parseCollection } from "@/src/db/users/update_user";

type Props = {
    file: any,
    user_id: number
}

async function CollectionsForm({ file, user_id }: Props) {

    const collections = await parseCollection(file);
    if (!collections) return <></>;

    return (<>
        <form class="relative flex flex-col" hx-swap="innerHTML" hx-target="#colpanel" hx-trigger="submit"
            hx-put={`/users/${user_id}/collections/submit`} id="collections_form">
            <div class="sticky top-0 flex flex-row justify-between bg-base-100 pb-4">
                <div class="join">
                    <button id="collections-form-selectall" type="button" class="btn btn-secondary join-item btn-sm">
                        Select All
                    </button>
                    <button id="collections-form-deselectall" type="button" class="btn btn-secondary join-item btn-sm">
                        Deselect All
                    </button>
                </div>
                <div class="flex flex-row gap-2">
                    <button class="btn btn-success btn-sm" type="submit">
                        <i class="fa-solid fa-check" />
                    </button>
                    <button class="btn btn-error btn-sm" type="button" hx-post={`/users/${user_id}/panels/collections`}>
                        <i class="fa-solid fa-xmark" />
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                {collections?.collection.map((c: any) => (
                    <div class="flex flex-row items-center gap-2 rounded-lg bg-base-300 p-2">
                        <input name={c.name} value={JSON.stringify(c.beatmapsMd5)} type="checkbox" checked class="collection-form-checkbox checkbox" />
                        <label>{c.name} ({c.beatmapsMd5.length})</label>
                    </div>
                ))}
            </div>
        </form>
        <script src="/public/js/selectform.js" />
    </>
    );
}

export default CollectionsForm;
