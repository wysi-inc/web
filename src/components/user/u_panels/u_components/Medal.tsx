import type { UserMedal } from "@/src/types/medals";
import moment from "moment";

type Props = {
    medal: UserMedal;
}

const MedalBadge = (props: Props) => {
    return (
        <a target="_blank" data-tip={`${props.medal.name} ${props.medal.achieved ? `- ${moment(props.medal.achieved_at).format("MMMM Do YYYY")}` : ""}`}
            href={`https://osekai.net/medals/?medal=${props.medal.name}`} class="easeinout tooltip transform transition duration-150 hover:scale-110">
            <img loading="lazy" src={props.medal.link} alt={props.medal.name} style={{ height: "50px" }} class={props.medal.achieved ? undefined : "opacity-35"} />
        </a>
    );
}

export default MedalBadge;
