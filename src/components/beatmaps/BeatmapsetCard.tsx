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
            <div class="bg-base-300 flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg overflow-hidden grow flex flex-col shadow-lg" style={`background-image: url(${coverImg}); background-size: cover;`}>
                    <div class="flex gap-4 p-4 flex-row grow" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <img src={listImg} onerror="this.src='/public/img/fallback.png'" alt="cover" class="rounded-lg" style="heigth: 80px; width: 60px; object-fit: cover;" />
                        <div class="flex flex-col grow">
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
            <div class="flex flex-col justify-around p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 384 512">
                    <path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
            </div>
        </div>
    )
}

export default BeatmapsetCard;
