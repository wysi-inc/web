import Panel from "./Panel";

type Props = {
    title: string;
    code: string;
    tooltip?: string;
    icon: JSX.Element;
    info?: string;
    url: string;
    body?: string;
};


const LazyPanel = (p: Props) => {
    return (<>
        <Panel icon={p.icon} title={p.title} tooltip={p.tooltip} code={p.code} info={p.info}>
            <span hx-post={p.url} hx-trigger="revealed" hx-swap="outerHTML"
                hx-vals={p.body} hx-indicator={`#loading-${p.code}`}>
                <span class="loading loading-spinner htmx-indicator" id={`loading-${p.code}`} />
            </span>
        </Panel>
    </>);
}

export default LazyPanel;
