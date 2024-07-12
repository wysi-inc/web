const Panel = (p: {
    t: any,
    code: string,
    title: string,
    icon: JSX.Element,
    tooltip?: string,
    info?: string,
    url?: string,
    children: any,
    manual?: boolean,
}) => (
    <section class="scroll-mt-36 shadow-lg md:rounded-lg bg-base-100 p-4 gap-4 flex flex-col" id={p.code}>
        <header class="flex flex-row items-center gap-2">
            <div class="tooltip tooltip-right" data-tip={p.tooltip}>
                {p.icon}
            </div>
            <h2>{p.title}</h2>
            {p.info ?
                <div class="ms-auto tooltip tooltip-left cursor-help" data-tip={p.info}>
                    <i class="fa-solid fa-circle-question" />
                </div> : <></>
            }
        </header>
        {p.manual ?
            <details class="group">
                <summary class="cursor-pointer bg-neutral rounded-lg flex flex-row gap-4 items-center justify-between py-2 px-4">
                    <div class="flex flex-row gap-4 items-center">
                        <i class="group-open:rotate-180 transform ease-out duration-200 fa-solid fa-caret-down" />
                        <h6>{p.t.user.sections.expand}</h6>
                    </div>
                </summary>
                <div class="mt-4">
                    {p.children}
                </div>
            </details> :
            <div>
                {p.children}
            </div>
        }
    </section>
);

export default Panel;
