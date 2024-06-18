import { CollectionsDBModel, type CollectionDB } from "@/src/models/CollectionDB";
import { BeatmapCollectionCard } from "./BeatmapCollectionCard";

type Props = {
    user_id: number,
    collection_name: string,
    offset: number
}

async function BeatmapCollectionList({ user_id, collection_name, offset }: Props) {

    const db_collection = await CollectionsDBModel.findOne({ user_id });

    let collection: CollectionDB | null = null;

    if (db_collection === null) return (<></>);

    for (let i = 0; i < db_collection.collections.length; i++) {
        const c = db_collection.collections[i];
        if (c.name === collection_name) {
            collection = c;
        }
    }

    if (collection === null) return (<></>);

    let hashes: string[] = [];

    for (let i = offset; i < offset + 20; i++) {
        if (collection.beatmapsMd5[i]) break;
        hashes.push(collection.beatmapsMd5[i]);
    }

    return (<>
        {hashes.map((h) =>
            <BeatmapCollectionCard hash={h} />
        )}
        {hashes.length >= 20 ?
            <button hx-post={`/user/collections/list/${collection_name}?offset=${offset + 20}`}
                hx-trigger="click" hx-swap="outerHTML"
                hx-boost="false" hx-include="#search-form"
                class="col-span-full btn btn-success btn-sm flex flex-row gap-2">
                Load more
            </button> : <></>
        }
    </>);
}

export default BeatmapCollectionList;
