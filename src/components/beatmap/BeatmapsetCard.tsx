import type { Beatmapset, BeatmapsetStatus } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import CardControls from "../web/CardControls";
import HxA from "../web/HxA";
import StatusBadge from "./StatusBadge";
import AudioPlayButton from "../web/AudioPlayButton";

type Props = {
    beatmapset: Beatmapset,
}

const BeatmapsetCard = ({ beatmapset }: Props) => {

    const diffs = beatmapset.beatmaps;
    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    return (
        <div class="group flex flex-row bg-base-300 rounded-lg shadow-lg">
            <div class="transition duration-300 ease-in-out text-white flex flex-col bg-neutral rounded-lg shadow-lg grow">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{
                        background: `url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="bg-base-300 bg-opacity-75 flex flex-row rounded-lg backdrop-blur-sm">
                        <div class="group rounded-lg w-24 flex items-center justify-center"
                            style={{
                                background: `url(${cardImg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>
                            <AudioPlayButton css="hidden group-hover:flex btn btn-ghost btn-sm w-full h-full"
                                beatmap_id={beatmapset.beatmaps[0].id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                        </div>
                        <div class="flex flex-col py-2 w-72 px-4 ">
                            <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmapset.id}`}>{beatmapset.title}</HxA>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="text-opacity-75 text-base-content flex flex-row py-1 px-2 gap-2 items-center">
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <HxA url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </HxA>
                    {diffs.sort((a, b) =>
                        a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int)
                        .map((beatmap, i) => i < 9 &&
                            <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                                diff={beatmap.difficulty_rating} size={20}
                                mode={beatmap.mode} name={beatmap.version} />)
                    }
                    {diffs.length > 9 &&
                        <div class="badge badge-info">+{beatmapset.beatmaps.length - 9}</div>
                    }
                </div>
            </div>
            <CardControls
                beatmap_id={beatmapset.beatmaps[0].id}
                set_id={beatmapset.id}
            />
        </div>
    )
}

export default BeatmapsetCard;
