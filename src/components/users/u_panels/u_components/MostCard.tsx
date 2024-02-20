import DiffIcon from "@/src/components/beatmaps/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import { colors } from "@/src/resources/colors";
import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";

type Props = {
    position: number;
    plays: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
}

const MostCard = (props: Props) => {

    const beatmapset = props.beatmapset;
    const beatmap = props.beatmap;

    const listImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/list.jpg?${beatmapset.id}`;
    const coverImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover@2x.jpg?${beatmapset.id}`;

    return (
        <div class="rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg overflow-hidden grow flex flex-col shadow-lg" style={`background-image: url(${coverImg}); background-size: cover;`}>
                    <div class="flex flex-row grow" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <img src={listImg} onerror="this.src='/public/img/fallback.png'" alt="cover"
                            class="rounded-lg" style={{
                                height: "100%",
                                width: "100px",
                                objectFit: "cover"
                            }} />
                        <div class="flex flex-col p-4">
                            <span class="text-lg m-0 p-0">{beatmapset.title}<span class="text-sm text-gray-400"> by {beatmapset.artist}</span></span>
                            <span class="text-md m-0 p-0">[{beatmap.version}]<span class="text-sm text-gray-400"> by {beatmapset.creator}</span></span>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row justify-between gap-2">
                    <div class="flex flex-row gap-2">
                        <div class="badge" style={`color: #000; background-color: ${colors.beatmap[beatmapset.status]}`}>
                            {beatmapset.status}
                        </div>
                        <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                            diff={beatmap.difficulty_rating} size={20}
                            mode={beatmap.mode} name={beatmap.version} />
                    </div>
                    <div class="flex flex-row gap-2">
                        <div>#{props.position}</div>
                        <div class="flex flex-row items-center gap-2">
                            <i class="fa-solid fa-arrow-rotate-left" />
                            <div>
                                {props.plays}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardControls beatmap_id={beatmap.id} set_id={beatmapset.id} />
        </div>
    )
}

export default MostCard;
