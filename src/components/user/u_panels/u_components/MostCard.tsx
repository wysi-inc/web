import { DiffIconLink } from "@/src/components/beatmap/DiffIcon";
import StatusBadge from "@/src/components/beatmap/StatusBadge";
import AudioPlayButton from "@/src/components/web/AudioPlayButton";
import CardControls from "@/src/components/web/CardControls";
import Link from "@/src/components/web/Link";
import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";

type Props = {
    position: number;
    plays: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
}

const MostCard = ({ beatmap, beatmapset, position, plays }: Props) => {

    // const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${beatmapset.id}l.jpg`;

    return (
        <div class="rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="flex flex-col rounded-lg shadow-lg" data-bg={cardImg}
                    style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-4 rounded-lg backdrop-blur-sm">
                        <div class="group rounded-lg flex items-center justify-center" data-bg={cardImg}
                            style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <AudioPlayButton
                                beatmap_id={beatmap.id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                        </div>
                        <div class="flex flex-col px-4 py-2 grow col-span-3">
                            <Link css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${beatmapset.id}`}>{beatmapset.title}</Link>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate">by {beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-opacity-75 text-base-content p-0.5 flex flex-row flex-wrap gap-2 items-center">
                    <StatusBadge status={beatmapset.status} />
                    <Link url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    <DiffIconLink setId={beatmapset.id} diffId={beatmap.id}
                        diff={beatmap.difficulty_rating} size={20}
                        mode={beatmap.mode as Mode} name={beatmap.version} />
                    <div class="flex flex-row items-center gap-2 ms-auto">
                        <i class="fa-sm fa-solid fa-arrow-rotate-left" />
                        <div>{plays}</div>
                    </div>
                    <div>#{position}</div>
                </div>
            </div>
            <CardControls set_id={beatmapset.id} />
        </div>
    )
}

export default MostCard;
