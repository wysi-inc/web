import type { UserMedal } from "@/src/types/medals";

type Props = {
    medal: UserMedal;
}

const MedalBadge = (props: Props) => {
    return (
        <a target="_blank" data-tip={props.medal.name}
            href={`https://osekai.net/medals/?medal=${props.medal.name}`}
            class="tooltip transform hover:scale-110 transition easeinout duration-150">
            <img src={props.medal.link} alt={props.medal.name} loading="lazy"
                style={{ height: "50px" }} class={`${props.medal.achieved ? "" : "opacity-35"}`}
            />
        </a>
    );
}

export default MedalBadge;
