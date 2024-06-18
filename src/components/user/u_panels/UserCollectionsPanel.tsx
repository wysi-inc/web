import { CollectionsDBModel } from "@/src/models/CollectionDB";

type Props = {
    user_id: number,
    logged_id: number | undefined
}

async function UserCollectionsPanel({ user_id, logged_id }: Props) {

    const dbcollection = await CollectionsDBModel.findOne({ user_id });

    return (<div id="colpanel" class="max-h-96 overflow-y-scroll">
        <script type="module" src="/public/js/collectiondownloader.js" />
        {user_id === logged_id ?
            <form class="flex flex-row items-center gap-2 mb-2" hx-swap="outerHTML" hx-target="#colpanel" hx-trigger="submit"
                hx-encoding='multipart/form-data' hx-post={`/users/${user_id}/collections`} >
                <input type="file" name="collection" class="file-input file-input-bordered w-full max-w-xs" />
                <button type="submit" class="btn btn-primary">
                    Send
                </button>
                <div class="htmx-indicator flex flex-row items-center gap-4">
                    <span class="loading loading-spinner" />
                    <span>Processing beatmaps (this might take a while)</span>
                </div>
            </form> : <></>
        }
        <div class="flex flex-col gap-4">
            {
                dbcollection?.collections.map((c) => (
                    <div class="flex flex-col items-start gap-1 p-2 bg-base-300 rounded-lg">
                        <button class="h-8 cursor-pointer link link-info flex flex-row gap-2 items-center" id={`btn_download_${c.name}`}
                            onclick="downloadCollection(this.id);" data-name={c.name}
                            data-ids={JSON.stringify(c.beatmapsMd5.map(h => h))}>
                            <i class="regular fa-regular fa-file-zipper" />
                            <span class="loading loading-spinner loading-xs"
                                style={{ display: "none" }} />
                            <label class="cursor-pointer">
                                Download
                            </label>
                            <progress class="progress progress-success w-56" value={0} max={c.beatmapsMd5.length}
                                style={{ display: "none" }} />
                            <span class="progress-indicator" style={{ display: "none" }}>
                                0/{c.beatmapsMd5.length}
                            </span>
                        </button>
                        <div class="collapse collapse-arrow bg-info bg-opacity-50 has-[:checked]:bg-gradient-to-b from-info to-base-200 p-0.5">
                            <input type="checkbox" name="collections-acordion" />
                            <div class="collapse-title bg-base-200 rounded-lg grow">
                                {c.name} ({c.beatmapsMd5.length})
                            </div>
                            <div class="collapse-content p-0 m-0">
                                <div class="flex flex-col gap-2 p-2">
                                    {
                                        // c.beatmaps.map((b) => (
                                        //     <BeatmapCollectionCard beatmap={b} />
                                        // ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>)
}

export default UserCollectionsPanel;
