type Props = {
    code: string;
    title: string;
    icon: JSX.Element;
    tooltip?: string;
    info?: string;
    url?: string;
    children: any;
};

const Panel = ({ children, icon, tooltip, title, code, info }: Props) => (
    <div class="scroll-mt-36 shadow-lg md:rounded-lg bg-base-100 p-4 flex flex-col gap-4" id={code}>
        <div class="flex flex-row items-center gap-2">
            <div class="tooltip tooltip-right" data-tip={tooltip}>
                {icon}
            </div>
            <div>{title}</div>
            {info ?
                <div class="ms-auto tooltip tooltip-left cursor-help" data-tip={info}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="min-h-72">
            {children}
        </div>
    </div>
);

export default Panel;
