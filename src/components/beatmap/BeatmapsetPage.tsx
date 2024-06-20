import moment from "moment";
import HxA from "../web/HxA";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import DiffStats from "./DiffStats";
import AudioPlayButton from "../web/AudioPlayButton";
import type { Beatmap, Beatmapset, BeatmapsetStatus } from "@/src/types/beatmaps";
import { getBeatmapset } from "@/src/db/beatmaps/get_beatmaps";

type Props = {
    set_id: number,
    beatmap_id?: number
}

const BeatmapsetPage = async (props: Props) => {

    const beatmapset: Beatmapset = await getBeatmapset(props.set_id);

    if ((beatmapset as any).error === null) return <h1>Not found</h1>;
    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    const diff: Beatmap = (beatmapset.beatmaps?.find(b => b.id === props.beatmap_id) || beatmapset.beatmaps[0]) as any;

    const hasLeaderboards = beatmapset.status === "ranked" || beatmapset.status === "approved" || beatmapset.status === "loved";

    return (<>
        <div class="flex flex-col rounded-lg shadow-lg"
            style={{
                background: `url(${cardImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
            <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm grid md:grid-cols-5 flex-wrap gap-4 justify-between rounded-lg p-4">
                <div class="md:col-span-3 flex flex-col gap-4">
                    <img src={cardImg} class="rounded-lg" alt="cover" loading="lazy"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }} />
                    <div class="flex flex-row gap-4">
                        <div class="flex flex-col gap-1 justify-between">
                            <h1 class="text-lg text-base-content">
                                {beatmapset.title}
                            </h1>
                            <p class="text-md text-neutral-content text-opacity-75">
                                by {beatmapset.artist}
                            </p>
                        </div>
                    </div>
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <div class="mt-auto flex flex-row flex-wrap justify-between">
                        <div class="flex flex-row gap-2 items-center">
                            <img src={beatmapset.user.avatar_url}
                                class="rounded-lg size-12"
                                alt="mapper" loading="lazy" />
                            <div class="flex flex-col gap-1 text-base-content ">
                                <HxA url={`/users/${beatmapset.user_id}`}>
                                    mapped by {beatmapset.user.username}
                                </HxA>
                                <div class="text-base-content">
                                    {moment(hasLeaderboards ? beatmapset.ranked_date : beatmapset.submitted_date).format("MMMM Do YYYY")}
                                </div>
                            </div>
                        </div>
                        <div class="join">
                            <AudioPlayButton css="btn btn-info join-item"
                                beatmap_id={diff.id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                            <a class="btn btn-info join-item" href="osu://b/4523032">
                                <i class="fa-solid fa-angles-down" />
                            </a>
                            <a class="btn btn-info join-item" href={`https://catboy.best/d/${props.set_id}`}>
                                <i class="fa-solid fa-download" />
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap gap-1 p-2 rounded-lg bg-base-content bg-opacity-25">
                        {beatmapset.beatmaps.sort((a, b) =>
                            a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int)
                            .map(beatmap =>
                                <div class='outline-base-content flex items-center justify-center p-1 rounded-md'
                                    style={{
                                        outline: `${diff?.id === beatmap.id ? 'solid 2px' : 'none'}`
                                    }}>
                                    <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                                        diff={beatmap.difficulty_rating} size={20}
                                        mode={beatmap.mode} name={beatmap.version} />
                                </div>
                            )}
                    </div>
                </div>
                <div class="md:col-span-2">
                    <DiffStats diff={diff} />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 rounded-lg bg-base-100" style={{ height: "250px" }}>
            <div class="overflow-y-scroll grid grid-cols-2 gap-2 col-span-3">
                <div class="flex flex-col gap-2 text-sm">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Play Count:</div>
                            <div class="p-2 rounded-lg bg-base-300">
                                {beatmapset.play_count.toLocaleString()}
                            </div>
                        </div>
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Favourites:</div>
                            <div class="p-2 rounded-lg bg-base-300">
                                {beatmapset.favourite_count.toLocaleString()}
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-base-200 shadow-lg">
                        <div class="px-2">Ratings:</div>
                        <div class="p-2 rounded-lg bg-base-300 h-32">
                            <canvas id="chart-ratings" data-vals={JSON.stringify(beatmapset.ratings)} />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 text-sm">
                    <div class="rounded-lg bg-base-200 shadow-lg">
                        <div class="px-2">Nominators:</div>
                        <div class="p-2 rounded-lg bg-base-300 flex flex-row flex-wrap gap-1">
                            {beatmapset.current_nominations.map(nom =>
                                <HxA url={`/users/${nom.user_id}`}>
                                    {nom.user_id}
                                </HxA>
                            )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Genre:</div>
                            <div class="p-2 rounded-lg bg-base-300">
                                {beatmapset.genre.name}
                            </div>
                        </div>
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Language:</div>
                            <div class="p-2 rounded-lg bg-base-300">
                                {beatmapset.language.name}
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-base-200 shadow-lg">
                        <div class="px-2">Tags:</div>
                        <div class="p-2 rounded-lg bg-base-300">
                            {beatmapset.tags}
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-y-scroll rounded-lg col-span-full md:col-span-2">
                {beatmapset.description.description}
            </div>
        </div>
        {hasLeaderboards &&
            <div hx-post={`/beatmaps/${props.set_id}/${diff.id}/scores/${diff.mode}`} hx-trigger="load" />
        }
        <script type="module" src="/public/js/beatmapset.js" />
    </>);
}

export default BeatmapsetPage;
