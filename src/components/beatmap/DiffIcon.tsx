import Link from "../web/Link";
import ModeIcon from "./ModeIcon";
import { getDiffColor } from "@/src/libs/web_utils";

type Props = {
    diff: number,
    mode: string,
    size: number,
    name: string,
    setId: number,
    diffId: number,
}

const DiffIcon = (p: Props) => (
    <Link url={`/beatmapsets/${p.setId}/${p.diffId}`} css="flex items-center">
        <span data-tip={`★ ${p.diff} - [${p.name}]`} class="p-0 m-0 tooltip">
            <ModeIcon size={p.size} color={getDiffColor(p.diff)} mode={p.mode} />
        </span>
    </Link>
);

export default DiffIcon;
