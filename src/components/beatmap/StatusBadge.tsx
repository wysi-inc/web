import { colors } from "@/src/libs/colors";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";

type Props = {
    status: BeatmapsetStatus
}
const StatusBadge = ({ status }: Props) => {
    return (
        <div class="text-opacity-100 badge m-0 border-0" style={{
            color: "#000",
            backgroundColor: colors.beatmap[status]
        }}>
            {status}
        </div>
    );
}

export default StatusBadge;
