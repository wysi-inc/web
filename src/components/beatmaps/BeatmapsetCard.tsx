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
        <div class="flex flex-row bg-base-300 rounded-lg shadow-lg">
            <div class="flex flex-col bg-neutral rounded-lg shadow-lg grow">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{
                        background: `linear-gradient(#000000cc, #000000cc), url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="flex flex-row rounded-lg" style={{ backdropFilter: "blur(8px)" }}>
                        <img src={cardImg} class="rounded-lg" alt="cover" loading="lazy"
                            style={{
                                height: "100%",
                                width: "100px",
                                objectFit: "cover",
                                objectPosition: "center"
                            }} />
                        <div class="flex flex-col py-2 px-4 truncate">
                            <p class="text-lg truncate">{beatmapset.title}</p>
                            <p class="text-sm truncate text-gray-400"> by {beatmapset.artist}</p>
                            <p class="text-sm truncate text-gray-400">mapped by {beatmapset.creator}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row p-2 gap-2 items-center">
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
