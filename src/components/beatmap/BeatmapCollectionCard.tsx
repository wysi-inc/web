import type { BeatmapsetStatus, MinoBeatmap } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import HxA from "../web/HxA";
import AudioPlayButton from "../web/AudioPlayButton";

type Props = {
    beatmap: MinoBeatmap
}

async function BeatmapCollectionCard({ beatmap }: Props) {

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmap.set.id}/covers/card.jpg?${beatmap.set.id}`;

    return (<>
        <div class="flex flex-col shadow-lg"
            style={{
                background: `url(${cardImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div class="bg-base-300 bg-opacity-75 flex flex-row items-center backdrop-blur-sm p-2 gap-2">
                <div class="rounded-full bg-base-100 flex flex-row gap-2 p-2 justify-between items-center">
                    <DiffIcon setId={beatmap.set.id} diffId={beatmap.id}
                        diff={beatmap.difficulty_rating} size={20}
                        mode={beatmap.mode} name={beatmap.version} />
                    <StatusBadge status={beatmap.status as BeatmapsetStatus} />
                </div>
                <div class="flex flex-row gap-2 items-center">
                    <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmap.set.id}`}>{beatmap.set.title}</HxA>
                    <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmap.set.artist}</p>
                </div>
                <div class="ml-auto flex flex-row items-center justify-around p-1 gap-1">
                    <AudioPlayButton css="btn btn-ghost btn-sm grow p-2"
                        beatmap_id={beatmap.id}
                        set_id={beatmap.set.id}
                        beatmap_title={beatmap.set.title}
                        beatmap_artist={beatmap.set.artist}
                    />
                    <a class="btn btn-ghost btn-sm grow p-2" href={`https://catboy.best/d/${beatmap.set.id}`}>
                        <i class="fa-solid fa-download" />
                    </a>
                    <a class="btn btn-ghost btn-sm grow p-2" href={`osu://b/${beatmap.id}`}>
                        <i class="fa-solid fa-angles-down" />
                    </a>
                </div>
            </div>
        </div>
    </>);
}

export default BeatmapCollectionCard;
