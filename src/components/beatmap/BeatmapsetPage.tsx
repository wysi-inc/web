import moment from "moment";
import DiffIcon from "./DiffIcon";
import StatusBadge from "./StatusBadge";
import DiffStats from "./DiffStats";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import type { Beatmap, BeatmapsetStatus } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";
import Title from "../web/Title";
import { api_beatmapset_details } from "@/src/api/beatmap";
import type { UserCookie } from "@/src/types/users";

type Props = {
    set_id: number,
    beatmap_id?: number
    user?: UserCookie | null
}

async function BeatmapsetPage(p: Props) {

    const beatmapset = await api_beatmapset_details(p.set_id, p.user);
    if (!beatmapset) return <h1>Not found</h1>;

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    const hasLeaderboards = [
        "ranked",
        "approved",
        "loved",
        "qualified"
    ].includes(beatmapset.status);

    const beatmaps = beatmapset?.beatmaps?.sort((a, b) => a.mode === b.mode ?
        a.difficulty_rating - b.difficulty_rating :
        a.mode_int - b.mode_int
    );

    if (!beatmaps) return <></>;

    const diff = (beatmaps.find(b => b.id === p.beatmap_id) || beatmaps[0]) as Beatmap;
    const beatmap_map = new Map<number, Beatmap>();
    beatmaps.forEach(b => beatmap_map.set(b.id, b))

    return (<>
        <Title title={`${beatmapset.title} - ${beatmapset.artist}`} />
        <div class="flex flex-col rounded-lg shadow-lg" data-bg={cardImg}
            style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm grid md:grid-cols-5 flex-wrap gap-4 justify-between rounded-lg p-4">
                <div class="md:col-span-3 flex flex-col gap-4">
                    <img data-src={cardImg} class="rounded-lg" alt="cover" loading="lazy"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }} />
                    <div class="flex flex-row gap-4">
                        <div class="flex flex-col gap-1 justify-between">
                            <a href={`https://osu.ppy.sh/beatmapsets/${beatmapset.id}`} target="_blank">
                                <h1 class="text-2xl text-base-content">
                                    {beatmapset.title}
                                </h1>
                            </a>
                            <p class="text-md text-neutral-content text-opacity-75">
                                by {beatmapset.artist}
                            </p>
                        </div>
                    </div>
                    <div class="mt-auto flex flex-row gap-4 flex-wrap items-center">
                        <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                        <div class="flex flex-row gap-2 items-center">
                            <i class="fa-solid fa-circle-play" />
                            <span>{beatmapset.play_count.toLocaleString()}</span>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <i class="fa-solid fa-heart" />
                            <span>{beatmapset.favourite_count.toLocaleString()}</span>
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap justify-between">
                        {beatmapset.user ?
                            <div class="flex flex-row gap-2 items-center">
                                <img data-src={beatmapset.user.avatar_url}
                                    class="rounded-lg size-12"
                                    alt="mapper" loading="lazy" />
                                <div class="flex flex-col gap-1 text-base-content ">
                                    <Link url={`/users/${beatmapset.user_id}`}>
                                        mapped by {beatmapset.user.username}
                                    </Link>
                                    <span class="text-base-content">
                                        {moment(hasLeaderboards ? beatmapset.ranked_date : beatmapset.submitted_date).format("MMMM Do YYYY")}
                                    </span>
                                </div>
                            </div> : null
                        }
                        <div class="join">
                            <AudioPlayButton join
                                beatmap_id={diff.id}
                                set_id={beatmapset.id}
                                beatmap_title={beatmapset.title}
                                beatmap_artist={beatmapset.artist}
                            />
                            <a class="btn btn-info join-item" href={`osu://s/${beatmapset.id}`}>
                                <i class="fa-solid fa-angles-down" />
                            </a>
                            <a class="btn btn-info join-item" href={`https://catboy.best/d/${p.set_id}`}>
                                <i class="fa-solid fa-download" />
                            </a>
                        </div>
                    </div>
                    <form class="flex flex-row flex-wrap gap-1 p-1 rounded-lg bg-base-content bg-opacity-25"
                        id="beatmapsets_form" data-beatmaps={JSON.stringify(Array.from(beatmap_map.entries()))}>
                        {beatmaps.map(b =>
                            <span data-tip={`[${b.version}]`} class={`${b.id === diff.id ? "outline" : ""} 
                                m-0 tooltip cursor-pointer outline-base-content flex items-center justify-center p-1 rounded-md outline-2`}>
                                <Link url={`/beatmapsets/${p.set_id}/${b.id}`}>
                                    <DiffIcon sr={b.difficulty_rating} size={20} mode={b.mode as Mode} />
                                </Link>
                            </span>
                            // <label data-tip={`[${b.version}]`} class="m-0 tooltip cursor-pointer outline-base-content flex items-center justify-center p-1 rounded-md has-[:checked]:outline outline-2">
                            //     <DiffIcon sr={b.difficulty_rating} size={20} mode={b.mode as Mode} />
                            //     <input name="selected_beatmap" type="radio" value={String(b.id)} class="hidden" checked={b.id === diff.id} />
                            // </label>
                        )}
                    </form>
                </div>
                <div class="md:col-span-2"><DiffStats diff={diff} /></div>
            </div>
        </div >
        <details class="group bg-base-300 rounded-lg">
            <summary class="cursor-pointer rounded-lg flex flex-row gap-4 items-center justify-between py-2 px-4">
                <div class="flex flex-row gap-4 items-center">
                    <i class="group-open:rotate-180 transform ease-out duration-200 fa-solid fa-caret-down" />
                    <h6>Details</h6>
                </div>
            </summary>
            <div class="grid md:grid-cols-3 gap-4 p-4 rounded-lg bg-base-100">
                <div class="flex flex-col gap-2 text-sm">
                    <div class="rounded-lg bg-base-200 shadow-lg">
                        <div class="px-2">Nominators:</div>
                        <div class="p-2 rounded-lg bg-base-300 flex flex-row flex-wrap gap-1">
                            {beatmapset.nominations?.map(nom =>
                                <Link url={`/users/${nom}`}>{nom}</Link>
                            )}
                        </div>
                    </div>
                    <div class="rounded-lg bg-base-200 shadow-lg">
                        <div class="px-2">Ratings:</div>
                        <div class="p-2 rounded-lg bg-base-300 h-32">
                            <canvas id="chart-ratings" data-vals={JSON.stringify(beatmapset.ratings)} />
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 text-sm">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="rounded-lg bg-base-200 shadow-lg">
                                <div class="px-2">Genre:</div>
                                <div class="p-2 rounded-lg bg-base-300">
                                    {beatmapset.genre?.name}
                                </div>
                            </div>
                            <div class="rounded-lg bg-base-200 shadow-lg">
                                <div class="px-2">Language:</div>
                                <div class="p-2 rounded-lg bg-base-300">
                                    {beatmapset.language?.name}
                                </div>
                            </div>
                        </div>
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Tags:</div>
                            <div class="p-2 rounded-lg flex flex-row flex-wrap gap-2 bg-base-300">
                                {beatmapset.tags.split(" ").map(tag => (
                                    <div class="badge badge-sm badge-neutral">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg md:col-span-2">
                    <div class="rounded-lg text-sm bg-base-200 shadow-lg">
                        <div class="px-2">Description:</div>
                        <div class="bbcode description p-2 rounded-lg bg-base-300">
                            {beatmapset.description?.description}
                        </div>
                    </div>
                </div>
            </div>
        </details>
        {hasLeaderboards ?
            <div role="tablist" class="tabs tabs-bordered grid grid-cols-3 items-center rounded-lg bg-base-100 p-4">
                {["global", "country", "friend"].map(type => (<>
                    <input type="radio" name="beatmapset_rankings" aria-label={type} role="tab" class="tab" checked={type === "global"} />
                    <div role="tabpanel" class="tab-content mt-4"
                        hx-post={`/beatmapsets/${p.set_id}/${diff.id}/scores/${diff.mode}/${type}`}
                        hx-trigger={"revealed"} hx-swap="innerHTML" hx-target={`#${type}_leaderboards`} >
                        <div id={`${type}_leaderboards`} class="flex flex-col gap-4">
                            <span class="loading loading-spinner mx-auto" />
                        </div>
                    </div>
                </>))
                }
            </div > : <></>}
        <script type="module" src={`/public/js/beatmapset.js?v=${Date.now()}`} />
    </>);
}

export default BeatmapsetPage;
