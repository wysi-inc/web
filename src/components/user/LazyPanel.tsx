import Panel from "./Panel";

type Props = {
    t: any,
    title: string,
    code: string,
    tooltip?: string,
    icon: JSX.Element,
    info?: string,
    url: string,
    body?: string,
    manual?: boolean,
};


const LazyPanel = (p: Props) => {
    return (<>
        <Panel t={p.t} icon={p.icon} title={p.title} tooltip={p.tooltip} code={p.code} info={p.info}>
            {p.manual ?
                <details class="group">
                    <summary class="cursor-pointer bg-neutral rounded-lg flex flex-row gap-4 items-center justify-between py-2 px-4"
                        hx-post={p.url} hx-trigger="click once" hx-swap="innerHTML" hx-vals={p.body} hx-indicator={`#loading-${p.code}`} hx-target={`#${p.code}_manual_lazy_panel`}>
                        <div class="flex flex-row gap-4 items-center">
                            <i class="group-open:rotate-180 transform ease-out duration-200 fa-solid fa-caret-down" />
                            <h6>{p.t.user.sections.expand}</h6>
                        </div>
                    </summary>
                    <div id={`${p.code}_manual_lazy_panel`} class="mt-4">
                        <span class="loading loading-spinner htmx-indicator mx-auto" id={`loading-${p.code}`} />
                    </div>
                </details> :
                <span hx-post={p.url} hx-trigger="revealed once" hx-swap="outerHTML"
                    hx-vals={p.body} hx-indicator={`#loading-${p.code}`}>
                    <span class="loading loading-spinner htmx-indicator" id={`loading-${p.code}`} />
                </span>
            }
        </Panel>
    </>);
}

export default LazyPanel;
