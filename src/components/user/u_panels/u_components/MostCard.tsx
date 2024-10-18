import { DiffIconLink } from "@/src/components/beatmap/DiffIcon";
import StatusBadge from "@/src/components/beatmap/StatusBadge";
import AudioPlayButton from "@/src/components/web/AudioPlayButton";
import CardControls from "@/src/components/web/CardControls";
import Link from "@/src/components/web/Link";
import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";

function MostCard(p: {
    position: number;
    plays: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
}) {
    // const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${p.beatmapset.id}l.jpg`;
    return (<>
        <div class="group/card flex flex-row rounded-lg bg-base-300 shadow-lg">
            <div class="flex grow flex-col rounded-lg bg-neutral text-white shadow-lg">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="grid grid-cols-4 rounded-lg bg-base-300 bg-opacity-75 backdrop-blur-sm">
                        <div class="group/audio_card flex items-center justify-center rounded-lg"
                            style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <AudioPlayButton
                                map_id={p.beatmap.id}
                                set_id={p.beatmapset.id}
                                set_title={p.beatmapset.title}
                                set_artist={p.beatmapset.artist}
                            />
                        </div>
                        <div class="col-span-3 flex grow flex-col px-2 py-1">
                            <Link css="truncate text-lg text-base-content underline-offset-2 hover:underline" url={`/beatmapsets/${p.beatmapset.id}`}>{p.beatmapset.title}</Link>
                            <p class="truncate text-sm text-neutral-content text-opacity-75">by {p.beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap items-center gap-2 p-0.5 text-sm text-base-content text-opacity-75">
                    <StatusBadge status={p.beatmapset.status} />
                    <Link url={`/users/${p.beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={p.beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    <DiffIconLink setId={p.beatmapset.id} diffId={p.beatmap.id}
                        diff={p.beatmap.difficulty_rating} size={20}
                        mode={p.beatmap.mode} name={p.beatmap.version} />
                    <div class="ms-auto flex flex-row items-center gap-2">
                        <i class="fa-sm fa-solid fa-arrow-rotate-left" />
                        <div>{p.plays}</div>
                    </div>
                    <div>#{p.position}</div>
                </div>
            </div>
            <CardControls set_id={p.beatmapset.id} />
        </div>
    </>);
}

export default MostCard;
