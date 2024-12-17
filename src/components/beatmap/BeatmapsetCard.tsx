import type { Beatmapset } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";
import AudioPlayButton from "../web/AudioPlayButton";
import CardControls from "../web/CardControls";
import Link from "../web/Link";
import { DiffIconLink } from "./DiffIcon";
import StatusBadge from "./StatusBadge";

function BeatmapsetCard(p: { b_set: Beatmapset }) {
    // const cardImg = `https://assets.ppy.sh/beatmaps/${p.b_set.id}/covers/card.jpg?${p.b_set.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${p.b_set.id}l.jpg`;
    const DIFF_LIMIT = 5;

    const beatmaps = p.b_set?.beatmaps?.sort((a, b) => (a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int));

    if (!beatmaps) return <></>;

    return (
        <div class="group/card flex flex-row rounded-lg bg-base-300 shadow-lg">
            <div class="flex grow flex-col rounded-lg bg-neutral shadow-lg">
                <div
                    class="flex flex-col rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                >
                    <div class="relative grid grid-cols-4 rounded-lg bg-base-300 bg-opacity-75 backdrop-blur-sm">
                        <div
                            class="group/audio_card flex items-center justify-center rounded-lg"
                            style={{
                                backgroundImage: `url('${cardImg}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <AudioPlayButton map_id={beatmaps[0].id} set_id={p.b_set.id} set_title={p.b_set.title} set_artist={p.b_set.artist} />
                        </div>
                        <div class="col-span-3 flex grow flex-col px-2 py-1">
                            <Link css="truncate text-lg text-base-content underline-offset-2 hover:underline" url={`/beatmapsets/${p.b_set.id}`}>
                                {p.b_set.title}
                            </Link>
                            <span class="truncate text-sm text-neutral-content text-opacity-75">by {p.b_set.artist}</span>
                            <Link
                                css="truncate text-sm text-neutral-content text-opacity-75 underline-offset-2 hover:underline"
                                url={`/users/${p.b_set?.user?.id || p.b_set.user_id}`}
                            >
                                mapped by {p.b_set?.user?.username || p.b_set?.creator}
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap items-center gap-2 p-0.5 text-sm text-base-content text-opacity-75">
                    <StatusBadge status={p.b_set.status} />
                    <div class="flex flex-row gap-1">
                        {beatmaps.map(
                            (beatmap, i) =>
                                i < DIFF_LIMIT && (
                                    <DiffIconLink
                                        setId={p.b_set.id}
                                        diffId={beatmap.id}
                                        diff={beatmap.difficulty_rating}
                                        size={16}
                                        mode={beatmap.mode as Mode}
                                        name={beatmap.version}
                                    />
                                )
                        )}
                    </div>
                    {beatmaps.length > DIFF_LIMIT && <div class="badge badge-info badge-sm">+{beatmaps.length - DIFF_LIMIT}</div>}
                    <div class="ms-auto flex flex-row gap-2 text-xs">
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
    );
}

export default BeatmapsetCard;
