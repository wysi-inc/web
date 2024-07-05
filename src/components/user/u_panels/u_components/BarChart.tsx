import { getGradeLetter } from "@/src/libs/web_utils";
import type { ColorCount } from "@/src/types/users";

type Props = {
    name: string,
    data: Map<string, ColorCount>,
    user?: {
        user_id: number,
        username: string,
        mode: number,
    }
};

const BarChart = (p: Props) => {

    const total = Array.from(p.data.values()).reduce((acc, val) => acc + val.count, 0);

    return <>
        <div class="grow flex flex-col gap-1" id={p.name} data-user={JSON.stringify(p.user)}>
            <div class="flex flex-row flex-wrap gap-2 justify-around">
                {Array.from(p.data.entries()).map(([label, count]) => (
                    count.count === 0 ? null : <div>
                        <div class="px-4 text-center rounded-full"
                            style={{
                                backgroundColor: count.color,
                                color: "#000"
                            }}>
                            {getGradeLetter(label)}
                        </div>
                        <div class="text-center">
                            {count.count?.toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
            <div class="flex flex-row h-2 rounded-lg overflow-hidden">
                {Array.from(p.data.values()).map((d) => (
                    d.count === 0 ? null :
                        <div class="h-full" style={{
                            width: `${d.count / total * 100}%`,
                            backgroundColor: d.color
                        }} />
                ))}
            </div>
        </div>
        {p.user ?
            <button class="btn btn-secondary btn-sm size-8" aria-label="get grades" onclick="getGrades(); this.classList.add('hidden')">
                <i class="fa-solid fa-magnifying-glass" />
            </button>
            : <></>}
    </>
}

export default BarChart;
