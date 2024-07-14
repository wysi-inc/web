type Props = {
    url: string,
    children: any,
    css?: string,
    role?: string,
    label?: string,
}

function Link(p: Props) {
    return <a
        href={p.url}
        // hx-get={p.url}
        // hx-push-url="true" hx-target="#main"
        // hx-swap="innerHTML show:window:top"
        // hx-indicator="#page-loading"
        class={`${p.css || "hover:underline underline-offset-2"} cursor-pointer `}
        role={p.role} aria-label={p.label}>
        {p.children}
    </a>
}

export default Link;
