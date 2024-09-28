import MostCard from "./MostCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { apicall } from "@/src/tasks/logs";

type Props = {
    id: number;
    offset: number;
    limit: number;
}

const UserMostList = async (p: Props) => {

    const plays = await v2.user.beatmaps.most_played(p.id, {
        offset: p.offset,
        limit: p.limit
    });
    apicall();

    if (plays.length === 0 && p.offset === 0) return <div>This user hasn't played yet</div>;

    return (<>
        {plays.map((play, i) =>
            <MostCard plays={play.count} position={i + p.offset + 1}
                beatmap={play.beatmap as any}
                beatmapset={play.beatmapset as any} />
        )}
        {plays.length >= p.limit ?
            <LoadMoreButton url={`/users/${p.id}/0/lists/most?offset=${p.offset + p.limit}&limit=20`} />
            : <></>}
    </>)
}

export default UserMostList;
