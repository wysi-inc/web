import type { UserMedal } from "@/src/types/medals";

type Props = {
    medal: UserMedal;
}

const MedalBadge = (props: Props) => {
    return (
        <a target="_blank" class="tooltip" data-tip={props.medal.name}
            href={`https://osekai.net/medals/?medal=${props.medal.name}`}>
            <img src={props.medal.link} alt={props.medal.name} loading="lazy"
                style={{ height: "50px" }} class={props.medal.achieved ? "brightness-100" : "brightness-50"}
            />
        </a>
    );
}

export default MedalBadge;
