function Link(p: {
    url?: string,
    children?: any,
    css?: string,
    role?: string,
    label?: string,
    tooltip?: string,
    id?: string
}) {
    return (
        <a id={p.id}
            href={p.url}
            hx-get={p.url}
            hx-push-url="true"
            hx-target="#main"
            hx-swap="innerHTML show:window:top"
            hx-indicator="#page-loading"
            data-tip={p.tooltip}
            role={p.role} aria-label={p.label}
            class={`${p.css || "hover:underline underline-offset-2"} ${p.tooltip ? `tooltip` : ""} cursor-pointer`}
        >
            {p.children}
        </a>
    );
}

export default Link;
