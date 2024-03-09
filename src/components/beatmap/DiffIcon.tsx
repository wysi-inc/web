import { colors } from "@/src/resources/colors";
import ModeIcon from "./ModeIcon";
import HxA from "../web/HxA";

interface Props {
    diff: number,
    mode: string,
    size: number
    name: string;
    setId: number;
    diffId: number;
}

const DiffIcon = (props: Props) => {

    function getGradientColor(value: number): string {
        let startColor: string;
        let endColor: string;
        let ratio: number;
        if (value < 10) {
            startColor = colors.difficulty[Math.floor(value)];
            endColor = colors.difficulty[Math.ceil(value)];
            ratio = value - Math.floor(value);
        } else {
            startColor = colors.difficulty[10]
            endColor = colors.difficulty[10]
            ratio = 1;
        }
        const startR = parseInt(startColor.slice(1, 3), 16);
        const startG = parseInt(startColor.slice(3, 5), 16);
        const startB = parseInt(startColor.slice(5, 7), 16);
        const endR = parseInt(endColor.slice(1, 3), 16);
        const endG = parseInt(endColor.slice(3, 5), 16);
        const endB = parseInt(endColor.slice(5, 7), 16);
        const r = Math.round(startR + (endR - startR) * ratio).toString(16).padStart(2, "0");
        const g = Math.round(startG + (endG - startG) * ratio).toString(16).padStart(2, "0");
        const b = Math.round(startB + (endB - startB) * ratio).toString(16).padStart(2, "0");
        return `#${r}${g}${b}`;
    }

    const color = getGradientColor(props.diff);

    return (
        <HxA url={`/beatmaps/${props.setId}/${props.diffId}`}>
            <span data-tip={`★ ${props.diff} - [${props.name}]`} class="tooltip">
                <ModeIcon size={props.size} color={color} mode={props.mode} />
            </span>
        </HxA>
    )
}

export default DiffIcon;
