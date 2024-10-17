import { api_user_most_played } from "@/src/api/user";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { RESULT_LIMIT } from "@/src/libs/constants";
import type { UserCookie } from "@/src/types/users";
import MostCard from "./MostCard";

async function UserMostList(p: {
    id: number,
    offset: number,
    limit: number,
    user?: UserCookie | null
}) {

    const res = await api_user_most_played(p.id, {
        offset: p.offset,
        limit: p.limit
    }, p.user);

    if (res.error) return <></>;

    const plays = res.data;

    if (plays.length === 0 && p.offset === 0) return <div>This user hasn't played yet</div>;

    return (<>
        {plays.map((play, i) =>
            <MostCard plays={play.count} position={i + p.offset + 1}
                beatmap={play.beatmap as any}
                beatmapset={play.beatmapset as any} />
        )}
        {plays.length >= p.limit ?
            <LoadMoreButton url={`/users/${p.id}/0/lists/most?offset=${p.offset + p.limit}&limit=${RESULT_LIMIT.USER.MOST}`} />
            : null
        }
    </>)
}

export default UserMostList;
