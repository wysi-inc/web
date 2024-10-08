import type { Beatmapset } from "@/src/types/beatmaps";
import { DiffIconLink } from "./DiffIcon";
import CardControls from "../web/CardControls";
import StatusBadge from "./StatusBadge";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import type { Mode } from "@/src/types/osu";

function BeatmapsetCard(p: { b_set: Beatmapset }) {

    // const cardImg = `https://assets.ppy.sh/beatmaps/${p.b_set.id}/covers/card.jpg?${p.b_set.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${p.b_set.id}l.jpg`;
    const DIFF_LIMIT = 5;

    const beatmaps = p.b_set?.beatmaps?.sort((a, b) => a.mode === b.mode ?
        a.difficulty_rating - b.difficulty_rating :
        a.mode_int - b.mode_int
    );

    return (
        <div class="group flex flex-row bg-base-300 rounded-lg shadow-lg">
            <div class="flex flex-col bg-neutral rounded-lg shadow-lg grow">
                <div class="flex flex-col rounded-lg shadow-lg" data-bg={cardImg}
                    style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="relative bg-base-300 bg-opacity-75 grid grid-cols-4 rounded-lg backdrop-blur-sm">
                        <div class="group rounded-lg flex items-center justify-center" data-bg={cardImg}
                            style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <AudioPlayButton beatmap_id={p.b_set.beatmaps?.[0].id || 0}
                                set_id={p.b_set.id}
                                beatmap_title={p.b_set.title}
                                beatmap_artist={p.b_set.artist}
                            />
                        </div>
                        <div class="flex flex-col px-2 py-1 grow col-span-3">
                            <Link css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${p.b_set.id}`}>{p.b_set.title}</Link>
                            <span class="text-neutral-content text-opacity-75 text-sm truncate">by {p.b_set.artist}</span>
                            <Link css="text-neutral-content text-opacity-75 text-sm hover:underline underline-offset-2 truncate" url={`/users/${p.b_set?.user?.id || p.b_set.user_id}`}>mapped by {p.b_set?.user?.username || p.b_set?.creator}</Link>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-opacity-75 text-base-content p-0.5 flex flex-row flex-wrap gap-2 items-center">
                    <StatusBadge status={p.b_set.status} />
                    {beatmaps ? <>
                        <div class="flex flex-row gap-1">
                            {beatmaps.map((beatmap, i) => i < DIFF_LIMIT &&
                                <DiffIconLink setId={p.b_set.id} diffId={beatmap.id}
                                    diff={beatmap.difficulty_rating} size={16}
                                    mode={beatmap.mode as Mode} name={beatmap.version} />)
                            }
                        </div>
                        {beatmaps.length > DIFF_LIMIT &&
                            <div class="badge badge-sm badge-info">+{beatmaps.length - DIFF_LIMIT}</div>
                        } </> : null
                    }
                    <div class="ms-auto text-xs flex flex-row gap-2">
                        <span class="tooltip" data-tip={p.b_set?.favourite_count.toLocaleString()}>
                            <i class="fa-solid fa-heart" />
                        </span>
                        <span class="tooltip" data-tip={p.b_set?.play_count.toLocaleString()}>
                            <i class="fa-solid fa-arrow-rotate-left" />
                        </span>
                    </div>
                </div>
            </div>
            <CardControls set_id={p.b_set.id} />
        </div>
    )
}

export default BeatmapsetCard;
