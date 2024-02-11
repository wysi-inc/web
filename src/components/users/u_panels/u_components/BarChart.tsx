type Props = {
    labels: string[];
    data: number[];
    colors: string[];
}

const BarChart = (props: Props) => {

    const total = props.data.reduce((a, b) => a + b, 0);

    return (
        <div class="flex flex-col gap-2">
            <div class="flex flex-row justify-around">
                {props.labels.map((label, i) => (
                    <div class="flex flex-col items-center">
                        <h4 style={{ color: props.colors[i] }}>{label}</h4>
                        <div>{props.data[i].toLocaleString()}</div>
                    </div>
                ))}
            </div>
            <div class="flex flex-row h-2 rounded-lg overflow-hidden">
                {props.data.map((d, i) => (
                    <div class="h-full" style={{
                        width: `${d / total * 100}%`,
                        backgroundColor: props.colors[i]
                    }} />
                ))}
            </div>
        </div>
    );
}

export default BarChart;
