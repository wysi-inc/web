import { CollectionDBModel } from "@/src/models/CollectionDB";
import BeatmapCollectionCard from "../../beatmap/BeatmapCollectionCard";
import type { MinoBeatmap } from "@/src/types/beatmaps";

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

    const minocollections: Collections2[] = [];
    if (dbcollection) {
        for (let i = 0; i < dbcollection.collections.length; i++) {
            const c = dbcollection.collections[i];
            const cbs: MinoBeatmap[] = [];
            for (let j = 0; j < c.beatmapsMd5.length; j++) {
                const h = c.beatmapsMd5[j];
                const res = await fetch(`https://catboy.best/api/v2/md5/${h}`);
                const beatmap = await res.json() as MinoBeatmap;
                cbs.push(beatmap);
            }
            minocollections.push({
                name: String(c.name),
                beatmaps: cbs,
            });
        }
    }

    return (<div id="colpanel">
        <script type="module" src="/public/js/collectiondownloader.js" />
        {user_id === logged_id ?
            <form class="flex flex-row items-end gap-2 mb-2" hx-target="#colpanel" hx-trigger="submit"
                hx-encoding='multipart/form-data' hx-post={`/users/${user_id}/collections`} >
                <label class="form-control w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">collections.db</span>
                    </div>
                    <input type="file" name="collection" class="file-input file-input-bordered w-full max-w-xs" />
                </label>
                <button type="submit" class="btn btn-primary">
                    Send
                </button>
            </form> : <></>
        }
        <div class="flex flex-col gap-4">
            {
                minocollections.map((c) => (
                    <div class="flex flex-row gap-2 items-center">
                        <button onclick="downloadCollection(this.id);"
                            class="btn btn-info text-info-content border-none"
                            id={`btn_download_${c.name}`} data-name={c.name}
                            data-ids={JSON.stringify(c.beatmaps.map(b => b.set.id))}>
                            <i class="fa-regular fa-file-zipper" />
                        </button>
                        <div class="collapse collapse-arrow bg-info has-[:checked]:bg-gradient-to-b from-info to-base-200 p-0.5">
                            <input type="checkbox" name="collections-acordion" />
                            <div class="collapse-title bg-base-200 rounded-lg grow">
                                {c.name} ({c.beatmaps.length})
                            </div>
                            <div class="collapse-content p-0 m-0">
                                <div class="flex flex-col">
                                    {c.beatmaps.map((b) => (
                                        <BeatmapCollectionCard beatmap={b} />
                                    ))}
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
