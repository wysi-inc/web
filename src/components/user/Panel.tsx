type Props = {
    title: string;
    icon: JSX.Element;
    tooltip?: string;
    url?: string;
    children: any;
};

const Panel = ({ children, icon, tooltip, title }: Props) => (
    <div class="min-h-28 shadow-lg rounded-lg bg-base-100 p-4 flex flex-col gap-4">
        <div class="flex flex-row items-center gap-2">
            <div class="tooltip" data-tip={tooltip}>
                {icon}
            </div>
            <div>{title}</div>
        </div>
        {children}
    </div>
);

export default Panel;
