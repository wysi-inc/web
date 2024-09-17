import { getGradeColor, getGradeLetter } from "@/src/libs/web_utils";

const Grade = (p: { grade: string; size?: string; }) => {
    return <>
        <div class={`${p.size} leading-none px-4 py-1 flex items-center justify-center text-black rounded-full`}
            style={{ backgroundColor: getGradeColor(p.grade) }}>
            {getGradeLetter(p.grade)}
        </div>
    </>;
}

export default Grade;
