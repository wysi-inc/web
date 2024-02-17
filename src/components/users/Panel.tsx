type Props = {
    icon: JSX.Element;
    title: string;
    tooltip?: string;
    content: JSX.Element;
}

const Panel = (props: Props) => (
    <div class="min-h-28 shadow-lg rounded-lg bg-base-100 p-4 flex flex-col gap-4" id="scores-panel">
        <div class="flex flex-row items-center gap-2">
            <div class="tooltip" data-tip={props.tooltip}>
                {props.icon}
            </div>
            <div>
                {props.title}
            </div>
        </div>
        {props.content}
    </div>
);

export default Panel;
