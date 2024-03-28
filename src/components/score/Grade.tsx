import { getGradeColor, getGradeLetter } from "@/src/libs/web_utils";

type Props = {
    grade: string;
}

const Grade = ({ grade }: Props) => {
    return <>
        <div class="px-4 py-1 flex items-center justify-center text-black rounded-full"
            style={{ backgroundColor: getGradeColor(grade) }}>
            <div class="leading-none">
                {getGradeLetter(grade)}
            </div>
        </div>
    </>;
}

export default Grade;
