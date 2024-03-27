import { colors } from "@/src/resources/colors";

type Props = {
    grade: string;
}

const Grade = ({ grade }: Props) => {

    let letter;
    let color;

    switch (grade.toLowerCase()) {
        case "ssh":
        case "ss":
        case "xh":
            letter = "x";
            break;
        case "sh":
            letter = "s";
            break;
        default:
            letter = grade.toLowerCase();
            break;
    }

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
        <div class="w-8 text-center rounded-full" style={{
            backgroundColor: color,
            color: "#000"
        }}>
            {letter.toUpperCase()}
        </div>
    </>;
}

export default Grade;
