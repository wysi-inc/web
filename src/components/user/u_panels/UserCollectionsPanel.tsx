import { CollectionDBModel } from "@/src/models/CollectionDB";
import BeatmapCollectionCard from "../../beatmap/BeatmapCollectionCard";

type Props = {
    user_id: number,
    logged_id: number | undefined
}

async function UserCollectionsPanel({ user_id, logged_id }: Props) {

    const dbcollection = await CollectionDBModel.findOne({ user_id });

    return (<>
        {user_id === logged_id ?
            <form class="flex flex-row items-end gap-2" hx-swap="none" hx-trigger="submit"
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
                dbcollection?.collections.map((c) => (
                    <div class="collapse collapse-arrow bg-info has-[:checked]:bg-gradient-to-b from-info to-base-200 p-0.5">
                        <input type="checkbox" name="collections-acordion" />
                        <div class="collapse-title p-0 flex flex-row items-center rounded-lg">
                            <button class="btn btn-sm btn-ghost text-info-content border-none pt-0 px-4 shadow-none">
                                <i class="fa-regular fa-file-zipper" />
                            </button>
                            <div class="bg-base-200 rounded-lg grow p-4">
                                {c.name} ({c.beatmapsMd5.length})
                            </div>
                        </div>
                        <div class="collapse-content p-0 bg-gradient-to-b from-info to-base-200 ">
                            <div class="flex flex-col">
                                {c.beatmapsMd5.map((h) => (
                                    <BeatmapCollectionCard hash={h} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}

export default UserCollectionsPanel;
