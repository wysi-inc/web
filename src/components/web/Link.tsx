function Link(p: {
    url: string,
    children: any,
    css?: string,
    role?: string,
    label?: string,
    tooltip?: string,
}) {
    return <a href={p.url}
        hx-get={p.url}
        hx-push-url="true" hx-target="#main"
        hx-swap="innerHTML show:window:top"
        hx-indicator="#page-loading" data-tip={p.tooltip}
        class={`cursor-pointer ${p.css || "hover:underline underline-offset-2"} ${p.tooltip ? `tooltip` : ""}`}
        role={p.role} aria-label={p.label}>
        {p.children}
    </a>
}

export default Link;
