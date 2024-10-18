import { getDiffColor } from "@/src/libs/web_utils";
import type { Mode } from "@/src/types/osu";
import Link from "../web/Link";
import ModeIcon from "./ModeIcon";

export const DiffIconLink = (p: {
    diff: number,
    mode: Mode,
    size: number,
    name: string,
    setId: number,
    diffId: number,
    color?: string,
}) => (
    <Link url={`/beatmapsets/${p.setId}/${p.diffId}`} css="flex items-center">
        <span data-tip={`★ ${p.diff} - [${p.name}]`} class="tooltip m-0 p-0">
            <ModeIcon size={p.size} color={p.color || getDiffColor(p.diff)} mode={p.mode} />
        </span>
    </Link>
);

const DiffIcon = (p: {
    size: number,
    sr: number,
    mode: Mode,
    color?: string
}) => (
    <ModeIcon size={p.size} color={p.color || getDiffColor(p.sr)} mode={p.mode} />
)

export default DiffIcon;
