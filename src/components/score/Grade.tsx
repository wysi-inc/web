import { getGradeColor, getGradeLetter } from "@/src/libs/web_utils";

const Grade = (p: { grade: string; size?: string; }) => {
    return <>
        <div class={`${p.size} flex items-center justify-center rounded-full px-4 py-1 leading-none text-black`}
            style={{ backgroundColor: getGradeColor(p.grade) }}>
            {getGradeLetter(p.grade)}
        </div>
    </>;
}

export default Grade;
