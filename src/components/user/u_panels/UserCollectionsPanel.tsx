import { CollectionDBModel } from "@/src/models/CollectionDB";
import type { MinoBeatmap } from "@/src/types/beatmaps";
import { BeatmapCollectionPlaceholderCard } from "../../beatmap/BeatmapCollectionCard";

type Props = {
    user_id: number,
    logged_id: number | undefined
}

type Collections2 = {
    name: string,
    beatmaps: MinoBeatmap[]
}

async function UserCollectionsPanel({ user_id, logged_id }: Props) {

    const dbcollection = await CollectionDBModel.findOne({ user_id });

    // const minocollections: Collections2[] = [];
    // if (dbcollection) {
    //     for (let i = 0; i < dbcollection.collections.length; i++) {
    //         const c = dbcollection.collections[i];
    //         const cbs: MinoBeatmap[] = [];
    //         for (let j = 0; j < c.beatmapsMd5.length; j++) {
    //             const h = c.beatmapsMd5[j];
    //             const res = await fetch(`https://catboy.best/api/v2/md5/${h}`);
    //             const beatmap = await res.json() as MinoBeatmap;
    //             cbs.push(beatmap);
    //         }
    //         minocollections.push({
    //             name: String(c.name),
    //             beatmaps: cbs,
    //         });
    //     }
    // }

    return (<div id="colpanel">
        <script type="module" src="/public/js/collectiondownloader.js" />
        {user_id === logged_id ?
            <form class="flex flex-row items-center gap-2 mb-2" hx-indicator="#send-indicator" hx-swap="outerHTML" hx-target="#colpanel" hx-trigger="submit"
                hx-encoding='multipart/form-data' hx-post={`/users/${user_id}/collections`} >
                <input type="file" name="collection" class="file-input file-input-bordered w-full max-w-xs" />
                <button type="submit" class="btn btn-primary">
                    Send
                </button>
                <span class="loading loading-spinner htmx-indicator" id="send-indicator" />
            </form> : <></>
        }
        <div class="flex flex-col gap-4">
            {
                dbcollection?.collections.map((c) => (
                    <div class="flex flex-row gap-2 items-center">
                        <button onclick="downloadCollection(this.id);"
                            class="px-2 btn btn-info text-info-content border-none"
                            id={`btn_download_${c.name}`} data-name={c.name}
                            data-ids={JSON.stringify(c.beatmapsMd5.map(h => h))}>
                            <i class="px-2 regular fa-regular fa-file-zipper" />
                            <span class="loading loading-spinner loading-sm" style={{ display: "none" }} />
                        </button>
                        <div class="collapse collapse-arrow bg-info bg-opacity-50 has-[:checked]:bg-gradient-to-b from-info to-base-200 p-0.5">
                            <input type="checkbox" name="collections-acordion" />
                            <div class="collapse-title bg-base-200 rounded-lg grow">
                                {c.name} ({c.beatmapsMd5.length})
                            </div>
                            <div class="collapse-content p-0 m-0">
                                <div class="flex flex-col">
                                    {
                                        c.beatmapsMd5.map((h) => (
                                            <BeatmapCollectionPlaceholderCard hash={h} />
                                        ))
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
