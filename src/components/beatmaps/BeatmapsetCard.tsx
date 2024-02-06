import type { Beatmapset } from "@/src/types/beatmaps";

type Props = {
    beatmapset: Beatmapset,
}
const BeatmapsetCard = (props: Props) => {

    const beatmapset = props.beatmapset;

    const listImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/list.jpg?${beatmapset.id}`;

    const submitted_date = typeof beatmapset.submitted_date === "number" ? beatmapset.submitted_date * 1000 : beatmapset.submitted_date;

    return (
        <div class="flex flex-row rounded-lg card bg-custom-600">
            <div class="flex flex-col gap-3 p-3 rounded-lg shadow-xl grow bg-custom-900">
                <div class="flex flex-row justify-between gap-3">
                    <div class="flex flex-row gap-3 grow">
                        <img src={listImg}
                            alt="cover" class="rounded-lg" loading="lazy"
                            style="objectFit: cover;" height={120} width={80} />
                        <div class="flex flex-col gap-2 grow">
                            <div class="flex flex-row items-center justify-between gap-2">
                                {beatmapset.title} <br /> <small>by {beatmapset.artist}</small>
                            </div>
                            <div class="flex flex-row items-center gap-2 text-sm">
                                Mapper: {beatmapset.creator}
                                <div>|</div>
                                <div class="tooltip" data-tip={submitted_date}>
                                    {submitted_date}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-row items-center gap-2 text-xl">
                            <div>{beatmapset.beatmaps.length}</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap items-center justify-start gap-2">
                    badge
                    diff
                </div>
            </div>
            <div class="flex flex-col items-center justify-between p-1 rounded-lg">
                <div class="tooltip" data-tip="listen">
                    <button class="btn btn-circle btn-ghost btn-sm">
                        listen
                    </button>
                </div>
                <a href={`https://catboy.best/d/${beatmapset.id}`}
                    class="tooltip" data-tip="download">
                    <button class="btn btn-circle btn-ghost btn-sm">
                        download
                    </button>
                </a>
                <a href={`osu://b/${beatmapset.beatmaps[0].id}`}
                    class="tooltip" data-tip="osu!direct">
                    <button class="btn btn-circle btn-ghost btn-sm">
                        osu!direct
                    </button>
                </a>
            </div>
        </div>
    )
}

export default BeatmapsetCard;
