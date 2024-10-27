import { api_beatmapset_details } from "@/src/api/beatmap";
import type { BeatmapExtended, BeatmapsetStatus } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";
import type { UserCookie } from "@/src/types/users";
import moment from "moment";
import Link from "../web/Link";
import Title from "../web/Title";
import DiffIcon from "./DiffIcon";
import DiffStats from "./DiffStats";
import StatusBadge from "./StatusBadge";

type Props = {
    set_id: number;
    beatmap_id?: number;
    user?: UserCookie | null;
};

async function BeatmapsetPage(p: Props) {
    const res = await api_beatmapset_details(p.set_id, p.user);
    if (res.error) return <>{res.data}</>;

    const beatmapset = res.data;
    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    const hasLeaderboards = ["ranked", "approved", "loved", "qualified"].includes(beatmapset.status);

    const beatmaps = beatmapset?.beatmaps?.sort((a, b) => (a.mode === b.mode ? a.difficulty_rating - b.difficulty_rating : a.mode_int - b.mode_int));

    if (!beatmaps) return <></>;

    const diff = beatmaps.find((b) => b.id === p.beatmap_id) || beatmaps[0];
    const beatmap_map = new Map<number, BeatmapExtended>();
    beatmaps.forEach((b) => beatmap_map.set(b.id, b));

    return (
        <>
            <div
                class="flex flex-col rounded-lg shadow-lg"
                style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
                <div class="grid flex-wrap justify-between gap-4 rounded-lg bg-base-300 bg-opacity-65 p-4 text-base-content backdrop-blur-sm md:grid-cols-5">
                    <div class="flex flex-col gap-4 md:col-span-3">
                        <img
                            loading="lazy"
                            src={cardImg}
                            class="rounded-lg"
                            alt="cover"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                        <div class="flex flex-row gap-4">
                            <div class="flex flex-col justify-between gap-1">
                                <a href={`https://osu.ppy.sh/beatmapsets/${beatmapset.id}`} target="_blank">
                                    <h1 class="text-2xl text-base-content">{beatmapset.title}</h1>
                                </a>
                                <p class="text-md text-neutral-content text-opacity-75">by {beatmapset.artist}</p>
                            </div>
                        </div>
                        <div class="mt-auto flex flex-row flex-wrap items-center gap-4">
                            <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                            <div class="flex flex-row items-center gap-2">
                                <i class="fa-solid fa-circle-play" />
                                <span>{beatmapset.play_count.toLocaleString()}</span>
                            </div>
                            <div class="flex flex-row items-center gap-2">
                                <i class="fa-solid fa-heart" />
                                <span>{beatmapset.favourite_count.toLocaleString()}</span>
                            </div>
                        </div>
                        <div class="flex flex-row flex-wrap justify-between">
                            {beatmapset.user ? (
                                <div class="flex flex-row items-center gap-2">
                                    <img loading="lazy" src={beatmapset.user.avatar_url} class="size-12 rounded-lg" alt="mapper" />
                                    <div class="flex flex-col gap-1 text-base-content ">
                                        <Link url={`/users/${beatmapset.user_id}`}>mapped by {beatmapset.user.username}</Link>
                                        <span class="text-base-content">
                                            {moment(hasLeaderboards ? beatmapset.ranked_date : beatmapset.submitted_date).format("MMMM Do YYYY")}
                                        </span>
                                    </div>
                                </div>
                            ) : null}
                            <div class="join">
                                <button
                                    class="btn btn-info join-item"
                                    data-song={JSON.stringify({
                                        src: `https://catboy.best/preview/audio/${p.beatmap_id}`,
                                        cover: `https://assets.ppy.sh/beatmaps/${p.set_id}/covers/card.jpg?${p.set_id}`,
                                        title: beatmapset.title,
                                        artist: beatmapset.artist,
                                        set_id: beatmapset.id,
                                        map_id: p.beatmap_id,
                                    })}
                                    onclick="on_card_click(this);"
                                >
                                    <i class="fa-solid fa-play fa-lg block group-aria-pressed/audio:hidden" />
                                    <i class="fa-solid fa-pause fa-lg hidden group-aria-pressed/audio:block" />
                                </button>
                                <a class="btn btn-info join-item" href={`osu://s/${beatmapset.id}`}>
                                    <i class="fa-solid fa-angles-down" />
                                </a>
                                <a class="btn btn-info join-item" href={`https://catboy.best/d/${p.set_id}`}>
                                    <i class="fa-solid fa-download" />
                                </a>
                            </div>
                        </div>
                        <form
                            class="flex flex-row flex-wrap gap-1 rounded-lg bg-base-content bg-opacity-25 p-1"
                            id="beatmapsets_form"
                            data-beatmaps={JSON.stringify(Array.from(beatmap_map.entries()))}
                        >
                            {beatmaps.map(
                                (b) => (
                                    <span
                                        data-tip={`★ ${b.difficulty_rating} [${b.version}]`}
                                        class={`${b.id === diff.id ? "outline" : ""} 
                                tooltip m-0 flex cursor-pointer items-center justify-center rounded-md p-1 outline-2 outline-base-content`}
                                    >
                                        <Link url={`/beatmapsets/${p.set_id}/${b.id}`}>
                                            <DiffIcon sr={b.difficulty_rating} size={20} mode={b.mode as Mode} />
                                        </Link>
                                    </span>
                                )
                                // <label data-tip={`[${b.version}]`} class="m-0 tooltip cursor-pointer outline-base-content flex items-center justify-center p-1 rounded-md has-[:checked]:outline outline-2">
                                //     <DiffIcon sr={b.difficulty_rating} size={20} mode={b.mode as Mode} />
                                //     <input name="selected_beatmap" type="radio" value={String(b.id)} class="hidden" checked={b.id === diff.id} />
                                // </label>
                            )}
                        </form>
                    </div>
                    <div class="md:col-span-2">
                        <DiffStats diff={diff} />
                    </div>
                </div>
            </div>
            <details class="group rounded-lg bg-base-300">
                <summary class="flex cursor-pointer flex-row items-center justify-between gap-4 rounded-lg px-4 py-2">
                    <div class="flex flex-row items-center gap-4">
                        <i class="fa-solid fa-caret-down transform duration-200 ease-out group-open:rotate-180" />
                        <h6>Details</h6>
                    </div>
                </summary>
                <div class="grid gap-4 rounded-lg bg-base-100 p-4 md:grid-cols-3">
                    <div class="flex flex-col gap-2 text-sm">
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Nominators:</div>
                            <div class="flex flex-row flex-wrap gap-1 rounded-lg bg-base-300 p-2">
                                {beatmapset.nominations?.map((nom) => <Link url={`/users/${nom}`}>{nom}</Link>)}
                            </div>
                        </div>
                        <div class="rounded-lg bg-base-200 shadow-lg">
                            <div class="px-2">Ratings:</div>
                            <div class="h-32 rounded-lg bg-base-300 p-2">
                                <canvas id="chart-ratings" data-vals={JSON.stringify(beatmapset.ratings)} />
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 text-sm">
                            <div class="grid grid-cols-2 gap-2">
                                <div class="rounded-lg bg-base-200 shadow-lg">
                                    <div class="px-2">Genre:</div>
                                    <div class="rounded-lg bg-base-300 p-2">{beatmapset.genre?.name}</div>
                                </div>
                                <div class="rounded-lg bg-base-200 shadow-lg">
                                    <div class="px-2">Language:</div>
                                    <div class="rounded-lg bg-base-300 p-2">{beatmapset.language?.name}</div>
                                </div>
                            </div>
                            <div class="rounded-lg bg-base-200 shadow-lg">
                                <div class="px-2">Tags:</div>
                                <div class="flex flex-row flex-wrap gap-2 rounded-lg bg-base-300 p-2">
                                    {beatmapset.tags.split(" ").map((tag) => (
                                        <div class="badge badge-neutral badge-sm">{tag}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg md:col-span-2">
                        <div class="rounded-lg bg-base-200 text-sm shadow-lg">
                            <div class="px-2">Description:</div>
                            <div class="bbcode description rounded-lg bg-base-300 p-2">{beatmapset.description?.description}</div>
                        </div>
                    </div>
                </div>
            </details>
            {hasLeaderboards ? (
                <div role="tablist" class="tabs tabs-bordered grid grid-cols-3 items-center rounded-lg bg-base-100 p-4">
                    {["global", "country", "friend"].map((type) => (
                        <>
                            <input
                                type="radio"
                                disabled={!p.user && type !== "global"}
                                name="beatmapset_rankings"
                                aria-label={type}
                                role="tab"
                                class="tab"
                                checked={type === "global"}
                            />
                            <div
                                role="tabpanel"
                                class="tab-content mt-4"
                                hx-post={`/beatmapsets/${p.set_id}/${diff.id}/scores/${diff.mode}/${type}`}
                                hx-trigger={"revealed"}
                                hx-swap="innerHTML"
                                hx-target={`#${type}_leaderboards`}
                            >
                                <div id={`${type}_leaderboards`} class="flex flex-col gap-4">
                                    <span class="loading loading-spinner mx-auto" />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            ) : null}
            <Title
                title={`${beatmapset.title} - ${beatmapset.artist}`}
                scripts={["https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js", "/public/js/beatmapset.js"]}
            />
        </>
    );
}

export default BeatmapsetPage;
