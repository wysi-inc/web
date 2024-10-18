import { getGradeLetter } from "@/src/libs/web_utils";
import type { ColorCount } from "@/src/types/users";

function BarChart(p: {
    name: string,
    data: Map<string, ColorCount>,
    user?: {
        user_id: number,
        username: string,
        mode: number,
    }
}) {
    const total = Array.from(p.data.values()).reduce((acc, val) => acc + val.count, 0);
    return (<>
        {p.user ? <>
            <span id="total_grades_loading" class="loading loading-spinner loading-md hidden" />
            <button class="btn btn-square btn-ghost btn-sm" aria-label="get grades" onclick="getGrades(); this.classList.add('hidden')">
                <i class="fa-solid fa-magnifying-glass" />
            </button>
        </> : null
        }
        <div class="flex grow flex-col gap-1" id={p.name} data-user={JSON.stringify(p.user)}>
            <div class="flex flex-row flex-wrap justify-around gap-2">
                {Array.from(p.data.entries()).map(([label, count]) => (
                    count.count === 0 ? null : (
                        <div>
                            <div class="rounded-full px-4 text-center"
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
                    )
                ))}
            </div>
            <div class="flex h-2 flex-row overflow-hidden rounded-lg">
                {Array.from(p.data.values()).map((d) => (
                    d.count === 0 ? null :
                        <div class="h-full" style={{
                            width: `${d.count / total * 100}%`,
                            backgroundColor: d.color
                        }} />
                ))}
            </div>
        </div>
    </>);
}

export default BarChart;
