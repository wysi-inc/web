import type { BeatmapsetStatus, MinoBeatmap } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import { DiffIconLink } from "./DiffIcon";
import StatusBadge from "./StatusBadge";

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
            <div class="join flex flex-row items-center justify-around bg-neutral">
                <AudioPlayButton join
                    beatmap_id={beatmap.id}
                    set_id={beatmap.set.id}
                    beatmap_title={beatmap.set.title}
                    beatmap_artist={beatmap.set.artist}
                />
            </div>
            <div class="flex flex-row items-center gap-2 rounded-lg bg-neutral px-2">
                <StatusBadge status={beatmap.status as BeatmapsetStatus} />
                <DiffIconLink setId={beatmap.set.id} diffId={beatmap.id}
                    diff={beatmap.difficulty_rating} size={20}
                    mode={beatmap.mode as Mode} name={beatmap.version} />
                <div class="flex flex-row flex-wrap items-center gap-2">
                    <Link css="break-words text-lg text-base-content underline-offset-2 hover:underline" url={`/beatmaps/${beatmap.set.id}`}>{beatmap.set.title}</Link>
                    <p class="break-words text-sm text-neutral-content text-opacity-75"> by {beatmap.set.artist}</p>
                </div>
            </div>
        </div>
    </>);
}
