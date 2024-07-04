type Props = {
    url: string,
    children: any,
    css?: string,
    role?: string,
    label?: string,
}

function Link({ url, css, role, label, children }: Props) {
    return <a
        href={url}
        // hx-get={url}
        // hx-push-url="true" hx-target="#main"
        // hx-swap="innerHTML show:window:top"
        // hx-indicator="#page-loading"
        class={`${css || "hover:underline underline-offset-2"} cursor-pointer `}
        role={role} aria-label={label}>
        {children}
    </a>
}

export default Link;
