import ModeIcon from "./ModeIcon";
import HxA from "../web/HxA";
import { getDiffColor } from "@/src/libs/web_utils";

interface Props {
    diff: number,
    mode: string,
    size: number
    name: string;
    setId: number;
    diffId: number;
}

const DiffIcon = ({ diff, mode, size, name, setId, diffId }: Props) => (
    <HxA url={`/beatmaps/${setId}/${diffId}`} css="flex items-center">
        <span data-tip={`★ ${diff} - [${name}]`} class="p-0 m-0 tooltip">
            <ModeIcon size={size} color={getDiffColor(diff)} mode={mode} />
        </span>
    </HxA>
);

export default DiffIcon;
