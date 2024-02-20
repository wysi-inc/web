import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import { colors } from "@/src/resources/colors";
import CardControls from "../web/CardControls";

type Props = {
    beatmapset: Beatmapset,
}
const BeatmapsetCard = (props: Props) => {

    const beatmapset = props.beatmapset;

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    return (
        <div class="rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg overflow-hidden grow flex flex-col shadow-lg"
                    style={{
                        backgroundImage: `url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundOrigin: "border-box",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div class="flex flex-row grow" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <img src={cardImg} onerror="this.src='/public/img/fallback.png'"
                            class="rounded-lg" alt="cover" loading="lazy"
                            style={{
                                height: "100%",
                                width: "100px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }} />
                        <div class="flex flex-col p-4">
                            <span class="text-lg m-0 p-0">{beatmapset.title}<span class="text-sm text-gray-400"> by {beatmapset.artist}</span></span>
                            <span class="text-sm text-gray-400">mapped by {beatmapset.creator}</span>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row gap-2">
                    <div class="badge" style={`color: #000; background-color: ${colors.beatmap[beatmapset.status]}`}>{beatmapset.status}</div>
                    {beatmapset.beatmaps.sort((a, b) =>
                        a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int)
                        .map((beatmap: Beatmap, i: number) => i < 9 &&
                            <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                                diff={beatmap.difficulty_rating} size={20}
                                mode={beatmap.mode} name={beatmap.version} />)
                    }
                    {beatmapset.beatmaps.length > 9 &&
                        <div class="badge badge-info">+{beatmapset.beatmaps.length - 9}</div>
                    }
                </div>
            </div>
            <CardControls beatmap_id={beatmapset.beatmaps[0].id} set_id={beatmapset.id} />
        </div>
    )
}

export default BeatmapsetCard;
