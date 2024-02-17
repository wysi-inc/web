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
        <Panel icon={props.icon} title={props.title} tooltip={props.tooltip} content={
            <span hx-post={props.url} hx-trigger="revealed" hx-swap="outerHTML"
                hx-vals={body} />
        } />
    );
}

export default LazyPanel;
