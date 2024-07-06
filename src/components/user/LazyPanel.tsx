import Panel from "./Panel";

type Props = {
    title: string,
    code: string,
    tooltip?: string,
    icon: JSX.Element,
    info?: string,
    url: string,
    body?: string,
    manual?: boolean
};


const LazyPanel = (p: Props) => {
    return (<>
        <Panel icon={p.icon} title={p.title} tooltip={p.tooltip} code={p.code} info={p.info}>
            <output class="min-h-72 flex flex-row items-center justify-center grow" id={`lazy_panel_${p.code}`}>
                {p.manual ?
                    <button hx-post={p.url} hx-trigger="click" hx-swap="outerHTML" class="btn btn-primary"
                        hx-vals={p.body} hx-indicator={`#loading-${p.code}`} hx-target={`#lazy_panel_${p.code}`}>
                        <span class="loading loading-spinner htmx-indicator" id={`loading-${p.code}`} />
                        Load
                    </button> :
                    <span hx-post={p.url} hx-trigger="revealed" hx-swap="outerHTML"
                        hx-vals={p.body} hx-indicator={`#loading-${p.code}`} hx-target={`#lazy_panel_${p.code}`}>
                        <span class="loading loading-spinner htmx-indicator" id={`loading-${p.code}`} />
                    </span>
                }
            </output>
        </Panel>
    </>);
}

export default LazyPanel;
