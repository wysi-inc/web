import { colors } from "@/src/resources/colors";
import { getGradeLetter } from "@/src/resources/functions";

type Props = {
    grade: string;
}

const Grade = ({ grade }: Props) => {

    let color;

    switch (grade.toLowerCase()) {
        case "x":
        case "ss":
            color = colors.grades.x;
            break;
        case "xh":
        case "ssh":
            color = colors.grades.xh;
            break;
        case "sh":
            color = colors.grades.sh;
            break;
        case "s":
            color = colors.grades.s;
            break;
        case "a":
            color = colors.grades.a;
            break;
        case "b":
            color = colors.grades.b;
            break;
        case "c":
            color = colors.grades.c;
            break;
        case "d":
            color = colors.grades.d;
            break;
        default:
            color = colors.grades.f;
            break;
    }

    return <>
        <div class="px-4 py-1 flex items-center justify-center text-black rounded-full"
            style={{ backgroundColor: color }}>
            <div class="leading-none">
                {getGradeLetter(grade)}
            </div>
        </div>
    </>;
}

export default Grade;
