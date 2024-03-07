import { colors } from "@/src/resources/colors";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";

type Props = {
    status: BeatmapsetStatus
}
const StatusBadge = (props: Props) => {
    return (
        <div class="badge" style={{
            color: "#000",
            backgroundColor: colors.beatmap[props.status]
        }}>
            {props.status}
        </div>
    )
}

export default StatusBadge;
