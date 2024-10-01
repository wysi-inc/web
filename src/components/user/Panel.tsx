const Panel = (p: {
    code: string,
    title: string,
    icon: JSX.Element,
    tooltip?: string,
    info?: string,
    url?: string,
    children: any,
    manual?: boolean,
}) => (
    <section class="scroll-mt-36 shadow-lg rounded-lg bg-gradient-to-b from-transparent via-base-300 to-base-300 flex flex-col" id={p.code}>
        <div class="rounded-lg bg-base-100 flex flex-col p-4 gap-4">
            <header class="flex flex-row items-center gap-3">
                <div class="tooltip tooltip-right size-6 text-center" data-tip={p.tooltip}>
                    {p.icon}
                </div>
                <h2>{p.title}</h2>
                {p.info ?
                    <div class="ms-auto tooltip tooltip-left cursor-help" data-tip={p.info}>
                        <i class="fa-solid fa-circle-question" />
                    </div> : <></>
                }
            </header>
            <div id={`${p.code}_content`} class={p.manual ? "hidden" : ""}>{p.children}</div>
        </div>
        {p.manual ?
            <button class="cursor-pointer btn btn-ghost btn-sm btn-block flex flex-row gap-4"
                onclick={`
                if (document.getElementById('${`${p.code}_content`}').classList.toggle('hidden')) {
                    document.getElementById('${`${p.code}_text`}').innerText = 'Show';
                    document.getElementById('${`${p.code}_icon`}').classList.remove('rotate-180'); 
                } else { 
                    document.getElementById('${`${p.code}_text`}').innerText = 'Hide';
                    document.getElementById('${`${p.code}_icon`}').classList.add('rotate-180');
                };
                `}>
                <i id={`${p.code}_icon`} class={`${p.manual ? "" : "rotate-180"} transform ease-out duration-200 fa-solid fa-caret-down`} />
                <h6 id={`${p.code}_text`}>{p.manual ? "Show" : "Hide"}</h6>
            </button> : <></>
        }
    </section>
);

export default Panel;
