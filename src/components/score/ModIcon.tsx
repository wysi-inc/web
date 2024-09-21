import { colors } from "@/src/libs/colors";

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
        case "1k": // 1 Key  
        case "2k": // 2 Key  
        case "3k": // 3 Key  
        case "4k": // 4 Key  
        case "5k": // 5 Key  
        case "6k": // 6 Key  
        case "7k": // 7 Key  
        case "8k": // 8 Key  
        case "9k": // 9 Key  
        case "co": // Co-op
            color = colors.mods.conversion;
            break;
        default:
            color = colors.mods.fun;
            break;
    }

    return (
        <div class="tooltip px-2 py-1 rounded-full" data-tip={mod} style={{ backgroundColor: color }}>
            <img data-src={`/public/img/mods/${name}.svg`} class="h-3 w-4 text-center text-xs text-black" alt={mod} />
        </div>
    );
}

export default ModIcon;
