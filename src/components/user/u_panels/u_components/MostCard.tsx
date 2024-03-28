import DiffIcon from "@/src/components/beatmap/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import HxA from "@/src/components/web/HxA";
import { colors } from "@/src/libs/colors";
import type { Beatmap, Beatmapset } from "@/src/types/beatmaps";

type Props = {
    position: number;
    plays: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
}

const MostCard = (props: Props) => {

    const beatmapset = props.beatmapset;
    const beatmap = props.beatmap;

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    return (
        <div class="group rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="flex flex-col rounded-lg shadow-lg"
                    style={{
                        background: `url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="bg-base-300 bg-opacity-75 flex flex-row rounded-lg backdrop-blur-sm">
                        <img src={cardImg} class="rounded-lg w-24 object-cover object-center" alt="cover" loading="lazy" />
                        <div class="flex flex-col py-2 w-72 px-4 ">
                            <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmapset.id}`}>{beatmapset.title}</HxA>
                            <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmapset.artist}</p>
                            <HxA css="text-neutral-content text-opacity-75 text-sm text-gray-400 truncate" url={`/users/${beatmapset.user_id}`}>mapped by {beatmapset.creator}</HxA>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row justify-between items-center gap-2">
                    <div class="flex flex-row gap-2">
                        <div class="badge" style={`color: #000; background-color: ${(colors.beatmap as any)[beatmapset.status]}`}>
                            {beatmapset.status}
                        </div>
                        <DiffIcon setId={beatmapset.id} diffId={beatmap.id}
                            diff={beatmap.difficulty_rating} size={20}
                            mode={beatmap.mode} name={beatmap.version} />
                    </div>
                    <div class="flex flex-row items-center gap-2 text-base-content">
                        <div class="flex flex-row items-center gap-2">
                            <i class="fa-sm fa-solid fa-arrow-rotate-left" />
                            <div>{props.plays}</div>
                        </div>
                        <div>#{props.position}</div>
                    </div>
                </div>
            </div>
            <CardControls
                beatmap_id={beatmap.id}
                set_id={beatmapset.id}
                beatmap_title={beatmapset.title}
                beatmap_artist={beatmapset.artist}
            />
        </div>
    )
}

export default MostCard;
