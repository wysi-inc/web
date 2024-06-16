import type { BeatmapsetStatus, MinoBeatmap } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import HxA from "../web/HxA";

type Props = {
    hash: string
}

async function BeatmapCollectionCard({ hash }: Props) {

    const res = await fetch(`https://catboy.best/api/v2/md5/${hash}`);
    const beatmap = await res.json() as MinoBeatmap;

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
            </div>
        </div>
    </>);
}

export default BeatmapCollectionCard;
