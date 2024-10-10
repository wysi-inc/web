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
        <div class="group/card rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-4 rounded-lg backdrop-blur-sm">
                        <div class="group/audio_card rounded-lg flex items-center justify-center"
                            style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <AudioPlayButton
                                beatmap_id={p.beatmap.id}
                                set_id={p.beatmapset.id}
                                beatmap_title={p.beatmapset.title}
                                beatmap_artist={p.beatmapset.artist}
                            />
                        </div>
                        <div class="flex flex-col py-1 px-2 grow col-span-3">
                            <Link css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${p.beatmapset.id}`}>{p.beatmapset.title}</Link>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate">by {p.beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-opacity-75 text-base-content p-0.5 flex flex-row flex-wrap gap-2 items-center">
                    <StatusBadge status={p.beatmapset.status} />
                    <Link url={`/users/${p.beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={p.beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    <DiffIconLink setId={p.beatmapset.id} diffId={p.beatmap.id}
                        diff={p.beatmap.difficulty_rating} size={20}
                        mode={p.beatmap.mode} name={p.beatmap.version} />
                    <div class="flex flex-row items-center gap-2 ms-auto">
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
