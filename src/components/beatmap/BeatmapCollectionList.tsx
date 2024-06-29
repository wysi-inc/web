import { CollectionsDBModel, type CollectionDB } from "@/src/models/CollectionDB";
import { BeatmapCollectionCard } from "./BeatmapCollectionCard";
import LoadMoreButton from "../web/LoadMoreButton";

type Props = {
    user_id: number,
    collection_name?: string,
    offset?: number
}

async function BeatmapCollectionList({ user_id, collection_name, offset }: Props) {

    if (!collection_name) return (<></>);
    if (offset === undefined) return (<></>);

    const decoded_collection_name = decodeURIComponent(collection_name);

    const LIMIT = 20;

    const db_collection = await CollectionsDBModel.findOne({ user_id });

    let collection: CollectionDB | null = null;

    if (db_collection === null) return (<></>);

    for (let i = 0; i < db_collection.collections.length; i++) {
        const c = db_collection.collections[i];
        if (c.name === decoded_collection_name) {
            collection = c;
        }
    }

    if (collection === null) return (<></>);

    let hashes: string[] = [];

    for (let i = offset; i < offset + LIMIT; i++) {
        if (!collection.beatmapsMd5[i]) break;
        hashes.push(collection.beatmapsMd5[i]);
    }

    return (<>
        {hashes.map((h) =>
            <BeatmapCollectionCard hash={h} />
        )}
        {hashes.length >= LIMIT ?
            <LoadMoreButton url={`/users/${user_id}/0/lists/collections/${collection_name}?offset=${offset + LIMIT}`} />
            : <></>
        }
    </>);
}

export default BeatmapCollectionList;
