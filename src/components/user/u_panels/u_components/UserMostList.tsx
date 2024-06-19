import { v2 } from "osu-api-extended";
import MostCard from "./MostCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";

type Props = {
    id: number;
    offset: number;
    limit: number;
}

const UserMostList = async (props: Props) => {

    const plays = await v2.user.beatmaps.most_played(props.id, {
        offset: props.offset,
        limit: props.limit
    });

    if (plays.length === 0) return <div>No plays found</div>;

    return (<>
        {plays.map((play, i) =>
            <MostCard plays={play.count} position={i + props.offset + 1}
                beatmap={play.beatmap as any}
                beatmapset={play.beatmapset as any} />
        )}
        {plays.length >= props.limit ?
            <LoadMoreButton url={`/users/${props.id}/0/lists/most?offset=${props.offset + props.limit}&limit=20`} />
            : <></>}
    </>)
}

export default UserMostList;
