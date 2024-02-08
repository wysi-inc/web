import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import { colors } from "@/src/resources/colors";

type Props = {
    beatmapset: Beatmapset,
}
const BeatmapsetCard = (props: Props) => {

    const beatmapset = props.beatmapset;

    const listImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/list.jpg?${beatmapset.id}`;
    const coverImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover@2x.jpg?${beatmapset.id}`;

    return (
        <div class="rounded-lg flex flex-row bg-base-100 shadow-lg">
            <div class="bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg overflow-hidden grow flex flex-col shadow-lg" style={`background-image: url(${coverImg}); background-size: cover;`}>
                    <div class="flex flex-row grow" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <img src={listImg} onerror="this.src='/public/img/fallback.png'" alt="cover"
                            class="rounded-lg" style={{
                                height: "100%",
                                width: "100px",
                                objectFit: "cover"
                            }} />
                        <div class="flex p-4 flex-col grow">
                            <div class="truncate w-72 text-lg">{beatmapset.title}</div>
                            <div class="truncate w-72 text-sm">by {beatmapset.artist}</div>
                            <div class="truncate w-72 text-xs">mapped by {beatmapset.creator}</div>
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
            <div class="flex flex-col justify-around items-center p-2 gap-2">
                <i class="fa-solid fa-play fa-sm" />
                <i class="fa-solid fa-file-arrow-down fa-sm" />
                <i class="fa-solid fa-download fa-sm" />
            </div>
        </div>
    )
}

export default BeatmapsetCard;
