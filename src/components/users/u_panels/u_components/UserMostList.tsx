import { v2 } from "osu-api-extended";
import MostCard from "./MostCard";

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

    if (plays.length === 0) return <div>No beatmaps found</div>;

    return (<>
        {plays.map((play, i) =>
            <MostCard plays={play.count} position={i + props.offset + 1}
                beatmap={play.beatmap as any}
                beatmapset={play.beatmapset as any} />
        )}
        {plays.length < props.limit ? null :
            <>
                <button class="btn btn-success btn-sm flex flex-row gap-2 col-span-full"
                    hx-post={`/users/${props.id}/0/most/list?offset=${props.offset + props.limit}&limit=20`}
                    hx-swap="outerHTML">
                    <div>Load more</div>
                    <span class="htmx-indicator loading loading-spinner loading-md" />
                </button>
            </>}
    </>)
}

export default UserMostList;
