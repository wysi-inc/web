import { colors } from "@/src/resources/colors";

type Props = {
    mod: string,
}

const ModIcon = ({ mod }: Props) => {

    let color;
    let name = mod.toLowerCase();

    switch (name) {
        case "nm": // No Mod
            color = colors.mods.nomod;
            break;
        case "hr": // Hard Rock
        case "sd": // Sudden Death
        case "pf": // Perfect
        case "dt": // Double Time
        case "nc": // Nightcore
        case "fi": // Fade In
        case "hd": // Hidden
        case "fl": // Flashlight
        case "bl": // Blinds
        case "st": // Strict Tracking
        case "ac": // Accuracy Challenge
            color = colors.mods.increase;
            break;
        case "ez": // Easy
        case "nf": // No Fail
        case "ht": // Half Time
        case "dc": // Double Click
            color = colors.mods.reduction;
            break;
        case "at": // Autoplay
        case "cn": // Cinema
        case "rx": // Relax
        case "ap": // Auto Pilot
        case "so": // Spun Out
        case "td": // Touch Device
            color = colors.mods.automation;
            break;
        case "tp": // Target Practice
        case "da": // Difficulty Adjust
        case "cl": // Classic
        case "rd": // Random
        case "mr": // Mirror
        case "al": // Alternate
        case "st": // Singletap
            color = colors.mods.conversion;
            break;
        default:
            color = colors.mods.fun;
            break;
    }

    return <>
        <div class="tooltip px-2 py-1 rounded-full" data-tip={mod}
            style={{ backgroundColor: color }}>
            <img src={`/public/img/mods/${name}.svg`}
                class="h-3 w-4" alt={mod} loading="lazy" />
        </div>
    </>;
}

export default ModIcon;
