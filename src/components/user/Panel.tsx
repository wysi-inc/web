type Props = {
    code: string;
    title: string;
    icon: JSX.Element;
    tooltip?: string;
    url?: string;
    children: any;
};

const Panel = ({ children, icon, tooltip, title, code }: Props) => (
    <div class="scroll-mt-32 shadow-lg rounded-lg bg-base-100 p-4 flex flex-col gap-4" id={code}>
        <div class="flex flex-row items-center gap-2">
            <div class="tooltip" data-tip={tooltip}>
                {icon}
            </div>
            <div>{title}</div>
        </div>
        <div class="min-h-72">
            {children}
        </div>
    </div>
);

export default Panel;
