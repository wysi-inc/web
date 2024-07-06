import { BeatmapCollectionCard } from "./BeatmapCollectionCard";
import LoadMoreButton from "../web/LoadMoreButton";
import { User } from "@/src/models/User";

type Props = {
    user_id: number,
    collection_name: string,
    offset?: number
}

async function BeatmapCollectionList({ user_id, collection_name, offset }: Props) {

    if (!collection_name) return (<></>);
    if (offset === undefined) return (<></>);

    const decoded_collection_name = decodeURIComponent(collection_name);

    const LIMIT = 20;

    const user = await User.findOne({ user_id });

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
