import Panel from "./Panel";

const LazyPanel = (p: {
    t: any,
    title: string,
    code: string,
    tooltip?: string,
    icon: JSX.Element,
    info?: string,
    url: string,
    body?: string,
    manual?: boolean,
}) => {
    return (<>
        <Panel t={p.t} icon={p.icon} title={p.title} tooltip={p.tooltip} code={p.code} info={p.info} manual={p.manual}>
            <span hx-post={p.url} hx-trigger="intersect once" hx-swap="outerHTML"
                hx-vals={p.body} hx-indicator={`#loading-${p.code}`}>
                <span class="loading loading-spinner htmx-indicator" id={`loading-${p.code}`} />
            </span>
        </Panel>
    </>);
}

export default LazyPanel;
