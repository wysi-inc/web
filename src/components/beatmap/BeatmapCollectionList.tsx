import { BeatmapCollectionCard } from "./BeatmapCollectionCard";
import LoadMoreButton from "../web/LoadMoreButton";
import { UserModel } from "@/src/models/User";

async function BeatmapCollectionList(p: {
    user_id: number,
    collection_name: string,
    offset: number
}) {

    const decoded_collection_name = decodeURIComponent(p.collection_name);

    const LIMIT = 20;

    const user = await UserModel.findOne({ user_id: p.user_id });

    if (!user) return (<></>);
    if (!user.collections) return (<></>);

    let collection;
    for (let i = 0; i < user.collections.length; i++) {
        const c = user.collections[i];
        if (c.name === decoded_collection_name) {
            collection = c;
            break;
        }
    }

    if (!collection) return (<></>);

    let hashes: string[] = [];

    for (let i = p.offset; i < p.offset + LIMIT; i++) {
        if (!collection.beatmapsMd5[i]) break;
        hashes.push(collection.beatmapsMd5[i]);
    }

    return (<>
        {hashes.map((h) =>
            <BeatmapCollectionCard hash={h} />
        )}
        {hashes.length >= LIMIT ?
            <LoadMoreButton url={`/users/${p.user_id}/0/lists/collections/${p.collection_name}?offset=${p.offset + LIMIT}`} />
            : <></>
        }
    </>);
}

export default BeatmapCollectionList;
