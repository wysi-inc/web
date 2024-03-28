import { getGradeLetter } from "@/src/libs/web_utils";
import type { ColorCount } from "@/src/types/users";

const BarChart = ({ data }: { data: Map<string, ColorCount> }) => {

    const total = Array.from(data.values()).reduce((acc, val) => acc + val.count, 0);

    return (
        <div class="flex flex-col gap-2">
            <div class="flex flex-row justify-around">
                {Array.from(data.entries()).map(([label, count]) => (
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
                {Array.from(data.values()).map((d) => (
                    d.count === 0 ? null :
                        <div class="h-full" style={{
                            width: `${d.count / total * 100}%`,
                            backgroundColor: d.color
                        }} />
                ))}
            </div>
        </div>
    );
}

export default BarChart;
