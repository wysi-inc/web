import { getGradeColor, getGradeLetter } from "@/src/libs/web_utils";

type Props = {
    grade: string;
}

const Grade = ({ grade }: Props) => {
    return <>
        <div class="leading-none px-4 py-1 flex items-center justify-center text-black rounded-full"
            style={{ backgroundColor: getGradeColor(grade) }}>
            {getGradeLetter(grade)}
        </div>
    </>;
}

export default Grade;
