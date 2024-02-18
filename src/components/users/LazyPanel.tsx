import Panel from "./Panel";

type Props = {
    title: string;
    tooltip?: string;
    icon: JSX.Element;
    url: string;
    body?: object;
};


const LazyPanel = (props: Props) => {
    const body = JSON.stringify(props.body);
    console.log(body);
    return (
        <Panel icon={props.icon} title={props.title} tooltip={props.tooltip} children={
            <span hx-post={props.url} hx-trigger="revealed" hx-swap="outerHTML"
                hx-vals={body} hx-indicator={`#loading-${props.title.toLowerCase()}`}>
                <span class="loading loading-spinner" id={`loading-${props.title.toLowerCase()}`} />
            </span>
        } />
    );
}

export default LazyPanel;
