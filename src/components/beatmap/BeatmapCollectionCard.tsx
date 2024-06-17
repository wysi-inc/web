import type { BeatmapsetStatus, MinoBeatmap } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import HxA from "../web/HxA";
import AudioPlayButton from "../web/AudioPlayButton";

type Props = {
    hash: string
}

export async function BeatmapCollectionPlaceholderCard({ hash }: Props) {
    return (<>
        <div hx-trigger="revealed" hx-post={`/beatmaps/collectioncard/${hash}`} hx-swap="outerHTML">
            <span class="loading loading-spinner htmx-indicator" /> {hash}
        </div>
    </>);
}

export async function BeatmapCollectionCard({ hash }: Props) {

    const res = await fetch(`https://catboy.best/api/v2/md5/${hash}`);
    const beatmap = await res.json() as MinoBeatmap;

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmap.set.id}/covers/card.jpg?${beatmap.set.id}`;

    return (<>
        <div class="flex flex-row items-center p-2 gap-2">
            <div class="flex flex-row gap-2 px-2 rounded-full bg-base-300 bg-opacity-50 items-center">
                <StatusBadge status={beatmap.status as BeatmapsetStatus} />
                <DiffIcon setId={beatmap.set.id} diffId={beatmap.id}
                    diff={beatmap.difficulty_rating} size={20}
                    mode={beatmap.mode} name={beatmap.version} />
                <img src={cardImg} class="h-6 w-8" />
                <div class="flex flex-row gap-2 items-center">
                    <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmap.set.id}`}>{beatmap.set.title}</HxA>
                    <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmap.set.artist}</p>
                </div>
            </div>
            <div class="join bg-base-200 ml-auto flex flex-row items-center justify-around">
                <AudioPlayButton css="join-item btn btn-ghost btn-sm grow p-2"
                    beatmap_id={beatmap.id}
                    set_id={beatmap.set.id}
                    beatmap_title={beatmap.set.title}
                    beatmap_artist={beatmap.set.artist}
                />
                <a class="join-item btn btn-ghost btn-sm grow p-2" href={`https://catboy.best/d/${beatmap.set.id}`}>
                    <i class="fa-solid fa-download" />
                </a>
                <a class="join-item btn btn-ghost btn-sm grow p-2" href={`osu://b/${beatmap.id}`}>
                    <i class="fa-solid fa-angles-down" />
                </a>
            </div>
        </div>
    </>);
}
