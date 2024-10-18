import { colors } from "@/src/libs/colors";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";

type Props = {
    status: BeatmapsetStatus
}
const StatusBadge = ({ status }: Props) => {
    return (
        <div class="badge badge-sm m-0 border-0 text-opacity-100" style={{
            color: "#000",
            backgroundColor: colors.beatmap[status]
        }}>
            {status.toUpperCase()}
        </div>
    );
}

export default StatusBadge;
