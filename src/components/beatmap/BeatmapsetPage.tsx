import moment from "moment";
import { getBeatmap } from "@/src/get/beatmaps";
import HxA from "../web/HxA";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";

type Props = {
    id: number,
}

const BeatmapsetPage = async (props: Props) => {

    const beatmapset = await getBeatmap(props.id);

    if ((beatmapset as any).error === null) return <h1>Not found</h1>;
    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    const diff = beatmapset.beatmaps[0];

    const hasLeaderboard = beatmapset.status === "ranked" || beatmapset.status === "approved" || beatmapset.status === "loved" || beatmapset.status === "qualified";
    const isLocked = beatmapset.status === "ranked" || beatmapset.status === "approved" || beatmapset.status === "loved";

    return (
        <div class="flex flex-col rounded-lg shadow-lg"
            style={{
                background: `linear-gradient(#000000cc, #000000cc), url(${cardImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div class="flex flex-row rounded-lg p-4" style={{ backdropFilter: "blur(8px)" }}>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-row gap-4">
                        <img src={cardImg} class="rounded-lg" alt="cover" loading="lazy"
                            style={{
                                width: "100px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }} />
                        <div class="flex flex-col gap-1 justify-between">
                            <h1 class="text-lg font-bold text-white">
                                {beatmapset.title}
                            </h1>
                            <p class="text-sm text-gray-400">
                                by {beatmapset.artist}
                            </p>
                            <HxA url={`/users/${beatmapset.user_id}`}>
                                <p class="text-sm text-gray-400">
                                    mapped by {beatmapset.creator}
                                </p>
                            </HxA>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <StatusBadge status={beatmapset.status} />
                        <div>{moment(isLocked ? beatmapset.ranked_date : beatmapset.submitted_date).format("MMMM Do YYYY")}</div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-1 p-2 rounded-lg" style={{ backgroundColor: '#ffffff22' }}>
                        {beatmapset.beatmaps.sort((a, b) =>
                            a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int)
                            .map(beatmap =>
                                <div class='flex items-center justify-center w-8 h-8 rounded-md'
                                    style={{
                                        outline: `#ffffff99 ${diff?.id === beatmap.id ? 'solid 2px' : 'none'}`
                                    }}>
                                    <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                                        diff={beatmap.difficulty_rating} size={20}
                                        mode={beatmap.mode} name={beatmap.version} />
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeatmapsetPage;
