import Panel from "./Panel";

type Props = {
    title: string;
    code: string;
    tooltip?: string;
    icon: JSX.Element;
    info?: string;
    url: string;
    body?: object;
};


const LazyPanel = ({ title, code, tooltip, icon, info, url, body }: Props) =>
    <Panel icon={icon} title={title} tooltip={tooltip} code={code} info={info}>
        <span hx-post={url} hx-trigger="revealed" hx-swap="outerHTML"
            hx-vals={JSON.stringify(body)} hx-indicator={`#loading-${code}`}>
            <span class="loading loading-spinner htmx-indicator" id={`loading-${code}`} />
        </span>
    </Panel>

export default LazyPanel;
