import Panel from "./Panel";

const LazyPanel = (p: {
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
        <Panel icon={p.icon} title={p.title} tooltip={p.tooltip} code={p.code} info={p.info} manual={p.manual}>
            <span hx-post={p.url} hx-trigger="intersect once" hx-swap="outerHTML"
                hx-vals={p.body} hx-indicator={`#loading-${p.code}`} class="flex">
                <span class="htmx-indicator loading loading-spinner mx-auto" id={`loading-${p.code}`} />
            </span>
        </Panel>
    </>);
}

export default LazyPanel;
