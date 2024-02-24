import type { Beatmapset } from "@/src/types/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";

type Props = {
    query: any,
}

const BeatmapsList = async (props: Props) => {

    if (!props.query) {
        const url = `https://catboy.best/api/v2/search?limit=50&offset=0`;
        const beatmaps: Beatmapset[] = await (await fetch(url)).json() as Beatmapset[];
        return (<>
            {beatmaps.length < 50 ? null :
                <button class="col-span-full btn btn-success btn-sm flex flex-row gap-2"
                    hx-post={""}
                    hx-swap="outerHTML">
                    <div>Load more</div>
                    <span class="htmx-indicator loading loading-spinner loading-md" />
                </button>
            }
        </>);
    }

    const title = props.query.title || "";
    let filters = [
        props.query.mapper ? `creator=${props.query.mapper}` : undefined,
        props.query.bpm_min ? `bpm>=${props.query.bpm_min}` : undefined,
        props.query.bpm_max ? `bpm<=${props.query.bpm_max}` : undefined,
        props.query.stars_min ? `beatmaps.difficulty_rating>=${props.query.stars_min}` : undefined,
        props.query.stars_max ? `beatmaps.difficulty_rating<=${props.query.stars_max}` : undefined,
        props.query.length_min ? `beatmaps.total_length>=${props.query.length_min}` : undefined,
        props.query.length_max ? `beatmaps.total_length<=${props.query.length_max}` : undefined,
        props.query.year_min ? `last_updated>=${new Date(props.query.year_min).getTime() / 1000}` : undefined,
        props.query.year_max ? `last_updated<=${new Date(props.query.year_max).getTime() / 1000}` : undefined,
        props.query.ar_min ? `beatmaps.ar>=${props.query.ar_min}` : undefined,
        props.query.ar_max ? `beatmaps.ar<=${props.query.ar_max}` : undefined,
        props.query.cs_min ? `beatmaps.cs>=${props.query.cs_min}` : undefined,
        props.query.cs_max ? `beatmaps.cs<=${props.query.cs_max}` : undefined,
        props.query.hp_min ? `beatmaps.drain>=${props.query.hp_min}` : undefined,
        props.query.hp_max ? `beatmaps.drain<=${props.query.hp_max}` : undefined,
        props.query.od_min ? `beatmaps.accuracy>=${props.query.od_min}` : undefined,
        props.query.od_max ? `beatmaps.accuracy<=${props.query.od_max}` : undefined,
    ];

    filters = filters.filter((f) => f);

    const sort: any[] = [];

    const modes: number[] = Object.entries(props.query).
        filter(([key, value]) => key.startsWith("mode_") && value === "on")
        .map(([key, _]) => {
            switch (key.split("_")[1]) {
                case "osu":
                    return 0;
                case "taiko":
                    return 1
                case "fruits":
                    return 2
                case "mania":
                    return 3
                default:
                    return NaN;
            }
        });

    const status: number[] = Object.entries(props.query)
        .filter(([key, value]) => key.startsWith("status_") && value === "on")
        .map(([key, _]) => {
            switch (key.split("_")[1]) {
                case "ranked":
                    return 1;
                case "approved":
                    return 2
                case "qualified":
                    return 3
                case "loved":
                    return 4
                case "pending":
                    return 0;
                case "wip":
                    return -1;
                case "graveyard":
                    return -2;
                default:
                    return NaN;
            }
        });

    const limit = 50;
    const offset = props.query.offset || 0;

    const url = `https://catboy.best/api/v2/search?q=${title}${filters.length > 0 ? `[${filters.join(" AND ")}]` : ""}${sort.length > 0 ? `&sort=${sort.join("&sort=")}` : ""}&m=${modes.join("&m=")}&status=${status.join("&status=")}&limit=${limit}&offset=${offset}`;

    const beatmaps: Beatmapset[] = await (await fetch(url)).json() as Beatmapset[];

    return (<>
        {beatmaps.map(beatmapset =>
            <BeatmapsetCard beatmapset={beatmapset} />
        )}
        {beatmaps.length < limit ? null :
            <button class="col-span-full btn btn-success btn-sm flex flex-row gap-2"
                hx-post={""}
                hx-swap="outerHTML">
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
            </button>
        }
    </>
    );
}

export default BeatmapsList;
