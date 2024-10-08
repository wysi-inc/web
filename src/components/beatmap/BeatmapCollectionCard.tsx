import { DiffIconLink } from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import AudioPlayButton from "../web/AudioPlayButton";
import type { BeatmapsetStatus, MinoBeatmap } from "@/src/types/beatmaps";
import Link from "../web/Link";
import type { Mode } from "@/src/types/osu";

type Props = {
    hash: string
}

export async function BeatmapCollectionCard({ hash }: Props) {
    const res = await fetch(`https://catboy.best/api/v2/md5/${hash}`);

    if (!res.ok) return (<></>);

    const beatmap = await res.json() as MinoBeatmap;
    // const cardImg = `https://assets.ppy.sh/beatmaps/${beatmap.set.id}/covers/card.jpg?${beatmap.set.id}`;

    return (<>
        <div class="flex flex-row items-center gap-2">
            <div class="join bg-neutral flex flex-row items-center justify-around">
                <AudioPlayButton css="join-item btn btn-ghost btn-sm grow p-2"
                    beatmap_id={beatmap.id}
                    set_id={beatmap.set.id}
                    beatmap_title={beatmap.set.title}
                    beatmap_artist={beatmap.set.artist}
                />
            </div>
            <div class="flex flex-row gap-2 px-2 rounded-lg bg-neutral items-center">
                <StatusBadge status={beatmap.status as BeatmapsetStatus} />
                <DiffIconLink setId={beatmap.set.id} diffId={beatmap.id}
                    diff={beatmap.difficulty_rating} size={20}
                    mode={beatmap.mode as Mode} name={beatmap.version} />
                <div class="flex flex-row flex-wrap gap-2 items-center">
                    <Link css="text-base-content text-lg hover:underline underline-offset-2 break-words" url={`/beatmaps/${beatmap.set.id}`}>{beatmap.set.title}</Link>
                    <p class="text-neutral-content text-opacity-75 text-sm break-words"> by {beatmap.set.artist}</p>
                </div>
            </div>
        </div>
    </>);
}
