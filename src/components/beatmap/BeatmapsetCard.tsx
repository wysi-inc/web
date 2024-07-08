import type { Beatmapset, BeatmapsetStatus } from "@/src/types/beatmaps";
import { DiffIconLink } from "./DiffIcon";
import CardControls from "../web/CardControls";
import StatusBadge from "./StatusBadge";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import type { Mode } from "@/src/types/osu";

type Props = {
    beatmapset: Beatmapset,
}

const BeatmapsetCard = ({ beatmapset }: Props) => {

    const diffs = beatmapset.beatmaps;
    // const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${beatmapset.id}l.jpg`;
    const DIFF_LIMIT = 5;

    return (
        <div class="group flex flex-row bg-base-300 rounded-lg shadow-lg">
            <div class="flex flex-col bg-neutral rounded-lg shadow-lg grow">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{
                        backgroundImage: `url(${cardImg}), url('/public/img/fallback.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-4 rounded-lg backdrop-blur-sm">
                        <div class="group rounded-lg flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${cardImg}), url('/public/img/fallback.webp')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>
                            <AudioPlayButton css="hidden bg-opacity-50 hover:bg-opacity-75 border-none group-hover:flex btn btn-sm w-full h-full"
                                beatmap_id={beatmapset.beatmaps[0].id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                        </div>
                        <div class="flex flex-col px-4 py-2 grow col-span-3">
                            <Link css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${beatmapset.id}`}>{beatmapset.title}</Link>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="text-opacity-75 text-base-content flex flex-row py-1 px-2 gap-2 items-center">
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <Link url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    {diffs.sort((a, b) =>
                        a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int)
                        .map((beatmap, i) => i < DIFF_LIMIT &&
                            <DiffIconLink setId={beatmapset.id} diffId={beatmap.id}
                                diff={beatmap.difficulty_rating} size={20}
                                mode={beatmap.mode as Mode} name={beatmap.version} />)
                    }
                    {diffs.length > DIFF_LIMIT &&
                        <div class="badge badge-info">+{beatmapset.beatmaps.length - DIFF_LIMIT}</div>
                    }
                </div>
            </div>
            <CardControls set_id={beatmapset.id} />
        </div>
    )
}

export default BeatmapsetCard;
