import DiffIcon from "@/src/components/beatmap/DiffIcon";
import AudioPlayButton from "@/src/components/web/AudioPlayButton";
import CardControls from "@/src/components/web/CardControls";
import HxA from "@/src/components/web/HxA";
import { colors } from "@/src/libs/colors";
import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";

type Props = {
    position: number;
    plays: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
}

const MostCard = ({ beatmap, beatmapset, position, plays }: Props) => {

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    return (
        <div class="group rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{
                        backgroundImage: `url(${cardImg}), url('/public/img/fallback.webp')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="bg-base-300 bg-opacity-75 flex flex-row rounded-lg backdrop-blur-sm">
                        <div class="group rounded-lg w-24 flex items-center justify-center"
                            style={{
                                backgroundImage: `url(${cardImg}), url('/public/img/fallback.webp')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}>
                            <AudioPlayButton css="hidden bg-opacity-50 hover:bg-opacity-75 border-none group-hover:flex btn btn-sm w-full h-full"
                                beatmap_id={beatmap.id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                        </div>
                        <div class="flex flex-col py-2 px-4 max-w-52 lg:max-w-72">
                            <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${beatmapset.id}`}>{beatmapset.title}</HxA>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate">by {beatmapset.artist}</p>
                        </div>
                    </div>
                </div>
                <div class="text-opacity-75 text-base-content py-1 px-2 flex flex-row justify-between items-center gap-2">
                    <div class="flex flex-row gap-2">
                        <div class="badge" style={`color: #000; background-color: ${(colors.beatmap as any)[beatmapset.status]}`}>
                            {beatmapset.status}
                        </div>
                        <HxA url={`/users/${beatmapset.user_id}`}>
                            <div class="tooltip" data-tip={beatmapset.creator}>
                                <i class="fa-solid fa-user-pen" />
                            </div>
                        </HxA>
                        <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                            diff={beatmap.difficulty_rating} size={20}
                            mode={beatmap.mode} name={beatmap.version} />
                    </div>
                    <div class="flex flex-row items-center gap-2 text-base-content">
                        <div class="flex flex-row items-center gap-2">
                            <i class="fa-sm fa-solid fa-arrow-rotate-left" />
                            <div>{plays}</div>
                        </div>
                        <div>#{position}</div>
                    </div>
                </div>
            </div>
            <CardControls
                beatmap_id={beatmap.id}
                set_id={beatmapset.id}
            />
        </div>
    )
}

export default MostCard;
